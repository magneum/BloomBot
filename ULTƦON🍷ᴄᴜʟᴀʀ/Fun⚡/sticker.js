// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, MimetypeMap } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ULTƦON/ꜱɪɢɴ`);
const ℓιєηт = require("../../ULTƦON/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `sticker`,
  commandType: "Fun⚡",
  description: `command to convert image to sticker`,
  ULTƦONʍօʀɛ: `Use this command to convert any image from your chat to a sticker. Reply to an image message with the command  *${ꜱɪɢɴ.ULTRONIX}sticker*  to convert and send that image as a sticker.`,
  async handle(υℓтяσηℓιєηт, chat, ULTƦON, Arc) {
    try {
      const convertToSticker = async (imageId, replyChat) => {
        await υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `Your sticker is downloading. Please wait...`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        const filePath = await υℓтяσηℓιєηт
          .downloadAndSaveMediaMessage(replyChat, `./ᴛᴇᴍᴘ/ct-` + imageId)
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
        const stickerPath = `./ᴛᴇᴍᴘ/st-` + imageId + `.webp`;
        if (ULTƦON.type === `image` || ULTƦON.isReplyImage) {
          ffmpeg(filePath)
            .outputOptions([`-y`, `-vcodec libwebp`])
            .videoFilters(
              `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
            )
            .save(stickerPath)
            .on(`end`, async () => {
              await υℓтяσηℓιєηт
                .sendMessage(
                  ULTƦON.chatId,
                  fs.readFileSync(stickerPath),
                  MessageType.sticker
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
                });
              fs.unlink(filePath, (cᴇʀʀᴏʀ) => {
                if (cᴇʀʀᴏʀ) {
                  console.log(cᴇʀʀᴏʀ);
                } else {
                  console.log("Deleted!");
                }
              });
              fs.unlink(stickerPath, (cᴇʀʀᴏʀ) => {
                if (cᴇʀʀᴏʀ) {
                  console.log(cᴇʀʀᴏʀ);
                } else {
                  console.log("Deleted!");
                }
              });
            })
            .on(`error`, async (CYΣЯЯ) => {
              υℓтяσηℓιєηт.sendMessage(
                ULTƦON.chatId,
                `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ULTƦON.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ULTƦON.isPm}`,
                MessageType.text
              );
            });
          return;
        }
        ffmpeg(filePath)
          .duration(8)
          .outputOptions([
            `-y`,
            `-vcodec libwebp`,
            `-lossless 1`,
            `-qscale 1`,
            `-preset default`,
            `-loop 0`,
            `-an`,
            `-vsync 0`,
            `-s 600x600`,
          ])
          .videoFilters(
            `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
          )
          .save(stickerPath)
          .on(`end`, async () => {
            await υℓтяσηℓιєηт
              .sendMessage(
                ULTƦON.chatId,
                fs.readFileSync(stickerPath),
                MessageType.sticker
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ULTƦON));
              });
            fs.unlink(filePath, (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) {
                console.log(cᴇʀʀᴏʀ);
              } else {
                console.log("Deleted!");
              }
            });
            fs.unlink(stickerPath, (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) {
                console.log(cᴇʀʀᴏʀ);
              } else {
                console.log("Deleted!");
              }
            });
          })
          .on(`cᴇʀʀᴏʀ`, async (CYΣЯЯ) => {
            return υℓтяσηℓιєηт.sendMessage(
              ULTƦON.chatId,
              `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ULTƦON.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ULTƦON.isPm}`,
              MessageType.text
            );
          });
      };

      if (ULTƦON.isImage || ULTƦON.isGIF || ULTƦON.isVideo) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        convertToSticker(imageId, replyChatObject);
      } else if (
        ULTƦON.isReplyImage ||
        ULTƦON.isReplyGIF ||
        ULTƦON.isReplyVideo
      ) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        convertToSticker(imageId, replyChatObject);
      } else {
        υℓтяσηℓιєηт
          .sendMessage(
            ULTƦON.chatId,
            `Please tag a valid image/video/gif message to convert to sticker.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ULTƦON));
      }
      return;
    } catch (CYΣЯЯ) {
      υℓтяσηℓιєηт.sendMessage(
        ULTƦON.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ENTER VALID FILE!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ULTƦON.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ULTƦON.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ULTƦON™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
