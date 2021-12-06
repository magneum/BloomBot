// ===============================================================================
// 🎮ULTƦON™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const ℓιєηт = require("../../ULTƦON/catch");
const anime = require("anime-actions");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `bite`,
  commandType: "Conversation🎙️",
  description: `	I know you like anime bite`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, args) {
    await υℓтяσηℓιєηт
      .sendMessage(
        ULTƦON.chatId,
        {
          url: await anime.bite(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_\n*⚡𝐔𝐋𝐓𝐑𝐎𝐍™*`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
  },
};
