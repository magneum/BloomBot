`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Ѷ𝖑𝐤𝐲𝖗𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
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
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
let { Image_Button } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let { Video_Button } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
let { Bot_Not_Admin } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Ѷ𝖑𝐤𝐲𝖗𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.tagall = async (
ӄ𝖗𝖞ӄ𝖓𝖟,
Ѷ𝖑𝐤𝐲𝖗𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
mentionByTag,
mentionByReply
) => {
if (!isSenderAdmin && !isSenderTUF)
return await Sender_Not_Admin(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖑𝐤𝐲𝖗𝖊);
if (!isBotAdmin && !isSenderTUF) return await Bot_Not_Admin(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖑𝐤𝐲𝖗𝖊);
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
let 𝕯𝖎𝖘𝖕𝖑𝖆𝖞;
let 𝕮𝖔𝖓𝖙𝖊𝖓𝖙;
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ӄ𝖗𝖞ӄ𝖓𝖟.profilePictureUrl(Ѷ𝖑𝐤𝐲𝖗𝖊.chatID, "image");
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = `./Ѷ𝖑𝐤𝐲𝖗𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖑𝐤𝐲𝖗𝖊_𝖕𝖋𝖕𝖀𝖘𝖊𝖗.png`;
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
if (F𝖚𝖑𝖑_A𝖗𝖌𝖘) {
𝕮𝖔𝖓𝖙𝖊𝖓𝖙 = `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID.split("@")[0]}
╚═══════╝


*💫Pinged by:*  ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
*🕛Time:*  ${moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
*📌Message:* ${F𝖚𝖑𝖑_A𝖗𝖌𝖘}`;
} else {
𝕮𝖔𝖓𝖙𝖊𝖓𝖙 = `╔══『 𝐏𝐫𝐨𝐟𝐢𝐥𝐞𝐫® 』
║🕊️ *ɴᴀᴍᴇ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
║🎭 *ᴄʜᴀᴛɪᴅ:* ${Ѷ𝖑𝐤𝐲𝖗𝖊.chatID.split("@")[0]}
╚═══════╝


*💫Pinged by:*  ${Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "ɴᴏ_ɴᴀᴍᴇ"}
*🕛Time:*  ${moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
*📌Message:* 𝐀𝐭𝐭𝐞𝐧𝐭𝐢𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞`;
}
return await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
{
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: 𝕮𝖔𝖓𝖙𝖊𝖓𝖙,
mentions:  Ѷ𝖑𝐤𝐲𝖗𝖊.groupMetadata.participants.map((a) => a.id),
},
{ quoted: Ѷ𝖑𝐤𝐲𝖗𝖊 }
);
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
