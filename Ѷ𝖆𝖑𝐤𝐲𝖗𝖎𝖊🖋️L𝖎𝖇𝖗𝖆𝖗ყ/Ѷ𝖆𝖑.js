("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™™  ◁|════════════════════════════════════════════════════════════⬡|");
require(`./𝕷𝖆ყO𝖚𝖙`);
const fs = require(`fs`);
const chalk = require(`chalk`);
const moment = require(`moment-timezone`);
const { Caught } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
const Ranker = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
const LinkList = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/antilink`);
const { Image_Button } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
const userBanCheck = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
module.exports = ӄ𝖚𝖓𝖆𝖎 = async (ӄ𝖚𝖓𝖆, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎, chatUpdate, Ѷ𝖎𝖔𝖓) => {
const Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎;
const ӄ𝖚𝖓𝖆𝖎 = ӄ𝖚𝖓𝖆;
const Figure =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `conversation`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `imageMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.imageMessage.caption
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `videoMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.videoMessage.caption
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `extendedTextMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.text
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `buttonsResponseMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage.selectedButtonId
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `listResponseMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage.singleSelectReply.selectedRowId
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `templateButtonReplyMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.templateButtonReplyMessage.selectedId
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `messageContextInfo`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage?.selectedButtonId ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage?.singleSelectReply.selectedRowId ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text
: ``;
const isReply =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `extendedTextMessage` &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.hasOwnProperty(`contextInfo`) &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.hasOwnProperty(`stanzaId`);
const budy = typeof Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text == `string` ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text : ``;
const isCommand = Figure.startsWith(prefix);
const isCmd =
prefix.includes(Figure != `` && Figure.slice(0, 1)) &&
Figure.slice(1) != ``;
const commandName = isCmd
? Figure.slice(1).trim().split(` `)[0].toLowerCase()
: ``;
const A𝖗𝖌𝖘 = Figure.trim().split(/ +/).slice(1);
const pushName = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || `No Name`;
const botNumber = await ӄ𝖚𝖓𝖆𝖎.decodeJid(ӄ𝖚𝖓𝖆𝖎.user.id);
const isCreator = [botNumber, ...global.owner]
.map((v) => v.replace(/[^0-9]/g, ``) + `@s.whatsapp.net`)
.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender);
const fromMe = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender == botNumber ? true : false;
const F𝖚𝖑𝖑_A𝖗𝖌𝖘 = A𝖗𝖌𝖘.join(` `);
const quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
const mime = (quoted.msg || quoted).mimetype || ``;
const isMedia = /image|video|sticker|audio/.test(mime);
const isGroup = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.endsWith(`@g.us`);
const groupMetadata = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? await ӄ𝖚𝖓𝖆𝖎.groupMetadata(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID).catch((𝕰𝖗𝖗𝖔𝖗) => {})
: ``;
const groupName = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? groupMetadata.subject : ``;
const participants = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? await groupMetadata.participants : ``;
const groupAdmins = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? await participants.filter((v) => v.admin !== null).map((v) => v.id)
: ``;
const isBotAdmin = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? groupAdmins.includes(botNumber) : false;
const isSenderAdmin = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? groupAdmins.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender)
: false;
const mentionByTag =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.mentionedJid
: [];
const mentionByReply =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.participant || ""
: "";
const Time = moment.tz(`Asia/Kolkata`).format(`DD/MM HH:mm:ss`);
const TUFString = KATE;
const isSenderTUF = TUFString.includes(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.substring(0, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.indexOf(`@`))
);
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message && !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
await Ranker.findOne(
{
serverID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
},
async (𝕰𝖗𝖗𝖔𝖗, userRank) => {
if (𝕰𝖗𝖗𝖔𝖗) return Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, 𝕰𝖗𝖗𝖔𝖗);
if (!userRank) return;
const { ARanks } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/ARanks");
await ARanks(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ӄ𝖚𝖓𝖆𝖎, Caught);
}
);
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
if (
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup &&
!isSenderAdmin &&
isBotAdmin &&
!isSenderTUF
) {
const { DenyLink } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/DenyLink");
await DenyLink(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
ӄ𝖚𝖓𝖆𝖎,
Caught,
Image_Button,
A𝖗𝖌𝖘,
LinkList,
Figure
);
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
await userBanCheck.findOne(
{
ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender,
},
async (𝕰𝖗𝖗𝖔𝖗, userBCheck) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
await userBanCheck.findOne(
{
ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
},
async (𝕰𝖗𝖗𝖔𝖗, userGCheck) => {
if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
if (userBCheck && userGCheck) {
return await Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply("Banned User or Group!");
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
if (isCommand) {
const { BeutyFly } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/BeutyFly");
await BeutyFly(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chalk, budy, pushName);
}
let MEMBER_A = [];
let MEMBER_B = [];
let MEMBER_C = [];
let MEMBER_D = [];
let MEMBER_E = [];
const MetaFor_A = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(
"120363020792949649@g.us"
);
const MetaFor_B = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(
"120363024871653603@g.us"
);
const MetaFor_C = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(
"120363042762307739@g.us"
);
const MetaFor_D = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(
"120363022161584857@g.us"
);
const MetaFor_E = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(
"120363039223842047@g.us"
);
for (var i = 0; i < MetaFor_A.participants.length; i++)
MEMBER_A[i] = MetaFor_A.participants[i].id;
for (var i = 0; i < MetaFor_B.participants.length; i++)
MEMBER_B[i] = MetaFor_B.participants[i].id;
for (var i = 0; i < MetaFor_C.participants.length; i++)
MEMBER_C[i] = MetaFor_C.participants[i].id;
for (var i = 0; i < MetaFor_D.participants.length; i++)
MEMBER_D[i] = MetaFor_D.participants[i].id;
for (var i = 0; i < MetaFor_E.participants.length; i++)
MEMBER_E[i] = MetaFor_E.participants[i].id;
if (
!fromMe &&
isCommand &&
!isSenderTUF &&
!MEMBER_A.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MEMBER_B.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MEMBER_C.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MEMBER_D.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
!MEMBER_E.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender)
) {
const { port_A } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/port_A");
await port_A(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
} else {
const { port_B } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/port_B");
await port_B(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
}
}
);
}
);
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
var Present_Path = require(`path`);
var Present_File = require.resolve(__filename);
var Present_Name = Present_Path.basename(__filename);
fs.watchFile(Present_File, () => {
fs.unwatchFile(Present_File);
console.log(
chalk.yellowBright("💡𝐈𝐧𝐟𝐨꧂ "),
chalk.greenBright(`File Auto Updated: ${Present_Name}`)
);
delete require.cache[Present_File];
require(Present_File);
});
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™™  ◁|════════════════════════════════════════════════════════════⬡|");
