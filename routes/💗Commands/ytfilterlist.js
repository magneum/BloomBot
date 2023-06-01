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
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  await BloomBot.imagebutton(
    BloomBot,
    mags,
    `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}
*🤖Hello, I am BloomBot User-bot🤖*
> ⒸBloomBot: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!


┌『 *⭕${fpth.toUpperCase()}⭕* 』
│║⦁ ${BloomBot.prefix}ytpanning
│║⦁ ${BloomBot.prefix}ytbassboost
│║⦁ ${BloomBot.prefix}ytecho
│║⦁ ${BloomBot.prefix}ytflanger
│║⦁ ${BloomBot.prefix}ytnightcore
│║⦁ ${BloomBot.prefix}ytphaser
│║⦁ ${BloomBot.prefix}ytreverse
│║⦁ ${BloomBot.prefix}ytslow
│║⦁ ${BloomBot.prefix}ytspeed
│║⦁ ${BloomBot.prefix}ytsubboost
│║⦁ ${BloomBot.prefix}ytsuperslow
│║⦁ ${BloomBot.prefix}ytsuperspeed
│║⦁ ${BloomBot.prefix}ytsurround
│║⦁ ${BloomBot.prefix}ytvaporwave
│║⦁ ${BloomBot.prefix}ytvibrato
┕╚═══════⋑`,
    BloomBot.display
  );
};
