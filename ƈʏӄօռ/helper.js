// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const UltronSitreper = require("../ʊʟȶʀօռ/UltronSitreper");
var ƈʏɮօʀɢƈʟǟ = require("./ʊʟȶʀօռƈʟǟ");
const Kolor = require("chalk");
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
exports.resolve = function (messageInstance, υℓтяσηℓιєηт, groupMetadata) {
  var ʊʟȶʀօռ = new ƈʏɮօʀɢƈʟǟ();
  var prefix = UltronSitreper.ULTRONIX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = UltronSitreper.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYΣЯЯ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYΣЯЯ));
  }
  ʊʟȶʀօռ.chatId = messageInstance.key.remoteJid || "";
  ʊʟȶʀօռ.fromMe = messageInstance.key.fromMe;
  ʊʟȶʀօռ.owner = υℓтяσηℓιєηт.user.jid || "";
  ʊʟȶʀօռ.mimeType = messageInstance.message ?
    Object.keys(messageInstance.message)[0] :
    null;
  ʊʟȶʀօռ.type =
    ʊʟȶʀօռ.mimeType === "imageMessage" ?
    "image" :
    ʊʟȶʀօռ.mimeType === "videoMessage" ?
    "video" :
    ʊʟȶʀօռ.mimeType === "conversation" ||
    ʊʟȶʀօռ.mimeType == "extendedTextMessage" ?
    "text" :
    ʊʟȶʀօռ.mimeType === "audioMessage" ?
    "audio" :
    ʊʟȶʀօռ.mimeType === "stickerMessage" ?
    "sticker" :
    "";
  ʊʟȶʀօռ.isReply =
    ʊʟȶʀօռ.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  ʊʟȶʀօռ.replyMessageId =
    ʊʟȶʀօռ.isReply && messageInstance.message.extendedTextMessage.contextInfo ?
    messageInstance.message.extendedTextMessage.contextInfo.stanzaId :
    "";
  ʊʟȶʀօռ.replyMessage =
    ʊʟȶʀօռ.isReply && messageInstance.message.extendedTextMessage.contextInfo ?
    messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
    .conversation :
    "";
  ʊʟȶʀօռ.replyParticipant =
    ʊʟȶʀօռ.isReply && messageInstance.message.extendedTextMessage.contextInfo ?
    messageInstance.message.extendedTextMessage.contextInfo.participant :
    "";
  ʊʟȶʀօռ.body =
    ʊʟȶʀօռ.mimeType === "conversation" ?
    messageInstance.message.conversation :
    ʊʟȶʀօռ.mimeType == "imageMessage" ?
    messageInstance.message.imageMessage.caption :
    ʊʟȶʀօռ.mimeType == "videoMessage" ?
    messageInstance.message.videoMessage.caption :
    ʊʟȶʀօռ.mimeType == "extendedTextMessage" ?
    messageInstance.message.extendedTextMessage.text :
    ʊʟȶʀօռ.mimeType == "buttonsResponseMessage" ?
    messageInstance.message.buttonsResponseMessage.selectedDisplayText :
    "";
  ʊʟȶʀօռ.isCmd = prefixRegex.test(ʊʟȶʀօռ.body);
  ʊʟȶʀօռ.commandName = ʊʟȶʀօռ.isCmd ?
    ʊʟȶʀօռ.body.slice(1).trim().split(/ +/).shift().toLowerCase() :
    "";
  ʊʟȶʀօռ.isImage = ʊʟȶʀօռ.type === "image";
  ʊʟȶʀօռ.isReplyImage = ʊʟȶʀօռ.isReply ?
    jsonMessage.indexOf("imageMessage") !== -1 :
    false;
  ʊʟȶʀօռ.imageCaption = ʊʟȶʀօռ.isImage ?
    messageInstance.message.imageMessage.caption :
    "";
  ʊʟȶʀօռ.isGIF =
    ʊʟȶʀօռ.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  ʊʟȶʀօռ.isReplyGIF = ʊʟȶʀօռ.isReply ?
    jsonMessage.indexOf("videoMessage") !== -1 &&
    messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
    .videoMessage.gifPlayback :
    false;
  ʊʟȶʀօռ.isSticker = ʊʟȶʀօռ.type === "sticker";
  ʊʟȶʀօռ.isReplySticker = ʊʟȶʀօռ.isReply ?
    jsonMessage.indexOf("stickerMessage") !== -1 :
    false;
  ʊʟȶʀօռ.isReplyAnimatedSticker = ʊʟȶʀօռ.isReplySticker ?
    messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
    .stickerMessage.isAnimated :
    false;
  ʊʟȶʀօռ.isVideo =
    ʊʟȶʀօռ.type === "video" &&
    !messageInstance.message.videoMessage.gifPlayback;
  ʊʟȶʀօռ.isReplyVideo = ʊʟȶʀօռ.isReply ?
    jsonMessage.indexOf("videoMessage") !== -1 &&
    !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
    .videoMessage.gifPlayback :
    false;
  ʊʟȶʀօռ.isAudio = ʊʟȶʀօռ.type === "audio";
  ʊʟȶʀօռ.isReplyAudio = ʊʟȶʀօռ.isReply ?
    jsonMessage.indexOf("audioMessage") !== -1 :
    false;
  ʊʟȶʀօռ.logGroup = υℓтяσηℓιєηт.user.jid || "";
  ʊʟȶʀօռ.isGroup = ʊʟȶʀօռ.chatId.endsWith("@g.us");
  ʊʟȶʀօռ.isPm = !ʊʟȶʀօռ.isGroup;
  ʊʟȶʀօռ.sender =
    ʊʟȶʀօռ.isGroup && messageInstance.message && ʊʟȶʀօռ.fromMe ?
    ʊʟȶʀօռ.owner :
    ʊʟȶʀօռ.isGroup && messageInstance.message ?
    messageInstance.participant :
    !ʊʟȶʀօռ.isGroup ?
    ʊʟȶʀօռ.chatId :
    "";
  ʊʟȶʀօռ.groupName = ʊʟȶʀօռ.isGroup ? groupMetadata.subject : "";
  ʊʟȶʀօռ.groupMembers = ʊʟȶʀօռ.isGroup ? groupMetadata.participants : "";
  ʊʟȶʀօռ.groupAdmins = ʊʟȶʀօռ.isGroup ?
    getGroupAdmins(ʊʟȶʀօռ.groupMembers) :
    "";
  ʊʟȶʀօռ.groupId = ʊʟȶʀօռ.isGroup ? groupMetadata.id : "";
  ʊʟȶʀօռ.isSenderSUDO = SUDOstring.includes(
    ʊʟȶʀօռ.sender.substring(0, ʊʟȶʀօռ.sender.indexOf("@"))
  );
  ʊʟȶʀօռ.isBotGroupAdmin = ʊʟȶʀօռ.isGroup ?
    ʊʟȶʀօռ.groupAdmins.includes(ʊʟȶʀօռ.owner) :
    false;
  ʊʟȶʀօռ.isSenderGroupAdmin = ʊʟȶʀօռ.isGroup ?
    ʊʟȶʀօռ.groupAdmins.includes(ʊʟȶʀօռ.sender) :
    false;

  return ʊʟȶʀօռ;
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================