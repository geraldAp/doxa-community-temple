#!/usr/bin/env python3
"""Publish a daily message without exposing a token to command arguments or logs."""
import argparse
from datetime import datetime
import json
import os
from pathlib import Path
import sys
import urllib.error
import urllib.parse
import urllib.request
from zoneinfo import ZoneInfo

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://e9vdw5cx.api.sanity.io/v2025-01-27/data/"
DOCUMENT_ID = "e12cc04b-e1b1-44e9-8947-27bae6252a06"


def read_token():
    token = os.environ.get("SANITY_WRITE_TOKEN", "").strip()
    if not token:
        path = ROOT / ".env.daily-message"
        if path.stat().st_mode & 0o077:
            raise ValueError("The local credential file must have permissions 600.")
        for line in path.read_text().splitlines():
            if line.startswith("SANITY_WRITE_TOKEN="):
                token = line.partition("=")[2].strip()
    if not token:
        raise ValueError("SANITY_WRITE_TOKEN is not configured.")
    return token


def request(path, token, payload=None):
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(
        BASE + path,
        data=data,
        headers={"Authorization": "Bearer " + token, "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.load(response)


def current(token):
    query = '*[_id == $id][0]{_id,_rev,dailyMessage,dailyMessageDate}'
    path = "query/production?" + urllib.parse.urlencode(
        {"query": query, "$id": json.dumps(DOCUMENT_ID), "perspective": "published"}
    )
    doc = request(path, token).get("result")
    if not doc or doc.get("_id") != DOCUMENT_ID:
        raise ValueError("Expected home document was not found; no write performed.")
    return doc


def publish(token, message, date, dry_run=False):
    today = datetime.now(ZoneInfo("Africa/Accra")).date().isoformat()
    if date != today:
        raise ValueError("Only today's message in Africa/Accra may be published.")
    if not 50 <= len(message.split()) <= 800:
        raise ValueError("Expected a complete devotional of 50–800 words.")
    doc = current(token)
    published_date = doc.get("dailyMessageDate") or ""
    if not isinstance(published_date, str):
        raise ValueError("The existing message date is invalid; inspect Sanity before publishing.")
    if published_date >= date:
        return {"status": "already-published", "date": date}
    if message.strip() == str(doc.get("dailyMessage", "")).strip():
        raise ValueError("The proposed message repeats the current message.")
    if dry_run:
        return {"status": "dry-run", "date": date, "words": len(message.split())}
    archive = ROOT / ".daily-messages"
    archive.mkdir(mode=0o700, exist_ok=True)
    # Preserve the previous published content before making a revision-guarded patch.
    previous = archive / (date + "-previous.json")
    if not previous.exists():
        previous.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n")
    request("mutate/production?visibility=sync", token, {
        "mutations": [{"patch": {
            "id": DOCUMENT_ID,
            "ifRevisionID": doc["_rev"],
            "set": {"dailyMessage": message, "dailyMessageDate": date},
        }}],
    })
    verified = current(token)
    if verified.get("dailyMessage") != message or verified.get("dailyMessageDate") != date:
        raise ValueError("Post-publication verification failed; inspect Sanity before retrying.")
    (archive / (date + "-published.txt")).write_text(message + "\n")
    return {"status": "published", "date": date, "verified": True}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Read the current published message; no writes.")
    parser.add_argument("--message-file", type=Path)
    parser.add_argument("--date", help="Today's date in Africa/Accra, YYYY-MM-DD")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    token = read_token()
    if args.check:
        doc = current(token)
        print(json.dumps({"date": doc.get("dailyMessageDate"), "message": doc.get("dailyMessage")}, ensure_ascii=False))
        return
    if not args.message_file or not args.date:
        parser.error("--message-file and --date are required for publication")
    result = publish(token, args.message_file.read_text().strip(), args.date, args.dry_run)
    print(json.dumps(result))


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as error:
        print("Sanity request failed: HTTP " + str(error.code) + ". No automatic retry.", file=sys.stderr)
        sys.exit(1)
    except (OSError, ValueError) as error:
        print(str(error), file=sys.stderr)
        sys.exit(1)
