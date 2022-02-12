`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ӄʀʏօȶɛӄ = require(`./𝖈𝖔𝖗𝖑𝖊𝖝𝖆ƈʟǟ`);
exports.resolve = function (messageInstance, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, groupMetadata) {
try {
var DEVstring = _𝔏𝔞𝔟_.Kate;
var 𝖈𝖔𝖗𝖑𝖊𝖝𝖆 = new ӄʀʏօȶɛӄ();
var prefix = _𝔏𝔞𝔟_.FOXTROT + `\\w+`;
var prefixRegex = new RegExp(prefix, `g`);
var jsonMessage = JSON.stringify(messageInstance);
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId = messageInstance.key.remoteJid || ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.fromMe = messageInstance.key.fromMe;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.owner = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.jid || ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType = messageInstance.message
? Object.keys(messageInstance.message)[0]
: null;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.type =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType === `imageMessage`
? `image`
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType === `videoMessage`
? `video`
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType === `conversation` ||
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType == `extendedTextMessage`
? `text`
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType === `audioMessage`
? `audio`
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType === `stickerMessage`
? `sticker`
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType === `extendedTextMessage` &&
messageInstance.message.extendedTextMessage.hasOwnProperty(
`contextInfo`
) &&
messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
`stanzaId`
);
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.replyMessageId =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.replyMessage =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.conversation
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.replyParticipant =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.participant
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.body =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType === `conversation`
? messageInstance.message.conversation
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType == `imageMessage`
? messageInstance.message.imageMessage.caption
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType == `videoMessage`
? messageInstance.message.videoMessage.caption
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType == `extendedTextMessage`
? messageInstance.message.extendedTextMessage.text
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.mimeType == `buttonsResponseMessage`
? messageInstance.message.buttonsResponseMessage.selectedDisplayText
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isCmd = prefixRegex.test(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.body);
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isCmd
? 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.alias = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isCmd
? 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isImage = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.type === `image`;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyImage = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply
? jsonMessage.indexOf(`imageMessage`) !== -1
: false;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.imageCaption = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isImage
? messageInstance.message.imageMessage.caption
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGIF =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.type === `video` &&
messageInstance.message.videoMessage.gifPlayback;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyGIF = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply
? jsonMessage.indexOf(`videoMessage`) !== -1 &&
messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isSticker = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.type === `sticker`;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplySticker = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply
? jsonMessage.indexOf(`stickerMessage`) !== -1
: false;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyAnimatedSticker = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplySticker
? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage.isAnimated
: false;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isVideo =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.type === `video` &&
!messageInstance.message.videoMessage.gifPlayback;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyVideo = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply
? jsonMessage.indexOf(`videoMessage`) !== -1 &&
!messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isAudio = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.type === `audio`;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyAudio = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply
? jsonMessage.indexOf(`audioMessage`) !== -1
: false;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.Myself = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.jid || ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId.endsWith(`@g.us`);
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isPm = !𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender =
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup && messageInstance.message && 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.fromMe
? 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.owner
: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup && messageInstance.message
? messageInstance.participant
: !𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup
? 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.groupName = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup ? groupMetadata.subject : ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.groupMembers = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup ? groupMetadata.participants : ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.groupAdmins = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup
? getGroupAdmins(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.groupMembers)
: ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.groupId = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup ? groupMetadata.id : ``;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isSenderDev = DEVstring.includes(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender.substring(0, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender.indexOf(`@`))
);
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isBotGroupAdmin = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup
? 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.groupAdmins.includes(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.owner)
: false;
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isSenderGroupAdmin = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup
? 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.groupAdmins.includes(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender)
: false;
return 𝖈𝖔𝖗𝖑𝖊𝖝𝖆;
function getGroupAdmins(participants) {
var admins = [];
for (var i in participants) {
participants[i].isAdmin ? admins.push(participants[i].jid) : ``;
}
return admins;
}
} catch (Error) {
console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: \n` + Error);
let { execSync } = require("child_process");
let res = execSync("python3 🐙ᴋʀʏᴏᴛᴇᴋ.py");
console.log(res.toString());
}
};

`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
