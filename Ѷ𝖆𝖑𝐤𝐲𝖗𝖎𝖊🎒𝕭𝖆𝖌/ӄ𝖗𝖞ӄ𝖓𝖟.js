("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙`);
require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/Ѷ𝖆𝖑.js`);
let {
default: ᴋᴜɴᴀɪConnect,
generateForwardMessageContent,
generateWAMessageFromContent,
downloadContentFromMessage,
prepareWAMessageMedia,
makeInMemoryStore,
jidDecode,
proto,
} = require(`@adiwajshing/baileys`);
let fs = require(`fs`);
let pino = require(`pino`);
let path = require(`path`);
let chalk = require(`chalk`);
let goose = require("mongoose");
let FileType = require(`file-type`);
let PhoneNumber = require(`awesome-phonenumber`);
let { smsg, getBuffer, getSizeMedia } = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
let {
imageToWebp,
videoToWebp,
writeExifImg,
writeExifVid,
} = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/exif`);
let sequelize = DATABASE;
let Ѷ𝖎𝖔𝖓 = makeInMemoryStore({
logger: pino().child({ level: `silent`, stream: `Ѷ𝖎𝖔𝖓` }),
});
let dbAuth = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍂𝖘𝖖𝖑/Auth`);
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
async function startᴋᴜɴᴀɪ() {
try {
await goose
.connect(MONGOOSE, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
})
.catch((error) => {
console.error(
chalk.red(`❌𝐄𝐫𝐫𝐨𝐫: Unable to Connected with 🍃𝖒𝖔𝖓𝖌𝖔 + 𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔.`)
);
console.log(error);
process.exit(0);
});
} finally {
console.log(chalk.green("💡𝐈𝐧𝐟𝐨: Connected With 🍃𝖒𝖔𝖓𝖌𝖔 + 𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔."));
}
try {
await sequelize.authenticate();
console.log(chalk.green(`💡𝐈𝐧𝐟𝐨: Connected with 🍂𝖘𝖖𝖑.`));
} catch (error) {
console.error(chalk.red(`❌𝐄𝐫𝐫𝐨𝐫: Unable to Connected with 🍂𝖘𝖖𝖑.`));
console.log(error);
process.exit(0);
}
await sequelize.sync();
let { state, saveCreds } = await dbAuth();
let ӄ𝖗𝖞ӄ𝖓𝖟 = ᴋᴜɴᴀɪConnect({
logger: pino({ level: `silent` }),
printQRInTerminal: true,
defaultQueryTimeoutMs: undefined,
browser: [`Valkyrie`, `Chrome`, `4.0.0`],
auth: state,
});
Ѷ𝖎𝖔𝖓.bind(ӄ𝖗𝖞ӄ𝖓𝖟.ev);
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (
(decode.user && decode.server && decode.user + `@` + decode.server) ||
jid
);
} else return jid;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.getName = (jid, withoutContact = false) => {
id = ӄ𝖗𝖞ӄ𝖓𝖟.decodeJid(jid);
withoutContact = ӄ𝖗𝖞ӄ𝖓𝖟.withoutContact || withoutContact;
let v;
if (id.endsWith(`@g.us`))
return new Promise(async (resolve) => {
v = Ѷ𝖎𝖔𝖓.contacts[id] || {};
if (!(v.name || v.subject)) v = ӄ𝖗𝖞ӄ𝖓𝖟.groupMetadata(id) || {};
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
: id === ӄ𝖗𝖞ӄ𝖓𝖟.decodeJid(ӄ𝖗𝖞ӄ𝖓𝖟.user.id)
? ӄ𝖗𝖞ӄ𝖓𝖟.user
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
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendContact = async (jid, kon, quoted = ``, opts = {}) => {
let list = [];
for (let i of kon) {
list.push({
displayName: await ӄ𝖗𝖞ӄ𝖓𝖟.getName(i + `@s.whatsapp.net`),
vcard: `BEGIN:VCARD
VERSION:3.0
N:${await ӄ𝖗𝖞ӄ𝖓𝖟.getName(i + `@s.whatsapp.net`)}
FN:${await ӄ𝖗𝖞ӄ𝖓𝖟.getName(i + `@s.whatsapp.net`)}
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
ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
jid,
{
contacts: { displayName: `${list.length} contact`, contacts: list },
...opts,
},
{ quoted }
);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.public = true;
ӄ𝖗𝖞ӄ𝖓𝖟.serializeM = (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊) => smsg(ӄ𝖗𝖞ӄ𝖓𝖟, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, Ѷ𝖎𝖔𝖓);
ӄ𝖗𝖞ӄ𝖓𝖟.send5ButImg = async (
jid,
text = ``,
footer = ``,
img,
but = [],
options = {}
) => {
let message = await prepareWAMessageMedia(
{ image: img },
{ upload: ӄ𝖗𝖞ӄ𝖓𝖟.waUploadToServer }
);
let template = generateWAMessageFromContent(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
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
ӄ𝖗𝖞ӄ𝖓𝖟.relayMessage(jid, template.message, {
messageId: template.key.id,
});
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendButtonText = (
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
ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, buttonMessage, { quoted, ...options });
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendText = (jid, text, quoted = ``, options) =>
ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(jid, { text: text, ...options }, { quoted });
ӄ𝖗𝖞ӄ𝖓𝖟.sendImage = async (jid, path, caption = ``, quoted = ``, options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
jid,
{ image: buffer, caption: caption, ...options },
{ quoted }
);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendVideo = async (
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
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
jid,
{ video: buffer, caption: caption, gifPlayback: gif, ...options },
{ quoted }
);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendAudio = async (jid, path, quoted = ``, ptt = false, options) => {
let buffer = Buffer.isBuffer(path)
? path
: /^data:.*?\/.*?;base64,/i.test(path)
? Buffer.from(path.split`,`[1], `base64`)
: /^https?:\/\//.test(path)
? await await getBuffer(path)
: fs.existsSync(path)
? fs.readFileSync(path)
: Buffer.alloc(0);
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
jid,
{ audio: buffer, ptt: ptt, ...options },
{ quoted }
);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
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
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
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
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
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
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
jid,
{ sticker: { url: buffer }, ...options },
{ quoted }
);
return buffer;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.downloadAndSaveMediaMessage = async (
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
// save to file
await fs.writeFileSync(trueFileName, buffer);
return trueFileName;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.downloadMediaMessage = async (message) => {
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
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.sendMedia = async (
jid,
path,
fileName = ``,
caption = ``,
quoted = ``,
options = {}
) => {
let types = await ӄ𝖗𝖞ӄ𝖓𝖟.getFile(path, true);
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
let { writeExif } = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/exif`);
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
await ӄ𝖗𝖞ӄ𝖓𝖟.sendMessage(
jid,
{ [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
{ quoted, ...options }
);
return fs.promises.unlink(pathFile);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.copyNForward = async (
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
await ӄ𝖗𝖞ӄ𝖓𝖟.relayMessage(jid, waMessage.message, {
messageId: waMessage.key.id,
});
return waMessage;
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.cMod = (jid, copy, text = ``, sender = ӄ𝖗𝖞ӄ𝖓𝖟.user.id, options = {}) => {
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
copy.key.fromMe = sender === ӄ𝖗𝖞ӄ𝖓𝖟.user.id;
return proto.WebMessageInfo.fromObject(copy);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.getFile = async (PATH, save) => {
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
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("connection.update", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let connection_update = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/connection_update");
await connection_update.Vcnup(𝖚𝖕𝖉𝖆𝖙𝖊, startᴋᴜɴᴀɪ, ӄ𝖗𝖞ӄ𝖓𝖟);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("creds.update", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
await saveCreds(𝖚𝖕𝖉𝖆𝖙𝖊);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("messages.upsert", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let messages_upsert = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/messages_upsert");
await messages_upsert.Vmsgup(𝖚𝖕𝖉𝖆𝖙𝖊, Ѷ𝖎𝖔𝖓, ӄ𝖗𝖞ӄ𝖓𝖟);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("group-participants.update", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let group_participants = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/group_participants");
await group_participants.Vgrpns(𝖚𝖕𝖉𝖆𝖙𝖊, ӄ𝖗𝖞ӄ𝖓𝖟);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
ӄ𝖗𝖞ӄ𝖓𝖟.ws.on("CB:call", async (𝖚𝖕𝖉𝖆𝖙𝖊) => {
try {
let call_updates = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/call_updates");
await call_updates.Vclup(ӄ𝖗𝖞ӄ𝖓𝖟, 𝖚𝖕𝖉𝖆𝖙𝖊);
} catch (𝕰𝖗𝖗𝖔𝖗) {
return console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗));
}
});
return ӄ𝖗𝖞ӄ𝖓𝖟;
}
startᴋᴜɴᴀɪ().catch((𝕰𝖗𝖗𝖔𝖗) => console.log(chalk.redBright(𝕰𝖗𝖗𝖔𝖗)));
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
