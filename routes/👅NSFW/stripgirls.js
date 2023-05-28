//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  try {
    return await ꪜᴏxʙᴏᴛ.nsfwCheck.findOne(
      {
        serverID: ᴠᴏxᴄ.chat,
      },
      async (error, server) => {
        if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
        if (!server) {
          await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
            react: {
              text: "❌",
              key: ᴠᴏxᴄ.key,
            },
          });
          return ᴠᴏxᴄ.reply(
            `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌ Error* 
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`
          );
        } else {
          ꪜᴏxʙᴏᴛ.magfetch(
            ꪜᴏxʙᴏᴛ,
            "https://magneum.vercel.app/api/nsfw?q=" + pfname
          ).then(async (response) => {
            var mData = response.data;
            console.log(mData);
            if (!mData.meta.thumbnail) {
              await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
                react: {
                  text: "❌",
                  key: ᴠᴏxᴄ.key,
                },
              });
              return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.`);
            } else
              await ꪜᴏxʙᴏᴛ.imgB(
                ꪜᴏxʙᴏᴛ,
                ᴠᴏxᴄ,
                `*🔖Here, ${pfname} For @${ꪜᴏxʙᴏᴛ.Tname || ꪜᴏxʙᴏᴛ.pushname}:*

╔══☰ *❗ADULT❗*
║⦁ 💡Title: ${mData.meta.title || null}
║⦁ 🖊️Author: ${mData.meta.author || null}
║⦁ ❣️Topic: ${mData.meta.topic || null}
╚══☰
╔══☰
║>  *❓META INFO❓*
║⦁ 🎊Status: ${mData.meta.status || null}
║⦁ 🔐Uuid: ${mData.meta.uuid || null}
║⦁ 🗓️Date_create: ${mData.meta.date_create || null}
║⦁ 🧀Query: ${mData.meta.query || null}
║⦁ 📢Domain: ${mData.meta.domain || null}
║⦁ 💯Sub_reddit_id: ${mData.meta.sub_reddit_id || null}
║⦁ 🌐Link: ${mData.meta.web_link || null}
╚═══════⋑`,
                mData.meta.thumbnail
              );
          });
        }
      }
    );
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
