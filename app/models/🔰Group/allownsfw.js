"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    if (!chatkey.isGroup) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> It's a group command!`,
      );
    } else if (!isAdmin) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> This is an Admin only Command!`,
      );
    } else if (!isbotAdmin) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> bot not Admin!`,
      );
    } else
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot (md) by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    try {
      ProfilePic = await BloomBot.profilePictureUrl(chatkey.chat, "image");
    } catch {
      ProfilePic = BloomBot.display;
    }
    if (!BloomBot.args) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> No query provided!

*🌻Usage:*   
> ${BloomBot.prefix}${currFile} on
> ${BloomBot.prefix}${currFile} off`,
      );
    } else if (
      BloomBot.args[0] === "ON" ||
      BloomBot.args[0] === "on" ||
      BloomBot.args[0] === "On"
    ) {
      return await BloomBot.nsfwCheck.findOne(
        {
          serverId: chatkey.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
          if (!server) {
            new BloomBot.nsfwCheck({
              serverId: chatkey.chat,
              value: "ON",
            }).save();
            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              ProfilePic,
            );
          } else
            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              ProfilePic,
            );
        },
      );
    } else if (
      BloomBot.args[0] === "OFF" ||
      BloomBot.args[0] === "off" ||
      BloomBot.args[0] === "Off"
    ) {
      return await BloomBot.nsfwCheck.findOne(
        {
          serverId: chatkey.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
          if (!server) {
            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
              ProfilePic,
            );
          } else await server.delete();
          return await BloomBot.imagebutton(
            BloomBot,
            chatkey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
            ProfilePic,
          );
        },
      );
    } else
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
    return chatkey.reply(
      `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> No query provided!

*🌻Usage:*   
> ${BloomBot.prefix}${currFile} on
> ${BloomBot.prefix}${currFile} off`,
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [
  "nsfw_enabled",
  "allow_nsfw",
  "enable_nsfw",
  "nsfw_content",
  "nsfw_mode",
  "nsfw_toggle",
  "nsfw_filter",
  "explicit_content",
  "adult_content",
  "mature_content",
  "unsafe_content",
  "nsfw_filter",
  "nsfw_option",
  "risky_content",
  "sensitive_content",
  "not_safe_for_work",
  "content_warning",
  "explicit_filter",
  "mature_filter",
  "unsafe_filter",
  "nsfw_warning",
  "risky_warning",
  "sensitive_warning",
  "nsfw_flag",
  "explicit_flag",
  "mature_flag",
  "unsafe_flag",
  "nsfw_switch",
  "explicit_switch",
  "mature_switch",
  "unsafe_switch",
];
