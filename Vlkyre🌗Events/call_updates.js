("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
let call_updates = async (𝖍𝖆𝖜ӄ, json) => {
let ᴄᴀʟʟᴇʀɪᴅ = json.content[0].attrs["call-creator"];
if (json.content[0].tag == "offer") {
let ᴘᴏᴡ = await 𝖍𝖆𝖜ӄ.sendContact(ᴄᴀʟʟᴇʀɪᴅ, global.owner);
await 𝖍𝖆𝖜ӄ
.sendMessage(
ᴄᴀʟʟᴇʀɪᴅ,
{
contextInfo: { mentionedJid: [ᴄᴀʟʟᴇʀɪᴅ] },
image: { url: "./Vlkyre👗Skins/𝐕𝐥𝐤𝐲𝐫𝐞_Orange.png" },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║ *❣️ ɴᴀᴍᴇ:* ${𝐕𝐥𝐤𝐲𝐫𝐞.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${𝐕𝐥𝐤𝐲𝐫𝐞.chatID.split("@")[0]}
╚═══════╝

𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐜 𝐬𝐲𝐬𝐭𝐞𝐦 𝐛𝐥𝐨𝐜𝐤!
𝐃𝐨𝐧'𝐭 𝐜𝐚𝐥𝐥 𝐛𝐨𝐭!
𝐏𝐥𝐞𝐚𝐬𝐞 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐒𝐮𝐝𝐨 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐎𝐩𝐞𝐧 𝐈𝐭 !


🏮 (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐑𝐮𝐥𝐞𝐬 🏮
⚠️ Do not abuse/disrespect bot and its owner.
⚠️ If you want this bot in your group then contact devs.
⚠️ Do not call bot, if you do then you'll get blocked by bot.
⚠️ If you see any bug/error in bot then report it to devs in the above group chats.
⚠️ Do not spam bot with commands, if bot is not responding then it means either bot is offline or there's internet issue at server end.`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "support",
buttonText: { displayText: prefix + "support" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [ᴄᴀʟʟᴇʀɪᴅ] },
quoted: ᴘᴏᴡ,
}
)
.catch((e) => console.log(e));
await 𝖍𝖆𝖜ӄ
.updateBlockStatus(ᴄᴀʟʟᴇʀɪᴅ, "block")
.catch((e) => console.log(e));
}
};
module.exports = {
Vclup: call_updates,
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
