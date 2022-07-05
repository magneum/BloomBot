("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
let unixTimestampSeconds = (date = new Date()) =>
Math.floor(date.getTime() / 1000);
let sleep = (ms) => {
return new Promise((resolve) => {
setTimeout(resolve, ms);
});
};
exports.unixTimestampSeconds = unixTimestampSeconds;
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var 𝐕𝐥𝐤𝐲𝐫𝐞 = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay =
𝐕𝐥𝐤𝐲𝐫𝐞 > 0 ? 𝐕𝐥𝐤𝐲𝐫𝐞 + (𝐕𝐥𝐤𝐲𝐫𝐞 == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.clockString = function (seconds) {
let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
let 𝐕𝐥𝐤𝐲𝐫𝐞 = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
return [h, 𝐕𝐥𝐤𝐲𝐫𝐞, s].map((v) => v.toString().padStart(2, 0)).join(":");
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.sleep = async (ms) => {
return new Promise((resolve) => setTimeout(resolve, ms));
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.isUrl = (url) => {
return url.match(
new RegExp(
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
"gi"
)
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.getTime = (format, date) => {
if (date) {
return moment(date).locale("id").format(format);
} else {
return moment.tz("Asia/Jakarta").locale("id").format(format);
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.formatp = sizeFormatter({
std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => "${literal} ${symbol}B",
});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.logic = (check, inp, out) => {
if (inp.length !== out.length)
throw new Error("Input and Output must have same length");
for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
return null;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return "0 Bytes";
let k = 1024;
let dm = decimals < 0 ? 0 : decimals;
let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
let i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.parseMention = (text = "") => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
(v) => v[1] + "@s.whatsapp.net"
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.GIFBufferToVideoBuffer = async (image) => {
let filename = `${Math.random().toString(36)}`;
await fs.writeFileSync("./𝐕𝐥𝐤𝐲𝐫𝐞🎒𝕭𝖆𝖌/${filename}.gif", image);
child_process.exec(
`ffmpeg -i ./𝐕𝐥𝐤𝐲𝐫𝐞🎒𝕭𝖆𝖌/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./𝐕𝐥𝐤𝐲𝐫𝐞🎒𝕭𝖆𝖌/${filename}.mp4`
);
var buffer5 = await fs.readFileSync("./𝐕𝐥𝐤𝐲𝐫𝐞🎒𝕭𝖆𝖌/${filename}.mp4");
Promise.all([
unlink("./𝐕𝐥𝐤𝐲𝐫𝐞🎒𝕭𝖆𝖌/${filename}.mp4"),
unlink("./𝐕𝐥𝐤𝐲𝐫𝐞🎒𝕭𝖆𝖌/${filename}.gif"),
]);
return buffer5;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.smsg = async (𝖍𝖆𝖜ӄ, 𝐕𝐥𝐤𝐲𝐫𝐞, Ѷ𝖎𝖔𝖓) => {
if (!𝐕𝐥𝐤𝐲𝐫𝐞) return 𝐕𝐥𝐤𝐲𝐫𝐞;
let M = proto.WebMessageInfo;
if (𝐕𝐥𝐤𝐲𝐫𝐞.key) {
𝐕𝐥𝐤𝐲𝐫𝐞.id = 𝐕𝐥𝐤𝐲𝐫𝐞.key.id;
𝐕𝐥𝐤𝐲𝐫𝐞.isBaileys =
𝐕𝐥𝐤𝐲𝐫𝐞.id.startsWith("BAE5") && 𝐕𝐥𝐤𝐲𝐫𝐞.id.length === 16;
𝐕𝐥𝐤𝐲𝐫𝐞.chatID = 𝐕𝐥𝐤𝐲𝐫𝐞.key.remoteJid;
𝐕𝐥𝐤𝐲𝐫𝐞.fromMe = 𝐕𝐥𝐤𝐲𝐫𝐞.key.fromMe;
𝐕𝐥𝐤𝐲𝐫𝐞.isGroup = 𝐕𝐥𝐤𝐲𝐫𝐞.chatID.endsWith("@g.us");
𝐕𝐥𝐤𝐲𝐫𝐞.sender = 𝖍𝖆𝖜ӄ.decodeJid(
(𝐕𝐥𝐤𝐲𝐫𝐞.fromMe && 𝖍𝖆𝖜ӄ.user.id) ||
𝐕𝐥𝐤𝐲𝐫𝐞.participant ||
𝐕𝐥𝐤𝐲𝐫𝐞.key.participant ||
𝐕𝐥𝐤𝐲𝐫𝐞.chatID ||
""
);
if (𝐕𝐥𝐤𝐲𝐫𝐞.isGroup)
𝐕𝐥𝐤𝐲𝐫𝐞.participant = 𝖍𝖆𝖜ӄ.decodeJid(𝐕𝐥𝐤𝐲𝐫𝐞.key.participant) || "";
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
if (𝐕𝐥𝐤𝐲𝐫𝐞.message) {
𝐕𝐥𝐤𝐲𝐫𝐞.mtype = getContentType(𝐕𝐥𝐤𝐲𝐫𝐞.message);
𝐕𝐥𝐤𝐲𝐫𝐞.msg =
𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "viewOnceMessage"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message[𝐕𝐥𝐤𝐲𝐫𝐞.mtype].message[
getContentType(𝐕𝐥𝐤𝐲𝐫𝐞.message[𝐕𝐥𝐤𝐲𝐫𝐞.mtype].message)
]
: 𝐕𝐥𝐤𝐲𝐫𝐞.message[𝐕𝐥𝐤𝐲𝐫𝐞.mtype];
𝐕𝐥𝐤𝐲𝐫𝐞.body =
𝐕𝐥𝐤𝐲𝐫𝐞.message.conversation ||
𝐕𝐥𝐤𝐲𝐫𝐞.msg.caption ||
𝐕𝐥𝐤𝐲𝐫𝐞.msg.text ||
(𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "listResponseMessage" &&
𝐕𝐥𝐤𝐲𝐫𝐞.msg.singleSelectReply.selectedRowId) ||
(𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "buttonsResponseMessage" &&
𝐕𝐥𝐤𝐲𝐫𝐞.msg.selectedButtonId) ||
(𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "viewOnceMessage" && 𝐕𝐥𝐤𝐲𝐫𝐞.msg.caption) ||
𝐕𝐥𝐤𝐲𝐫𝐞.text;
let quoted = (𝐕𝐥𝐤𝐲𝐫𝐞.quoted = 𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo
? 𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo.quotedMessage
: null);
𝐕𝐥𝐤𝐲𝐫𝐞.mentionedJid = 𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo
? 𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo.mentionedJid
: [];
if (𝐕𝐥𝐤𝐲𝐫𝐞.quoted) {
let type = getContentType(quoted);
𝐕𝐥𝐤𝐲𝐫𝐞.quoted = 𝐕𝐥𝐤𝐲𝐫𝐞.quoted[type];
if (["productMessage"].includes(type)) {
type = getContentType(𝐕𝐥𝐤𝐲𝐫𝐞.quoted);
𝐕𝐥𝐤𝐲𝐫𝐞.quoted = 𝐕𝐥𝐤𝐲𝐫𝐞.quoted[type];
}
if (typeof 𝐕𝐥𝐤𝐲𝐫𝐞.quoted === "string")
𝐕𝐥𝐤𝐲𝐫𝐞.quoted = {
text: 𝐕𝐥𝐤𝐲𝐫𝐞.quoted,
};
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.mtype = type;
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.id = 𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo.stanzaId;
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.chatID =
𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo.remoteJid || 𝐕𝐥𝐤𝐲𝐫𝐞.chatID;
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.isBaileys = 𝐕𝐥𝐤𝐲𝐫𝐞.quoted.id
? 𝐕𝐥𝐤𝐲𝐫𝐞.quoted.id.startsWith("BAE5") &&
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.id.length === 16
: false;
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.sender = 𝖍𝖆𝖜ӄ.decodeJid(
𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo.participant
);
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.fromMe =
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.sender === (𝖍𝖆𝖜ӄ.user && 𝖍𝖆𝖜ӄ.user.id);
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.text =
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.text ||
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.caption ||
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.conversation ||
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.contentText ||
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.selectedDisplayText ||
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.title ||
"";
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.mentionedJid = 𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo
? 𝐕𝐥𝐤𝐲𝐫𝐞.msg.contextInfo.mentionedJid
: [];
𝐕𝐥𝐤𝐲𝐫𝐞.getQuotedObj = 𝐕𝐥𝐤𝐲𝐫𝐞.getQuotedMessage = async () => {
if (!𝐕𝐥𝐤𝐲𝐫𝐞.quoted.id) return false;
let q = await Ѷ𝖎𝖔𝖓.loadMessage(𝐕𝐥𝐤𝐲𝐫𝐞.chatID, 𝐕𝐥𝐤𝐲𝐫𝐞.quoted.id, 𝖍𝖆𝖜ӄ);
return exports.smsg(𝖍𝖆𝖜ӄ, q, Ѷ𝖎𝖔𝖓);
};
let vM = (𝐕𝐥𝐤𝐲𝐫𝐞.quoted.fakeObj = M.fromObject({
key: {
remoteJid: 𝐕𝐥𝐤𝐲𝐫𝐞.quoted.chatID,
fromMe: 𝐕𝐥𝐤𝐲𝐫𝐞.quoted.fromMe,
id: 𝐕𝐥𝐤𝐲𝐫𝐞.quoted.id,
},
message: quoted,
...(𝐕𝐥𝐤𝐲𝐫𝐞.isGroup ? { participant: 𝐕𝐥𝐤𝐲𝐫𝐞.quoted.sender } : {}),
}));
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.delete = () =>
𝖍𝖆𝖜ӄ.sendMessage(𝐕𝐥𝐤𝐲𝐫𝐞.quoted.chatID, { delete: vM.key });
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.copyNForward = (
jid,
forceForward = false,
options = {}
) => 𝖍𝖆𝖜ӄ.copyNForward(jid, vM, forceForward, options);
𝐕𝐥𝐤𝐲𝐫𝐞.quoted.download = () => 𝖍𝖆𝖜ӄ.downloadMediaMessage(𝐕𝐥𝐤𝐲𝐫𝐞.quoted);
}
}
if (𝐕𝐥𝐤𝐲𝐫𝐞.msg.url)
𝐕𝐥𝐤𝐲𝐫𝐞.download = () => 𝖍𝖆𝖜ӄ.downloadMediaMessage(𝐕𝐥𝐤𝐲𝐫𝐞.msg);
𝐕𝐥𝐤𝐲𝐫𝐞.text =
𝐕𝐥𝐤𝐲𝐫𝐞.msg.text ||
𝐕𝐥𝐤𝐲𝐫𝐞.msg.caption ||
𝐕𝐥𝐤𝐲𝐫𝐞.message.conversation ||
𝐕𝐥𝐤𝐲𝐫𝐞.msg.contentText ||
𝐕𝐥𝐤𝐲𝐫𝐞.msg.selectedDisplayText ||
𝐕𝐥𝐤𝐲𝐫𝐞.msg.title ||
"";
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
𝐕𝐥𝐤𝐲𝐫𝐞.reply = (text, chatId = 𝐕𝐥𝐤𝐲𝐫𝐞.chatID, options = {}) =>
Buffer.isBuffer(text)
? 𝖍𝖆𝖜ӄ.sendMedia(chatId, text, "file", "", 𝐕𝐥𝐤𝐲𝐫𝐞, { ...options })
: 𝖍𝖆𝖜ӄ.sendText(chatId, text, 𝐕𝐥𝐤𝐲𝐫𝐞, { ...options });
𝐕𝐥𝐤𝐲𝐫𝐞.copy = () => exports.smsg(𝖍𝖆𝖜ӄ, M.fromObject(M.toObject(𝐕𝐥𝐤𝐲𝐫𝐞)));
𝐕𝐥𝐤𝐲𝐫𝐞.copyNForward = (
jid = 𝐕𝐥𝐤𝐲𝐫𝐞.chatID,
forceForward = false,
options = {}
) => 𝖍𝖆𝖜ӄ.copyNForward(jid, 𝐕𝐥𝐤𝐲𝐫𝐞, forceForward, options);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
𝐕𝐥𝐤𝐲𝐫𝐞.Body =
𝐕𝐥𝐤𝐲𝐫𝐞.mtype === "conversation"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.conversation
: 𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "imageMessage"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.imageMessage.caption
: 𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "videoMessage"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.videoMessage.caption
: 𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "extendedTextMessage"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.text
: 𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "buttonsResponseMessage"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.buttonsResponseMessage.selectedButtonId
: 𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "listResponseMessage"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.listResponseMessage.singleSelectReply.selectedRowId
: 𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "templateButtonReplyMessage"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.templateButtonReplyMessage.selectedId
: 𝐕𝐥𝐤𝐲𝐫𝐞.mtype === "messageContextInfo"
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.buttonsResponseMessage?.selectedButtonId ||
𝐕𝐥𝐤𝐲𝐫𝐞.message.listResponseMessage?.singleSelectReply.selectedRowId ||
𝐕𝐥𝐤𝐲𝐫𝐞.text
: "";
𝐕𝐥𝐤𝐲𝐫𝐞.isCommand = 𝐕𝐥𝐤𝐲𝐫𝐞.Body.startsWith(prefix);
𝐕𝐥𝐤𝐲𝐫𝐞.isCmd =
prefix.includes(𝐕𝐥𝐤𝐲𝐫𝐞.Body != "" && 𝐕𝐥𝐤𝐲𝐫𝐞.Body.slice(0, 1)) &&
𝐕𝐥𝐤𝐲𝐫𝐞.Body.slice(1) != "";
𝐕𝐥𝐤𝐲𝐫𝐞.commandName = 𝐕𝐥𝐤𝐲𝐫𝐞.isCmd
? 𝐕𝐥𝐤𝐲𝐫𝐞.Body.slice(1).trim().split(" ")[0].toLowerCase()
: "";
𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘 = 𝐕𝐥𝐤𝐲𝐫𝐞.Body.trim().split(/ +/).slice(1);
𝐕𝐥𝐤𝐲𝐫𝐞.pushName = 𝐕𝐥𝐤𝐲𝐫𝐞.pushName || "No Name";
𝐕𝐥𝐤𝐲𝐫𝐞.botNumber = await 𝖍𝖆𝖜ӄ.decodeJid(𝖍𝖆𝖜ӄ.user.id);
𝐕𝐥𝐤𝐲𝐫𝐞.isCreator = [𝐕𝐥𝐤𝐲𝐫𝐞.botNumber, ...global.owner]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(𝐕𝐥𝐤𝐲𝐫𝐞.sender);
𝐕𝐥𝐤𝐲𝐫𝐞.fromMe = 𝐕𝐥𝐤𝐲𝐫𝐞.sender == 𝐕𝐥𝐤𝐲𝐫𝐞.botNumber ? true : false;
𝐕𝐥𝐤𝐲𝐫𝐞.F𝖚𝖑𝖑_A𝖗𝖌𝖘 = 𝐕𝐥𝐤𝐲𝐫𝐞.A𝖗𝖌𝖘.join(" ");
𝐕𝐥𝐤𝐲𝐫𝐞.quoted = 𝐕𝐥𝐤𝐲𝐫𝐞.quoted ? 𝐕𝐥𝐤𝐲𝐫𝐞.quoted : 𝐕𝐥𝐤𝐲𝐫𝐞;
let mime = (𝐕𝐥𝐤𝐲𝐫𝐞.quoted.msg || 𝐕𝐥𝐤𝐲𝐫𝐞.quoted).mimetype || "";
𝐕𝐥𝐤𝐲𝐫𝐞.isMedia = /image|video|sticker|audio/.test(mime);
𝐕𝐥𝐤𝐲𝐫𝐞.groupMetadata = 𝐕𝐥𝐤𝐲𝐫𝐞.isGroup
? await 𝖍𝖆𝖜ӄ.groupMetadata(𝐕𝐥𝐤𝐲𝐫𝐞.chatID)
: "";
𝐕𝐥𝐤𝐲𝐫𝐞.participants = 𝐕𝐥𝐤𝐲𝐫𝐞.isGroup
? await 𝐕𝐥𝐤𝐲𝐫𝐞.groupMetadata.participants
: "";
𝐕𝐥𝐤𝐲𝐫𝐞.groupAdmins = 𝐕𝐥𝐤𝐲𝐫𝐞.isGroup
? await 𝐕𝐥𝐤𝐲𝐫𝐞.participants
.filter((v) => v.admin !== null)
.map((v) => v.id)
: "";
𝐕𝐥𝐤𝐲𝐫𝐞.isBotAdmin = 𝐕𝐥𝐤𝐲𝐫𝐞.isGroup
? 𝐕𝐥𝐤𝐲𝐫𝐞.groupAdmins.includes(𝐕𝐥𝐤𝐲𝐫𝐞.botNumber)
: false;
𝐕𝐥𝐤𝐲𝐫𝐞.isSenderAdmin = 𝐕𝐥𝐤𝐲𝐫𝐞.isGroup
? 𝐕𝐥𝐤𝐲𝐫𝐞.groupAdmins.includes(𝐕𝐥𝐤𝐲𝐫𝐞.sender)
: false;
𝐕𝐥𝐤𝐲𝐫𝐞.mentionByTag =
𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "extendedTextMessage" &&
𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo != null
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo.mentionedJid
: [];
𝐕𝐥𝐤𝐲𝐫𝐞.mentionByReply =
𝐕𝐥𝐤𝐲𝐫𝐞.mtype == "extendedTextMessage" &&
𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo != null
? 𝐕𝐥𝐤𝐲𝐫𝐞.message.extendedTextMessage.contextInfo.participant || ""
: "";
let MODString =
process.env.MOD === undefined
? "918436686758,917430922909"
: process.env.MOD;
𝐕𝐥𝐤𝐲𝐫𝐞.isSenderTUF = MODString.includes(
𝐕𝐥𝐤𝐲𝐫𝐞.sender.substring(0, 𝐕𝐥𝐤𝐲𝐫𝐞.sender.indexOf("@"))
);
return 𝐕𝐥𝐤𝐲𝐫𝐞;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
