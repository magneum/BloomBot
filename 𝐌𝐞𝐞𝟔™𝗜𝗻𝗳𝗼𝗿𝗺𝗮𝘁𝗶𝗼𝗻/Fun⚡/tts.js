const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const googleTTS = require(`google-tts-api`);
module.exports = {
  name: `tts`,
  commandType: "Fun⚡",
  description: `Text To Speech.`,
  ᴍᴇᴇ6ʍօʀɛ: `Use  *${ꜱɪɢɴ.Mee6IX}tts <text>*  or  *${ꜱɪɢɴ.Mee6IX}tts <text> | <language_code>*  to convert text to speech.
You can also reply to a text message with syntax  *${ꜱɪɢɴ.Mee6IX}tr <language>*  to translate text.`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, ʍɛɛɨռք) {
    if (ʍɛɛɨռք.length === 0) {
      return await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give text or language!*

*Usage Example*
*${ꜱɪɢɴ.Mee6IX}tts <text>*
*With language code:*
*${ꜱɪɢɴ.Mee6IX}tts <text> = <language_code>*`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
        });
    }
    let text = ``;
    let langCode = `en`;
    for (var i = 0; i < ʍɛɛɨռք.length; i++) {
      if (ʍɛɛɨռք[i] == `=`) {
        langCode = ʍɛɛɨռք[i + 1];
        break;
      }
      text += ʍɛɛɨռք[i] + ` `;
    }
    if (text.length > 200) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `*Total characters should be less than 200.*\nTotal characters for current input were {}.`.format(
            text.length
          ),
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } else {
      try {
        const url = googleTTS.getAudioUrl(text, {
          lang: langCode,
          slow: false,
          host: `https://translate.google.com`,
        });
        console.log(url);
        await ʍɛɛℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: url,
            },
            MessageType.audio,
            {
              mimetype: Mimetype.mp4Audio,
            }
          )
          .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      } catch (cᴇʀʀᴏʀ) {
        ʍɛɛℓιєηт.sendMessage(
          ᴍᴇᴇ6.chatId,
          `*🎮ᴍᴇᴇ6™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${ꜱɪɢɴ.Mee6IX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
