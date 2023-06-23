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
  participants
) => {
  try {
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Audio in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Audio_`
      );
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot вσт by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    if (/audio/.test(BloomBot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await BloomBot.downloadAndSaveMediaMessage(
        BloomBot.quoted,
        random
      );
      BloomBot.exec(
        `${BloomBot.pathFFmpeg} -i ${media} -af "flanger" ${random}.mp3`,
        async (error) => {
          return chatkey.reply(`*🌻You:* ${
            BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
          }\n*📢Chat Id:* ${chatkey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
• ${error}`);
          ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot вσт by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
          const Thumb = await BloomBot.getBuffer(BloomBot.display);
          return await BloomBot.sendMessage(
            chatkey.chat,
            {
              audio: BloomBot.fs.readFileSync(`${random}.mp3`),
              contextInfo: {
                externalAdReply: {
                  title: `*🎙️Filter:* _${currFile}_`,
                  body: "BloomBot вσт by xhåÐr™",
                  mediaType: 2,
                  thumbnail: Thumb,
                  mediaUrl: one.url,
                },
              },
              mimetype: "audio/mpeg",
              fileName: `${one.title}.mp3`,
            },
            { quoted: chatkey }
          ).then(BloomBot.fs.unlinkSync(`${random}.mp3`));
        }
      );
    } else {
      ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot вσт by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Audio in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Audio_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
