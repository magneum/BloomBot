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
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Image in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image_`,
      );
    }

    if (/image/.test(BloomBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await BloomBot.downloadAndSaveMediaMessage(
        BloomBot.quoted,
        random,
      );
      BloomBot.exec(
        BloomBot.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return BloomBot.reply(`*🌻You:* ${
              BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Chat Id:* ${chatkey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
• ${error}`);
          }

          if (BloomBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (BloomBot.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (BloomBot.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (BloomBot.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
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
• _Could not find any Image in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image_`,
            );
          }

          return await BloomBot.sendMessage(
            chatkey.chat,
            {
              image: BloomBot.fs.readFileSync(Found),
              caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║> *🌻You:* ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║> *🎭Chat Id:* ${chatkey.chat.split("@")[0]}
│║> *📢Console:* ${BloomBot.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}`,
              footer: `*BloomBot™ bot By KRYKNZ*

_*💻homePage:* ${BloomBot.ShowInfo}_
_*⛺homeLog:* ${BloomBot.Showlogger}_`,
              mentions: [chatkey.sender],
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
              quoted: chatkey,
            },
          ).then(
            BloomBot.fs.unlinkSync(Found),
            BloomBot.fs.unlinkSync(random + ".png"),
          );
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
• _Could not find any Image in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Image_`,
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
