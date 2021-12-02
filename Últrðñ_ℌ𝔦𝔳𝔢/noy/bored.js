const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const anime = require("anime-actions");
module.exports = {
  name: `bored`,
  description: `	I know you like anime bored`,
  ƈʏɮօʀɢʍօʀɛ: `	I know you like anime bored`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, args) {
    try {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        {
          url: await anime.bored(),
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
