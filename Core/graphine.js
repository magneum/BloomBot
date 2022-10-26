("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../process");
var {
smsg,
formatp,
formatDate,
getTime,
isUrl,
sleep,
clockString,
runtime,
fetchJson,
getBuffer,
jsonformat,
format,
parseMention,
GIFBufferToVideoBuffer,
getRandom,
} = require("./myfunc");
var fs = require("fs");
var os = require("os");
var path = require("path");
var util = require("util");
var chalk = require("chalk");
var moment = require("moment-timezone");
var msgFilter = require("./msgFilter.js");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (νℓкуяє, νcнαт, update, store) => {
νℓкуяє.body =
νcнαт.mtype === "conversation"
? νcнαт.message.conversation
: νcнαт.mtype == "imageMessage"
? νcнαт.message.imageMessage.caption
: νcнαт.mtype == "videoMessage"
? νcнαт.message.videoMessage.caption
: νcнαт.mtype == "extendedTextMessage"
? νcнαт.message.extendedTextMessage.text
: νcнαт.mtype == "buttonsResponseMessage"
? νcнαт.message.buttonsResponseMessage.selectedButtonId
: νcнαт.mtype == "listResponseMessage"
? νcнαт.message.listResponseMessage.singleSelectReply.selectedRowId
: νcнαт.mtype == "templateButtonReplyMessage"
? νcнαт.message.templateButtonReplyMessage.selectedId
: νcнαт.mtype === "messageContextInfo"
? νcнαт.message.buttonsResponseMessage?.selectedButtonId ||
νcнαт.message.listResponseMessage?.singleSelectReply.selectedRowId ||
νcнαт.text
: "";
νℓкуяє.budy = typeof νcнαт.text == "string" ? νcнαт.text : "";
νℓкуяє.icmd = νℓкуяє.body.startsWith(prefix);
νℓкуяє.isCmd =
prefix.includes(νℓкуяє.body != "" && νℓкуяє.body.slice(0, 1)) &&
νℓкуяє.body.slice(1) != "";
νℓкуяє.command = νℓкуяє.isCmd
? νℓкуяє.body.slice(1).trim().split(" ")[0].toLowerCase()
: "";
νℓкуяє.args = νℓкуяє.body.trim().split(/ +/).slice(1);
νℓкуяє.pushname = νcнαт.pushName || "No Name";
νℓкуяє.botNumber = await νℓкуяє.decodeJid(νℓкуяє.user.id);
νℓкуяє.isCreator = [νℓкуяє.botNumber, ...global.mods]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(νcнαт.sender);
νℓкуяє.itsMe = νcнαт.sender == νℓкуяє.botNumber ? true : false;
νℓкуяє.botName = process.env.NAME || "Mizuhara";
νℓкуяє.Fullarg = νℓкуяє.args.join(" ");
νℓкуяє.contant = q = νℓкуяє.args.join(" ");
νℓкуяє.quoted = νcнαт.quoted ? νcнαт.quoted : νcнαт;
νℓкуяє.mime = (νℓкуяє.quoted.msg || νℓкуяє.quoted).mimetype || "";
νℓкуяє.isMedia = /image|video|sticker|audio/.test(νℓкуяє.mime);
νℓкуяє.time = moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss");
νℓкуяє.mentionByTag =
νcнαт.mtype == "extendedTextMessage" &&
νcнαт.message.extendedTextMessage.contextInfo != null
? νcнαт.message.extendedTextMessage.contextInfo.mentionedJid
: [];
νℓкуяє.mentionByReply =
νcнαт.mtype == "extendedTextMessage" &&
νcнαт.message.extendedTextMessage.contextInfo != null
? νcнαт.message.extendedTextMessage.contextInfo.participant || ""
: "";
return νℓкуяє;
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
