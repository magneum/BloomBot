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
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, ocID, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  await OpenBot.sendMessage(ocID.chat, {
    react: {
      text: "🔖",
      key: ocID.key,
    },
  });
  try {
    if (!OpenBot.frome && !OpenBot.isSudo) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }
    if (!OpenBot.args.join(" ")) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${OpenBot.prefix}${finalname} message_`
      );
    }

    var OpenBotGroups = await OpenBot.groupFetchAllParticipating();
    var vGroup = Object.entries(OpenBotGroups)
      .slice(0)
      .map((entry) => entry[1]);
    var places = vGroup.map((v) => v.id);
    ocID.reply(
      `Broadcasting in ${places.length} Group Chat, in ${
        places.length * 1.5
      } seconds`
    );

    for (var cron of places) {
      await OpenBot.sendMessage(cron, {
        video: {
          url: "./public/OpenBot/OpenBot (8).mp4",
        },
        mimetype: "video/mp4",
        fileName: "OpenBot.mp4",
        caption: `┌『*OpenBot📢BROADCAST* 』
│║⦁ *💫By:*  ${OpenBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🕛Time:*  ${OpenBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
┕╚═══════⋑

*🔖Message:*
${OpenBot.args.join(" ")}`,
      });
    }
  } catch (error) {
    return OpenBot.handlerror(OpenBot, ocID);
  }
};
