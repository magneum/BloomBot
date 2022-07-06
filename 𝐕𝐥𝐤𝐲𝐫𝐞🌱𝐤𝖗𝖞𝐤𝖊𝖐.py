# ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
# // ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# // ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# // ║ 
# // ║ We won't be responsible for any kind of ban due to this bot.
# // ║ Vlkyre was made for fun purpose and to make group management easier.
# // ║ It's your concern if you spam and gets your account banned.
# // ║ Also, Forks won't be entertained.
# // ║ If you fork this repo and edit plugins, it's your concern for further updates.
# // ║ Forking Repo is fine. But if you edit something we will not provide any help.
# // ║ In short, Fork At Your Own Risk.
# // ╚════════════╝
# ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
import os #Line:1
import logging #Line:2
import git as 𝖛 #Line:3
import subprocess #Line:4
from loguru import *#Line:5
from zipfile import ZipFile #Line:6
import pyAesCrypt as кгץкภչr #Line:7
from termcolor import *#Line:8
import shutil #Line:9
from datetime import *#Line:10
from os import getenv #Line:11
from dotenv import load_dotenv #Line:12
load_dotenv ("./Vlkyre.env")#Line:13
ᴠʟᴋʏʀᴇ =getenv ("HEROKU",None )#Line:14
𝖈𝖔𝖗𝖑𝖊𝖝 =getenv ("HEROKU",None )#Line:15
ᴠʟᴋʏʀᴇi =getenv ("CODE",None )#Line:16
BFS =64 *1024 #Line:17
subprocess .run (["git","config","pull.rebase","false"],check =True ,stdout =subprocess .PIPE ).stdout #Line:18
subprocess .run (["python","𝐕𝐥𝐤𝐲𝐫𝐞🐍Ş𝖎𝖕𝖍𝖔𝖓/🐍𝖛𝖑𝖐𝖕𝖞.py"],check =True ,stdout =subprocess .PIPE ).stdout #Line:19
class InterceptHandler (logging .Handler ):#Line:20
    LEVELS_MAP ={logging .CRITICAL :"CRITICAL",logging .ERROR :"ERROR",logging .WARNING :"WARNING",logging .INFO :"INFO",logging .DEBUG :"DEBUG",}#Line:27
    def _get_level (OOO0OO00OO0OOO00O ,O000O0O00O00OOO00 ):#Line:29
        return OOO0OO00OO0OOO00O .LEVELS_MAP .get (O000O0O00O00OOO00 .levelno ,O000O0O00O00OOO00 .levelno )#Line:30
    def emit (OOOOO0OOOO000O00O ,OOOO0OO0OOOO0O00O ):#Line:32
        O0OO00OO0OO0O000O =logger .opt (depth =6 ,exception =OOOO0OO0OOOO0O00O .exc_info ,ansi =True ,lazy =True )#Line:35
        O0OO00OO0OO0O000O .log (OOOOO0OOOO000O00O ._get_level (OOOO0OO0OOOO0O00O ),OOOO0OO0OOOO0O00O .getMessage ())#Line:36
logging .basicConfig (handlers =[InterceptHandler ()],level =logging .INFO )#Line:39
LOGS =logging .getLogger (__name__ )#Line:40
if ᴠʟᴋʏʀᴇi is not None :#Line:41
    if os .path .exists ("Zz4xp01pklo"):#Line:42
        pass #Line:43
    else :#Line:44
        try :#Line:45
            os .system ("git clone https://github.com/Krakinz/Zz4xp01pklo.git")#Line:46
        except Exception as Error :#Line:47
            if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:48
                LOGS .info (str (Error ))#Line:49
            else :#Line:50
                print (Error )#Line:51
            pass #Line:52
    if os .path .exists ("xp0e.zip"):#Line:53
        pass #Line:54
    else :#Line:55
        files =["Zz4xp01pklo/xp0e.zip","Zz4xp01pklo/2xp0e.zip","Zz4xp01pklo/3xp0e.zip","Zz4xp01pklo/4xp0e.zip","Zz4xp01pklo/5xp0e.zip","Zz4xp01pklo/6xp0e.zip","Zz4xp01pklo/7xp0e.zip","Zz4xp01pklo/8xp0e.zip",]#Line:65
        for f in files :#Line:66
            shutil .move (f ,".")#Line:67
        shutil .rmtree ("Zz4xp01pklo")#Line:68
    try :#Line:69
        with ZipFile ("xp0e.zip")as zf :#Line:70
            zf .extractall ()#Line:71
        with ZipFile ("2xp0e.zip")as zf :#Line:72
            zf .extractall ()#Line:73
        with ZipFile ("3xp0e.zip")as zf :#Line:74
            zf .extractall ()#Line:75
        with ZipFile ("4xp0e.zip")as zf :#Line:76
            zf .extractall ()#Line:77
        with ZipFile ("5xp0e.zip")as zf :#Line:78
            zf .extractall ()#Line:79
        with ZipFile ("6xp0e.zip")as zf :#Line:80
            zf .extractall ()#Line:81
        with ZipFile ("7xp0e.zip")as zf :#Line:82
            zf .extractall ()#Line:83
        with ZipFile ("8xp0e.zip")as zf :#Line:84
            zf .extractall ()#Line:85
        try :#Line:86
            files =["2xp0e.zip","3xp0e.zip","4xp0e.zip","5xp0e.zip","6xp0e.zip","7xp0e.zip","8xp0e.zip",]#Line:95
            for f in files :#Line:96
                os .remove (f )#Line:97
        except Exception as Error :#Line:98
            if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:99
                LOGS .info (str (Error ))#Line:100
            else :#Line:101
                print (Error )#Line:102
            pass #Line:103
    except Exception as Error :#Line:104
        if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:105
            LOGS .info (str (Error ))#Line:106
        else :#Line:107
            print (Error )#Line:108
        pass #Line:109
    if os .path .isfile ("xp0e.py"):#Line:111
        try :#Line:112
            кгץкภչr .encryptFile ("xp0e.py","xp0e.aes",𝖈𝖔𝖗𝖑𝖊𝖝 ,BFS )#Line:113
            os .remove ("xp0e.py")#Line:114
        except Exception as Error :#Line:115
            if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:116
                LOGS .info (str (Error ))#Line:117
            else :#Line:118
                print (Error )#Line:119
        pass #Line:120
    else :#Line:121
        pass #Line:122
    try :#Line:124
        кгץкภչr .decryptFile ("xp0e.aes","xp0edoc.py",𝖈𝖔𝖗𝖑𝖊𝖝 ,BFS )#Line:125
    except Exception as Error :#Line:126
        if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:127
            LOGS .info (str (Error ))#Line:128
        else :#Line:129
            print (Error )#Line:130
        pass #Line:131
    try :#Line:133
        files =["2xp0e.aes","3xp0e.aes","4xp0e.aes","5xp0e.aes","6xp0e.aes","7xp0e.aes","8xp0e.aes",]#Line:142
        for f in files :#Line:143
            os .remove (f )#Line:144
    except Exception as Error :#Line:145
        if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:146
            LOGS .info (str (Error ))#Line:147
        else :#Line:148
            print (Error )#Line:149
        pass #Line:150
    try :#Line:152
        from xp0edoc import *#Line:153
        if ᴠʟᴋʏʀᴇi in YYUCCitinZfgQdrclRPOP :#Line:154
            os .remove ("xp0e.zip")#Line:155
            os .remove ("xp0e.aes")#Line:156
            os .remove ("xp0edoc.py")#Line:157
            shutil .rmtree ("__pycache__")#Line:158
            os .system ("forever --no-warnings Vlkyre🎒Bag/ӄӄ.js")#Line:159
        else :#Line:160
            os .remove ("xp0e.zip")#Line:161
            os .remove ("xp0e.aes")#Line:162
            os .remove ("xp0edoc.py")#Line:163
            shutil .rmtree ("__pycache__")#Line:164
            if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:165
                LOGS .info (str ("❌❌❌     Wrong кгץкภչ code   ❌❌❌"))#Line:166
            else :#Line:167
                cprint ("❌❌❌     Wrong кгץкภչ code   ❌❌❌","red")#Line:168
            exit #Line:169
    except Exception as Error :#Line:170
        os .system ("clear")#Line:171
        if ᴠʟᴋʏʀᴇ =="HEROKU":#Line:172
            LOGS .info (str (Error ))#Line:173
        else :#Line:174
            print (Error )#Line:175
        pass 
# ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
# // ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# // ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
# // ║ 
# // ║ We won't be responsible for any kind of ban due to this bot.
# // ║ Vlkyre was made for fun purpose and to make group management easier.
# // ║ It's your concern if you spam and gets your account banned.
# // ║ Also, Forks won't be entertained.
# // ║ If you fork this repo and edit plugins, it's your concern for further updates.
# // ║ Forking Repo is fine. But if you edit something we will not provide any help.
# // ║ In short, Fork At Your Own Risk.
# // ╚════════════╝
# ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");