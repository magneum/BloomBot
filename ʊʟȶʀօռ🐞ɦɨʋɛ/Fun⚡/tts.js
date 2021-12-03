// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const ℓιєηт = require("../../ʊʟȶʀօռ/catch");
const googleTTS = require(`google-tts-api`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `tts`,
  description: `Text To Speech.`,
  ƈʏɮօʀɢʍօʀɛ: `
Use  *${UltronSitreper.ULTRONIX}tts <text>*  or  *${UltronSitreper.ULTRONIX}tts <text> | <language_code>*  to convert text to speech.
You can also reply to a text message with syntax  *${UltronSitreper.ULTRONIX}tr <language>*  to translate text.`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    await υℓтяσηℓιєηт
      .sendMessage(
        ʊʟȶʀօռ.chatId,
        `Converting text to speech. Please wait...`,
        MessageType.text
      )
      .catch((cᴇʀʀᴏʀ) => {
        ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
      });
    let text = ``;
    let langCode = `en`;
    for (var i = 0; i < Arc.length; i++) {
      if (Arc[i] == `|`) {
        langCode = Arc[i + 1];
        break;
      }
      text += Arc[i] + ` `;
    }
    if (Arc.length === 0) {
      await υℓтяσηℓιєηт
        .sendMessage(ʊʟȶʀօռ.chatId, "❌", MessageType.text)
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
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
    }
    if (text.length > 200) {
      await υℓтяσηℓιєηт
        .sendMessage(
          ʊʟȶʀօռ.chatId,
          `*Total characters should be less than 200.*\nTotal characters for current input were {}.`.format(
            text.length
          ),
          MessageType.text
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
    } else {
      try {
        const url = googleTTS.getAudioUrl(text, {
          lang: langCode,
          slow: false,
          host: `https://translate.google.com`,
        });
        console.log(url);
        await υℓтяσηℓιєηт
          .sendMessage(
            ʊʟȶʀօռ.chatId,
            {
              url: url,
            },
            MessageType.audio,
            {
              mimetype: Mimetype.mp4Audio,
            }
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
          });
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
    }
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
