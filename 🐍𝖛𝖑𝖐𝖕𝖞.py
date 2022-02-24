# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡| 
#             (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|
try:
    import subprocess
    subprocess.run(["git", "config", "--global", "user.name", "KryKnz"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "config", "--global", "user.email", "KryKnz@yandex.com"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "config", "pull.rebase", "false"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "init", "--initial-branch=KryTek"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "fetch", "origin", "KryTek"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "reset", "--hard", "origin/KryTek"], check=True, stdout=subprocess.PIPE).stdout
    subprocess.run(["git", "pull"], check=True, stdout=subprocess.PIPE).stdout
    print("🐍 𝐏𝐘𝐓𝐇𝐎𝐍: git sync done!")
    # subprocess.run(["python", "⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py"], check=True, stdout=subprocess.PIPE).stdout
except Exception as Error:
    print(Error)
    print("🐍 𝐏𝐘𝐓𝐇𝐎𝐍: Error In git sync!")
    print("🐍 𝐏𝐘𝐓𝐇𝐎𝐍: Trying TO Stash and ReTry!")
    try:
        subprocess.run(["git", "stash"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "stash", "drop"], check=True, stdout=subprocess.PIPE).stdout
        subprocess.run(["git", "pull"], check=True, stdout=subprocess.PIPE).stdout
    except Exception as Error:
        print(Error)
        print("🐍 𝐏𝐘𝐓𝐇𝐎𝐍: Nothing To Stash and Drop!")
        pass
    # subprocess.run(["python", "⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py"], check=True, stdout=subprocess.PIPE).stdout
# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡| 
#             (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
# |⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|