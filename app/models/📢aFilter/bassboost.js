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

    if (/audio/.test(BloomBot.mime)) {
      let random = Math.floor(Math.random() * 10000) + "_" + Sockey.chat;
      let media = await BloomBot.downloadAndSaveMediaMessage(
        BloomBot.quoted,
        random
      );
      await BloomBot.exec(
        `${BloomBot.pathFFmpeg} -i ${media} -af "bass=g=10,dynaudnorm=f=150" ${random}.mp3`,
        async (error) => {
          if (error) {
            return Sockey.reply(`*🌻You:* ${
              BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Chat Id:* ${Sockey.chat}

*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:* 
• ${error}`);
          } else {
            const Thumb = await BloomBot.getBuffer(BloomBot.display);
            return await BloomBot.sendMessage(
              Sockey.chat,
              {
                audio: BloomBot.fs.readFileSync(`${random}.mp3`),
                contextInfo: {
                  externalAdReply: {
                    body: "ⒸBloomBot by Magneum™",
                    title: `🎙️Filter: ${currFile}`,
                    thumbnail: Thumb,
                    mediaType: 2,
                  },
                },
                fileName: `${random}.mp3`,
                mimetype: "audio/mpeg",
              },
              { quoted: Sockey }
            ).then(BloomBot.fs.unlinkSync(`${random}.mp3`, media));
          }
        }
      );
    } else {
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
