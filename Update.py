# //  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
# //  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
# //  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
# //  ║
# //  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
# //  ║🚀 Simplifies group management tasks and enhances the overall user experience.
# //  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
# //  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
# //  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
# //  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
# //  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
# //  ║🔄 We'll continue providing updates and support for the original version of the bot.
# //  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
# //  ║   WhatsApp group management experience! 🎉
# //  ║
# //  ║🐞 DEVELOPERS: +918436686758, +918250889325
# //  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
import os
import logging
import pathlib
import git as 𝖛
import subprocess
from loguru import *
from os import getenv
from datetime import *
from termcolor import *
from dotenv import load_dotenv
load_dotenv("./.env")
subprocess.run(["node", "contents.js"], check=True,
               stdout=subprocess.PIPE).stdout
try:
    os.system("git init --initial-branch=magneum")
    os.system("git remote add origin https://github.com/magneum/voxbot")
    os.system("git config pull.rebase false")
    os.system("git fetch origin magneum")
    os.system("git reset --hard origin/magneum")
    cprint("🐍𝐩𝐲𝐋𝐨𝐠: git sync done!", "green")
except Exception as Error:
    cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}", "red")
    cprint("🐍𝐩𝐲𝐋𝐨𝐠: Error In git sync!", "red")
    cprint("🐍𝐩𝐲𝐋𝐨𝐠: Trying TO Stash and ReTry!", "yellow")
try:
    subprocess.run(["yarn", "install"],
                   check=True, stdout=subprocess.PIPE).stdout
except Exception as Error:
    cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}")
