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
require("../../🤖Utilities/Settings");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../🤖Utilities/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let Economy = require(`../../🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.dbrem = async (
ӄryӄnz,
Vlkyre,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body
) => {
if (Vlkyre.mentionByReply) {
let ʀᴇᴘʟɪᴇᴅ =
Vlkyre.mtype == "extendedTextMessage" &&
Vlkyre.message.extendedTextMessage.contextInfo != null
? Vlkyre.message.extendedTextMessage.contextInfo.participant || ""
: "";
if (Vlkyre.isCreator === ʀᴇᴘʟɪᴇᴅ) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
"*❌ERROR:*  You dumb! This Command Does't work on Owner and Mods!"
);
}
if (Vlkyre.isSenderTUF === ʀᴇᴘʟɪᴇᴅ) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
"*❌ERROR:*  You dumb! This Command Does't work on Owner and Mods!"
);
}
await Economy.findOne(
{
ID: ʀᴇᴘʟɪᴇᴅ,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr));
if (!userEco) {
let newUser = new Economy({
ID: ʀᴇᴘʟɪᴇᴅ,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save().catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./👗Skins/Vlkyre_DB.png",
`That User Has No Money!`
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
userEco.delete().catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
await ӄryӄnz.sendMessage(Vlkyre.chatID, {
text: "Pregress: 10%",
contextInfo: { mentionedJid: [ʀᴇᴘʟɪᴇᴅ] },
});
await ӄryӄnz.sendMessage(Vlkyre.chatID, {
text: "Pregress: 40%",
contextInfo: { mentionedJid: [ʀᴇᴘʟɪᴇᴅ] },
});
await ӄryӄnz.sendMessage(Vlkyre.chatID, {
text: "Pregress: 80%",
contextInfo: { mentionedJid: [ʀᴇᴘʟɪᴇᴅ] },
});
await ӄryӄnz.sendMessage(Vlkyre.chatID, {
text: "Pregress: 100%",
contextInfo: { mentionedJid: [ʀᴇᴘʟɪᴇᴅ] },
});
await ӄryӄnz.sendMessage(Vlkyre.chatID, {
text: `Database Of @${
ʀᴇᴘʟɪᴇᴅ.split("@")[0]
} has been successfully cleaned!`,
contextInfo: { mentionedJid: [ʀᴇᴘʟɪᴇᴅ] },
});
}
}
);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
} else {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:*  Argument Needed!
*⚡USAGE:* ${prefix}${Final_Name} <reply to person>`
);
}
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
