"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
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
  participants,
) => {
  try {
    let audioFilter = "";
    if (currFile === "bassboost") {
      audioFilter = "-af 'bass=g=10,dynaudnorm=f=150'";
    } else if (currFile === "echo") {
      audioFilter = '-af "aecho=0.8:0.9:1000:0.3"';
    } else if (currFile === "flanger") {
      audioFilter = '-af "flanger"';
    } else if (currFile === "nightcore") {
      audioFilter = '-af "aresample=48000,asetrate=48000*1.25"';
    } else if (currFile === "panning") {
      audioFilter = '-af "apulsator=hz=0.08"';
    } else if (currFile === "phaser") {
      audioFilter = '-af "aphaser=in_gain=0.4"';
    } else if (currFile === "reverse") {
      audioFilter = '-filter_complex "areverse"';
    } else if (currFile === "slow") {
      audioFilter = '-af "atempo=0.8"';
    } else if (currFile === "speed") {
      audioFilter = '-af "atempo=2"';
    } else if (currFile === "subboost") {
      audioFilter = '-af "asubboost"';
    } else if (currFile === "superslow") {
      audioFilter = '-af "atempo=0.5"';
    } else if (currFile === "superspeed") {
      audioFilter = '-af "atempo=3"';
    } else if (currFile === "surround") {
      audioFilter = '-af "surround"';
    } else if (currFile === "vaporwave") {
      audioFilter = '-af "aresample=48000,asetrate=48000*0.8"';
    } else if (currFile === "vibrato") {
      audioFilter = '-af "vibrato=f=6.5"';
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
> _${BloomBot.prefix}${currFile} song/link_`,
      );
    }

    const response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/youtube_sr?q=${query}`,
    );
    const streamname = BloomBot.randomUUID();
    const audioStream = ytdl(response.data.youtube_search[0].LINK, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
    });
    const audioFilename = `${BloomBot.between(3000, 4000)}.mp3`;
    const audioFilePath = `./${audioFilename}`;

    await new Promise((resolve, reject) => {
      const stream = audioStream.pipe(
        BloomBot.fs.createWriteStream(audioFilePath),
      );
      stream.on("error", reject);
      stream.on("finish", async () => {
        try {
          await BloomBot.exec(
            `${BloomBot.pathFFmpeg} -i ${audioFilePath} ${audioFilter} ${audioFilePath}`,
          );
          const file = BloomBot.fs.readFileSync(audioFilePath);
          const thumbnail = await BloomBot.getBuffer(
            response.data.youtube_search[0].HQ_IMAGE,
          );
          const mediaUrl =
            response.data.youtube_search[0].LINK || "Not available";
          const authorName =
            response.data.youtube_search[0].AUTHOR_NAME || "Not available";
          await BloomBot.imagebutton(
            BloomBot,
            chatkey,
            `*🌻Hello!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}

*🧀YouTube Filter:* ${currFile}
*🎵Title:* ${response.data.youtube_search[0].TITLE}
*👁️Views:* ${response.data.youtube_search[0].VIEWS}  
*⏱️Duration:* ${response.data.youtube_search[0].DURATION_FULL}
*🔗Link:* ${mediaUrl}
*✍️Author:* ${authorName}

*📜Description:*`,
            response.data.youtube_search[0].HQ_IMAGE,
          );
          await BloomBot.sendMessage(chatkey.chat, {
            audio: file,
            mimetype: "audio/mpeg",
            fileName: `${response.data.youtube_search[0].TITLE}.mp3`,
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: response.data.youtube_search[0].TITLE,
                body: "ⒸBloomBot (md) by Magneum™",
                renderLargerThumbnail: true,
                thumbnailUrl: response.data.youtube_search[0].HQ_IMAGE,
                mediaUrl,
                mediaType: 1,
                thumbnail,
                sourceUrl: "bit.ly/magneum",
              },
            },
          });
          await Promise.all([unlink(audioFilePath)]);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
