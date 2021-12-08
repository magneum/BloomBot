// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
var ƈʏɮօʀɢƈʟǟ = require("./ᴍᴇᴇ6ƈʟǟ");
const Kolor = require("chalk");
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
exports.resolve = function (messageInstance, ʍɛɛℓιєηт, groupMetadata) {
  var ᴍᴇᴇ6 = new ƈʏɮօʀɢƈʟǟ();
  var prefix = ꜱɪɢɴ.Mee6IX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = ꜱɪɢɴ.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYΣЯЯ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYΣЯЯ));
  }
  ᴍᴇᴇ6.chatId = messageInstance.key.remoteJid || "";
  ᴍᴇᴇ6.fromMe = messageInstance.key.fromMe;
  ᴍᴇᴇ6.owner = ʍɛɛℓιєηт.user.jid || "";
  ᴍᴇᴇ6.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  ᴍᴇᴇ6.type =
    ᴍᴇᴇ6.mimeType === "imageMessage"
      ? "image"
      : ᴍᴇᴇ6.mimeType === "videoMessage"
      ? "video"
      : ᴍᴇᴇ6.mimeType === "conversation" ||
        ᴍᴇᴇ6.mimeType == "extendedTextMessage"
      ? "text"
      : ᴍᴇᴇ6.mimeType === "audioMessage"
      ? "audio"
      : ᴍᴇᴇ6.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  ᴍᴇᴇ6.isReply =
    ᴍᴇᴇ6.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  ᴍᴇᴇ6.replyMessageId =
    ᴍᴇᴇ6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  ᴍᴇᴇ6.replyMessage =
    ᴍᴇᴇ6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  ᴍᴇᴇ6.replyParticipant =
    ᴍᴇᴇ6.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  ᴍᴇᴇ6.body =
    ᴍᴇᴇ6.mimeType === "conversation"
      ? messageInstance.message.conversation
      : ᴍᴇᴇ6.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : ᴍᴇᴇ6.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : ᴍᴇᴇ6.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : ᴍᴇᴇ6.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  ᴍᴇᴇ6.isCmd = prefixRegex.test(ᴍᴇᴇ6.body);
  ᴍᴇᴇ6.commandName = ᴍᴇᴇ6.isCmd
    ? ᴍᴇᴇ6.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  ᴍᴇᴇ6.isImage = ᴍᴇᴇ6.type === "image";
  ᴍᴇᴇ6.isReplyImage = ᴍᴇᴇ6.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  ᴍᴇᴇ6.imageCaption = ᴍᴇᴇ6.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  ᴍᴇᴇ6.isGIF =
    ᴍᴇᴇ6.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  ᴍᴇᴇ6.isReplyGIF = ᴍᴇᴇ6.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ᴍᴇᴇ6.isSticker = ᴍᴇᴇ6.type === "sticker";
  ᴍᴇᴇ6.isReplySticker = ᴍᴇᴇ6.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  ᴍᴇᴇ6.isReplyAnimatedSticker = ᴍᴇᴇ6.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  ᴍᴇᴇ6.isVideo =
    ᴍᴇᴇ6.type === "video" && !messageInstance.message.videoMessage.gifPlayback;
  ᴍᴇᴇ6.isReplyVideo = ᴍᴇᴇ6.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  ᴍᴇᴇ6.isAudio = ᴍᴇᴇ6.type === "audio";
  ᴍᴇᴇ6.isReplyAudio = ᴍᴇᴇ6.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  ᴍᴇᴇ6.logGroup = ʍɛɛℓιєηт.user.jid || "";
  ᴍᴇᴇ6.isGroup = ᴍᴇᴇ6.chatId.endsWith("@g.us");
  ᴍᴇᴇ6.isPm = !ᴍᴇᴇ6.isGroup;
  ᴍᴇᴇ6.sender =
    ᴍᴇᴇ6.isGroup && messageInstance.message && ᴍᴇᴇ6.fromMe
      ? ᴍᴇᴇ6.owner
      : ᴍᴇᴇ6.isGroup && messageInstance.message
      ? messageInstance.participant
      : !ᴍᴇᴇ6.isGroup
      ? ᴍᴇᴇ6.chatId
      : "";
  ᴍᴇᴇ6.groupName = ᴍᴇᴇ6.isGroup ? groupMetadata.subject : "";
  ᴍᴇᴇ6.groupMembers = ᴍᴇᴇ6.isGroup ? groupMetadata.participants : "";
  ᴍᴇᴇ6.groupAdmins = ᴍᴇᴇ6.isGroup ? getGroupAdmins(ᴍᴇᴇ6.groupMembers) : "";
  ᴍᴇᴇ6.groupId = ᴍᴇᴇ6.isGroup ? groupMetadata.id : "";
  ᴍᴇᴇ6.isSenderSUDO = SUDOstring.includes(
    ᴍᴇᴇ6.sender.substring(0, ᴍᴇᴇ6.sender.indexOf("@"))
  );
  ᴍᴇᴇ6.isBotGroupAdmin = ᴍᴇᴇ6.isGroup
    ? ᴍᴇᴇ6.groupAdmins.includes(ᴍᴇᴇ6.owner)
    : false;
  ᴍᴇᴇ6.isSenderGroupAdmin = ᴍᴇᴇ6.isGroup
    ? ᴍᴇᴇ6.groupAdmins.includes(ᴍᴇᴇ6.sender)
    : false;

  return ᴍᴇᴇ6;
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
