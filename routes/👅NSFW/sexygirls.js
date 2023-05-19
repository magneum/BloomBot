("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, νℓкhat, update, store) => {
  try {
    return await νℓкуяє.nsfwCheck.findOne(
      {
        serverID: νℓкhat.chat,
      },
      async (error, server) => {
        if (error) return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
        if (!server) {
          await νℓкуяє.sendMessage(νℓкhat.chat, {
            react: {
              text: "❌",
              key: νℓкhat.key,
            },
          });
          return νℓкhat.reply(
            `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌ Error* 
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`
          );
          ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
        } else {
          νℓкуяє
            .axios({
              method: "get",
              url: "https://magneum.vercel.app/api/nsfw?q=" + pfname,
              headers: {
                accept: "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              },
            })
            .then(async (response) => {
              var mData = response.data;
              console.log(mData);
              if (!mData.meta.thumbnail) {
                await νℓкуяє.sendMessage(νℓкhat.chat, {
                  react: {
                    text: "❌",
                    key: νℓкhat.key,
                  },
                });
                return νℓкhat.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.`);
              } else
                await νℓкуяє.imgB(
                  νℓкуяє,
                  νℓкhat,
                  `*🔖Here, ${pfname} For @${νℓкуяє.Tname || νℓкуяє.pushname}:*

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
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } catch (error) {
    return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
  }
};
