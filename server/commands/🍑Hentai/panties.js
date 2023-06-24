//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("#/config/index.js");
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
    return await BloomBot.nsfwCheck.findOne(
      {
        serverId: chatkey.chat,
      },
      async (error, server) => {
        if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
        if (!server) {
          await BloomBot.sendMessage(chatkey.chat, {
            react: {
              text: "❌",
              key: chatkey.key,
            },
          });
          return chatkey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`,
          );
        } else {
          await BloomBot.magfetch(
            BloomBot,
            "https://magneum.vercel.app/api/hentai?q=" + currFile,
          ).then(async (response) => {
            const mgdata = response.data;
            
            if (!mgdata[0].meta.url) {
              await BloomBot.sendMessage(chatkey.chat, {
                react: {
                  text: "❌",
                  key: chatkey.key,
                },
              });
              return chatkey.reply(
                `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*
> There has been an API Error. Please try again later.`,
              );
            } else
              await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Here, ${currFile} for ${BloomBot.pushname}:*

> *Description:* ${mgdata[0].meta.description}
> *Api Fetch Url:* https://magneum.vercel.app/api/hentai`,
                mgdata[0].meta.url,
              );
          });
        }
      },
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
