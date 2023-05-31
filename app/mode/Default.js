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
*❌ Error*
> There has been an API Error. Please try again later.
*🐞 Bug*
> ${error}`);
          }
          BloomBot.userBanCheck.findOne(
            {
              Id: mags.chat,
            },
            async (error, groupCheck) => {
              if (error) {
                return mags.reply(`*😥Apologies:* _${BloomBot.pushname}_
*❌ Error*
> There has been an API Error. Please try again later.
*🐞 Bug*
> ${error}`);
              }
              if (banCheck && !BloomBot.frome && !BloomBot.isSudo) return;
              if (groupCheck && !BloomBot.frome && !BloomBot.isSudo) return;
              await BloomBot.LinkList.findOne(
                {
                  serverId: mags.chat,
                },
                async (error, server) => {
                  if (error) return BloomBot.handlerror(BloomBot, mags, error);
                  if (!server) return;
                  var { noLink } = require("#/auth/antilink");
                  return noLink(BloomBot, mags);
                }
              );
              // respA = await BloomBot.groupMetadata("120363020792949649@g.us");
              // for (var i = 0; i < respA.participants.length; i++)
              // BloomBot.memberRespA[i] = respA.participants[i].id;
              // respB = await BloomBot.groupMetadata("120363089188116481@g.us");
              // for (var i = 0; i < respB.participants.length; i++)
              // BloomBot.memberRespB[i] = respB.participants[i].id;
              // if (
              // !BloomBot.fromme &&
              // !BloomBot.isSudo &&
              // !BloomBot.varResp.includes(BloomBot.command) &&
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
              // > https://bit.ly/magneum
              // > Login To Your Dashboard`,
              // mentions: [mags.sender],
              // },
              // { quoted: mags }
              // );
              // }
              if (MAINTAINANCE_MODE === "on" && !BloomBot.isSudo) {
                return await BloomBot.sendMessage(
                  mags.chat,
                  {
                    gifPlayback: true,
                    video: BloomBot.fs.readFileSync(
                      "./public/BloomBot/BloomBot (8)_white.png"
                    ),
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
              return await require("#/server/library")(
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
