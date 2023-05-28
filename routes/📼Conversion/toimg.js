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
    if (!ꪜᴏxʙᴏᴛ.quoted) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} reply to Image_`
      );
    }

    if (/image/.test(ꪜᴏxʙᴏᴛ.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await ꪜᴏxʙᴏᴛ.downloadAndSaveMediaMessage(ꪜᴏxʙᴏᴛ.quoted, random);
      ꪜᴏxʙᴏᴛ.exec(
        ꪜᴏxʙᴏᴛ.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return ꪜᴏxʙᴏᴛ.reply(`*🕊️You:* ${
              ꪜᴏxʙᴏᴛ.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢ID:* ${ᴠᴏxᴄ.chat}

*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (ꪜᴏxʙᴏᴛ.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (ꪜᴏxʙᴏᴛ.fs.existsSync(random + ".jpg")) {
            Found = random + ".jpg";
          } else if (ꪜᴏxʙᴏᴛ.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (ꪜᴏxʙᴏᴛ.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
              react: {
                text: "❌",
                key: ᴠᴏxᴄ.key,
              },
            });
            return ᴠᴏxᴄ.reply(
              `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} reply to Image_`
            );
          }

          return await ꪜᴏxʙᴏᴛ.sendMessage(
            ᴠᴏxᴄ.chat,
            {
              image: ꪜᴏxʙᴏᴛ.fs.readFileSync(Found),
              caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${ꪜᴏxʙᴏᴛ.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${ᴠᴏxᴄ.chat.split("@")[0]}
│║⦁ *📢Console:* ${ꪜᴏxʙᴏᴛ.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*`,
              footer: `*VLKYRE™ Bot By KRYKNZ*

_*💻HomePage:* ${ꪜᴏxʙᴏᴛ.ShowInfo}_
_*⛺HomeLog:* ${ꪜᴏxʙᴏᴛ.ShowLogger}_`,
              mentions: [ᴠᴏxᴄ.sender],
              buttons: [
                {
                  buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Commands`,
                  buttonText: {
                    displayText: `${ꪜᴏxʙᴏᴛ.prefix}✈️Commands`,
                  },
                  type: 1,
                },
                {
                  buttonId: `${ꪜᴏxʙᴏᴛ.prefix}Synthia`,
                  buttonText: { displayText: `${ꪜᴏxʙᴏᴛ.prefix}🛰️Synthia` },
                  type: 1,
                },
              ],
              headerType: 4,
            },
            {
              quoted: ᴠᴏxᴄ,
            }
          ).then(
            ꪜᴏxʙᴏᴛ.fs.unlinkSync(Found),
            ꪜᴏxʙᴏᴛ.fs.unlinkSync(random + ".png")
          );
        }
      );
    } else {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} reply to Image_`
      );
    }
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
