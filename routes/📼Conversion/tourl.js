("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ ѕуηтнiα was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнiα, νℓкhat, update, store) => {
  try {
    if (!ѕуηтнiα.quoted) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Could not find any Image/Video in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} reply to Image/Video_`
      );
    }
    
    if (/image/.test(ѕуηтнiα.mime)) {
      media = await ѕуηтнiα.quoted.download();
      upload = await ѕуηтнiα.TelegraPh(media);
      console.log(media, upload);
      await ѕуηтнiα.imgB(
        ѕуηтнiα,
        νℓкhat,
        `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*
*🎊Link: * _${ѕуηтнiα.util.format(upload)}_`,
        "./src/ѕуηтнiα.jpg"
      );
      
    } else if (/video/.test(ѕуηтнiα.mime)) {
      media = await ѕуηтнiα.quoted.download();
      upload = await ѕуηтнiα.TelegraPh(media);
      await ѕуηтнiα.imgB(
        ѕуηтнiα,
        νℓкhat,
        `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*
*🎊Link: * _${ѕуηтнiα.util.format(upload)}_`,
        "./src/ѕуηтнiα.jpg"
      );
      
    } else {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Could not find any Image/Video in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} reply to Image/Video_`
      );
    }
    
  } catch (error) {
    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
  }
};
