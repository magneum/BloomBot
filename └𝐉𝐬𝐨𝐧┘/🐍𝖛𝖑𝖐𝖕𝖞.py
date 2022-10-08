# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
# /*
#  * * * * * * * * * * |        (𝐜)Vlkyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
#  */
# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
import os #line:1
import logging #line:2
import pathlib #line:3
import git as 𝖛 #line:4
import subprocess #line:5
from loguru import *#line:6
from datetime import *#line:7
from termcolor import *#line:8
from os import getenv #line:9
from dotenv import load_dotenv #line:10
load_dotenv ("./ᴠʟᴋʏʀᴇ™.env")#line:11
ᴠʟᴋʏʀᴇ =getenv ("HEROKU",None )#line:12
𝖈𝖔𝖗𝖑𝖊𝖝 =getenv ("HEROKU",None )#line:13
ᴠʟᴋʏʀᴇi =getenv ("CODE",None )#line:14
class InterceptHandler (logging .Handler ):#line:15
    LEVELS_MAP ={logging .CRITICAL :"CRITICAL",logging .ERROR :"ERROR",logging .WARNING :"WARNING",logging .INFO :"INFO",logging .DEBUG :"DEBUG",}#line:22
    def _get_level (OOO0O0O0OOOOO00OO ,OO0OO000O0O00OO0O ):#line:24
        return OOO0O0O0OOOOO00OO .LEVELS_MAP .get (OO0OO000O0O00OO0O .levelno ,OO0OO000O0O00OO0O .levelno )#line:25
    def emit (OO0O00OOO0O0OOOOO ,OOOO0OO0O00000O0O ):#line:27
        O00OO00000000OOO0 =logger .opt (depth =6 ,exception =OOOO0OO0O00000O0O .exc_info ,ansi =True ,lazy =True )#line:30
        O00OO00000000OOO0 .log (OO0O00OOO0O0OOOOO ._get_level (OOOO0OO0O00000O0O ),OOOO0OO0O00000O0O .getMessage ())#line:31
logging .basicConfig (handlers =[InterceptHandler ()],level =logging .INFO )#line:34
LOGS =logging .getLogger (__name__ )#line:35
pkgFl =pathlib .Path ("package-lock.json")#line:36
if pkgFl .exists ():#line:37
    os .remove ("package-lock.json")#line:38
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:39
        LOGS .info (str (f"🐍𝐏𝐲: package-lock.json has been cleaned!"))#line:40
    else :#line:41
        cprint (f"🐍𝐏𝐲: package-lock.json has been cleaned!","yellow")#line:42
else :#line:43
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:44
        LOGS .info (str (f"🐍𝐏𝐲: package-lock.json File does not exist!"))#line:45
    else :#line:46
        cprint (f"🐍𝐏𝐲: package-lock.json File does not exist!","green")#line:47
try :#line:48
    subprocess .run (["node","└𝐑𝐨𝐮𝐭𝐞┘/Krank.js"],check =True ,stdout =subprocess .PIPE ).stdout #line:49
except Exception as Error :#line:50
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:51
        LOGS .info (str (f"🐍𝐏𝐲: {Error}"))#line:52
    else :#line:53
        cprint (f"🐍𝐏𝐲: {Error}")#line:54
pkgFl =pathlib .Path ("package.json")#line:55
if pkgFl .exists ():#line:56
    os .remove ("package.json")#line:57
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:58
        LOGS .info (str (f"🐍𝐏𝐲: package.json has been cleaned!"))#line:59
    else :#line:60
        cprint (f"🐍𝐏𝐲: package.json has been cleaned!","yellow")#line:61
else :#line:62
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:63
        LOGS .info (str (f"🐍𝐏𝐲: package.json File does not exist!"))#line:64
    else :#line:65
        cprint (f"🐍𝐏𝐲: package.json File does not exist!","green")#line:66
try :#line:67
    subprocess .run (["git","config","--global","user.name","KryKnz"],check =True ,stdout =subprocess .PIPE ).stdout #line:68
    subprocess .run (["git","config","--global","user.email","krakinzkon@gmail.com"],check =True ,stdout =subprocess .PIPE ).stdout #line:69
    subprocess .run (["git","config","pull.rebase","false"],check =True ,stdout =subprocess .PIPE ).stdout #line:70
    subprocess .run (["git","init","--initial-branch=𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"],check =True ,stdout =subprocess .PIPE ).stdout #line:71
    subprocess .run (["git","fetch","origin","𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"],check =True ,stdout =subprocess .PIPE ).stdout #line:72
    subprocess .run (["git","reset","--hard","origin/𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"],check =True ,stdout =subprocess .PIPE ).stdout #line:73
    subprocess .run (["git","pull"],check =True ,stdout =subprocess .PIPE ).stdout #line:74
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:75
        LOGS .info (str ("🐍𝐏𝐲: git sync done!"))#line:76
    else :#line:77
        cprint ("🐍𝐏𝐲: git sync done!","green")#line:78
except Exception as Error :#line:79
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:80
        LOGS .info (str (f"🐍𝐏𝐲: {Error}"))#line:81
        LOGS .info (str ("🐍𝐏𝐲: Error In git sync!"))#line:82
        LOGS .info (str ("🐍𝐏𝐲: Trying TO Stash and ReTry!"))#line:83
    else :#line:84
        cprint ("🐍𝐏𝐲: Error In git sync!","red")#line:85
        cprint ("🐍𝐏𝐲: Trying TO Stash and ReTry!","yellow")#line:86
    try :#line:87
        subprocess .run (["git","config","--global","user.name","KryKnz"],check =True ,stdout =subprocess .PIPE ).stdout #line:88
        subprocess .run (["git","config","--global","user.email","krakinzkon@gmail.com"],check =True ,stdout =subprocess .PIPE ).stdout #line:89
        subprocess .run (["git","config","pull.rebase","false"],check =True ,stdout =subprocess .PIPE ).stdout #line:90
        subprocess .run (["git","init","--initial-branch=𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"],check =True ,stdout =subprocess .PIPE ).stdout #line:91
        subprocess .run (["git","fetch","origin","𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"],check =True ,stdout =subprocess .PIPE ).stdout #line:92
        subprocess .run (["git","reset","--hard","origin/𝐕𝐥𝐤𝐲𝐫𝐞▲𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩"],check =True ,stdout =subprocess .PIPE ).stdout #line:93
        subprocess .run (["git","stash"],check =True ,stdout =subprocess .PIPE ).stdout #line:94
        subprocess .run (["git","stash","drop"],check =True ,stdout =subprocess .PIPE ).stdout #line:95
        subprocess .run (["git","pull"],check =True ,stdout =subprocess .PIPE ).stdout #line:96
    except Exception as Error :#line:97
        if ᴠʟᴋʏʀᴇ =="HEROKU":#line:98
            LOGS .info (str (f"🐍𝐏𝐲: {Error}"))#line:99
            LOGS .info (str ("🐍𝐏𝐲: Nothing To Stash and Drop!"))#line:100
        else :#line:101
            cprint (f"🐍𝐏𝐲: {Error}")#line:102
            cprint ("🐍𝐏𝐲: Nothing To Stash and Drop!","blue")#line:103
try :#line:104
    subprocess .run (["npm","install","--force","--save"],check =True ,stdout =subprocess .PIPE ).stdout #line:105
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:106
        LOGS .info (str (f"🐍𝐏𝐲: npm install done using python subprocess!"))#line:107
    else :#line:108
        cprint (f"🐍𝐏𝐲: npm install done using python subprocess!")#line:109
except Exception as Error :#line:110
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:111
        LOGS .info (str (f"🐍𝐏𝐲: {Error}"))#line:112
    else :#line:113
        cprint (f"🐍𝐏𝐲: {Error}")#line:114
pkgFl =pathlib .Path ("package-lock.json")#line:115
if pkgFl .exists ():#line:116
    os .remove ("package-lock.json")#line:117
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:118
        LOGS .info (str (f"🐍𝐏𝐲: package-lock.json has been cleaned!"))#line:119
    else :#line:120
        cprint (f"🐍𝐏𝐲: package-lock.json has been cleaned!","yellow")#line:121
else :#line:122
    if ᴠʟᴋʏʀᴇ =="HEROKU":#line:123
        LOGS .info (str (f"🐍𝐏𝐲: package-lock.json File does not exist!"))#line:124
    else :#line:125
        cprint (f"🐍𝐏𝐲: package-lock.json File does not exist!","green")
# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
# /*
#  * * * * * * * * * * |        (𝐜)Vlkyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
#  */
# ("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");