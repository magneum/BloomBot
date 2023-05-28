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
require("../../global.js");
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



┌『 *🐉${finalname.toUpperCase()}🐉* 』
│║⦁ ${WhatsBot.prefix}bite
│║⦁ ${WhatsBot.prefix}blush
│║⦁ ${WhatsBot.prefix}bonk
│║⦁ ${WhatsBot.prefix}bored
│║⦁ ${WhatsBot.prefix}confused
│║⦁ ${WhatsBot.prefix}cry
│║⦁ ${WhatsBot.prefix}cuddle
│║⦁ ${WhatsBot.prefix}dance
│║⦁ ${WhatsBot.prefix}goodnight
│║⦁ ${WhatsBot.prefix}happy
│║⦁ ${WhatsBot.prefix}highfive
│║⦁ ${WhatsBot.prefix}hug
│║⦁ ${WhatsBot.prefix}kill
│║⦁ ${WhatsBot.prefix}kiss
│║⦁ ${WhatsBot.prefix}nervous
│║⦁ ${WhatsBot.prefix}pat
│║⦁ ${WhatsBot.prefix}poke
│║⦁ ${WhatsBot.prefix}punch
│║⦁ ${WhatsBot.prefix}sad
│║⦁ ${WhatsBot.prefix}scream
│║⦁ ${WhatsBot.prefix}slap
│║⦁ ${WhatsBot.prefix}smile
│║⦁ ${WhatsBot.prefix}stare
│║⦁ ${WhatsBot.prefix}wave
│║⦁ ${WhatsBot.prefix}wink
│║⦁ ${WhatsBot.prefix}yeet
│║⦁ ${WhatsBot.prefix}yes
┕╚═══════⋑`,
    WhatsBot.logo
  );
};
