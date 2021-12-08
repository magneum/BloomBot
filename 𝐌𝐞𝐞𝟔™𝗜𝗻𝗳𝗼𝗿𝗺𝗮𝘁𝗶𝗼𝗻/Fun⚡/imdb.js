const imdb = require("imdb-api");
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
module.exports = {
  name: `imdb`,
  commandType: "Fun⚡",
  description: `This command was built to find any IMDB movie/series.`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, ʍɛɛɨռք, ɴᴇᴡᴍᴇᴇ6){
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
    if (ʍɛɛɨռք.length === 0) {
      await ʍɛɛℓιєηт.sendMessage(ᴍᴇᴇ6.chatId, "❌", MessageType.text);
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Movie/Series name!*
  
  *Usage Example*
  .imdb <movie/series>`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }
    const imob = new imdb.Client({
      apiKey: ꜱɪɢɴ.IMDB,
    });
    let movie = await imob.get({
      name: ʍɛɛɨռք.join(" "),
    });
    const Litol = `*💡𝐓𝐢𝐭𝐥𝐞➛*  ${movie.title.toUpperCase()}
*🕜𝐓𝐢𝐦𝐞➛*  ${movie.runtime}
*📚𝐆𝐞𝐧𝐫𝐞𝐬➛*  ${movie.genres}
*😎𝐀𝐜𝐭𝐨𝐫𝐬➛*  ${movie.actors}
*🙋🏽𝐕𝐨𝐭𝐞𝐬➛*  ${movie.votes}
*⭐𝐑𝐚𝐭𝐢𝐧𝐠➛*  ${movie.rating}
*🔩𝐓𝐲𝐩𝐞➛*  ${movie.type}
*🌐𝐂𝐨𝐮𝐧𝐭𝐫𝐲➛*  ${movie.country}
*🎥𝐃𝐢𝐫𝐞𝐜𝐭𝐨𝐫➛*  ${movie.director}
*✒️𝐖𝐫𝐢𝐭𝐞𝐫➛*  ${movie.writer}
*📜𝐒𝐞𝐫𝐢𝐞𝐬➛*  ${movie.series}

*🔗𝐈𝐦𝐝𝐛𝐮𝐫𝐥➛*  ${movie.imdburl}
*❓𝐏𝐥𝐨𝐭➛*  ${movie.plot}`;
    console.log(Litol);
    await ʍɛɛℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId,
        {
          url: movie.poster,
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: Litol,
        }
      )
      .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
