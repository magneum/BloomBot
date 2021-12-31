try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  var ƈʏɮօʀɢƈʟǟ = require(`./𝓜𝖎𝖟𝖚ӄ𝖎ƈʟǟ`);
  const Kolor = require(`chalk`);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  exports.resolve = function (messageInstance, ӄʀǟӄɨռʐ, groupMetadata) {
    var DEVstring = _𝔏𝔞𝔟_.DEV;
    var 𝓜𝖎𝖟𝖚ӄ𝖎 = new ƈʏɮօʀɢƈʟǟ();
    var prefix = _𝔏𝔞𝔟_.FOXTROT + `\\w+`;
    var prefixRegex = new RegExp(prefix, `g`);
    var jsonMessage = JSON.stringify(messageInstance);
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId = messageInstance.key.remoteJid || ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.fromMe = messageInstance.key.fromMe;
    𝓜𝖎𝖟𝖚ӄ𝖎.owner = ӄʀǟӄɨռʐ.user.jid || ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.mimeType = messageInstance.message
      ? Object.keys(messageInstance.message)[0]
      : null;
    𝓜𝖎𝖟𝖚ӄ𝖎.type =
      𝓜𝖎𝖟𝖚ӄ𝖎.mimeType === `imageMessage`
        ? `image`
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType === `videoMessage`
        ? `video`
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType === `conversation` ||
          𝓜𝖎𝖟𝖚ӄ𝖎.mimeType == `extendedTextMessage`
        ? `text`
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType === `audioMessage`
        ? `audio`
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType === `stickerMessage`
        ? `sticker`
        : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.isReply =
      𝓜𝖎𝖟𝖚ӄ𝖎.mimeType === `extendedTextMessage` &&
      messageInstance.message.extendedTextMessage.hasOwnProperty(
        `contextInfo`
      ) &&
      messageInstance.message.extendedTextMessage.contextInfo.hasOwnProperty(
        `stanzaId`
      );
    𝓜𝖎𝖟𝖚ӄ𝖎.replyMessageId =
      𝓜𝖎𝖟𝖚ӄ𝖎.isReply && messageInstance.message.extendedTextMessage.contextInfo
        ? messageInstance.message.extendedTextMessage.contextInfo.stanzaId
        : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage =
      𝓜𝖎𝖟𝖚ӄ𝖎.isReply && messageInstance.message.extendedTextMessage.contextInfo
        ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
            .conversation
        : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant =
      𝓜𝖎𝖟𝖚ӄ𝖎.isReply && messageInstance.message.extendedTextMessage.contextInfo
        ? messageInstance.message.extendedTextMessage.contextInfo.participant
        : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.body =
      𝓜𝖎𝖟𝖚ӄ𝖎.mimeType === `conversation`
        ? messageInstance.message.conversation
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType == `imageMessage`
        ? messageInstance.message.imageMessage.caption
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType == `videoMessage`
        ? messageInstance.message.videoMessage.caption
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType == `extendedTextMessage`
        ? messageInstance.message.extendedTextMessage.text
        : 𝓜𝖎𝖟𝖚ӄ𝖎.mimeType == `buttonsResponseMessage`
        ? messageInstance.message.buttonsResponseMessage.selectedDisplayText
        : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.isCmd = prefixRegex.test(𝓜𝖎𝖟𝖚ӄ𝖎.body);
    𝓜𝖎𝖟𝖚ӄ𝖎.commandName = 𝓜𝖎𝖟𝖚ӄ𝖎.isCmd
      ? 𝓜𝖎𝖟𝖚ӄ𝖎.body.slice(1).trim().split(/ +/).shift().toLowerCase()
      : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.alias = 𝓜𝖎𝖟𝖚ӄ𝖎.isCmd
      ? 𝓜𝖎𝖟𝖚ӄ𝖎.body.slice(1).trim().split(/ +/).shift().toLowerCase()
      : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.isImage = 𝓜𝖎𝖟𝖚ӄ𝖎.type === `image`;
    𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage = 𝓜𝖎𝖟𝖚ӄ𝖎.isReply
      ? jsonMessage.indexOf(`imageMessage`) !== -1
      : false;
    𝓜𝖎𝖟𝖚ӄ𝖎.imageCaption = 𝓜𝖎𝖟𝖚ӄ𝖎.isImage
      ? messageInstance.message.imageMessage.caption
      : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.isGIF =
      𝓜𝖎𝖟𝖚ӄ𝖎.type === `video` &&
      messageInstance.message.videoMessage.gifPlayback;
    𝓜𝖎𝖟𝖚ӄ𝖎.isReplyGIF = 𝓜𝖎𝖟𝖚ӄ𝖎.isReply
      ? jsonMessage.indexOf(`videoMessage`) !== -1 &&
        messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .videoMessage.gifPlayback
      : false;
    𝓜𝖎𝖟𝖚ӄ𝖎.isSticker = 𝓜𝖎𝖟𝖚ӄ𝖎.type === `sticker`;
    𝓜𝖎𝖟𝖚ӄ𝖎.isReplySticker = 𝓜𝖎𝖟𝖚ӄ𝖎.isReply
      ? jsonMessage.indexOf(`stickerMessage`) !== -1
      : false;
    𝓜𝖎𝖟𝖚ӄ𝖎.isReplyAnimatedSticker = 𝓜𝖎𝖟𝖚ӄ𝖎.isReplySticker
      ? messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .stickerMessage.isAnimated
      : false;
    𝓜𝖎𝖟𝖚ӄ𝖎.isVideo =
      𝓜𝖎𝖟𝖚ӄ𝖎.type === `video` &&
      !messageInstance.message.videoMessage.gifPlayback;
    𝓜𝖎𝖟𝖚ӄ𝖎.isReplyVideo = 𝓜𝖎𝖟𝖚ӄ𝖎.isReply
      ? jsonMessage.indexOf(`videoMessage`) !== -1 &&
        !messageInstance.message.extendedTextMessage.contextInfo.quotedMessage
          .videoMessage.gifPlayback
      : false;
    𝓜𝖎𝖟𝖚ӄ𝖎.isAudio = 𝓜𝖎𝖟𝖚ӄ𝖎.type === `audio`;
    𝓜𝖎𝖟𝖚ӄ𝖎.isReplyAudio = 𝓜𝖎𝖟𝖚ӄ𝖎.isReply
      ? jsonMessage.indexOf(`audioMessage`) !== -1
      : false;
    𝓜𝖎𝖟𝖚ӄ𝖎.Myself = ӄʀǟӄɨռʐ.user.jid || ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.isGroup = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId.endsWith(`@g.us`);
    𝓜𝖎𝖟𝖚ӄ𝖎.isPm = !𝓜𝖎𝖟𝖚ӄ𝖎.isGroup;
    𝓜𝖎𝖟𝖚ӄ𝖎.sender =
      𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && messageInstance.message && 𝓜𝖎𝖟𝖚ӄ𝖎.fromMe
        ? 𝓜𝖎𝖟𝖚ӄ𝖎.owner
        : 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && messageInstance.message
        ? messageInstance.participant
        : !𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
        ? 𝓜𝖎𝖟𝖚ӄ𝖎.chatId
        : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.groupName = 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup ? groupMetadata.subject : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers = 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup ? groupMetadata.participants : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.groupAdmins = 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
      ? getGroupAdmins(𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers)
      : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.groupId = 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup ? groupMetadata.id : ``;
    𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev = DEVstring.includes(
      𝓜𝖎𝖟𝖚ӄ𝖎.sender.substring(0, 𝓜𝖎𝖟𝖚ӄ𝖎.sender.indexOf(`@`))
    );
    𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin = 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
      ? 𝓜𝖎𝖟𝖚ӄ𝖎.groupAdmins.includes(𝓜𝖎𝖟𝖚ӄ𝖎.owner)
      : false;
    𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin = 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
      ? 𝓜𝖎𝖟𝖚ӄ𝖎.groupAdmins.includes(𝓜𝖎𝖟𝖚ӄ𝖎.sender)
      : false;

    return 𝓜𝖎𝖟𝖚ӄ𝖎;
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  function getGroupAdmins(participants) {
    var admins = [];
    for (var i in participants) {
      participants[i].isAdmin ? admins.push(participants[i].jid) : ``;
    }
    return admins;
  }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
