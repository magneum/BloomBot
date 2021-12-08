const {
  MessageType
} = require(`@adiwajshing/baileys`);
const ocrSpace = require(`ocr-space-api-wrapper`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
module.exports = {
  name: `read`,
  commandType: "Fun⚡",
  description: `Use this command to obtain text from an image by  *${ꜱɪɢɴ.Mee6IX}space*  command.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    try {
      if (ᴍᴇᴇ6.isImage) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        const fileName = `./ᴛᴇᴍᴘ/img-` + imageId;
        const filePath = await υℓтяσηℓιєηт.downloadAndSaveMediaMessage(
          replyChatObject,
          fileName
        );
        try {
          const text = await ocrSpace(filePath, {
            apiKey: ꜱɪɢɴ.OCR,
          });
          var Msg = text.ParsedResults[0].ParsedText;
          if (Msg === ``) {
            υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Couldn't find text in the image`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
          }
          υℓтяσηℓιєηт
            .sendMessage(ᴍᴇᴇ6.chatId, Msg, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
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
      if (ᴍᴇᴇ6.isReplyImage) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        const fileName = `./ᴛᴇᴍᴘ/img-` + imageId;
        const filePath = await υℓтяσηℓιєηт.downloadAndSaveMediaMessage(
          replyChatObject,
          fileName
        );
        try {
          const text = await ocrSpace(filePath, {
            apiKey: ꜱɪɢɴ.OCR,
          });
          var Msg = text.ParsedResults[0].ParsedText;
          if (Msg === ``) {
            υℓтяσηℓιєηт
              .sendMessage(
                ᴍᴇᴇ6.chatId,
                `Couldn't find text in the image`,
                MessageType.text
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
              });
          }
          υℓтяσηℓιєηт
            .sendMessage(ᴍᴇᴇ6.chatId, Msg, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
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
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Please tag a valid message.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        return;
      }, 300000);
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Please tag a valid message.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    } catch (CYΣЯЯ) {
      υℓтяσηℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}

💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================