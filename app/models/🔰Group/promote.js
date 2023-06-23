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
    switch (true) {
      case !Sockey.isGroup:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _It's a group command!_`
        );

      case !isAdmin:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _This is an Admin only Command!_`
        );

      case !isbotAdmin:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _bot not Admin!_`
        );
    }

    if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
      const mention = BloomBot.mentionByTag;
      const users = (await mention[0]) || Sockey.msg.contextInfo.participant;
      if (!users) {
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _Couldn't find any userId in context!_\n\n*🌻Usage:*\n• _${
            BloomBot.prefix
          }${currFile} @tag/reply_`
        );
      }
      try {
        await BloomBot.groupParticipantsUpdate(Sockey.chat, [users], "promote");
      } catch {
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _Check if the person already not an admin!_`
        );
      }
      try {
        ProfilePic = await BloomBot.profilePictureUrl(users, "image");
      } catch {
        ProfilePic = BloomBot.display;
      }
      await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        ProfilePic
      );
    } else if (BloomBot.mentionByReply) {
      const users =
        Sockey.mtype == "extendedTextMessage" &&
        Sockey.message.extendedTextMessage.contextInfo != null
          ? Sockey.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _Couldn't find any userId in context!_\n\n*🌻Usage:*\n• _${
            BloomBot.prefix
          }${currFile} @tag/reply_`
        );
      }
      try {
        await BloomBot.groupParticipantsUpdate(Sockey.chat, [users], "promote");
      } catch {
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:*\n• _Check if the person already not an admin!_`
        );
      }
      try {
        ProfilePic = await BloomBot.profilePictureUrl(users, "image");
      } catch {
        ProfilePic = BloomBot.display;
      }
      await BloomBot.imagebutton(
        BloomBot,
        Sockey,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        ProfilePic
      );
    } else {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${
          BloomBot.pushname || BloomBot.tagname
        }_\n\n*❌Error:*\n• _Couldn't find any userId in context!_\n\n*🌻Usage:*\n• _${
          BloomBot.prefix
        }${currFile} @tag/reply_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
