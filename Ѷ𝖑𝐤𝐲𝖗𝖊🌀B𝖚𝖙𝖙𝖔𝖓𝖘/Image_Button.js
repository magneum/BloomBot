("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
exports.Image_Button = async (𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, A𝖗𝖌𝖘, M𝖊𝖉𝖎𝖆, 𝕮𝖔𝖓𝖙𝖊𝖓𝖙) => {
let usedUser = require(`../Ѷ𝖑𝐤𝐲𝖗𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/usedUser`);
let ᴍꜱᴇᴄ = require("parse-ms");
let ʙᴏᴛ_ᴜꜱᴇᴅ;
let ʟᴀꜱᴛ_ᴜꜱᴇᴅ;
await usedUser.findOne(
{
User: Ѷ𝖑𝐤𝐲𝖗𝖊.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, ꜱᴇʀᴄ) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, 𝕰𝖗𝖗𝖔𝖗);
if (!ꜱᴇʀᴄ) {
ʙᴏᴛ_ᴜꜱᴇᴅ = 0
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = 0
} else {
let ᴄʟᴏᴄᴋ = ᴍꜱᴇᴄ(ꜱᴇʀᴄ.PermaTime - (Date.now() - ꜱᴇʀᴄ.LastTime));
ʙᴏᴛ_ᴜꜱᴇᴅ = ꜱᴇʀᴄ.Total;
ʟᴀꜱᴛ_ᴜꜱᴇᴅ = ᴄʟᴏᴄᴋ.seconds
}});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
// await 𝖍𝖆𝖜ӄ.sendPresenceUpdate("composing", Ѷ𝖑𝐤𝐲𝖗𝖊.chatID);
let ʀᴇᴀᴄᴛ;
if (Ѷ𝖑𝐤𝐲𝖗𝖊.isReply) {
var Receiver =
Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo.participant || ""
: "";
ʀᴇᴀᴄᴛ = await 𝖍𝖆𝖜ӄ
.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
║🕰️ *ʟᴀꜱᴛ_ᴜꜱᴇᴅ:* ${ʟᴀꜱᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}s
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
buttons: [
{
buttonId: prefix + "🌍HELP🌍",
buttonText: { displayText: prefix + "🌍HELP🌍" },
type: 1,
},
],
headerType: 4,
},
{
contextInfo: { mentionedJid: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender, Receiver] },
quoted: Ѷ𝖑𝐤𝐲𝖗𝖊,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else if (Ѷ𝖑𝐤𝐲𝖗𝖊.mentionByTag) {
var Receiver =
Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo.mentionedJid
: [];
ʀᴇᴀᴄᴛ = await 𝖍𝖆𝖜ӄ
.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender, Receiver] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
║🕰️ *ʟᴀꜱᴛ_ᴜꜱᴇᴅ:* ${ʟᴀꜱᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}s
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
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
contextInfo: { mentionedJid: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender, Receiver] },
quoted: Ѷ𝖑𝐤𝐲𝖗𝖊,
}
)
.catch((e) => console.log(e));
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
ʀᴇᴀᴄᴛ = await 𝖍𝖆𝖜ӄ
.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖑𝐤𝐲𝖗𝖊.sender] },
image: { url: M𝖊𝖉𝖎𝖆 },
caption: `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID.split("@")[0]}
║🤖 *ʙᴏᴛ_ᴜꜱᴇᴅ:* ${ʙᴏᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}
║🕰️ *ʟᴀꜱᴛ_ᴜꜱᴇᴅ:* ${ʟᴀꜱᴛ_ᴜꜱᴇᴅ || "ɴᴜʟʟ"}s
╚═══════╝

${𝕮𝖔𝖓𝖙𝖊𝖓𝖙}`,
footer: "*⦓ ⒸѶ𝖑𝐤𝐲𝖗𝖊 ⦔*\n▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ ◁",
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
quoted: Ѷ𝖑𝐤𝐲𝖗𝖊,
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
.sendMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.chatID, ʀᴇᴀᴄᴛionMessage)
.catch((e) => console.log(e));
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");