// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const translate = require(`@vitalets/google-translate-api`);
const { MessageType } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `tr`,
  commandType: "Fun⚡",
  description: `Language Translator`,
  ᴜʟᴛʀᴏɴʍօʀɛ: `Use  *${UltronSitreper.ULTRONIX}tr <text> = <language>*  to translate text to the specified language. 
You can also reply to a text message with syntax  *${UltronSitreper.ULTRONIX}tr <language>*  to translate text.
If you do not specify a language, it defaults to <English class=''></English>`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    try {
      var text = ``;
      var language = ``;
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
              caption: `*⚠️Seems like someone forgot to give text or language!*

*Usage Example*
*${UltronSitreper.ULTRONIX}tr <text> = <language>*`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
          });
      }
      if (!ᴜʟᴛʀᴏɴ.isReply) {
        try {
          var body = ᴜʟᴛʀᴏɴ.body.split(`=`);
          text = body[0].replace(ᴜʟᴛʀᴏɴ.body[0] + ᴜʟᴛʀᴏɴ.moduleName + ` `, ``);
          var i = 0;
          while (body[1].split(` `)[i] == ``) {
            i++;
          }
          language = body[1].split(` `)[i];
        } catch (cᴇʀʀᴏʀ) {
          if (cᴇʀʀᴏʀ instanceof TypeError) {
            text = ᴜʟᴛʀᴏɴ.body.replace(
              ᴜʟᴛʀᴏɴ.body[0] + ᴜʟᴛʀᴏɴ.moduleName + ` `,
              ``
            );
            language = `English`;
          }
        }
      } else if (ᴜʟᴛʀᴏɴ.replyMessage) {
        text = ᴜʟᴛʀᴏɴ.replyMessage;
        language = Arc[0];
      } else {
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `Please reply to a text message.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      }
      if (text.length > 4000) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `*Total characters should be less than 4000.*\nTotal characters for current input were {}.`.format(
              text.length
            ),
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      }
      await translate(text, {
        to: language,
      })
        .then((res) => {
          υℓтяσηℓιєηт.sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `*TR:* Translate [*{}* -> *{}*]\n\n{}`.format(
              res.from.language.iso,
              language,
              res.text
            ),
            MessageType.text
          );
        })
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        `*🎮ᴜʟᴛʀᴏɴ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
