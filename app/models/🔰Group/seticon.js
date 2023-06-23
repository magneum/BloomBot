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
  participants,
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
• _It's a group command!_`,
      );
    }
    if (!isAdmin) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _This is an Admin only Command!_`,
      );
    }
    if (!isbotAdmin) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _bot not Admin!_`,
      );
    }
    if (!/image/.test(BloomBot.mime)) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Image in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply/send image_`,
      );
    }
    if (/webp/.test(BloomBot.mime)) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Image in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply/send image_`,
      );
    }

    const media = await BloomBot.downloadAndSaveMediaMessage(BloomBot.quoted);
    await BloomBot.updateProfilePicture(Sockey.chat, { url: media })
      .then(
        BloomBot.imagebutton(
          BloomBot,
          Sockey,
          `> *Group icone has been changed: ${
            BloomBot.pushname || BloomBot.tagname
          }*`,
          media,
        ),
      )
      .catch(async (error) => {
        BloomBot.fs.unlinkSync(media);
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not change group image!_

*🐞Bug* 
• ${error}`,
        );
      });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
