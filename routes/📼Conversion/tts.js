//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Nekobot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Nekobot.args) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _Could not find any text and code in context!_

*⚡Usage* 
> _${Nekobot.prefix}${finalname} text | language-code_`
      );
    }

    var text = "";
    var langCode = "en";
    for (var i = 0; i < Nekobot.args.length; i++) {
      if (Nekobot.args[i] == `=`) {
        langCode = Nekobot.args[i + 1];
        break;
      }
      text += Nekobot.args[i] + " ";
    }
    if (text.length > 200) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _Total characters should be less than 200!_

*⚡Usage* 
> _${Nekobot.prefix}${finalname} text | language-code_`
      );
    } else {
      Nekobot
        .axios({
          method: "get",
          url:
            "https://magneum.vercel.app/api/text2speech?q=" +
            Nekobot.args.join(" "),
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then(async (response) => {
          var fetchedata = response.data;
          console.log(fetchedata);
          return await Nekobot.sendMessage(
            Nekos.chat,
            {
              audio: { url: fetchedata.meta.url },
              mimetype: "audio/mpeg",
              fileName: "TalkToSpeech" + ".mp3",
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: "📢Talk To Speech",
                  body: "❣️Made by Nekobot.",
                  renderLargerThumbnail: true,
                  mediaUrl: "https://i.postimg.cc/qBSnwdzq/White.png",
                  mediaType: 1,
                  thumbnail: await Nekobot.getBuffer(
                    "https://i.postimg.cc/qBSnwdzq/White.png"
                  ),
                  sourceUrl: "https://bit.ly/Nekobot",
                },
              },
            },
            { quoted: Nekos }
          );
        });
    }
  } catch (error) {
    return Nekobot.handlerror(Nekobot, Nekos, error);
  }
};
