//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
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
