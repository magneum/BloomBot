const config = require("../Últrðñ/config");
var ƈʏɮօʀɢƈʟǟ = require("./Últrðñƈʟǟ");
const Kolor = require("chalk");
exports.resolve = function (messageInstance, ӄʀǟӄɨռʐ, groupMetadata) {
  var Últrðñ = new ƈʏɮօʀɢƈʟǟ();
  var prefix = config.PREFIX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = config.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYΣЯЯ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYΣЯЯ));
  }
  Últrðñ.chatId = messageInstance.key.remoteJid || "";
  Últrðñ.fromMe = messageInstance.key.fromMe;
  Últrðñ.owner = ӄʀǟӄɨռʐ.user.jid || "";
  Últrðñ.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  Últrðñ.type =
    Últrðñ.mimeType === "imageMessage"
      ? "image"
      : Últrðñ.mimeType === "videoMessage"
      ? "video"
      : Últrðñ.mimeType === "conversation" ||
        Últrðñ.mimeType == "extendedTextMessage"
      ? "text"
      : Últrðñ.mimeType === "audioMessage"
      ? "audio"
      : Últrðñ.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  Últrðñ.isReply =
    Últrðñ.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  Últrðñ.replyMessageId =
    Últrðñ.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  Últrðñ.replyMessage =
    Últrðñ.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  Últrðñ.replyParticipant =
    Últrðñ.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  Últrðñ.body =
    Últrðñ.mimeType === "conversation"
      ? messageInstance.message.conversation
      : Últrðñ.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : Últrðñ.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : Últrðñ.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : Últrðñ.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  Últrðñ.isCmd = prefixRegex.test(Últrðñ.body);
  Últrðñ.commandName = Últrðñ.isCmd
    ? Últrðñ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  Últrðñ.isImage = Últrðñ.type === "image";
  Últrðñ.isReplyImage = Últrðñ.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  Últrðñ.imageCaption = Últrðñ.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  Últrðñ.isGIF =
    Últrðñ.type === "video" && messageInstance.message.videoMessage.gifPlayback;
  Últrðñ.isReplyGIF = Últrðñ.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  Últrðñ.isSticker = Últrðñ.type === "sticker";
  Últrðñ.isReplySticker = Últrðñ.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  Últrðñ.isReplyAnimatedSticker = Últrðñ.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  Últrðñ.isVideo =
    Últrðñ.type === "video" &&
    !messageInstance.message.videoMessage.gifPlayback;
  Últrðñ.isReplyVideo = Últrðñ.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  Últrðñ.isAudio = Últrðñ.type === "audio";
  Últrðñ.isReplyAudio = Últrðñ.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  Últrðñ.logGroup = ӄʀǟӄɨռʐ.user.jid || "";
  Últrðñ.isGroup = Últrðñ.chatId.endsWith("@g.us");
  Últrðñ.isPm = !Últrðñ.isGroup;
  Últrðñ.sender =
    Últrðñ.isGroup && messageInstance.message && Últrðñ.fromMe
      ? Últrðñ.owner
      : Últrðñ.isGroup && messageInstance.message
      ? messageInstance.participant
      : !Últrðñ.isGroup
      ? Últrðñ.chatId
      : "";
  Últrðñ.groupName = Últrðñ.isGroup ? groupMetadata.subject : "";
  Últrðñ.groupMembers = Últrðñ.isGroup ? groupMetadata.participants : "";
  Últrðñ.groupAdmins = Últrðñ.isGroup
    ? getGroupAdmins(Últrðñ.groupMembers)
    : "";
  Últrðñ.groupId = Últrðñ.isGroup ? groupMetadata.id : "";
  Últrðñ.isSenderSUDO = SUDOstring.includes(
    Últrðñ.sender.substring(0, Últrðñ.sender.indexOf("@"))
  );
  Últrðñ.isBotGroupAdmin = Últrðñ.isGroup
    ? Últrðñ.groupAdmins.includes(Últrðñ.owner)
    : false;
  Últrðñ.isSenderGroupAdmin = Últrðñ.isGroup
    ? Últrðñ.groupAdmins.includes(Últrðñ.sender)
    : false;

  return Últrðñ;
};

function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
