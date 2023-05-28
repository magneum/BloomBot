//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  voxbot,
  voxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await voxbot.sendMessage(voxchat.chat, {
    react: {
      text: "🔖",
      key: voxchat.key,
    },
  });
  try {
    if (!voxbot.frome && !voxbot.isSudo) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }
    if (!voxbot.args.join(" ")) {
      await voxbot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${voxbot.prefix}${finalname} message_`
      );
    }

    let voxbotGroups = await voxbot.groupFetchAllParticipating();
    let vGroup = Object.entries(voxbotGroups)
      .slice(0)
      .map((entry) => entry[1]);
    let places = vGroup.map((v) => v.id);
    voxchat.reply(
      `Broadcasting in ${places.length} Group Chat, in ${
        places.length * 1.5
      } seconds`
    );

    for (let cron of places) {
      await voxbot.sendMessage(cron, {
        video: {
          url: "./public/Notice.mp4",
        },
        mimetype: "video/mp4",
        fileName: "Synthia-Notice.mp4",
        caption: `┌『*VLKYRE📢BROADCAST* 』
│║⦁ *💫By:*  ${voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🕛Time:*  ${voxbot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
┕╚═══════⋑

*🔖Message:*
${voxbot.args.join(" ")}`,
      });
    }
  } catch (error) {
    return voxbot.handlerror(voxbot, voxchat);
  }
};
