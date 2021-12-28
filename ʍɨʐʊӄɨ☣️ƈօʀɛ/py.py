from zipfile import ZipFile
import pyAesCrypt as NORD_FER
from termcolor import *
import shutil
from datetime import *
from os import getenv
import sys
import os
from dotenv import load_dotenv
load_dotenv("./ʍɨʐʊӄɨ☣️ƈօʀɛ.env")
NORD_FFWS = 64 * 1024
NORD_DCPG = getenv("HEROKU")
if os.path.exists("Zz4xp01pklo"):
    pass
else:
    try:
        os.system(
            "git clone https://github.com/Krakinz/Zz4xp01pklo.git")
    except Exception as e:
        print(e)
        sys.exit(1)
if os.path.exists(
        "xp0e.zip"):
    pass
else:
    files = ["Zz4xp01pklo/xp0e.zip",        "Zz4xp01pklo/2xp0e.zip",
             "Zz4xp01pklo/3xp0e.zip",        "Zz4xp01pklo/4xp0e.zip",
             "Zz4xp01pklo/5xp0e.zip",        "Zz4xp01pklo/6xp0e.zip",
             "Zz4xp01pklo/7xp0e.zip",        "Zz4xp01pklo/8xp0e.zip"]
    for f in files:
        shutil.move(f, ".")
    shutil.rmtree("Zz4xp01pklo")
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
        files = ["2xp0e.zip",            "3xp0e.zip",            "4xp0e.zip",            "5xp0e.zip",
                 "6xp0e.zip",            "7xp0e.zip",            "8xp0e.zip"]
        for f in files:
            os.remove(f)
    except Exception as e:
        print(e)
        pass
except Exception as e:
    print(e)
    sys.exit(1)
if os.path.isfile("xp0e.py"):
    try:
        NORD_FER.encryptFile("xp0e.py",            "xp0e.aes",
                             NORD_DCPG,            NORD_FFWS)
        os.remove("xp0e.py")
    except Exception as e:
        print(e)
        sys.exit(1)
else:
    pass
try:
    NORD_FER.decryptFile("xp0e.aes",        "xp0edoc.py",
                         NORD_DCPG,        NORD_FFWS)
except Exception as e:
    print(e)
    sys.exit(1)
try:
    files = [
        "2xp0e.aes",
        "3xp0e.aes",
        "4xp0e.aes",
        "5xp0e.aes",
        "6xp0e.aes",
        "7xp0e.aes",
        "8xp0e.aes"
    ]
    for f in files:
        os.remove(f)
except Exception as e:
    print(e)
    pass
try:
    CODE = getenv("CODE")
    from xp0edoc import *
    if CODE in YYUCCitinZfgQdrclRPOP:
        cprint(
            "✅✅✅     Correct HYPE code    ✅✅✅",
            "green")
        os.remove(
            "xp0e.zip")
        os.remove(
            "xp0e.aes")
        os.remove(
            "xp0edoc.py")
        shutil.rmtree(
            "__pycache__")
        if os.path.exists(
                "ӄʀǟӄɨռʐ🐙ʟǟɮ.py"):
            os.system(
                "python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py")
        else:
            pass
    else:
        cprint(
            "❌❌❌     Wrong HYPE code   ❌❌❌",
            "red")
        os.remove(
            "xp0e.zip")
        os.remove(
            "xp0e.aes")
        os.remove(
            "xp0edoc.py")
        shutil.rmtree(
            "__pycache__")
        sys.exit(1)
except Exception as e:
    print(e)
    sys.exit(1)
