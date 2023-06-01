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
require("#/config");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const fpth = tpth.slice(0, -3).toLowerCase();
module.exports = async (BloomBot, mags) => {
  if (!BloomBot.mentionByReply) {
    return mags.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
  if (BloomBot.args.length === 0) {
    return mags.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(BloomBot.args[0])) {
    return mags.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
  if (BloomBot.args[0].match(/[a-z]/i)) {
    return mags.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }

  if (BloomBot.mentionByReply) {
    receiver =
      BloomBot.mtype == "extendedTextMessage" &&
      BloomBot.message.extendedTextMessage.contextInfo != null
        ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await BloomBot.getName(receiver);
    if (receiver === mags.sender) {
      return mags.reply(`*😥Apologies:* _${
        BloomBot.pushname || BloomBot.Tname
      }_ 

*❌Error:* 
> _Can't pay self account!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
    }

    await BloomBot.Economy.findOne(
      {
        Id: mags.sender,
      },
      async (error, uPayer) => {
        if (error) return BloomBot.handlerror(BloomBot, mags, error);
        if (!uPayer) {
          new BloomBot.Economy({
            Id: mags.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return BloomBot.handlerror(BloomBot, mags, error);
            });
          return mags.reply(`*😥Apologies:* _${
            BloomBot.pushname || BloomBot.Tname
          }_ 

*❌Error:* 
> _You Have 0-gold To Pay_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
        }

        if (parseInt(BloomBot.args[0]) > uPayer.money) {
          return mags.reply(`*😥Apologies:* _${
            BloomBot.pushname || BloomBot.Tname
          }_ 

*❌Error:* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
        } else {
          await BloomBot.Economy.findOne(
            {
              Id: receiver,
            },
            async (error, uBonus) => {
              if (error) return BloomBot.handlerror(BloomBot, mags, error);
              if (!uBonus) {
                new BloomBot.Economy({
                  Id: receiver,
                  money: parseInt(BloomBot.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return BloomBot.handlerror(BloomBot, mags, error);
                  });
                uPayer.money = uPayer.money - parseInt(BloomBot.args[0]);
                uPayer.save().catch((error) => {
                  return BloomBot.handlerror(BloomBot, mags, error);
                });
                return await BloomBot.imagebutton(
                  BloomBot,
                  mags,
                  `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${BloomBot.pushname || BloomBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  BloomBot.Logos
                );
              }

              uPayer.money = uPayer.money - parseInt(BloomBot.args[0]);
              uPayer.save().catch((error) => {
                return BloomBot.handlerror(BloomBot, mags, error);
              });
              uBonus.money = uBonus.money + parseInt(BloomBot.args[0]);
              uBonus.save().catch((error) => {
                return BloomBot.handlerror(BloomBot, mags, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                mags,
                `*🌻Here:* ${fpth} for ${BloomBot.pushname || BloomBot.Tname}

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${BloomBot.pushname || BloomBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                BloomBot.Logos
              );
            }
          );
        }
      }
    );
  } else {
    return mags.reply(`*😥Apologies:* _${BloomBot.pushname || BloomBot.Tname}_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${fpth} amount_`);
  }
};
