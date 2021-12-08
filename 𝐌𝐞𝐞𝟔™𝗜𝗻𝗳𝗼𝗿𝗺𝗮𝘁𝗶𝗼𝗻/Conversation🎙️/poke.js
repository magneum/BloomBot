const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const anime = require("anime-actions");
module.exports = {
  name: `poke`,
  commandType: "Conversation🎙️",
  description: `I know you like anime poke`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    await υℓтяσηℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId, {
          url: await anime.poke(),
        },
        MessageType.image, {
          mimetype: Mimetype.jpeg,
          caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_\n*⚡𝐌𝐞𝐞𝟔™*`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
  },
};