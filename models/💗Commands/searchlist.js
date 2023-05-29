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



┌『 *🔎${finalname.toUpperCase()}🔎* 』
│║⦁ ${FoxBot.prefix}advice
│║⦁ ${FoxBot.prefix}anime
│║⦁ ${FoxBot.prefix}chordlist
│║⦁ ${FoxBot.prefix}fact
│║⦁ ${FoxBot.prefix}getchord
│║⦁ ${FoxBot.prefix}gify
│║⦁ ${FoxBot.prefix}google
│║⦁ ${FoxBot.prefix}instagram
│║⦁ ${FoxBot.prefix}joke
│║⦁ ${FoxBot.prefix}lyrics
│║⦁ ${FoxBot.prefix}manga
│║⦁ ${FoxBot.prefix}meme
│║⦁ ${FoxBot.prefix}pokedex
│║⦁ ${FoxBot.prefix}quote
│║⦁ ${FoxBot.prefix}reddit
│║⦁ ${FoxBot.prefix}ytsearch
┕╚═══════⋑`,
    "./public/FoxBot.png"
  );
};
