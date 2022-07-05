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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let unixTimestampSeconds = (date = new Date()) =>
Math.floor(date.getTime() / 1000);
let sleep = (ms) => {
return new Promise((resolve) => {
setTimeout(resolve, ms);
});
};
exports.unixTimestampSeconds = unixTimestampSeconds;
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var Ѷ𝖑𝐤𝐲𝖗𝖊 = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
var mDisplay =
Ѷ𝖑𝐤𝐲𝖗𝖊 > 0 ? Ѷ𝖑𝐤𝐲𝖗𝖊 + (Ѷ𝖑𝐤𝐲𝖗𝖊 == 1 ? " minute, " : " minutes, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.clockString = function (seconds) {
let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
let Ѷ𝖑𝐤𝐲𝖗𝖊 = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
return [h, Ѷ𝖑𝐤𝐲𝖗𝖊, s].map((v) => v.toString().padStart(2, 0)).join(":");
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.sleep = async (ms) => {
return new Promise((resolve) => setTimeout(resolve, ms));
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.isUrl = (url) => {
return url.match(
new RegExp(
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
"gi"
)
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.getTime = (format, date) => {
if (date) {
return moment(date).locale("id").format(format);
} else {
return moment.tz("Asia/Jakarta").locale("id").format(format);
}
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.formatp = sizeFormatter({
std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => "${literal} ${symbol}B",
});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.jsonformat = (string) => {
return JSON.stringify(string, null, 2);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.logic = (check, inp, out) => {
if (inp.length !== out.length)
throw new Error("Input and Output must have same length");
for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
return null;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.bytesToSize = (bytes, decimals = 2) => {
if (bytes === 0) return "0 Bytes";
let k = 1024;
let dm = decimals < 0 ? 0 : decimals;
let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
let i = Math.floor(Math.log(bytes) / Math.log(k));
return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
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
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.parseMention = (text = "") => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
(v) => v[1] + "@s.whatsapp.net"
);
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.GIFBufferToVideoBuffer = async (image) => {
let filename = `${Math.random().toString(36)}`;
await fs.writeFileSync("./Ѷ𝖑𝐤𝐲𝖗𝖊🎒𝕭𝖆𝖌/${filename}.gif", image);
child_process.exec(
`ffmpeg -i ./Ѷ𝖑𝐤𝐲𝖗𝖊🎒𝕭𝖆𝖌/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Ѷ𝖑𝐤𝐲𝖗𝖊🎒𝕭𝖆𝖌/${filename}.mp4`
);
var buffer5 = await fs.readFileSync("./Ѷ𝖑𝐤𝐲𝖗𝖊🎒𝕭𝖆𝖌/${filename}.mp4");
Promise.all([
unlink("./Ѷ𝖑𝐤𝐲𝖗𝖊🎒𝕭𝖆𝖌/${filename}.mp4"),
unlink("./Ѷ𝖑𝐤𝐲𝖗𝖊🎒𝕭𝖆𝖌/${filename}.gif"),
]);
return buffer5;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.smsg = async (𝖍𝖆𝖜ӄ, Ѷ𝖑𝐤𝐲𝖗𝖊, Ѷ𝖎𝖔𝖓) => {
if (!Ѷ𝖑𝐤𝐲𝖗𝖊) return Ѷ𝖑𝐤𝐲𝖗𝖊;
let M = proto.WebMessageInfo;
if (Ѷ𝖑𝐤𝐲𝖗𝖊.key) {
Ѷ𝖑𝐤𝐲𝖗𝖊.id = Ѷ𝖑𝐤𝐲𝖗𝖊.key.id;
Ѷ𝖑𝐤𝐲𝖗𝖊.isBaileys =
Ѷ𝖑𝐤𝐲𝖗𝖊.id.startsWith("BAE5") && Ѷ𝖑𝐤𝐲𝖗𝖊.id.length === 16;
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID = Ѷ𝖑𝐤𝐲𝖗𝖊.key.remoteJid;
Ѷ𝖑𝐤𝐲𝖗𝖊.fromMe = Ѷ𝖑𝐤𝐲𝖗𝖊.key.fromMe;
Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup = Ѷ𝖑𝐤𝐲𝖗𝖊.chatID.endsWith("@g.us");
Ѷ𝖑𝐤𝐲𝖗𝖊.sender = 𝖍𝖆𝖜ӄ.decodeJid(
(Ѷ𝖑𝐤𝐲𝖗𝖊.fromMe && 𝖍𝖆𝖜ӄ.user.id) ||
Ѷ𝖑𝐤𝐲𝖗𝖊.participant ||
Ѷ𝖑𝐤𝐲𝖗𝖊.key.participant ||
Ѷ𝖑𝐤𝐲𝖗𝖊.chatID ||
""
);
if (Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup)
Ѷ𝖑𝐤𝐲𝖗𝖊.participant = 𝖍𝖆𝖜ӄ.decodeJid(Ѷ𝖑𝐤𝐲𝖗𝖊.key.participant) || "";
}
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
if (Ѷ𝖑𝐤𝐲𝖗𝖊.message) {
Ѷ𝖑𝐤𝐲𝖗𝖊.mtype = getContentType(Ѷ𝖑𝐤𝐲𝖗𝖊.message);
Ѷ𝖑𝐤𝐲𝖗𝖊.msg =
Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "viewOnceMessage"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message[Ѷ𝖑𝐤𝐲𝖗𝖊.mtype].message[
getContentType(Ѷ𝖑𝐤𝐲𝖗𝖊.message[Ѷ𝖑𝐤𝐲𝖗𝖊.mtype].message)
]
: Ѷ𝖑𝐤𝐲𝖗𝖊.message[Ѷ𝖑𝐤𝐲𝖗𝖊.mtype];
Ѷ𝖑𝐤𝐲𝖗𝖊.body =
Ѷ𝖑𝐤𝐲𝖗𝖊.message.conversation ||
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.caption ||
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.text ||
(Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "listResponseMessage" &&
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.singleSelectReply.selectedRowId) ||
(Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "buttonsResponseMessage" &&
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.selectedButtonId) ||
(Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "viewOnceMessage" && Ѷ𝖑𝐤𝐲𝖗𝖊.msg.caption) ||
Ѷ𝖑𝐤𝐲𝖗𝖊.text;
let quoted = (Ѷ𝖑𝐤𝐲𝖗𝖊.quoted = Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo
? Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo.quotedMessage
: null);
Ѷ𝖑𝐤𝐲𝖗𝖊.mentionedJid = Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo
? Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo.mentionedJid
: [];
if (Ѷ𝖑𝐤𝐲𝖗𝖊.quoted) {
let type = getContentType(quoted);
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted = Ѷ𝖑𝐤𝐲𝖗𝖊.quoted[type];
if (["productMessage"].includes(type)) {
type = getContentType(Ѷ𝖑𝐤𝐲𝖗𝖊.quoted);
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted = Ѷ𝖑𝐤𝐲𝖗𝖊.quoted[type];
}
if (typeof Ѷ𝖑𝐤𝐲𝖗𝖊.quoted === "string")
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted = {
text: Ѷ𝖑𝐤𝐲𝖗𝖊.quoted,
};
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.mtype = type;
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id = Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo.stanzaId;
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.chatID =
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo.remoteJid || Ѷ𝖑𝐤𝐲𝖗𝖊.chatID;
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.isBaileys = Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id
? Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id.startsWith("BAE5") &&
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id.length === 16
: false;
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.sender = 𝖍𝖆𝖜ӄ.decodeJid(
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo.participant
);
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.fromMe =
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.sender === (𝖍𝖆𝖜ӄ.user && 𝖍𝖆𝖜ӄ.user.id);
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.text =
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.text ||
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.caption ||
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.conversation ||
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.contentText ||
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.selectedDisplayText ||
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.title ||
"";
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.mentionedJid = Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo
? Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contextInfo.mentionedJid
: [];
Ѷ𝖑𝐤𝐲𝖗𝖊.getQuotedObj = Ѷ𝖑𝐤𝐲𝖗𝖊.getQuotedMessage = async () => {
if (!Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id) return false;
let q = await Ѷ𝖎𝖔𝖓.loadMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.chatID, Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id, 𝖍𝖆𝖜ӄ);
return exports.smsg(𝖍𝖆𝖜ӄ, q, Ѷ𝖎𝖔𝖓);
};
let vM = (Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.fakeObj = M.fromObject({
key: {
remoteJid: Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.chatID,
fromMe: Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.fromMe,
id: Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.id,
},
message: quoted,
...(Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup ? { participant: Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.sender } : {}),
}));
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.delete = () =>
𝖍𝖆𝖜ӄ.sendMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.chatID, { delete: vM.key });
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.copyNForward = (
jid,
forceForward = false,
options = {}
) => 𝖍𝖆𝖜ӄ.copyNForward(jid, vM, forceForward, options);
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.download = () => 𝖍𝖆𝖜ӄ.downloadMediaMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.quoted);
}
}
if (Ѷ𝖑𝐤𝐲𝖗𝖊.msg.url)
Ѷ𝖑𝐤𝐲𝖗𝖊.download = () => 𝖍𝖆𝖜ӄ.downloadMediaMessage(Ѷ𝖑𝐤𝐲𝖗𝖊.msg);
Ѷ𝖑𝐤𝐲𝖗𝖊.text =
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.text ||
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.caption ||
Ѷ𝖑𝐤𝐲𝖗𝖊.message.conversation ||
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.contentText ||
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.selectedDisplayText ||
Ѷ𝖑𝐤𝐲𝖗𝖊.msg.title ||
"";
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
Ѷ𝖑𝐤𝐲𝖗𝖊.reply = (text, chatId = Ѷ𝖑𝐤𝐲𝖗𝖊.chatID, options = {}) =>
Buffer.isBuffer(text)
? 𝖍𝖆𝖜ӄ.sendMedia(chatId, text, "file", "", Ѷ𝖑𝐤𝐲𝖗𝖊, { ...options })
: 𝖍𝖆𝖜ӄ.sendText(chatId, text, Ѷ𝖑𝐤𝐲𝖗𝖊, { ...options });
Ѷ𝖑𝐤𝐲𝖗𝖊.copy = () => exports.smsg(𝖍𝖆𝖜ӄ, M.fromObject(M.toObject(Ѷ𝖑𝐤𝐲𝖗𝖊)));
Ѷ𝖑𝐤𝐲𝖗𝖊.copyNForward = (
jid = Ѷ𝖑𝐤𝐲𝖗𝖊.chatID,
forceForward = false,
options = {}
) => 𝖍𝖆𝖜ӄ.copyNForward(jid, Ѷ𝖑𝐤𝐲𝖗𝖊, forceForward, options);
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
Ѷ𝖑𝐤𝐲𝖗𝖊.Body =
Ѷ𝖑𝐤𝐲𝖗𝖊.mtype === "conversation"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.conversation
: Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "imageMessage"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.imageMessage.caption
: Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "videoMessage"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.videoMessage.caption
: Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "extendedTextMessage"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.text
: Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "buttonsResponseMessage"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.buttonsResponseMessage.selectedButtonId
: Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "listResponseMessage"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.listResponseMessage.singleSelectReply.selectedRowId
: Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "templateButtonReplyMessage"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.templateButtonReplyMessage.selectedId
: Ѷ𝖑𝐤𝐲𝖗𝖊.mtype === "messageContextInfo"
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.buttonsResponseMessage?.selectedButtonId ||
Ѷ𝖑𝐤𝐲𝖗𝖊.message.listResponseMessage?.singleSelectReply.selectedRowId ||
Ѷ𝖑𝐤𝐲𝖗𝖊.text
: "";
Ѷ𝖑𝐤𝐲𝖗𝖊.isCommand = Ѷ𝖑𝐤𝐲𝖗𝖊.Body.startsWith(prefix);
Ѷ𝖑𝐤𝐲𝖗𝖊.isCmd =
prefix.includes(Ѷ𝖑𝐤𝐲𝖗𝖊.Body != "" && Ѷ𝖑𝐤𝐲𝖗𝖊.Body.slice(0, 1)) &&
Ѷ𝖑𝐤𝐲𝖗𝖊.Body.slice(1) != "";
Ѷ𝖑𝐤𝐲𝖗𝖊.commandName = Ѷ𝖑𝐤𝐲𝖗𝖊.isCmd
? Ѷ𝖑𝐤𝐲𝖗𝖊.Body.slice(1).trim().split(" ")[0].toLowerCase()
: "";
Ѷ𝖑𝐤𝐲𝖗𝖊.A𝖗𝖌𝖘 = Ѷ𝖑𝐤𝐲𝖗𝖊.Body.trim().split(/ +/).slice(1);
Ѷ𝖑𝐤𝐲𝖗𝖊.pushName = Ѷ𝖑𝐤𝐲𝖗𝖊.pushName || "No Name";
Ѷ𝖑𝐤𝐲𝖗𝖊.botNumber = await 𝖍𝖆𝖜ӄ.decodeJid(𝖍𝖆𝖜ӄ.user.id);
Ѷ𝖑𝐤𝐲𝖗𝖊.isCreator = [Ѷ𝖑𝐤𝐲𝖗𝖊.botNumber, ...global.owner]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(Ѷ𝖑𝐤𝐲𝖗𝖊.sender);
Ѷ𝖑𝐤𝐲𝖗𝖊.fromMe = Ѷ𝖑𝐤𝐲𝖗𝖊.sender == Ѷ𝖑𝐤𝐲𝖗𝖊.botNumber ? true : false;
Ѷ𝖑𝐤𝐲𝖗𝖊.F𝖚𝖑𝖑_A𝖗𝖌𝖘 = Ѷ𝖑𝐤𝐲𝖗𝖊.A𝖗𝖌𝖘.join(" ");
Ѷ𝖑𝐤𝐲𝖗𝖊.quoted = Ѷ𝖑𝐤𝐲𝖗𝖊.quoted ? Ѷ𝖑𝐤𝐲𝖗𝖊.quoted : Ѷ𝖑𝐤𝐲𝖗𝖊;
let mime = (Ѷ𝖑𝐤𝐲𝖗𝖊.quoted.msg || Ѷ𝖑𝐤𝐲𝖗𝖊.quoted).mimetype || "";
Ѷ𝖑𝐤𝐲𝖗𝖊.isMedia = /image|video|sticker|audio/.test(mime);
Ѷ𝖑𝐤𝐲𝖗𝖊.groupMetadata = Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup
? await 𝖍𝖆𝖜ӄ.groupMetadata(Ѷ𝖑𝐤𝐲𝖗𝖊.chatID)
: "";
Ѷ𝖑𝐤𝐲𝖗𝖊.participants = Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup
? await Ѷ𝖑𝐤𝐲𝖗𝖊.groupMetadata.participants
: "";
Ѷ𝖑𝐤𝐲𝖗𝖊.groupAdmins = Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup
? await Ѷ𝖑𝐤𝐲𝖗𝖊.participants
.filter((v) => v.admin !== null)
.map((v) => v.id)
: "";
Ѷ𝖑𝐤𝐲𝖗𝖊.isBotAdmin = Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup
? Ѷ𝖑𝐤𝐲𝖗𝖊.groupAdmins.includes(Ѷ𝖑𝐤𝐲𝖗𝖊.botNumber)
: false;
Ѷ𝖑𝐤𝐲𝖗𝖊.isSenderAdmin = Ѷ𝖑𝐤𝐲𝖗𝖊.isGroup
? Ѷ𝖑𝐤𝐲𝖗𝖊.groupAdmins.includes(Ѷ𝖑𝐤𝐲𝖗𝖊.sender)
: false;
Ѷ𝖑𝐤𝐲𝖗𝖊.mentionByTag =
Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo.mentionedJid
: [];
Ѷ𝖑𝐤𝐲𝖗𝖊.mentionByReply =
Ѷ𝖑𝐤𝐲𝖗𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖑𝐤𝐲𝖗𝖊.message.extendedTextMessage.contextInfo.participant || ""
: "";
let MODString =
process.env.MOD === undefined
? "918436686758,917430922909"
: process.env.MOD;
Ѷ𝖑𝐤𝐲𝖗𝖊.isSenderTUF = MODString.includes(
Ѷ𝖑𝐤𝐲𝖗𝖊.sender.substring(0, Ѷ𝖑𝐤𝐲𝖗𝖊.sender.indexOf("@"))
);
return Ѷ𝖑𝐤𝐲𝖗𝖊;
};
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(chalk.redBright("Update ${__filename}"));
delete require.cache[file];
require(file);
});
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");

//▷                                              (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!                                           ◁

("|⬡════════════════════════════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═════════════════════════════════════════════════════════════════════⬡|");
