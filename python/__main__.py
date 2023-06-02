"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
# ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
# ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
# ║
# ║
# ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
# ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
# ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
# ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
# ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
# ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
# ║⦁> 📞 Need assistance or have issues? Contact our developers.
# ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
# ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
# ║    whatsApp group management experience! 🎉
# ║
# ║     🚨LEGAL NOTICE🚨
# ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
# ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
# ║⦁>    subsidiaries. This is an independent and unofficial software.
# ║⦁>    Use at your own risk.
# ║
# ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
import subprocess
from colorama import init, Fore, Style

# Initialize Colorama
init()

# Install Python dependencies
pip_install_cmd = ["pip3", "install", "-r", "python/requirements.txt"]
print(f"{Fore.YELLOW}{Style.BRIGHT}Installing Python dependencies...{Style.RESET_ALL}")
subprocess.run(pip_install_cmd, check=True)

# Build the project
build_cmd = ["yarn", "run", "build"]
print(f"{Fore.YELLOW}{Style.BRIGHT}Building the project...{Style.RESET_ALL}")
subprocess.run(build_cmd, check=True)

# Sync
sync_cmd = ["yarn", "run", "sync"]
print(f"{Fore.YELLOW}{Style.BRIGHT}Syncing...{Style.RESET_ALL}")
subprocess.run(sync_cmd, check=True)

# Start the project
start_cmd = ["yarn", "run", "start"]
print(f"{Fore.GREEN}{Style.BRIGHT}Starting the project...{Style.RESET_ALL}")
subprocess.run(start_cmd, check=True)
