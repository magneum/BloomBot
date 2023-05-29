//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  await Foxbot.imagebutton(
    Foxbot,
    Foxchat,
    `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*🤖Hello, I am Foxbot User-bot🤖*
> Ⓒ𝐅𝐨𝐱𝐁𝐨𝐭: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *👅${finalname.toUpperCase()}👅* 』
│║⦁ ${Foxbot.prefix}nsfw
│║⦁ ${Foxbot.prefix}nsfw2
│║⦁ ${Foxbot.prefix}bonermaterial
│║⦁ ${Foxbot.prefix}nsfw411
│║⦁ ${Foxbot.prefix}iwanttofuckher
│║⦁ ${Foxbot.prefix}exxxtras
│║⦁ ${Foxbot.prefix}distension
│║⦁ ${Foxbot.prefix}bimbofetish
│║⦁ ${Foxbot.prefix}christiangirls
│║⦁ ${Foxbot.prefix}dirtygaming
│║⦁ ${Foxbot.prefix}sexybutnotporn
│║⦁ ${Foxbot.prefix}femalepov
│║⦁ ${Foxbot.prefix}omgbeckylookathiscock
│║⦁ ${Foxbot.prefix}sexygirls
│║⦁ ${Foxbot.prefix}breedingmaterial
│║⦁ ${Foxbot.prefix}canthold
│║⦁ ${Foxbot.prefix}toocuteforporn
│║⦁ ${Foxbot.prefix}justhotwomen
│║⦁ ${Foxbot.prefix}stripgirls
│║⦁ ${Foxbot.prefix}hotstuffnsfw
│║⦁ ${Foxbot.prefix}uncommonposes
│║⦁ ${Foxbot.prefix}gifsofremoval
│║⦁ ${Foxbot.prefix}nostalgiafapping
│║⦁ ${Foxbot.prefix}truefmk
│║⦁ ${Foxbot.prefix}nudes
│║⦁ ${Foxbot.prefix}4k
│║⦁ ${Foxbot.prefix}realgirls
│║⦁ ${Foxbot.prefix}blowjobs
│║⦁ ${Foxbot.prefix}milf
│║⦁ ${Foxbot.prefix}milk
│║⦁ ${Foxbot.prefix}milking
│║⦁ ${Foxbot.prefix}lactating
│║⦁ ${Foxbot.prefix}pussy
│║⦁ ${Foxbot.prefix}cum
│║⦁ ${Foxbot.prefix}slut
│║⦁ ${Foxbot.prefix}cumslut
┕╚═══════⋑`,
    Foxbot.display
  );
};
