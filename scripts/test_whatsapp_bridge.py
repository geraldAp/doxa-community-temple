"""Receiver selection and exact-publication safeguards; no WhatsApp/Sanity calls."""
from datetime import datetime
from pathlib import Path
import sqlite3
from tempfile import TemporaryDirectory
import unittest
from unittest.mock import patch
from zoneinfo import ZoneInfo
import whatsapp_bridge as bridge
import publish_daily_message as publisher


class WhatsAppChecks(unittest.TestCase):
    def setUp(self):
        self.temp = TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.database = Path(self.temp.name) / "messages.db"
        self.phone = "233200000001"
        self.today = datetime.now(ZoneInfo("Africa/Accra")).date().isoformat()
        self.text = 'Good morning Blessed family. \n\nFaith and hope.\n\n“For God so loved the world, that he gave his only begotten Son.”\nJohn 3:16 KJV\n\n  Walk in faith and hope today. Amen. '
        with sqlite3.connect(self.database) as db:
            db.execute("CREATE TABLE messages (id,chat_jid,sender,content,timestamp,is_from_me,media_type,filename)")
            for mid, chat, sender, from_me, day, text in [
                ("devotional", self.phone, self.phone, 0, self.today, self.text),
                ("wrong-sender", self.phone, "233200000002", 0, self.today, self.text),
                ("wrong-chat", "233200000002", self.phone, 0, self.today, self.text),
                ("outgoing", self.phone, self.phone, 1, self.today, self.text),
                ("old", self.phone, self.phone, 0, "2020-01-01", self.text),
                ("conversation", self.phone, self.phone, 0, self.today, "Can we add the crest?"),
            ]:
                db.execute("INSERT INTO messages VALUES (?,?,?,?,?,?,?,?)", (mid,chat+'@s.whatsapp.net',sender,text,day+' 05:00:00+00:00',from_me,'',''))
        self.addCleanup(patch.stopall)
        patch.object(bridge, "DATABASE", self.database).start()
        patch.object(bridge, "config", return_value={"DOXA_PASTOR_PHONE": self.phone}).start()

    def test_only_incoming_pastor_messages_from_selected_day(self):
        self.assertEqual({r['id'] for r in bridge.messages(self.today)}, {"devotional"})

    def test_exact_source_is_passed_to_publisher(self):
        with patch.object(bridge, "status", return_value={"loggedIn":True,"connected":True}), patch.object(publisher,"read_token",return_value="test"), patch.object(publisher,"publish",return_value={"status":"dry-run"}) as publish:
            bridge.publish_message("devotional",dry_run=True)
        self.assertEqual(publish.call_args.args[1], self.text)

    def test_giant_scripture_with_short_reflection_is_accepted(self):
        long_message = self.text.replace('“For God so loved the world, that he gave his only begotten Son.”', '“' + ('A long Bible quotation. ' * 1000) + '”')
        self.assertTrue(bridge.is_devotional(long_message))

    def test_structure_requires_greeting_title_scripture_and_reflection(self):
        for content in ["Good morning Daddy. John 3:16. Can we change the logo?", self.text.replace("Good morning Blessed family.", "Hello Gerald."), self.text.split("John 3:16")[0], self.text.replace("John 3:16", "Wednesday 3:16")]:
            self.assertFalse(bridge.is_devotional(content))

    def test_outside_morning_window_is_excluded(self):
        with sqlite3.connect(self.database) as db:
            for mid, clock in [("too-early", "02:59:59"), ("too-late", "06:01:00")]:
                db.execute("INSERT INTO messages VALUES (?,?,?,?,?,?,?,?)", (mid,self.phone+'@s.whatsapp.net',self.phone,self.text,self.today+' '+clock+'+00:00',0,'',''))
        self.assertEqual({r['id'] for r in bridge.messages(self.today)}, {"devotional"})

    def test_multiple_distinct_devotionals_require_manual_review(self):
        with sqlite3.connect(self.database) as db:
            db.execute("INSERT INTO messages VALUES (?,?,?,?,?,?,?,?)", ("second-devotional",self.phone+'@s.whatsapp.net',self.phone,self.text.replace("Faith and hope.","Obedience and faith."),self.today+' 05:30:00+00:00',0,'',''))
        with patch.object(publisher, "publish") as publish:
            with self.assertRaisesRegex(ValueError, "Multiple different"):
                bridge.publish_message("devotional")
        publish.assert_not_called()

    def test_exact_morning_boundaries_are_allowed(self):
        with sqlite3.connect(self.database) as db:
            for mid, clock in [("window-start", "03:00:00"), ("window-end", "06:00:59")]:
                db.execute("INSERT INTO messages VALUES (?,?,?,?,?,?,?,?)", (mid,self.phone+'@s.whatsapp.net',self.phone,self.text,self.today+' '+clock+'+00:00',0,'',''))
        self.assertEqual({r['id'] for r in bridge.messages(self.today)}, {"devotional", "window-start", "window-end"})

    def test_non_devotional_cannot_publish(self):
        with patch.object(publisher,"publish") as publish:
            with self.assertRaises(ValueError):
                bridge.publish_message("conversation")
        publish.assert_not_called()

    def test_other_contact_or_old_message_cannot_publish(self):
        for mid in ["wrong-chat","wrong-sender","outgoing","old"]:
            with self.assertRaises(ValueError): bridge.publish_message(mid)

    def test_offline_receiver_cannot_publish(self):
        with patch.object(bridge,"status",return_value={"loggedIn":True,"connected":False}), patch.object(publisher,"publish") as publish:
            with self.assertRaises(ValueError): bridge.publish_message("devotional")
        publish.assert_not_called()


if __name__ == "__main__":
    unittest.main()
