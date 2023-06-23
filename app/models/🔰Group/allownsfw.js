require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!Sockey.isGroup) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> It's a group command!`
      );
    } else if (!isAdmin) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> This is an Admin only Command!`
      );
    } else if (!isbotAdmin) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> bot not Admin!`
      );
    } else
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    try {
      ProfilePic = await BloomBot.profilePictureUrl(Sockey.chat, "image");
    } catch {
      ProfilePic = BloomBot.display;
    }
    if (!BloomBot.args) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> No query provided!

*🌻Usage:*   
• ${BloomBot.prefix}${currFile} on
• ${BloomBot.prefix}${currFile} off`
      );
    } else if (
      BloomBot.args[0] === "ON" ||
      BloomBot.args[0] === "on" ||
      BloomBot.args[0] === "On"
    ) {
      return await BloomBot.nsfwCheck.findOne(
        {
          serverId: Sockey.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
          if (!server) {
            new BloomBot.nsfwCheck({
              serverId: Sockey.chat,
              value: "ON",
            }).save();
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              ProfilePic
            );
          } else
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              ProfilePic
            );
        }
      );
    } else if (
      BloomBot.args[0] === "OFF" ||
      BloomBot.args[0] === "off" ||
      BloomBot.args[0] === "Off"
    ) {
      return await BloomBot.nsfwCheck.findOne(
        {
          serverId: Sockey.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
          if (!server) {
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
              ProfilePic
            );
          } else await server.delete();
          return await BloomBot.imagebutton(
            BloomBot,
            Sockey,
            `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
            ProfilePic
          );
        }
      );
    } else
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
    return Sockey.reply(
      `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> No query provided!

*🌻Usage:*   
• ${BloomBot.prefix}${currFile} on
• ${BloomBot.prefix}${currFile} off`
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
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
