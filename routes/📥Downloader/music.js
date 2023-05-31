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
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
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

*❌Error* 
> _No query provided!_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} song-name_`
      );
    } else
      BloomBot.magfetch(
        BloomBot,
        "https://magneum.vercel.app/api/youtube_sr?q=" + BloomBot.args.join(" ")
      ).then(async (response) => {
        var mgdata = response.data;
        console.log(mgdata);
        await BloomBot.imagebutton(
          BloomBot,
          mags,
          `*🌻Here, ${fpth} for ${BloomBot.pushname}:*
*🍻Title:* ${mgdata.youtube_search[0].TITLE}
*🙈Views:* ${mgdata.youtube_search[0].VIEWS}
*🔗Link:* ${mgdata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mgdata.youtube_search[0].DURATION_FULL}
*📜Description:* ${mgdata.youtube_search[0].DESCRIPTION}`,
          mgdata.youtube_search[0].HQ_IMAGE
        );
        return BloomBot.YouTubeAudio(mgdata.youtube_search[0].LINK)
          .then(async (AudioLink) => {
            if (AudioLink.success == false) {
              return mags.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error* 
> _No Audio Link Found_

*🌻Usage* 
> _${BloomBot.prefix}${fpth} song-name_`
              );
            } else {
              console.log(AudioLink);
              await BloomBot.sendMessage(
                mags.chat,
                {
                  headerType: 4,
                  mimetype: "audio/mpeg",
                  audio: { url: AudioLink.audio },
                  fileName: mgdata.youtube_search[0].TITLE + ".mp3",
                  contextInfo: {
                    externalAdReply: {
                      mediaType: 1,
                      body: "ⒸBloomBot by Magneum™",
                      renderLargerThumbnail: true,
                      sourceUrl: "https://bit.ly/magneum",
                      title: mgdata.youtube_search[0].TITLE,
                      mediaUrl: mgdata.youtube_search[0].LINK,
                      thumbnailUrl: mgdata.youtube_search[0].THUMB,
                      thumbnail: await BloomBot.getBuffer(
                        mgdata.youtube_search[0].HQ_IMAGE
                      ),
                    },
                  },
                },
                { quoted: mags }
              );
            }
          })
          .catch((error) => {
            return BloomBot.handlerror(BloomBot, mags, error);
          });
      });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
