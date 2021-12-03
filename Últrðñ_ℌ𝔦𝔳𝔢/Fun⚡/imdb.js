// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const imdb = require("imdb-api");
const {
    MessageType,
    Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
    name: `imdb`,
    description: `Search anything on IMDB`,
    ƈʏɮօʀɢʍօʀɛ: `
google`,
    async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, Arc) {
        if (Arc.length === 0) {
            await ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId,
                "❌",
                MessageType.text
            );
            await ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId, {
                    url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`
                },
                MessageType.image, {
                    mimetype: Mimetype.jpeg,
                    caption: `*⚠️Seems like someone forgot to give Movie/Series name!*
  
  *Usage Example*
  .imdb <movie/series>`,
                }
            );
            return;
        }
        const imob = new imdb.Client({
            apiKey: UltronSitreper.IMDB
        });
        let movie = await imob.get({
            name: Arc.join(" ")
        })
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
*❓𝐏𝐥𝐨𝐭➛*  ${movie.plot}`
        console.log(Litol);
        await ӄʀǟӄɨռʐ.sendMessage(
            Últrðñ.chatId, {
                url: movie.poster,
            },
            MessageType.image, {
                mimetype: Mimetype.jpeg,
                caption: Litol
            }
        )
    },
};
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================