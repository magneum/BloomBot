<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  await WhatsBot.imagebutton(
    WhatsBot,
    voxchat,
    `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
module.exports = async (voxbot, voxchat, update, store) => {
  await voxbot.imagebutton(
    voxbot,
    voxchat,
    `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*🤖Hello, I am Synthia User-Bot🤖*
> Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a voxapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.



┌『 *🔎${finalname.toUpperCase()}🔎* 』
<<<<<<< HEAD
│║⦁ ${WhatsBot.prefix}advice
│║⦁ ${WhatsBot.prefix}anime
│║⦁ ${WhatsBot.prefix}chordlist
│║⦁ ${WhatsBot.prefix}fact
│║⦁ ${WhatsBot.prefix}getchord
│║⦁ ${WhatsBot.prefix}gify
│║⦁ ${WhatsBot.prefix}google
│║⦁ ${WhatsBot.prefix}instagram
│║⦁ ${WhatsBot.prefix}joke
│║⦁ ${WhatsBot.prefix}lyrics
│║⦁ ${WhatsBot.prefix}manga
│║⦁ ${WhatsBot.prefix}meme
│║⦁ ${WhatsBot.prefix}pokedex
│║⦁ ${WhatsBot.prefix}quote
│║⦁ ${WhatsBot.prefix}reddit
│║⦁ ${WhatsBot.prefix}ytsearch
┕╚═══════⋑`,
    WhatsBot.logo
=======
│║⦁ ${voxbot.prefix}advice
│║⦁ ${voxbot.prefix}anime
│║⦁ ${voxbot.prefix}chordlist
│║⦁ ${voxbot.prefix}fact
│║⦁ ${voxbot.prefix}getchord
│║⦁ ${voxbot.prefix}gify
│║⦁ ${voxbot.prefix}google
│║⦁ ${voxbot.prefix}instagram
│║⦁ ${voxbot.prefix}joke
│║⦁ ${voxbot.prefix}lyrics
│║⦁ ${voxbot.prefix}manga
│║⦁ ${voxbot.prefix}meme
│║⦁ ${voxbot.prefix}pokedex
│║⦁ ${voxbot.prefix}quote
│║⦁ ${voxbot.prefix}reddit
│║⦁ ${voxbot.prefix}ytsearch
┕╚═══════⋑`,
    voxbot.logo
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  );
};
