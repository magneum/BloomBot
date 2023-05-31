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
module.exports = async (BloomBot, mags) => {
  await BloomBot.imagebutton(
    BloomBot,
    mags,
    `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*
*🤖Hello, I am BloomBot User-bot🤖*
> Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!
> My developers are working on my code.



┌『 *🍑${fpth.toUpperCase()}🍑* 』
│║⦁ ${BloomBot.prefix}ass
│║⦁ ${BloomBot.prefix}bdsm
│║⦁ ${BloomBot.prefix}blowjob
│║⦁ ${BloomBot.prefix}cum
│║⦁ ${BloomBot.prefix}doujin
│║⦁ ${BloomBot.prefix}feet
│║⦁ ${BloomBot.prefix}femdom  
│║⦁ ${BloomBot.prefix}whatsgirl  
│║⦁ ${BloomBot.prefix}glasses  
│║⦁ ${BloomBot.prefix}hentai
│║⦁ ${BloomBot.prefix}maid
│║⦁ ${BloomBot.prefix}masturbation
│║⦁ ${BloomBot.prefix}netorare
│║⦁ ${BloomBot.prefix}orgy
│║⦁ ${BloomBot.prefix}panties
│║⦁ ${BloomBot.prefix}pussy
│║⦁ ${BloomBot.prefix}school
│║⦁ ${BloomBot.prefix}succubus
│║⦁ ${BloomBot.prefix}tentacles
│║⦁ ${BloomBot.prefix}thighs
│║⦁ ${BloomBot.prefix}uglyBastard
│║⦁ ${BloomBot.prefix}uniform
│║⦁ ${BloomBot.prefix}yuri
│║⦁ ${BloomBot.prefix}zettaiRyouiki
┕╚═══════⋑`,
    BloomBot.display
  );
};
