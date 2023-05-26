// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  try {
    if (!ѕуηтнσяiα.quoted) {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} reply to Image_`
      );
    }

    if (/image/.test(ѕуηтнσяiα.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await ѕуηтнσяiα.downloadAndSaveMediaMessage(ѕуηтнσяiα.quoted, random);
      ѕуηтнσяiα.exec(
        ѕуηтнσяiα.pathFFmpeg + ` -i ${media} ${random}.png`,
        async (error) => {
          if (error) {
            return ѕуηтнσяiα.reply(`*🕊️You:* ${
              ѕуηтнσяiα.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          }

          if (ѕуηтнσяiα.fs.existsSync(random + ".png")) {
            Found = random + ".png";
          } else if (ѕуηтнσяiα.fs.existsSync(random + ".jpg")) {
            Found = random + ".jpg";
          } else if (ѕуηтнσяiα.fs.existsSync(random + ".jpeg")) {
            Found = random + ".jpeg";
          } else if (ѕуηтнσяiα.fs.existsSync(random + ".webp")) {
            Found = random + ".webp";
          } else {
            await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
              react: {
                text: "❌",
                key: νℓкhat.key,
              },
            });
            return νℓкhat.reply(
              `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} reply to Image_`
            );
          }

          return await ѕуηтнσяiα
            .sendMessage(
              νℓкhat.chat,
              {
                image: ѕуηтнσяiα.fs.readFileSync(Found),
                caption: `╭╔══『 𝐊𝐫𝐲𝐙𝐨𝐧𝐞® 』
│║⦁ *🕊️You:* ${ѕуηтнσяiα.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🎭ChatId:* ${νℓкhat.chat.split("@")[0]}
│║⦁ *📢Console:* ${ѕуηтнσяiα.ShowInfo.replace("http://", "")}
╰╚═══════⋑

*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*`,
                footer: `*VLKYRE™ Bot By KRYKNZ*

_*💻HomePage:* ${ѕуηтнσяiα.ShowInfo}_
_*⛺HomeLog:* ${ѕуηтнσяiα.ShowLogger}_`,
                mentions: [νℓкhat.sender],
                buttons: [
                  {
                    buttonId: `${ѕуηтнσяiα.prefix}Commands`,
                    buttonText: { displayText: `${ѕуηтнσяiα.prefix}✈️Commands` },
                    type: 1,
                  },
                  {
                    buttonId: `${ѕуηтнσяiα.prefix}Synthia`,
                    buttonText: { displayText: `${ѕуηтнσяiα.prefix}🛰️Synthia` },
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
              ѕуηтнσяiα.fs.unlinkSync(Found),
              ѕуηтнσяiα.fs.unlinkSync(random + ".png")
            );
        }
      );
    } else {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error* 
> _Could not find any Image in context!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} reply to Image_`
      );
    }
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
