// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const ℓιєηт = require("../../ULTƦON/catch");
const got = require(`got`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `lyrics`,
  commandType: "Music🔊",
  description: `Use this command to find the lyrics of a song by using  *${ꜱɪɢɴ.ULTRONIX}lyrics*  command.`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    var song = ``;
    if (ULTƦON.isReply) {
      song = ULTƦON.replyMessage;
    } else if (Arc.length === 0) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          {
            url: `https://i.postimg.cc/5tb40s6w/Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give song name!*

*Usage Example*
${ꜱɪɢɴ.ULTRONIX}lyrics <song-name>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
        });
    } else {
      song = Arc.join(` `);
    }
    await υℓтяσηℓιєηт
      .sendMessage(
        ULTƦON.chatId,
        `Searching. Please wait....`,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
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
        ULTƦON.chatId,
        {
          url: APIData.thumbnail.genius,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: caption,
        }
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
