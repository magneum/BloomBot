("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
require("../../𝐕𝐥𝐤𝐲𝐫𝐞🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../𝐕𝐥𝐤𝐲𝐫𝐞🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
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
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Vlkyre👒Hat/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Vlkyre🧭Compass/Group_Only");
let { webp2mp4File } = require(`../../𝐕𝐥𝐤𝐲𝐫𝐞🖋️L𝖎𝖇𝖗𝖆𝖗ყ/uploader`);
let { Image_Button } = require("../../Vlkyre👒Hat/Image_Button");
let { Video_Button } = require("../../Vlkyre👒Hat/Video_Button");
let { Bot_Not_Admin } = require("../../Vlkyre🧭Compass/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Vlkyre🧭Compass/Sender_Not_Admin");
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Vlkyre👒Hat/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.toimg = async (
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
) => {
let mime = (𝐕𝐥𝐤𝐲𝐫𝐞.quoted.msg || 𝐕𝐥𝐤𝐲𝐫𝐞.quoted).mimetype || "";
if (
𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage.isAnimated !== true
) {
if (!quoted) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Could not find any sticker in context!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the sticker>`
);
}
if (!/webp/.test(mime)) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Could not find any sticker in context!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the sticker>`
);
}
let media = await ӄ𝖗𝖞ӄ𝖓𝖟.downloadAndSaveMediaMessage(quoted);
let ran = await getRandom(`.png`);
exec(`ffmpeg -i ${media} ${ran}`, async (Èrrðr) => {
fs.unlinkSync(media);
if (Èrrðr) 𝐕𝐥𝐤𝐲𝐫𝐞.reply(Èrrðr);
let buffer = fs.readFileSync(ran);
await Image_Button(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘,
buffer,
"|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|"
);
await fs.unlinkSync(ran);
});
} else if (
𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage.isAnimated == true
) {
if (!quoted) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Could not find any sticker in context!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the sticker>`
);
}

if (!/webp/.test(mime)) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄ𝖗𝖞ӄ𝖓𝖟,
𝐕𝐥𝐤𝐲𝐫𝐞,
`*❌ERROR:*  Could not find any sticker in context!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the sticker>`
);
}
let media = await ӄ𝖗𝖞ӄ𝖓𝖟.downloadAndSaveMediaMessage(quoted);
let webpToMp4 = await webp2mp4File(media);
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
{
video: {
url: webpToMp4.result,
caption: "|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|",
},
gifPlayback: true,
},
{ quoted: 𝐕𝐥𝐤𝐲𝐫𝐞 }
);
await fs.unlinkSync(media);
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
