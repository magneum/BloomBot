# |⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|
# ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# ║ 
# ║ We won't be responsible for any kind of ban due to this bot.
# ║ Vlkyre was made for fun purpose and to make group management easier.
# ║ It's your concern if you spam and gets your account banned.
# ║ Also, Forks won't be entertained.
# ║ If you fork this repo and edit plugins, it's your concern for further updates.
# ║ Forking Repo is fine. But if you edit something we will not provide any help.
# ║ In short, Fork At Your Own Risk.
# ╚════════════╝
# |⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|
import os   #DataLine🌱1
import logging   #DataLine🌱2
import git as 𝖛   #DataLine🌱3
import subprocess   #DataLine🌱4
from loguru import *  #DataLine🌱5
from zipfile import ZipFile   #DataLine🌱6
import pyAesCrypt as кгץкภչr   #DataLine🌱7
from termcolor import *  #DataLine🌱8
import shutil   #DataLine🌱9
from datetime import *  #DataLine🌱10
from os import getenv   #DataLine🌱11
from dotenv import load_dotenv   #DataLine🌱12
load_dotenv ("./Vlkyre.env")  #DataLine🌱13
ᴠʟᴋʏʀᴇ =getenv ("HEROKU",None )  #DataLine🌱14
𝖈𝖔𝖗𝖑𝖊𝖝 =getenv ("HEROKU",None )  #DataLine🌱15
ᴠʟᴋʏʀᴇi =getenv ("CODE",None )  #DataLine🌱16
BFS =64 *1024   #DataLine🌱17
subprocess .run (["git","config","pull.rebase","false"],check =True ,stdout =subprocess .PIPE ).stdout   #DataLine🌱18
subprocess .run (["python","🐍Syphons/🐍𝖛𝖑𝖐𝖕𝖞.py"],check =True ,stdout =subprocess .PIPE ).stdout   #DataLine🌱19
class InterceptHandler (logging .Handler ):  #DataLine🌱20
    LEVELS_MAP ={logging .CRITICAL:"CRITICAL",logging .ERROR:"ERROR",logging .WARNING:"WARNING",logging .INFO:"INFO",logging .DEBUG:"DEBUG",}  #DataLine🌱27
    def _get_level (OOO0OO00OO0OOO00O ,O000O0O00O00OOO00 ):  #DataLine🌱29
        return OOO0OO00OO0OOO00O .LEVELS_MAP .get (O000O0O00O00OOO00 .levelno ,O000O0O00O00OOO00 .levelno )  #DataLine🌱30
    def emit (OOOOO0OOOO000O00O ,OOOO0OO0OOOO0O00O ):  #DataLine🌱32
        O0OO00OO0OO0O000O =logger .opt (depth =6 ,exception =OOOO0OO0OOOO0O00O .exc_info ,ansi =True ,lazy =True )  #DataLine🌱35
        O0OO00OO0OO0O000O .log (OOOOO0OOOO000O00O ._get_level (OOOO0OO0OOOO0O00O ),OOOO0OO0OOOO0O00O .getMessage ())  #DataLine🌱36
logging .basicConfig (handlers =[InterceptHandler ()],level =logging .INFO )  #DataLine🌱39
LOGS =logging .getLogger (__name__ )  #DataLine🌱40
if ᴠʟᴋʏʀᴇi is not None:  #DataLine🌱41
    if os .path .exists ("Zz4xp01pklo"):  #DataLine🌱42
        pass   #DataLine🌱43
    else:  #DataLine🌱44
        try:  #DataLine🌱45
            os .system ("git clone https://github.com/Krakinz/Zz4xp01pklo.git")  #DataLine🌱46
        except Exception as Error:  #DataLine🌱47
            if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱48
                LOGS .info (str (Error))  #DataLine🌱49
            else:  #DataLine🌱50
                print (Error)  #DataLine🌱51
            pass   #DataLine🌱52
    if os .path .exists ("xp0e.zip"):  #DataLine🌱53
        pass   #DataLine🌱54
    else:  #DataLine🌱55
        files =["Zz4xp01pklo/xp0e.zip","Zz4xp01pklo/2xp0e.zip","Zz4xp01pklo/3xp0e.zip","Zz4xp01pklo/4xp0e.zip","Zz4xp01pklo/5xp0e.zip","Zz4xp01pklo/6xp0e.zip","Zz4xp01pklo/7xp0e.zip","Zz4xp01pklo/8xp0e.zip",]  #DataLine🌱65
        for f in files:  #DataLine🌱66
            shutil .move (f ,".")  #DataLine🌱67
        shutil .rmtree ("Zz4xp01pklo")  #DataLine🌱68
    try:  #DataLine🌱69
        with ZipFile ("xp0e.zip")as zf:  #DataLine🌱70
            zf .extractall ()  #DataLine🌱71
        with ZipFile ("2xp0e.zip")as zf:  #DataLine🌱72
            zf .extractall ()  #DataLine🌱73
        with ZipFile ("3xp0e.zip")as zf:  #DataLine🌱74
            zf .extractall ()  #DataLine🌱75
        with ZipFile ("4xp0e.zip")as zf:  #DataLine🌱76
            zf .extractall ()  #DataLine🌱77
        with ZipFile ("5xp0e.zip")as zf:  #DataLine🌱78
            zf .extractall ()  #DataLine🌱79
        with ZipFile ("6xp0e.zip")as zf:  #DataLine🌱80
            zf .extractall ()  #DataLine🌱81
        with ZipFile ("7xp0e.zip")as zf:  #DataLine🌱82
            zf .extractall ()  #DataLine🌱83
        with ZipFile ("8xp0e.zip")as zf:  #DataLine🌱84
            zf .extractall ()  #DataLine🌱85
        try:  #DataLine🌱86
            files =["2xp0e.zip","3xp0e.zip","4xp0e.zip","5xp0e.zip","6xp0e.zip","7xp0e.zip","8xp0e.zip",]  #DataLine🌱95
            for f in files:  #DataLine🌱96
                os .remove (f )  #DataLine🌱97
        except Exception as Error:  #DataLine🌱98
            if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱99
                LOGS .info (str (Error))  #DataLine🌱100
            else:  #DataLine🌱101
                print (Error)  #DataLine🌱102
            pass   #DataLine🌱103
    except Exception as Error:  #DataLine🌱104
        if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱105
            LOGS .info (str (Error))  #DataLine🌱106
        else:  #DataLine🌱107
            print (Error)  #DataLine🌱108
        pass   #DataLine🌱109
    if os .path .isfile ("xp0e.py"):  #DataLine🌱111
        try:  #DataLine🌱112
            кгץкภչr .encryptFile ("xp0e.py","xp0e.aes",𝖈𝖔𝖗𝖑𝖊𝖝 ,BFS )  #DataLine🌱113
            os .remove ("xp0e.py")  #DataLine🌱114
        except Exception as Error:  #DataLine🌱115
            if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱116
                LOGS .info (str (Error))  #DataLine🌱117
            else:  #DataLine🌱118
                print (Error)  #DataLine🌱119
        pass   #DataLine🌱120
    else:  #DataLine🌱121
        pass   #DataLine🌱122
    try:  #DataLine🌱124
        кгץкภչr .decryptFile ("xp0e.aes","xp0edoc.py",𝖈𝖔𝖗𝖑𝖊𝖝 ,BFS )  #DataLine🌱125
    except Exception as Error:  #DataLine🌱126
        if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱127
            LOGS .info (str (Error))  #DataLine🌱128
        else:  #DataLine🌱129
            print (Error)  #DataLine🌱130
        pass   #DataLine🌱131
    try:  #DataLine🌱133
        files =["2xp0e.aes","3xp0e.aes","4xp0e.aes","5xp0e.aes","6xp0e.aes","7xp0e.aes","8xp0e.aes",]  #DataLine🌱142
        for f in files:  #DataLine🌱143
            os .remove (f )  #DataLine🌱144
    except Exception as Error:  #DataLine🌱145
        if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱146
            LOGS .info (str (Error))  #DataLine🌱147
        else:  #DataLine🌱148
            print (Error)  #DataLine🌱149
        pass   #DataLine🌱150
    try:  #DataLine🌱152
        from xp0edoc import *  #DataLine🌱153
        if ᴠʟᴋʏʀᴇi in YYUCCitinZfgQdrclRPOP:  #DataLine🌱154
            os .remove ("xp0e.zip")  #DataLine🌱155
            os .remove ("xp0e.aes")  #DataLine🌱156
            os .remove ("xp0edoc.py")  #DataLine🌱157
            shutil .rmtree ("__pycache__")  #DataLine🌱158
            os .system ('forever npm start')  #DataLine🌱159
        else:  #DataLine🌱160
            os .remove ("xp0e.zip")  #DataLine🌱161
            os .remove ("xp0e.aes")  #DataLine🌱162
            os .remove ("xp0edoc.py")  #DataLine🌱163
            shutil .rmtree ("__pycache__")  #DataLine🌱164
            if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱165
                LOGS .info (str ("❌❌❌     Wrong кгץкภչ code   ❌❌❌"))  #DataLine🌱166
            else:  #DataLine🌱167
                cprint ("❌❌❌     Wrong кгץкภչ code   ❌❌❌","red")  #DataLine🌱168
            exit   #DataLine🌱169
    except Exception as Error:  #DataLine🌱170
        os .system ("clear")  #DataLine🌱171
        if ᴠʟᴋʏʀᴇ =="HEROKU":  #DataLine🌱172
            LOGS .info (str (Error))  #DataLine🌱173
        else:  #DataLine🌱174
            print (Error)  #DataLine🌱175
        pass 
# |⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|
# ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# ║ 
# ║ We won't be responsible for any kind of ban due to this bot.
# ║ Vlkyre was made for fun purpose and to make group management easier.
# ║ It's your concern if you spam and gets your account banned.
# ║ Also, Forks won't be entertained.
# ║ If you fork this repo and edit plugins, it's your concern for further updates.
# ║ Forking Repo is fine. But if you edit something we will not provide any help.
# ║ In short, Fork At Your Own Risk.
# ╚════════════╝
# |⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|