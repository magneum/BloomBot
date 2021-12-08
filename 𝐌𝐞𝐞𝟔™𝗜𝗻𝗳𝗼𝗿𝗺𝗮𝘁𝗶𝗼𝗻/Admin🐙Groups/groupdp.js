const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
module.exports = {
  name: `groupdp`,
  commandType: "Admin🐙Groups",
  description: `Use this command to change the group's icon.
Tag image with the command or send the desired image with caption as the command`,
  async handle(ʍɛɛℓιєηт, chat, ᴍᴇᴇ6, ʍɛɛɨռք, ɴᴇᴡᴍᴇᴇ6) {
    if (ɴᴇᴡᴍᴇᴇ6.total) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `⬡••••••••⬡    ⦿𝐌𝐞𝐞𝟔™⦿    ⬡••••••••⬡
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 ${ᴋᴇɪ}update
𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }
    if (!ᴍᴇᴇ6.isGroup) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `This command is only applicable in a group chat.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (!ᴍᴇᴇ6.isImage && !ᴍᴇᴇ6.isReplyImage) {
      await ʍɛɛℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          `Please reply or caption the image you want to make the group icon.`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
      return;
    }
    var update = await ʍɛɛℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId,
        `Chnaging icon/group image...`,
        MessageType.text
      )
      .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    var imageId = chat.key.id;
    const fileName = `./ᴛᴇᴍᴘ/change_pic` + imageId;
    if (ᴍᴇᴇ6.isImage) {
      var filePath = await ʍɛɛℓιєηт
        .downloadAndSaveMediaMessage(
          {
            message: chat.message,
          },
          fileName
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    } else {
      var filePath = await ʍɛɛℓιєηт
        .downloadAndSaveMediaMessage(
          {
            message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
          },
          fileName
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, ᴍᴇᴇ6));
    }

    const imagePath = `./ᴛᴇᴍᴘ/image-` + imageId + `.png`;
    ffmpeg(filePath)
      .outputOptions([`-y`, `-vcodec png`, `-s 500x500`])
      .videoFilters(
        `scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease:eval=frame,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2,setsar=1:1`
      )
      .save(imagePath)
      .on(`end`, async () => {
        ʍɛɛℓιєηт
          .updateProfilePicture(ᴍᴇᴇ6.chatId, fs.readFileSync(imagePath))
          .catch((cᴇʀʀᴏʀ) => {
            ℓιєηт.catch((cᴇʀʀᴏʀ, ʍɛɛℓιєηт, ᴍᴇᴇ6));
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
    return;
  },
};
