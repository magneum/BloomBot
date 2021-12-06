// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const ℓιєηт = require("../../ULTƦON/catch");
const googleTTS = require(`google-tts-api`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `tts`,
  commandType: "Fun⚡",
  description: `Text To Speech.`,
  ULTƦONʍօʀɛ: `Use  *${ꜱɪɢɴ.ULTRONIX}tts <text>*  or  *${ꜱɪɢɴ.ULTRONIX}tts <text> | <language_code>*  to convert text to speech.
You can also reply to a text message with syntax  *${ꜱɪɢɴ.ULTRONIX}tr <language>*  to translate text.`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
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
*${ꜱɪɢɴ.ULTRONIX}tts <text>*
*With language code:*
*${ꜱɪɢɴ.ULTRONIX}tts <text> = <language_code>*`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
        });
    }
    let text = ``;
    let langCode = `en`;
    for (var i = 0; i < Arc.length; i++) {
      if (Arc[i] == `=`) {
        langCode = Arc[i + 1];
        break;
      }
      text += Arc[i] + ` `;
    }
    if (text.length > 200) {
      await υℓтяσηℓιєηт
        .sendMessage(
          ULTƦON.chatId,
          `*Total characters should be less than 200.*\nTotal characters for current input were {}.`.format(
            text.length
          ),
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
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
            ULTƦON.chatId,
            {
              url: url,
            },
            MessageType.audio,
            {
              mimetype: Mimetype.mp4Audio,
            }
          )
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
    }
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
