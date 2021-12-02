const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
const anime = require("anime-actions");
module.exports = {
  name: `sad`,
  description: `	I know you like anime sad`,
  ƈʏɮօʀɢʍօʀɛ: `
	I know you like anime sad`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, args) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await anime.sad(),
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
