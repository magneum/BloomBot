`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ӄʀʏօȶɛӄ = require(`./ƈօʀȶǟռǟƈʟǟ`);
exports.resolve = function (messageInstance, ӄʀǟӄɨռʐ, groupMetadata) {
try {
var DEVstring = _𝔏𝔞𝔟_.Kate;
var ƈօʀȶǟռǟ = new ӄʀʏօȶɛӄ();
var prefix = _𝔏𝔞𝔟_.FOXTROT + `\\w+`;
var prefixRegex = new RegExp(prefix, `g`);
var jsonMessage = JSON.stringify(messageInstance);
ƈօʀȶǟռǟ.chatId = messageInstance.key.remoteJid || ``;
ƈօʀȶǟռǟ.fromMe = messageInstance.key.fromMe;
ƈօʀȶǟռǟ.owner = ӄʀǟӄɨռʐ.user.jid || ``;
ƈօʀȶǟռǟ.mimeType = messageInstance.message
? Object.keys(messageInstance.message)[0]
: null;
ƈօʀȶǟռǟ.type =
ƈօʀȶǟռǟ.mimeType === `imageMessage`
? `image`
: ƈօʀȶǟռǟ.mimeType === `videoMessage`
? `video`
: ƈօʀȶǟռǟ.mimeType === `conversation` ||
ƈօʀȶǟռǟ.mimeType == `extendedTextMessage`
? `text`
: ƈօʀȶǟռǟ.mimeType === `audioMessage`
? `audio`
: ƈօʀȶǟռǟ.mimeType === `stickerMessage`
? `sticker`
: ``;
ƈօʀȶǟռǟ.isReply =
ƈօʀȶǟռǟ.mimeType === `extendedTextMessage` &&
messageInstance.message.extendedTextMessage.hasOwnProperty(
`contextInfo`
) &&
messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
`stanzaId`
);
ƈօʀȶǟռǟ.replyMessageId =
ƈօʀȶǟռǟ.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
: ``;
ƈօʀȶǟռǟ.replyMessage =
ƈօʀȶǟռǟ.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.conversation
: ``;
ƈօʀȶǟռǟ.replyParticipant =
ƈօʀȶǟռǟ.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.participant
: ``;
ƈօʀȶǟռǟ.body =
ƈօʀȶǟռǟ.mimeType === `conversation`
? messageInstance.message.conversation
: ƈօʀȶǟռǟ.mimeType == `imageMessage`
? messageInstance.message.imageMessage.caption
: ƈօʀȶǟռǟ.mimeType == `videoMessage`
? messageInstance.message.videoMessage.caption
: ƈօʀȶǟռǟ.mimeType == `extendedTextMessage`
? messageInstance.message.extendedTextMessage.text
: ƈօʀȶǟռǟ.mimeType == `buttonsResponseMessage`
? messageInstance.message.buttonsResponseMessage.selectedDisplayText
: ``;
ƈօʀȶǟռǟ.isCmd = prefixRegex.test(ƈօʀȶǟռǟ.body);
ƈօʀȶǟռǟ.commandName = ƈօʀȶǟռǟ.isCmd
? ƈօʀȶǟռǟ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: ``;
ƈօʀȶǟռǟ.alias = ƈօʀȶǟռǟ.isCmd
? ƈօʀȶǟռǟ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: ``;
ƈօʀȶǟռǟ.isImage = ƈօʀȶǟռǟ.type === `image`;
ƈօʀȶǟռǟ.isReplyImage = ƈօʀȶǟռǟ.isReply
? jsonMessage.indexOf(`imageMessage`) !== -1
: false;
ƈօʀȶǟռǟ.imageCaption = ƈօʀȶǟռǟ.isImage
? messageInstance.message.imageMessage.caption
: ``;
ƈօʀȶǟռǟ.isGIF =
ƈօʀȶǟռǟ.type === `video` &&
messageInstance.message.videoMessage.gifPlayback;
ƈօʀȶǟռǟ.isReplyGIF = ƈօʀȶǟռǟ.isReply
? jsonMessage.indexOf(`videoMessage`) !== -1 &&
messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
ƈօʀȶǟռǟ.isSticker = ƈօʀȶǟռǟ.type === `sticker`;
ƈօʀȶǟռǟ.isReplySticker = ƈօʀȶǟռǟ.isReply
? jsonMessage.indexOf(`stickerMessage`) !== -1
: false;
ƈօʀȶǟռǟ.isReplyAnimatedSticker = ƈօʀȶǟռǟ.isReplySticker
? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage.isAnimated
: false;
ƈօʀȶǟռǟ.isVideo =
ƈօʀȶǟռǟ.type === `video` &&
!messageInstance.message.videoMessage.gifPlayback;
ƈօʀȶǟռǟ.isReplyVideo = ƈօʀȶǟռǟ.isReply
? jsonMessage.indexOf(`videoMessage`) !== -1 &&
!messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
ƈօʀȶǟռǟ.isAudio = ƈօʀȶǟռǟ.type === `audio`;
ƈօʀȶǟռǟ.isReplyAudio = ƈօʀȶǟռǟ.isReply
? jsonMessage.indexOf(`audioMessage`) !== -1
: false;
ƈօʀȶǟռǟ.Myself = ӄʀǟӄɨռʐ.user.jid || ``;
ƈօʀȶǟռǟ.isGroup = ƈօʀȶǟռǟ.chatId.endsWith(`@g.us`);
ƈօʀȶǟռǟ.isPm = !ƈօʀȶǟռǟ.isGroup;
ƈօʀȶǟռǟ.sender =
ƈօʀȶǟռǟ.isGroup && messageInstance.message && ƈօʀȶǟռǟ.fromMe
? ƈօʀȶǟռǟ.owner
: ƈօʀȶǟռǟ.isGroup && messageInstance.message
? messageInstance.participant
: !ƈօʀȶǟռǟ.isGroup
? ƈօʀȶǟռǟ.chatId
: ``;
ƈօʀȶǟռǟ.groupName = ƈօʀȶǟռǟ.isGroup ? groupMetadata.subject : ``;
ƈօʀȶǟռǟ.groupMembers = ƈօʀȶǟռǟ.isGroup ? groupMetadata.participants : ``;
ƈօʀȶǟռǟ.groupAdmins = ƈօʀȶǟռǟ.isGroup
? getGroupAdmins(ƈօʀȶǟռǟ.groupMembers)
: ``;
ƈօʀȶǟռǟ.groupId = ƈօʀȶǟռǟ.isGroup ? groupMetadata.id : ``;
ƈօʀȶǟռǟ.isSenderDev = DEVstring.includes(
ƈօʀȶǟռǟ.sender.substring(0, ƈօʀȶǟռǟ.sender.indexOf(`@`))
);
ƈօʀȶǟռǟ.isBotGroupAdmin = ƈօʀȶǟռǟ.isGroup
? ƈօʀȶǟռǟ.groupAdmins.includes(ƈօʀȶǟռǟ.owner)
: false;
ƈօʀȶǟռǟ.isSenderGroupAdmin = ƈօʀȶǟռǟ.isGroup
? ƈօʀȶǟռǟ.groupAdmins.includes(ƈօʀȶǟռǟ.sender)
: false;
return ƈօʀȶǟռǟ;
} catch (Error) {
console.log(Error);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
var childs = require(`child_process`).exec(`npm install --force`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
});
}
};
function getGroupAdmins(participants) {
var admins = [];
for (var i in participants) {
participants[i].isAdmin ? admins.push(participants[i].jid) : ``;
}
return admins;
}
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;