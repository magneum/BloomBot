// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const ud = require(`urban-dictionary`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `ud`,
  commandType: `fun`,
  description: `Urban Dictionary`,
  ƈʏɮօʀɢʍօʀɛ: `
Use this module to find the meaning of a word in Urban Dictionary. Enter  *${UltronSitreper.ULTRONIX}ud*  command.`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    try {
      var text = ``;
      if (!(ʊʟȶʀօռ.replyMessage === ``)) {
        text = ʊʟȶʀօռ.replyMessage;
      } else if (Arc.length === 0) {
        await υℓтяσηℓιєηт.sendMessage(ʊʟȶʀօռ.chatId, "❌", MessageType.text);
        await υℓтяσηℓιєηт.sendMessage(
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
        );
        return;
      } else {
        text = Arc.join(` `);
      }

      let Response = await ud.define(text);
      let result = Response.reduce(function (prev, current) {
        return prev.thumbs_up + prev.thumbs_down >
          current.thumbs_up + current.thumbs_down
          ? prev
          : current;
      });

      result.definition = result.definition.replace(/\[/g, `_`);
      result.definition = result.definition.replace(/\]/g, `_`);
      result.example = result.example.replace(/\[/g, `_`);
      result.example = result.example.replace(/\]/g, `_`);

      let msg =
        `*Word :* ` +
        result.word +
        `\n\n*Meaning :*\n` +
        result.definition +
        `\n\n*Example:*\n` +
        result.example +
        `\n〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️\n👍` +
        result.thumbs_up +
        `  👎` +
        result.thumbs_down;
      await υℓтяσηℓιєηт.sendMessage(ʊʟȶʀօռ.chatId, msg, MessageType.text).catch(
        υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        )
      );
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ʊʟȶʀօռ.chatId,
        `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
