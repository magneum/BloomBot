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
    if (!BloomBot.quoted) {
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
• _${BloomBot.prefix}${currFile} reply to Image_`
      );
    }

    switch (true) {
      case /image/.test(BloomBot.mime):
        random = Math.floor(Math.random() * 10000);
        media = await BloomBot.downloadAndSaveMediaMessage(
          BloomBot.quoted,
          random
        );
        BloomBot.exec(
          BloomBot.pathFFmpeg + ` -i ${media} ${random}.png`,
          async (error) => {
            if (error) {
              return BloomBot.reply(`*🌻You:* ${
                BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢Chat Id:* ${Sockey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
• ${error}`);
            }

            switch (true) {
              case BloomBot.fs.existsSync(random + ".png"):
                Found = random + ".png";
                break;
              case BloomBot.fs.existsSync(random + ".jpeg"):
                Found = random + ".jpeg";
                break;
              case BloomBot.fs.existsSync(random + ".webp"):
                Found = random + ".webp";
                break;
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
• _Could not find any Image in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image_`
                );
            }

            return await BloomBot.sendMessage(
              Sockey.chat,
              {
                image: BloomBot.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║> *🌻You:* ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║> *🎭Chat Id:* ${Sockey.chat.split("@")[0]}
│║> *📢Console:* ${BloomBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}`,
                footer: `*BloomBot™ bot By KRYKNZ*

_*💻homePage:* ${BloomBot.ShowInfo}_
_*⛺homeLog:* ${BloomBot.Showlogger}_`,
                mentions: [Sockey.sender],
                buttons: [
                  {
                    buttonId: `${BloomBot.prefix}Commands`,
                    buttonText: {
                      displayText: `${BloomBot.prefix}✈️Commands`,
                    },
                    type: 1,
                  },
                  {
                    buttonId: `${BloomBot.prefix}BloomBot`,
                    buttonText: { displayText: `${BloomBot.prefix}🛰️BloomBot` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: Sockey,
              }
            ).then(() => {
              BloomBot.fs.unlinkSync(Found);
              BloomBot.fs.unlinkSync(random + ".png");
            });
          }
        );
        break;
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
• _Could not find any Image in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image_`
        );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};

module.exports.aliases = [];
