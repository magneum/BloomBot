const { MessageType, MimetypeMap } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const ℓιєηт = require("../../爪𝖎𝖟𝖚ӄ𝖎6🧀𝓒𝓻𝓪𝓽𝓮/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `sticker`,
  description: `command to convert image to sticker`,
  爪𝖎𝖟𝖚ӄ𝖎6ʍօʀɛ: `Use this command to convert any image from your chat to a sticker. 
Reply to an image message with the command  *${ᴋᴇɪ}sticker*  to convert and send that image as a sticker.`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎6, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 爪𝖎𝖟𝖚ӄ𝖎git.fetch();
    var Sender = 爪𝖎𝖟𝖚ӄ𝖎6.sender;
    var ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6 = await 爪𝖎𝖟𝖚ӄ𝖎git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎6.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.logGroup,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (爪𝖎𝖟𝖚ӄ𝖎6.chatId === "120363025343298860@g.us" && !爪𝖎𝖟𝖚ӄ𝖎6.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      try {
        const convertToSticker = async (imageId, replyChat) => {
          const filePath = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .downloadAndSaveMediaMessage(replyChat, `./爪𝖎𝖟𝖚ӄ𝖎6🗑️𝓑𝓲𝓷/ct-` + imageId)
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
          const stickerPath = `./爪𝖎𝖟𝖚ӄ𝖎6🗑️𝓑𝓲𝓷/st-` + imageId + `.webp`;
          if (爪𝖎𝖟𝖚ӄ𝖎6.type === `image` || 爪𝖎𝖟𝖚ӄ𝖎6.isReplyImage) {
            ffmpeg(filePath)
              .outputOptions([`-y`, `-vcodec libwebp`])
              .videoFilters(
                `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1`
              )
              .save(stickerPath)
              .on(`end`, async () => {
                await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                  .sendMessage(
                    爪𝖎𝖟𝖚ӄ𝖎6.chatId,
                    fs.readFileSync(stickerPath),
                    MessageType.sticker
                  )
                  .catch((cᴇʀʀᴏʀ) => {
                    ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
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
                𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
                  爪𝖎𝖟𝖚ӄ𝖎6.chatId,
                  `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${爪𝖎𝖟𝖚ӄ𝖎6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${爪𝖎𝖟𝖚ӄ𝖎6.isPm}`,
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
              await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
                .sendMessage(
                  爪𝖎𝖟𝖚ӄ𝖎6.chatId,
                  fs.readFileSync(stickerPath),
                  MessageType.sticker
                )
                .catch((cᴇʀʀᴏʀ) => {
                  ℓιєηт.catch((cᴇʀʀᴏʀ, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
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
              return 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
                爪𝖎𝖟𝖚ӄ𝖎6.chatId,
                `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.

⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${爪𝖎𝖟𝖚ӄ𝖎6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${爪𝖎𝖟𝖚ӄ𝖎6.isPm}`,
                MessageType.text
              );
            });
        };

        if (爪𝖎𝖟𝖚ӄ𝖎6.isImage || 爪𝖎𝖟𝖚ӄ𝖎6.isGIF || 爪𝖎𝖟𝖚ӄ𝖎6.isVideo) {
          var replyChatObject = {
            message: chat.message,
          };
          var imageId = chat.key.id;
          convertToSticker(imageId, replyChatObject);
        } else if (爪𝖎𝖟𝖚ӄ𝖎6.isReplyImage || 爪𝖎𝖟𝖚ӄ𝖎6.isReplyGIF || 爪𝖎𝖟𝖚ӄ𝖎6.isReplyVideo) {
          var replyChatObject = {
            message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
          };
          var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
          convertToSticker(imageId, replyChatObject);
        } else {
          𝓚𝓻𝓪𝓴𝓲𝓷𝔃
            .sendMessage(
              爪𝖎𝖟𝖚ӄ𝖎6.chatId,
              `Please tag a valid image/video/gif message to convert to sticker.`,
              MessageType.text
            )
            .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎6));
        }
        return;
      } catch (CYΣЯЯ) {
        𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎6.chatId,
          `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
ENTER VALID FILE!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${CYΣЯЯ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${爪𝖎𝖟𝖚ӄ𝖎6.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${爪𝖎𝖟𝖚ӄ𝖎6.isPm}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// 🎮爪𝖎𝖟𝖚ӄ𝖎6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
