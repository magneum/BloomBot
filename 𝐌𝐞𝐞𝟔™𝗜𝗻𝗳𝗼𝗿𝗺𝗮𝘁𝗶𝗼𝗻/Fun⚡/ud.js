const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ud = require(`urban-dictionary`);
module.exports = {
  name: `ud`,
  commandType: "Fun⚡",
  description: `Urban Dictionary`,
  ᴍᴇᴇ6ʍօʀɛ: `Use this command to find the meaning of a word in Urban Dictionary. Enter  *${ꜱɪɢɴ.Mee6IX}ud*  command.`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, ʍɛɛɨռք, ɴᴇᴡᴍᴇᴇ6) {
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
    try {
      var text = ``;
      if (!(ᴍᴇᴇ6.replyMessage === ``)) {
        text = ᴍᴇᴇ6.replyMessage;
      } else if (ʍɛɛɨռք.length === 0) {
        return await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.ARC,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️Seems like someone forgot to give text!*

*Usage Example*
*${ᴋᴇɪ}ud <text>`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
          });
      } else {
        text = ʍɛɛɨռք.join(` `);
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
      await ʍɛɛℓιєηт
        .sendMessage(ᴍᴇᴇ6.chatId, msg, MessageType.text)
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } catch (cᴇʀʀᴏʀ) {
      ʍɛɛℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `*🎮ᴍᴇᴇ6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ᴋᴇɪ}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
