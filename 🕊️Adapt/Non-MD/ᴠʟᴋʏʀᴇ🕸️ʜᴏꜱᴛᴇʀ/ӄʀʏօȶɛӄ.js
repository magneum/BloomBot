`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const Kolor = require("chalk");
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ӄʀʏօȶɛӄ = require(`./ᴠʟᴋʏʀᴇƈʟǟ`);
exports.ӄʀʏօȶ = function (messageInstance, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, groupMetadata) {
try {
var DEVstring = _𝔏𝔞𝔟_.KATE;
var ᴠʟᴋʏʀᴇ = new ӄʀʏօȶɛӄ();
var prefix = _𝔏𝔞𝔟_.FOXTROT + `\\w+`;
var prefixRegex = new RegExp(prefix, `g`);
var jsonMessage = JSON.stringify(messageInstance);
ᴠʟᴋʏʀᴇ.chatId = messageInstance.key.remoteJid || ``;
ᴠʟᴋʏʀᴇ.fromMe = messageInstance.key.fromMe;
ᴠʟᴋʏʀᴇ.owner = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.jid || ``;
ᴠʟᴋʏʀᴇ.mimeType = messageInstance.message
? Object.keys(messageInstance.message)[0]
: null;
ᴠʟᴋʏʀᴇ.type =
ᴠʟᴋʏʀᴇ.mimeType === `imageMessage`
? `image`
: ᴠʟᴋʏʀᴇ.mimeType === `videoMessage`
? `video`
: ᴠʟᴋʏʀᴇ.mimeType === `conversation` ||
ᴠʟᴋʏʀᴇ.mimeType == `extendedTextMessage`
? `text`
: ᴠʟᴋʏʀᴇ.mimeType === `audioMessage`
? `audio`
: ᴠʟᴋʏʀᴇ.mimeType === `stickerMessage`
? `sticker`
: ``;
ᴠʟᴋʏʀᴇ.isReply =
ᴠʟᴋʏʀᴇ.mimeType === `extendedTextMessage` &&
messageInstance.message.extendedTextMessage.hasOwnProperty(
`contextInfo`
) &&
messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
`stanzaId`
);
ᴠʟᴋʏʀᴇ.replyMessageId =
ᴠʟᴋʏʀᴇ.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
: ``;
ᴠʟᴋʏʀᴇ.replyMessage =
ᴠʟᴋʏʀᴇ.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.conversation
: ``;
ᴠʟᴋʏʀᴇ.replyParticipant =
ᴠʟᴋʏʀᴇ.isReply && messageInstance.message.extendedTextMessage.contextInfo
? messageInstance.message.extendedTextMessage.contextInfo.participant
: ``;
ᴠʟᴋʏʀᴇ.body =
ᴠʟᴋʏʀᴇ.mimeType === `conversation`
? messageInstance.message.conversation
: ᴠʟᴋʏʀᴇ.mimeType == `imageMessage`
? messageInstance.message.imageMessage.caption
: ᴠʟᴋʏʀᴇ.mimeType == `videoMessage`
? messageInstance.message.videoMessage.caption
: ᴠʟᴋʏʀᴇ.mimeType == `extendedTextMessage`
? messageInstance.message.extendedTextMessage.text
: ᴠʟᴋʏʀᴇ.mimeType == `buttonsResponseMessage`
? messageInstance.message.buttonsResponseMessage.selectedDisplayText
: ``;
ᴠʟᴋʏʀᴇ.isCmd = prefixRegex.test(ᴠʟᴋʏʀᴇ.body);
ᴠʟᴋʏʀᴇ.commandName = ᴠʟᴋʏʀᴇ.isCmd
? ᴠʟᴋʏʀᴇ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: ``;
ᴠʟᴋʏʀᴇ.alias = ᴠʟᴋʏʀᴇ.isCmd
? ᴠʟᴋʏʀᴇ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: ``;
ᴠʟᴋʏʀᴇ.isImage = ᴠʟᴋʏʀᴇ.type === `image`;
ᴠʟᴋʏʀᴇ.isReplyImage = ᴠʟᴋʏʀᴇ.isReply
? jsonMessage.indexOf(`imageMessage`) !== -1
: false;
ᴠʟᴋʏʀᴇ.imageCaption = ᴠʟᴋʏʀᴇ.isImage
? messageInstance.message.imageMessage.caption
: ``;
ᴠʟᴋʏʀᴇ.isGIF =
ᴠʟᴋʏʀᴇ.type === `video` &&
messageInstance.message.videoMessage.gifPlayback;
ᴠʟᴋʏʀᴇ.isReplyGIF = ᴠʟᴋʏʀᴇ.isReply
? jsonMessage.indexOf(`videoMessage`) !== -1 &&
messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
ᴠʟᴋʏʀᴇ.isSticker = ᴠʟᴋʏʀᴇ.type === `sticker`;
ᴠʟᴋʏʀᴇ.isReplySticker = ᴠʟᴋʏʀᴇ.isReply
? jsonMessage.indexOf(`stickerMessage`) !== -1
: false;
ᴠʟᴋʏʀᴇ.isReplyAnimatedSticker = ᴠʟᴋʏʀᴇ.isReplySticker
? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.stickerMessage.isAnimated
: false;
ᴠʟᴋʏʀᴇ.isVideo =
ᴠʟᴋʏʀᴇ.type === `video` &&
!messageInstance.message.videoMessage.gifPlayback;
ᴠʟᴋʏʀᴇ.isReplyVideo = ᴠʟᴋʏʀᴇ.isReply
? jsonMessage.indexOf(`videoMessage`) !== -1 &&
!messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
ᴠʟᴋʏʀᴇ.isAudio = ᴠʟᴋʏʀᴇ.type === `audio`;
ᴠʟᴋʏʀᴇ.isReplyAudio = ᴠʟᴋʏʀᴇ.isReply
? jsonMessage.indexOf(`audioMessage`) !== -1
: false;
ᴠʟᴋʏʀᴇ.Myself = ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.jid || ``;
ᴠʟᴋʏʀᴇ.isGroup = ᴠʟᴋʏʀᴇ.chatId.endsWith(`@g.us`);
ᴠʟᴋʏʀᴇ.isPm = !ᴠʟᴋʏʀᴇ.isGroup;
ᴠʟᴋʏʀᴇ.sender =
ᴠʟᴋʏʀᴇ.isGroup && messageInstance.message && ᴠʟᴋʏʀᴇ.fromMe
? ᴠʟᴋʏʀᴇ.owner
: ᴠʟᴋʏʀᴇ.isGroup && messageInstance.message
? messageInstance.participant
: !ᴠʟᴋʏʀᴇ.isGroup
? ᴠʟᴋʏʀᴇ.chatId
: ``;
ᴠʟᴋʏʀᴇ.groupName = ᴠʟᴋʏʀᴇ.isGroup ? groupMetadata.subject : ``;
ᴠʟᴋʏʀᴇ.groupMembers = ᴠʟᴋʏʀᴇ.isGroup ? groupMetadata.participants : ``;
ᴠʟᴋʏʀᴇ.groupAdmins = ᴠʟᴋʏʀᴇ.isGroup ? fetchGad(ᴠʟᴋʏʀᴇ.groupMembers) : ``;
ᴠʟᴋʏʀᴇ.groupId = ᴠʟᴋʏʀᴇ.isGroup ? groupMetadata.id : ``;
ᴠʟᴋʏʀᴇ.isSenderDev = DEVstring.includes(
ᴠʟᴋʏʀᴇ.sender.substring(0, ᴠʟᴋʏʀᴇ.sender.indexOf(`@`))
);
ᴠʟᴋʏʀᴇ.isBotGroupAdmin = ᴠʟᴋʏʀᴇ.isGroup
? ᴠʟᴋʏʀᴇ.groupAdmins.includes(ᴠʟᴋʏʀᴇ.owner)
: false;
ᴠʟᴋʏʀᴇ.isSenderGroupAdmin = ᴠʟᴋʏʀᴇ.isGroup
? ᴠʟᴋʏʀᴇ.groupAdmins.includes(ᴠʟᴋʏʀᴇ.sender)
: false;
return ᴠʟᴋʏʀᴇ;
function fetchGad(participants) {
var admins = [];
for (var i in participants) {
participants[i].isAdmin ? admins.push(participants[i].jid) : ``;
}
return admins;
}
} catch (error) {
console.log(error);
var sourceGue = require("child_process").exec(
"python ⭕𝖈𝖆𝖗𝖆𝖒𝖊𝖑.py",
(error, stdout, stderr) => {
if (error) console.log(Kolor.red(error));
if (stderr) console.log(Kolor.yellow(stderr));
console.log(Kolor.green(stdout));
console.log("Child ID: ", sourceGue.pid);
}
);
sourceGue.on("exit", function (code, signal) {
if (code) console.log(code);
if (signal) console.log(signal);
});
}
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*        
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
