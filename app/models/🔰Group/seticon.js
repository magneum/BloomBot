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
          }_\n\n*❌Error:* \n• _It's a group command!_`
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
          }_\n\n*❌Error:* \n• _This is an Admin only Command!_`
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
          }_\n\n*❌Error:* \n• _bot not Admin!_`
        );
      case !/image/.test(BloomBot.mime):
      case /webp/.test(BloomBot.mime):
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:* \n• _Could not find any Image in context!_\n\n*🌻Usage:* \n• _${
            BloomBot.prefix
          }${currFile} reply/send image_`
        );
    }

    const media = await BloomBot.downloadAndSaveMediaMessage(BloomBot.quoted);
    await BloomBot.updateProfilePicture(Sockey.chat, { url: media })
      .then(
        BloomBot.imagebutton(
          BloomBot,
          Sockey,
          `> *Group icon has been changed: ${
            BloomBot.pushname || BloomBot.tagname
          }*`,
          media
        )
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
          `*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_\n\n*❌Error:* \n• _Could not change group image!_\n\n*🐞Bug* \n• ${error}`
        );
      });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};

module.exports.aliases = [];
