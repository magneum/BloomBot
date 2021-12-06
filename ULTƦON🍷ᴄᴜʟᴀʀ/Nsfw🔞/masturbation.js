// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const ℓιєηт = require("../../ULTƦON/catch");
const akaneko = require(`akaneko`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `masturbation`,
  commandType: "Nsfw🔞",
  description: `ꜱᴏʟᴏ Qᴜᴇᴜᴇ ɪɴ ᴄꜱɢᴏ! ʟᴏʟ`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    if (ULTƦON.isGroup && !ULTƦON.isSenderGroupAdmin) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          {
            url: `https://i.postimg.cc/yxsh4dMV/error.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: 
➛ ʜᴇʏ ᴛʜᴇʀᴇ ɴɪʙʙᴀ!💩

ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..
ʏᴏᴜ ᴄᴀɴɴᴏᴛ ᴜꜱᴇ ᴀɴʏ ɴꜱꜰᴡ ᴄᴏᴍᴍᴀɴᴅꜱ ʜᴇʀᴇ..
`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    } else {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          {
            url: await akaneko.nsfw.masturbation(),
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `_ᴘᴏᴡᴇʀᴇᴅ ʙʏ_\n*⚡𝐔𝐋𝐓𝐑𝐎𝐍™*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    }
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
