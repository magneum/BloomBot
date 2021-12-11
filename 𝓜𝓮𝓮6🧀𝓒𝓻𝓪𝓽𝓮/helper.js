// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
var ƈʏɮօʀɢƈʟǟ = require("./𝓜𝓮𝓮6ƈʟǟ");
const Kolor = require("chalk");
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
exports.resolve = function (messageInstance, ʍɛɛℓιєηт, groupMetadata) {
  var 𝓜𝓮𝓮6 = new ƈʏɮօʀɢƈʟǟ();
  var prefix = ꜱɪɢɴ.Mee6IX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = ꜱɪɢɴ.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYΣЯЯ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYΣЯЯ));
  }
  𝓜𝓮𝓮6.chatId = messageInstance.key.remoteJid || "";
  𝓜𝓮𝓮6.fromMe = messageInstance.key.fromMe;
  𝓜𝓮𝓮6.owner = ʍɛɛℓιєηт.user.jid || "";
  𝓜𝓮𝓮6.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  𝓜𝓮𝓮6.type =
    𝓜𝓮𝓮6.mimeType === "imageMessage"
      ? "image"
      : 𝓜𝓮𝓮6.mimeType === "videoMessage"
      ? "video"
      : 𝓜𝓮𝓮6.mimeType === "conversation" ||
        𝓜𝓮𝓮6.mimeType == "extendedTextMessage"
      ? "text"
      : 𝓜𝓮𝓮6.mimeType === "audioMessage"
      ? "audio"
      : 𝓜𝓮𝓮6.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  𝓜𝓮𝓮6.isReply =
    𝓜𝓮𝓮6.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  𝓜𝓮𝓮6.replyMessageId =
    𝓜𝓮𝓮6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  𝓜𝓮𝓮6.replyMessage =
    𝓜𝓮𝓮6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  𝓜𝓮𝓮6.replyParticipant =
    𝓜𝓮𝓮6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  𝓜𝓮𝓮6.body =
    𝓜𝓮𝓮6.mimeType === "conversation"
      ? messageInstance.message.conversation
      : 𝓜𝓮𝓮6.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : 𝓜𝓮𝓮6.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : 𝓜𝓮𝓮6.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : 𝓜𝓮𝓮6.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  𝓜𝓮𝓮6.isCmd = prefixRegex.test(𝓜𝓮𝓮6.body);
  𝓜𝓮𝓮6.commandName = 𝓜𝓮𝓮6.isCmd
    ? 𝓜𝓮𝓮6.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  𝓜𝓮𝓮6.isImage = 𝓜𝓮𝓮6.type === "image";
  𝓜𝓮𝓮6.isReplyImage = 𝓜𝓮𝓮6.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  𝓜𝓮𝓮6.imageCaption = 𝓜𝓮𝓮6.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  𝓜𝓮𝓮6.isGIF =
    𝓜𝓮𝓮6.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  𝓜𝓮𝓮6.isReplyGIF = 𝓜𝓮𝓮6.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  𝓜𝓮𝓮6.isSticker = 𝓜𝓮𝓮6.type === "sticker";
  𝓜𝓮𝓮6.isReplySticker = 𝓜𝓮𝓮6.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  𝓜𝓮𝓮6.isReplyAnimatedSticker = 𝓜𝓮𝓮6.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  𝓜𝓮𝓮6.isVideo =
    𝓜𝓮𝓮6.type === "video" && !messageInstance.message.videoMessage.gifPlayback;
  𝓜𝓮𝓮6.isReplyVideo = 𝓜𝓮𝓮6.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  𝓜𝓮𝓮6.isAudio = 𝓜𝓮𝓮6.type === "audio";
  𝓜𝓮𝓮6.isReplyAudio = 𝓜𝓮𝓮6.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  𝓜𝓮𝓮6.logGroup = ʍɛɛℓιєηт.user.jid || "";
  𝓜𝓮𝓮6.isGroup = 𝓜𝓮𝓮6.chatId.endsWith("@g.us");
  𝓜𝓮𝓮6.isPm = !𝓜𝓮𝓮6.isGroup;
  𝓜𝓮𝓮6.sender =
    𝓜𝓮𝓮6.isGroup && messageInstance.message && 𝓜𝓮𝓮6.fromMe
      ? 𝓜𝓮𝓮6.owner
      : 𝓜𝓮𝓮6.isGroup && messageInstance.message
      ? messageInstance.participant
      : !𝓜𝓮𝓮6.isGroup
      ? 𝓜𝓮𝓮6.chatId
      : "";
  𝓜𝓮𝓮6.groupName = 𝓜𝓮𝓮6.isGroup ? groupMetadata.subject : "";
  𝓜𝓮𝓮6.groupMembers = 𝓜𝓮𝓮6.isGroup ? groupMetadata.participants : "";
  𝓜𝓮𝓮6.groupAdmins = 𝓜𝓮𝓮6.isGroup ? getGroupAdmins(𝓜𝓮𝓮6.groupMembers) : "";
  𝓜𝓮𝓮6.groupId = 𝓜𝓮𝓮6.isGroup ? groupMetadata.id : "";
  𝓜𝓮𝓮6.isSenderSUDO = SUDOstring.includes(
    𝓜𝓮𝓮6.sender.substring(0, 𝓜𝓮𝓮6.sender.indexOf("@"))
  );
  𝓜𝓮𝓮6.isBotGroupAdmin = 𝓜𝓮𝓮6.isGroup
    ? 𝓜𝓮𝓮6.groupAdmins.includes(𝓜𝓮𝓮6.owner)
    : false;
  𝓜𝓮𝓮6.isSenderGroupAdmin = 𝓜𝓮𝓮6.isGroup
    ? 𝓜𝓮𝓮6.groupAdmins.includes(𝓜𝓮𝓮6.sender)
    : false;
  return 𝓜𝓮𝓮6;
};
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
