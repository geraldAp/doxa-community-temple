"""Install a user-scoped receiver in macOS Application Support, outside Desktop."""
import os
from pathlib import Path
import plistlib
import shutil
import subprocess
from whatsapp_bridge import ROOT, RUNTIME, config

LABEL = "com.doxa.patriarch-pen.receiver"


def main():
    values = config()
    source = ROOT / ".integrations/whatsapp-mcp/whatsapp-bridge"
    if not (source / "whatsapp-receiver").exists():
        raise ValueError("Build the receiver first.")
    folder = Path.home() / "Library/LaunchAgents"
    folder.mkdir(parents=True, exist_ok=True)
    path = folder / (LABEL + ".plist")
    domain = "gui/" + str(os.getuid())
    if path.exists():
        existing = plistlib.loads(path.read_bytes())
        args = existing.get("ProgramArguments", [])
        known = {str(ROOT / "scripts/whatsapp_bridge.py"), str(RUNTIME / "scripts/whatsapp_bridge.py")}
        if existing.get("Label") != LABEL or len(args) != 3 or args[1] not in known:
            raise ValueError("Another configuration uses this service name; inspect it first.")
        subprocess.run(["launchctl", "bootout", domain + "/" + LABEL], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    os.umask(0o077)
    for directory in [RUNTIME, RUNTIME / "bridge", RUNTIME / "scripts"]:
        directory.mkdir(parents=True, exist_ok=True)
        directory.chmod(0o700)
    credential = RUNTIME / ".env.whatsapp"
    credential.write_text("".join(key + "=" + value + "\n" for key, value in values.items()))
    credential.chmod(0o600)
    shutil.copy2(source / "whatsapp-receiver", RUNTIME / "bridge/whatsapp-receiver")
    shutil.copy2(ROOT / "scripts/whatsapp_bridge.py", RUNTIME / "scripts/whatsapp_bridge.py")
    if not (RUNTIME / "bridge/store").exists() and (source / "store").exists():
        shutil.copytree(source / "store", RUNTIME / "bridge/store")
        (RUNTIME / "bridge/store/login-qr.png").unlink(missing_ok=True)
    settings = {
        "Label": LABEL,
        "ProgramArguments": ["/usr/bin/python3", str(RUNTIME / "scripts/whatsapp_bridge.py"), "start"],
        "WorkingDirectory": str(RUNTIME),
        "EnvironmentVariables": {"PYTHONPYCACHEPREFIX": str(RUNTIME / "python-cache")},
        "RunAtLoad": True,
        "KeepAlive": True,
        "ThrottleInterval": 30,
        "ProcessType": "Background",
        "Umask": 63,
        "StandardOutPath": str(RUNTIME / "receiver.log"),
        "StandardErrorPath": str(RUNTIME / "receiver.log"),
    }
    path.write_bytes(plistlib.dumps(settings))
    path.chmod(0o600)
    subprocess.run(["launchctl", "bootstrap", domain, str(path)], check=True)
    print("Background receiver installed in Application Support for this Mac user.")


if __name__ == "__main__":
    main()
