//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
const ppth = require("path");
const ytdl = require("ytdl-secktor");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    if (!BloomBot.args) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} song-name_`
      );
    } else
      BloomBot.magfetch(
        BloomBot,
        "magneum.vercel.app/api/youtube_sr?q=" + BloomBot.args.join(" ")
      ).then(async (response) => {
        const mgdata = response.data;
        BloomBot.logger.info(mgdata);
        await BloomBot.sendMessage(
          mags.chat,
          {
            image: { url: mgdata.youtube_search[0].HQ_IMAGE },
            caption: `*🌻Here, ${fpth} for ${BloomBot.pushname}:*
*🍻Title:* ${mgdata.youtube_search[0].TITLE}
*🙈Views:* ${mgdata.youtube_search[0].VIEWS}
*🔗Link:* ${mgdata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mgdata.youtube_search[0].DURATION_FULL}
*📜Description:* ${mgdata.youtube_search[0].DESCRIPTION}`,
            footer:
              "*BloomBot™ by Magneum™*\n*💻HomePage:* bit.ly/magneum",
            buttons: [
              {
                buttonId: `${BloomBot.prefix}Dashboard`,
                buttonText: { displayText: `${BloomBot.prefix}Dashboard` },
                type: 1,
              },
              {
                buttonId: `${BloomBot.prefix}Help`,
                buttonText: { displayText: `${BloomBot.prefix}Help` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [mags.sender],
          },
          {
            contextInfo: { mentionedJid: [mags.sender] },
            quoted: mags,
          }
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
          mags.chat,
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
          { quoted: mags }
        ).then(BloomBot.fs.unlinkSync(`./${mgdata.uuid}`));
      });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
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
