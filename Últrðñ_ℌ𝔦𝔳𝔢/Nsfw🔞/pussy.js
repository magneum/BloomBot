const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const akaneko = require(`akaneko`);
module.exports = {
  name: `pussy`,
  description: `	The genitals of a female, or a cat, you give the meaning.`,
  ƈʏɮօʀɢʍօʀɛ: `	The genitals of a female, or a cat, you give the meaning.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await akaneko.nsfw.pussy(),
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