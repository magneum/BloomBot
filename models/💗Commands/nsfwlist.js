//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (FoxBot, Foxchat, update, store) => {
  await FoxBot.imagebutton(
    FoxBot,
    Foxchat,
    `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*
*🤖Hello, I am FoxBot User-Bot🤖*
> Ⓒ𝐅𝐨𝐱𝐁𝐨𝐭: is a Foxapp userBot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *👅${finalname.toUpperCase()}👅* 』
│║⦁ ${FoxBot.prefix}nsfw
│║⦁ ${FoxBot.prefix}nsfw2
│║⦁ ${FoxBot.prefix}bonermaterial
│║⦁ ${FoxBot.prefix}nsfw411
│║⦁ ${FoxBot.prefix}iwanttofuckher
│║⦁ ${FoxBot.prefix}exxxtras
│║⦁ ${FoxBot.prefix}distension
│║⦁ ${FoxBot.prefix}bimbofetish
│║⦁ ${FoxBot.prefix}christiangirls
│║⦁ ${FoxBot.prefix}dirtygaming
│║⦁ ${FoxBot.prefix}sexybutnotporn
│║⦁ ${FoxBot.prefix}femalepov
│║⦁ ${FoxBot.prefix}omgbeckylookathiscock
│║⦁ ${FoxBot.prefix}sexygirls
│║⦁ ${FoxBot.prefix}breedingmaterial
│║⦁ ${FoxBot.prefix}canthold
│║⦁ ${FoxBot.prefix}toocuteforporn
│║⦁ ${FoxBot.prefix}justhotwomen
│║⦁ ${FoxBot.prefix}stripgirls
│║⦁ ${FoxBot.prefix}hotstuffnsfw
│║⦁ ${FoxBot.prefix}uncommonposes
│║⦁ ${FoxBot.prefix}gifsofremoval
│║⦁ ${FoxBot.prefix}nostalgiafapping
│║⦁ ${FoxBot.prefix}truefmk
│║⦁ ${FoxBot.prefix}nudes
│║⦁ ${FoxBot.prefix}4k
│║⦁ ${FoxBot.prefix}realgirls
│║⦁ ${FoxBot.prefix}blowjobs
│║⦁ ${FoxBot.prefix}milf
│║⦁ ${FoxBot.prefix}milk
│║⦁ ${FoxBot.prefix}milking
│║⦁ ${FoxBot.prefix}lactating
│║⦁ ${FoxBot.prefix}pussy
│║⦁ ${FoxBot.prefix}cum
│║⦁ ${FoxBot.prefix}slut
│║⦁ ${FoxBot.prefix}cumslut
┕╚═══════⋑`,
    "./public/FoxBot.png"
  );
};
