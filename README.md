# 🎮 Hytale F2P Launcher | Multiplayer Support [Windows, MacOS, Linux]

<div align="center">

![Version](https://img.shields.io/badge/Version-2.0.2-green?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey?style=for-the-badge)
![License](https://img.shields.io/badge/License-Educational-blue?style=for-the-badge)

**A modern, cross-platform launcher for Hytale with automatic updates and multiplayer support (all OS supported)**

[![GitHub stars](https://img.shields.io/github/stars/amiayweb/Hytale-F2P?style=social)](https://github.com/amiayweb/Hytale-F2P/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amiayweb/Hytale-F2P?style=social)](https://github.com/amiayweb/Hytale-F2P/network/members)

⭐ **If you find this project useful, please give it a star!** ⭐

🛑 **Found a problem? Join the Discord: https://discord.gg/gME8rUy3MB** 🛑

</div>

---
## 📸 Screenshots

<div align="center">

![Hytale F2P Launcher](https://i.imgur.com/9iDuzST.png)
![Hytale F2P Mods](https://i.imgur.com/NaareIS.png)
![Hytale F2P News](https://i.imgur.com/n1nEqRS.png)
![Hytale F2P Chat](https://i.imgur.com/Y4hL3sx.png)

</div>

---
## ✨ Features

🎯 **Core Features**
- 🔄 **Automatic Updates** - Smart version checking and seamless game updates
- 💾 **Data Preservation** - Intelligent UserData backup and restoration during updates
- 🌐 **Cross-Platform** - Full support for Windows, Linux (X11/Wayland), and macOS
- ☕ **Java Management** - Automatic Java runtime detection and installation
- 🎮 **Multiplayer Support** - Automatic multiplayer client installation (Windows, macOS & Linux !)

🛡️ **Advanced Features**
- 📁 **Custom Installation** - Choose your own installation directory
- 🔍 **Smart Detection** - Automatic game and dependency detection
- 🗂️ **Mod Support** - Built-in mod management system
- 💬 **Player Chat** - Integrated chat system for community interaction
- 📰 **News Feed** - Stay updated with the latest Hytale news
- 🎨 **Modern UI** - Clean, responsive interface with dark theme

---

## 🚀 Quick Start

### 📥 Installation

#### Windows
1. Download the latest `Hytale-F2P.exe` from [**Releases**](https://github.com/amiayweb/Hytale-F2P/releases)
2. Run the installer
3. Launch from desktop or start menu

#### Linux
See [BUILD.md](BUILD.md) for detailed build instructions or [**Releases**](https://github.com/amiayweb/Hytale-F2P/releases) section.

#### macOS  
See [BUILD.md](BUILD.md) for detailed build instructions or [**Releases**](https://github.com/amiayweb/Hytale-F2P/releases) section.

#### 🖥️ How to play online on F2P?
See [SERVER.md](SERVER.md)
   

---

## 🛠️ Building from Source

See [BUILD.md](BUILD.md) for comprehensive build instructions.

---

## 📌 Versioning Policy

**⚠️ Important: Semantic Versioning Required**

This project follows **strict semantic versioning** with **numerical versions only**:

- ✅ **Valid**: `2.0.1`, `2.0.11`, `2.1.0`, `3.0.0`
- ❌ **Invalid**: `2.0.2b`, `2.0.2a`, `2.0.1-beta`, `v2.0.2b`

**Format**: `MAJOR.MINOR.PATCH` (e.g., `2.0.11`)

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

**Why?** The auto-update system requires semantic versioning for proper version comparison. Letter suffixes (like `2.0.2b`) are not supported and will cause update detection issues.

---

## 📋 Changelog

### 🆕 v2.0.2b *(Minor Update: Performance & Utilities)*  
- 🌎 **Language Translation** — A big welcome for Spanish 🇪🇸 and Portuguese (Brazil) 🇧🇷 players! **Language setting can be found in the bottom part of Settings pane.**
- 💻 **Laptop/Hybrid GPU Performance Issue Fix** — Added automatic GPU detection system and options to choose which GPU will be used for the game, *specifically for Linux users*.
- 👨‍💻 **In-App Logging** — Reporting bugs and issues to `Github Issues` tab or `Open A Ticket` channel in our Discord Server has been made easier for players, no more finding logs file manually.
- 🛠️ **Repair Button** — Your game's broken? One button will fix them, go to Settings pane to Repair your game in one-click, **without losing any data**. If doing so did not fix your issue, please report it to us immediately!
- 🐛 **Fixed Bugs** — Fixed issue [#84](https://github.com/amiayweb/Hytale-F2P/issues/84) where mods disappearing when game starts in previous launcher (v2.0.2a).

### 🆕 v2.0.2a *(Minor Update)*  
- 🧑‍🚀 **Profiles System** — Added proper profile management: create, switch, and delete profiles. Each profile now has its own **isolated mod list**.  
- 🔒 **Mod Isolation** — Fixed ModManager so mods are **strictly scoped to the active profile**. Browsing and installing now only affects the selected profile.  
- 🚨 **Critical Path Fix** — Resolved a macOS bug where mods were being saved to a Windows path (`~/AppData/Local`) instead of `~/Library/Application Support`. Mods now save to the **correct location** and load properly in-game.  
- 🛡️ **Stability Improvements** — Added an **auto-sync step before every launch** to ensure the physical mods folder always matches the active profile.  
- 🎨 **UI Enhancements** — Added a **profile selector dropdown** and a **profile management modal**.
  
### 🆕 v2.0.2 
- 🎮 **Discord RPC Integration** - Added Discord Rich Presence with toggle in settings (enabled by default)
- 🌐 **Cross-Platform Multiplayer** - Added multiplayer patch support for Windows, Linux, and macOS
- 🎨 **Chat Improvements** - Simplified chat color system
- 🏆 **Badge System Expansion** - Added new FOUNDER UUID to the badge system
- 🔧 **Progress Bar Fix** - Resolved issue where download progress bar stayed active after game launch
- 🐛 **Bug Fixes**: General fixes

### 🔄 v2.0.1
- 📊 **Advanced Logging System** - Complete logging with timestamps, file rotation, and session tracking
- 🔧 **Play Button Fix** - Resolved issue where play button could get stuck in "CHECKING..." state  
- 💬 **Discord Integration** - Added closable Discord notification for community engagement
- 📁 **Game Location Access** - New "Open Game Location" button in settings for easy file access
- 🎯 **UI Polish** - Removed bounce animation from player counter for smoother experience
- 🛡️ **Stability Improvements** - Enhanced error handling and process lifecycle management
- ⚡ **Performance Optimizations** - Faster startup times and better resource management
- 🔄 **Timeout Protection** - Added safety timeouts to prevent launcher freezing

### 🔄 v2.0.0
- ✅ **Automatic Game Update System** - Smart version checking and seamless updates
- ✅ **Partial Automatic Launcher Update System** - This will inform you when I release a new update.
- 🛡️ **UserData Preservation** - Intelligent backup/restore of game saves during updates
- 🐧 **Enhanced Linux Support** - Full Wayland and X11 compatibility  
- 🔄 **Multiplayer Auto-Install** - Automatic multiplayer client setup on updates (Windows)
- 📡 **API Integration** - Real-time version checking and client management
- 🎨 **UI Improvements** - Added contributor credits footer
- 🔄 **Complete Launcher Overhaul** - Total redesign of the launcher architecture and interface
- 🗂️ **Integrated Mod Manager** - Built-in mod installation, management
- 💬 **Community Chat System** - Real-time chat for launcher users to connect and communicate

### 🔧 v1.0.1
- 📁 **Custom Installation** - Choose installation directory with file browser
- 🏠 **Always on Top** - Launcher stays visible during installation
- 🧠 **Smart Detection** - Automatic game detection and UI adaptation  
- 🗑️ **Uninstall Feature** - Easy game removal with one click
- 🔄 **Dynamic UI** - "INSTALL" vs "PLAY" button based on game state
- 🛠️ **Path Management** - Proper custom directory handling
- 💫 **UI Polish** - Improved layout and overflow prevention

### 🎉 v1.0.0 *(Initial Release)*
- 🎮 **Offline Gameplay** - Play Hytale without internet connection
- ⚡ **Auto Installation** - One-click game setup
- ☕ **Java Management** - Automatic Java runtime handling
- 🎨 **Modern Interface** - Clean, intuitive design
- 🌟 **First Release** - Core launcher functionality

---

## 👥 Contributors

<div align="center">

**Made with ❤️ by the community**

[![Contributors](https://contrib.rocks/image?repo=amiayweb/Hytale-F2P)](https://github.com/amiayweb/Hytale-F2P/graphs/contributors)

</div>

### 🏆 Project Creator
- [**@amiayweb**](https://github.com/amiayweb) - *Lead Developer & Project Creator*
- [**@Relyz1993**](https://github.com/Relyz1993) - *Server Helper & Second Developer & Project Creator*

### 🌟 Contributors  
- [**@sanasol**](https://github.com/sanasol) - *Main Issues fixer | Multiplayer Patcher*
- [**@Terromur**](https://github.com/Terromur) - *Main Issues fixer | Beta tester*
- [**@fazrigading**](https://github.com/fazrigading) - *Main Issues fixer | Beta tester*
- [**@ericiskoolbeans**](https://github.com/ericiskoolbeans) - *Beta Tester*
- [**@chasem-dev**](https://github.com/chasem-dev) - *Issues fixer*
- [**@crimera**](https://github.com/crimera) - *Issues fixer*  
- [**@Citeli-py**](https://github.com/Citeli-py) - *Issues fixer*
- [**@Rahul-Sahani04**](https://github.com/Rahul-Sahani04) - *Issues fixer*
- [**@xSamiVS**](https://github.com/xSamiVS) - *Language Translator*

---

## 📊 GitHub Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/amiayweb/Hytale-F2P?style=for-the-badge&logo=github)
![GitHub forks](https://img.shields.io/github/forks/amiayweb/Hytale-F2P?style=for-the-badge&logo=github)
![GitHub issues](https://img.shields.io/github/issues/amiayweb/Hytale-F2P?style=for-the-badge&logo=github)
![GitHub downloads](https://img.shields.io/github/downloads/amiayweb/Hytale-F2P/total?style=for-the-badge&logo=github)

</div>


## 📞 Support

<div align="center">

**Need help?** Join us: https://discord.gg/gME8rUy3MB

</div>

---

## ⚖️ Legal Disclaimer

<div align="center">

⚠️ **Important Notice** ⚠️

</div>

This launcher is created for **educational purposes only**.

🏛️ **Not Official** - This is an independent fan project **not affiliated with, endorsed by, or associated with** Hypixel Studios or Hytale.

🛡️ **No Warranty** - This software is provided **"as is"** without any warranty of any kind.

📝 **Responsibility** - The authors take no responsibility for how this software is used.

🛑 **Takedown Policy** - If Hypixel Studios or Hytale requests removal, this project will be taken down immediately.

❤️ **Support Official** - Please support the official game by purchasing it when available.

---

<div align="center">

**⭐ Star this project if you found it helpful! ⭐**

*Made with ❤️ by [@amiayweb](https://github.com/amiayweb) and the amazing community*
[![Star History Chart](https://api.star-history.com/svg?repos=amiayweb/Hytale-F2P&type=date&legend=top-left)](https://www.star-history.com/#amiayweb/Hytale-F2P&type=date&legend=top-left)
</div>


