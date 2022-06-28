# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|
# 
# (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# 
# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|
import os #line:1
import logging #line:2
import git as 𝖛 #line:3
import subprocess #line:4
from loguru import *#line:5
from zipfile import ZipFile #line:6
import pyAesCrypt as кгץкภչr #line:7
from termcolor import *#line:8
import shutil #line:9
from datetime import *#line:10
from os import getenv #line:11
from dotenv import load_dotenv #line:12
load_dotenv ("./Vʟӄʏʀɛ.env")#line:13
ᴠʟᴋʏʀᴇ =getenv ("HEROKU",None )#line:14
𝖈𝖔𝖗𝖑𝖊𝖝 =getenv ("HEROKU",None )#line:15
ᴠʟᴋʏʀᴇi =getenv ("CODE",None )#line:16
BFS =64 *1024 #line:17
subprocess .run (["git","config","pull.rebase","false"],check =True ,stdout =subprocess .PIPE ).stdout #line:18
subprocess .run (["python","Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🐍Ş𝖎𝖕𝖍𝖔𝖓/🐍𝖛𝖑𝖐𝖕𝖞.py"],check =True ,stdout =subprocess .PIPE ).stdout #line:19
class InterceptHandler (logging .Handler ):#line:20
    LEVELS_MAP ={logging .CRITICAL :"CRITICAL",logging .ERROR :"ERROR",logging .WARNING :"WARNING",logging .INFO :"INFO",logging .DEBUG :"DEBUG",}#line:27
    def _get_level (OOO0OO00OO0OOO00O ,O000O0O00O00OOO00 ):#line:29
        return OOO0OO00OO0OOO00O .LEVELS_MAP .get (O000O0O00O00OOO00 .levelno ,O000O0O00O00OOO00 .levelno )#line:30
    def emit (OOOOO0OOOO000O00O ,OOOO0OO0OOOO0O00O ):#line:32
        O0OO00OO0OO0O000O =logger .opt (depth =6 ,exception =OOOO0OO0OOOO0O00O .exc_info ,ansi =True ,lazy =True )#line:35
        O0OO00OO0OO0O000O .log (OOOOO0OOOO000O00O ._get_level (OOOO0OO0OOOO0O00O ),OOOO0OO0OOOO0O00O .getMessage ())#line:36
logging .basicConfig (handlers =[InterceptHandler ()],level =logging .INFO )#line:39
LOGS =logging .getLogger (__name__ )#line:40
if ᴠʟᴋʏʀᴇi is not None :#line:41
    if os .path .exists ("Zz4xp01pklo"):#line:42
        pass #line:43
    else :#line:44
        try :#line:45
            os .system ("git clone https://github.com/Krakinz/Zz4xp01pklo.git")#line:46
        except Exception as Error :#line:47
            if ᴠʟᴋʏʀᴇ =="HEROKU":#line:48
                LOGS .info (str (Error ))#line:49
            else :#line:50
                print (Error )#line:51
            pass #line:52
    if os .path .exists ("xp0e.zip"):#line:53
        pass #line:54
    else :#line:55
        files =["Zz4xp01pklo/xp0e.zip","Zz4xp01pklo/2xp0e.zip","Zz4xp01pklo/3xp0e.zip","Zz4xp01pklo/4xp0e.zip","Zz4xp01pklo/5xp0e.zip","Zz4xp01pklo/6xp0e.zip","Zz4xp01pklo/7xp0e.zip","Zz4xp01pklo/8xp0e.zip",]#line:65
        for f in files :#line:66
            shutil .move (f ,".")#line:67
        shutil .rmtree ("Zz4xp01pklo")#line:68
    try :#line:69
        with ZipFile ("xp0e.zip")as zf :#line:70
            zf .extractall ()#line:71
        with ZipFile ("2xp0e.zip")as zf :#line:72
            zf .extractall ()#line:73
        with ZipFile ("3xp0e.zip")as zf :#line:74
            zf .extractall ()#line:75
        with ZipFile ("4xp0e.zip")as zf :#line:76
            zf .extractall ()#line:77
        with ZipFile ("5xp0e.zip")as zf :#line:78
            zf .extractall ()#line:79
        with ZipFile ("6xp0e.zip")as zf :#line:80
            zf .extractall ()#line:81
        with ZipFile ("7xp0e.zip")as zf :#line:82
            zf .extractall ()#line:83
        with ZipFile ("8xp0e.zip")as zf :#line:84
            zf .extractall ()#line:85
        try :#line:86
            files =["2xp0e.zip","3xp0e.zip","4xp0e.zip","5xp0e.zip","6xp0e.zip","7xp0e.zip","8xp0e.zip",]#line:95
            for f in files :#line:96
                os .remove (f )#line:97
        except Exception as Error :#line:98
            if ᴠʟᴋʏʀᴇ =="HEROKU":#line:99
                LOGS .info (str (Error ))#line:100
            else :#line:101
                print (Error )#line:102
            pass #line:103
    except Exception as Error :#line:104
        if ᴠʟᴋʏʀᴇ =="HEROKU":#line:105
            LOGS .info (str (Error ))#line:106
        else :#line:107
            print (Error )#line:108
        pass #line:109
    if os .path .isfile ("xp0e.py"):#line:111
        try :#line:112
            кгץкภչr .encryptFile ("xp0e.py","xp0e.aes",𝖈𝖔𝖗𝖑𝖊𝖝 ,BFS )#line:113
            os .remove ("xp0e.py")#line:114
        except Exception as Error :#line:115
            if ᴠʟᴋʏʀᴇ =="HEROKU":#line:116
                LOGS .info (str (Error ))#line:117
            else :#line:118
                print (Error )#line:119
        pass #line:120
    else :#line:121
        pass #line:122
    try :#line:124
        кгץкภչr .decryptFile ("xp0e.aes","xp0edoc.py",𝖈𝖔𝖗𝖑𝖊𝖝 ,BFS )#line:125
    except Exception as Error :#line:126
        if ᴠʟᴋʏʀᴇ =="HEROKU":#line:127
            LOGS .info (str (Error ))#line:128
        else :#line:129
            print (Error )#line:130
        pass #line:131
    try :#line:133
        files =["2xp0e.aes","3xp0e.aes","4xp0e.aes","5xp0e.aes","6xp0e.aes","7xp0e.aes","8xp0e.aes",]#line:142
        for f in files :#line:143
            os .remove (f )#line:144
    except Exception as Error :#line:145
        if ᴠʟᴋʏʀᴇ =="HEROKU":#line:146
            LOGS .info (str (Error ))#line:147
        else :#line:148
            print (Error )#line:149
        pass #line:150
    try :#line:152
        from xp0edoc import *#line:153
        if ᴠʟᴋʏʀᴇi in YYUCCitinZfgQdrclRPOP :#line:154
            os .remove ("xp0e.zip")#line:155
            os .remove ("xp0e.aes")#line:156
            os .remove ("xp0edoc.py")#line:157
            shutil .rmtree ("__pycache__")#line:158
            os .system ('node --no-warnings Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/ᴋᴜɴᴀɪ.js')#line:159
        else :#line:160
            os .remove ("xp0e.zip")#line:161
            os .remove ("xp0e.aes")#line:162
            os .remove ("xp0edoc.py")#line:163
            shutil .rmtree ("__pycache__")#line:164
            if ᴠʟᴋʏʀᴇ =="HEROKU":#line:165
                LOGS .info (str ("❌❌❌     Wrong кгץкภչ code   ❌❌❌"))#line:166
            else :#line:167
                cprint ("❌❌❌     Wrong кгץкภչ code   ❌❌❌","red")#line:168
            exit #line:169
    except Exception as Error :#line:170
        os .system ("clear")#line:171
        if ᴠʟᴋʏʀᴇ =="HEROKU":#line:172
            LOGS .info (str (Error ))#line:173
        else :#line:174
            print (Error )#line:175
        pass 
# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|
# 
# (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
# 
# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|