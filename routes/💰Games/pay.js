// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнiα, νℓкhat, update, store) => {
  if (!ѕуηтнiα.mentionByReply) {
    return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
  }
  if (ѕуηтнiα.args.length === 0) {
    return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(ѕуηтнiα.args[0])) {
    return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
  }
  if (ѕуηтнiα.args[0].match(/[a-z]/i)) {
    return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
  }

  if (ѕуηтнiα.mentionByReply) {
    receiver =
      ѕуηтнiα.mtype == "extendedTextMessage" &&
      ѕуηтнiα.message.extendedTextMessage.contextInfo != null
        ? ѕуηтнiα.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await ѕуηтнiα.getName(receiver);
    if (receiver === νℓкhat.sender) {
      return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
    }

    await ѕуηтнiα.Economy.findOne(
      {
        ID: νℓкhat.sender,
      },
      async (error, uPayer) => {
        if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
        if (!uPayer) {
          new ѕуηтнiα.Economy({
            ID: νℓкhat.sender,
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
              return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
            });
          return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
        }

        if (parseInt(ѕуηтнiα.args[0]) > uPayer.money) {
          return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
        } else {
          await ѕуηтнiα.Economy.findOne(
            {
              ID: receiver,
            },
            async (error, uBonus) => {
              if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
              if (!uBonus) {
                new ѕуηтнiα.Economy({
                  ID: receiver,
                  money: parseInt(ѕуηтнiα.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
                  });
                uPayer.money = uPayer.money - parseInt(ѕуηтнiα.args[0]);
                uPayer.save().catch((error) => {
                  return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
                });
                return await ѕуηтнiα.imgB(
                  ѕуηтнiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  "./src/synthoria.jpg"
                );
              }

              uPayer.money = uPayer.money - parseInt(ѕуηтнiα.args[0]);
              uPayer.save().catch((error) => {
                return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
              });
              uBonus.money = uBonus.money + parseInt(ѕуηтнiα.args[0]);
              uBonus.save().catch((error) => {
                return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
              });
              return await ѕуηтнiα.imgB(
                ѕуηтнiα,
                νℓкhat,
                `*🔖Here, ${pfname} For ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${ѕуηтнiα.pushname || ѕуηтнiα.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                "./src/synthoria.jpg"
              );
            }
          );
        }
      }
    );
  } else {
    return νℓкhat.reply(`*😥Sorry:* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${ѕуηтнiα.prefix}${pfname} amount_`);
  }
};
