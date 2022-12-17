#("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
# /*
#  * * * * * * * * * * |       (𝐜)Vlkyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
#  */
#("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
try:
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
except ImportError:
    print(f"🐍𝐩𝐲𝐋𝐨𝐠: Installing Python3 Packages.")
    subprocess.run(["pip", "install", "-r", "⭕𝖈𝖆𝖗𝖆.txt"],check=True,stdout=subprocess.PIPE).stdout 
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
GitName=getenv("GIT_USERNAME",None)
GitEmail=getenv("GIT_USEREMAIL",None)
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
    subprocess.run(["git","config","--global","user.name",GitName],check=True,stdout=subprocess.PIPE).stdout 
    subprocess.run(["git","config","--global","user.email",GitEmail],check=True,stdout=subprocess.PIPE).stdout 
    subprocess.run(["git","config","pull.rebase","false"],check=True,stdout=subprocess.PIPE).stdout 
    subprocess.run(["git","init","--initial-branch=version_4"],check=True,stdout=subprocess.PIPE).stdout 
    subprocess.run(["git","fetch","origin","version_4"],check=True,stdout=subprocess.PIPE).stdout 
    subprocess.run(["git","reset","--hard","origin/version_4"],check=True,stdout=subprocess.PIPE).stdout 
    subprocess.run(["git","pull"],check=True,stdout=subprocess.PIPE).stdout 
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
        subprocess.run(["git","config","--global","user.name",GitName],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","config","--global","user.email",GitEmail],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","config","pull.rebase","false"],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","init","--initial-branch=version_4"],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","fetch","origin","version_4"],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","reset","--hard","origin/version_4"],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","stash"],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","stash","drop"],check=True,stdout=subprocess.PIPE).stdout 
        subprocess.run(["git","pull"],check=True,stdout=subprocess.PIPE).stdout 
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
# pkgFile=pathlib.Path("package-lock.json")
# if pkgFile.exists():
#     os.remove("package-lock.json")
#     if DOCKER=="DOCKER":
#         LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json has been cleaned!"))
#     else:
#         cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json has been cleaned!","yellow")
# else:
#     if DOCKER=="DOCKER":
#         LOGS.info(str(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json File does not exist!"))
#     else:
#         cprint(f"🐍𝐩𝐲𝐋𝐨𝐠: package-lock.json File does not exist!","green")
#("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
# /*
#  * * * * * * * * * * |       (𝐜)Vlkyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
#  */
#("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");