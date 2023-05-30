# ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
# ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
# ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
# ║
# ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
# ║🚀 Simplifies group management tasks and enhances the overall user experience.
# ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
# ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
# ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
# ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
# ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
# ║🔄 We'll continue providing updates and support for the original version of the bot.
# ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
# ║   WhatsApp group management experience! 🎉
# ║
# ║🐞 Developers: +918436686758, +918250889325
# ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
import os
import git
import sys
import subprocess
from loguru import logger
from datetime import datetime
from termcolor import cprint
from dotenv import load_dotenv

logger.add(sys.stderr, format="{time} {level} {message}", filter="my_module", level="INFO")
load_dotenv(dotenv_path="./.env")

try:
    output = subprocess.run(["node", "contents"], check=True, capture_output=True, text=True)
    print(output.stdout)

    repo = git.Repo.init(path='.', initial_branch='magneum')
    origin = repo.create_remote('origin', 'https://github.com/magneum/Foxbot')
    origin.fetch('magneum')
    repo.head.reset(commit='origin/magneum', index=True, working_tree=True)
    
    cprint("🐍pyLog: git sync done!", "green", attrs=["bold"])

except Exception as Error:
    cprint(f"🐍pyLog: {Error}", "red", attrs=["bold"])
    cprint("🐍pyLog: Error In git sync!", "red", attrs=["bold"])
    cprint("🐍pyLog: Trying TO Stash and ReTry!", "yellow", attrs=["bold"])
    try:
        subprocess.run(["yarn", "install"], check=True, capture_output=True, text=True)
    except Exception as Error:
        cprint(f"🐍pyLog: {Error}", "red", attrs=["bold"])
