// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const ℓιєηт = require("../../ULTƦON/catch");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: "spam",
  commandType: "Fun⚡",
  description: `Spam Messages.
${ꜱɪɢɴ.ULTRONIX}spam <count> <text>*`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    let count = Number(Arc.shift());
    if (isNaN(count)) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          {
            url: `https://i.postimg.cc/5tb40s6w/Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give count and text!*

*Usage Example*
${ꜱɪɢɴ.ULTRONIX}spam <count> <text>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
        });
    }
    if (count > 0) {
      count = parseInt(count);
    } else {
      await υℓтяσηℓιєηт
        .sendMessage(ULTƦON.chatId, `Count can't be zero.`, MessageType.text)
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      return 0;
    }
    if (Arc.length) {
      let text = Arc.join(" ");
      for (let i = 0; i < count; i++)
        await υℓтяσηℓιєηт
          .sendMessage(ULTƦON.chatId, text, MessageType.text)
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    } else {
      await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          `No text found for spamming!!! Please read !help spam.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    }
  },
};
