//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var ppth = require("path");
var tpth = ppth.basename(__filename);
var fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, blyat) => {
  try {
    var Reds = ["memes", "me_irl", "dankmemes", "comedyheaven", "Animemes"];
    var Rads = Reds[Math.floor(Math.random() * Reds.length)];
    var res = await BloomBot.fetch(
      `https://www.reddit.com/r/${Rads}/random/.json`
    );
    var json = await res.json();
    var data = json[0].data.children[0].data;
    await BloomBot.imagebutton(
      BloomBot,
      blyat,
      `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:* 
> *🥪Title:* ${data.title}
> *✒️Author:* ${data.author}
> *👍🏽‍Ups:* ${data.ups || 0} 👍
> *👎🏽‍Downs:* ${data.downs || 0} 👎
> *💬Comments:* ${data.num_comments || 0} 💬`,
      data.url
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, blyat, error);
  }
};
module.exports.aliases = [];
