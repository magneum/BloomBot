// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const translate = require(`@vitalets/google-translate-api`);
const { MessageType } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ULTƦON/catch");
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `tr`,
  commandType: "Fun⚡",
  description: `Language Translator`,
  ULTƦONʍօʀɛ: `Use  *${ꜱɪɢɴ.ULTRONIX}tr <text> = <language>*  to translate text to the specified language. 
You can also reply to a text message with syntax  *${ꜱɪɢɴ.ULTRONIX}tr <language>*  to translate text.
If you do not specify a language, it defaults to <English class=''></English>`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
      var text = ``;
      var language = ``;
      if (Arc.length === 0) {
        return await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            {
              url: `https://i.postimg.cc/5tb40s6w/Args.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*⚠️Seems like someone forgot to give text or language!*

*Usage Example*
*${ꜱɪɢɴ.ULTRONIX}tr <text> = <language>*`,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
          });
      }
      if (!ULTƦON.isReply) {
        try {
          var body = ULTƦON.body.split(`=`);
          text = body[0].replace(ULTƦON.body[0] + ULTƦON.commandName + ` `, ``);
          var i = 0;
          while (body[1].split(` `)[i] == ``) {
            i++;
          }
          language = body[1].split(` `)[i];
        } catch (cᴇʀʀᴏʀ) {
          if (cᴇʀʀᴏʀ instanceof TypeError) {
            text = ULTƦON.body.replace(
              ULTƦON.body[0] + ULTƦON.commandName + ` `,
              ``
            );
            language = `English`;
          }
        }
      } else if (ULTƦON.replyMessage) {
        text = ULTƦON.replyMessage;
        language = Arc[0];
      } else {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `Please reply to a text message.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      }
      if (text.length > 4000) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `*Total characters should be less than 4000.*\nTotal characters for current input were {}.`.format(
              text.length
            ),
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      }
      await translate(text, {
        to: language,
      })
        .then((res) => {
          υℓтяσηℓιєηт.sendMessage(
            ULTƦON.chatId,
            `*TR:* Translate [*{}* -> *{}*]\n\n{}`.format(
              res.from.language.iso,
              language,
              res.text
            ),
            MessageType.text
          );
        })
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
    } catch (cᴇʀʀᴏʀ) {
      υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `*🎮ULTƦON™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
