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



┌『 *👅${finalname.toUpperCase()}👅* 』
│║⦁ ${Voxbot.prefix}nsfw
│║⦁ ${Voxbot.prefix}nsfw2
│║⦁ ${Voxbot.prefix}bonermaterial
│║⦁ ${Voxbot.prefix}nsfw411
│║⦁ ${Voxbot.prefix}iwanttofuckher
│║⦁ ${Voxbot.prefix}exxxtras
│║⦁ ${Voxbot.prefix}distension
│║⦁ ${Voxbot.prefix}bimbofetish
│║⦁ ${Voxbot.prefix}christiangirls
│║⦁ ${Voxbot.prefix}dirtygaming
│║⦁ ${Voxbot.prefix}sexybutnotporn
│║⦁ ${Voxbot.prefix}femalepov
│║⦁ ${Voxbot.prefix}omgbeckylookathiscock
│║⦁ ${Voxbot.prefix}sexygirls
│║⦁ ${Voxbot.prefix}breedingmaterial
│║⦁ ${Voxbot.prefix}canthold
│║⦁ ${Voxbot.prefix}toocuteforporn
│║⦁ ${Voxbot.prefix}justhotwomen
│║⦁ ${Voxbot.prefix}stripgirls
│║⦁ ${Voxbot.prefix}hotstuffnsfw
│║⦁ ${Voxbot.prefix}uncommonposes
│║⦁ ${Voxbot.prefix}gifsofremoval
│║⦁ ${Voxbot.prefix}nostalgiafapping
│║⦁ ${Voxbot.prefix}truefmk
│║⦁ ${Voxbot.prefix}nudes
│║⦁ ${Voxbot.prefix}4k
│║⦁ ${Voxbot.prefix}realgirls
│║⦁ ${Voxbot.prefix}blowjobs
│║⦁ ${Voxbot.prefix}milf
│║⦁ ${Voxbot.prefix}milk
│║⦁ ${Voxbot.prefix}milking
│║⦁ ${Voxbot.prefix}lactating
│║⦁ ${Voxbot.prefix}pussy
│║⦁ ${Voxbot.prefix}cum
│║⦁ ${Voxbot.prefix}slut
│║⦁ ${Voxbot.prefix}cumslut
┕╚═══════⋑`,
    Voxbot.display
  );
};
