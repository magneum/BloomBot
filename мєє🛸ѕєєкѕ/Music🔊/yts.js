const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const getVideoId = require("get-video-id");
const yts = require(`yt-search`);
module.exports = {
  name: `yts`,
  commandType: "Music🔊",
  description: `Get the first 10 recommendations from YouTube with their authorname, timestamp and link. Mention the FetchedLinks that are required to be searched along with the command.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (Arc.length === 0) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId, {
            url: ꜱɪɢɴ.ARC,
          },
          MessageType.image, {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give song-name!*

*Usage Example*
${ꜱɪɢɴ.Mee6IX}yts <song-name>

*NOTE:*
You Can Get download audio by using ${ꜱɪɢɴ.Mee6IX}ytdl <song-url>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        });
    }
    const FetchedLink = await yts(Arc.join(` `));
    const videos = FetchedLink.videos.slice(0, 5);
    var Fetched = ``;
    videos.forEach(function (youfound) {
      const {
        id
      } = getVideoId(youfound.url);
      Fetched =
        Fetched +
        `*🥳𝐓𝐢𝐭𝐥𝐞↬* ${youfound.title}
*👀𝐕𝐢𝐞𝐰𝐬↬* ${youfound.views}
*🕐𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧↬* ${youfound.timestamp}
*📜𝐀𝐮𝐭𝐡𝐨𝐫↬* ${youfound.author.name}
*📜𝐋𝐢𝐧𝐤↬* ${youfound.url}
*📥𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐫↬* https://www.youtubepp.com/watch?v=${id}\n\n`;
    });
    if (Fetched === ``) {
      υℓтяσηℓιєηт
        .sendMessage(ᴍᴇᴇ6.chatId, `No videos could be found.`, MessageType.text)
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    const c = Arc.join(` `);
    υℓтяσηℓιєηт
      .sendMessage(
        ᴍᴇᴇ6.chatId, {
          url: `https://i.postimg.cc/D0N0BK4y/yts.png`,
        },
        MessageType.image, {
          mimetype: Mimetype.png,
          caption: `ᴛʜᴇꜱᴇ ᴀʀᴇ ᴛʜᴇ *ꜰɪʀꜱᴛ-5* ᴍᴏꜱᴛ ᴍᴀᴛᴄʜɪɴɢ ꜱᴇᴀʀᴄʜ ʀᴇꜱᴜʟᴛꜱ ꜰᴏʀ:
*🔎: ${c.toUpperCase()}*\n\n` + Fetched,
        }
      )
      .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================