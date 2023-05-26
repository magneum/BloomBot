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
    if (!ѕуηтнiα.args) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Could not find any text and code in context!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} text | language-code_`
      );
    }
    
    let text = "";
    let langCode = "en";
    for (var i = 0; i < ѕуηтнiα.args.length; i++) {
      if (ѕуηтнiα.args[i] == `=`) {
        langCode = ѕуηтнiα.args[i + 1];
        break;
      }
      text += ѕуηтнiα.args[i] + " ";
    }
    if (text.length > 200) {
      await ѕуηтнiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_

*❌Error* 
> _Total characters should be less than 200!_

*⚡Usage* 
> _${ѕуηтнiα.prefix}${pfname} text | language-code_`
      );
      
    } else {
      ѕуηтнiα
        .axios({
          method: "get",
          url:
            "https://magneum.vercel.app/api/text2speech?q=" +
            ѕуηтнiα.args.join(" "),
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then(async (response) => {
          var mData = response.data;
          console.log(mData);
          return await ѕуηтнiα.sendMessage(
            νℓкhat.chat,
            {
              audio: { url: mData.meta.url },
              mimetype: "audio/mpeg",
              fileName: "TalkToSpeech" + ".mp3",
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: "📢Talk To Speech",
                  body: "❣️Made by xhadr.",
                  renderLargerThumbnail: true,
                  mediaUrl: "https://i.postimg.cc/qBSnwdzq/White.png",
                  mediaType: 1,
                  thumbnail: await ѕуηтнiα.getBuffer(
                    "https://i.postimg.cc/qBSnwdzq/White.png"
                  ),
                  sourceUrl: "https://bit.ly/xhadr",
                },
              },
            },
            { quoted: νℓкhat }
          );
        });
    }
    
  } catch (error) {
    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
  }
};
