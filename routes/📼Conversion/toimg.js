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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, νℓкhat, update, store) => {
  try {
    if (!VօxB໐t.quoted) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} reply to Image_`
      );
    }

    if (/image/.test(VօxB໐t.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await VօxB໐t.downloadAndSaveMediaMessage(VօxB໐t.quoted, random);
      VօxB໐t.exec(
        VօxB໐t.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return VօxB໐t.reply(`*🕊️You:* ${
              VօxB໐t.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (VօxB໐t.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (VօxB໐t.fs.existsSync(random + ".jpg")) {
            Found = random + ".jpg";
          } else if (VօxB໐t.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (VօxB໐t.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await VօxB໐t.sendMessage(νℓкhat.chat, {
              react: {
                text: "❌",
                key: νℓкhat.key,
              },
            });
            return νℓкhat.reply(
              `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} reply to Image_`
            );
          }

          return await VօxB໐t.sendMessage(
            νℓкhat.chat,
            {
              image: VօxB໐t.fs.readFileSync(Found),
              caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${VօxB໐t.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${νℓкhat.chat.split("@")[0]}
│║⦁ *📢Console:* ${VօxB໐t.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*`,
              footer: `*VLKYRE™ Bot By KRYKNZ*

_*💻HomePage:* ${VօxB໐t.ShowInfo}_
_*⛺HomeLog:* ${VօxB໐t.ShowLogger}_`,
              mentions: [νℓкhat.sender],
              buttons: [
                {
                  buttonId: `${VօxB໐t.prefix}Commands`,
                  buttonText: {
                    displayText: `${VօxB໐t.prefix}✈️Commands`,
                  },
                  type: 1,
                },
                {
                  buttonId: `${VօxB໐t.prefix}Synthia`,
                  buttonText: { displayText: `${VօxB໐t.prefix}🛰️Synthia` },
                  type: 1,
                },
              ],
              headerType: 4,
            },
            {
              quoted: νℓкhat,
            }
          ).then(
            VօxB໐t.fs.unlinkSync(Found),
            VօxB໐t.fs.unlinkSync(random + ".png")
          );
        }
      );
    } else {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} reply to Image_`
      );
    }
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
  }
};
