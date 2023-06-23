require("🌟/config/index.js");
const ppth = require("path");
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
    const pExec = BloomBot.promisify(require("child_process").exec);
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
          const audioData = await BloomBot.YouAuxiliary(
            mgdata.youtube_search[0].LINK,
            "audio"
          );
          console.log(audioData);

          await BloomBot.sendMessage(
            chatkey.chat,
            {
              audio: { url: audioData.url },
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
          );
        });
        break;
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [
  "musictube2",
  "playtube2",
  "tunesong2",
  "meloplay2",
  "ytmusic2",
  "songplay2",
  "tubemus2",
  "musicspk2",
  "song2",
  "sing2",
  "play2",
  "music2",
  "playmp32",
  "tune2",
  "melody2",
  "track2",
  "audio2",
  "beat2",
  "jam2",
  "songify2",
  "audify2",
  "rhythm2",
  "playym2",
  "startym2",
  "playmu2",
  "startmu2",
  "ytplay2",
  "ytsong2",
];
