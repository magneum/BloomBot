`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import ʟᴀʏᴏᴜᴛ from "../𝐕𝐥𝐤𝐲𝐫𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import chalk from "chalk";
import VʟӄʏʀɛClass from "./msb";
import { proto, WASocket } from "@adiwajshing/baileys";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const resolve = async function (
messageInstance: proto.IWebMessageInfo,
TUF: WASocket
) {
var Vʟӄʏʀɛ: VʟӄʏʀɛClass = new VʟӄʏʀɛClass();
var prefix: string = ʟᴀʏᴏᴜᴛ.PREFIX + "\\w+";
var prefixRegex: RegExp = new RegExp(prefix, "g");
var MODstring: string = ʟᴀʏᴏᴜᴛ.MOD;
try {
var jsonMessage: string = JSON.stringify(messageInstance);
} catch (err) {
console.log(chalk.redBright("[ERROR] Something went wrong. ", err));
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
Vʟӄʏʀɛ.chatId = messageInstance.key.remoteJid.replace(/[^0-9@g.us]/g, "");
Vʟӄʏʀɛ.fromMe = messageInstance.key.fromMe;
Vʟӄʏʀɛ.owner = TUF.user.id.replace(/:.*@/g, "@");
Vʟӄʏʀɛ.sName = messageInstance.pushName;
Vʟӄʏʀɛ.mimeType = messageInstance.message
? Object.keys(messageInstance.message)[0] === "senderKeyDistributionMessage"
? Object.keys(messageInstance.message)[2]
: Object.keys(messageInstance.message)[0]
: null;
Vʟӄʏʀɛ.type =
Vʟӄʏʀɛ.mimeType === "imageMessage"
? "image"
: Vʟӄʏʀɛ.mimeType === "videoMessage"
? "video"
: Vʟӄʏʀɛ.mimeType === "conversation" ||
Vʟӄʏʀɛ.mimeType == "extendedTextMessage"
? "text"
: Vʟӄʏʀɛ.mimeType === "audioMessage"
? "audio"
: Vʟӄʏʀɛ.mimeType === "stickerMessage"
? "sticker"
: Vʟӄʏʀɛ.mimeType === "senderKeyDistributionMessage" &&
messageInstance.message?.senderKeyDistributionMessage?.groupId ===
"status@broadcast"
? "status"
: null;
Vʟӄʏʀɛ.isTextReply =
Vʟӄʏʀɛ.mimeType === "extendedTextMessage" &&
messageInstance.message?.extendedTextMessage?.contextInfo?.stanzaId
? true
: false;
Vʟӄʏʀɛ.replyMessageId =
messageInstance.message?.extendedTextMessage?.contextInfo?.stanzaId;
Vʟӄʏʀɛ.replyParticipant =
messageInstance.message?.extendedTextMessage?.contextInfo?.participant;
Vʟӄʏʀɛ.replyMessage =
messageInstance.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation;
Vʟӄʏʀɛ.body =
Vʟӄʏʀɛ.mimeType === "conversation"
? messageInstance.message?.conversation
: Vʟӄʏʀɛ.mimeType == "imageMessage"
? messageInstance.message?.imageMessage.caption
: Vʟӄʏʀɛ.mimeType == "videoMessage"
? messageInstance.message?.videoMessage.caption
: Vʟӄʏʀɛ.mimeType == "extendedTextMessage"
? messageInstance.message?.extendedTextMessage?.text
: Vʟӄʏʀɛ.mimeType == "buttonsResponseMessage"
? messageInstance.message?.buttonsResponseMessage.selectedDisplayText
: null;
Vʟӄʏʀɛ.isCmd = prefixRegex.test(Vʟӄʏʀɛ.body);
Vʟӄʏʀɛ.commandName = Vʟӄʏʀɛ.isCmd
? Vʟӄʏʀɛ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: null;
Vʟӄʏʀɛ.isImage = Vʟӄʏʀɛ.type === "image";
Vʟӄʏʀɛ.isReplyImage = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.imageMessage
? true
: false;
Vʟӄʏʀɛ.imageCaption = Vʟӄʏʀɛ.isImage
? messageInstance.message?.imageMessage.caption
: null;
Vʟӄʏʀɛ.isGIF =
Vʟӄʏʀɛ.type === "video" &&
messageInstance.message?.videoMessage?.gifPlayback;
Vʟӄʏʀɛ.isReplyGIF = messageInstance.message?.extendedTextMessage?.contextInfo
?.quotedMessage?.videoMessage?.gifPlayback
? true
: false;
Vʟӄʏʀɛ.isSticker = Vʟӄʏʀɛ.type === "sticker";
Vʟӄʏʀɛ.isReplySticker = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.stickerMessage
? true
: false;
Vʟӄʏʀɛ.isReplyAnimatedSticker =
messageInstance.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated;
Vʟӄʏʀɛ.isVideo =
Vʟӄʏʀɛ.type === "video" &&
!messageInstance.message?.videoMessage?.gifPlayback;
Vʟӄʏʀɛ.isReplyVideo = Vʟӄʏʀɛ.isTextReply
? jsonMessage.indexOf("videoMessage") !== -1 &&
!messageInstance.message?.extendedTextMessage?.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
Vʟӄʏʀɛ.isAudio = Vʟӄʏʀɛ.type === "audio";
Vʟӄʏʀɛ.isReplyAudio = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.audioMessage
? true
: false;
Vʟӄʏʀɛ.logGroup = TUF.user.id.replace(/:.*@/g, "@");
Vʟӄʏʀɛ.isGroup = Vʟӄʏʀɛ.chatId.endsWith("@g.us");
Vʟӄʏʀɛ.isPm = !Vʟӄʏʀɛ.isGroup;
Vʟӄʏʀɛ.sender =
Vʟӄʏʀɛ.isGroup && messageInstance.message && Vʟӄʏʀɛ.fromMe
? Vʟӄʏʀɛ.owner
: Vʟӄʏʀɛ.isGroup && messageInstance.message
? messageInstance.key.participant
: !Vʟӄʏʀɛ.isGroup
? Vʟӄʏʀɛ.chatId
: null;
Vʟӄʏʀɛ.isSenderMOD = MODstring.includes(
Vʟӄʏʀɛ.sender?.substring(0, Vʟӄʏʀɛ.sender.indexOf("@"))
);
return Vʟӄʏʀɛ;
};
export = resolve;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
