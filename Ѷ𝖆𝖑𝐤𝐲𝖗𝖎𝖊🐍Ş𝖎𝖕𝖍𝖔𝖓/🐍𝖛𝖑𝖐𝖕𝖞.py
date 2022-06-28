# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
# /*
#  * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
#  */
# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
import os
import logging
import pathlib
import git as 𝖛
import subprocess
from loguru import *
from datetime import *
from termcolor import *
from os import getenv
from dotenv import load_dotenv
load_dotenv("./ᴠʟᴋʏʀᴇ™.env")
ᴠʟᴋʏʀᴇ = getenv("HEROKU", None)
𝖈𝖔𝖗𝖑𝖊𝖝 = getenv("HEROKU", None)
ᴠʟᴋʏʀᴇi = getenv("CODE", None)
class InterceptHandler(logging.Handler):
    LEVELS_MAP = {
        logging.CRITICAL: "CRITICAL",
        logging.ERROR: "ERROR",
        logging.WARNING: "WARNING",
        logging.INFO: "INFO",
        logging.DEBUG: "DEBUG",
    }

    def _get_level(self, record):
        return self.LEVELS_MAP.get(record.levelno, record.levelno)

    def emit(self, record):
        logger_opt = logger.opt(
            depth=6, exception=record.exc_info, ansi=True, lazy=True
        )
        logger_opt.log(self._get_level(record), record.getMessage())


logging.basicConfig(handlers=[InterceptHandler()], level=logging.INFO)
LOGS = logging.getLogger(__name__)
pkgFl = pathlib.Path("package-lock.json")
if pkgFl.exists ():
    os.remove("package-lock.json")
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: package-lock.json has been cleaned!"))
    else:
        cprint(f"🐍𝐏𝐲: package-lock.json has been cleaned!", "yellow")
else:
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: package-lock.json File does not exist!"))
    else:
        cprint(f"🐍𝐏𝐲: package-lock.json File does not exist!", "green")
try:
    subprocess.run(["node", "Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/Krank.js"], check=True, stdout=subprocess.PIPE).stdout
except Exception as Error:
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: {Error}"))
    else:
        cprint(f"🐍𝐏𝐲: {Error}")
pkgFl = pathlib.Path("package.json")
if pkgFl.exists ():
    os.remove("package.json")
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: package.json has been cleaned!"))
    else:
        cprint(f"🐍𝐏𝐲: package.json has been cleaned!", "yellow")
else:
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: package.json File does not exist!"))
    else:
        cprint(f"🐍𝐏𝐲: package.json File does not exist!", "green")       
try:
    subprocess.run(["git", "config", "--global", "user.name", "KryKnz"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "config", "--global", "user.email", "krakinzkon@gmail.com"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "config", "pull.rebase", "false"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "init", "--initial-branch=𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "fetch", "origin", "𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "reset", "--hard", "origin/𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "pull"], check=True, stdout=subprocess.PIPE).stdout
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str("🐍𝐏𝐲: git sync done!"))
    else:
        cprint("🐍𝐏𝐲: git sync done!", "green")
except Exception as Error:
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: {Error}"))
        LOGS.info(str("🐍𝐏𝐲: Error In git sync!"))
        LOGS.info(str("🐍𝐏𝐲: Trying TO Stash and ReTry!"))
    else:
        cprint("🐍𝐏𝐲: Error In git sync!", "red")
        cprint("🐍𝐏𝐲: Trying TO Stash and ReTry!", "yellow")
    try:
        subprocess.run(["git", "config", "--global", "user.name", "KryKnz"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "config", "--global", "user.email", "krakinzkon@gmail.com"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "config", "pull.rebase", "false"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "init", "--initial-branch=𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "fetch", "origin", "𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "reset", "--hard", "origin/𝐕𝐥𝐤𝐲𝐫𝐞📡𝐏𝐫𝐨𝐭𝐨®"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "stash"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "stash", "drop"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "pull"], check=True, stdout=subprocess.PIPE).stdout
    except Exception as Error:
        if ᴠʟᴋʏʀᴇ == "HEROKU":
            LOGS.info(str(f"🐍𝐏𝐲: {Error}"))
            LOGS.info(str("🐍𝐏𝐲: Nothing To Stash and Drop!"))
        else:
            cprint(f"🐍𝐏𝐲: {Error}")
            cprint("🐍𝐏𝐲: Nothing To Stash and Drop!", "blue")
try:
    subprocess.run(["npm", "install", "--force", "--save"], check=True, stdout=subprocess.PIPE).stdout
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: npm install done using python subprocess!"))
    else:
        cprint(f"🐍𝐏𝐲: npm install done using python subprocess!")
except Exception as Error:
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: {Error}"))
    else:
        cprint(f"🐍𝐏𝐲: {Error}")
pkgFl = pathlib.Path("package-lock.json")
if pkgFl.exists ():
    os.remove("package-lock.json")
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: package-lock.json has been cleaned!"))
    else:
        cprint(f"🐍𝐏𝐲: package-lock.json has been cleaned!", "yellow")
else:
    if ᴠʟᴋʏʀᴇ == "HEROKU":
        LOGS.info(str(f"🐍𝐏𝐲: package-lock.json File does not exist!"))
    else:
        cprint(f"🐍𝐏𝐲: package-lock.json File does not exist!", "green")
# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
# /*
#  * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
#  */
# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");