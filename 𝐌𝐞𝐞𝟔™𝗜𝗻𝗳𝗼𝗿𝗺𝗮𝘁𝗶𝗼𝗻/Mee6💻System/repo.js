const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const speed = require("performance-now");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
module.exports = {
  name: `repo`,
  commandType: "Mee6💻System",
  description: `ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇᴘᴏ`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc, Mee6Sitrep) {
    var str = ᴍᴇᴇ6.sender;
    var newString = str.substring(0, str.length - 15);
    timestampe = speed();
    latensie = speed() - timestampe;
    await υℓтяσηℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId,
        {
          url: "https://i.postimg.cc/5yQVrzBn/Capture.png",
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          contextInfo: {
            mentionedJid: [ᴍᴇᴇ6.sender],
          },
          caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞! 𝗠𝗼𝘀𝘁 𝗔𝗱𝘃𝗮𝗻𝗰𝗲 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗕𝗼𝘁 ⧪

*💞Dҽαɾ* @${newString}
⧪➛ 𝗛𝗲𝗿𝗲 𝗜𝘀 𝗠𝗲𝗲𝟲 𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝘆 
ʟɪɴᴋ: https://github.com/Krakinz/Mee6


*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
⧪➛ 𝗝𝗼𝗶𝗻 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽 (🐞RΣPӨЯƬ)
🔸ᴡʜᴀᴛꜱᴀᴘᴘ https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5
🔸ᴅɪꜱᴄᴏʀᴅ https://discord.gg/xcFN6NDHEV`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
  },
};
