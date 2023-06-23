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
    if (!BloomBot.args.join(" ")) {
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
⦁ _${BloomBot.prefix}${currFile} manga-name_`,
      );
    }

    try {
      ProfilePic = await BloomBot.profilePictureUrl(chatkey.chat, "image");
    } catch {
      ProfilePic = BloomBot.display;
    }
    await BloomBot.groupUpdateDescription(chatkey.chat, BloomBot.args.join(" "));
    return await BloomBot.imagebutton(
      BloomBot,
      chatkey,
      `> *Group Description Changed successfuly by: ${
        BloomBot.pushname || BloomBot.tagname
      }*

*📜New Description:*
${BloomBot.args.join(" ")}`,
      ProfilePic,
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
