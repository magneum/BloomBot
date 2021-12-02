const { MessageType } = require(`@adiwajshing/baileys`);
const ocrSpace = require(`ocr-space-api-wrapper`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
module.exports = {
  name: `read`,
  description: `Optical Character Recognition`,
  ƈʏɮօʀɢʍօʀɛ: `Use this module to obtain text from an image by  *${UltronSitreper.ULTRONIX}space*  command.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      const processing = await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `Processing. Please wait...`,
        MessageType.text
      );
      if (Últrðñ.isImage) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        const fileName = `./ᴛᴇᴍᴘ/img-` + imageId;
        const filePath = await ӄʀǟӄɨռʐ.downloadAndSaveMediaMessage(
          replyChatObject,
          fileName
        );
        try {
          const text = await ocrSpace(filePath, {
            apiKey: UltronSitreper.OCR,
          });
          var Msg = text.ParsedResults[0].ParsedText;
          if (Msg === ``) {
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `Couldn't find text in the image`,
              MessageType.text
            );
          }
          ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, Msg, MessageType.text);
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
        fs.unlink(filePath),
          (cᴇʀʀᴏʀ) => {
            if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
            else {
              console.log("Deleted!");
            }
          };
      }
      if (Últrðñ.isReplyImage) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        const fileName = `./ᴛᴇᴍᴘ/img-` + imageId;
        const filePath = await ӄʀǟӄɨռʐ.downloadAndSaveMediaMessage(
          replyChatObject,
          fileName
        );
        try {
          const text = await ocrSpace(filePath, {
            apiKey: UltronSitreper.OCR,
          });
          var Msg = text.ParsedResults[0].ParsedText;
          if (Msg === ``) {
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `Couldn't find text in the image`,
              MessageType.text
            );
          }
          ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, Msg, MessageType.text);
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
        fs.unlink(filePath),
          (cᴇʀʀᴏʀ) => {
            if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
            else {
              console.log("Deleted!");
            }
          };
      }
      setTimeout(async () => {
        await ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `Please tag a valid message.`,
          MessageType.text
        );
        return;
      }, 300000);
      await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `Please tag a valid message.`,
        MessageType.text
      );
    } catch (CYΣЯЯ) {
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}

💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
        MessageType.text
      );
    }
  },
};