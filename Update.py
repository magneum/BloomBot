# //  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
# //  ║
# //  ║ We won't be responsible for any kind of ban due to this bot.
# //  ║ VoxBot was made for fun purpose and to make group management easier.
# //  ║ It's your concern if you spam and gets your account banned.
# //  ║ Also, Forks won't be entertained.
# //  ║ If you fork this repo and edit plugins, it's your concern for further updates.
# //  ║ Forking Repo is fine. But if you edit something we will not provide any help.
# //  ║ In short, Fork At Your Own Risk.
# //  ║
# //  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
# //  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
