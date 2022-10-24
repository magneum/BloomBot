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
var {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ`);
var qs = require("qs");
var cheerio = require("cheerio");
var { JSDOM } = require("jsdom");
var fetch = require("node-fetch");
var FormData = require("form-data");
var { fromBuffer } = require("file-type");
var fs = require(`fs`);
var util = require(`util`);
var hxz = require(`hxz-api`);
var chalk = require(`chalk`);
var db = require(`quick.db`);
var axios = require(`axios`);
var yts = require(`yt-search`);
var Present_Path = require(`path`);
var Tinyurl = require("tinyurl-api");
var canvacord = require(`canvacord`);
var { YouAudio } = require("./dL");
var { Character } = require(`mailist`);
var moment = require(`moment-timezone`);
var Carbon = require(`unofficial-carbon-now`);
var { exec, execSync } = require(`child_process`);
var { Caught } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
var Script_Name = Present_Path.basename(__filename);
var Final_Name = Script_Name.slice(0, -3).toLowerCase();
var { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
var { Image_Button } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
var { Video_Button } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
var { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
var YouTube_Regex =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.YouAudio = async (
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
var FinalGot;
if (YouTube_Regex.test(Vlkyre.A𝖗𝖌𝖘[0])) {
FinalGot = Vlkyre.A𝖗𝖌𝖘[0];
} else {
FinalGot = F𝖚𝖑𝖑_A𝖗𝖌𝖘;
}
var rawSearch = await yts(FinalGot);
if (!rawSearch) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:* No Music rawFound!
*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
var raw = rawSearch.videos.slice(0, 1);
raw.forEach(function (rawFound) {
if (rawFound.seconds > 1800) {
return Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
rawFound.thumbnail,
`❌𝗘𝗿𝗿𝗼𝗿: _Choose Smaller Audio less then 30mins!_

⭕️𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐀𝐈: ${rawFound.title}
🍻𝐓𝐢𝐭𝐥𝐞: ${rawFound.title}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${rawFound.timestamp}`
);
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
async function YouAudio(url) {
return new Promise(async (resolve, reject) => {
if (YouTube_Regex.test(url)) {
let ytId = YouTube_Regex.exec(url);
url = "https://youtu.be/" + ytId[1];
async function post(url, formdata) {
return fetch(url, {
method: "POST",
headers: {
accept: "*/*",
"accept-language": "en-US,en;q=0.9",
"content-type":
"application/x-www-form-urlencoded; charset=UTF-8",
},
body: Object.keys(formdata)
.map((key) => `${key}=${encodeURIComponent(formdata[key])}`)
.join("&"),
});
}
await post("https://www.y2mate.com/mates/en60/analyze/ajax", {
url,
q_auto: 0,
ajax: 1,
}).then((response) => response.json())
.then((response) => {
let document = new JSDOM(response.result).window.document;
let type = document.querySelectorAll("td");
let filesize = type[type.length - 10].innerHTML;
let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ["","",];
let thumb = document.querySelector("img").src;
let title = document.querySelector("b").innerHTML;
post("https://www.y2mate.com/mates/en60/convert", {
type: "youtube",
_id: id[1],
v_id: ytId[1],
ajax: "1",
token: "",
ftype: "mp3",
fquality: 128,
})
.then((response) => response.json())
.then((response) => {
let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize));
resolve({
dl_link: /<a.+?href="(.+?)"/.exec(response.result)[1],
thumb,
title,
filesizeF: filesize,
filesize: KB,
});
})
.catch(reject);
})
.catch(reject);
} else reject("Wrong Url String!");
});
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
YouAudio(rawFound.url).then(async (response) => {
var shorten = await Tinyurl(response.dl_link);
await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
rawFound.thumbnail,
`𝐘𝐨𝐮𝐓𝐮𝐛𝐞⭕️𝐌𝐮𝐬𝐢𝐜
🍻𝐓𝐢𝐭𝐥𝐞: ${rawFound.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${rawFound.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${rawFound.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${rawFound.author.name}
🔗𝐋𝐢𝐧𝐤: ${rawFound.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${rawFound.description}`
);
return await ӄryӄnz.sendMessage(
Vlkyre.chatID,
{
audio: { url: shorten },
contextInfo: {
externalAdReply: {
title: `🍻𝐓𝐢𝐭𝐥𝐞: ${rawFound.title}`,
body: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
mediaType: 2,
thumbnail: await getBuffer(rawFound.thumbnail),
mediaUrl: rawFound.thumbnail,
},
},
mimetype: `audio/mp3`,
fileName: `${rawFound.title}.mp3`,
},
{ quoted: Vlkyre }
);
});
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
