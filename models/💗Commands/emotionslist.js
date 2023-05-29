//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
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
require("../../global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (voxbot, voxchat, update, store) => {
  await voxbot.imagebutton(
    voxbot,
    voxchat,
    `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
*🤖Hello, I am voxbot User-Bot🤖*
> Ⓒ𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🐉${finalname.toUpperCase()}🐉* 』
│║⦁ ${voxbot.prefix}bite
│║⦁ ${voxbot.prefix}blush
│║⦁ ${voxbot.prefix}bonk
│║⦁ ${voxbot.prefix}bored
│║⦁ ${voxbot.prefix}confused
│║⦁ ${voxbot.prefix}cry
│║⦁ ${voxbot.prefix}cuddle
│║⦁ ${voxbot.prefix}dance
│║⦁ ${voxbot.prefix}goodnight
│║⦁ ${voxbot.prefix}happy
│║⦁ ${voxbot.prefix}highfive
│║⦁ ${voxbot.prefix}hug
│║⦁ ${voxbot.prefix}kill
│║⦁ ${voxbot.prefix}kiss
│║⦁ ${voxbot.prefix}nervous
│║⦁ ${voxbot.prefix}pat
│║⦁ ${voxbot.prefix}poke
│║⦁ ${voxbot.prefix}punch
│║⦁ ${voxbot.prefix}sad
│║⦁ ${voxbot.prefix}scream
│║⦁ ${voxbot.prefix}slap
│║⦁ ${voxbot.prefix}smile
│║⦁ ${voxbot.prefix}stare
│║⦁ ${voxbot.prefix}wave
│║⦁ ${voxbot.prefix}wink
│║⦁ ${voxbot.prefix}yeet
│║⦁ ${voxbot.prefix}yes
┕╚═══════⋑`,
    "./public/voxbot.png"
  );
};
