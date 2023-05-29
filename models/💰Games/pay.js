//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logger/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (FoxBot, Foxchat, update, store) => {
  if (!FoxBot.mentionByReply) {
    return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
  }
  if (FoxBot.args.length === 0) {
    return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(FoxBot.args[0])) {
    return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
  }
  if (FoxBot.args[0].match(/[a-z]/i)) {
    return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
  }

  if (FoxBot.mentionByReply) {
    receiver =
      FoxBot.mtype == "extendedTextMessage" &&
      FoxBot.message.extendedTextMessage.contextInfo != null
        ? FoxBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await FoxBot.getName(receiver);
    if (receiver === Foxchat.sender) {
      return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
    }

    await FoxBot.Economy.findOne(
      {
        Id: Foxchat.sender,
      },
      async (error, uPayer) => {
        if (error) return FoxBot.handlerror(FoxBot, Foxchat, error);
        if (!uPayer) {
          new FoxBot.Economy({
            Id: Foxchat.sender,
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
              return FoxBot.handlerror(FoxBot, Foxchat, error);
            });
          return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
        }

        if (parseInt(FoxBot.args[0]) > uPayer.money) {
          return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
        } else {
          await FoxBot.Economy.findOne(
            {
              Id: receiver,
            },
            async (error, uBonus) => {
              if (error) return FoxBot.handlerror(FoxBot, Foxchat, error);
              if (!uBonus) {
                new FoxBot.Economy({
                  Id: receiver,
                  money: parseInt(FoxBot.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return FoxBot.handlerror(FoxBot, Foxchat, error);
                  });
                uPayer.money = uPayer.money - parseInt(FoxBot.args[0]);
                uPayer.save().catch((error) => {
                  return FoxBot.handlerror(FoxBot, Foxchat, error);
                });
                return await FoxBot.imagebutton(
                  FoxBot,
                  Foxchat,
                  `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${FoxBot.pushname || FoxBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  "./public/FoxBot.png"
                );
              }

              uPayer.money = uPayer.money - parseInt(FoxBot.args[0]);
              uPayer.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              uBonus.money = uBonus.money + parseInt(FoxBot.args[0]);
              uBonus.save().catch((error) => {
                return FoxBot.handlerror(FoxBot, Foxchat, error);
              });
              return await FoxBot.imagebutton(
                FoxBot,
                Foxchat,
                `*🔖Here, ${finalname} for ${FoxBot.pushname || FoxBot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${FoxBot.pushname || FoxBot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                "./public/FoxBot.png"
              );
            }
          );
        }
      }
    );
  } else {
    return Foxchat.reply(`*😥Apologies:* _${FoxBot.pushname || FoxBot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${FoxBot.prefix}${finalname} amount_`);
  }
};
