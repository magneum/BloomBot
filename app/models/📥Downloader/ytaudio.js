require("🌟/config/index.js");
const ppth = require("path");
const ytdl = require("ytdl-secktor");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    switch (!BloomBot.args) {
      case true:
        await BloomBot.sendMessage(chatkey.chat, {
          react: {
            text: "❌",
            key: chatkey.key,
          },
        });
        return chatkey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} song-name_`
        );
      case false:
        await BloomBot.magfetch(
          BloomBot,
          "https://magneum.vercel.app/api/youtube_sr?q=" +
            BloomBot.args.join(" ")
        ).then(async (response) => {
          const mgdata = response.data;
          await BloomBot.imagebutton(
            BloomBot,
            chatkey,
            `*🌻Here, ${currFile} for ${BloomBot.pushname}:*
*🍻Title:* ${mgdata.youtube_search[0].TITLE}
*🙈Views:* ${mgdata.youtube_search[0].VIEWS}
*🔗Link:* ${mgdata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mgdata.youtube_search[0].DURATION_FULL}
*📜Description:* ${mgdata.youtube_search[0].DESCRIPTION}`,
            mgdata.youtube_search[0].HQ_IMAGE
          );

          const stream = ytdl(mgdata.youtube_search[0].LINK, {
            filter: (info) =>
              info.audioBitrate == 160 || info.audioBitrate == 128,
          }).pipe(BloomBot.fs.createWriteStream(`./${mgdata.uuid}`));
          await new Promise((resolve, reject) => {
            stream.on("error", reject);
            stream.on("finish", resolve);
          });
          await BloomBot.sendMessage(
            chatkey.chat,
            {
              audio: BloomBot.fs.readFileSync(`./${mgdata.uuid}`),
              mimetype: "audio/mpeg",
              fileName: mgdata.youtube_search[0].TITLE + ".mp3",
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: mgdata.youtube_search[0].TITLE,
                  body: "ⒸBloomBot by Magneum™",
                  renderLargerThumbnail: true,
                  thumbnailUrl: mgdata.youtube_search[0].THUMB,
                  mediaUrl: mgdata.youtube_search[0].LINK,
                  mediaType: 1,
                  thumbnail: await BloomBot.getBuffer(
                    mgdata.youtube_search[0].HQ_IMAGE
                  ),
                  sourceUrl: "bit.ly/magneum",
                },
              },
            },
            { quoted: chatkey }
          ).then(BloomBot.fs.unlinkSync(`./${mgdata.uuid}`));
        });
        break;
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [
  "musictube",
  "playtube",
  "tunesong",
  "meloplay",
  "ytmusic",
  "songplay",
  "tubemus",
  "musicspk",
  "song",
  "sing",
  "play",
  "music",
  "playmp3",
  "tune",
  "melody",
  "track",
  "audio",
  "beat",
  "jam",
  "songify",
  "audify",
  "rhythm",
  "playym",
  "startym",
  "playmu",
  "startmu",
  "ytplay",
  "tuneyt",
  "ytsong",
];
