// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const UltronSitreper = require("./UltronSitreper");
var ƈʏɮօʀɢƈʟǟ = require("./ᴜʟᴛʀᴏɴƈʟǟ");
const Kolor = require("chalk");
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
exports.resolve = function (messageInstance, υℓтяσηℓιєηт, groupMetadata) {
  var ᴜʟᴛʀᴏɴ = new ƈʏɮօʀɢƈʟǟ();
  var prefix = UltronSitreper.ULTRONIX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = UltronSitreper.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYΣЯЯ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYΣЯЯ));
  }
  ᴜʟᴛʀᴏɴ.chatId = messageInstance.key.remoteJid || "";
  ᴜʟᴛʀᴏɴ.fromMe = messageInstance.key.fromMe;
  ᴜʟᴛʀᴏɴ.owner = υℓтяσηℓιєηт.user.jid || "";
  ᴜʟᴛʀᴏɴ.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  ᴜʟᴛʀᴏɴ.type =
    ᴜʟᴛʀᴏɴ.mimeType === "imageMessage"
      ? "image"
      : ᴜʟᴛʀᴏɴ.mimeType === "videoMessage"
      ? "video"
      : ᴜʟᴛʀᴏɴ.mimeType === "conversation" ||
        ᴜʟᴛʀᴏɴ.mimeType == "extendedTextMessage"
      ? "text"
      : ᴜʟᴛʀᴏɴ.mimeType === "audioMessage"
      ? "audio"
      : ᴜʟᴛʀᴏɴ.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  ᴜʟᴛʀᴏɴ.isReply =
    ᴜʟᴛʀᴏɴ.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  ᴜʟᴛʀᴏɴ.replyMessageId =
    ᴜʟᴛʀᴏɴ.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  ᴜʟᴛʀᴏɴ.replyMessage =
    ᴜʟᴛʀᴏɴ.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  ᴜʟᴛʀᴏɴ.replyParticipant =
    ᴜʟᴛʀᴏɴ.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  ᴜʟᴛʀᴏɴ.body =
    ᴜʟᴛʀᴏɴ.mimeType === "conversation"
      ? messageInstance.message.conversation
      : ᴜʟᴛʀᴏɴ.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : ᴜʟᴛʀᴏɴ.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : ᴜʟᴛʀᴏɴ.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : ᴜʟᴛʀᴏɴ.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  ᴜʟᴛʀᴏɴ.isCmd = prefixRegex.test(ᴜʟᴛʀᴏɴ.body);
  ᴜʟᴛʀᴏɴ.moduleName = ᴜʟᴛʀᴏɴ.isCmd
    ? ᴜʟᴛʀᴏɴ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  ᴜʟᴛʀᴏɴ.isImage = ᴜʟᴛʀᴏɴ.type === "image";
  ᴜʟᴛʀᴏɴ.isReplyImage = ᴜʟᴛʀᴏɴ.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  ᴜʟᴛʀᴏɴ.imageCaption = ᴜʟᴛʀᴏɴ.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  ᴜʟᴛʀᴏɴ.isGIF =
    ᴜʟᴛʀᴏɴ.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  ᴜʟᴛʀᴏɴ.isReplyGIF = ᴜʟᴛʀᴏɴ.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ᴜʟᴛʀᴏɴ.isSticker = ᴜʟᴛʀᴏɴ.type === "sticker";
  ᴜʟᴛʀᴏɴ.isReplySticker = ᴜʟᴛʀᴏɴ.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  ᴜʟᴛʀᴏɴ.isReplyAnimatedSticker = ᴜʟᴛʀᴏɴ.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  ᴜʟᴛʀᴏɴ.isVideo =
    ᴜʟᴛʀᴏɴ.type === "video" &&
    !messageInstance.message.videoMessage.gifPlayback;
  ᴜʟᴛʀᴏɴ.isReplyVideo = ᴜʟᴛʀᴏɴ.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ᴜʟᴛʀᴏɴ.isAudio = ᴜʟᴛʀᴏɴ.type === "audio";
  ᴜʟᴛʀᴏɴ.isReplyAudio = ᴜʟᴛʀᴏɴ.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  ᴜʟᴛʀᴏɴ.logGroup = υℓтяσηℓιєηт.user.jid || "";
  ᴜʟᴛʀᴏɴ.isGroup = ᴜʟᴛʀᴏɴ.chatId.endsWith("@g.us");
  ᴜʟᴛʀᴏɴ.isPm = !ᴜʟᴛʀᴏɴ.isGroup;
  ᴜʟᴛʀᴏɴ.sender =
    ᴜʟᴛʀᴏɴ.isGroup && messageInstance.message && ᴜʟᴛʀᴏɴ.fromMe
      ? ᴜʟᴛʀᴏɴ.owner
      : ᴜʟᴛʀᴏɴ.isGroup && messageInstance.message
      ? messageInstance.participant
      : !ᴜʟᴛʀᴏɴ.isGroup
      ? ᴜʟᴛʀᴏɴ.chatId
      : "";
  ᴜʟᴛʀᴏɴ.groupName = ᴜʟᴛʀᴏɴ.isGroup ? groupMetadata.subject : "";
  ᴜʟᴛʀᴏɴ.groupMembers = ᴜʟᴛʀᴏɴ.isGroup ? groupMetadata.participants : "";
  ᴜʟᴛʀᴏɴ.groupAdmins = ᴜʟᴛʀᴏɴ.isGroup
    ? getGroupAdmins(ᴜʟᴛʀᴏɴ.groupMembers)
    : "";
  ᴜʟᴛʀᴏɴ.groupId = ᴜʟᴛʀᴏɴ.isGroup ? groupMetadata.id : "";
  ᴜʟᴛʀᴏɴ.isSenderSUDO = SUDOstring.includes(
    ᴜʟᴛʀᴏɴ.sender.substring(0, ᴜʟᴛʀᴏɴ.sender.indexOf("@"))
  );
  ᴜʟᴛʀᴏɴ.isBotGroupAdmin = ᴜʟᴛʀᴏɴ.isGroup
    ? ᴜʟᴛʀᴏɴ.groupAdmins.includes(ᴜʟᴛʀᴏɴ.owner)
    : false;
  ᴜʟᴛʀᴏɴ.isSenderGroupAdmin = ᴜʟᴛʀᴏɴ.isGroup
    ? ᴜʟᴛʀᴏɴ.groupAdmins.includes(ᴜʟᴛʀᴏɴ.sender)
    : false;

  return ᴜʟᴛʀᴏɴ;
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
