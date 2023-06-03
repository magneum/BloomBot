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
module.exports = async (BloomBot, mags, groupName) => {
  await BloomBot.sendMessage(mags.chat, {
    react: {
      text: "🌻",
      key: mags.key,
    },
  });
  try {
    if (!BloomBot.byMyself && !BloomBot.isSudo) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌Error:* 
> _Owner Only Command!_`
      );
    }

    if (BloomBot.mentionByReply) {
      const repliedPerson =
        BloomBot.mtype == "extendedTextMessage" &&
        BloomBot.message.extendedTextMessage.contextInfo != null
          ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      const repliedPersonNum = repliedPerson.substring(
        0,
        repliedPerson.length - 15
      );
      BloomBot.userBanCheck.findOne(
        {
          Id: repliedPerson,
        },
        async (error, userBan) => {
          if (error) return BloomBot.handlerror(BloomBot, mags, error);
          if (!userBan) {
            new BloomBot.userBanCheck({
              Id: repliedPerson,
            }).save();
            return mags.reply(
              `*🔒Status:* @${repliedPersonNum} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return mags.reply(
              `*🔒Status:* @${repliedPersonNum} is already banned!`
            );
          }
        }
      );
    } else if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
      const mention = BloomBot.mentionByTag;
      const 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || BloomBot.msg.contextInfo.participant;
      BloomBot.userBanCheck.findOne(
        {
          Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
        },
        async (error, userBan) => {
          if (error) return BloomBot.handlerror(BloomBot, mags, error);
          if (!userBan) {
            new BloomBot.userBanCheck({
              Id: 𝕻𝖊𝖗𝖘𝖔𝖓,
            }).save();
            return mags.reply(
              `*🔒Status:* @${mention} has been banned and won't respond to that Dumbo!`
            );
          } else {
            return mags.reply(`*🔒Status:* @${mention} is already banned!`);
          }
        }
      );
    } else if (
      !BloomBot.mentionByReply &&
      !BloomBot.args[0] &&
      !BloomBot.args[0].startsWith("@")
    ) {
      BloomBot.userBanCheck.findOne(
        {
          Id: mags.chat,
        },
        async (error, userBan) => {
          if (error) return BloomBot.handlerror(BloomBot, mags, error);
          if (!userBan) {
            new BloomBot.userBanCheck({
              Id: mags.chat,
            }).save();
            return mags.reply(
              `*🔒Status:* ${groupName}\nGroup Has Been Banned!`
            );
          } else {
            return mags.reply(
              `*🔒Status:* ${groupName}\nGroup is already banned!`
            );
          }
        }
      );
    } else {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_
*❌Error:* 
> _Could not find any context!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} reply to person to ban_
> _${BloomBot.prefix}${fpth} don't reply to anyone and group will be banned_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
