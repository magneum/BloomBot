require("🌟/config/index.js");
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
⦁ _It's a group command!_`,
      );
    }
    if (!isAdmin) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
⦁ _This is an Admin only Command!_`,
      );
    }
    if (!isbotAdmin) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
⦁ _bot not Admin!_`,
      );
    }

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
⦁ _No query provided!_

*🌻Usage:*   
⦁ _${BloomBot.prefix}${currFile} on
⦁ _${BloomBot.prefix}${currFile} off_`,
      );
    } else if (
      BloomBot.args[0] === "ON" ||
      BloomBot.args[0] === "on" ||
      BloomBot.args[0] === "On"
    ) {
      return await BloomBot.LinkList.findOne(
        {
          serverId: chatkey.chat,
        },
        async (error, server) => {
          if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
          if (!server) {
            new BloomBot.LinkList({
              serverId: chatkey.chat,
              value: "ON",
            }).save();
            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              ProfilePic,
            );
          } else {
            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ✅On`,
              ProfilePic,
            );
          }
        },
      );
    } else if (
      BloomBot.args[0] === "OFF" ||
      BloomBot.args[0] === "off" ||
      BloomBot.args[0] === "Off"
    ) {
      return await BloomBot.LinkList.findOne(
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
*🎖️Autolink:* ❌OFF`,
              ProfilePic,
            );
          } else {
            await server.delete();
            return await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
*📜Group:* ${gmeta.subject || ""}
*🎖️Autolink:* ❌OFF`,
              ProfilePic,
            );
          }
        },
      );
    } else {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
⦁ _No query provided!_

*🌻Usage:*   
⦁ _${BloomBot.prefix}${currFile} on
⦁ _${BloomBot.prefix}${currFile} off_`,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [
  "nohyper",
  "nolink",
  "unlinks",
  "urlstop",
  "linkoff",
  "antiurl",
  "nourl",
  "nobind",
  "nolinks",
  "unlink",
];
