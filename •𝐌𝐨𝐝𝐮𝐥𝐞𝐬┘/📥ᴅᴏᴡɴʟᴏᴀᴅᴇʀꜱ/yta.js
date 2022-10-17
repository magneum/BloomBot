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
require("../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
mp3BufferToVideoBuffer,
getRandom,
} = require(`../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ`);
var Hx = require("hxz-api");
var http = require("http");
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let yts = require(`yt-search`);
let Tinyurl = require("tinyurl-api");
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { yta } = require(`../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/y2mate`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { DownloaderHelper } = require("node-downloader-helper");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Image_Button } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let { yta_var } = require(`../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/vYTServers`);
let { ytv_var } = require(`../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/vYTServers`);
let YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");

var pHxz = require("hxz-api");
var pSearch = require("yt-search");
var pShort = require("tinyurl-api");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.yta = async (
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
if (Vlkyre.A𝖗𝖌𝖘.length === 0) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:* No query provided!
*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
);
}
if (Vlkyre.A𝖗𝖌𝖘.includes("yout")) {
if (!YouTube_Regex.test(Vlkyre.A𝖗𝖌𝖘[0])) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:* No query provided!
*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
);
}
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let string;
if (YouTube_Regex.test(Vlkyre.A𝖗𝖌𝖘[0])) {
string = Vlkyre.A𝖗𝖌𝖘[0];
} else {
string = F𝖚𝖑𝖑_A𝖗𝖌𝖘;
}
var raw = await pSearch(string);
var item = raw.videos.slice(0, 1);
if (!raw) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:* No Music item!
*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
item.forEach(function (data) {
try {
pHxz.youtube(data.url).then(async (response) => {
var shorten = await pShort(response.mp3);
let dFile = "./" + Vlkyre.key.id + ".mp3";
let dLoader = new DownloaderHelper(shorten, "./", {
fileName: Vlkyre.key.id + ".mp3",
});
await dLoader
.start()
.then(async (response) => {
var voiceLineProtocolo = fs.readFileSync(dFile);
await ӄryӄnz.sendMessage(
Vlkyre.chatID,
voiceLineProtocolo,
"audioMessage",
{
quoted: Vlkyre,
mimetype: "audio/mp4",
}
);
})
.catch(async (error) => {
return await Caught(ӄryӄnz, Vlkyre, error);
});
await dLoader.on("end", async () => {
await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
item.thumbnail,
`𝐘𝐨𝐮𝐓𝐮𝐛𝐞⭕️𝐌𝐮𝐬𝐢𝐜
🍻𝐓𝐢𝐭𝐥𝐞: ${item.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${item.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${item.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${item.author.name}
🔗𝐋𝐢𝐧𝐤: ${item.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${item.description}


*👇🏽‍𝐏𝐫𝐞𝐬𝐬 𝐓𝐡𝐢𝐬👇🏽‍*
_${shorten}_`
);
});
await dLoader.on("error", async (error) => {
return await Caught(ӄryӄnz, Vlkyre, error);
});
});
} catch (error) {
Caught(ӄryӄnz, Vlkyre, error);
}
});
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
