//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, ocID, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  await OpenBot.imagebutton(
    OpenBot,
    ocID,
    `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:*
*🤖Hello, I am OpenBot User-bot🤖*
> Ⓒ𝐎𝐩𝐞𝐧𝐁𝐨𝐭: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🍑${finalname.toUpperCase()}🍑* 』
│║⦁ ${OpenBot.prefix}ass
│║⦁ ${OpenBot.prefix}bdsm
│║⦁ ${OpenBot.prefix}blowjob
│║⦁ ${OpenBot.prefix}cum
│║⦁ ${OpenBot.prefix}doujin
│║⦁ ${OpenBot.prefix}feet
│║⦁ ${OpenBot.prefix}femdom  
│║⦁ ${OpenBot.prefix}whatsgirl  
│║⦁ ${OpenBot.prefix}glasses  
│║⦁ ${OpenBot.prefix}hentai
│║⦁ ${OpenBot.prefix}maid
│║⦁ ${OpenBot.prefix}masturbation
│║⦁ ${OpenBot.prefix}netorare
│║⦁ ${OpenBot.prefix}orgy
│║⦁ ${OpenBot.prefix}panties
│║⦁ ${OpenBot.prefix}pussy
│║⦁ ${OpenBot.prefix}school
│║⦁ ${OpenBot.prefix}succubus
│║⦁ ${OpenBot.prefix}tentacles
│║⦁ ${OpenBot.prefix}thighs
│║⦁ ${OpenBot.prefix}uglyBastard
│║⦁ ${OpenBot.prefix}uniform
│║⦁ ${OpenBot.prefix}yuri
│║⦁ ${OpenBot.prefix}zettaiRyouiki
┕╚═══════⋑`,
    OpenBot.display
  );
};
