"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
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
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags, isAdmin, participants) => {
  try {
    if (!mags.isGroup) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*  
> _It's a group command!_`
      );
    }
    if (!isAdmin && !BloomBot.isSudo) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _This is an Admin only Command!_`
      );
    }

    try {
      ProfilePic = await BloomBot.profilePictureUrl(mags.sender, "image");
    } catch {
      ProfilePic = BloomBot.display;
    }
    if (BloomBot.args) {
      return await BloomBot.sendMessage(
        mags.chat,
        {
          image: { url: ProfilePic },
          caption: `*📢ChatId:* ${mags.chat}
*💫Pinged By:*:  ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
*🕛Time:*  ${BloomBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
*📌Message:* \n${BloomBot.args.join(" ")}`,
          mentions: await participants.map((a) => a.id),
        },
        { quoted: mags }
      );
    } else {
      return await BloomBot.sendMessage(
        mags.chat,
        {
          image: { url: ProfilePic },
          caption: `*📢ChatId:* ${mags.chat}
*💫Pinged By:*:  ${BloomBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
*🕛Time:*  ${BloomBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
*📌Message:* \nAttention Everyone`,
          mentions: await participants.map((a) => a.id),
        },
        { quoted: mags }
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [
  "mention",
  "callall",
  "alltag",
  "allping",
  "groupall",
  "notifall",
  "massping",
  "crowdtag",
  "teamall",
  "groupmsg",
];
