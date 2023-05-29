//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  await Voxbot.imagebutton(
    Voxbot,
    Voxchat,
    `*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*
*🤖Hello, I am Voxbot User-bot🤖*
> Ⓒ𝐅𝐨𝐱𝐁𝐨𝐭: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🦄${finalname.toUpperCase()}🦄* 』
│║⦁ ${Voxbot.prefix}waifu
│║⦁ ${Voxbot.prefix}swaifu
│║⦁ ${Voxbot.prefix}neko
│║⦁ ${Voxbot.prefix}sneko
│║⦁ ${Voxbot.prefix}shinobu
│║⦁ ${Voxbot.prefix}sshinobu
│║⦁ ${Voxbot.prefix}megumin
│║⦁ ${Voxbot.prefix}smegumin
│║⦁ ${Voxbot.prefix}awoo
│║⦁ ${Voxbot.prefix}sawoo
│║⦁ ${Voxbot.prefix}glomp
│║⦁ ${Voxbot.prefix}sglomp
│║⦁ ${Voxbot.prefix}handhold
│║⦁ ${Voxbot.prefix}shandhold
│║⦁
│║⦁ ${Voxbot.prefix}sbully
│║⦁ ${Voxbot.prefix}scuddle
│║⦁ ${Voxbot.prefix}scry
│║⦁ ${Voxbot.prefix}shug
│║⦁ ${Voxbot.prefix}skiss
│║⦁ ${Voxbot.prefix}slick
│║⦁ ${Voxbot.prefix}spat
│║⦁ ${Voxbot.prefix}ssmug
│║⦁ ${Voxbot.prefix}sbonk
│║⦁ ${Voxbot.prefix}syeet
│║⦁ ${Voxbot.prefix}sblush
│║⦁ ${Voxbot.prefix}ssmile
│║⦁ ${Voxbot.prefix}swave
│║⦁ ${Voxbot.prefix}shighfive
│║⦁ ${Voxbot.prefix}snom
│║⦁ ${Voxbot.prefix}sbite
│║⦁ ${Voxbot.prefix}sslap
│║⦁ ${Voxbot.prefix}skill
│║⦁ ${Voxbot.prefix}skick
│║⦁ ${Voxbot.prefix}shappy
│║⦁ ${Voxbot.prefix}swink
│║⦁ ${Voxbot.prefix}spoke
│║⦁ ${Voxbot.prefix}sdance
│║⦁ ${Voxbot.prefix}scringe
┕╚═══════⋑`,
    Voxbot.display
  );
};
