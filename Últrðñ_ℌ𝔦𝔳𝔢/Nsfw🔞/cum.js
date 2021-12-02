const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const akaneko = require(`akaneko`);
module.exports = {
  name: `cum`,
  description: `	Basically sticky white stuff that is usually milked from sharpies.`,
  ƈʏɮօʀɢʍօʀɛ: `	Basically sticky white stuff that is usually milked from sharpies.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await akaneko.nsfw.cum(),
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