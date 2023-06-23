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
  participants,
) => {
  try {
    if (!BloomBot.args.join(" ")) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} manga-name_`,
      );
    }

    await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/anime?q=${BloomBot.args.join(" ")}`,
    ).then(async (response) => {
      const mgdata = response.data;

      BloomBot.imagebutton(
        BloomBot,
        chatkey,
        `🌻 *Here's some information about ${
          BloomBot.pushname || BloomBot.tagname
        }:*

*🔍Mal Id:* ${mgdata.meta.id_mal}
*🎬Title:* ${mgdata.meta.title}
*🌐English Title:* ${mgdata.meta.en_title}
*🎌Japanese Title:* ${mgdata.meta.jp_title}
*📷Image:* ${mgdata.meta.image}
*📅Premiered:* ${mgdata.meta.premiered}
*🌐Webpage:* ${mgdata.meta.webpage}
*📺Broadcast:* ${mgdata.meta.broadcast}
*🎭Genres:* ${mgdata.meta.genres}
*🔖Type:* ${mgdata.meta.type}
*📺Episodes:* ${mgdata.meta.episodes}
*⭐Rating:* ${mgdata.meta.rating}
*📅Aired:* ${mgdata.meta.aired}
*📈Score:* ${mgdata.meta.score}
*❤️Favorites:* ${mgdata.meta.favorites}
*🔢Rank:* ${mgdata.meta.rank}
*⏳Duration:* ${mgdata.meta.duration}
*🏢Studios:* ${mgdata.meta.studios}
*🎬Producers:* ${mgdata.meta.producers}
*🔥Popularity:* ${mgdata.meta.popularity}
*👥Total Members:* ${mgdata.meta.members}
*⚖️Score Status:* ${mgdata.meta.scores}
*🎬Source:* ${mgdata.meta.source}
*📚Synonyms:* ${mgdata.meta.synonyms}
*📖Synopsis:* ${mgdata.meta.synopsis}
*👥Characters:* ${mgdata.meta.characters}
*👥Staff:* ${mgdata.meta.staffs}`,
        mgdata.meta.image,
      );
    });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
