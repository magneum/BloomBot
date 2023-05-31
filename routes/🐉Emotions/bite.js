//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
const path = require("path");
const fileName = path.basename(__filename);
const feeling = fileName.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  try {
    const response = await BloomBot.magfetch(
      BloomBot,
      `magneum.vercel.app/api/emotions?q=${feeling}`
    );
    const magData = response.data;
    console.log(magData);
    if (!magData.meta.url) {
      await BloomBot.sendMessage(mags.chat, {
        react: { text: "❌", key: mags.key },
      });
      return mags.reply(
        `*😥 Apologies:* _${BloomBot.pushname || BloomBot.Tname}_

*❌Error:* There has been an API Error. Please try again later.`
      );
    }
    const resultFilename = magData.resp.id + ".mp4";
    await BloomBot.ffmpeg
      .input(magData.meta.url)
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .output(resultFilename)
      .on("end", async () => {
        const mentionedUser = "";
        if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
          const mention = BloomBot.mentionByTag;
          mentionedUser =
            (await mention[0]) || mags.msg.contextInfo.participant;
        } else if (BloomBot.mentionByReply) {
          mentionedUser =
            mags.mtype === "extendedTextMessage" &&
            mags.message.extendedTextMessage.contextInfo != null
              ? mags.message.extendedTextMessage.contextInfo.participant || ""
              : "";
        }
        const message = `*ⒸBloomBot by Magneum™*
*💻HomePage:* bit.ly/magneum

*🎋Emo:* ${feeling}
*📢From:* ${BloomBot.pushname}
*🌻for:* @${mentionedUser.split("@")[0] || ""}
*🐞Api:* magneum.vercel.app/api/emotions`;
        await BloomBot.sendMessage(
          mags.chat,
          {
            gifPlayback: true,
            video: BloomBot.fs.readFileSync(resultFilename),
            caption: message,
            mentions: [mentionedUser, mags.sender],
          },
          { quoted: mags }
        );
        BloomBot.fs.unlinkSync(resultFilename);
      })
      .on("error", (error) => console.log(error))
      .run();
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
