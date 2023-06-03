"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
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
//  ╚◎ ⚙️𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +𝟗𝟏𝟖𝟒𝟑𝟔𝟔𝟖𝟔𝟕𝟓𝟖 & +𝟗𝟏𝟖𝟐𝟓𝟎𝟖𝟖𝟗𝟑𝟐𝟓
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
const path = require("path");
const { promisify } = require("util");
const fileName = path.basename(__filename);
const feeling = fileName.slice(0, -3).toLowerCase();
const exec = promisify(require("child_process").exec);

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
    const response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/emotions?q=${feeling}`,
    );
    const magData = response.data;
    console.log(magData);
    if (!magData.meta.url) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: { text: "❌", key: chatkey.key },
      });
      return chatkey.reply(
        `*😥 Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* There has been an API Error. Please try again later.`,
      );
    }
    const resultFilename = magData.resp.id + ".mp4";
    const ffmpegCommand = `${BloomBot.pathFFmpeg} -i ${magData.meta.url} -pix_fmt yuv420p -c:v libx264 -movflags +faststart -filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2' ${resultFilename}`;
    await exec(ffmpegCommand);
    const mentionedUser = "";
    if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
      const mention = BloomBot.mentionByTag;
      mentionedUser = (await mention[0]) || chatkey.msg.contextInfo.participant;
    } else if (BloomBot.mentionByReply) {
      mentionedUser =
        chatkey.mtype === "extendedTextMessage" &&
        chatkey.message.extendedTextMessage.contextInfo != null
          ? chatkey.message.extendedTextMessage.contextInfo.participant || ""
          : "";
    }
    const message = `*ⒸBloomBot (md) by Magneum™*
*💻homePage:* bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${BloomBot.pushname}
*🌻for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* https://magneum.vercel.app/api/emotions`;
    await BloomBot.sendMessage(
      chatkey.chat,
      {
        gifPlayback: true,
        video: BloomBot.fs.readFileSync(resultFilename),
        caption: message,
        mentions: [mentionedUser, chatkey.sender],
      },
      { quoted: chatkey },
    );
    BloomBot.fs.unlinkSync(resultFilename);
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};

module.exports.aliases = [];
