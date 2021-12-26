// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const speed = require("performance-now");
const vers = require(`../package.json`);
const date = require("date-and-time");
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
let Timestamp = speed();
const Ping = speed() - Timestamp;
const now = new Date();
date.format(now, "ddd, MMM DD YYYY");
const pattern = date.compile("ddd, MMM DD YYYY");
const Clock = date.format(now, pattern);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Text_But = (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, MainText) => {
  var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
  var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const buttonMessage = {
    contentText: MainText,
    footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
      4
    )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
    buttons: [
      {
        buttonId: `${ᴋᴇɪ}help`,
        buttonText: { displayText: `${ᴋᴇɪ}help` },
        type: 1,
      },
    ],
    headerType: 1,
  };
  return ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    buttonMessage,
    MessageType.buttonsMessage,
    {
      quoted: chat,
      contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
    }
  );
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Image_But = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, MainText, MediaUrl) => {
  Muri = MediaUrl;
  Media = ӄʀǟӄɨռʐ.prepareMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Muri, MessageType.image);
  const buttonMessages = {
    imageMessage: Media.message.imageMessage,
    contentText: MainText,
    footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
      4
    )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
    buttons: [
      {
        buttonId: `${ᴋᴇɪ}help`,
        buttonText: { displayText: `${ᴋᴇɪ}help` },
        type: 1,
      },
    ],
    headerType: 4,
  };
  return ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    buttonMessages,
    MessageType.buttonsMessage,
    {
      mimetype: Mimetype.png || Mimetype.jpeg,
      quoted: chat,
    }
  );
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Video_But = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, MainText, MediaUrl) => {
  Muri = MediaUrl;
  Media = ӄʀǟӄɨռʐ.prepareMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Muri, MessageType.video);
  const buttonMessages = {
    videoMessage: Media.message.videoMessage,
    contentText: MainText,
    footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
      4
    )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
    buttons: [
      {
        buttonId: `${ᴋᴇɪ}help`,
        buttonText: { displayText: `${ᴋᴇɪ}help` },
        type: 1,
      },
    ],
    headerType: 5,
  };
  return ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    buttonMessages,
    MessageType.buttonsMessage,
    {
      mimetype: Mimetype.mp4,
      quoted: chat,
    }
  );
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_VideoAudio_But = async (
  ӄʀǟӄɨռʐ,
  chat,
  𝓜𝖎𝖟𝖚ӄ𝖎,
  MainText,
  MediaUrl
) => {
  Muri = MediaUrl;
  Media = ӄʀǟӄɨռʐ.prepareMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Muri, MessageType.video);
  const buttonMessages = {
    videoMessage: Media.message.videoMessage,
    contentText: MainText,
    footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
      4
    )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
    buttons: [
      {
        buttonId: `${ᴋᴇɪ}help`,
        buttonText: { displayText: `${ᴋᴇɪ}help` },
        type: 1,
      },
    ],
    headerType: 5,
  };
  return ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    buttonMessages,
    MessageType.buttonsMessage,
    {
      mimetype: Mimetype.mp4Audio,
      quoted: chat,
    }
  );
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Location_But = async (
  ӄʀǟӄɨռʐ,
  chat,
  𝓜𝖎𝖟𝖚ӄ𝖎,
  MainText,
  MediaUrl
) => {
  Muri = MediaUrl;
  Media = ӄʀǟӄɨռʐ.prepareMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Muri, MessageType.location);
  const buttonMessages = {
    locationMessage: Media.message.locationMessage,
    contentText: MainText,
    footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ* \n🛰️ᴘɪɴɢ: _${Ping.toFixed(
      4
    )}s_\n📅ᴅᴀᴛᴇ: _${Clock}_`,
    buttons: [
      {
        buttonId: `${ᴋᴇɪ}help`,
        buttonText: { displayText: `${ᴋᴇɪ}help` },
        type: 1,
      },
    ],
    headerType: 6,
  };
  return ӄʀǟӄɨռʐ.sendMessage(
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
    buttonMessages,
    MessageType.buttonsMessage,
    {
      quoted: chat,
    }
  );
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  MTB: Mizuki_Text_But,
  MIB: Mizuki_Image_But,
  MVB: Mizuki_Video_But,
  MLB: Mizuki_Location_But,
  MAB: Mizuki_VideoAudio_But,
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
