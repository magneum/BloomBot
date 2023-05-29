//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Voxchat.isGroup) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isbotAdmin) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _bot not Admin!_`
      );
    }
    if (!Voxbot.args.join(" ")) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} manga-name_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await Voxbot.profilePictureUrl(Voxchat.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = Voxbot.display;
    }
    await Voxbot.groupUpdateDescription(Voxchat.chat, Voxbot.args.join(" "));
    return await Voxbot.imagebutton(
      Voxbot,
      Voxchat,
      `> *Group Description Changed successfuly by: ${
        Voxbot.pushname || Voxbot.Tname
      }*

*📜New Description:*
${Voxbot.args.join(" ")}`,
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞
    );
  } catch (error) {
    return Voxbot.handlerror(Voxbot, Voxchat);
  }
};
