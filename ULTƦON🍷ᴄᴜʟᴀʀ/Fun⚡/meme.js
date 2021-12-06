const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const ℓιєηт = require("../../ULTƦON/catch");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `meme`,
  commandType: "Fun⚡",
  description: `Get Random Memes`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
      var num = Math.floor(Math.random() * (500 - 1) + 1);
      try {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            {
              url: `https://ctk-api.herokuapp.com/meme/${num}`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      } catch (e) {
        console.log(e);
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            {
              url: `https://ctk-api.herokuapp.com/meme/${num}`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      }
    } catch (err) {
      console.log(err);
    }
  },
};
