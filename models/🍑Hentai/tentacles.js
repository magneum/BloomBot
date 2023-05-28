//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (whatsbot, whatschat, update, store) => {
  try {
    return await whatsbot.nsfwCheck.findOne(
      {
        serverId: whatschat.chat,
      },
      async (error, server) => {
        if (error) return whatsbot.handlerror(whatsbot, whatschat, error);
        if (!server) {
          await whatsbot.sendMessage(whatschat.chat, {
            react: {
              text: "❌",
              key: whatschat.key,
            },
          });
          return whatschat.reply(
            `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌ Error* 
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`
          );
        } else {
          whatsbot
            .magfetch(
              whatsbot,
              "https://magneum.vercel.app/api/hentai?q=" + finalname
            )
            .then(async (response) => {
              var fetchedata = response.data;
              console.log(fetchedata);
              if (!fetchedata[0].meta.url) {
                await whatsbot.sendMessage(whatschat.chat, {
                  react: {
                    text: "❌",
                    key: whatschat.key,
                  },
                });
                return whatschat.reply(
                  `*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_

*❌ Error* 
> There has been an API Error. Please try again later.`
                );
              } else
                await whatsbot.imagebutton(
                  whatsbot,
                  whatschat,
                  `*🔖Here, ${finalname} for ${whatsbot.pushname}:*

> *Description:* ${fetchedata[0].meta.description}
> *Api Fetch Url:* https://magneum.vercel.app/api/hentai`,
                  fetchedata[0].meta.url
                );
            });
        }
      }
    );
  } catch (error) {
    return whatsbot.handlerror(whatsbot, whatschat, error);
  }
};
