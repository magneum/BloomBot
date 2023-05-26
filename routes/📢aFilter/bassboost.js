// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
> _Could not find any Audio in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} reply to Audio_`
      );
    }

    if (/audio/.test(ѕуηтнiα.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await ѕуηтнiα.downloadAndSaveMediaMessage(ѕуηтнiα.quoted, random);
      ѕуηтнiα.exec(
        `${ѕуηтнiα.pathFFmpeg} -i ${media} -af "bass=g=10,dynaudnorm=f=150" ${random}.mp3`,
        async (error) => {
          return νℓкhat.reply(`*🕊️You:* ${
            ѕуηтнiα.pushname || "ɴᴏ_ɴᴀᴍᴇ"
          }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);

          var Thumb = await ѕуηтнiα.getBuffer("./src/ѕуηтнiα.jpg");
          return await ѕуηтнiα
            .sendMessage(
              νℓкhat.chat,
              {
                audio: ѕуηтнiα.fs.readFileSync(`${random}.mp3`),
                contextInfo: {
                  externalAdReply: {
                    title: `*🎙️Filter:* _${pfname}_`,
                    body: "ѕуηтнiα вσт ву mågneum™",
                    mediaType: 2,
                    thumbnail: Thumb,
                    mediaUrl: one.url,
                  },
                },
                mimetype: "audio/mpeg",
                fileName: `${one.title}.mp3`,
              },
              { quoted: νℓкhat }
            )
            .then(ѕуηтнiα.fs.unlinkSync(`${random}.mp3`));
        }
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
> _Could not find any Audio in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} reply to Audio_`
      );
    }
  } catch (error) {
    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
  }
};
