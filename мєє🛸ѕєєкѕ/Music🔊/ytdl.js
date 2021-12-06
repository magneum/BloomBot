// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const fetchVideoInfo = require("youtube-info");
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const getVideoId = require("get-video-id");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const ffmpeg = require(`fluent-ffmpeg`);
const ytdl = require(`ytdl-core`);
const yts = require(`yt-search`);
const fs = require(`fs`);
const Regex = {
  VideoID: /^[a-zA-Z0-9-_]{11}$/,
  VideoURL:
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
  PlaylistID: /(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}/,
  PlaylistURL:
    /https?:\/\/(www.)?youtube.com\/playlist\?list=((PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41})/,
  SCTrack:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/,
  SCPlaylist:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)\/?$/,
  Spotify: /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/,
};
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `ytdl`,
  commandType: "Music🔊",
  description: `Use this command to download audio of your choice either by specifying a YouTube link or the name of the song.`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc) {
    if (Arc.length === 0) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: `https://i.postimg.cc/Nf3D2RZx/Mee6-Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like someone forgot to give URL!*

*Usage Example*
${ꜱɪɢɴ.Mee6IX}ytdl <URL>

*NOTE:*
You Can Get URL by using ${ꜱɪɢɴ.Mee6IX}yts <song-name>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        });
    }
    if (!Regex.VideoURL.test(Arc[0])) {
      return await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: `https://i.postimg.cc/Nf3D2RZx/Mee6-Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*⚠️Seems like ${Arc[0]} is not YouTube Link or not YouTube Single Video Link!*

*Usage Example*
${ꜱɪɢɴ.Mee6IX}ytdl <video-link>

*NOTE:*
You Can Get URL by using ${ꜱɪɢɴ.Mee6IX}yts <song-name>`,
          }
        )
        .catch((cᴇʀʀᴏʀ) => {
          ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        });
    }
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
          videoId: songId,
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
            ᴍᴇᴇ6.chatId,
            `Could not find the song you entered. Check whether the link or keyword entered is correct.`,
            MessageType.text
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
        return;
      }
      Id = song[0].url;
    }
    try {
      var stream = ytdl(Id, {
        quality: `highestaudio`,
      });

      const FetchedLink = await yts(Arc.join(` `));
      const videos = FetchedLink.videos.slice(0, 1);
      videos.forEach(function (youfound) {
        Fetched = `*⛖𝐘𝐨𝐮𝐫 𝐌𝐮𝐬𝐢𝐜 𝐈𝐬 𝐍𝐨𝐰 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐢𝐧𝐠⛖*
_📥𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘛𝘪𝘮𝘦 𝘥𝘦𝘱𝘦𝘯𝘥𝘴 𝘰𝘯 𝘔𝘶𝘴𝘪𝘤 𝘓𝘦𝘯𝘨𝘵𝘩_

🍻—••÷ 𝐓𝐢𝐭𝐥𝐞 ÷••— 
⪢ ${youfound.title}

🙈—••÷ 𝐕𝐢𝐞𝐰𝐬 ÷••—
⪢ ${youfound.views}

⏰—••÷ 𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧 ÷••—
⪢ ${youfound.timestamp}

✒️—••÷ 𝐀𝐮𝐭𝐡𝐨𝐫 ÷••—
⪢ ${youfound.author.name}

🔗—••÷ 𝐋𝐢𝐧𝐤 ÷••—
⪢ ${youfound.url}

🛸—••÷ 𝗦𝗲𝗿𝘃𝗶𝗰𝗲 ÷••—
⪢ ʏᴏᴜᴛᴜʙᴇ⭕ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ`;
      });
      const { id } = getVideoId(Arc.join(` `));
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: "http://img.youtube.com/vi/" + id + "/0.jpg",
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: Fetched,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      ffmpeg(stream)
        .audioBitrate(320)
        .toFormat(`ipod`)
        .saveToFile(`./ᴛᴇᴍᴘ/${chat.key.id}.mp3`)
        .on(`end`, async () => {
          await υℓтяσηℓιєηт
            .sendMessage(ᴍᴇᴇ6.chatId, `Uploading song...`, MessageType.text)
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          await υℓтяσηℓιєηт
            .sendMessage(
              ᴍᴇᴇ6.chatId,
              fs.readFileSync(`./ᴛᴇᴍᴘ/${chat.key.id}.mp3`),
              MessageType.audio,
              {
                mimetype: Mimetype.mp4Audio,
              }
            )
            .catch((cᴇʀʀᴏʀ) => {
              ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
            });
          fs.unlink(`./ᴛᴇᴍᴘ/${chat.key.id}.mp3`, (cᴇʀʀᴏʀ) => {
            if (cᴇʀʀᴏʀ) console.log(cᴇʀʀᴏʀ);
            else {
              console.log("Deleted!");
            }
          });
        });
    } catch (cᴇʀʀᴏʀ) {
      await ℓιєηт.catch((cᴇʀʀᴏʀ, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
