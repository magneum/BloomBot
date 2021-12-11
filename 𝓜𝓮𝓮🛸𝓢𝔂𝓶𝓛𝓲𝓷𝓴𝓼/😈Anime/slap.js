const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Anime_Images = require(`anime-images-api`);
const ꜱɪɢɴ = require(`../../𝓜𝓮𝓮6🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
const download = require(`download-file`);
const ffmpeg = require(`fluent-ffmpeg`);
const Kolor = require(`chalk`);
const API = new Anime_Images();
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸𝓜𝓮𝓮6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `slap`,
  description: `I know you like anime slap`,
  async handle(ʍɛɛℓιєηт, chat, 𝓜𝓮𝓮6, arg) {
    const 𝓜𝓮𝓮git = require("simple-git")();
    await 𝓜𝓮𝓮git.fetch();
    var ɴᴇᴡ𝓜𝓮𝓮6 = await 𝓜𝓮𝓮git.log(["KrakinzLab..origin/KrakinzLab"]);
    if (ɴᴇᴡ𝓜𝓮𝓮6.total != 0) {
      console.log(ɴᴇᴡ𝓜𝓮𝓮6);
      var Sender = 𝓜𝓮𝓮6.sender;
      var personsending = Sender.substring(0, Sender.length - 15);
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.logGroup,
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*
❗ 𝙈𝙚𝙚6 𝙐𝙥𝙙𝙖𝙩𝙚 𝙋𝙚𝙣𝙙𝙞𝙣𝙜

*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
    } else {
      console.log("No commits to pull");
    }
    if (𝓜𝓮𝓮6.chatId === "120363025343298860@g.us" && !𝓜𝓮𝓮6.isSenderSUDO) {
      await ʍɛɛℓιєηт
        .sendMessage(
          𝓜𝓮𝓮6.chatId,
          `_⦿ᴘᴏᴡᴇʀᴇᴅ ʙʏ_
*👓𝓜𝓮𝓮6™ △▽ 𝖂𝖍𝖆𝖙𝖘𝖆𝖕𝖕-𝖀𝖘𝖊𝖗𝖇𝖔𝖙*

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [𝓜𝓮𝓮6.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, ʍɛɛℓιєηт, 𝓜𝓮𝓮6));
      return;
    } else {
      let { image } = await API.sfw.slap();
      if (image === undefined) {
        return await ʍɛɛℓιєηт.sendMessage(
          𝓜𝓮𝓮6.chatId,
          {
            url: `https://i.postimg.cc/KcNwHtZt/ltr.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `Seems Like No Image Was Found.\nPlease Try Again Later!`,
          }
        );
      } else {
        console.log(image);
        download(
          image,
          {
            directory: `./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/`,
            filename: `slap-${chat.key.id}.gif`,
          },
          function (err) {
            0;
            if (err) {
              return console.log(err);
            } else console.log(`Download Done...`);
            const FP = `./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/slap-${chat.key.id}.gif`;
            const SP = `./𝓜𝓮𝓮6🗑️𝓑𝓲𝓷/slap-${chat.key.id}.webp`;
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
                await ʍɛɛℓιєηт
                  .sendMessage(
                    𝓜𝓮𝓮6.chatId,
                    fs.readFileSync(SP),
                    MessageType.sticker
                  )
                  .catch((CYΣЯЯ) =>
                    ʍɛɛℓιєηт.sendMessage(
                      𝓜𝓮𝓮6.chatId,
                      `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
  
  ⚠️𝗘𝗿𝗿𝗼𝗿
  • ${CYΣЯЯ}
  
  
  💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${𝓜𝓮𝓮6.commandName}
  🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${𝓜𝓮𝓮6.isPm}`,
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
    }
  },
};
// ===============================================================================
// 🎮𝓜𝓮𝓮6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
