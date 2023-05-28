//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  if (!ꪜᴏxʙᴏᴛ.mentionByReply) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
  }
  if (ꪜᴏxʙᴏᴛ.args.length === 0) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(ꪜᴏxʙᴏᴛ.args[0])) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
  }
  if (ꪜᴏxʙᴏᴛ.args[0].match(/[a-z]/i)) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
  }

  if (ꪜᴏxʙᴏᴛ.mentionByReply) {
    receiver =
      ꪜᴏxʙᴏᴛ.mtype == "extendedTextMessage" &&
      ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo != null
        ? ꪜᴏxʙᴏᴛ.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await ꪜᴏxʙᴏᴛ.getName(receiver);
    if (receiver === ᴠᴏxᴄ.sender) {
      return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
    }

    await ꪜᴏxʙᴏᴛ.Economy.findOne(
      {
        ID: ᴠᴏxᴄ.sender,
      },
      async (error, uPayer) => {
        if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
        if (!uPayer) {
          new ꪜᴏxʙᴏᴛ.Economy({
            ID: ᴠᴏxᴄ.sender,
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
              return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
            });
          return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
        }

        if (parseInt(ꪜᴏxʙᴏᴛ.args[0]) > uPayer.money) {
          return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
        } else {
          await ꪜᴏxʙᴏᴛ.Economy.findOne(
            {
              ID: receiver,
            },
            async (error, uBonus) => {
              if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
              if (!uBonus) {
                new ꪜᴏxʙᴏᴛ.Economy({
                  ID: receiver,
                  money: parseInt(ꪜᴏxʙᴏᴛ.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                  });
                uPayer.money = uPayer.money - parseInt(ꪜᴏxʙᴏᴛ.args[0]);
                uPayer.save().catch((error) => {
                  return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
                });
                return await ꪜᴏxʙᴏᴛ.imgB(
                  ꪜᴏxʙᴏᴛ,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  "./src/voxbot.jpg"
                );
              }

              uPayer.money = uPayer.money - parseInt(ꪜᴏxʙᴏᴛ.args[0]);
              uPayer.save().catch((error) => {
                return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
              });
              uBonus.money = uBonus.money + parseInt(ꪜᴏxʙᴏᴛ.args[0]);
              uBonus.save().catch((error) => {
                return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
              });
              return await ꪜᴏxʙᴏᴛ.imgB(
                ꪜᴏxʙᴏᴛ,
                ᴠᴏxᴄ,
                `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                "./src/voxbot.jpg"
              );
            }
          );
        }
      }
    );
  } else {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ꪜᴏxʙᴏᴛ.prefix}${pfname} amount_`);
  }
};
