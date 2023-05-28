//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (WhatsBot, voxchat, update, store) => {
  await WhatsBot.imagebutton(
    WhatsBot,
    voxchat,
    `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
*🤖Hello, I am Synthia User-Bot🤖*
> Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🦄${finalname.toUpperCase()}🦄* 』
│║⦁ ${WhatsBot.prefix}waifu
│║⦁ ${WhatsBot.prefix}swaifu
│║⦁ ${WhatsBot.prefix}neko
│║⦁ ${WhatsBot.prefix}sneko
│║⦁ ${WhatsBot.prefix}shinobu
│║⦁ ${WhatsBot.prefix}sshinobu
│║⦁ ${WhatsBot.prefix}megumin
│║⦁ ${WhatsBot.prefix}smegumin
│║⦁ ${WhatsBot.prefix}awoo
│║⦁ ${WhatsBot.prefix}sawoo
│║⦁ ${WhatsBot.prefix}glomp
│║⦁ ${WhatsBot.prefix}sglomp
│║⦁ ${WhatsBot.prefix}handhold
│║⦁ ${WhatsBot.prefix}shandhold
│║⦁
│║⦁ ${WhatsBot.prefix}sbully
│║⦁ ${WhatsBot.prefix}scuddle
│║⦁ ${WhatsBot.prefix}scry
│║⦁ ${WhatsBot.prefix}shug
│║⦁ ${WhatsBot.prefix}skiss
│║⦁ ${WhatsBot.prefix}slick
│║⦁ ${WhatsBot.prefix}spat
│║⦁ ${WhatsBot.prefix}ssmug
│║⦁ ${WhatsBot.prefix}sbonk
│║⦁ ${WhatsBot.prefix}syeet
│║⦁ ${WhatsBot.prefix}sblush
│║⦁ ${WhatsBot.prefix}ssmile
│║⦁ ${WhatsBot.prefix}swave
│║⦁ ${WhatsBot.prefix}shighfive
│║⦁ ${WhatsBot.prefix}snom
│║⦁ ${WhatsBot.prefix}sbite
│║⦁ ${WhatsBot.prefix}sslap
│║⦁ ${WhatsBot.prefix}skill
│║⦁ ${WhatsBot.prefix}skick
│║⦁ ${WhatsBot.prefix}shappy
│║⦁ ${WhatsBot.prefix}swink
│║⦁ ${WhatsBot.prefix}spoke
│║⦁ ${WhatsBot.prefix}sdance
│║⦁ ${WhatsBot.prefix}scringe
┕╚═══════⋑`,
    WhatsBot.logo
  );
};
