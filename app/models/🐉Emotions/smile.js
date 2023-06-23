require("🌟/config/index.js");
const path = require("path");
const fileName = path.basename(__filename);
const feeling = fileName.slice(0, -3).toLowerCase();

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
    const pExec = BloomBot.promisify(require("child_process").exec);
    return BloomBot.fetch("https://api.waifu.pics/sfw/smile")
      .then((res) => res.json())
      .then(async (json) => {
        if (!json.url) {
          await BloomBot.sendMessage(chatkey.chat, {
            react: { text: "❌", key: chatkey.key },
          });
          return chatkey.reply(
            `*😥 Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.`,
          );
        }
        const resultFilename = new Date().getTime() + ".mp4";
        const ffmpegCommand = `${BloomBot.pathFFmpeg} -i ${json.url} -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' ${resultFilename}`;
        await pExec(ffmpegCommand);
        const mentionedUser = "";
        if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
          const mention = BloomBot.mentionByTag;
          mentionedUser =
            (await mention[0]) || chatkey.msg.contextInfo.participant;
        } else if (BloomBot.mentionByReply) {
          mentionedUser =
            chatkey.mtype === "extendedTextMessage" &&
            chatkey.message.extendedTextMessage.contextInfo != null
              ? chatkey.message.extendedTextMessage.contextInfo.participant ||
                ""
              : "";
        }

        await BloomBot.sendMessage(
          chatkey.chat,
          {
            gifPlayback: true,
            video: BloomBot.fs.readFileSync(resultFilename),
            caption: `*ⒸBloomBot by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum

*🎋Emo:* ${feeling}
*📢From:* ${BloomBot.pushname}
*🌻for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/`,
            mentions: [mentionedUser, chatkey.sender],
          },
          { quoted: chatkey },
        ).then(BloomBot.fs.unlinkSync(resultFilename));
      })
      .catch((error) => BloomBot.handlerror(BloomBot, chatkey, error));
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
