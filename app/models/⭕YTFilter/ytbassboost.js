require("🌟/config/index.js");
const path = require("path");
const ytdl = require("ytdl-secktor");
const fileName = path.basename(__filename);
const currFile = fileName.slice(0, -3).toLowerCase();

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
    let audioFilter = "";

    switch (currFile) {
      case "bassboost":
        audioFilter = "-af 'bass=g=10,dynaudnorm=f=150'";
        break;
      case "echo":
        audioFilter = '-af "aecho=0.8:0.9:1000:0.3"';
        break;
      case "flanger":
        audioFilter = '-af "flanger"';
        break;
      case "nightcore":
        audioFilter = '-af "aresample=48000,asetrate=48000*1.25"';
        break;
      case "panning":
        audioFilter = '-af "apulsator=hz=0.08"';
        break;
      case "phaser":
        audioFilter = '-af "aphaser=in_gain=0.4"';
        break;
      case "reverse":
        audioFilter = '-filter_complex "areverse"';
        break;
      case "slow":
        audioFilter = '-af "atempo=0.8"';
        break;
      case "speed":
        audioFilter = '-af "atempo=2"';
        break;
      case "subboost":
        audioFilter = '-af "asubboost"';
        break;
      case "superslow":
        audioFilter = '-af "atempo=0.5"';
        break;
      case "superspeed":
        audioFilter = '-af "atempo=3"';
        break;
      case "surround":
        audioFilter = '-af "surround"';
        break;
      case "vaporwave":
        audioFilter = '-af "aresample=48000,asetrate=48000*0.8"';
        break;
      case "vibrato":
        audioFilter = '-af "vibrato=f=6.5"';
        break;
    }

    const unlink = BloomBot.util.promisify(BloomBot.fs.unlink);
    const query = BloomBot.args.join(" ");
    if (
      !query ||
      (query.includes("youtube") && !BloomBot.TubeRegex.test(query))
    ) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: { text: "❌", key: chatkey.key },
      });
      return chatkey.reply(
        `*😥 Apologies:* ${BloomBot.pushname || BloomBot.tagname}
*❌Error:*
> _No query provided!_

*🌻 Usage* 
⦁ _${BloomBot.prefix}${currFile} song/link_`
      );
    } else {
      const response = await BloomBot.magfetch(
        BloomBot,
        `https://magneum.vercel.app/api/youtube_sr?q=${query}`
      );
      const audioStream = ytdl(response.data.youtube_search[0].LINK, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
      });
      const AudioFilePath = `./${new Date().getTime()}.mp3`;
      const newAudioFilePath = `./${chatkey.chat}.mp3`;
      await new Promise((resolve, reject) => {
        const stream = audioStream.pipe(
          BloomBot.fs.createWriteStream(AudioFilePath)
        );
        stream.on("error", reject);
        stream.on("finish", async () => {
          try {
            await BloomBot.exec(
              `${BloomBot.pathFFmpeg} -i ${AudioFilePath} ${audioFilter} ${newAudioFilePath}`
            );
            const file = BloomBot.fs.readFileSync(newAudioFilePath);
            const thumbnail = await BloomBot.getBuffer(
              response.data.youtube_search[0].HQ_IMAGE
            );
            const mediaUrl =
              response.data.youtube_search[0].LINK || "Not available";
            const authorName =
              response.data.youtube_search[0].AUTHOR_NAME || "Not available";
            await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hello!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }

*🧀YouTube Filter:* ${currFile}
*🎵Title:* ${response.data.youtube_search[0].TITLE}
*👁️Views:* ${response.data.youtube_search[0].VIEWS}  
*⏱️Duration:* ${response.data.youtube_search[0].DURATION_FULL}
*🔗Link:* ${mediaUrl}
*✍️Author:* ${authorName}

*📜Description:*`,
              response.data.youtube_search[0].HQ_IMAGE
            );
            await BloomBot.sendMessage(chatkey.chat, {
              audio: file,
              mimetype: "audio/mpeg",
              fileName: `${chatkey.chat}.mp3`,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: response.data.youtube_search[0].TITLE,
                  body: "ⒸBloomBot by Magneum™",
                  renderLargerThumbnail: true,
                  thumbnailUrl: response.data.youtube_search[0].HQ_IMAGE,
                  mediaUrl,
                  mediaType: 1,
                  thumbnail,
                  sourceUrl: "bit.ly/magneum",
                },
              },
            });
            await Promise.all([
              unlink(AudioFilePath),
              unlink(newAudioFilePath),
            ]);
            resolve();
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
