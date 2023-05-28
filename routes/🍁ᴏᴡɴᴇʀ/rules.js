//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  ꪜᴏxʙᴏᴛ,
  ᴠᴏxᴄ,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
    react: {
      text: "🔖",
      key: ᴠᴏxᴄ.key,
    },
  });
  await ꪜᴏxʙᴏᴛ.imgB(
    ꪜᴏxʙᴏᴛ,
    ᴠᴏxᴄ,
    `*🔖Here, ${pfname} For @${ꪜᴏxʙᴏᴛ.Tname || ꪜᴏxʙᴏᴛ.pushname}:*
*🤖Hello, I am Synthia User-Bot🤖*
> Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞: is a whatsapp userbot with automation,moderation,music,games and 100+ commands!
> My developers are working on my code.


*🏮 RULES 🏮*
⚠️ Do not abuse/disrespect bot and its owner.
⚠️ If you want this bot in your group then contact devs.
⚠️ Do not call bot, if you do then you'll get blocked by bot.
⚠️ If you see any bug/error in bot then report it to devs in the above group chats.
⚠️ Do not spam bot with commands, if bot is not responding then it means either bot is offline or there's internet issue at server end.`,
    "./src/VօxB໐t_dark.jpg"
  );
};
