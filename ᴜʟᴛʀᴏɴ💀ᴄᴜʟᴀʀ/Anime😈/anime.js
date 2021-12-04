// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const malScraper = require(`mal-scraper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `anime`,
  commandType: "Anime😈",
  description: `Get Anime Informations From MyAnimeList`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    if (Arc.length === 0) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          {
            url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Anime name!*

*Usage Example*
${UltronSitreper.ULTRONIX} <anime name>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
        });
    }
    const name = Arc.join(` `);
    malScraper.getInfoFromName(name).then(async (data) => {
      const AnimeInfos = `💡𝐓𝐢𝐭𝐥𝐞: *${data.title}*
🧀𝗣𝗿𝗲𝗺𝗶𝗲𝗿𝗲𝗱: _${data.premiered}_
😈𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁: _${data.broadcast}_
❓𝗚𝗲𝗻𝗿𝗲𝘀: _${data.genres}_
📜𝗘𝗻𝗴𝗹𝗶𝘀𝗵𝗧𝗶𝘁𝗹𝗲: _${data.englishTitle}_
🈶𝗝𝗮𝗽𝗮𝗻𝗲𝘀𝗲𝗧𝗶𝘁𝗹𝗲: _${data.japaneseTitle}_
🫒𝗧𝘆𝗽𝗲: _${data.type}_
👀𝗘𝗽𝗶𝘀𝗼𝗱𝗲𝘀: _${data.episodes}_
🔥𝗥𝗮𝘁𝗶𝗻𝗴: _${data.rating}_
🛰️𝗔𝗶𝗿𝗲𝗱: _${data.aired}_
💯𝗦𝗰𝗼𝗿𝗲: _${data.score}_
⭐𝗙𝗮𝘃𝗼𝗿𝗶𝘁𝗲𝘀: _${data.favorites}_
🏅𝗥𝗮𝗻𝗸𝗲𝗱: _${data.ranked}_
⏰𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: _${data.duration}_
🛸𝗦𝘁𝘂𝗱𝗶𝗼𝘀: _${data.studios}_
🥳𝗣𝗼𝗽𝘂𝗹𝗮𝗿𝗶𝘁𝘆: _${data.popularity}_
🥷𝗠𝗲𝗺𝗯𝗲𝗿𝘀: _${data.members}_
👌🏽‍𝗦𝗰𝗼𝗿𝗲𝗦𝘁𝗮𝘁𝘀: _${data.scoreStats}_
🫐𝗦𝗼𝘂𝗿𝗰𝗲: _${data.source}_
🔎𝗦𝘆𝗻𝗼𝗻𝘆𝗺𝘀: _${data.synonyms}_
🕸️𝗦𝘁𝗮𝘁𝘂𝘀: _${data.status}_
🎯𝗜𝗱: _${data.id}_
📥𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱: _${data.url}_`;
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          {
            url: data.picture,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: AnimeInfos,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    });
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
