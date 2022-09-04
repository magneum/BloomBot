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
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.tagall = async (
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
let 𝕯𝖎𝖘𝖕𝖑𝖆𝖞;
let 𝕮𝖔𝖓𝖙𝖊𝖓𝖙;
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ӄryӄnz.profilePictureUrl(Vlkyre.chatID, "image");
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = `./👗Skins/Vlkyre_LabGreen.png`;
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
if (F𝖚𝖑𝖑_A𝖗𝖌𝖘) {
𝕮𝖔𝖓𝖙𝖊𝖓𝖙 = `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║Ῠ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
└╚═══════⋑

┌╔══Ῠ 
│║Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ 🕛𝐓𝐢𝐦𝐞:  ${moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
└╚═══════⋑

📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: ${F𝖚𝖑𝖑_A𝖗𝖌𝖘}`;
} else {
𝕮𝖔𝖓𝖙𝖊𝖓𝖙 = `┌╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
│║Ῠ 🕊️𝐍𝐚𝐦𝐞: ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ 🎭𝐂𝐡𝐚𝐭𝐈𝐃: ${Vlkyre.chatID.split("@")[0]}
└╚═══════⋑


┌╔══Ῠ 
│║Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${Vlkyre.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
│║Ῠ 🕛𝐓𝐢𝐦𝐞:  ${moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
└╚═══════⋑

📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: Attention Everyone`;
}
return await ӄryӄnz.sendMessage(
Vlkyre.chatID,
{
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: 𝕮𝖔𝖓𝖙𝖊𝖓𝖙,
mentions: Vlkyre.groupMetadata.participants.map((a) => a.id),
},
{ quoted: Vlkyre }
);
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
