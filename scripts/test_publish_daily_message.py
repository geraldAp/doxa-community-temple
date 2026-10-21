"""Checks for the publisher's write safeguards, using an isolated fake Sanity API."""
from datetime import datetime, timedelta
from pathlib import Path
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import patch
from zoneinfo import ZoneInfo

import publish_daily_message as publisher


class PublisherChecks(unittest.TestCase):
    def setUp(self):
        self.today = datetime.now(ZoneInfo("Africa/Accra")).date().isoformat()
        self.message = "A complete devotional message of hope and faith. " * 10
        self.doc = {"_id": publisher.DOCUMENT_ID, "_rev": "revision-before", "dailyMessage": "Previous message", "dailyMessageDate": None}

    def test_repeat_run_does_not_mutate(self):
        self.doc["dailyMessageDate"] = self.today
        with patch.object(publisher, "current", return_value=self.doc), patch.object(publisher, "request") as request:
            result = publisher.publish("test-token", self.message, self.today)
        self.assertEqual(result["status"], "already-published")
        request.assert_not_called()

    def test_wrong_date_and_incomplete_text_are_rejected(self):
        tomorrow = (datetime.now(ZoneInfo("Africa/Accra")) + timedelta(days=1)).date().isoformat()
        with self.assertRaises(ValueError):
            publisher.publish("test-token", self.message, tomorrow)
        with self.assertRaises(ValueError):
            publisher.publish("test-token", "An incomplete message", self.today)

    def test_dry_run_does_not_mutate(self):
        with patch.object(publisher, "current", return_value=self.doc), patch.object(publisher, "request") as request:
            result = publisher.publish("test-token", self.message, self.today, dry_run=True)
        self.assertEqual(result["status"], "dry-run")
        request.assert_not_called()

    def test_publication_is_revision_guarded_and_backed_up(self):
        verified = {**self.doc, "dailyMessage": self.message, "dailyMessageDate": self.today}
        with TemporaryDirectory() as directory, patch.object(publisher, "ROOT", Path(directory)), patch.object(publisher, "current", side_effect=[self.doc, verified]), patch.object(publisher, "request") as request:
            result = publisher.publish("test-token", self.message, self.today)
            body = request.call_args.args[2]
            changes = body["mutations"][0]["patch"]
            self.assertEqual(changes["ifRevisionID"], "revision-before")
            self.assertEqual(set(changes["set"]), {"dailyMessage", "dailyMessageDate"})
            self.assertEqual(result["status"], "published")
            self.assertTrue((Path(directory) / ".daily-messages" / (self.today + "-previous.json")).exists())

    def test_long_scripture_is_allowed_without_truncation(self):
        long_message = "A long scripture passage. " * 1500
        with patch.object(publisher, "current", return_value=self.doc), patch.object(publisher, "request") as request:
            result = publisher.publish("test-token", long_message, self.today, dry_run=True)
        self.assertEqual(result["words"], len(long_message.split()))
        request.assert_not_called()

    def test_repeated_message_is_rejected(self):
        self.doc["dailyMessage"] = self.message
        with patch.object(publisher, "current", return_value=self.doc), patch.object(publisher, "request") as request:
            with self.assertRaises(ValueError):
                publisher.publish("test-token", self.message, self.today)
        request.assert_not_called()


if __name__ == "__main__":
    unittest.main()
