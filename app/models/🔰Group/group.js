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
• _It's a group command!_`,
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
• _This is an Admin only Command!_`,
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
• _bot not Admin!_`,
      );
    }

    try {
      ProfilePic = await BloomBot.profilePictureUrl(chatkey.sender, "image");
    } catch {
      ProfilePic = BloomBot.display;
    }

    if (BloomBot.args[0] === "Bloom") {
      await BloomBot.groupSettingUpdate(chatkey.chat, "not_announcement")
        .then(
          async (res) =>
            await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `> *Group have been Bloomed by: ${
                BloomBot.pushname || BloomBot.tagname
              }*`,
              ProfilePic,
            ),
        )
        .catch(async (error) =>
          chatkey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
*❌Error:* 
• ${jsonformat(error)}`,
          ),
        );
    } else if (BloomBot.args[0] === "close") {
      await BloomBot.groupSettingUpdate(chatkey.chat, "announcement")
        .then(
          async (res) =>
            await BloomBot.imagebutton(
              BloomBot,
              chatkey,
              `> *Group have been Closed by: ${
                BloomBot.pushname || BloomBot.tagname
              }*`,
              ProfilePic,
            ),
        )
        .catch(async (error) =>
          chatkey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_
*❌Error:* 
• ${jsonformat(error)}`,
          ),
        );
    } else if (BloomBot.args[0] === "antilink") {
      if (
        BloomBot.args[1] === "ON" ||
        BloomBot.args[1] === "on" ||
        BloomBot.args[1] === "On"
      ) {
        return await BloomBot.LinkList.findOne(
          {
            serverId: chatkey.chat,
          },
          async (error, server) => {
            if (error) {
              return BloomBot.reply(`*🌻You:* ${
                BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Chat Id:* ${chatkey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
• ${error}`);
            }

            if (!server) {
              const newServer = new BloomBot.LinkList({
                serverId: chatkey.chat,
                value: "ON",
              });
              await newServer.save();
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                ProfilePic,
              );
            } else {
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                ProfilePic,
              );
            }
          },
        );
      } else if (
        BloomBot.args[1] === "OFF" ||
        BloomBot.args[1] === "off" ||
        BloomBot.args[1] === "Off"
      ) {
        return await BloomBot.LinkList.findOne(
          {
            serverId: chatkey.chat,
          },
          async (error, server) => {
            if (error) {
              return BloomBot.reply(`*🌻You:* ${
                BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Chat Id:* ${chatkey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
• ${error}`);
            }

            if (!server) {
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                ProfilePic,
              );
            } else {
              await server.delete();
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `> *🔗Antilink:* _❌was not turned OFF_`,
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
• _Argument Missing!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} close/Bloom
• _${BloomBot.prefix}${currFile} antilink on/off`,
        );
      }
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
• _Argument Missing!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} close/Bloom
• _${BloomBot.prefix}${currFile} antilink on/off`,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
