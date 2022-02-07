#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
#|🛸|      (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
import logging
from loguru import *
from zipfile import ZipFile
import pyAesCrypt as ӄʀǟӄɨռʐr
from termcolor import *
import shutil
from datetime import *
from os import getenv
import os
from dotenv import load_dotenv

load_dotenv("./🛸ƈօʀȶǟռǟ™.env")
爪𝖟𝖚ӄ𝖎 = getenv("HEROKU", None)
爪𝖎𝖟𝖚ӄ = getenv("HEROKU", None)
爪𝖎𝖟𝖚ӄ𝖎 = getenv("CODE", None)
BFS = 64 * 1024
#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
#|🛸|      (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
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
#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
#|🛸|      (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
LOGS = logging.getLogger(__name__)
if 爪𝖎𝖟𝖚ӄ𝖎 is not None:
    if os.path.exists("Zz4xp01pklo"):
        pass
    else:
        try:
            os.system("git clone https://github.com/Krakinz/Zz4xp01pklo.git")
        except Exception as e:
            if 爪𝖟𝖚ӄ𝖎 == "HEROKU":
                LOGS.info(str(e))
            else:
                print(e)
            pass
    if os.path.exists("xp0e.zip"):
        pass
    else:
        files = [
            "Zz4xp01pklo/xp0e.zip",
            "Zz4xp01pklo/2xp0e.zip",
            "Zz4xp01pklo/3xp0e.zip",
            "Zz4xp01pklo/4xp0e.zip",
            "Zz4xp01pklo/5xp0e.zip",
            "Zz4xp01pklo/6xp0e.zip",
            "Zz4xp01pklo/7xp0e.zip",
            "Zz4xp01pklo/8xp0e.zip",
        ]
        for f in files:
            shutil.move(f, ".")
        shutil.rmtree("Zz4xp01pklo")
    # ⬡==========================⬡    🛸 ƈօʀȶǟռǟ™ 🛸    ⬡==========================⬡
    try:
        with ZipFile("xp0e.zip") as zf:
            zf.extractall()
        with ZipFile("2xp0e.zip") as zf:
            zf.extractall()
        with ZipFile("3xp0e.zip") as zf:
            zf.extractall()
        with ZipFile("4xp0e.zip") as zf:
            zf.extractall()
        with ZipFile("5xp0e.zip") as zf:
            zf.extractall()
        with ZipFile("6xp0e.zip") as zf:
            zf.extractall()
        with ZipFile("7xp0e.zip") as zf:
            zf.extractall()
        with ZipFile("8xp0e.zip") as zf:
            zf.extractall()
        try:
            files = [
                "2xp0e.zip",
                "3xp0e.zip",
                "4xp0e.zip",
                "5xp0e.zip",
                "6xp0e.zip",
                "7xp0e.zip",
                "8xp0e.zip",
            ]
            for f in files:
                os.remove(f)
        except Exception as e:
            if 爪𝖟𝖚ӄ𝖎 == "HEROKU":
                LOGS.info(str(e))
            else:
                print(e)
            pass
    except Exception as e:
        if 爪𝖟𝖚ӄ𝖎 == "HEROKU":
            LOGS.info(str(e))
        else:
            print(e)
        pass
    # ⬡==========================⬡    🛸 ƈօʀȶǟռǟ™ 🛸    ⬡==========================⬡
    if os.path.isfile("xp0e.py"):
        try:
            ӄʀǟӄɨռʐr.encryptFile("xp0e.py", "xp0e.aes", 爪𝖎𝖟𝖚ӄ, BFS)
            os.remove("xp0e.py")
        except Exception as e:
            if 爪𝖟𝖚ӄ𝖎 == "HEROKU":
                LOGS.info(str(e))
            else:
                print(e)
        pass
    else:
        pass

    try:
        ӄʀǟӄɨռʐr.decryptFile("xp0e.aes", "xp0edoc.py", 爪𝖎𝖟𝖚ӄ, BFS)
    except Exception as e:
        if 爪𝖟𝖚ӄ𝖎 == "HEROKU":
            LOGS.info(str(e))
        else:
            print(e)
        pass

    try:
        files = [
            "2xp0e.aes",
            "3xp0e.aes",
            "4xp0e.aes",
            "5xp0e.aes",
            "6xp0e.aes",
            "7xp0e.aes",
            "8xp0e.aes",
        ]
        for f in files:
            os.remove(f)
    except Exception as e:
        if 爪𝖟𝖚ӄ𝖎 == "HEROKU":
            LOGS.info(str(e))
        else:
            print(e)
        pass
    # ⬡==========================⬡    🛸 ƈօʀȶǟռǟ™ 🛸    ⬡==========================⬡
    try:
        from xp0edoc import *

        if 爪𝖎𝖟𝖚ӄ𝖎 in YYUCCitinZfgQdrclRPOP:
            os.remove("xp0e.zip")
            os.remove("xp0e.aes")
            os.remove("xp0edoc.py")
            shutil.rmtree("__pycache__")
            os.system('clear')
            print("""
|⬡══════════════════════⬡|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |⬡══════════════════════⬡|
ɪꜱ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ᴍᴜʟᴛɪᴘᴜʀᴘᴏꜱᴇ-ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ,ᴀᴜᴛᴏᴍᴀᴛɪᴏɴ ᴀɴᴅ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ!
ᴜꜱᴇ ꜱᴀᴋᴜʀᴀ ɪɴ ʙᴏᴛʜ ᴘᴜʙʟɪᴄ-ɢʀᴏᴜᴘꜱ ᴀɴᴅ ᴘʀɪᴠᴀᴛᴇ.
ꜱᴏ ᴍᴀɴʏ ᴄᴏᴍᴍᴀɴᴅꜱ ᴛʜᴀᴛ ᴡɪʟʟ ʙʟᴏᴡ ᴜᴘ ᴛʜᴇ ᴇᴠᴇʀʏ-ᴅᴀʏ ᴜꜱᴇ ᴏꜰ ʙᴏʀɪɴɢ ᴡʜᴀᴛꜱᴀᴘᴘ.
ꜱᴀᴋᴜʀᴀ ɪꜱ ᴡʀɪᴛᴛᴇɴ ɪɴ [ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ & ᴘʏᴛʜᴏɴ] ᴀɴᴅ ɪꜱ ʙʏ ꜰᴀʀ ᴛʜᴇ ᴏɴᴇ ᴏꜰ ᴍᴏꜱᴛ ᴀᴅᴠᴀɴᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ.
|⬡══════════════════════⬡|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |⬡══════════════════════⬡|""")
            import platform
            import psutil
            import os
            my_system = platform.uname()
            if os.path.exists('Cortana🛰️Server/Coolist.json'):
                os.remove('Cortana🛰️Server/Coolist.json')
            else:
                pass
            os.system("git init --initial-branch=KrakinzLab")
            os.system("git remote add origin https://github.com/Krakinz/Cortana.git")
            os.system("git fetch origin KrakinzLab")
            os.system("git reset --hard origin/KrakinzLab")
            os.system('touch Cortana🛰️Server/Coolist.json')
            os.system('node Cortana🛰️Server/touched.js')
            os.system('node Cortana☣️Reactor/🛸ƈօʀȶǟռǟ™.js')
        else:
            print("⬡==========================⬡    🛸 ƈօʀȶǟռǟ™ 🛸    ⬡==========================⬡")
            print("❌❌❌     Wrong ӄʀǟӄɨռʐ code   ❌❌❌")
            os.remove("xp0e.zip")
            os.remove("xp0e.aes")
            os.remove("xp0edoc.py")
            shutil.rmtree("__pycache__")
            pass
    except Exception as e:
        if 爪𝖟𝖚ӄ𝖎 == "HEROKU":
            LOGS.info(str(e))
        else:
            print(e)
        pass
#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
#|🛸|      (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
#|🛸|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
