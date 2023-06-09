"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
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
    return BloomBot.fetch(
      "https://anime-reactions.uzairashraf.dev/api/reactions/random?category=yes",
    )
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
            caption: `*ⒸBloomBot (md) by Magneum™*\n*💻homePage:* bit.ly/magneum\n*🏘️Group:* tinyurl.com/magneum

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
