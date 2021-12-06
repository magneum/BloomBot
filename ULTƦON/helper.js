// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
var ƈʏɮօʀɢƈʟǟ = require("./ULTƦONƈʟǟ");
const Kolor = require("chalk");
// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
exports.resolve = function (messageInstance, υℓтяσηℓιєηт, groupMetadata) {
  var ULTƦON = new ƈʏɮօʀɢƈʟǟ();
  var prefix = ꜱɪɢɴ.ULTRONIX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYΣЯЯ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYΣЯЯ));
  }
  ULTƦON.chatId = messageInstance.key.remoteJid || "";
  ULTƦON.fromMe = messageInstance.key.fromMe;
  ULTƦON.owner = υℓтяσηℓιєηт.user.jid || "";
  ULTƦON.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  ULTƦON.type =
    ULTƦON.mimeType === "imageMessage"
      ? "image"
      : ULTƦON.mimeType === "videoMessage"
      ? "video"
      : ULTƦON.mimeType === "conversation" ||
        ULTƦON.mimeType == "extendedTextMessage"
      ? "text"
      : ULTƦON.mimeType === "audioMessage"
      ? "audio"
      : ULTƦON.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  ULTƦON.isReply =
    ULTƦON.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  ULTƦON.replyMessageId =
    ULTƦON.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  ULTƦON.replyMessage =
    ULTƦON.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  ULTƦON.replyParticipant =
    ULTƦON.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  ULTƦON.body =
    ULTƦON.mimeType === "conversation"
      ? messageInstance.message.conversation
      : ULTƦON.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : ULTƦON.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : ULTƦON.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : ULTƦON.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  ULTƦON.isCmd = prefixRegex.test(ULTƦON.body);
  ULTƦON.commandName = ULTƦON.isCmd
    ? ULTƦON.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  ULTƦON.isImage = ULTƦON.type === "image";
  ULTƦON.isReplyImage = ULTƦON.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  ULTƦON.imageCaption = ULTƦON.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  ULTƦON.isGIF =
    ULTƦON.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  ULTƦON.isReplyGIF = ULTƦON.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ULTƦON.isSticker = ULTƦON.type === "sticker";
  ULTƦON.isReplySticker = ULTƦON.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  ULTƦON.isReplyAnimatedSticker = ULTƦON.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  ULTƦON.isVideo =
    ULTƦON.type === "video" &&
    !messageInstance.message.videoMessage.gifPlayback;
  ULTƦON.isReplyVideo = ULTƦON.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ULTƦON.isAudio = ULTƦON.type === "audio";
  ULTƦON.isReplyAudio = ULTƦON.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  ULTƦON.logGroup = υℓтяσηℓιєηт.user.jid || "";
  ULTƦON.isGroup = ULTƦON.chatId.endsWith("@g.us");
  ULTƦON.isPm = !ULTƦON.isGroup;
  ULTƦON.sender =
    ULTƦON.isGroup && messageInstance.message && ULTƦON.fromMe
      ? ULTƦON.owner
      : ULTƦON.isGroup && messageInstance.message
      ? messageInstance.participant
      : !ULTƦON.isGroup
      ? ULTƦON.chatId
      : "";
  ULTƦON.groupName = ULTƦON.isGroup ? groupMetadata.subject : "";
  ULTƦON.groupMembers = ULTƦON.isGroup ? groupMetadata.participants : "";
  ULTƦON.groupAdmins = ULTƦON.isGroup
    ? getGroupAdmins(ULTƦON.groupMembers)
    : "";
  ULTƦON.groupId = ULTƦON.isGroup ? groupMetadata.id : "";
  ULTƦON.isBotGroupAdmin = ULTƦON.isGroup
    ? ULTƦON.groupAdmins.includes(ULTƦON.owner)
    : false;
  ULTƦON.isSenderGroupAdmin = ULTƦON.isGroup
    ? ULTƦON.groupAdmins.includes(ULTƦON.sender)
    : false;

  return ULTƦON;
};
// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
