// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const ffmpeg = require(`fluent-ffmpeg`);
const ytdl = require(`ytdl-core`);
const yts = require(`yt-search`);
const fs = require(`fs`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `ytdl`,
  description: `Download songs`,
  ƈʏɮօʀɢʍօʀɛ: `
Use this module to download audio of your choice either by specifying a YouTube link or the name of the song.`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    try {
      if (Arc.length === 0) {
        await υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId,
          "❌",
          MessageType.text
        );
        await υℓтяσηℓιєηт.sendMessage(
          ʊʟȶʀօռ.chatId, {
            url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`
          },
          MessageType.image, {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
          }
        );
        return;
      }
      await υℓтяσηℓιєηт
        .sendMessage(
          ʊʟȶʀօռ.chatId,
          `Downloading your song...`,
          MessageType.text
        )
        .catch((cᴇʀʀᴏʀ) =>
          υℓтяσηℓιєηт.sendMessage(
            ʊʟȶʀօռ.chatId,
            `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
            MessageType.text
          )
        );

      // Task starts here
      var Id = ` `;
      if (Arc[0].includes(`youtu`)) {
        Id = Arc[0];
        try {
          if (Arc[0].includes(`watch?v=`)) {
            var songId = Arc[0].split(`watch?v=`)[1];
          } else {
            var songId = Arc[0].split(`/`)[3];
          }
          await yts({
            videoId: songId
          });
        } catch (cᴇʀʀᴏʀ) {
          throw cᴇʀʀᴏʀ;
        }
      } else {
        var song = await yts(Arc.join(` `));
        song = song.all;
        if (song.length < 1) {
          υℓтяσηℓιєηт
            .sendMessage(
              ʊʟȶʀօռ.chatId,
              `Could not find the song you entered. Check whether the link or keyword entered is correct.`,
              MessageType.text
            )
            .catch((cᴇʀʀᴏʀ) =>
              υℓтяσηℓιєηт.sendMessage(
                ʊʟȶʀօռ.chatId,
                `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
                MessageType.text
              )
            );
          return;
        }
        Id = song[0].url;
      }
      try {
        var stream = ytdl(Id, {
          quality: `highestaudio`,
        });

        ffmpeg(stream)
          .audioBitrate(320)
          .toFormat(`ipod`)
          .saveToFile(`./ᴛᴇᴍᴘ/${chat.key.id}.mp3`)
          .on(`end`, async () => {
            await υℓтяσηℓιєηт
              .sendMessage(ʊʟȶʀօռ.chatId, `Uploading song...`, MessageType.text)
              .catch((cᴇʀʀᴏʀ) =>
                υℓтяσηℓιєηт.sendMessage(
                  ʊʟȶʀօռ.chatId,
                  `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
                  MessageType.text
                )
              );
            await υℓтяσηℓιєηт
              .sendMessage(
                ʊʟȶʀօռ.chatId,
                fs.readFileSync(`./ᴛᴇᴍᴘ/${chat.key.id}.mp3`),
                MessageType.audio, {
                  mimetype: Mimetype.mp4Audio,
                }
              )
              .catch((cᴇʀʀᴏʀ) =>
                υℓтяσηℓιєηт.sendMessage(
                  ʊʟȶʀօռ.chatId,
                  `*🎮ʊʟȶʀօռ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
                  MessageType.text
                )
              );
            fs.unlink(`./ᴛᴇᴍᴘ/${chat.key.id}.mp3`, (cᴇʀʀᴏʀ) => {
              if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
              else {
                console.log("Deleted!");
              }
            });
          });
      } catch (cᴇʀʀᴏʀ) {
        throw cᴇʀʀᴏʀ;
      }
    } catch (cᴇʀʀᴏʀ) {
      await υℓтяσηℓιєηт.sendMessage(
        ʊʟȶʀօռ.chatId,
        `ꜱᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ.ʜᴇʀᴇ ᴀʀᴇ ꜱᴏᴍᴇ ʟᴏɢꜱ ꜱɪɴᴄᴇ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ᴡᴀꜱ ɴᴏᴛ ʀᴇꜱᴘᴏɴᴅɪɴɢ ᴀꜱ ᴇxᴘᴇᴄᴛᴇᴅ.
COULD NOT FIND SONG!
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}


💡𝗖𝗼𝗺𝗺𝗮𝗻𝗱 • ${ʊʟȶʀօռ.commandName}
🎮𝗜𝘁 𝘄𝗮𝘀 𝗣𝗠? • ${ʊʟȶʀօռ.isPm}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// 🎮ʊʟȶʀօռ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================