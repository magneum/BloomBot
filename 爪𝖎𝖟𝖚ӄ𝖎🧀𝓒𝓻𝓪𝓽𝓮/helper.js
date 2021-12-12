// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
var ƈʏɮօʀɢƈʟǟ = require("./爪𝖎𝖟𝖚ӄ𝖎ƈʟǟ");
const Kolor = require("chalk");
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
exports.resolve = function (messageInstance, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, groupMetadata) {
  var 爪𝖎𝖟𝖚ӄ𝖎 = new ƈʏɮօʀɢƈʟǟ();
  var prefix = ꜱɪɢɴ.Mee6IX + "\\w+";
  var prefixRegex = new RegExp(prefix, "g");
  var SUDOstring = ꜱɪɢɴ.SUDO;
  try {
    var jsonMessage = JSON.stringify(messageInstance);
  } catch (CYΣЯЯ) {
    console.log(Kolor.redBright("[ERROR] Something went wrong. ", CYΣЯЯ));
  }
  爪𝖎𝖟𝖚ӄ𝖎.chatId = messageInstance.key.remoteJid || "";
  爪𝖎𝖟𝖚ӄ𝖎.fromMe = messageInstance.key.fromMe;
  爪𝖎𝖟𝖚ӄ𝖎.owner = 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.user.jid || "";
  爪𝖎𝖟𝖚ӄ𝖎.mimeType = messageInstance.message
    ? Object.keys(messageInstance.message)[0]
    : null;
  爪𝖎𝖟𝖚ӄ𝖎.type =
    爪𝖎𝖟𝖚ӄ𝖎.mimeType === "imageMessage"
      ? "image"
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType === "videoMessage"
      ? "video"
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType === "conversation" ||
        爪𝖎𝖟𝖚ӄ𝖎.mimeType == "extendedTextMessage"
      ? "text"
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType === "audioMessage"
      ? "audio"
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType === "stickerMessage"
      ? "sticker"
      : "";
  爪𝖎𝖟𝖚ӄ𝖎.isReply =
    爪𝖎𝖟𝖚ӄ𝖎.mimeType === "extendedTextMessage" &&
    messageInstance.message.extendedTextMessage.hasOwnProperty("contextInfo") &&
    messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
      "stanzaId"
    );
  爪𝖎𝖟𝖚ӄ𝖎.replyMessageId =
    爪𝖎𝖟𝖚ӄ𝖎.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
      : "";
  爪𝖎𝖟𝖚ӄ𝖎.replyMessage =
    爪𝖎𝖟𝖚ӄ𝖎.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .conversation
      : "";
  爪𝖎𝖟𝖚ӄ𝖎.replyParticipant =
    爪𝖎𝖟𝖚ӄ𝖎.isReply && messageInstance.message.extendedTextMessage.contextInfo
      ? messageInstance.message.extendedTextMessage.contextInfo.participant
      : "";
  爪𝖎𝖟𝖚ӄ𝖎.body =
    爪𝖎𝖟𝖚ӄ𝖎.mimeType === "conversation"
      ? messageInstance.message.conversation
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType == "imageMessage"
      ? messageInstance.message.imageMessage.caption
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType == "videoMessage"
      ? messageInstance.message.videoMessage.caption
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType == "extendedTextMessage"
      ? messageInstance.message.extendedTextMessage.text
      : 爪𝖎𝖟𝖚ӄ𝖎.mimeType == "buttonsResponseMessage"
      ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
      : "";
  爪𝖎𝖟𝖚ӄ𝖎.isCmd = prefixRegex.test(爪𝖎𝖟𝖚ӄ𝖎.body);
  爪𝖎𝖟𝖚ӄ𝖎.commandName = 爪𝖎𝖟𝖚ӄ𝖎.isCmd
    ? 爪𝖎𝖟𝖚ӄ𝖎.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    : "";
  爪𝖎𝖟𝖚ӄ𝖎.isImage = 爪𝖎𝖟𝖚ӄ𝖎.type === "image";
  爪𝖎𝖟𝖚ӄ𝖎.isReplyImage = 爪𝖎𝖟𝖚ӄ𝖎.isReply
    ? jsonMessage.indexOf("imageMessage") !== -1
    : false;
  爪𝖎𝖟𝖚ӄ𝖎.imageCaption = 爪𝖎𝖟𝖚ӄ𝖎.isImage
    ? messageInstance.message.imageMessage.caption
    : "";
  爪𝖎𝖟𝖚ӄ𝖎.isGIF =
    爪𝖎𝖟𝖚ӄ𝖎.type === "video" &&
    messageInstance.message.videoMessage.gifPlayback;
  爪𝖎𝖟𝖚ӄ𝖎.isReplyGIF = 爪𝖎𝖟𝖚ӄ𝖎.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  爪𝖎𝖟𝖚ӄ𝖎.isSticker = 爪𝖎𝖟𝖚ӄ𝖎.type === "sticker";
  爪𝖎𝖟𝖚ӄ𝖎.isReplySticker = 爪𝖎𝖟𝖚ӄ𝖎.isReply
    ? jsonMessage.indexOf("stickerMessage") !== -1
    : false;
  爪𝖎𝖟𝖚ӄ𝖎.isReplyAnimatedSticker = 爪𝖎𝖟𝖚ӄ𝖎.isReplySticker
    ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .stickerMessage.isAnimated
    : false;
  爪𝖎𝖟𝖚ӄ𝖎.isVideo =
    爪𝖎𝖟𝖚ӄ𝖎.type === "video" &&
    !messageInstance.message.videoMessage.gifPlayback;
  爪𝖎𝖟𝖚ӄ𝖎.isReplyVideo = 爪𝖎𝖟𝖚ӄ𝖎.isReply
    ? jsonMessage.indexOf("videoMessage") !== -1 &&
      !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
        .videoMessage.gifPlayback
    : false;
  爪𝖎𝖟𝖚ӄ𝖎.isAudio = 爪𝖎𝖟𝖚ӄ𝖎.type === "audio";
  爪𝖎𝖟𝖚ӄ𝖎.isReplyAudio = 爪𝖎𝖟𝖚ӄ𝖎.isReply
    ? jsonMessage.indexOf("audioMessage") !== -1
    : false;
  爪𝖎𝖟𝖚ӄ𝖎.logGroup = 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.user.jid || "";
  爪𝖎𝖟𝖚ӄ𝖎.isGroup = 爪𝖎𝖟𝖚ӄ𝖎.chatId.endsWith("@g.us");
  爪𝖎𝖟𝖚ӄ𝖎.isPm = !爪𝖎𝖟𝖚ӄ𝖎.isGroup;
  爪𝖎𝖟𝖚ӄ𝖎.sender =
    爪𝖎𝖟𝖚ӄ𝖎.isGroup && messageInstance.message && 爪𝖎𝖟𝖚ӄ𝖎.fromMe
      ? 爪𝖎𝖟𝖚ӄ𝖎.owner
      : 爪𝖎𝖟𝖚ӄ𝖎.isGroup && messageInstance.message
      ? messageInstance.participant
      : !爪𝖎𝖟𝖚ӄ𝖎.isGroup
      ? 爪𝖎𝖟𝖚ӄ𝖎.chatId
      : "";
  爪𝖎𝖟𝖚ӄ𝖎.groupName = 爪𝖎𝖟𝖚ӄ𝖎.isGroup ? groupMetadata.subject : "";
  爪𝖎𝖟𝖚ӄ𝖎.groupMembers = 爪𝖎𝖟𝖚ӄ𝖎.isGroup ? groupMetadata.participants : "";
  爪𝖎𝖟𝖚ӄ𝖎.groupAdmins = 爪𝖎𝖟𝖚ӄ𝖎.isGroup
    ? getGroupAdmins(爪𝖎𝖟𝖚ӄ𝖎.groupMembers)
    : "";
  爪𝖎𝖟𝖚ӄ𝖎.groupId = 爪𝖎𝖟𝖚ӄ𝖎.isGroup ? groupMetadata.id : "";
  爪𝖎𝖟𝖚ӄ𝖎.isSenderSUDO = SUDOstring.includes(
    爪𝖎𝖟𝖚ӄ𝖎.sender.substring(0, 爪𝖎𝖟𝖚ӄ𝖎.sender.indexOf("@"))
  );
  爪𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin = 爪𝖎𝖟𝖚ӄ𝖎.isGroup
    ? 爪𝖎𝖟𝖚ӄ𝖎.groupAdmins.includes(爪𝖎𝖟𝖚ӄ𝖎.owner)
    : false;
  爪𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin = 爪𝖎𝖟𝖚ӄ𝖎.isGroup
    ? 爪𝖎𝖟𝖚ӄ𝖎.groupAdmins.includes(爪𝖎𝖟𝖚ӄ𝖎.sender)
    : false;
  return 爪𝖎𝖟𝖚ӄ𝖎;
};
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : "";
  }
  return admins;
}
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 👓爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ👓
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
