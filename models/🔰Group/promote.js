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
module.exports = async (BloomBot, mags, isAdmin, isbotAdmin) => {
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
    if (!isAdmin) {
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
    if (!isbotAdmin) {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _bot not Admin!_`
      );
    }

    if (BloomBot.args[0] && BloomBot.args[0].startsWith("@")) {
      const mention = BloomBot.mentionByTag;
      const users = (await mention[0]) || mags.msg.contextInfo.participant;
      if (!users) {
        await BloomBot.sendMessage(mags.chat, {
          react: {
            text: "❌",
            key: mags.key,
          },
        });
        return mags.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Couldn't find any userId in context!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} @tag/reply_`
        );
      }
      try {
        await BloomBot.groupParticipantsUpdate(mags.chat, [users], "promote");
      } catch {
        await BloomBot.sendMessage(mags.chat, {
          react: {
            text: "❌",
            key: mags.key,
          },
        });
        return mags.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        ProfilePic = await BloomBot.profilePictureUrl(users, "image");
      } catch {
        ProfilePic = BloomBot.display;
      }
      await BloomBot.imagebutton(
        BloomBot,
        mags,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        ProfilePic
      );
    } else if (BloomBot.mentionByReply) {
      const users =
        mags.mtype == "extendedTextMessage" &&
        mags.message.extendedTextMessage.contextInfo != null
          ? mags.message.extendedTextMessage.contextInfo.participant || ""
          : "";
      if (!users) {
        await BloomBot.sendMessage(mags.chat, {
          react: {
            text: "❌",
            key: mags.key,
          },
        });
        return mags.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Couldn't find any userId in context!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} @tag/reply_`
        );
      }
      try {
        await BloomBot.groupParticipantsUpdate(mags.chat, [users], "promote");
      } catch {
        await BloomBot.sendMessage(mags.chat, {
          react: {
            text: "❌",
            key: mags.key,
          },
        });
        return mags.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Check if the person already not an admin!_`
        );
      }
      try {
        ProfilePic = await BloomBot.profilePictureUrl(users, "image");
      } catch {
        ProfilePic = BloomBot.display;
      }
      await BloomBot.imagebutton(
        BloomBot,
        mags,
        `OOPs!! looks like someone promoted @${users.split("@")[0]}`,
        ProfilePic
      );
    } else {
      await BloomBot.sendMessage(mags.chat, {
        react: {
          text: "❌",
          key: mags.key,
        },
      });
      return mags.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Couldn't find any userId in context!_

*🌻Usage:* 
> _${BloomBot.prefix}${fpth} @tag/reply_`
      );
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, mags, error);
  }
};
module.exports.aliases = [];
