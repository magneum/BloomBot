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
    if (!BloomBot.byMyself) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _It's an Owner command!_`
      );
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
• _No query provided!_

*🌻Usage:*   
• _${BloomBot.prefix}${currFile} on
• _${BloomBot.prefix}${currFile} off_`
      );
    }

    switch (BloomBot.args[0].toLowerCase()) {
      case "on":
        return await BloomBot.Anticall.findOne(
          {
            Id: Sockey.sender,
          },
          async (error, server) => {
            if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
            if (!server) {
              new BloomBot.Anticall({
                Id: Sockey.sender,
                value: "ON",
              }).save();
            }

            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
*🎖️Anticall:* ✅On`,
              BloomBot.display
            );
          }
        );

      case "off":
        return await BloomBot.Anticall.findOne(
          {
            Id: Sockey.sender,
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
*🎖️Anticall:* ❌OFF`,
                BloomBot.display
              );
            } else {
              await server.delete();
              return await BloomBot.imagebutton(
                BloomBot,
                Sockey,
                `*🌻Hola!* ${currFile} for ${
                  BloomBot.pushname || BloomBot.tagname
                }
*🎖️Anticall:* ❌OFF`,
                BloomBot.display
              );
            }
          }
        );

      default:
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:*   
• _${BloomBot.prefix}${currFile} on_
• _${BloomBot.prefix}${currFile} off_`
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
