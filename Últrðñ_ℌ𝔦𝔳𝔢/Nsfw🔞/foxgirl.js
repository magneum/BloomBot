const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const akaneko = require(`akaneko`);
module.exports = {
  name: `foxgirl`,
  description: `	Girl's that are wannabe foxes, yes`,
  ƈʏɮօʀɢʍօʀɛ: `	Girl's that are wannabe foxes, yes`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await akaneko.nsfw.foxgirl(),
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