"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
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
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    if (!BloomBot.args.join(" ")) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} gif-name_`
      );
    }

    try {
      const { data: gi } = await BloomBot.axios.get(
        `g.tenor.com/v1/search?q=${BloomBot.args.join(
          " "
        )}&key=LIVDSRZULELA&limit=8`
      );
      return await BloomBot.sendMessage(
        mags.chat,
        {
          gifPlayback: true,
          video: {
            url: gi.results?.[Math.floor(Math.random() * gi.results.length)]
              ?.media[0]?.mp4?.url,
          },
          caption: `*BloomBot™ By KryKenz*\n*💻homePage:* bit.ly/krykenz\n\n
*🎋Feeling:* ${fpth}
*🌻for:* @${mags.sender.split("@")[0] || ""}`,
          mentions: [mags.sender],
        },
        { quoted: mags }
      );
    } catch (Èrrðr) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No such gif found!_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
