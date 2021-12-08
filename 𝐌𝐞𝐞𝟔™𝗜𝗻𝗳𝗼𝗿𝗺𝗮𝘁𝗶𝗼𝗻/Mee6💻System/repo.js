const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const speed = require("performance-now");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
module.exports = {
  name: `repo`,
  commandType: "Mee6💻System",
  description: `ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇᴘᴏ`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, ʍɛɛɨռք, ɴᴇᴡᴍᴇᴇ6) {
    if (ɴᴇᴡᴍᴇᴇ6.total) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡••••••••⬡
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 ${ᴋᴇɪ}update
𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    var str = ᴍᴇᴇ6.sender;
    var newString = str.substring(0, str.length - 15);
    timestampe = speed();
    latensie = speed() - timestampe;
    await ʍɛɛℓιєηт
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
𝐈 𝐚𝐦 𝐌𝐫𝐌𝐞𝐞𝟔🛸𝐋𝐨𝐨𝐤 𝐀𝐭 𝐌𝐞! 
⧪ 𝗔𝗱𝘃𝗮𝗻𝗰𝗲 𝗪𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗕𝗼𝘁 ⧪

*💞Dҽαɾ* @${newString}
⧪➛ 𝗛𝗲𝗿𝗲 𝗜𝘀 𝗠𝗲𝗲𝟲 𝗥𝗲𝗽𝗼𝘀𝗶𝘁𝗼𝗿𝘆: https://github.com/Krakinz/Mee6


⧪➛ 𝗝𝗼𝗶𝗻 𝗦𝘂𝗽𝗽𝗼𝗿𝘁 𝗚𝗿𝗼𝘂𝗽: https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5
*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
  },
};
