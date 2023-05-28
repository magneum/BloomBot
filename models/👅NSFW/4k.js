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
var path = require("path");
var finalname = path.basename(__filename, ".js").toLowerCase();

<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  try {
    var server = await WhatsBot.nsfwCheck.findOne({ serverId: voxchat.chat });
    if (!server) {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: { text: "❌", key: voxchat.key },
      });
      return voxchat.reply(`*😥 Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    var server = await voxbot.nsfwCheck.findOne({ serverId: voxchat.chat });
    if (!server) {
      await voxbot.sendMessage(voxchat.chat, {
        react: { text: "❌", key: voxchat.key },
      });
      return voxchat.reply(`*😥 Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌ Error* 
> NSFW commands have been disabled for this group.
> You can ask the administrators to enable them.`);
    }

<<<<<<< HEAD
    var response = await WhatsBot.magfetch(
      WhatsBot,
=======
    var response = await voxbot.magfetch(
      voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      `https://magneum.vercel.app/api/nsfw?q=${finalname}`
    );
    var fetchedata = response.data;
    if (!fetchedata.meta.thumbnail) {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
        react: { text: "❌", key: voxchat.key },
      });
      return voxchat.reply(`*😥 Apologies:* _${WhatsBot.pushname}_
=======
      await voxbot.sendMessage(voxchat.chat, {
        react: { text: "❌", key: voxchat.key },
      });
      return voxchat.reply(`*😥 Apologies:* _${voxbot.pushname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❌ Error* 
> An API error has occurred. Please try again later.`);
    }

    var message = `
<<<<<<< HEAD
*🔖 Here is ${finalname} for @${WhatsBot.Tname || WhatsBot.pushname}:*
=======
*🔖 Here is ${finalname} for @${voxbot.Tname || voxbot.pushname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

┌╔═☰ *❗ ADULT CONTENT ❗*
║⦁ 💡 Title: ${fetchedata.meta.title || "Not available"}
║⦁ 🖊️ Author: ${fetchedata.meta.author || "Not available"}
║⦁ ❣️ Topic: ${fetchedata.meta.topic || "Not available"}
╚══☰
┌╔═☰
║>  *❓ META INFO ❓*
║⦁ 🎊 Status: ${fetchedata.meta.status || "Not available"}
║⦁ 🔐 UUId: ${fetchedata.meta.uuid || "Not available"}
║⦁ 🗓️ Date Created: ${fetchedata.meta.date_create || "Not available"}
║⦁ 🧀 Query: ${fetchedata.meta.query || "Not available"}
║⦁ 📢 Domain: ${fetchedata.meta.domain || "Not available"}
║⦁ 💯 Subreddit Id: ${fetchedata.meta.sub_reddit_id || "Not available"}
║⦁ 🌐 Link: ${fetchedata.meta.web_link || "Not available"}
╚═══════⋑`;
<<<<<<< HEAD
    await WhatsBot.imagebutton(WhatsBot, voxchat, message, fetchedata.meta.thumbnail);
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
    await voxbot.imagebutton(voxbot, voxchat, message, fetchedata.meta.thumbnail);
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
