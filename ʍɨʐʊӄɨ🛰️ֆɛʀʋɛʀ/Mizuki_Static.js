try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
  const speed = require(`performance-now`);
  const vers = require(`../package.json`);
  const date = require(`date-and-time`);
  const cleanRF = require(`./cleanRF`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  const ꜰᴜᴄᴋ = require(`./oShit`);
  let Timestamp = speed();
  const now = new Date();
  date.format(now, `ddd, MMM DD YYYY`);
  const pattern = date.compile(`ddd, MMM DD YYYY`);
  const Clock = date.format(now, pattern);
  var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
  var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const Mizuki_GIF_Static = async (
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
    return await ӄʀǟӄɨռʐ
      .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, { url: MediaUrl }, MessageType.video, {
        mimetype: `video/gif`,

        quoted: chat,
        caption: MainText,
        contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
      })
      .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  module.exports = {
    MGS: Mizuki_GIF_Static,
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
