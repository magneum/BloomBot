`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import ʟᴀʏᴏᴜᴛ from "../𝐀𝐫𝐜𝐭𝐢𝐱🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import chalk from "chalk";
import AʀƈȶɨӼClass from "./msb";
import { proto, WASocket } from "@adiwajshing/baileys";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const resolve = async function (
messageInstance: proto.IWebMessageInfo,
TUF: WASocket
) {
var AʀƈȶɨӼ: AʀƈȶɨӼClass = new AʀƈȶɨӼClass();
var prefix: string = ʟᴀʏᴏᴜᴛ.PREFIX + "\\w+";
var prefixRegex: RegExp = new RegExp(prefix, "g");
var TUFsstring: string = ʟᴀʏᴏᴜᴛ.TUFs;
try {
var jsonMessage: string = JSON.stringify(messageInstance);
} catch (err) {
console.log(chalk.redBright("[ERROR] Something went wrong. ", err));
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
AʀƈȶɨӼ.chatId = messageInstance.key.remoteJid;
AʀƈȶɨӼ.fromMe = messageInstance.key.fromMe;
AʀƈȶɨӼ.owner = TUF.user.id.replace(/:.*@/g, "@");
AʀƈȶɨӼ.mimeType = messageInstance.message
? Object.keys(messageInstance.message)[0] === "senderKeyDistributionMessage"
? Object.keys(messageInstance.message)[2]
: Object.keys(messageInstance.message)[0]
: null;
AʀƈȶɨӼ.type =
AʀƈȶɨӼ.mimeType === "imageMessage"
? "image"
: AʀƈȶɨӼ.mimeType === "videoMessage"
? "video"
: AʀƈȶɨӼ.mimeType === "conversation" ||
AʀƈȶɨӼ.mimeType == "extendedTextMessage"
? "text"
: AʀƈȶɨӼ.mimeType === "audioMessage"
? "audio"
: AʀƈȶɨӼ.mimeType === "stickerMessage"
? "sticker"
: AʀƈȶɨӼ.mimeType === "senderKeyDistributionMessage" &&
messageInstance.message?.senderKeyDistributionMessage?.groupId ===
"status@broadcast"
? "status"
: null;
AʀƈȶɨӼ.isTextReply =
AʀƈȶɨӼ.mimeType === "extendedTextMessage" &&
messageInstance.message?.extendedTextMessage?.contextInfo?.stanzaId
? true
: false;
AʀƈȶɨӼ.replyMessageId =
messageInstance.message?.extendedTextMessage?.contextInfo?.stanzaId;
AʀƈȶɨӼ.replyParticipant =
messageInstance.message?.extendedTextMessage?.contextInfo?.participant;
AʀƈȶɨӼ.replyMessage =
messageInstance.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation;
AʀƈȶɨӼ.body =
AʀƈȶɨӼ.mimeType === "conversation"
? messageInstance.message?.conversation
: AʀƈȶɨӼ.mimeType == "imageMessage"
? messageInstance.message?.imageMessage.caption
: AʀƈȶɨӼ.mimeType == "videoMessage"
? messageInstance.message?.videoMessage.caption
: AʀƈȶɨӼ.mimeType == "extendedTextMessage"
? messageInstance.message?.extendedTextMessage?.text
: AʀƈȶɨӼ.mimeType == "buttonsResponseMessage"
? messageInstance.message?.buttonsResponseMessage.selectedDisplayText
: null;
AʀƈȶɨӼ.isCmd = prefixRegex.test(AʀƈȶɨӼ.body);
AʀƈȶɨӼ.commandName = AʀƈȶɨӼ.isCmd
? AʀƈȶɨӼ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: null;
AʀƈȶɨӼ.isImage = AʀƈȶɨӼ.type === "image";
AʀƈȶɨӼ.isReplyImage = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.imageMessage
? true
: false;
AʀƈȶɨӼ.imageCaption = AʀƈȶɨӼ.isImage
? messageInstance.message?.imageMessage.caption
: null;
AʀƈȶɨӼ.isGIF =
AʀƈȶɨӼ.type === "video" &&
messageInstance.message?.videoMessage?.gifPlayback;
AʀƈȶɨӼ.isReplyGIF = messageInstance.message?.extendedTextMessage?.contextInfo
?.quotedMessage?.videoMessage?.gifPlayback
? true
: false;
AʀƈȶɨӼ.isSticker = AʀƈȶɨӼ.type === "sticker";
AʀƈȶɨӼ.isReplySticker = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.stickerMessage
? true
: false;
AʀƈȶɨӼ.isReplyAnimatedSticker =
messageInstance.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated;
AʀƈȶɨӼ.isVideo =
AʀƈȶɨӼ.type === "video" &&
!messageInstance.message?.videoMessage?.gifPlayback;
AʀƈȶɨӼ.isReplyVideo = AʀƈȶɨӼ.isTextReply
? jsonMessage.indexOf("videoMessage") !== -1 &&
!messageInstance.message?.extendedTextMessage?.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
AʀƈȶɨӼ.isAudio = AʀƈȶɨӼ.type === "audio";
AʀƈȶɨӼ.isReplyAudio = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.audioMessage
? true
: false;
AʀƈȶɨӼ.logGroup = TUF.user.id.replace(/:.*@/g, "@");
AʀƈȶɨӼ.isGroup = AʀƈȶɨӼ.chatId.endsWith("@g.us");
AʀƈȶɨӼ.isPm = !AʀƈȶɨӼ.isGroup;
AʀƈȶɨӼ.sender =
AʀƈȶɨӼ.isGroup && messageInstance.message && AʀƈȶɨӼ.fromMe
? AʀƈȶɨӼ.owner
: AʀƈȶɨӼ.isGroup && messageInstance.message
? messageInstance.key.participant
: !AʀƈȶɨӼ.isGroup
? AʀƈȶɨӼ.chatId
: null;
AʀƈȶɨӼ.isSenderTUFs = TUFsstring.includes(
AʀƈȶɨӼ.sender?.substring(0, AʀƈȶɨӼ.sender.indexOf("@"))
);
return AʀƈȶɨӼ;
};
export = resolve;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;