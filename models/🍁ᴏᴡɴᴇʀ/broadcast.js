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
module.exports = async (
  FoxBot,
  Foxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await FoxBot.sendMessage(Foxchat.chat, {
    react: {
      text: "🔖",
      key: Foxchat.key,
    },
  });
  try {
    if (!FoxBot.frome && !FoxBot.isSudo) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }
    if (!FoxBot.args.join(" ")) {
      await FoxBot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${FoxBot.prefix}${finalname} message_`
      );
    }

    var FoxBotGroups = await FoxBot.groupFetchAllParticipating();
    var vGroup = Object.entries(FoxBotGroups)
      .slice(0)
      .map((entry) => entry[1]);
    var places = vGroup.map((v) => v.id);
    Foxchat.reply(
      `Broadcasting in ${places.length} Group Chat, in ${
        places.length * 1.5
      } seconds`
    );

    for (var cron of places) {
      await FoxBot.sendMessage(cron, {
        video: {
          url: "./public/FoxBot.mp4",
        },
        mimetype: "video/mp4",
        fileName: "FoxBot.mp4",
        caption: `┌『*FoxBot📢BROADCAST* 』
│║⦁ *💫By:*  ${FoxBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🕛Time:*  ${FoxBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
┕╚═══════⋑

*🔖Message:*
${FoxBot.args.join(" ")}`,
      });
    }
  } catch (error) {
    return FoxBot.handlerror(FoxBot, Foxchat);
  }
};
