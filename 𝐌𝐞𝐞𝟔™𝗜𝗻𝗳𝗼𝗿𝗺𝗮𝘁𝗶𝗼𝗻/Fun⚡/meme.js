const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
module.exports = {
  name: `meme`,
  commandType: "Fun⚡",
  description: `Get Random Memes`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    try {
      var num = Math.floor(Math.random() * (500 - 1) + 1);
      try {
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: `https://ctk-api.herokuapp.com/meme/${num}`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      } catch (e) {
        console.log(e);
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: `https://ctk-api.herokuapp.com/meme/${num}`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      }
    } catch (err) {
      console.log(err);
    }
  },
};
