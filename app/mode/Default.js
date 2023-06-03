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
module.exports = async (BloomBot, mags, update, store) => {
  if (!mags.isGroup && BloomBot.command) {
    return require("#/auth/noPrivate")(BloomBot, mags, update);
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
                  return require("#/auth/antilink")(BloomBot, mags);
                }
              );
              // respA = await BloomBot.groupMetadata("120363020792949649@g.us");
              // for (const i = 0; i < respA.participants.length; i++)
              // BloomBot.memberRespA[i] = respA.participants[i].id;
              // respB = await BloomBot.groupMetadata("120363089188116481@g.us");
              // for (const i = 0; i < respB.participants.length; i++)
              // BloomBot.memberRespB[i] = respB.participants[i].id;
              // if (
              // !BloomBot.fromme &&
              // !BloomBot.isSudo &&
              // !BloomBot.constResp.includes(BloomBot.command) &&
              // !BloomBot.memberRespA.includes(mags.sender) &&
              // !BloomBot.memberRespB.includes(mags.sender)
              // ) {
              // return await BloomBot.sendMessage(
              // mags.chat,
              // {
              // gifPlayback: true,
              // video: BloomBot.fs.readFileSync("./public/how.mp4"),
              // caption: `*📢Verification Needed*
              // *😥Apologies:* _${BloomBot.pushname}_
              // > You need to be verified to use bot...
              // > join official group
              // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi
              // *⚙️Webpage:*
              // > bit.ly/magneum
              // > Login To Your Dashboard`,
              // mentions: [mags.sender],
              // },
              // { quoted: mags }
              // );
              // }
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
              await BloomBot.sendMessage(mags.chat, {
                react: {
                  text: "🌻",
                  key: mags.key,
                },
              });
              return await require("#/lib/library")(
                BloomBot,
                mags,
                update,
                store
              );
            }
          );
        }
      );
    }
  }
  return BloomBot;
};
