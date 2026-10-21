#!/usr/bin/env python3
"""Local pastor-only WhatsApp receiver and exact-message publisher."""
import argparse
from datetime import date, datetime
import hashlib
import fcntl
import json
import os
from pathlib import Path
import re
import sqlite3
import sys
import signal
import subprocess
import time
import urllib.error
import urllib.request
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
RUNTIME = Path.home() / "Library/Application Support/DoxaPatriarchPen"
BRIDGE = RUNTIME / "bridge" if (RUNTIME / "bridge").exists() else ROOT / ".integrations/whatsapp-mcp/whatsapp-bridge"
DATABASE = BRIDGE / "store/messages.db"
BIBLE_BOOKS = (
    "Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|"
    "1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalm|Psalms|"
    "Proverbs|Ecclesiastes|Song of Solomon|Song of Songs|Isaiah|Jeremiah|Lamentations|"
    "Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|"
    "Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|"
    "2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|"
    "2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|"
    "1 John|2 John|3 John|Jude|Revelation|Gen|Exod|Lev|Num|Deut|Josh|Judg|1 Sam|2 Sam|"
    "1 Kgs|2 Kgs|1 Chr|2 Chr|Neh|Esth|Ps|Prov|Eccl|Isa|Jer|Lam|Ezek|Dan|Hos|Obad|"
    "Mic|Nah|Hab|Zeph|Hag|Zech|Mal|Matt|Mk|Lk|Jn|Rom|1 Cor|2 Cor|Gal|Eph|Phil|Col|"
    "1 Thess|2 Thess|1 Tim|2 Tim|Phlm|Heb|Jas|1 Pet|2 Pet|Rev"
)
BIBLE_REFERENCE = re.compile(
    r"\b(?:" + BIBLE_BOOKS.replace(" ", r"\s*") + r")\.?\s*\d{1,3}\s*:\s*\d{1,3}\b", re.IGNORECASE
)


def config():
    path = RUNTIME / ".env.whatsapp" if (RUNTIME / ".env.whatsapp").exists() else ROOT / ".env.whatsapp"
    if path.stat().st_mode & 0o077:
        raise ValueError("The WhatsApp configuration must have owner-only permissions (600).")
    values = {}
    for line in path.read_text().splitlines():
        key, separator, value = line.partition("=")
        if separator and key in ("DOXA_PASTOR_PHONE", "DOXA_BRIDGE_TOKEN"):
            values[key] = value.strip()
    if not re.fullmatch(r"\d{10,15}", values.get("DOXA_PASTOR_PHONE", "")):
        raise ValueError("Configure the pastor's international phone number first.")
    if len(values.get("DOXA_BRIDGE_TOKEN", "")) < 32:
        raise ValueError("Configure a local bridge authentication token first.")
    return values


def bridge_request(path, payload=None):
    values = config()
    req = urllib.request.Request(
        "http://127.0.0.1:17863/api/" + path,
        data=json.dumps(payload).encode() if payload is not None else None,
        headers={"Authorization": "Bearer " + values["DOXA_BRIDGE_TOKEN"], "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=45) as response:
        return json.load(response)


def status():
    try:
        return bridge_request("status")
    except urllib.error.URLError:
        return {"connected": False, "loggedIn": False, "readOnly": True,
                "pairingQRAvailable": (BRIDGE / "store/login-qr.png").exists()}


def is_devotional(content):
    """A strict structural candidate check, not an invitation to rewrite text."""
    lines = [line.strip().strip("*_ ") for line in content.splitlines() if line.strip()]
    if len(lines) < 5:
        return False
    if not re.fullmatch(r"good\s+morning[,\s]+blessed\s+family[.!]?", lines[0], re.IGNORECASE):
        return False
    if not 3 <= len(lines[1]) <= 250 or lines[1].startswith(('“', '"', '‘')):
        return False
    for index in range(2, len(lines) - 1):
        reference = BIBLE_REFERENCE.search(lines[index])
        if not reference:
            continue
        scripture_before = index > 2 or len(lines[index][:reference.start()].strip()) >= 20
        reflection_after = any(len(line) >= 10 for line in lines[index + 1:])
        if scripture_before and reflection_after:
            return True
    return False


def messages(day, limit=50):
    date.fromisoformat(day)
    if not DATABASE.exists():
        return []
    phone = config()["DOXA_PASTOR_PHONE"]
    with sqlite3.connect(DATABASE.as_uri() + "?mode=ro", uri=True) as db:
        db.row_factory = sqlite3.Row
        rows = db.execute(
            "SELECT id,content,timestamp,media_type,filename FROM messages "
            "WHERE chat_jid=? AND sender=? AND is_from_me=0 "
            "AND datetime(timestamp)>=datetime(?) AND datetime(timestamp)<=datetime(?) "
            "AND (content<>'' OR media_type<>'') ORDER BY timestamp DESC LIMIT ?",
            (phone + "@s.whatsapp.net", phone, day + "T03:00:00+00:00", day + "T06:00:59+00:00", 500),
        ).fetchall()
    result = []
    for row in rows:
        item = dict(row)
        if is_devotional(item["content"]):
            item["sha256"] = hashlib.sha256(item["content"].encode()).hexdigest()
            result.append(item)
    return result[:min(max(int(limit), 1), 50)]


def download(message_id):
    phone = config()["DOXA_PASTOR_PHONE"]
    return bridge_request("download", {"message_id": message_id, "chat_jid": phone + "@s.whatsapp.net"})


def publish_message(message_id, dry_run=False):
    # The scheduled agent selects a devotional; this function fetches its exact
    # text again from the allowlisted archive, never accepting agent-written text.
    import publish_daily_message as publisher
    today = datetime.now(ZoneInfo("Africa/Accra")).date().isoformat()
    candidates = messages(today)
    if len({item["sha256"] for item in candidates}) > 1:
        raise ValueError("Multiple different morning devotionals found; manual selection is required before publication.")
    selected = [item for item in candidates if item["id"] == message_id]
    if len(selected) != 1:
        raise ValueError("Message does not match the pastor’s morning devotional pattern for today.")
    message = selected[0]["content"]
    if not BIBLE_REFERENCE.search(message):
        raise ValueError("No Bible reference found; inspect the message before publishing.")
    connection = status()
    if not connection.get("loggedIn") or not connection.get("connected"):
        raise ValueError("WhatsApp is not linked and connected; keep the current website message.")
    try:
        result = publisher.publish(publisher.read_token(), message, today, dry_run)
    except publisher.MessageAlreadyCurrent:
        return {"status": "already-current", "date": today, "verified": True}
    if result["status"] == "published":
        receipt = ROOT / ".daily-messages" / (today + "-whatsapp-source.json")
        receipt.write_text(json.dumps({"message_id": message_id, "sha256": selected[0]["sha256"]}) + "\n")
    return result


def start():
    values = config()
    binary = BRIDGE / "whatsapp-receiver"
    if not binary.exists():
        raise ValueError("Build the local WhatsApp receiver before starting it.")
    os.umask(0o077)
    with (BRIDGE / "receiver.lock").open("a") as lock:
        try:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            raise ValueError("The WhatsApp receiver is already running.")
        child = None
        stopping = False

        def stop(signum, frame):
            nonlocal stopping
            stopping = True
            if child is not None and child.poll() is None:
                child.terminate()

        signal.signal(signal.SIGINT, stop)
        signal.signal(signal.SIGTERM, stop)
        try:
            while not stopping:
                child = subprocess.Popen([str(binary)], cwd=BRIDGE, env={**os.environ, **values})
                child.wait()
                if stopping:
                    break
                print("Receiver ended; retrying in 30 seconds.", flush=True)
                # Short sleeps allow a prompt shutdown while waiting to retry.
                for _ in range(30):
                    if stopping:
                        break
                    time.sleep(1)
        finally:
            if child is not None and child.poll() is None:
                child.terminate()
                try:
                    child.wait(timeout=10)
                except subprocess.TimeoutExpired:
                    child.kill()
                    child.wait()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("action", choices=["start", "status", "messages", "publish"])
    parser.add_argument("--date", default=datetime.now(ZoneInfo("Africa/Accra")).date().isoformat())
    parser.add_argument("--message-id")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    if args.action == "start":
        start()
    elif args.action == "status":
        print(json.dumps(status()))
    elif args.action == "messages":
        print(json.dumps(messages(args.date), ensure_ascii=False))
    else:
        if not args.message_id:
            parser.error("--message-id is required")
        print(json.dumps(publish_message(args.message_id, args.dry_run)))


if __name__ == "__main__":
    try:
        main()
    except (OSError, ValueError, sqlite3.Error) as error:
        print(str(error), file=sys.stderr)
        sys.exit(1)
