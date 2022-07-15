("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("./𝕷𝖆ყO𝖚𝖙");
let fs = require("fs");
let util = require("util");
let axios = require("axios");
let chalk = require("chalk");
let { unlink } = require("fs").promises;
let moment = require("moment-timezone");
let child_process = require("child_process");
let { sizeFormatter } = require("human-readable");
let { proto, getContentType } = require("@adiwajshing/baileys");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
let unixTimestampSeconds = (date = new Date()) =>
Math.floor(date.getTime() / 1000);
let sleep = (ms) => {
return new Promise((resolve) => {
setTimeout(resolve, ms);
});
};
exports.unixTimestampSeconds = unixTimestampSeconds;
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.generateMessageTag = (epoch) => {
let tag = (0, exports.unixTimestampSeconds)().toString();
if (epoch) tag += ".--" + epoch;
return tag;
};

exports.processTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

exports.getRandom = (ext) => {
return "${Math.floor(Math.random() * 10000)}${ext}";
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.getBuffer = async (url, options) => {
try {
options ? options : {};
let res = await axios({
method: "get",
url,
headers: {
DNT: 1,
"Upgrade-Insecure-Request": 1,
},
...options,
responseType: "arraybuffer",
});
return res.data;
} catch (err) {
return err;
}
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.fetchJson = async (url, options) => {
try {
options ? options : {};
let res = await axios({
method: "GET",
url: url,
headers: {
"User-Agent":
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
},
...options,
});
return res.data;
} catch (err) {
return err;
}
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var Vlkyre = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay =
Vlkyre > 0 ? Vlkyre + (Vlkyre == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.clockString = function (seconds) {
let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
let Vlkyre = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
return [h, Vlkyre, s].map((v) => v.toString().padStart(2, 0)).join(":");
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.sleep = async (ms) => {
return new Promise((resolve) => setTimeout(resolve, ms));
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.isUrl = (url) => {
return url.match(
new RegExp(
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
"gi"
)
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.getTime = (format, date) => {
if (date) {
return moment(date).locale("id").format(format);
} else {
return moment.tz("Asia/Jakarta").locale("id").format(format);
}
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.formatDate = (n, locale = "id") => {
let d = new Date(n);
return d.toLocaleDateString(locale, {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric",
hour: "numeric",
minute: "numeric",
second: "numeric",
});
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.formatp = sizeFormatter({
std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => "${literal} ${symbol}B",
});
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.logic = (check, inp, out) => {
if (inp.length !== out.length)
throw new Error("Input and Output must have same length");
for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
return null;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.generateProfilePicture = async (buffer) => {
let jimp = await jimp_1.read(buffer);
let min = jimp.getWidth();
let max = jimp.getHeight();
let cropped = jimp.crop(0, 0, min, max);
return {
img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
preview: await cropped
.scaleToFit(720, 720)
.getBufferAsync(jimp_1.MIME_JPEG),
};
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return "0 Bytes";
let k = 1024;
let dm = decimals < 0 ? 0 : decimals;
let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
let i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.getSizeMedia = (path) => {
return new Promise((resolve, reject) => {
if (/http/.test(path)) {
axios.get(path).then((res) => {
let length = parseInt(res.headers["content-length"]);
let size = exports.bytesToSize(length, 3);
if (!isNaN(length)) resolve(size);
});
} else if (Buffer.isBuffer(path)) {
let length = Buffer.byteLength(path);
let size = exports.bytesToSize(length, 3);
if (!isNaN(length)) resolve(size);
} else {
reject("error gatau apah");
}
});
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.parseMention = (text = "") => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
(v) => v[1] + "@s.whatsapp.net"
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.GIFBufferToVideoBuffer = async (image) => {
let filename = `${Math.random().toString(36)}`;
await fs.writeFileSync("./Vlkyre🎒Bag/${filename}.gif", image);
child_process.exec(
`ffmpeg -i ./Vlkyre🎒Bag/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Vlkyre🎒Bag/${filename}.mp4`
);
var buffer5 = await fs.readFileSync("./Vlkyre🎒Bag/${filename}.mp4");
Promise.all([
unlink("./Vlkyre🎒Bag/${filename}.mp4"),
unlink("./Vlkyre🎒Bag/${filename}.gif"),
]);
return buffer5;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.ɴᴇᴄᴛᴏʀ = async (ӄӄ, Vlkyre, Ѷ𝖎𝖔𝖓) => {
if (!Vlkyre) return Vlkyre;
let M = proto.WebMessageInfo;
if (Vlkyre.key) {
Vlkyre.id = Vlkyre.key.id;
Vlkyre.isBaileys = Vlkyre.id.startsWith("BAE5") && Vlkyre.id.length === 16;
Vlkyre.chatID = Vlkyre.key.remoteJid;
Vlkyre.fromMe = Vlkyre.key.fromMe;
Vlkyre.isGroup = Vlkyre.chatID.endsWith("@g.us");
Vlkyre.sender = ӄӄ.decodeJid(
(Vlkyre.fromMe && ӄӄ.user.id) ||
Vlkyre.participant ||
Vlkyre.key.participant ||
Vlkyre.chatID ||
""
);
if (Vlkyre.isGroup)
Vlkyre.participant = ӄӄ.decodeJid(Vlkyre.key.participant) || "";
}
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
if (Vlkyre.message) {
Vlkyre.mtype = getContentType(Vlkyre.message);
Vlkyre.msg =
Vlkyre.mtype == "viewOnceMessage"
? Vlkyre.message[Vlkyre.mtype].message[
getContentType(Vlkyre.message[Vlkyre.mtype].message)
]
: Vlkyre.message[Vlkyre.mtype];
Vlkyre.Body =
Vlkyre.mtype === "conversation"
? Vlkyre.message.conversation
: Vlkyre.mtype == "imageMessage"
? Vlkyre.message.imageMessage.caption
: Vlkyre.mtype == "videoMessage"
? Vlkyre.message.videoMessage.caption
: Vlkyre.mtype == "extendedTextMessage"
? Vlkyre.message.extendedTextMessage.text
: Vlkyre.mtype == "buttonsResponseMessage"
? Vlkyre.message.buttonsResponseMessage.selectedButtonId
: Vlkyre.mtype == "listResponseMessage"
? Vlkyre.message.listResponseMessage.singleSelectReply.selectedRowId
: Vlkyre.mtype == "templateButtonReplyMessage"
? Vlkyre.message.templateButtonReplyMessage.selectedId
: Vlkyre.mtype === "messageContextInfo"
? Vlkyre.message.buttonsResponseMessage?.selectedButtonId ||
Vlkyre.message.listResponseMessage?.singleSelectReply
.selectedRowId ||
Vlkyre.text
: "";
let quoted = (Vlkyre.quoted = Vlkyre.msg.contextInfo
? Vlkyre.msg.contextInfo.quotedMessage
: null);
Vlkyre.mentionedJid = Vlkyre.msg.contextInfo
? Vlkyre.msg.contextInfo.mentionedJid
: [];
if (Vlkyre.quoted) {
let type = getContentType(quoted);
Vlkyre.quoted = Vlkyre.quoted[type];
if (["productMessage"].includes(type)) {
type = getContentType(Vlkyre.quoted);
Vlkyre.quoted = Vlkyre.quoted[type];
}
if (typeof Vlkyre.quoted === "string")
Vlkyre.quoted = {
text: Vlkyre.quoted,
};
Vlkyre.quoted.mtype = type;
Vlkyre.quoted.id = Vlkyre.msg.contextInfo.stanzaId;
Vlkyre.quoted.chatID = Vlkyre.msg.contextInfo.remoteJid || Vlkyre.chatID;
Vlkyre.quoted.isBaileys = Vlkyre.quoted.id
? Vlkyre.quoted.id.startsWith("BAE5") && Vlkyre.quoted.id.length === 16
: false;
Vlkyre.quoted.sender = ӄӄ.decodeJid(Vlkyre.msg.contextInfo.participant);
Vlkyre.quoted.fromMe = Vlkyre.quoted.sender === (ӄӄ.user && ӄӄ.user.id);
Vlkyre.quoted.text =
Vlkyre.quoted.text ||
Vlkyre.quoted.caption ||
Vlkyre.quoted.conversation ||
Vlkyre.quoted.contentText ||
Vlkyre.quoted.selectedDisplayText ||
Vlkyre.quoted.title ||
"";
Vlkyre.quoted.mentionedJid = Vlkyre.msg.contextInfo
? Vlkyre.msg.contextInfo.mentionedJid
: [];
Vlkyre.getQuotedObj = Vlkyre.getQuotedMessage = async () => {
if (!Vlkyre.quoted.id) return false;
let q = await Ѷ𝖎𝖔𝖓.loadMessage(Vlkyre.chatID, Vlkyre.quoted.id, ӄӄ);
return exports.ɴᴇᴄᴛᴏʀ(ӄӄ, q, Ѷ𝖎𝖔𝖓);
};
let vM = (Vlkyre.quoted.fakeObj = M.fromObject({
key: {
remoteJid: Vlkyre.quoted.chatID,
fromMe: Vlkyre.quoted.fromMe,
id: Vlkyre.quoted.id,
},
message: quoted,
...(Vlkyre.isGroup ? { participant: Vlkyre.quoted.sender } : {}),
}));
Vlkyre.quoted.delete = () =>
ӄӄ.sendMessage(Vlkyre.quoted.chatID, { delete: vM.key });
Vlkyre.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
ӄӄ.copyNForward(jid, vM, forceForward, options);
Vlkyre.quoted.download = () => ӄӄ.downloadMediaMessage(Vlkyre.quoted);
}
}
if (Vlkyre.msg.url)
Vlkyre.download = () => ӄӄ.downloadMediaMessage(Vlkyre.msg);
Vlkyre.text =
Vlkyre.msg.text ||
Vlkyre.msg.caption ||
Vlkyre.message.conversation ||
Vlkyre.msg.contentText ||
Vlkyre.msg.selectedDisplayText ||
Vlkyre.msg.title ||
"";
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
Vlkyre.reply = (text, chatId = Vlkyre.chatID, options = {}) =>
Buffer.isBuffer(text)
? ӄӄ.sendMedia(chatId, text, "file", "", Vlkyre, { ...options })
: ӄӄ.sendText(chatId, text, Vlkyre, { ...options });
Vlkyre.copy = () => exports.ɴᴇᴄᴛᴏʀ(ӄӄ, M.fromObject(M.toObject(Vlkyre)));
Vlkyre.copyNForward = (
jid = Vlkyre.chatID,
forceForward = false,
options = {}
) => ӄӄ.copyNForward(jid, Vlkyre, forceForward, options);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
Vlkyre.isCommand = Vlkyre.Body.startsWith(prefix);
Vlkyre.isCmd =
prefix.includes(Vlkyre.Body != "" && Vlkyre.Body.slice(0, 1)) &&
Vlkyre.Body.slice(1) != "";
Vlkyre.commandName = Vlkyre.isCmd
? Vlkyre.Body.slice(1).trim().split(" ")[0].toLowerCase()
: "";
Vlkyre.A𝖗𝖌𝖘 = Vlkyre.Body.trim().split(/ +/).slice(1);
Vlkyre.pushName = Vlkyre.pushName || "No Name";
Vlkyre.botNumber = await ӄӄ.decodeJid(ӄӄ.user.id);
Vlkyre.isCreator = [Vlkyre.botNumber, ...global.owner]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(Vlkyre.sender);
Vlkyre.fromMe = Vlkyre.sender == Vlkyre.botNumber ? true : false;
Vlkyre.F𝖚𝖑𝖑_A𝖗𝖌𝖘 = Vlkyre.A𝖗𝖌𝖘.join(" ");
Vlkyre.quoted = Vlkyre.quoted ? Vlkyre.quoted : Vlkyre;
let mime = (Vlkyre.quoted.msg || Vlkyre.quoted).mimetype || "";
Vlkyre.isMedia = /image|video|sticker|audio/.test(mime);
Vlkyre.groupMetadata = Vlkyre.isGroup
? await ӄӄ.groupMetadata(Vlkyre.chatID)
: "";
Vlkyre.participants = Vlkyre.isGroup
? await Vlkyre.groupMetadata.participants
: "";
Vlkyre.groupAdmins = Vlkyre.isGroup
? await Vlkyre.participants
.filter((v) => v.admin !== null)
.map((v) => v.id)
: "";
Vlkyre.isBotAdmin = Vlkyre.isGroup
? Vlkyre.groupAdmins.includes(Vlkyre.botNumber)
: false;
Vlkyre.isSenderAdmin = Vlkyre.isGroup
? Vlkyre.groupAdmins.includes(Vlkyre.sender)
: false;
Vlkyre.mentionByTag =
Vlkyre.mtype == "extendedTextMessage" &&
Vlkyre.message.extendedTextMessage.contextInfo != null
? Vlkyre.message.extendedTextMessage.contextInfo.mentionedJid
: [];
Vlkyre.mentionByReply =
Vlkyre.mtype == "extendedTextMessage" &&
Vlkyre.message.extendedTextMessage.contextInfo != null
? Vlkyre.message.extendedTextMessage.contextInfo.participant || ""
: "";
let MODString =
process.env.MOD === undefined
? "918436686758,917430922909"
: process.env.MOD;
Vlkyre.isSenderTUF = MODString.includes(
Vlkyre.sender.substring(0, Vlkyre.sender.indexOf("@"))
);
return Vlkyre;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
