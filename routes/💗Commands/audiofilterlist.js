//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
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
module.exports = async (BloomBot, vChat) => {
  await BloomBot.imagebutton(
    BloomBot,
    vChat,
    `*🌻Here, ${fpth} for ${BloomBot.pushname || BloomBot.Tname}:*
*🤖Hello, I am BloomBot User-bot🤖*
> Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭: is a whatsapp userbot with automation,moderation,music,games and 200+ commands!
> My developers are working on my code.



┌『 *📢${fpth.toUpperCase()}📢* 』
│║⦁ ${BloomBot.prefix}panning
│║⦁ ${BloomBot.prefix}bassboost
│║⦁ ${BloomBot.prefix}echo
│║⦁ ${BloomBot.prefix}fast
│║⦁ ${BloomBot.prefix}flanger
│║⦁ ${BloomBot.prefix}nightcore
│║⦁ ${BloomBot.prefix}phaser
│║⦁ ${BloomBot.prefix}reverse
│║⦁ ${BloomBot.prefix}slow
│║⦁ ${BloomBot.prefix}speed
│║⦁ ${BloomBot.prefix}subboost
│║⦁ ${BloomBot.prefix}superslow
│║⦁ ${BloomBot.prefix}superspeed
│║⦁ ${BloomBot.prefix}surround
│║⦁ ${BloomBot.prefix}vaporwave
│║⦁ ${BloomBot.prefix}vibrato
┕╚═══════⋑`,
    BloomBot.display
  );
};
