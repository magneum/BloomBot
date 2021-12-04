const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const ℓιєηт = require("../../ʊʟȶʀօռ/catch");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `meme`,
  description: `meme.DESCRIPTION`,
  ƈʏɮօʀɢʍօʀɛ: `
meme.EXTENDED_DESCRIPTION`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    try {
      var num = Math.floor(Math.random() * (500 - 1) + 1);
      try {
        await υℓтяσηℓιєηт
          .sendMessage(
            ʊʟȶʀօռ.chatId,
            {
              url: `https://ctk-api.herokuapp.com/meme/${num}`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ʊʟȶʀօռ));
      } catch (e) {
        console.log(e);
        await υℓтяσηℓιєηт
          .sendMessage(
            ʊʟȶʀօռ.chatId,
            {
              url: `https://ctk-api.herokuapp.com/meme/${num}`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ʊʟȶʀօռ));
      }
    } catch (err) {
      console.log(err);
    }
  },
};
