#!/usr/bin/env python3
"""Local pastor-only WhatsApp receiver and exact-message publisher."""
import argparse
from datetime import date, datetime
import hashlib
import json
import os
from pathlib import Path
import re
import sqlite3
import sys
import urllib.error
import urllib.request
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
BRIDGE = ROOT / ".integrations/whatsapp-mcp/whatsapp-bridge"
DATABASE = BRIDGE / "store/messages.db"
BIBLE_REFERENCE = re.compile(r"\b(?:[1-3]\s*)?[A-Za-z]+(?:\s+[A-Za-z]+)?\s+\d{1,3}:\d{1,3}\b")


def config():
    path = ROOT / ".env.whatsapp"
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


def messages(day, limit=50):
    date.fromisoformat(day)
    if not DATABASE.exists():
        return []
    phone = config()["DOXA_PASTOR_PHONE"]
    with sqlite3.connect(DATABASE.as_uri() + "?mode=ro", uri=True) as db:
        db.row_factory = sqlite3.Row
        rows = db.execute(
            "SELECT id,content,timestamp,media_type,filename FROM messages "
            "WHERE chat_jid=? AND sender=? AND is_from_me=0 AND substr(timestamp,1,10)=? "
            "AND (content<>'' OR media_type<>'') ORDER BY timestamp DESC LIMIT ?",
            (phone + "@s.whatsapp.net", phone, day, min(max(int(limit), 1), 50)),
        ).fetchall()
    result = []
    for row in rows:
        item = dict(row)
        item["sha256"] = hashlib.sha256(item["content"].encode()).hexdigest()
        result.append(item)
    return result


def download(message_id):
    phone = config()["DOXA_PASTOR_PHONE"]
    return bridge_request("download", {"message_id": message_id, "chat_jid": phone + "@s.whatsapp.net"})


def publish_message(message_id, dry_run=False):
    # The scheduled agent selects a devotional; this function fetches its exact
    # text again from the allowlisted archive, never accepting agent-written text.
    import publish_daily_message as publisher
    today = datetime.now(ZoneInfo("Africa/Accra")).date().isoformat()
    selected = [item for item in messages(today) if item["id"] == message_id]
    if len(selected) != 1:
        raise ValueError("Message is not an incoming pastor message from today.")
    message = selected[0]["content"]
    if not BIBLE_REFERENCE.search(message):
        raise ValueError("No Bible reference found; inspect the message before publishing.")
    connection = status()
    if not connection.get("loggedIn") or not connection.get("connected"):
        raise ValueError("WhatsApp is not linked and connected; keep the current website message.")
    result = publisher.publish(publisher.read_token(), message, today, dry_run)
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
    os.chdir(BRIDGE)
    os.execve(str(binary), [str(binary)], {**os.environ, **values})


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
