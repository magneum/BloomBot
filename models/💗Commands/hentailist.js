//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (whatsbot, whatschat, update, store) => {
  await whatsbot.imagebutton(
    whatsbot,
    whatschat,
    `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*
*🤖Hello, I am Synthia User-Bot🤖*
> Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🍑${finalname.toUpperCase()}🍑* 』
│║⦁ ${whatsbot.prefix}ass
│║⦁ ${whatsbot.prefix}bdsm
│║⦁ ${whatsbot.prefix}blowjob
│║⦁ ${whatsbot.prefix}cum
│║⦁ ${whatsbot.prefix}doujin
│║⦁ ${whatsbot.prefix}feet
│║⦁ ${whatsbot.prefix}femdom  
│║⦁ ${whatsbot.prefix}foxgirl  
│║⦁ ${whatsbot.prefix}glasses  
│║⦁ ${whatsbot.prefix}hentai
│║⦁ ${whatsbot.prefix}maid
│║⦁ ${whatsbot.prefix}masturbation
│║⦁ ${whatsbot.prefix}netorare
│║⦁ ${whatsbot.prefix}orgy
│║⦁ ${whatsbot.prefix}panties
│║⦁ ${whatsbot.prefix}pussy
│║⦁ ${whatsbot.prefix}school
│║⦁ ${whatsbot.prefix}succubus
│║⦁ ${whatsbot.prefix}tentacles
│║⦁ ${whatsbot.prefix}thighs
│║⦁ ${whatsbot.prefix}uglyBastard
│║⦁ ${whatsbot.prefix}uniform
│║⦁ ${whatsbot.prefix}yuri
│║⦁ ${whatsbot.prefix}zettaiRyouiki
┕╚═══════⋑`,
    whatsbot.logo
  );
};
