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
    if (!BloomBot.quoted) {
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
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
        `${BloomBot.pathFFmpeg} -i ${media} -af "atempo=0.5" ${random}.mp3`,
        async (error) => {
          return Sockey.reply(`*🌻You:* ${
            BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
          }\n*📢Chat Id:* ${Sockey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
• ${error}`);
          ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot вσт by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
          const Thumb = await BloomBot.getBuffer(BloomBot.display);
          return await BloomBot.sendMessage(
            Sockey.chat,
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
            { quoted: Sockey }
          ).then(BloomBot.fs.unlinkSync(`${random}.mp3`));
        }
      );
    } else {
      ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ BloomBot вσт by xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
      await BloomBot.sendMessage(Sockey.chat, {
        react: {
          text: "❌",
          key: Sockey.key,
        },
      });
      return Sockey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _Could not find any Audio in context!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} reply to Audio_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
