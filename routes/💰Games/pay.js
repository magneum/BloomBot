//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  if (!Voxbot.mentionByReply) {
    return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
  }
  if (Voxbot.args.length === 0) {
    return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(Voxbot.args[0])) {
    return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
  }
  if (Voxbot.args[0].match(/[a-z]/i)) {
    return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
  }

  if (Voxbot.mentionByReply) {
    receiver =
      Voxbot.mtype == "extendedTextMessage" &&
      Voxbot.message.extendedTextMessage.contextInfo != null
        ? Voxbot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await Voxbot.getName(receiver);
    if (receiver === Voxchat.sender) {
      return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
    }

    await Voxbot.Economy.findOne(
      {
        Id: Voxchat.sender,
      },
      async (error, uPayer) => {
        if (error) return Voxbot.handlerror(Voxbot, Voxchat, error);
        if (!uPayer) {
          new Voxbot.Economy({
            Id: Voxchat.sender,
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
              return Voxbot.handlerror(Voxbot, Voxchat, error);
            });
          return Voxchat.reply(`*😥Apologies:* _${
            Voxbot.pushname || Voxbot.Tname
          }_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
        }

        if (parseInt(Voxbot.args[0]) > uPayer.money) {
          return Voxchat.reply(`*😥Apologies:* _${
            Voxbot.pushname || Voxbot.Tname
          }_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
        } else {
          await Voxbot.Economy.findOne(
            {
              Id: receiver,
            },
            async (error, uBonus) => {
              if (error) return Voxbot.handlerror(Voxbot, Voxchat, error);
              if (!uBonus) {
                new Voxbot.Economy({
                  Id: receiver,
                  money: parseInt(Voxbot.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return Voxbot.handlerror(Voxbot, Voxchat, error);
                  });
                uPayer.money = uPayer.money - parseInt(Voxbot.args[0]);
                uPayer.save().catch((error) => {
                  return Voxbot.handlerror(Voxbot, Voxchat, error);
                });
                return await Voxbot.imagebutton(
                  Voxbot,
                  Voxchat,
                  `*🔖Here, ${finalname} for ${
                    Voxbot.pushname || Voxbot.Tname
                  }:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${Voxbot.pushname || Voxbot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  Voxbot.display
                );
              }

              uPayer.money = uPayer.money - parseInt(Voxbot.args[0]);
              uPayer.save().catch((error) => {
                return Voxbot.handlerror(Voxbot, Voxchat, error);
              });
              uBonus.money = uBonus.money + parseInt(Voxbot.args[0]);
              uBonus.save().catch((error) => {
                return Voxbot.handlerror(Voxbot, Voxchat, error);
              });
              return await Voxbot.imagebutton(
                Voxbot,
                Voxchat,
                `*🔖Here, ${finalname} for ${Voxbot.pushname || Voxbot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${Voxbot.pushname || Voxbot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                Voxbot.display
              );
            }
          );
        }
      }
    );
  } else {
    return Voxchat.reply(`*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${Voxbot.prefix}${finalname} amount_`);
  }
};
