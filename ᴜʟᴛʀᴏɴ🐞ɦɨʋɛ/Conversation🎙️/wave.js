const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const anime = require("anime-actions");
module.exports = {
  name: `wave`,
  description: `	I know you like anime wave`,
  ƈʏɮօʀɢʍօʀɛ: `
	I know you like anime wave`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, args) {
    try {
      await υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        {
          url: await anime.wave(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `*☢️ƈʏɮօʀɢ ⧴ ᴜꜱᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇ ᴡᴀʏ!*

Genre: Anime-Conversation
NSFW: No`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
