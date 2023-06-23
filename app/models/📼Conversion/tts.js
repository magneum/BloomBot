require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    if (!BloomBot.args) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Could not find any text and code in context!_

*🌻Usage:* 
⦁ _${BloomBot.prefix}${currFile} text | language-code_`,
      );
    }

    const text = "";
    const langCode = "en";
    for (const i = 0; i < BloomBot.args.length; i++) {
      if (BloomBot.args[i] == `=`) {
        langCode = BloomBot.args[i + 1];
        break;
      }
      text += BloomBot.args[i] + " ";
    }
    if (text.length > 200) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Total characters should be less than 200!_

*🌻Usage:* 
⦁ _${BloomBot.prefix}${currFile} text | language-code_`,
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
          chatkey.chat,
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
                  "i.postimg.cc/qBSnwdzq/White.png",
                ),
                sourceUrl: "bit.ly/BloomBot",
              },
            },
          },
          { quoted: chatkey },
        );
      });
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
