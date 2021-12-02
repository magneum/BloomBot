const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const akaneko = require(`akaneko`);
module.exports = {
  name: `bdsm`,
  description: `	If you don't know what it is, search it up`,
  ƈʏɮօʀɢʍօʀɛ: `	If you don't know what it is, search it up`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await akaneko.nsfw.bdsm(),
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