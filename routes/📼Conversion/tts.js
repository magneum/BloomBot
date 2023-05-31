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
> _Could not find any text and code in context!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} text | language-code_`
      );
    }

    const text = "";
    const langCode = "en";
    for (const i = 0; i < BloomBot.args.length; i++) {
      if (BloomBot.args[i] == `=`) {
        langCode = BloomBot.args[i + 1];
        break;
      }
      text += BloomBot.args[i] + " ";
    }
    if (text.length > 200) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* 
> _Total characters should be less than 200!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} text | language-code_`
      );
    } else {
      BloomBot.axios({
        method: "get",
        url:
          "magneum.vercel.app/api/text2speech?q=" +
          BloomBot.args.join(" "),
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }).then(async (response) => {
        const mgdata = response.data;
        BloomBot.logger.info(mgdata);
        return await BloomBot.sendMessage(
          mags.chat,
          {
            audio: { url: mgdata.meta.url },
            mimetype: "audio/mpeg",
            fileName: "TalkToSpeech" + ".mp3",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "📢Talk To Speech",
                body: "❣️Made by BloomBot.",
                renderLargerThumbnail: true,
                mediaUrl: "i.postimg.cc/qBSnwdzq/White.png",
                mediaType: 1,
                thumbnail: await BloomBot.getBuffer(
                  "i.postimg.cc/qBSnwdzq/White.png"
                ),
                sourceUrl: "bit.ly/BloomBot",
              },
            },
          },
          { quoted: mags }
        );
      });
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
