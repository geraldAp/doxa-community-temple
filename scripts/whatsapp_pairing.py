"""Temporary loopback-only page that refreshes the WhatsApp linking QR."""
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlsplit
import json
import secrets
import sys
import whatsapp_bridge as bridge

nonce = secrets.token_urlsafe(24)
page = '''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Link WhatsApp for Doxa</title><style>body{font:18px/1.5 Arial,sans-serif;background:#f8f6f1;color:#17213d;margin:0;padding:32px}main{max-width:560px;margin:40px auto}h1{font-size:32px;line-height:1.1}img{display:block;width:min(100%,360px);height:auto;background:white}p{max-width:48ch}a:focus-visible{outline:3px solid #b52b37;outline-offset:4px}</style><main><h1>Link WhatsApp for Doxa</h1><p>On your phone, open WhatsApp → Settings → Linked devices → Link a device, then scan this QR code.</p><p id="status" role="status">Waiting for a current QR code…</p><img id="qr" alt="WhatsApp pairing QR code"><p>This local receiver saves only your Head Pastor’s incoming chat. WhatsApp session credentials remain on this Mac. Sending is disabled.</p></main><script>const image=document.getElementById('qr'),label=document.getElementById('status');function setStatus(text){if(label.textContent!==text)label.textContent=text}async function refresh(){try{const s=await(await fetch(location.pathname+'/state',{cache:'no-store'})).json();if(s.connected&&s.loggedIn){setStatus('WhatsApp is linked. You can return to the chat.');image.hidden=true;clearInterval(timer)}else if(s.pairingQRAvailable){setStatus('Ready to scan. This QR refreshes automatically.');image.src=location.pathname+'/qr.png?t='+Date.now();image.hidden=false}else{setStatus('Waiting for the receiver. If pairing expires, return to the chat for a fresh session.');image.hidden=true}}catch{setStatus('The pairing session has ended. Return to the chat.')}}const timer=setInterval(refresh,2000);refresh();</script></html>'''


class PairingHandler(BaseHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def do_GET(self):
        path = urlsplit(self.path).path
        prefix = "/" + nonce
        if self.headers.get("Host") != "127.0.0.1:17864" or self.headers.get("Origin"):
            self.send_error(403)
            return
        if path == prefix:
            content, kind = page.encode(), "text/html; charset=utf-8"
        elif path == prefix + "/state":
            content, kind = json.dumps(bridge.status()).encode(), "application/json"
        elif path == prefix + "/qr.png":
            qr = bridge.BRIDGE / "store/login-qr.png"
            if not qr.exists():
                self.send_error(404)
                return
            content, kind = qr.read_bytes(), "image/png"
        else:
            self.send_error(404)
            return
        self.send_response(200)
        self.send_header("Content-Type", kind)
        self.send_header("Cache-Control", "no-store")
        self.send_header("Referrer-Policy", "no-referrer")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        self.wfile.write(content)


if __name__ == "__main__":
    print("http://127.0.0.1:17864/" + nonce, flush=True)
    HTTPServer(("127.0.0.1", 17864), PairingHandler).serve_forever()
