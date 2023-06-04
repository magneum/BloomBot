"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
    const searchData = response.data.youtube_search[0];
    const musicpath = BloomBot.randomUUID() + ".mp3";

    const audioStream = ytdl(searchData.LINK, {
      filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
    });
    const audioFilename = `${BloomBot.between(3000, 4000)}.mp3`;
    const execCommand = `${BloomBot.pathFFmpeg} -i ${musicpath} -af 'bass=g=10,dynaudnorm=f=150' ${audioFilename}`;

    const audioFile = await new Promise((resolve, reject) => {
      const stream = audioStream.pipe(
        BloomBot.fs.createWriteStream(`./${musicpath}`),
      );
      stream.on("error", reject);
      stream.on("finish", () => {
        BloomBot.exec(execCommand, async () => {
          const file = BloomBot.fs.readFileSync(`./${audioFilename}`);
          resolve(file);
          BloomBot.fs.unlinkSync(`./${audioFilename}`);
          BloomBot.fs.unlinkSync(`./${musicpath}`);
        });
      });
    });

    const thumbnail = await BloomBot.getBuffer(searchData.HQ_IMAGE);
    const mediaUrl = searchData.LINK || "Not available";
    const authorName = searchData.AUTHOR_NAME || "Not available";
    const description = searchData.DESCRIPTION || "No description available";

    await BloomBot.sendMessage(chatkey.chat, {
      text: `*🌻Hola!* ${currFile} for ${
        BloomBot.pushname || BloomBot.tagname
      }
      
*🎵 Title:* ${searchData.TITLE}
*👁️ Views:* ${searchData.VIEWS}  
*⏱️ Duration:* ${searchData.DURATION_FULL}
*🔗 Link:* ${mediaUrl}
*✍️ Author:* ${authorName}

*📜 Description:*
${description}`,
      options: {
        contextInfo: {
          externalAdReply: {
            title: searchData.TITLE,
            body: "ⒸBloomBot (md) by Magneum™",
            renderLargerThumbnail: true,
            thumbnailUrl: searchData.HQ_IMAGE,
            mediaUrl,
            mediaType: 1,
            thumbnail,
            sourceUrl: "bit.ly/magneum",
          },
        },
      },
    });

    await BloomBot.sendMessage(chatkey.chat, {
      audio: audioFile,
      mimetype: "audio/mpeg",
      fileName: `${searchData.TITLE}.mp3`,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: searchData.TITLE,
          body: "ⒸBloomBot (md) by Magneum™",
          renderLargerThumbnail: true,
          thumbnailUrl: searchData.HQ_IMAGE,
          mediaUrl,
          mediaType: 1,
          thumbnail,
          sourceUrl: "bit.ly/magneum",
        },
      },
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
