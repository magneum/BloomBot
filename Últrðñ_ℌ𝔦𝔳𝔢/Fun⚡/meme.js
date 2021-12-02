const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
module.exports = {
  name: `meme`,
  description: `meme.DESCRIPTION`,
  ƈʏɮօʀɢʍօʀɛ: `
meme.EXTENDED_DESCRIPTION`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      var num = Math.floor(Math.random() * (500 - 1) + 1);
      try {
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId, {
            url: `https://ctk-api.herokuapp.com/meme/${num}`
          },
          MessageType.image, {
            mimetype: Mimetype.jpeg
          }
        );
      } catch (e) {
        console.log(e);
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId, {
            url: `https://ctk-api.herokuapp.com/meme/${num}`
          },
          MessageType.image, {
            mimetype: Mimetype.png
          }
        );
      }
    } catch (err) {
      console.log(err);
    }
  },
};