const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Anime_Images = require(`anime-images-api`);
const config = require(`../../Últrðñ/config`);
const download = require(`download-file`);
const ffmpeg = require(`fluent-ffmpeg`);
const Kolor = require(`chalk`);
const API = new Anime_Images();
const fs = require(`fs`);
module.exports = {
  name: `slaphd`,
  description: `I know you like anime slap`,
  ƈʏɮօʀɢʍօʀɛ: `I know you like anime slap`,
  async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
    let image = await API.sfw.slap();
    if (image.image === undefined) {
      return await ӄʀǟӄɨռʐ.sendMessage(
        Últrðñ.chatId,
        { url: `https://i.postimg.cc/KcNwHtZt/ltr.png` },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: `Seems Like No Image Was Found.\nPlease Try Again Later!`,
        }
      );
    } else {
      console.log(image.image);
      download(
        image.image,
        {
          directory: `./ᴛᴇᴍᴘ/`,
          filename: `slap-${chat.key.id}.gif`,
        },
        function (err) {
          0;
          if (err) {
            return console.log(err);
          } else console.log(`Download Done...`);
          const FP = `./ᴛᴇᴍᴘ/slap-${chat.key.id}.gif`;
          const SP = `./ᴛᴇᴍᴘ/slap-${chat.key.id}.webp`;
          ffmpeg(FP)
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
              `scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,
format=rgba,
pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,
setsar=1`
            )
            .save(SP)
            .on(`end`, async () => {
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  Últrðñ.chatId,
                  fs.readFileSync(SP),
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
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  Últrðñ.chatId,
                  { url: image.image },
                  MessageType.video,
                  {
                    mimetype: Mimetype.gif,
                    caption: `⚡Here Is Your HD Download Link:\n📎 ${image.url}`,
                  }
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
              fs.unlink(FP, (cᴇʀʀᴏʀ) => {
                if (cᴇʀʀᴏʀ) {
                  console.log(Kolor.redBright(cᴇʀʀᴏʀ));
                } else {
                  console.log(Kolor.greenBright(`Deleted> ${FP}`));
                }
              });
              fs.unlink(SP, (cᴇʀʀᴏʀ) => {
                if (cᴇʀʀᴏʀ) {
                  console.log(Kolor.redBright(cᴇʀʀᴏʀ));
                } else {
                  console.log(Kolor.greenBright(`Deleted> ${SP}`));
                }
              });
            });
        }
      );
    }
  },
};
