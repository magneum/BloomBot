// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const { MessageType } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ʊʟȶʀօռ/catch");
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `groupdp`,
  description: `Change the group icon`,
  ƈʏɮօʀɢʍօʀɛ: `
Use this module to change the group's icon. Tag image with the module or send the desired image with caption as the module`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    try {
      if (!ʊʟȶʀօռ.isGroup) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ʊʟȶʀօռ.chatId,
            `This module is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
          });
        return;
      }
      if (!ʊʟȶʀօռ.isImage && !ʊʟȶʀօռ.isReplyImage) {
        await υℓтяσηℓιєηт
          .sendMessage(
            ʊʟȶʀօռ.chatId,
            `Please reply or caption the image you want to make the group icon.`,
            MessageType.text
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
          });
        return;
      }
      var update = await υℓтяσηℓιєηт
        .sendMessage(
          ʊʟȶʀօռ.chatId,
          `Chnaging icon/group image...`,
          MessageType.text
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
        });
      var imageId = chat.key.id;
      const fileName = `./ᴛᴇᴍᴘ/change_pic` + imageId;
      if (ʊʟȶʀօռ.isImage) {
        var filePath = await υℓтяσηℓιєηт
          .downloadAndSaveMediaMessage(
            {
              message: chat.message,
            },
            fileName
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
          });
      } else {
        var filePath = await υℓтяσηℓιєηт
          .downloadAndSaveMediaMessage(
            {
              message:
                chat.message.extendedTextMessage.contextInfo.quotedMessage,
            },
            fileName
          )
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
          });
      }

      const imagePath = `./ᴛᴇᴍᴘ/image-` + imageId + `.png`;
      ffmpeg(filePath)
        .outputOptions([`-y`, `-vcodec png`, `-s 500x500`])
        .videoFilters(
          `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease:eval=frame,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2,setsar=1:1`
        )
        .save(imagePath)
        .on(`end`, async () => {
          υℓтяσηℓιєηт
            .updateProfilePicture(ʊʟȶʀօռ.chatId, fs.readFileSync(imagePath))
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ʊʟȶʀօռ));
            });
          fs.unlink(imagePath, (cᴇʀʀᴏʀ) => {
            if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
            else {
              console.log("Deleted!");
            }
          });
          fs.unlink(filePath, (cᴇʀʀᴏʀ) => {
            if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
            else {
              console.log("Deleted!");
            }
          });
        });
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ʊʟȶʀօռ.chatId,
        `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
        MessageType.text
      );
    }
    return;
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
