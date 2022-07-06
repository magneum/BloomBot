("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)Vlyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
exports.Image_Button = async (𝖍𝖆𝖜ӄ, Vlyre, A𝖗𝖌𝖘, M𝖊𝖉𝖎𝖆, 𝕮𝖔𝖓𝖙𝖊𝖓𝖙) => {
let usedUser = require(`../Vlkyre🌤️Cloud/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
let ᴍꜱᴇᴄ = require("parse-ms");
let ʙᴏᴛ_ᴜꜱᴇᴅ;
let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
await usedUser.findOne(
{
User: Vlyre.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Vlyre, 𝕰𝖗𝖗𝖔𝖗);
if (!ꜱᴇʀᴄ) {
ʙᴏᴛ_ᴜꜱᴇᴅ = 0
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds
}});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await 𝖍𝖆𝖜ӄ.sendPresenceUpdate("composing", Vlyre.chatID);
let ʀᴇᴀᴄᴛ;
if (Vlyre.isReply) {
var Receiver =
Vlyre.mtype == "extendedTextMessage" &&
Vlyre.message.extendedTextMessage.contextInfo != null
? Vlyre.message.extendedTextMessage.contextInfo.participant || ""
: "";
ʀᴇᴀᴄᴛ = await 𝖍𝖆𝖜ӄ
.sendMessage(
Vlyre.chatID,
{
contextInfo: { mentionedJid: [Vlyre.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Vlyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Vlyre.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
║🕰️ *ʟᴀꜱᴛ_ᴜꜱᴇᴅ:* ${ʟᴀꜱᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}s
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP🦀",
buttonText: { displayText: prefix + "HELP🦀" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Vlyre.sender, Receiver] },
quoted: Vlyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (Vlyre.mentionByTag) {
var Receiver =
Vlyre.mtype == "extendedTextMessage" &&
Vlyre.message.extendedTextMessage.contextInfo != null
? Vlyre.message.extendedTextMessage.contextInfo.mentionedJid
: [];
ʀᴇᴀᴄᴛ = await 𝖍𝖆𝖜ӄ
.sendMessage(
Vlyre.chatID,
{
contextInfo: { mentionedJid: [Vlyre.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Vlyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Vlyre.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
║🕰️ *ʟᴀꜱᴛ_ᴜꜱᴇᴅ:* ${ʟᴀꜱᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}s
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP🦀",
buttonText: { displayText: prefix + "HELP🦀" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Vlyre.sender, Receiver] },
quoted: Vlyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
ʀᴇᴀᴄᴛ = await 𝖍𝖆𝖜ӄ
.sendMessage(
Vlyre.chatID,
{
contextInfo: { mentionedJid: [Vlyre.sender] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Vlyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Vlyre.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
║🕰️ *ʟᴀꜱᴛ_ᴜꜱᴇᴅ:* ${ʟᴀꜱᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}s
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "HELP🦀",
buttonText: { displayText: prefix + "HELP🦀" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Vlyre,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let ʀᴇᴀᴄᴛionMessage = {
ʀᴇᴀᴄᴛ: {
text: `⚡`,
key: ʀᴇᴀᴄᴛ.key,
},
};
console.log(ʀᴇᴀᴄᴛ);
return await 𝖍𝖆𝖜ӄ
.sendMessage(Vlyre.chatID, ʀᴇᴀᴄᴛionMessage)
.catch((e) => console.log(e));
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)Vlyre 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");