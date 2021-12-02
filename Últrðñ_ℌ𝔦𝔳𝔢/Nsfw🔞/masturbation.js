const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const akaneko = require(`akaneko`);
module.exports = {
  name: `masturbation`,
  description: `Solo Queue in CSGO!Lol`,
  ƈʏɮօʀɢʍօʀɛ: `Solo Queue in CSGO!Lol`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await akaneko.nsfw.masturbation(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_\n*🐙KЯПZΛPP♙*`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};