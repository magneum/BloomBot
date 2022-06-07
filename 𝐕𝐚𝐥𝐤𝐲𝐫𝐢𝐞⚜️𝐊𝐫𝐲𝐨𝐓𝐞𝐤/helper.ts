`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
import ʟᴀʏᴏᴜᴛ from "../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import chalk from "chalk";
import νℓкуяιєClass from "./msb";
import { proto, WASocket } from "@adiwajshing/baileys";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const resolve = async function (
messageInstance: proto.IWebMessageInfo,
client: WASocket
) {
var νℓкуяιє: νℓкуяιєClass = new νℓкуяιєClass();
var prefix: string = ʟᴀʏᴏᴜᴛ.PREFIX + "\\w+";
var prefixRegex: RegExp = new RegExp(prefix, "g");
var TUFsstring: string = ʟᴀʏᴏᴜᴛ.TUFs;
try {
var jsonMessage: string = JSON.stringify(messageInstance);
} catch (err) {
console.log(chalk.redBright("[ERROR] Something went wrong. ", err));
}
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
νℓкуяιє.chatId = messageInstance.key.remoteJid;
νℓкуяιє.fromMe = messageInstance.key.fromMe;
νℓкуяιє.owner = client.user.id.replace(/:.*@/g, "@");
νℓкуяιє.mimeType = messageInstance.message
? Object.keys(messageInstance.message)[0] === "senderKeyDistributionMessage"
? Object.keys(messageInstance.message)[2]
: Object.keys(messageInstance.message)[0]
: null;
νℓкуяιє.type =
νℓкуяιє.mimeType === "imageMessage"
? "image"
: νℓкуяιє.mimeType === "videoMessage"
? "video"
: νℓкуяιє.mimeType === "conversation" ||
νℓкуяιє.mimeType == "extendedTextMessage"
? "text"
: νℓкуяιє.mimeType === "audioMessage"
? "audio"
: νℓкуяιє.mimeType === "stickerMessage"
? "sticker"
: νℓкуяιє.mimeType === "senderKeyDistributionMessage" &&
messageInstance.message?.senderKeyDistributionMessage?.groupId ===
"status@broadcast"
? "status"
: null;
νℓкуяιє.isTextReply =
νℓкуяιє.mimeType === "extendedTextMessage" &&
messageInstance.message?.extendedTextMessage?.contextInfo?.stanzaId
? true
: false;
νℓкуяιє.replyMessageId =
messageInstance.message?.extendedTextMessage?.contextInfo?.stanzaId;
νℓкуяιє.replyParticipant =
messageInstance.message?.extendedTextMessage?.contextInfo?.participant;
νℓкуяιє.replyMessage =
messageInstance.message?.extendedTextMessage?.contextInfo?.quotedMessage?.conversation;
νℓкуяιє.body =
νℓкуяιє.mimeType === "conversation"
? messageInstance.message?.conversation
: νℓкуяιє.mimeType == "imageMessage"
? messageInstance.message?.imageMessage.caption
: νℓкуяιє.mimeType == "videoMessage"
? messageInstance.message?.videoMessage.caption
: νℓкуяιє.mimeType == "extendedTextMessage"
? messageInstance.message?.extendedTextMessage?.text
: νℓкуяιє.mimeType == "buttonsResponseMessage"
? messageInstance.message?.buttonsResponseMessage.selectedDisplayText
: null;
νℓкуяιє.isCmd = prefixRegex.test(νℓкуяιє.body);
νℓкуяιє.commandName = νℓкуяιє.isCmd
? νℓкуяιє.body.slice(1).trim().split(/ +/).shift().toLowerCase()
: null;
νℓкуяιє.isImage = νℓкуяιє.type === "image";
νℓкуяιє.isReplyImage = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.imageMessage
? true
: false;
νℓкуяιє.imageCaption = νℓкуяιє.isImage
? messageInstance.message?.imageMessage.caption
: null;
νℓкуяιє.isGIF =
νℓкуяιє.type === "video" &&
messageInstance.message?.videoMessage?.gifPlayback;
νℓкуяιє.isReplyGIF = messageInstance.message?.extendedTextMessage?.contextInfo
?.quotedMessage?.videoMessage?.gifPlayback
? true
: false;
νℓкуяιє.isSticker = νℓкуяιє.type === "sticker";
νℓкуяιє.isReplySticker = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.stickerMessage
? true
: false;
νℓкуяιє.isReplyAnimatedSticker =
messageInstance.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage?.isAnimated;
νℓкуяιє.isVideo =
νℓкуяιє.type === "video" &&
!messageInstance.message?.videoMessage?.gifPlayback;
νℓкуяιє.isReplyVideo = νℓкуяιє.isTextReply
? jsonMessage.indexOf("videoMessage") !== -1 &&
!messageInstance.message?.extendedTextMessage?.contextInfo.quotedMessage
.videoMessage.gifPlayback
: false;
νℓкуяιє.isAudio = νℓкуяιє.type === "audio";
νℓкуяιє.isReplyAudio = messageInstance.message?.extendedTextMessage
?.contextInfo?.quotedMessage?.audioMessage
? true
: false;
νℓкуяιє.logGroup = client.user.id.replace(/:.*@/g, "@");
νℓкуяιє.isGroup = νℓкуяιє.chatId.endsWith("@g.us");
νℓкуяιє.isPm = !νℓкуяιє.isGroup;
νℓкуяιє.sender =
νℓкуяιє.isGroup && messageInstance.message && νℓкуяιє.fromMe
? νℓкуяιє.owner
: νℓкуяιє.isGroup && messageInstance.message
? messageInstance.key.participant
: !νℓкуяιє.isGroup
? νℓкуяιє.chatId
: null;
νℓкуяιє.isSenderTUFs = TUFsstring.includes(
νℓкуяιє.sender?.substring(0, νℓкуяιє.sender.indexOf("@"))
);
return νℓкуяιє;
};
export = resolve;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;