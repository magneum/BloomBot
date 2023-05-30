//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (NekoBot, nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  await NekoBot.sendMessage(nekos.chat, {
    react: {
      text: "🔖",
      key: nekos.key,
    },
  });
  try {
    if (!NekoBot.frome && !NekoBot.isSudo) {
      await NekoBot.sendMessage(nekos.chat, {
        react: {
          text: "❌",
          key: nekos.key,
        },
      });
      return nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }
    if (!NekoBot.args.join(" ")) {
      await NekoBot.sendMessage(nekos.chat, {
        react: {
          text: "❌",
          key: nekos.key,
        },
      });
      return nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${NekoBot.prefix}${finalname} message_`
      );
    }

    var NekoBotGroups = await NekoBot.groupFetchAllParticipating();
    var vGroup = Object.entries(NekoBotGroups)
      .slice(0)
      .map((entry) => entry[1]);
    var places = vGroup.map((v) => v.id);
    nekos.reply(
      `Broadcasting in ${places.length} Group Chat, in ${
        places.length * 1.5
      } seconds`
    );

    for (var cron of places) {
      await NekoBot.sendMessage(cron, {
        video: {
          url: "./public/src/NekoBot (8).mp4",
        },
        mimetype: "video/mp4",
        fileName: "NekoBot.mp4",
        caption: `┌『*NekoBot📢BROADCAST* 』
│║⦁ *💫By:*  ${NekoBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🕛Time:*  ${NekoBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
┕╚═══════⋑

*🔖Message:*
${NekoBot.args.join(" ")}`,
      });
    }
  } catch (error) {
    return NekoBot.handlerror(NekoBot, nekos);
  }
};
