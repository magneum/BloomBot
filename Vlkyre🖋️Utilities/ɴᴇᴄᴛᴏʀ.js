("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
let unixTimestampSeconds = (date = new Date()) =>
Math.floor(date.getTime() / 1000);
let sleep = (ms) => {
return new Promise((resolve) => {
setTimeout(resolve, ms);
});
};
exports.unixTimestampSeconds = unixTimestampSeconds;
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var Vlyre = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay =
Vlyre > 0 ? Vlyre + (Vlyre == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.clockString = function (seconds) {
let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
let Vlyre = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
return [h, Vlyre, s].map((v) => v.toString().padStart(2, 0)).join(":");
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.sleep = async (ms) => {
return new Promise((resolve) => setTimeout(resolve, ms));
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.isUrl = (url) => {
return url.match(
new RegExp(
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
"gi"
)
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.getTime = (format, date) => {
if (date) {
return moment(date).locale("id").format(format);
} else {
return moment.tz("Asia/Jakarta").locale("id").format(format);
}
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.formatp = sizeFormatter({
std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => "${literal} ${symbol}B",
});
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.logic = (check, inp, out) => {
if (inp.length !== out.length)
throw new Error("Input and Output must have same length");
for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
return null;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return "0 Bytes";
let k = 1024;
let dm = decimals < 0 ? 0 : decimals;
let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
let i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.parseMention = (text = "") => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
(v) => v[1] + "@s.whatsapp.net"
);
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.ɴᴇᴄᴛᴏʀ = async (ӄӄ, Vlyre, Ѷ𝖎𝖔𝖓) => {
if (!Vlyre) return Vlyre;
let M = proto.WebMessageInfo;
if (Vlyre.key) {
Vlyre.id = Vlyre.key.id;
Vlyre.isBaileys = Vlyre.id.startsWith("BAE5") && Vlyre.id.length === 16;
Vlyre.chatID = Vlyre.key.remoteJid;
Vlyre.fromMe = Vlyre.key.fromMe;
Vlyre.isGroup = Vlyre.chatID.endsWith("@g.us");
Vlyre.sender = ӄӄ.decodeJid(
(Vlyre.fromMe && ӄӄ.user.id) ||
Vlyre.participant ||
Vlyre.key.participant ||
Vlyre.chatID ||
""
);
if (Vlyre.isGroup)
Vlyre.participant = ӄӄ.decodeJid(Vlyre.key.participant) || "";
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Vlyre.message) {
Vlyre.mtype = getContentType(Vlyre.message);
Vlyre.msg =
Vlyre.mtype == "viewOnceMessage"
? Vlyre.message[Vlyre.mtype].message[
getContentType(Vlyre.message[Vlyre.mtype].message)
]
: Vlyre.message[Vlyre.mtype];
Vlyre.Body =
Vlyre.mtype === "conversation"
? Vlyre.message.conversation
: Vlyre.mtype == "imageMessage"
? Vlyre.message.imageMessage.caption
: Vlyre.mtype == "videoMessage"
? Vlyre.message.videoMessage.caption
: Vlyre.mtype == "extendedTextMessage"
? Vlyre.message.extendedTextMessage.text
: Vlyre.mtype == "buttonsResponseMessage"
? Vlyre.message.buttonsResponseMessage.selectedButtonId
: Vlyre.mtype == "listResponseMessage"
? Vlyre.message.listResponseMessage.singleSelectReply.selectedRowId
: Vlyre.mtype == "templateButtonReplyMessage"
? Vlyre.message.templateButtonReplyMessage.selectedId
: Vlyre.mtype === "messageContextInfo"
? Vlyre.message.buttonsResponseMessage?.selectedButtonId ||
Vlyre.message.listResponseMessage?.singleSelectReply
.selectedRowId ||
Vlyre.text
: "";
let quoted = (Vlyre.quoted = Vlyre.msg.contextInfo
? Vlyre.msg.contextInfo.quotedMessage
: null);
Vlyre.mentionedJid = Vlyre.msg.contextInfo
? Vlyre.msg.contextInfo.mentionedJid
: [];
if (Vlyre.quoted) {
let type = getContentType(quoted);
Vlyre.quoted = Vlyre.quoted[type];
if (["productMessage"].includes(type)) {
type = getContentType(Vlyre.quoted);
Vlyre.quoted = Vlyre.quoted[type];
}
if (typeof Vlyre.quoted === "string")
Vlyre.quoted = {
text: Vlyre.quoted,
};
Vlyre.quoted.mtype = type;
Vlyre.quoted.id = Vlyre.msg.contextInfo.stanzaId;
Vlyre.quoted.chatID = Vlyre.msg.contextInfo.remoteJid || Vlyre.chatID;
Vlyre.quoted.isBaileys = Vlyre.quoted.id
? Vlyre.quoted.id.startsWith("BAE5") && Vlyre.quoted.id.length === 16
: false;
Vlyre.quoted.sender = ӄӄ.decodeJid(Vlyre.msg.contextInfo.participant);
Vlyre.quoted.fromMe = Vlyre.quoted.sender === (ӄӄ.user && ӄӄ.user.id);
Vlyre.quoted.text =
Vlyre.quoted.text ||
Vlyre.quoted.caption ||
Vlyre.quoted.conversation ||
Vlyre.quoted.contentText ||
Vlyre.quoted.selectedDisplayText ||
Vlyre.quoted.title ||
"";
Vlyre.quoted.mentionedJid = Vlyre.msg.contextInfo
? Vlyre.msg.contextInfo.mentionedJid
: [];
Vlyre.getQuotedObj = Vlyre.getQuotedMessage = async () => {
if (!Vlyre.quoted.id) return false;
let q = await Ѷ𝖎𝖔𝖓.loadMessage(Vlyre.chatID, Vlyre.quoted.id, ӄӄ);
return exports.ɴᴇᴄᴛᴏʀ(ӄӄ, q, Ѷ𝖎𝖔𝖓);
};
let vM = (Vlyre.quoted.fakeObj = M.fromObject({
key: {
remoteJid: Vlyre.quoted.chatID,
fromMe: Vlyre.quoted.fromMe,
id: Vlyre.quoted.id,
},
message: quoted,
...(Vlyre.isGroup ? { participant: Vlyre.quoted.sender } : {}),
}));
Vlyre.quoted.delete = () =>
ӄӄ.sendMessage(Vlyre.quoted.chatID, { delete: vM.key });
Vlyre.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
ӄӄ.copyNForward(jid, vM, forceForward, options);
Vlyre.quoted.download = () => ӄӄ.downloadMediaMessage(Vlyre.quoted);
}
}
if (Vlyre.msg.url)
Vlyre.download = () => ӄӄ.downloadMediaMessage(Vlyre.msg);
Vlyre.text =
Vlyre.msg.text ||
Vlyre.msg.caption ||
Vlyre.message.conversation ||
Vlyre.msg.contentText ||
Vlyre.msg.selectedDisplayText ||
Vlyre.msg.title ||
"";
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
Vlyre.reply = (text, chatId = Vlyre.chatID, options = {}) =>
Buffer.isBuffer(text)
? ӄӄ.sendMedia(chatId, text, "file", "", Vlyre, { ...options })
: ӄӄ.sendText(chatId, text, Vlyre, { ...options });
Vlyre.copy = () => exports.ɴᴇᴄᴛᴏʀ(ӄӄ, M.fromObject(M.toObject(Vlyre)));
Vlyre.copyNForward = (
jid = Vlyre.chatID,
forceForward = false,
options = {}
) => ӄӄ.copyNForward(jid, Vlyre, forceForward, options);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
Vlyre.isCommand = Vlyre.Body.startsWith(prefix);
Vlyre.isCmd =
prefix.includes(Vlyre.Body != "" && Vlyre.Body.slice(0, 1)) &&
Vlyre.Body.slice(1) != "";
Vlyre.commandName = Vlyre.isCmd
? Vlyre.Body.slice(1).trim().split(" ")[0].toLowerCase()
: "";
Vlyre.A𝖗𝖌𝖘 = Vlyre.Body.trim().split(/ +/).slice(1);
Vlyre.pushName = Vlyre.pushName || "No Name";
Vlyre.botNumber = await ӄӄ.decodeJid(ӄӄ.user.id);
Vlyre.isCreator = [Vlyre.botNumber, ...global.owner]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(Vlyre.sender);
Vlyre.fromMe = Vlyre.sender == Vlyre.botNumber ? true : false;
Vlyre.F𝖚𝖑𝖑_A𝖗𝖌𝖘 = Vlyre.A𝖗𝖌𝖘.join(" ");
Vlyre.quoted = Vlyre.quoted ? Vlyre.quoted : Vlyre;
let mime = (Vlyre.quoted.msg || Vlyre.quoted).mimetype || "";
Vlyre.isMedia = /image|video|sticker|audio/.test(mime);
Vlyre.groupMetadata = Vlyre.isGroup
? await ӄӄ.groupMetadata(Vlyre.chatID)
: "";
Vlyre.participants = Vlyre.isGroup
? await Vlyre.groupMetadata.participants
: "";
Vlyre.groupAdmins = Vlyre.isGroup
? await Vlyre.participants
.filter((v) => v.admin !== null)
.map((v) => v.id)
: "";
Vlyre.isBotAdmin = Vlyre.isGroup
? Vlyre.groupAdmins.includes(Vlyre.botNumber)
: false;
Vlyre.isSenderAdmin = Vlyre.isGroup
? Vlyre.groupAdmins.includes(Vlyre.sender)
: false;
Vlyre.mentionByTag =
Vlyre.mtype == "extendedTextMessage" &&
Vlyre.message.extendedTextMessage.contextInfo != null
? Vlyre.message.extendedTextMessage.contextInfo.mentionedJid
: [];
Vlyre.mentionByReply =
Vlyre.mtype == "extendedTextMessage" &&
Vlyre.message.extendedTextMessage.contextInfo != null
? Vlyre.message.extendedTextMessage.contextInfo.participant || ""
: "";
let MODString =
process.env.MOD === undefined
? "918436686758,917430922909"
: process.env.MOD;
Vlyre.isSenderTUF = MODString.includes(
Vlyre.sender.substring(0, Vlyre.sender.indexOf("@"))
);
return Vlyre;
};
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
