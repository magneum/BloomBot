<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  if (!WhatsBot.mentionByReply) {
    return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
module.exports = async (voxbot, voxchat, update, store) => {
  if (!voxbot.mentionByReply) {
    return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
  }
  if (WhatsBot.args.length === 0) {
    return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
  }
  if (voxbot.args.length === 0) {
    return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(WhatsBot.args[0])) {
    return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(voxbot.args[0])) {
    return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
  }
  if (WhatsBot.args[0].match(/[a-z]/i)) {
    return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
  }
  if (voxbot.args[0].match(/[a-z]/i)) {
    return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
  }

  if (WhatsBot.mentionByReply) {
    receiver =
      WhatsBot.mtype == "extendedTextMessage" &&
      WhatsBot.message.extendedTextMessage.contextInfo != null
        ? WhatsBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await WhatsBot.getName(receiver);
    if (receiver === voxchat.sender) {
      return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
  }

  if (voxbot.mentionByReply) {
    receiver =
      voxbot.mtype == "extendedTextMessage" &&
      voxbot.message.extendedTextMessage.contextInfo != null
        ? voxbot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await voxbot.getName(receiver);
    if (receiver === voxchat.sender) {
      return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
    }

    await WhatsBot.Economy.findOne(
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
    }

    await voxbot.Economy.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      {
        Id: voxchat.sender,
      },
      async (error, uPayer) => {
<<<<<<< HEAD
        if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
        if (!uPayer) {
          new WhatsBot.Economy({
=======
        if (error) return voxbot.handlerror(voxbot, voxchat, error);
        if (!uPayer) {
          new voxbot.Economy({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            Id: voxchat.sender,
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
<<<<<<< HEAD
              return WhatsBot.handlerror(WhatsBot, voxchat, error);
            });
          return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
              return voxbot.handlerror(voxbot, voxchat, error);
            });
          return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
        }

        if (parseInt(WhatsBot.args[0]) > uPayer.money) {
          return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
        }

        if (parseInt(voxbot.args[0]) > uPayer.money) {
          return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
        } else {
          await WhatsBot.Economy.findOne(
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
        } else {
          await voxbot.Economy.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
            {
              Id: receiver,
            },
            async (error, uBonus) => {
<<<<<<< HEAD
              if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
              if (!uBonus) {
                new WhatsBot.Economy({
                  Id: receiver,
                  money: parseInt(WhatsBot.args[0]),
=======
              if (error) return voxbot.handlerror(voxbot, voxchat, error);
              if (!uBonus) {
                new voxbot.Economy({
                  Id: receiver,
                  money: parseInt(voxbot.args[0]),
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
<<<<<<< HEAD
                    return WhatsBot.handlerror(WhatsBot, voxchat, error);
                  });
                uPayer.money = uPayer.money - parseInt(WhatsBot.args[0]);
                uPayer.save().catch((error) => {
                  return WhatsBot.handlerror(WhatsBot, voxchat, error);
                });
                return await WhatsBot.imagebutton(
                  WhatsBot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${WhatsBot.pushname || WhatsBot.Tname}
=======
                    return voxbot.handlerror(voxbot, voxchat, error);
                  });
                uPayer.money = uPayer.money - parseInt(voxbot.args[0]);
                uPayer.save().catch((error) => {
                  return voxbot.handlerror(voxbot, voxchat, error);
                });
                return await voxbot.imagebutton(
                  voxbot,
                  voxchat,
                  `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${voxbot.pushname || voxbot.Tname}
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
<<<<<<< HEAD
                  "./public/WhatsBot.jpg"
                );
              }

              uPayer.money = uPayer.money - parseInt(WhatsBot.args[0]);
              uPayer.save().catch((error) => {
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              uBonus.money = uBonus.money + parseInt(WhatsBot.args[0]);
              uBonus.save().catch((error) => {
                return WhatsBot.handlerror(WhatsBot, voxchat, error);
              });
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${WhatsBot.pushname || WhatsBot.Tname}
=======
                  "./public/voxbot.jpg"
                );
              }

              uPayer.money = uPayer.money - parseInt(voxbot.args[0]);
              uPayer.save().catch((error) => {
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              uBonus.money = uBonus.money + parseInt(voxbot.args[0]);
              uBonus.save().catch((error) => {
                return voxbot.handlerror(voxbot, voxchat, error);
              });
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${voxbot.pushname || voxbot.Tname}
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
<<<<<<< HEAD
                "./public/WhatsBot.jpg"
=======
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }
          );
        }
      }
    );
  } else {
<<<<<<< HEAD
    return voxchat.reply(`*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_ 
=======
    return voxchat.reply(`*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_ 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> Reply-Person: _${WhatsBot.prefix}${finalname} amount_`);
=======
> Reply-Person: _${voxbot.prefix}${finalname} amount_`);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
