const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
module.exports = {
  name: `google`,
  commandType: "Fun⚡",
  description: `Search anything on google`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (Arc.length === 0) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image, {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give what to search*

*Usage Example*
${ꜱɪɢɴ.Mee6IX}google <search topic>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        });
    }
    try {
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`,
          },
          MessageType.image, {
            mimetype: Mimetype.jpeg,
            caption: `
*🌍𝗚𝗼𝗼𝗴𝗹𝗲𝗱:* ${Arc.join(` `)}
*💡𝗥𝗲𝘀𝘂𝗹𝘁:* https://google.com/search?q=${Arc.join(`+`)}`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } catch (err) {
      console.log(err);
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================