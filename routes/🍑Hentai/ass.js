//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, ᴠᴏxᴄ, update, store) => {
  try {
    return await VօxB໐t.nsfwCheck.findOne(
      {
        serverID: ᴠᴏxᴄ.chat,
      },
      async (error, server) => {
        if (error) return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
        if (!server) {
          await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
            react: {
              text: "❌",
              key: ᴠᴏxᴄ.key,
            },
          });
          return ᴠᴏxᴄ.reply(
            `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌ Error* 
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`
          );
        } else {
          VօxB໐t.magfetch(
            VօxB໐t,
            "https://magneum.vercel.app/api/hentai?q=" + pfname
          ).then(async (response) => {
            var mData = response.data;
            console.log(mData);
            if (!mData[0].meta.url) {
              await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
                react: {
                  text: "❌",
                  key: ᴠᴏxᴄ.key,
                },
              });
              return ᴠᴏxᴄ.reply(
                `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌ Error* 
> There has been an API Error. Please try again later.`
              );
            } else
              await VօxB໐t.imgB(
                VօxB໐t,
                ᴠᴏxᴄ,
                `*🔖Here, ${pfname} For ${VօxB໐t.pushname}:*

> *Description:* ${mData[0].meta.description}
> *Api Fetch Url:* https://magneum.vercel.app/api/hentai`,
                mData[0].meta.url
              );
          });
        }
      }
    );
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
  }
};
