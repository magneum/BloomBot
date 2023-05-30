//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var path = require("path");
var finalname = path.basename(__filename, "").toLowerCase();

module.exports = async (OpenBot, ocID, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    var server = await OpenBot.nsfwCheck.findOne({ serverId: ocID.chat });
    if (!server) {
      await OpenBot.sendMessage(ocID.chat, {
        react: { text: "❌", key: ocID.key },
      });
      return ocID.reply(`*😥 Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌ Error* 
> NSFW commands have been disabled for this group.
> You can ask the administrators to enable them.`);
    }

    var response = await OpenBot.magfetch(
      OpenBot,
      `https://magneum.vercel.app/api/nsfw?q=${finalname}`
    );
    var fetchedata = response.data;
    if (!fetchedata.meta.thumbnail) {
      await OpenBot.sendMessage(ocID.chat, {
        react: { text: "❌", key: ocID.key },
      });
      return ocID.reply(`*😥 Apologies:* _${OpenBot.pushname}_
*❌ Error* 
> An API error has occurred. Please try again later.`);
    }

    var message = `
*🔖 Here is ${finalname} for @${OpenBot.Tname || OpenBot.pushname}:*

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
    await OpenBot.imagebutton(OpenBot, ocID, message, fetchedata.meta.thumbnail);
  } catch (error) {
    return OpenBot.handlerror(OpenBot, ocID, error);
  }
};
