# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
# /*
# ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# ║ 
# ║ We won't be responsible for any kind of ban due to this bot.
# ║ νℓкуяє was made for fun purpose and to make group management easier.
# ║ It's your concern if you spam and gets your account banned.
# ║ Also, Forks won't be entertained.
# ║ If you fork this repo and edit plugins, it's your concern for further updates.
# ║ Forking Repo is fine. But if you edit something we will not provide any help.
# ║ In short, Fork At Your Own Risk.
# ╚════════════╝
# */
# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
load_dotenv("./.env")
DOCKER=getenv("DOCKER",None)
class InterceptHandler(logging.Handler):
    LEVELS_MAP={logging.CRITICAL:"CRITICAL",logging.ERROR:"ERROR",logging.WARNING:"WARNING",logging.INFO:"INFO",logging.DEBUG:"DEBUG"}
    def _get_level(OOO0O0O0OOOOO00OO,OO0OO000O0O00OO0O):
        return OOO0O0O0OOOOO00OO.LEVELS_MAP.get(OO0OO000O0O00OO0O.levelno,OO0OO000O0O00OO0O.levelno)
    def emit(OO0O00OOO0O0OOOOO,OOOO0OO0O00000O0O):
        O00OO00000000OOO0=logger.opt(depth=6,exception=OOOO0OO0O00000O0O.exc_info,ansi=True,lazy=True)
        O00OO00000000OOO0.log(OO0O00OOO0O0OOOOO._get_level(OOOO0OO0O00000O0O),OOOO0OO0O00000O0O.getMessage())
logging.basicConfig(handlers=[InterceptHandler()],level=logging.INFO)
LOGS=logging.getLogger(__name__)
pkgFile=pathlib.Path("package-lock.json")
if pkgFile.exists():
    os.remove("package-lock.json")
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json has been cleaned!"))
    else:
        cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json has been cleaned!","yellow")
else:
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json File does not exist!"))
    else:
        cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json File does not exist!","green")
try:
    subprocess.run(["node","contents.js"],check=True,stdout=subprocess.PIPE).stdout 
except Exception as Error:
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}"))
    else:
        cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}")
pkgFile=pathlib.Path("package.json")
if pkgFile.exists():
    os.remove("package.json")
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: package.json has been cleaned!"))
    else:
        cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: package.json has been cleaned!","yellow")
else:
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: package.json File does not exist!"))
    else:
        cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: package.json File does not exist!","green")
try:
    os.system("git config --global user.email krakinzkon@gmail.com").stdout
    os.system("git config --global user.name KryKenz").stdout
    os.system("git config pull.rebase false").stdout
    os.system("git fetch origin version_4").stdout
    os.system("git reset --hard origin/version_4").stdout
    os.system("git pull --all").stdout
    if DOCKER=="DOCKER":
        LOGS.info(str("🐍𝐩𝐲𝐋𝐨𝐠: git sync done!"))
    else:
        cprint("🐍𝐩𝐲𝐋𝐨𝐠: git sync done!","green")
except Exception as Error:
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}"))
        LOGS.info(str("🐍𝐩𝐲𝐋𝐨𝐠: Error In git sync!"))
        LOGS.info(str("🐍𝐩𝐲𝐋𝐨𝐠: Trying TO Stash and ReTry!"))
    else:
        cprint("🐍𝐩𝐲𝐋𝐨𝐠: Error In git sync!","red")
        cprint("🐍𝐩𝐲𝐋𝐨𝐠: Trying TO Stash and ReTry!","yellow")
    try:
        os.system("git config --global user.email krakinzkon@gmail.com").stdout
        os.system("git config --global user.name KryKenz").stdout
        os.system("git config pull.rebase false").stdout
        os.system("git fetch origin version_4").stdout
        os.system("git reset --hard origin/version_4").stdout
        os.system("git pull --all").stdout
    except Exception as Error:
        if DOCKER=="DOCKER":
            LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}"))
            LOGS.info(str("🐍𝐩𝐲𝐋𝐨𝐠: Nothing To Stash and Drop!"))
        else:
            cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}")
            cprint("🐍𝐩𝐲𝐋𝐨𝐠: Nothing To Stash and Drop!","blue")
try:
    subprocess.run(["npm","install","--force","--save"],check=True,stdout=subprocess.PIPE).stdout 
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: npm install done using python subprocess!"))
    else:
        cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: npm install done using python subprocess!")
except Exception as Error:
    if DOCKER=="DOCKER":
        LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}"))
    else:
        cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: {Error}")
# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
# /*
# ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# ║ 
# ║ We won't be responsible for any kind of ban due to this bot.
# ║ νℓкуяє was made for fun purpose and to make group management easier.
# ║ It's your concern if you spam and gets your account banned.
# ║ Also, Forks won't be entertained.
# ║ If you fork this repo and edit plugins, it's your concern for further updates.
# ║ Forking Repo is fine. But if you edit something we will not provide any help.
# ║ In short, Fork At Your Own Risk.
# ╚════════════╝
# */
# ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");