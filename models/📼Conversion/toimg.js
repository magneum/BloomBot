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
ppath = require("path");
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, νℓкhat, update, store) => {
  try {
    if (!νℓкуяє.quoted) {
      await νℓкуяє.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} reply to Image_`
      );
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    if (/image/.test(νℓкуяє.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await νℓкуяє.downloadAndSaveMediaMessage(νℓкуяє.quoted, random);
      νℓкуяє.exec(
        νℓкуяє.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return νℓкуяє.reply(`*🕊️You:* ${
              νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }
          ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
          if (νℓкуяє.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (νℓкуяє.fs.existsSync(random + ".jpg")) {
            Found = random + ".jpg";
          } else if (νℓкуяє.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (νℓкуяє.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await νℓкуяє.sendMessage(νℓкhat.chat, {
              react: {
                text: "❌",
                key: νℓкhat.key,
              },
            });
            return νℓкhat.reply(
              `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} reply to Image_`
            );
          }
          ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
          return await νℓкуяє
            .sendMessage(
              νℓкhat.chat,
              {
                image: νℓкуяє.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${νℓкуяє.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${νℓкhat.chat.split("@")[0]}
│║⦁ *📢Console:* ${νℓкуяє.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*`,
                footer: `*VLKYRE™ Bot By KRYKNZ*

_*💻HomePage:* ${νℓкуяє.ShowInfo}_
_*⛺HomeLog:* ${νℓкуяє.ShowLogger}_`,
                mentions: [νℓкhat.sender],
                buttons: [
                  {
                    buttonId: `${νℓкуяє.prefix}Commands`,
                    buttonText: { displayText: `${νℓкуяє.prefix}✈️Commands` },
                    type: 1,
                  },
                  {
                    buttonId: `${νℓкуяє.prefix}Vlkyre`,
                    buttonText: { displayText: `${νℓкуяє.prefix}🛰️Vlkyre` },
                    type: 1,
                  },
                ],
                headerType: 4,
              },
              {
                quoted: νℓкhat,
              }
            )
            .then(
              νℓкуяє.fs.unlinkSync(Found),
              νℓкуяє.fs.unlinkSync(random + ".png")
            );
        }
      );
      ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    } else {
      await νℓкуяє.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} reply to Image_`
      );
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } catch (error) {
    return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
  }
};
