("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
require("../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Ѷ𝖆𝖑.js");
let { ɴᴇᴄᴛᴏʀ } = require("../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ");
let messages_upsert = async (chatUpdate, Ѷ𝖎𝖔𝖓, ӄryӄnz) => {
try {
𝖈𝖍𝖆𝖙 = chatUpdate.messages[0];
if (!𝖈𝖍𝖆𝖙.message) return;
𝖈𝖍𝖆𝖙.message =
Object.keys(𝖈𝖍𝖆𝖙.message)[0] === "ephemeralMessage"
? 𝖈𝖍𝖆𝖙.message.ephemeralMessage.message
: 𝖈𝖍𝖆𝖙.message;
if (𝖈𝖍𝖆𝖙.key && 𝖈𝖍𝖆𝖙.key.remoteJid === "status@broadcast") return;
if (!ӄryӄnz.public && !𝖈𝖍𝖆𝖙.key.fromMe && chatUpdate.type === "notify")
return;
if (𝖈𝖍𝖆𝖙.key.id.startsWith("BAE5") && 𝖈𝖍𝖆𝖙.key.id.length === 16) return;
Vlkyre = await ɴᴇᴄᴛᴏʀ(ӄryӄnz, 𝖈𝖍𝖆𝖙, Ѷ𝖎𝖔𝖓);
require("../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Ѷ𝖆𝖑.js")(
ӄryӄnz,
Vlkyre,
chatUpdate,
Ѷ𝖎𝖔𝖓
).catch((error) => console.log(error));
} catch (err) {
console.log(err);
}
};
module.exports = {
Vmsgup: messages_upsert,
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
