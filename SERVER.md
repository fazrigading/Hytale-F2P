# 🎮 Hytale F2P Server Guide

Play with friends online! This guide covers both easy in-game hosting and advanced dedicated server setup.

### **DOWNLOAD SERVER FILES (JAR/RAR/SCRIPTS) HERE: https://discord.gg/MEyWUxt77m** 

**Table of Contents**
  
* [A. Host your Singleplayer World](SERVER.md#1-host-your-singleplayer-world-to-your-friends-online-play-feature)
  * [1. Using In-Game Invite Code / Online Play Feature]()
    * [Common Issues (UPnP/NAT/STUN) on Online Play](SERVER.md#common-issues-upnpnatstun-on-online-play)
  * [2. Using Playit.gg \[Recommended\]]()
  * [3. Using Radmin VPN]()
* [B. Dedicated Server]
  * [1. ] 
---

### "Server" Term and Definiton

"HytaleServer.jar", which called as "Server", functions as the place of authentication of the client that supposed to go to Hytale Official Authentication System but we managed our way to redirect it on our service (sanasol.ws), handling approximately thousands of users to play this game for free to worldwide players.

Kindly support us via [our Buy Me a Coffee link](https://buymeacoffee.com/hf2p) if you think our launcher took a big part of developing this Hytale community for the love of the game itself. 
**We will always advertise, always pushing, and always asking, to every users of this launcher to purchase the original game to help the official development of Hytale**. 

### Server Directory Location

Here are the directory locations of Server folder if you have installed 
- **Windows:** `%localappdata%\HytaleF2P\release\package\game\latest\Server`
- **macOS:** `~/Library/Application Support/HytaleF2P/release/package/game/latest/Server`
- **Linux:** `~/.hytalef2p/release/package/game/latest/Server`

> [!NOTE]
> This location only exists if the user installed the game using our launcher. The `Server` folder needed to auth the HytaleClient to play Hytale online
> (for now; we planned to add offline mode in later version of our launcher).

> [!IMPORTANT]
> Hosting a dedicated Hytale server will not need the exact similar tree. You can put it anywhere, as long as the directory has `Assets.zip` which
> can be acquired from our launcher via our `HytaleServer.rar` server file (which contains patched `HytaleServer.jar`, `Assets.zip`, and `run_server` scripts in `.sh & .bat`.

---

# Host

## 1 - Host your Singleplayer World to your friends (Online Play Feature)

The easiest way to play with friends - no manual server setup required!
*The game automatically handles networking using UPnP/STUN/NAT traversal.*

**For Online Play to work, you need:**
- **UPnP enabled** on your router (most routers have this on by default)
- **Public IP address** from your ISP (not behind CGNAT)

> [!TIP]
> Hoster need to make sure that the router can use UPnP: read router docs, wiki, or watch Youtube tutorials.
>
> If you encounter any problem, check Common Issues section below

1. Press **Worlds** on the Main Menu.
2. Select which world you want to play with your friend.
3. Once you get in the world, press **ESC**/Pause the game.
4. Press **Online Play** in the Pause Menu.
5. Set option "Allow Other Players to Join" from OFF to **ON**. You can set Password if you want.
6. Press **Save**, the Invite Code will appear.
7. Press **Copy to Clipboard** and **Share the Invite Code** to your friends!
8. Friends: Press **Servers** in the Main Menu > Press **Join via Code** > Paste the Code > Join.

> [!WARNING]
> If other players can't join the Hoster with error: `Failed to connect to any available address. The host may be offline or behind a strict firewall.`
> 
> **AND ALSO** the Hoster "Online Play" menu shows `Connected to STUN - NAT Type: Restricted (No UPnP)`,
>
> this means the Online Play is **unavailable** on the Hoster machine, and it is neccessary to use services to host your world. **We recommend Playit.gg!**


### Common Issues (UPnP/NAT/STUN) on Online Play
<details><summary><b>1) "NAT Type: Carrier-Grade NAT (CGNAT)" Warning</b></summary>

If you see this message:
```
Connected via UPnP
NAT Type: Carrier-Grade NAT (CGNAT)
Warning: Your network configuration may prevent other players from connecting.
```

**What this means:** Your ISP doesn't give you a public IP address. Multiple customers share one public IP, which blocks incoming connections.

**Solutions:**
1. **Contact your ISP** - Request a public/static IP address (may cost extra)
2. **Use a VPN with port forwarding** - Services like Mullvad, PIA, or AirVPN offer this
3. **Use Playit.gg / Tailscale / Radmin VPN** - Create a virtual LAN with friends (see below)
4. **Have a friend with public IP host instead**
</details>

<details><summary><b>2) "UPnP Failed" or "Port Mapping Failed" Warning</b></summary>
**Check your router:**
1. Log into router admin panel (usually `192.168.1.1` or `192.168.0.1`)
2. Find UPnP settings (often under "Advanced" or "NAT")
3. Enable UPnP if disabled
4. Restart your router

**If UPnP isn't available:**
- Manually forward **port 5520 UDP** to your computer's local IP
- See "Port Forwarding" or "Workarounds or NAT/CGNAT" sections below
</details>

<details><summary><b>3) "Strict NAT" or "Symmetric NAT" Warning</b></summary>
Some routers have restrictive NAT that blocks peer connections.

**Try:**
1. Enable "NAT Passthrough" or "NAT Filtering: Open" in router settings
2. Put your device in router's DMZ (temporary test only)
3. Use Playit.gg / Tailscale / Radmin VPN as workaround
</details>

### Workarounds for NAT/CGNAT Issues

#### Option 1: Playit.gg (Recommended) ✔️

Free tunneling service - only the host needs to install it:

1. Go to https://playit.gg/login and **Log In** with your existing account, **Create Account** if you don't have one
2. Press "Add a tunnel" > Select `UDP` > Tunnel description of `Hytale Server` > Port count `1` > and Local Port `5520`
3. Press **Start the tunnel** (or you can just run the Playit.gg.EXE if you already installed it on your machine) - You'll get a public address like `xx-xx.gl.at.ply.gg:5520`
4. Go to https://playit.gg/download : `Installer` (Windows) or `x86-64` (Linux) or follow `Debian Install Script` (Debian-based only) 
   * Windows: Install the `playit-windows.msi`
   * Linux:
     * Right-click file > Properties > Turn on 'Executable as a Program' | or just do `chmod +x playit-linux-amd64` on terminal
     * Run by double-clicking the file or `./playit-linux-amd64` via terminal
5. Open Playit.gg > Copy (select the URL, then Right-Click | `Ctrl+Shift+C` for Linux) > Paste the prompted URL into your browser to link your created account
6. **WARNING: Do not close the terminal if you are still playing or hosting the server**
7. 
8. Now you can use the public address that written in the playit.gg exe/you can check via browser [look at step 3]
9. Download the `run_server_with_tokens` script file (`.BAT` for Windows, `.SH` for Linux) from our Discord server > channel `#open-public-server`
10. Put the script file to the `Server` folder in `HytaleF2P` directory (`%localappdata%\HytaleF2P\release\package\game\latest\Server`)
11. Copy the `Assets.zip` from the `%localappdata%\HytaleF2P\release\package\game\latest\` folder to the `Server\` folder
12. double-click the .BAT file to host your server, wait until it shows like 
```
===================================================
Hytale Server Booted! [Multiplayer, Fresh Universe]
===================================================
```
12. You connect to the server by go to `Servers` in your game client, and add server, type `localhost` in the address box, use any name for your server, `my server` for example.
13. Send the public address in step 3 to your friends, use `add server` also.
14. enjoy :smile:

1. **Download [playit.gg](https://playit.gg/)** and run it - Connect your account from the terminal (do not close it when playing on the server)  
2. **Add a tunnel** - Select "UDP", tunnel description of "Hytale Server", port count `1`, and local port `5520`
3. **Start the tunnel** - You'll get a public address like `xx-xx.gl.at.ply.gg:5520`
4. **Share the address** - Friends connect directly using this address

Works with both Online Play and dedicated servers. No software needed for players joining.

#### Option 2: Radmin VPN

Creates a virtual LAN - all players need to install it:

1. **Download [Radmin VPN](https://www.radmin-vpn.com/)** - All players install it
2. **Create a network** - One person creates, others join with network name/password
3. **Host via Online Play** - Use your Radmin VPN IP instead
4. **Friends connect** - They'll see you on the virtual LAN

Both options bypass all NAT/CGNAT issues. But for **Windows machines only!**

#### Option 3: Tailscale
It creates mesh VPN service that streamlines connecting devices and services securely across different networks. And **works crossplatform!!**

1. All member's are required to download [Tailscale](https://tailscale.com/download) on your device.
[Once installed, Tailwind starts and live inside your hidden icon section in Windows, Mac and Linux]
2. Create a **common tailscale** account which will shared among your friends to log in.
3. Ask your **host to login in to thier tailscale client first**, then the other members.
  * Host
    * Open your singleplayer world
    * Go to Online Play settings
    * Re-save your settings to generate a new share code
  * Friends
    * Ensure Tailscale is connected
    * Use the new share code to connect
[To test your connection, ping the host's ipv4 mentioned in tailwind]
---

## Part 2: Dedicated Server (Advanced)

For 24/7 servers, custom configurations, or hosting on a VPS/dedicated machine.

### Quick Start

#### Step 1: Get the Server JAR

The server scripts will automatically download the pre-patched server JAR if it's not present.

**Option A:** Let the scripts download automatically (requires `HYTALE_SERVER_URL` to be configured)

**Option B:** Manually place `HytaleServer.jar` (pre-patched for F2P) in the Server directory:

- **Windows:** `%localappdata%\HytaleF2P\release\package\game\latest\Server`
- **macOS:** `~/Library/Application Support/HytaleF2P/release/package/game/latest/Server`
- **Linux:** `~/.hytalef2p/release/package/game/latest/Server`

If you have a custom install path, the Server folder is inside your custom location under `HytaleF2P/release/package/game/latest/Server`.

#### Step 2: Run the Server

**Windows:**
```batch
cd scripts
run_server.bat
```

**macOS / Linux:**
```bash
cd scripts
./run_server.sh
```

The scripts will:
1. Find your game installation automatically
2. Download the pre-patched server JAR if needed
3. Fetch session tokens from the auth server
4. Start the server

#### Step 3: Connect Players

Share your server IP address with players. They connect via the F2P Launcher's server browser or direct connect.

---

## Network Setup (Dedicated Server)

### Local Network (LAN)

If all players are on the same network:
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Share this IP with players on your network
3. Default port is `5520`

### Port Forwarding (Internet Play)

To allow direct internet connections:

1. Forward **port 5520 (UDP)** in your router
2. Find your public IP at [whatismyip.com](https://whatismyip.com)
3. Share your public IP with players

**Windows Firewall:**
```powershell
# Run as Administrator
netsh advfirewall firewall add rule name="Hytale Server" dir=in action=allow protocol=UDP localport=5520
```

---

## Configuration

### Environment Variables

Set these before running to customize your server:

| Variable | Default | Description |
|----------|---------|-------------|
| `HYTALE_SERVER_URL` | (placeholder) | URL to download pre-patched server JAR |
| `HYTALE_AUTH_DOMAIN` | `auth.sanasol.ws` | Auth server domain (4-16 chars) |
| `HYTALE_BIND` | `0.0.0.0:5520` | Server IP and port |
| `HYTALE_AUTH_MODE` | `authenticated` | Auth mode (see below) |
| `HYTALE_SERVER_NAME` | `My Hytale Server` | Server display name |
| `HYTALE_GAME_PATH` | (auto-detected) | Override game location |
| `JVM_XMS` | `2G` | Minimum Java memory |
| `JVM_XMX` | `4G` | Maximum Java memory |

**Example (Windows):**
```batch
set HYTALE_SERVER_NAME=My Awesome Server
set JVM_XMX=8G
run_server.bat
```

**Example (Linux/macOS):**
```bash
HYTALE_SERVER_NAME="My Awesome Server" JVM_XMX=8G ./run_server.sh
```

### Authentication Modes

| Mode | Description | Use Case |
|------|-------------|----------|
| `authenticated` | Players log in via F2P Launcher | Public servers |
| `unauthenticated` | No login required | LAN parties, testing |
| `singleplayer` | Local play only | Solo testing |

---

## RAM Allocation Guide

Adjust memory based on your system:

| System RAM | Players | JVM_XMS | JVM_XMX |
|------------|---------|---------|---------|
| 4 GB | 1-3 | `512M` | `2G` |
| 8 GB | 3-8 | `1G` | `4G` |
| 16 GB | 8-15 | `2G` | `8G` |
| 32 GB | 15+ | `4G` | `12G` |

**Example for large server:**
```bash
JVM_XMS=4G JVM_XMX=12G ./run_server.sh
```

**Tips:**
- `-Xms` = minimum RAM (allocated at startup)
- `-Xmx` = maximum RAM (upper limit)
- Never allocate all your system RAM - leave room for OS
- Start conservative and increase if needed

---

## Server Commands

Once running, use these commands in the console:

| Command | Description |
|---------|-------------|
| `help` | Show all commands |
| `stop` | Stop server gracefully |
| `save` | Force world save |
| `list` | List online players |
| `op <player>` | Give operator status |
| `deop <player>` | Remove operator status |
| `kick <player>` | Kick a player |
| `ban <player>` | Ban a player |
| `unban <player>` | Unban a player |
| `tp <player> <x> <y> <z>` | Teleport player |

---

## Command Line Options

Pass these when starting the server:

```bash
./run_server.sh [OPTIONS]
```

| Option | Description |
|--------|-------------|
| `--bind <ip:port>` | Server address (default: 0.0.0.0:5520) |
| `--auth-mode <mode>` | Authentication mode |
| `--universe <path>` | Path to world data |
| `--mods <path>` | Path to mods folder |
| `--backup` | Enable automatic backups |
| `--backup-dir <path>` | Backup directory |
| `--backup-frequency <mins>` | Backup interval |
| `--owner-name <name>` | Server owner username |
| `--allow-op` | Allow op commands |
| `--disable-sentry` | Disable crash reporting |
| `--help` | Show all options |

**Example:**
```bash
./run_server.sh --backup --backup-frequency 30 --allow-op
```

---

## File Structure

```
<game_path>/
├── Assets.zip                 # Game assets (required)
├── Client/                    # Game client
└── Server/
    ├── HytaleServer.jar       # Server executable (pre-patched)
    ├── HytaleServer.aot       # AOT cache (faster startup)
    ├── universe/              # World data
    │   ├── world/             # Default world
    │   └── players/           # Player data
    ├── mods/                  # Server mods (optional)
    └── Licenses/              # License files
```

---

## Backups

### Automatic Backups

```bash
./run_server.sh --backup --backup-dir ./backups --backup-frequency 30
```

### Manual Backup

1. Use `save` command or stop the server
2. Copy the `universe/` folder
3. Store in a safe location

### Restore

1. Stop the server
2. Delete/rename current `universe/`
3. Copy backup to `universe/`
4. Restart server

---

## Troubleshooting

### "Java not found" or "Java version too old"

**Java 21 is REQUIRED** (the server uses class file version 65.0).

**Install Java 21:**
- **Windows:** `winget install EclipseAdoptium.Temurin.21.JDK`
- **macOS:** `brew install openjdk@21`
- **Ubuntu:** `sudo apt install openjdk-21-jdk`
- **Fedora:** `sudo dnf install java-21-openjdk`
- **Arch:** `sudo pacman -S jdk21-openjdk`
- **Download:** [adoptium.net/temurin/releases/?version=21](https://adoptium.net/temurin/releases/?version=21)

**macOS: Set Java 21 as default:**
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 21)
export PATH="$JAVA_HOME/bin:$PATH"
```
Add these lines to `~/.zshrc` or `~/.bash_profile` to make permanent.

### "Game directory not found"

- Download game via F2P Launcher first
- Or set `HYTALE_GAME_PATH` environment variable
- Check custom install path in launcher settings

### "Assets.zip not found"

Game files incomplete. Re-download via the launcher.

### "Port already in use"

```bash
./run_server.sh --bind 0.0.0.0:5521
```

### "Out of memory"

Increase JVM_XMX:
```bash
JVM_XMX=6G ./run_server.sh
```

### Players can't connect

1. Server shows "Server Ready"?
2. Using F2P Launcher (not official)?
3. Port 5520 open in firewall?
4. Port forwarding configured (for internet)?
5. Try `--auth-mode unauthenticated` for testing

### "Authentication failed"

- Ensure players use F2P Launcher
- Auth server may be temporarily down
- Test with `--auth-mode unauthenticated`

---

## Docker Deployment (Advanced)

For production servers, use Docker:

```bash
docker run -d \
  --name hytale-server \
  -p 5520:5520/udp \
  -v ./data:/data \
  -e HYTALE_AUTH_DOMAIN=auth.sanasol.ws \
  -e HYTALE_SERVER_NAME="My Server" \
  -e JVM_XMX=8G \
  ghcr.io/hybrowse/hytale-server-docker:latest
```

See [Docker documentation](https://github.com/Hybrowse/hytale-server-docker) for details.

---

## Server Settings Summary

### Minimal Setup
```bash
./run_server.sh
```

### Custom Memory
```bash
JVM_XMS=2G JVM_XMX=8G ./run_server.sh
```

### Custom Port
```bash
HYTALE_BIND=0.0.0.0:25565 ./run_server.sh
```

### LAN Party (No Auth)
```bash
./run_server.sh --auth-mode unauthenticated
```

### Full Custom Setup
```bash
HYTALE_SERVER_NAME="Epic Server" \
HYTALE_BIND=0.0.0.0:5520 \
JVM_XMS=2G \
JVM_XMX=8G \
./run_server.sh --backup --backup-frequency 15 --allow-op
```

---

## Getting Help

- Check server console logs for errors
- Test with `--auth-mode unauthenticated` first
- Ensure all players have F2P Launcher
- Join the community for support

---

## Credits

- Hytale F2P Project
- [Hybrowse Docker Image](https://github.com/Hybrowse/hytale-server-docker)
- Auth Server: sanasol.ws

