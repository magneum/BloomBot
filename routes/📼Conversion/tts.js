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
require("../../logger/global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  try {
    if (!ꪜᴏxʙᴏᴛ.args) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Could not find any text and code in context!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} text | language-code_`
      );
    }

    let text = "";
    let langCode = "en";
    for (var i = 0; i < ꪜᴏxʙᴏᴛ.args.length; i++) {
      if (ꪜᴏxʙᴏᴛ.args[i] == `=`) {
        langCode = ꪜᴏxʙᴏᴛ.args[i + 1];
        break;
      }
      text += ꪜᴏxʙᴏᴛ.args[i] + " ";
    }
    if (text.length > 200) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Total characters should be less than 200!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} text | language-code_`
      );
    } else {
      ꪜᴏxʙᴏᴛ
        .axios({
          method: "get",
          url:
            "https://magneum.vercel.app/api/text2speech?q=" +
            ꪜᴏxʙᴏᴛ.args.join(" "),
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then(async (response) => {
          var mData = response.data;
          console.log(mData);
          return await ꪜᴏxʙᴏᴛ.sendMessage(
            ᴠᴏxᴄ.chat,
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
                  thumbnail: await ꪜᴏxʙᴏᴛ.getBuffer(
                    "https://i.postimg.cc/qBSnwdzq/White.png"
                  ),
                  sourceUrl: "https://bit.ly/xhadr",
                },
              },
            },
            { quoted: ᴠᴏxᴄ }
          );
        });
    }
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
