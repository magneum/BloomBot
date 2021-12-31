try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  const ꜰᴜᴄᴋ = require(`./oShit`);
  var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
  var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const speed = require(`performance-now`);
  let Timestamp = speed();
  const Pong = speed() - Timestamp;
  const Ping = Pong.toFixed(4);
  const date = require(`date-and-time`);
  const now = new Date();
  date.format(now, `ddd, MMM DD YYYY`);
  const pattern = date.compile(`ddd, MMM DD YYYY`);
  const Clock = date.format(now, pattern);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const Mizuki_Text_But = (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, MainText) => {
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
    } else {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const buttonMessage = {
      contentText: MainText,
      footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 1,
    };
    ӄʀǟӄɨռʐ
      .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
        quoted: chat,
        contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
      })
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const Mizuki_Image_But = async (
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    MainText,
    MediaUrl
  ) => {
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
    } else {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      { url: MediaUrl },
      MessageType.image,
      { mimetype: Mimetype.png }
    );
    return await ӄʀǟӄɨռʐ
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          contentText: MainText,
          footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const Mizuki_Video_But = async (
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    MainText,
    MediaUrl
  ) => {
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
    } else {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      { url: MediaUrl },
      MessageType.video,
      { mimetype: `video/mp4` }
    );
    return await ӄʀǟӄɨռʐ
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          contentText: MainText,
          footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
          ],
          headerType: 5,
          videoMessage: media.message.videoMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const Mizuki_GIF_But = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, MainText, MediaUrl) => {
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
    } else {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      { url: MediaUrl },
      MessageType.video,
      { mimetype: `video/gif` }
    );
    return await ӄʀǟӄɨռʐ
      .sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          contentText: MainText,
          footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
          ],
          headerType: 5,
          videoMessage: media.message.videoMessage,
        },
        MessageType.buttonsMessage,
        {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        }
      )
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const Mizuki_VideoAudio_But = async (
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    MainText,
    MediaUrl
  ) => {
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
    } else {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = ӄʀǟӄɨռʐ.prepareMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      { url: MediaUrl },
      MessageType.mp4Audio,
      { mimetype: `audio/mp4` }
    );
    const buttonMessages = {
      videoMessage: media.message.videoMessage,
      contentText: MainText,
      footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 5,
    };
    ӄʀǟӄɨռʐ
      .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessages, MessageType.buttonsMessage, {
        mimetype: Mimetype.mp4Audio,

        quoted: chat,
      })
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const Mizuki_Location_But = async (
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    MainText,
    MediaUrl
  ) => {
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
    } else {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = ӄʀǟӄɨռʐ.prepareMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      { url: MediaUrl },
      MessageType.location
    );
    const buttonMessages = {
      locationMessage: media.message.locationMessage,
      contentText: MainText,
      footerText: `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 \n📅ᴅᴀᴛᴇ: _${Clock}_`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 6,
    };
    ӄʀǟӄɨռʐ
      .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessages, MessageType.buttonsMessage, {
        quoted: chat,
      })
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  module.exports = {
    MTB: Mizuki_Text_But,
    MGB: Mizuki_GIF_But,
    MIB: Mizuki_Image_But,
    MVB: Mizuki_Video_But,
    MLB: Mizuki_Location_But,
    MAB: Mizuki_VideoAudio_But,
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
