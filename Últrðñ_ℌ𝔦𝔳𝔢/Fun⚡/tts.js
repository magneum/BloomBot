const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
const googleTTS = require(`google-tts-api`);
module.exports = {
  name: `tts`,
  description: `Text To Speech.`,
  ƈʏɮօʀɢʍօʀɛ: `Use  *${UltronSitreper.ULTRONIX}tts <text>*  or  *${UltronSitreper.ULTRONIX}tts <text> | <language_code>*  to convert text to speech.
You can also reply to a text message with syntax  *${UltronSitreper.ULTRONIX}tr <language>*  to translate text.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    await ӄʀǟӄɨռʐ.sendMessage(
      Últrðñ.chatId,
      `Converting text to speech. Please wait...`,
      MessageType.text
    );
    let text = ``;
    let langCode = `en`;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] == `|`) {
        langCode = arguments[i + 1];
        break;
      }
      text += arguments[i] + ` `;
    }
    if (text === ``) {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `No input was detected. Please use *${UltronSitreper.ULTRONIX}help tts* for info on how to use this module.`,
        MessageType.text
      );
    }
    if (text.length > 200) {
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `*Total characters should be less than 200.*\nTotal characters for current input were {}.`.format(
          text.length
        ),
        MessageType.text
      );
    } else {
      try {
        const url = googleTTS.getAudioUrl(text, {
          lang: langCode,
          slow: false,
          host: `https://translate.google.com`,
        });
        console.log(url);
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          { url: url },
          MessageType.audio,
          { mimetype: Mimetype.mp4Audio }
        );
      } catch (cᴇʀʀᴏʀ) {
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
          MessageType.text
        );
      }
    }
  },
};