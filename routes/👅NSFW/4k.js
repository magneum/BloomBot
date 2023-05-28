//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
const path = require("path");
const pfname = path.basename(__filename, ".js").toLowerCase();

module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  try {
    const server = await ꪜᴏxʙᴏᴛ.nsfwCheck.findOne({ serverID: ᴠᴏxᴄ.chat });
    if (!server) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: { text: "❌", key: ᴠᴏxᴄ.key },
      });
      return ᴠᴏxᴄ.reply(`*😥 Apologies:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌ Error* 
> NSFW commands have been disabled for this group.
> You can ask the administrators to enable them.`);
    }

    const response = await ꪜᴏxʙᴏᴛ.magfetch(
      ꪜᴏxʙᴏᴛ,
      `https://magneum.vercel.app/api/nsfw?q=${pfname}`
    );
    const mData = response.data;
    if (!mData.meta.thumbnail) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: { text: "❌", key: ᴠᴏxᴄ.key },
      });
      return ᴠᴏxᴄ.reply(`*😥 Apologies:* _${ꪜᴏxʙᴏᴛ.pushname}_
*❌ Error* 
> An API error has occurred. Please try again later.`);
    }

    const message = `
*🔖 Here is ${pfname} for @${ꪜᴏxʙᴏᴛ.Tname || ꪜᴏxʙᴏᴛ.pushname}:*

╔══☰ *❗ ADULT CONTENT ❗*
║⦁ 💡 Title: ${mData.meta.title || "Not available"}
║⦁ 🖊️ Author: ${mData.meta.author || "Not available"}
║⦁ ❣️ Topic: ${mData.meta.topic || "Not available"}
╚══☰
╔══☰
║>  *❓ META INFO ❓*
║⦁ 🎊 Status: ${mData.meta.status || "Not available"}
║⦁ 🔐 UUID: ${mData.meta.uuid || "Not available"}
║⦁ 🗓️ Date Created: ${mData.meta.date_create || "Not available"}
║⦁ 🧀 Query: ${mData.meta.query || "Not available"}
║⦁ 📢 Domain: ${mData.meta.domain || "Not available"}
║⦁ 💯 Subreddit ID: ${mData.meta.sub_reddit_id || "Not available"}
║⦁ 🌐 Link: ${mData.meta.web_link || "Not available"}
╚═══════⋑`;
    await ꪜᴏxʙᴏᴛ.imgB(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, message, mData.meta.thumbnail);
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
