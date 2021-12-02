const { MessageType, MimetypeMap } = require(`@adiwajshing/baileys`);
const config = require(`../../Últrðñ/config`);
const ffmpeg = require(`fluent-ffmpeg`);
const { JSDOM } = require(`jsdom`);
const { window } = new JSDOM();
const fs = require(`fs`);
module.exports = {
  name: `sticker`,
  description: `Module to convert image to sticker`,
  ƈʏɮօʀɢʍօʀɛ: `Use this module to convert any image from your chat to a sticker. Reply to an image message with the command  *${config.ULTRONIX}sticker*  to convert and send that image as a sticker.`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    try {
      const convertToSticker = async (imageId, replyChat) => {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Your sticker is downloading. Please wait...`,
            MessageType.text
          )
          .catch((CYΣЯЯ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
              MessageType.text
            )
          );
        const filePath = await ӄʀǟӄɨռʐ
          .downloadAndSaveMediaMessage(replyChat, `./ᴛᴇᴍᴘ/ct-` + imageId)
          .catch((CYΣЯЯ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
              MessageType.text
            )
          );

        const stickerPath = `./ᴛᴇᴍᴘ/st-` + imageId + `.webp`;
        if (Últrðñ.type === `image` || Últrðñ.isReplyImage) {
          ffmpeg(filePath)
            .outputOptions([`-y`, `-vcodec libwebp`])
            .videoFilters(
              `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
            )
            .save(stickerPath)
            .on(`end`, async () => {
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  Últrðñ.chatId,
                  fs.readFileSync(stickerPath),
                  MessageType.sticker
                )
                .catch((CYΣЯЯ) =>
                  ӄʀǟӄɨռʐ.sendMessage(
                    Últrðñ.chatId,
                    `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
                    MessageType.text
                  )
                );
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
              ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId,
                `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
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
            await ӄʀǟӄɨռʐ
              .sendMessage(
                Últrðñ.chatId,
                fs.readFileSync(stickerPath),
                MessageType.sticker
              )
              .catch((CYΣЯЯ) =>
                ӄʀǟӄɨռʐ.sendMessage(
                  Últrðñ.chatId,
                  `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
                  MessageType.text
                )
              );
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
            return ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
              MessageType.text
            );
          });
      };

      if (Últrðñ.isImage || Últrðñ.isGIF || Últrðñ.isVideo) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        convertToSticker(imageId, replyChatObject);
      } else if (
        Últrðñ.isReplyImage ||
        Últrðñ.isReplyGIF ||
        Últrðñ.isReplyVideo
      ) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        convertToSticker(imageId, replyChatObject);
      } else {
        ӄʀǟӄɨռʐ
          .sendMessage(
            Últrðñ.chatId,
            `Please tag a valid image/video/gif message to convert to sticker.`,
            MessageType.text
          )
          .catch((CYΣЯЯ) =>
            ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
              MessageType.text
            )
          );
      }
      return;
    } catch (CYΣЯЯ) {
      ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ENTER VALID FILE!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${Últrðñ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${Últrðñ.isPm}`,
        MessageType.text
      );
    }
  },
};