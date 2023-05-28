//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (whatsbot, whatschat, update, store) => {
  if (!whatsbot.mentionByReply) {
    return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
  }
  if (whatsbot.args.length === 0) {
    return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(whatsbot.args[0])) {
    return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
  }
  if (whatsbot.args[0].match(/[a-z]/i)) {
    return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
  }

  if (whatsbot.mentionByReply) {
    receiver =
      whatsbot.mtype == "extendedTextMessage" &&
      whatsbot.message.extendedTextMessage.contextInfo != null
        ? whatsbot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await whatsbot.getName(receiver);
    if (receiver === whatschat.sender) {
      return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
    }

    await whatsbot.Economy.findOne(
      {
        Id: whatschat.sender,
      },
      async (error, uPayer) => {
        if (error) return whatsbot.handlerror(whatsbot, whatschat, error);
        if (!uPayer) {
          new whatsbot.Economy({
            Id: whatschat.sender,
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
              return whatsbot.handlerror(whatsbot, whatschat, error);
            });
          return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
        }

        if (parseInt(whatsbot.args[0]) > uPayer.money) {
          return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
        } else {
          await whatsbot.Economy.findOne(
            {
              Id: receiver,
            },
            async (error, uBonus) => {
              if (error) return whatsbot.handlerror(whatsbot, whatschat, error);
              if (!uBonus) {
                new whatsbot.Economy({
                  Id: receiver,
                  money: parseInt(whatsbot.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return whatsbot.handlerror(whatsbot, whatschat, error);
                  });
                uPayer.money = uPayer.money - parseInt(whatsbot.args[0]);
                uPayer.save().catch((error) => {
                  return whatsbot.handlerror(whatsbot, whatschat, error);
                });
                return await whatsbot.imagebutton(
                  whatsbot,
                  whatschat,
                  `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${whatsbot.pushname || whatsbot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  "./public/whatsbot.jpg"
                );
              }

              uPayer.money = uPayer.money - parseInt(whatsbot.args[0]);
              uPayer.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              uBonus.money = uBonus.money + parseInt(whatsbot.args[0]);
              uBonus.save().catch((error) => {
                return whatsbot.handlerror(whatsbot, whatschat, error);
              });
              return await whatsbot.imagebutton(
                whatsbot,
                whatschat,
                `*🔖Here, ${finalname} for ${whatsbot.pushname || whatsbot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${whatsbot.pushname || whatsbot.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                "./public/whatsbot.jpg"
              );
            }
          );
        }
      }
    );
  } else {
    return whatschat.reply(`*😥Apologies:* _${whatsbot.pushname || whatsbot.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${whatsbot.prefix}${finalname} amount_`);
  }
};
