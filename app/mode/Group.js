"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 🤖📱 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
module.exports = async (BloomBot, mags, update, store) => {
  if (!mags.isGroup && BloomBot.command) {
    if (!BloomBot.isSudo)
      await BloomBot.UserPrivate.findOne(
        {
          Id: mags.sender,
        },
        async (error, user) => {
          if (error) return BloomBot.handlerror(BloomBot, mags, error);
          if (!user) {
            new BloomBot.UserPrivate({
              Id: mags.sender,
              Amount: 1,
            })
              .save()
              .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*Dear* _${BloomBot.pushname || BloomBot.Tname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

*🌿Punishment*
• Warnings 1/4
• You Will be Auto-Blocked After 4 warnings!`,
              BloomBot.display
            );
          } else if (user.Amount < 4) {
            user.Amount = user.Amount + 1;
            await user
              .save()
              .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
            return await BloomBot.imagebutton(
              BloomBot,
              mags,
              `*Dear* _${BloomBot.pushname || BloomBot.Tname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

*🌿Punishment*
• Warnings ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
              BloomBot.display
            );
          } else {
            await user
              .delete()
              .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
            return await BloomBot.updateBlockStatus(mags.sender, "block").catch(
              (error) => BloomBot.handlerror(BloomBot, mags, error)
            );
          }
        }
      );
  } else {
    if (mags.isGroup && BloomBot.command) {
      BloomBot.userBanCheck.findOne(
        {
          Id: mags.sender,
        },
        (error, banCheck) => {
          if (error) {
            return mags.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:*
> ${error}`);
          }
          BloomBot.userBanCheck.findOne(
            {
              Id: mags.chat,
            },
            async (error, groupCheck) => {
              if (error) {
                return mags.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:*
> ${error}`);
              }
              if (banCheck && !BloomBot.byMyself && !BloomBot.isSudo) return;
              if (groupCheck && !BloomBot.byMyself && !BloomBot.isSudo) return;
              await BloomBot.LinkList.findOne(
                {
                  serverId: mags.chat,
                },
                async (error, server) => {
                  if (error) return BloomBot.handlerror(BloomBot, mags, error);
                  if (!server) return;
                  const { noLink } = require("#/utils/antilink");
                  return noLink(BloomBot, mags);
                }
              );
              if (maintainance_mode === "on" && !BloomBot.isSudo) {
                return await BloomBot.sendMessage(
                  mags.chat,
                  {
                    gifPlayback: true,
                    video: BloomBot.fs.readFileSync("./public/Maintenance.mp4"),
                    caption: `*📢Maintenance Mode On*
*😥Apologies:* _${BloomBot.pushname}_
> come back another time`,
                    mentions: [mags.sender],
                  },
                  { quoted: mags }
                );
              }

              try {
                require("#/server/library")(BloomBot, mags, update, store);
                return await BloomBot.sendMessage(mags.chat, {
                  react: {
                    text: "🌻",
                    key: mags.key,
                  },
                });
              } catch {
                await BloomBot.sendMessage(mags.chat, {
                  react: {
                    text: "⚠️",
                    key: mags.key,
                  },
                });
              }
            }
          );
        }
      );
    }
  }
  return BloomBot;
};
