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
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
require(`../🤖Utilities/Settings`);
require(`../🤖Utilities/Ѷ𝖆𝖑.js`);
let {
default: 𝖍𝖆𝖜ӄC,
generateForwardMessageContent,
generateWAMessageFromContent,
downloadContentFromMessage,
fetchLatestBaileysVersion,
prepareWAMessageMedia,
makeInMemoryStore,
MessageRetryMap,
jidDecode,
proto,
} = require(`@adiwajshing/baileys`);
let Baileys = require("@adiwajshing/baileys");
let fs = require(`fs`);
let pino = require(`pino`);
let path = require(`path`);
let chalk = require(`chalk`);
let Draw = require("cfonts");
let goose = require("mongoose");
let FileType = require(`file-type`);
let Fs = require("fs");
let assert = require("assert");
let { spawn } = require("child_process");
let PhoneNumber = require(`awesome-phonenumber`);
let dbAuth = require("../🌤️Cloud/🍂𝖘𝖖𝖑/Auth");
let dbCloudAuth = require("../🌤️Cloud/🌩️𝖈𝖑𝖔𝖚𝖉𝖉𝖇/dbcloud");
let { smsg, getBuffer, getSizeMedia } = require(`../🤖Utilities/ɴᴇᴄᴛᴏʀ`);
let {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid,
} = require(`../🤖Utilities/exif`);
let sequelize = DATABASE;
let Ѷ𝖎𝖔𝖓 = makeInMemoryStore({
logger: pino().child({ level: `fatal`, stream: `Ѷ𝖎𝖔𝖓` }),
});
function generateWA(Topic, TName, Text, Name) {
let TPrint = chalk.hex(TName).bold(Topic);
let Print = chalk.hex(Name).italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TPrint)), chalk.black(Print));
}
console.log(
chalk.black(chalk.bgBlack(chalk.hex("#fad48b.").bold("📡DATABASE: "))),
chalk.whiteBright.italic(DATABASE_URL || DATABASE)
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
async function Ѷ𝖎𝖔𝖓ᴇᴏɴᴇ() {
try {
await goose
.connect(MONGOOSE, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.catch((error) => {
generateWA(
"❌ᴇʀʀᴏʀ: ",
"#ff6347",
"Unable to Connected with 🍃𝖒𝖔𝖓𝖌𝖔 + 𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔.",
"#ed7777"
);
console.log(error);
process.exit(0);
});
} finally {
generateWA(
"⚡ɪɴꜰᴏ: ",
"#2D5A27",
"Connected With 🍃𝖒𝖔𝖓𝖌𝖔 + 𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔.",
"#849871"
);
}
try {
await sequelize.authenticate();
generateWA(
"⚡ɪɴꜰᴏ: ",
"#2D5A27",
"💡𝐈𝐧𝐟𝐨: Connected with 🍂𝖘𝖖𝖑 + 🌩️𝖈𝖑𝖔𝖚𝖉𝖉𝖇.",
"#849871"
);
} catch (error) {
generateWA(
"❌ᴇʀʀᴏʀ: ",
"#ff6347",
"Unable to Connected with 🍂𝖘𝖖𝖑 + 🌩️𝖈𝖑𝖔𝖚𝖉𝖉𝖇.",
"#ed7777"
);
console.log(error);
process.exit(0);
}
await sequelize.sync();
let { version } = await fetchLatestBaileysVersion();
let msgRetryCounterMap = {};
let { state, Adapt } = await dbAuth();
let ӄryӄnz = 𝖍𝖆𝖜ӄC({
auth: state,
// msgRetryCounterMap,
printQRInTerminal: true,
defaultQueryTimeoutMs: undefined,
logger: pino({ level: `fatal` }),
browser: [`Vlkyre`, `Chrome`, `4.0.0`],
// getMessage: async (key) => {
// return {
// conversation: "",
// };
// },
});
Ѷ𝖎𝖔𝖓.bind(ӄryӄnz.ev);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (
(decode.user && decode.server && decode.user + `@` + decode.server) ||
jid
);
} else return jid;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.getName = (jid, withoutContact = false) => {
id = ӄryӄnz.decodeJid(jid);
withoutContact = ӄryӄnz.withoutContact || withoutContact;
let v;
if (id.endsWith(`@g.us`))
return new Promise(async (resolve) => {
v = Ѷ𝖎𝖔𝖓.contacts[id] || {};
if (!(v.name || v.subject)) v = ӄryӄnz.groupMetadata(id) || {};
resolve(
v.name ||
v.subject ||
PhoneNumber(`+` + id.replace(`@s.whatsapp.net`, ``)).getNumber(
`international`
)
);
});
else
v =
id === `0@s.whatsapp.net`
? {
id,
name: `WhatsApp`,
}
: id === ӄryӄnz.decodeJid(ӄryӄnz.user.id)
? ӄryӄnz.user
: Ѷ𝖎𝖔𝖓.contacts[id] || {};
return (
(withoutContact ? `` : v.name) ||
v.subject ||
v.verifiedName ||
PhoneNumber(`+` + jid.replace(`@s.whatsapp.net`, ``)).getNumber(
`international`
)
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendContact = async (jid, kon, quoted = ``, opts = {}) => {
let list = [];
for (let i of kon) {
list.push({
displayName: await ӄryӄnz.getName(i + `@s.whatsapp.net`),
vcard: `BEGIN:VCARD
VERSION:3.0
N:${await ӄryӄnz.getName(i + `@s.whatsapp.net`)}
FN:${await ӄryӄnz.getName(i + `@s.whatsapp.net`)}
item1.TEL;waid=${i}:${i}
item1.X-ABLabel:Phone
item2.EMAIL;type=INTERNET:ᴋᴜɴᴀɪbots@gmail.com
item2.X-ABLabel:Email
item3.URL:https://instagram.com/riki_4932
item3.X-ABLabel:Instagram
item4.ADR:;;India;;;;
item4.X-ABLabel:Region
END:VCARD`,
});
}
ӄryӄnz.sendMessage(
jid,
{
contacts: { displayName: `${list.length} contact`, contacts: list },
...opts,
},
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.public = true;
ӄryӄnz.serializeM = (Vlkyre) => smsg(ӄryӄnz, Vlkyre, Ѷ𝖎𝖔𝖓);
ӄryӄnz.send5ButImg = async (
jid,
text = ``,
footer = ``,
img,
but = [],
options = {}
) => {
let message = await prepareWAMessageMedia(
{ image: img },
{ upload: ӄryӄnz.waUploadToServer }
);
let template = generateWAMessageFromContent(
Vlkyre.chatID,
proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: text,
hydratedFooterText: footer,
hydratedButtons: but,
},
},
}),
options
);
ӄryӄnz.relayMessage(jid, template.message, {
messageId: template.key.id,
});
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendButtonText = (
jid,
buttons = [],
text,
footer,
quoted = ``,
options = {}
) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options,
};
ӄryӄnz.sendMessage(jid, buttonMessage, { quoted, ...options });
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendText = (jid, text, quoted = ``, options) =>
ӄryӄnz.sendMessage(jid, { text: text, ...options }, { quoted });
ӄryӄnz.sendImage = async (jid, path, caption = ``, quoted = ``, options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄryӄnz.sendMessage(
jid,
{ image: buffer, caption: caption, ...options },
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendVideo = async (
jid,
path,
caption = ``,
quoted = ``,
gif = false,
options
) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄryӄnz.sendMessage(
jid,
{ video: buffer, caption: caption, gifPlayback: gif, ...options },
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendAudio = async (jid, path, quoted = ``, ptt = false, options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄryӄnz.sendMessage(
jid,
{ audio: buffer, ptt: ptt, ...options },
{ quoted }
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
ӄryӄnz.sendMessage(
jid,
{
text: text,
contextInfo: {
mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
(v) => v[1] + `@s.whatsapp.net`
),
},
...options,
},
{ quoted }
);
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options);
} else {
buffer = await imageToWebp(buff);
}
await ӄryӄnz.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
let buffer;
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options);
} else {
buffer = await videoToWebp(buff);
}
await ӄryӄnz.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.downloadAndSaveMediaMessage = async (
message,
filename,
attachExtension = true
) => {
let quoted = message.msg ? message.msg : message;
let mime = (message.msg || message).mimetype || ``;
let messageType = message.mtype
? message.mtype.replace(/Message/gi, ``)
: mime.split(`/`)[0];
let stream = await downloadContentFromMessage(quoted, messageType);
let buffer = Buffer.from([]);
for await (let chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
let type = await FileType.fromBuffer(buffer);
trueFileName = attachExtension ? filename + `.` + type.ext : filename;
await fs.writeFileSync(trueFileName, buffer);
return trueFileName;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ``;
let messageType = message.mtype
? message.mtype.replace(/Message/gi, ``)
: mime.split(`/`)[0];
let stream = await downloadContentFromMessage(message, messageType);
let buffer = Buffer.from([]);
for await (let chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.sendMedia = async (
jid,
path,
fileName = ``,
caption = ``,
quoted = ``,
options = {}
) => {
let types = await ӄryӄnz.getFile(path, true);
let { mime, ext, res, data, filename } = types;
if ((res && res.status !== 200) || file.length <= 65536) {
try {
throw { json: JSON.parse(file.toString()) };
} catch (e) {
if (e.json) throw e.json;
}
}
let type = ``,
mimetype = mime,
pathFile = filename;
if (options.asDocument) type = `document`;
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require(`../🤖Utilities/exif`);
let media = { mimetype: mime, data };
pathFile = await writeExif(media, {
packname: options.packname ? options.packname : global.packname,
author: options.author ? options.author : global.author,
categories: options.categories ? options.categories : [],
});
await fs.promises.unlink(filename);
type = `sticker`;
mimetype = `image/webp`;
} else if (/image/.test(mime)) type = `image`;
else if (/video/.test(mime)) type = `video`;
else if (/audio/.test(mime)) type = `audio`;
else type = `document`;
await ӄryӄnz.sendMessage(
jid,
{ [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
{ quoted, ...options }
);
return fs.promises.unlink(pathFile);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.copyNForward = async (
jid,
message,
forceForward = false,
options = {}
) => {
let vtype;
if (options.readViewOnce) {
message.message =
message.message &&
message.message.ephemeralMessage &&
message.message.ephemeralMessage.message
? message.message.ephemeralMessage.message
: message.message || undefined;
vtype = Object.keys(message.message.viewOnceMessage.message)[0];
delete (message.message && message.message.ignore
? message.message.ignore
: message.message || undefined);
delete message.message.viewOnceMessage.message[vtype].viewOnce;
message.message = {
...message.message.viewOnceMessage.message,
};
}
let mtype = Object.keys(message.message)[0];
let content = await generateForwardMessageContent(message, forceForward);
let ctype = Object.keys(content)[0];
let context = {};
if (mtype != `conversation`) context = message.message[mtype].contextInfo;
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo,
};
let waMessage = await generateWAMessageFromContent(
jid,
content,
options
? {
...content[ctype],
...options,
...(options.contextInfo
? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo,
},
}
: {}),
}
: {}
);
await ӄryӄnz.relayMessage(jid, waMessage.message, {
messageId: waMessage.key.id,
});
return waMessage;
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.cMod = (
jid,
copy,
text = ``,
sender = ӄryӄnz.user.id,
options = {}
) => {
let mtype = Object.keys(copy.message)[0];
let isEphemeral = mtype === `ephemeralMessage`;
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
}
let msg = isEphemeral
? copy.message.ephemeralMessage.message
: copy.message;
let content = msg[mtype];
if (typeof content === `string`) msg[mtype] = text || content;
else if (content.caption) content.caption = text || content.caption;
else if (content.text) content.text = text || content.text;
if (typeof content !== `string`)
msg[mtype] = {
...content,
...options,
};
if (copy.key.participant)
sender = copy.key.participant = sender || copy.key.participant;
else if (copy.key.participant)
sender = copy.key.participant = sender || copy.key.participant;
if (copy.key.remoteJid.includes(`@s.whatsapp.net`))
sender = sender || copy.key.remoteJid;
else if (copy.key.remoteJid.includes(`@broadcast`))
sender = sender || copy.key.remoteJid;
copy.key.remoteJid = jid;
copy.key.fromMe = sender === ӄryӄnz.user.id;
return proto.WebMessageInfo.fromObject(copy);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.getFile = async (PATH, save) => {
let res;
let data = Buffer.isBuffer(PATH)
? PATH
: /^data:.*?\/.*?;base64,/i.test(PATH)
? Buffer.from(PATH.split`,`[1], `base64`)
: /^https?:\/\//.test(PATH)
? await (res = await getBuffer(PATH))
: fs.existsSync(PATH)
? ((filename = PATH), fs.readFileSync(PATH))
: typeof PATH === `string`
? PATH
: Buffer.alloc(0);
if (!Buffer.isBuffer(data)) throw new TypeError("Result is not a buffer");
let type = (await FileType.fromBuffer(data)) || {
mime: `application/octet-stream`,
ext: `.bin`,
};
filename = path.join(
__filename,
`../src/` + new Date() * 1 + `.` + type.ext
);
if (data && save) fs.promises.writeFile(filename, data);
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data,
};
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.ev.on("connection.update", async (update) => {
try {
if (!HEROKU_APP_NAME) {
Draw.say("Vlkyre", {
font: "slick",
align: "center",
gradient: ["red", "yellow"],
});
}

let connection_update = require("../🌗Events/connection_update");
await connection_update.Vcnup(update, Ѷ𝖎𝖔𝖓ᴇᴏɴᴇ, ӄryӄnz);
} catch (error) {
generateWA("❌ᴇʀʀᴏʀ: ", "#ff6347", error, "#ed7777");
}
});
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.ev.on("creds.update", (update) => Adapt(update));
ӄryӄnz.ev.on("messages.upsert", async (update) => {
try {
let messages_upsert = require("../🌗Events/messages_upsert");
await messages_upsert.Vmsgup(update, Ѷ𝖎𝖔𝖓, ӄryӄnz);
} catch (error) {
generateWA("❌ᴇʀʀᴏʀ: ", "#ff6347", error, "#ed7777");
}
});
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.ev.on("group-participants.update", async (update) => {
try {
let group_participants = require("../🌗Events/group_participants");
await group_participants.Vgrpns(update, ӄryӄnz);
} catch (error) {
generateWA("❌ᴇʀʀᴏʀ: ", "#ff6347", error, "#ed7777");
}
});
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
ӄryӄnz.ws.on("CB:call", async (update) => {
try {
let call_updates = require("../🌗Events/call_updates");
await call_updates.Vclup(ӄryӄnz, update);
} catch (error) {
generateWA("❌ᴇʀʀᴏʀ: ", "#ff6347", error, "#ed7777");
}
});
return ӄryӄnz;
}
// async function FsDex() {
// if (!fs.existsSync("./𝐕𝐥𝐤𝐲𝐫𝐞.ts")) process.exit(0);
// let folders = [".", ...Object.keys(require("../package.json").directories)];
// let files = [];
// for (let folder of folders)
// for (let file of Fs.readdirSync(folder).filter((v) => v.endsWith(`.js`)))
// files.push(path.resolve(path.join(folder, file)));
// for (let file of files) {
// let Fils = [file];
// if (file == path.join(__dirname, __filename)) continue;
// spawn("node", ["-c", file])
// .on("exit", () => {
// Fs.readFile(file, function (err, content) {
// if (err) throw err;
// if (content.indexOf("ᴀʙ™") > -1 === false) process.exit(0);
// if (content.indexOf("𝐲𝐫𝐞") > -1 === false) process.exit(0);
// });
// })
// .stderr.on("data", (chunk) => assert.fail(chunk.toString()));
// }
// }
// FsDex().catch((error) => generateWA("❌ᴇʀʀᴏʀ: ", "#ff6347", error, "#ed7777"));
Ѷ𝖎𝖔𝖓ᴇᴏɴᴇ().catch((error) => generateWA("❌ᴇʀʀᴏʀ: ", "#ff6347", error, "#ed7777"));
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
