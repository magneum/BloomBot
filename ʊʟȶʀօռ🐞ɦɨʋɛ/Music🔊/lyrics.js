// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const ℓιєηт = require("../../ʊʟȶʀօռ/catch");
const got = require(`got`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `lyrics`,
  description: `Module to find lyrics of song`,
  ƈʏɮօʀɢʍօʀɛ: `
Use this module to find the lyrics of a song by using  *${UltronSitreper.ULTRONIX}lyrics*  module.`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    var song = ``;
    if (ʊʟȶʀօռ.isReply) {
      song = ʊʟȶʀօռ.replyMessage;
    } else if (Arc.length === 0) {
      await υℓтяσηℓιєηт.sendMessage(ʊʟȶʀօռ.chatId, "❌", MessageType.text);
      await υℓтяσηℓιєηт
        .sendMessage(
          ʊʟȶʀօռ.chatId,
          {
            url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
      return;
    } else {
      song = Arc.join(` `);
    }
    await υℓтяσηℓιєηт
      .sendMessage(
        ʊʟȶʀօռ.chatId,
        `Searching. Please wait....`,
        MessageType.text
      )
      .catch((cᴇʀʀᴏʀ) => {
        ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
      });
    let API = await got(`https://some-random-api.ml/lyrics/?title=${song}`);
    let APIData = JSON.parse(API.body);
    let caption =
      `*Title :* ` +
      APIData.title +
      `\n*Author :* ` +
      APIData.author +
      `\n*Lyrics :*\n` +
      APIData.lyrics;
    await υℓтяσηℓιєηт
      .sendMessage(
        ʊʟȶʀօռ.chatId,
        {
          url: APIData.thumbnail.genius,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: caption,
        }
      )
      .catch((cᴇʀʀᴏʀ) => {
        ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
      });
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
