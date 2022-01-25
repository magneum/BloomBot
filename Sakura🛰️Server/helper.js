`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
var ƈʏɮօʀɢƈʟǟ = require(`./ֆǟӄʊʀǟƈʟǟ`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍹 (c)ֆǟӄʊʀǟ 🍹    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
exports.resolve = function (messageInstance, ӄʀǟӄɨռʐ, groupMetadata) {
  try {
    var DEVstring = _𝔏𝔞𝔟_.DEV;
    var ֆǟӄʊʀǟ = new ƈʏɮօʀɢƈʟǟ();
    var prefix = _𝔏𝔞𝔟_.FOXTROT + `\\w+`;
    var prefixRegex = new RegExp(prefix, `g`);
    var jsonMessage = JSON.stringify(messageInstance);
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍹 (c)ֆǟӄʊʀǟ 🍹    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    ֆǟӄʊʀǟ.chatId = messageInstance.key.remoteJid || ``;
    ֆǟӄʊʀǟ.fromMe = messageInstance.key.fromMe;
    ֆǟӄʊʀǟ.owner = ӄʀǟӄɨռʐ.user.jid || ``;
    ֆǟӄʊʀǟ.mimeType = messageInstance.message
      ? Object.keys(messageInstance.message)[0]
      : null;
    ֆǟӄʊʀǟ.type =
      ֆǟӄʊʀǟ.mimeType === `imageMessage`
        ? `image`
        : ֆǟӄʊʀǟ.mimeType === `videoMessage`
        ? `video`
        : ֆǟӄʊʀǟ.mimeType === `conversation` ||
          ֆǟӄʊʀǟ.mimeType == `extendedTextMessage`
        ? `text`
        : ֆǟӄʊʀǟ.mimeType === `audioMessage`
        ? `audio`
        : ֆǟӄʊʀǟ.mimeType === `stickerMessage`
        ? `sticker`
        : ``;
    ֆǟӄʊʀǟ.isReply =
      ֆǟӄʊʀǟ.mimeType === `extendedTextMessage` &&
      messageInstance.message.extendedTextMessage.hasOwnProperty(
        `contextInfo`
      ) &&
      messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
        `stanzaId`
      );
    ֆǟӄʊʀǟ.replyMessageId =
      ֆǟӄʊʀǟ.isReply && messageInstance.message.extendedTextMessage.contextInfo
        ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
        : ``;
    ֆǟӄʊʀǟ.replyMessage =
      ֆǟӄʊʀǟ.isReply && messageInstance.message.extendedTextMessage.contextInfo
        ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
            .conversation
        : ``;
    ֆǟӄʊʀǟ.replyParticipant =
      ֆǟӄʊʀǟ.isReply && messageInstance.message.extendedTextMessage.contextInfo
        ? messageInstance.message.extendedTextMessage.contextInfo.participant
        : ``;
    ֆǟӄʊʀǟ.body =
      ֆǟӄʊʀǟ.mimeType === `conversation`
        ? messageInstance.message.conversation
        : ֆǟӄʊʀǟ.mimeType == `imageMessage`
        ? messageInstance.message.imageMessage.caption
        : ֆǟӄʊʀǟ.mimeType == `videoMessage`
        ? messageInstance.message.videoMessage.caption
        : ֆǟӄʊʀǟ.mimeType == `extendedTextMessage`
        ? messageInstance.message.extendedTextMessage.text
        : ֆǟӄʊʀǟ.mimeType == `buttonsResponseMessage`
        ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
        : ``;
    ֆǟӄʊʀǟ.isCmd = prefixRegex.test(ֆǟӄʊʀǟ.body);
    ֆǟӄʊʀǟ.commandName = ֆǟӄʊʀǟ.isCmd
      ? ֆǟӄʊʀǟ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
      : ``;
    ֆǟӄʊʀǟ.alias = ֆǟӄʊʀǟ.isCmd
      ? ֆǟӄʊʀǟ.body.slice(1).trim().split(/ +/).shift().toLowerCase()
      : ``;
    ֆǟӄʊʀǟ.isImage = ֆǟӄʊʀǟ.type === `image`;
    ֆǟӄʊʀǟ.isReplyImage = ֆǟӄʊʀǟ.isReply
      ? jsonMessage.indexOf(`imageMessage`) !== -1
      : false;
    ֆǟӄʊʀǟ.imageCaption = ֆǟӄʊʀǟ.isImage
      ? messageInstance.message.imageMessage.caption
      : ``;
    ֆǟӄʊʀǟ.isGIF =
      ֆǟӄʊʀǟ.type === `video` &&
      messageInstance.message.videoMessage.gifPlayback;
    ֆǟӄʊʀǟ.isReplyGIF = ֆǟӄʊʀǟ.isReply
      ? jsonMessage.indexOf(`videoMessage`) !== -1 &&
        messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .videoMessage.gifPlayback
      : false;
    ֆǟӄʊʀǟ.isSticker = ֆǟӄʊʀǟ.type === `sticker`;
    ֆǟӄʊʀǟ.isReplySticker = ֆǟӄʊʀǟ.isReply
      ? jsonMessage.indexOf(`stickerMessage`) !== -1
      : false;
    ֆǟӄʊʀǟ.isReplyAnimatedSticker = ֆǟӄʊʀǟ.isReplySticker
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .stickerMessage.isAnimated
      : false;
    ֆǟӄʊʀǟ.isVideo =
      ֆǟӄʊʀǟ.type === `video` &&
      !messageInstance.message.videoMessage.gifPlayback;
    ֆǟӄʊʀǟ.isReplyVideo = ֆǟӄʊʀǟ.isReply
      ? jsonMessage.indexOf(`videoMessage`) !== -1 &&
        !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .videoMessage.gifPlayback
      : false;
    ֆǟӄʊʀǟ.isAudio = ֆǟӄʊʀǟ.type === `audio`;
    ֆǟӄʊʀǟ.isReplyAudio = ֆǟӄʊʀǟ.isReply
      ? jsonMessage.indexOf(`audioMessage`) !== -1
      : false;
    ֆǟӄʊʀǟ.Myself = ӄʀǟӄɨռʐ.user.jid || ``;
    ֆǟӄʊʀǟ.isGroup = ֆǟӄʊʀǟ.chatId.endsWith(`@g.us`);
    ֆǟӄʊʀǟ.isPm = !ֆǟӄʊʀǟ.isGroup;
    ֆǟӄʊʀǟ.sender =
      ֆǟӄʊʀǟ.isGroup && messageInstance.message && ֆǟӄʊʀǟ.fromMe
        ? ֆǟӄʊʀǟ.owner
        : ֆǟӄʊʀǟ.isGroup && messageInstance.message
        ? messageInstance.participant
        : !ֆǟӄʊʀǟ.isGroup
        ? ֆǟӄʊʀǟ.chatId
        : ``;
    ֆǟӄʊʀǟ.groupName = ֆǟӄʊʀǟ.isGroup ? groupMetadata.subject : ``;
    ֆǟӄʊʀǟ.groupMembers = ֆǟӄʊʀǟ.isGroup ? groupMetadata.participants : ``;
    ֆǟӄʊʀǟ.groupAdmins = ֆǟӄʊʀǟ.isGroup
      ? getGroupAdmins(ֆǟӄʊʀǟ.groupMembers)
      : ``;
    ֆǟӄʊʀǟ.groupId = ֆǟӄʊʀǟ.isGroup ? groupMetadata.id : ``;
    ֆǟӄʊʀǟ.isSenderDev = DEVstring.includes(
      ֆǟӄʊʀǟ.sender.substring(0, ֆǟӄʊʀǟ.sender.indexOf(`@`))
    );
    ֆǟӄʊʀǟ.isBotGroupAdmin = ֆǟӄʊʀǟ.isGroup
      ? ֆǟӄʊʀǟ.groupAdmins.includes(ֆǟӄʊʀǟ.owner)
      : false;
    ֆǟӄʊʀǟ.isSenderGroupAdmin = ֆǟӄʊʀǟ.isGroup
      ? ֆǟӄʊʀǟ.groupAdmins.includes(ֆǟӄʊʀǟ.sender)
      : false;
    return ֆǟӄʊʀǟ;
  } catch (Error) {
    console.log(Error);
  }
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍹 (c)ֆǟӄʊʀǟ 🍹    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
function getGroupAdmins(participants) {
  var admins = [];
  for (var i in participants) {
    participants[i].isAdmin ? admins.push(participants[i].jid) : ``;
  }
  return admins;
}
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
