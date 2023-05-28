//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (voxbot, voxchat, update, store) => {
  await voxbot.imagebutton(
    voxbot,
    voxchat,
    `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*🤖Hello, I am Synthia User-Bot🤖*
> Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *👅${finalname.toUpperCase()}👅* 』
│║⦁ ${voxbot.prefix}nsfw
│║⦁ ${voxbot.prefix}nsfw2
│║⦁ ${voxbot.prefix}bonermaterial
│║⦁ ${voxbot.prefix}nsfw411
│║⦁ ${voxbot.prefix}iwanttofuckher
│║⦁ ${voxbot.prefix}exxxtras
│║⦁ ${voxbot.prefix}distension
│║⦁ ${voxbot.prefix}bimbofetish
│║⦁ ${voxbot.prefix}christiangirls
│║⦁ ${voxbot.prefix}dirtygaming
│║⦁ ${voxbot.prefix}sexybutnotporn
│║⦁ ${voxbot.prefix}femalepov
│║⦁ ${voxbot.prefix}omgbeckylookathiscock
│║⦁ ${voxbot.prefix}sexygirls
│║⦁ ${voxbot.prefix}breedingmaterial
│║⦁ ${voxbot.prefix}canthold
│║⦁ ${voxbot.prefix}toocuteforporn
│║⦁ ${voxbot.prefix}justhotwomen
│║⦁ ${voxbot.prefix}stripgirls
│║⦁ ${voxbot.prefix}hotstuffnsfw
│║⦁ ${voxbot.prefix}uncommonposes
│║⦁ ${voxbot.prefix}gifsofremoval
│║⦁ ${voxbot.prefix}nostalgiafapping
│║⦁ ${voxbot.prefix}truefmk
│║⦁ ${voxbot.prefix}nudes
│║⦁ ${voxbot.prefix}4k
│║⦁ ${voxbot.prefix}realgirls
│║⦁ ${voxbot.prefix}blowjobs
│║⦁ ${voxbot.prefix}milf
│║⦁ ${voxbot.prefix}milk
│║⦁ ${voxbot.prefix}milking
│║⦁ ${voxbot.prefix}lactating
│║⦁ ${voxbot.prefix}pussy
│║⦁ ${voxbot.prefix}cum
│║⦁ ${voxbot.prefix}slut
│║⦁ ${voxbot.prefix}cumslut
┕╚═══════⋑`,
    voxbot.logo
  );
};
