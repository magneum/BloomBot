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
require("#/global");
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



┌『 *🐉${finalname.toUpperCase()}🐉* 』
│║⦁ ${Foxbot.prefix}bite
│║⦁ ${Foxbot.prefix}blush
│║⦁ ${Foxbot.prefix}bonk
│║⦁ ${Foxbot.prefix}bored
│║⦁ ${Foxbot.prefix}confused
│║⦁ ${Foxbot.prefix}cry
│║⦁ ${Foxbot.prefix}cuddle
│║⦁ ${Foxbot.prefix}dance
│║⦁ ${Foxbot.prefix}goodnight
│║⦁ ${Foxbot.prefix}happy
│║⦁ ${Foxbot.prefix}highfive
│║⦁ ${Foxbot.prefix}hug
│║⦁ ${Foxbot.prefix}kill
│║⦁ ${Foxbot.prefix}kiss
│║⦁ ${Foxbot.prefix}nervous
│║⦁ ${Foxbot.prefix}pat
│║⦁ ${Foxbot.prefix}poke
│║⦁ ${Foxbot.prefix}punch
│║⦁ ${Foxbot.prefix}sad
│║⦁ ${Foxbot.prefix}scream
│║⦁ ${Foxbot.prefix}slap
│║⦁ ${Foxbot.prefix}smile
│║⦁ ${Foxbot.prefix}stare
│║⦁ ${Foxbot.prefix}wave
│║⦁ ${Foxbot.prefix}wink
│║⦁ ${Foxbot.prefix}yeet
│║⦁ ${Foxbot.prefix}yes
┕╚═══════⋑`,
    "./public/src/Foxbot (8).png"
  );
};
