const { proto, getContentType } = require("@adiwajshing/baileys");
const chalk = require("chalk");
const fs = require("fs");
const { unlink } = require("fs").promises;
const axios = require("axios");
const moment = require("moment-timezone");
const { sizeFormatter } = require("human-readable");
const util = require("util");
const child_process = require("child_process");

const unixTimestampSeconds = (date = new Date()) =>
Math.floor(date.getTime() / 1000);
const sleep = (ms) => {
return new Promise((resolve) => {
setTimeout(resolve, ms);
});
};
exports.unixTimestampSeconds = unixTimestampSeconds;

exports.generateMessageTag = (epoch) => {
let tag = (0, exports.unixTimestampSeconds)().toString();
if (epoch) tag += ".--" + epoch;
return tag;
};

exports.processTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

exports.getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.getBuffer = async (url, options) => {
try {
options ? options : {};
const res = await axios({
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

exports.fetchJson = async (url, options) => {
try {
options ? options : {};
const res = await axios({
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

exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 > 0 ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 + (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
let Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
return [h, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, s].map((v) => v.toString().padStart(2, 0)).join(":");
};

exports.sleep = async (ms) => {
return new Promise((resolve) => setTimeout(resolve, ms));
};

exports.isUrl = (url) => {
return url.match(
new RegExp(
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
"gi"
)
);
};

exports.getTime = (format, date) => {
if (date) {
return moment(date).locale("id").format(format);
} else {
return moment.tz("Asia/Jakarta").locale("id").format(format);
}
};

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

exports.formatp = sizeFormatter({
std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
// ===================================================================================================
exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2);
};
// ===================================================================================================
exports.logic = (check, inp, out) => {
if (inp.length !== out.length)
throw new Error("Input and Output must have same length");
for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
return null;
};
// ===================================================================================================
exports.generateProfilePicture = async (buffer) => {
const jimp = await jimp_1.read(buffer);
const min = jimp.getWidth();
const max = jimp.getHeight();
const cropped = jimp.crop(0, 0, min, max);
return {
img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
preview: await cropped
.scaleToFit(720, 720)
.getBufferAsync(jimp_1.MIME_JPEG),
};
};
// ===================================================================================================
exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return "0 Bytes";
const k = 1024;
const dm = decimals < 0 ? 0 : decimals;
const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
const i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
// ===================================================================================================
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
// ===================================================================================================
exports.parseMention = (text = "") => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
(v) => v[1] + "@s.whatsapp.net"
);
};
// ===================================================================================================
exports.GIFBufferToVideoBuffer = async (image) => {
const filename = `${Math.random().toString(36)}`;
await fs.writeFileSync(`./src/${filename}.gif`, image);
child_process.exec(
`ffmpeg -i ./src/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./src/${filename}.mp4`
);
await sleep(4000);

var buffer5 = await fs.readFileSync(`./src/${filename}.mp4`);
Promise.all([
unlink(`./src/${filename}.mp4`),
unlink(`./src/${filename}.gif`),
]);
return buffer5;
};
// ===================================================================================================
exports.smsg = (conn, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, Ѷ𝖎𝖔𝖓) => {
if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊) return Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
let M = proto.WebMessageInfo;
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key) {
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.id = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isBaileys =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.id.startsWith("BAE5") && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.id.length === 16;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.remoteJid;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.fromMe;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.endsWith("@g.us");
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender = conn.decodeJid(
(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe && conn.user.id) ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participant ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.participant ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID ||
""
);
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup)
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.participant = conn.decodeJid(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.participant) || "";
}
// ===================================================================================================
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message) {
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype = getContentType(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "viewOnceMessage"
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message[Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype].message[
getContentType(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message[Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype].message)
]
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message[Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype];
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.body =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.caption ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.text ||
(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "listResponseMessage" &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.singleSelectReply.selectedRowId) ||
(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "buttonsResponseMessage" &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.selectedButtonId) ||
(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "viewOnceMessage" && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.caption) ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text;
let quoted = (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.quotedMessage
: null);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionedJid = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.mentionedJid
: [];
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted) {
let type = getContentType(quoted);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted[type];
if (["productMessage"].includes(type)) {
type = getContentType(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted[type];
}
if (typeof Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted === "string")
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted = {
text: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted,
};
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.mtype = type;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.stanzaId;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.chatID =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.remoteJid || Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.isBaileys = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id.startsWith("BAE5") &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id.length === 16
: false;
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender = conn.decodeJid(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.participant
);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.fromMe =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender === (conn.user && conn.user.id);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.text =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.text ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.caption ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.conversation ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.contentText ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.selectedDisplayText ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.title ||
"";
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.mentionedJid = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contextInfo.mentionedJid
: [];
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.getQuotedObj = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.getQuotedMessage = async () => {
if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id) return false;
let q = await Ѷ𝖎𝖔𝖓.loadMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id,
conn
);
return exports.smsg(conn, q, Ѷ𝖎𝖔𝖓);
};
let vM = (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.fakeObj = M.fromObject({
key: {
remoteJid: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.chatID,
fromMe: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.fromMe,
id: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.id,
},
message: quoted,
...(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? { participant: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender } : {}),
}));
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.delete = () =>
conn.sendMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.chatID, { delete: vM.key });
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.copyNForward = (
jid,
forceForward = false,
options = {}
) => conn.copyNForward(jid, vM, forceForward, options);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.download = () =>
conn.downloadMediaMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted);
}
}
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.url)
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.download = () => conn.downloadMediaMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg);
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.text ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.caption ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.contentText ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.selectedDisplayText ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.msg.title ||
"";
// ===================================================================================================
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply = (text, chatId = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, options = {}) =>
Buffer.isBuffer(text)
? conn.sendMedia(chatId, text, "file", "", Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, { ...options })
: conn.sendText(chatId, text, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, { ...options });
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.copy = () => exports.smsg(conn, M.fromObject(M.toObject(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊)));
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.copyNForward = (
jid = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
forceForward = false,
options = {}
) => conn.copyNForward(jid, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, forceForward, options);

return Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
};
// ===================================================================================================
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright(`Update ${__filename}`));
delete require.cache[file];
require(file);
});
