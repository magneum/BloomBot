require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!BloomBot.args) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any text and code in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} text | language-code_`
      );
    }

    const text = "";
    let langCode = "en";
    for (let i = 0; i < BloomBot.args.length; i++) {
      switch (BloomBot.args[i]) {
        case "=":
          langCode = BloomBot.args[i + 1];
          break;
        default:
          text += BloomBot.args[i] + " ";
          break;
      }
    }
    if (text.length > 200) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Total characters should be less than 200!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} text | language-code_`
      );
    } else {
      BloomBot.axios({
        method: "get",
        url:
          "https://magneum.vercel.app/api/text2speech?q=" +
          BloomBot.args.join(" "),
        headers: {
          accept: "🚀/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }).then(async (response) => {
        const mgdata = response.data;

        return await BloomBot.sendMessage(
          Sockey.chat,
          {
            audio: { url: mgdata.meta.url },
            mimetype: "audio/mpeg",
            fileName: "TalkToSpeech" + ".mp3",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: "📢Talk To Speech",
                body: "❣️Made by BloomBot.",
                renderLargerThumbnail: true,
                mediaUrl: "i.postimg.cc/qBSnwdzq/White.png",
                mediaType: 1,
                thumbnail: await BloomBot.getBuffer(
                  "i.postimg.cc/qBSnwdzq/White.png"
                ),
                sourceUrl: "bit.ly/BloomBot",
              },
            },
          },
          { quoted: Sockey }
        );
      });
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
