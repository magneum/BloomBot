const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const anime = require("anime-actions");
module.exports = {
  name: `stare`,
  description: `	I know you like anime stare`,
  ᴜʟᴛʀᴏɴʍօʀɛ: `
	I know you like anime stare`,
  async handle(ӄʀǟӄɨռʐ, chat, ᴜʟᴛʀᴏɴ, args) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        {
          url: await anime.stare(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `*☢️ᴜʟᴛʀᴏɴ ⧴ ᴜꜱᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇ ᴡᴀʏ!*

Genre: Anime-Conversation
NSFW: No`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
