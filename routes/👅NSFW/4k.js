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
    var server = await BloomBot.nsfwCheck.findOne({ serverId: mags.chat });
    if (!server) {
      await BloomBot.sendMessage(mags.chat, {
        react: { text: "❌", key: mags.key },
      });
      return mags.reply(`*😥 Apologies:* _${
        BloomBot.pushname || BloomBot.Tname
      }_

*❌Error:*
> NSFW commands have been disabled for this group.
> You can ask the administrators to enable them.`);
    }

    var response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/nsfw?q=${fpth}`
    );
    var mgdata = response.data;
    if (!mgdata.meta.thumbnail) {
      await BloomBot.sendMessage(mags.chat, {
        react: { text: "❌", key: mags.key },
      });
      return mags.reply(`*😥 Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.`);
    }

    var message = `
*🌻 Here is ${fpth} for @${BloomBot.Tname || BloomBot.pushname}:*

┌╔═☰ *❗ ADULT CONTENT ❗*
║⦁ 💡 Title: ${mgdata.meta.title || "Not available"}
║⦁ 🖊️ Author: ${mgdata.meta.author || "Not available"}
║⦁ ❣️ Topic: ${mgdata.meta.topic || "Not available"}
╚══☰
┌╔═☰
║>  *❓ META INFO ❓*
║⦁ 🎊 Status: ${mgdata.meta.status || "Not available"}
║⦁ 🔐 UUId: ${mgdata.meta.uuid || "Not available"}
║⦁ 🗓️ Date Created: ${mgdata.meta.date_create || "Not available"}
║⦁ 🧀 Query: ${mgdata.meta.query || "Not available"}
║⦁ 📢 Domain: ${mgdata.meta.domain || "Not available"}
║⦁ 💯 Subreddit Id: ${mgdata.meta.sub_reddit_id || "Not available"}
║⦁ 🌐 Link: ${mgdata.meta.web_link || "Not available"}
╚═══════⋑`;
    await BloomBot.imagebutton(BloomBot, mags, message, mgdata.meta.thumbnail);
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
