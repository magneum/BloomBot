const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const anime = require("anime-actions");
module.exports = {
  name: `gif`,
  commandType: "Anime😈",
  description: `I know you like anime cry`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    axios
      .get("url")
      .then(async (buff) => {
        await υℓтяσηℓιєηт
          .sendMessage(ᴍᴇᴇ6.chatId, Buffer.from(buff.data), MessageType.video, {
            mimetype: Mimetype.gif,
          })
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      })
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
  },
};
