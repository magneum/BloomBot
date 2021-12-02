// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
    MessageType,
    Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
    name: `google`,
    description: `Search anything on google`,
    ƈʏɮօʀɢʍօʀɛ: `
google`,
    async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
        if (arguments.length === 0) {
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
        try {
            await ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId, {
                    url: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`,
                },
                MessageType.image, {
                    mimetype: Mimetype.jpeg,
                    caption: `
*🌍𝗚𝗼𝗼𝗴𝗹𝗲𝗱:* ${arguments.join(` `)}
*💡𝗥𝗲𝘀𝘂𝗹𝘁:* https://google.com/search?q=${arguments.join(`+`)}`
                }
            )
        } catch (err) {
            console.log(err);
        }
    },
};
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================