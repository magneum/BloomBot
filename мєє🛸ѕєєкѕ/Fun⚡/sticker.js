// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, MimetypeMap } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `sticker`,
  commandType: "Fun⚡",
  description: `command to convert image to sticker`,
  ᴍᴇᴇ6ʍօʀɛ: `Use this command to convert any image from your chat to a sticker. Reply to an image message with the command  *${ꜱɪɢɴ.Mee6IX}sticker*  to convert and send that image as a sticker.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*
⚡𝐌𝐞𝐞𝟔™ ⧪ɪ ᴀᴍ ᴍʀ ᴍᴇᴇ6, ʟᴏᴏᴋ ᴀᴛ ᴍᴇ! 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵

*↱ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 𝗛𝗲𝗿𝗲 ↰*
  *⬡${ꜱɪɢɴ.Mee6IX}uptime*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ᴜᴘᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}ping*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}help*  ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
  *⬡${ꜱɪɢɴ.Mee6IX}alive*  ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ
  *⬡${ꜱɪɢɴ.Mee6IX}update*  ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ ᴜᴘᴅᴀᴛᴇ ᴛʜᴇ ʙᴏᴛ
*⬡••••••••⬡    𝐌𝐞𝐞𝟔™    ⬡••••••••⬡*`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    try {
      const convertToSticker = async (imageId, replyChat) => {
        await υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Your sticker is downloading. Please wait...`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        const filePath = await υℓтяσηℓιєηт
          .downloadAndSaveMediaMessage(replyChat, `./ᴛᴇᴍᴘ/ct-` + imageId)
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        const stickerPath = `./ᴛᴇᴍᴘ/st-` + imageId + `.webp`;
        if (ᴍᴇᴇ6.type === `image` || ᴍᴇᴇ6.isReplyImage) {
          ffmpeg(filePath)
            .outputOptions([`-y`, `-vcodec libwebp`])
            .videoFilters(
              `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
            )
            .save(stickerPath)
            .on(`end`, async () => {
              await υℓтяσηℓιєηт
                .sendMessage(
                  ᴍᴇᴇ6.chatId,
                  fs.readFileSync(stickerPath),
                  MessageType.sticker
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
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
                ᴍᴇᴇ6.chatId,
                `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
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
                ᴍᴇᴇ6.chatId,
                fs.readFileSync(stickerPath),
                MessageType.sticker
              )
              .catch((cᴇʀʀᴏʀ) => {
                ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
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
              ᴍᴇᴇ6.chatId,
              `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ᴍᴇᴇ6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ᴍᴇᴇ6.isPm}`,
              MessageType.text
            );
          });
      };

      if (ᴍᴇᴇ6.isImage || ᴍᴇᴇ6.isGIF || ᴍᴇᴇ6.isVideo) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        convertToSticker(imageId, replyChatObject);
      } else if (
        ᴍᴇᴇ6.isReplyImage ||
        ᴍᴇᴇ6.isReplyGIF ||
        ᴍᴇᴇ6.isReplyVideo
      ) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        convertToSticker(imageId, replyChatObject);
      } else {
        υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            `Please tag a valid image/video/gif message to convert to sticker.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      }
      return;
    } catch (CYΣЯЯ) {
      υℓтяσηℓιєηт.sendMessage(
        ᴍᴇᴇ6.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ENTER VALID FILE!
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
