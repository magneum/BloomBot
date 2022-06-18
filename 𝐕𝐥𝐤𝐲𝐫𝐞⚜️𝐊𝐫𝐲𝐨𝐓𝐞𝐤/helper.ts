("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
import chalk from "chalk";
import VʟӄʏʀɛClass from "./msb";
import ʟᴀʏᴏᴜᴛ from "../𝐕𝐥𝐤𝐲𝐫𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import { proto, WASocket } from "@adiwajshing/baileys";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const resolve = async function (
currentMsg: proto.IWebMessageInfo,
TUF: WASocket
) {
var Vʟӄʏʀɛ: VʟӄʏʀɛClass = new VʟӄʏʀɛClass();
var prefix: any = ʟᴀʏᴏᴜᴛ.MuveOn;
var MODstring: any = ʟᴀʏᴏᴜᴛ.MOD;
try {
var jsonMessage: any = JSON.stringify(currentMsg);
} catch (err) {
console.log(chalk.redBright("[ERROR] Something went wrong. ", err));
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
Vʟӄʏʀɛ.sName = currentMsg.pushName;
Vʟӄʏʀɛ.fromMe = currentMsg.key.fromMe;
Vʟӄʏʀɛ.owner = TUF.user.id.replace(/:.*@/g, "@");
Vʟӄʏʀɛ.chatId = currentMsg.key.remoteJid.replace("-", "");
Vʟӄʏʀɛ.mimeType = currentMsg.message
? Object.keys(currentMsg.message)[0] === "senderKeyDistributionMessage"
? Object.keys(currentMsg.message)[2]
: Object.keys(currentMsg.message)[0]
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
currentMsg.message?.senderKeyDistributionMessage?.groupId ===
"status@broadcast"
? "status"
: null;
Vʟӄʏʀɛ.isTextReply =
Vʟӄʏʀɛ.mimeType === "extendedTextMessage" &&
currentMsg.message?.extendedTextMessage?.contextInfo?.stanzaId
? true
: false;
Vʟӄʏʀɛ.replyMessageId =
currentMsg.message?.extendedTextMessage?.contextInfo?.stanzaId;
Vʟӄʏʀɛ.replyParticipant =
currentMsg.message?.extendedTextMessage?.contextInfo?.participant;
Vʟӄʏʀɛ.replyMessage =
currentMsg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation;
Vʟӄʏʀɛ.body =
Vʟӄʏʀɛ.mimeType === "conversation"
? currentMsg.message?.conversation
: Vʟӄʏʀɛ.mimeType == "imageMessage"
? currentMsg.message?.imageMessage.caption
: Vʟӄʏʀɛ.mimeType == "videoMessage"
? currentMsg.message?.videoMessage.caption
: Vʟӄʏʀɛ.mimeType == "extendedTextMessage"
? currentMsg.message?.extendedTextMessage?.text
: Vʟӄʏʀɛ.mimeType == "buttonsResponseMessage"
? currentMsg.message?.buttonsResponseMessage.selectedDisplayText
: null;
Vʟӄʏʀɛ.isARC = Vʟӄʏʀɛ.body.startsWith(prefix);
Vʟӄʏʀɛ.commandName = Vʟӄʏʀɛ.isARC
? Vʟӄʏʀɛ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: null;
Vʟӄʏʀɛ.isImage = Vʟӄʏʀɛ.type === "image";
Vʟӄʏʀɛ.isReplyImage = currentMsg.message?.extendedTextMessage?.contextInfo
?.quotedMessage?.imageMessage
? true
: false;
Vʟӄʏʀɛ.imageCaption = Vʟӄʏʀɛ.isImage
? currentMsg.message?.imageMessage.caption
: null;
Vʟӄʏʀɛ.isGIF =
Vʟӄʏʀɛ.type === "video" && currentMsg.message?.videoMessage?.gifPlayback;
Vʟӄʏʀɛ.isReplyGIF = currentMsg.message?.extendedTextMessage?.contextInfo
?.quotedMessage?.videoMessage?.gifPlayback
? true
: false;
Vʟӄʏʀɛ.isSticker = Vʟӄʏʀɛ.type === "sticker";
Vʟӄʏʀɛ.isReplySticker = currentMsg.message?.extendedTextMessage?.contextInfo
?.quotedMessage?.stickerMessage
? true
: false;
Vʟӄʏʀɛ.isReplyAnimatedSticker =
currentMsg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated;
Vʟӄʏʀɛ.isVideo =
Vʟӄʏʀɛ.type === "video" && !currentMsg.message?.videoMessage?.gifPlayback;
Vʟӄʏʀɛ.isReplyVideo = Vʟӄʏʀɛ.isTextReply
? jsonMessage.indexOf("videoMessage") !== -1 &&
!currentMsg.message?.extendedTextMessage?.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
Vʟӄʏʀɛ.isAudio = Vʟӄʏʀɛ.type === "audio";
Vʟӄʏʀɛ.isReplyAudio = currentMsg.message?.extendedTextMessage?.contextInfo
?.quotedMessage?.audioMessage
? true
: false;
Vʟӄʏʀɛ.logGroup = TUF.user.id.replace(/:.*@/g, "@");
Vʟӄʏʀɛ.isGroup = Vʟӄʏʀɛ.chatId.endsWith("@g.us");
Vʟӄʏʀɛ.isPm = !Vʟӄʏʀɛ.isGroup;
Vʟӄʏʀɛ.sender =
Vʟӄʏʀɛ.isGroup && currentMsg.message && Vʟӄʏʀɛ.fromMe
? Vʟӄʏʀɛ.owner
: Vʟӄʏʀɛ.isGroup && currentMsg.message
? currentMsg.key.participant
: !Vʟӄʏʀɛ.isGroup
? Vʟӄʏʀɛ.chatId
: null;
Vʟӄʏʀɛ.isSenderMOD = MODstring.includes(
Vʟӄʏʀɛ.sender?.substring(0, Vʟӄʏʀɛ.sender.indexOf("@"))
);
return Vʟӄʏʀɛ;
};
export = resolve;
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
