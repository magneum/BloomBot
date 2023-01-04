("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт) => {
  if (!νℓкуяє.mentionByReply) {
    return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
  }
  if (νℓкуяє.args.length === 0) {
    return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(νℓкуяє.args[0])) {
    return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
  }
  if (νℓкуяє.args[0].match(/[a-z]/i)) {
    return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  if (νℓкуяє.mentionByReply) {
    receiver =
      νℓкуяє.mtype == "extendedTextMessage" &&
      νℓкуяє.message.extendedTextMessage.contextInfo != null
        ? νℓкуяє.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await νℓкуяє.getName(receiver);
    if (receiver === vcнaт.sender) {
      return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    await νℓкуяє.Economy.findOne(
      {
        ID: vcнaт.sender,
      },
      async (error, uPayer) => {
        if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
        if (!uPayer) {
          new νℓкуяє.Economy({
            ID: vcнaт.sender,
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
              return νℓкуяє.grab(νℓкуяє, vcнaт, error);
            });
          return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
        }
        ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
        if (parseInt(νℓкуяє.args[0]) > uPayer.money) {
          return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
        } else {
          await νℓкуяє.Economy.findOne(
            {
              ID: receiver,
            },
            async (error, uBonus) => {
              if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
              if (!uBonus) {
                new νℓкуяє.Economy({
                  ID: receiver,
                  money: parseInt(νℓкуяє.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return νℓкуяє.grab(νℓкуяє, vcнaт, error);
                  });
                uPayer.money = uPayer.money - parseInt(νℓкуяє.args[0]);
                uPayer.save().catch((error) => {
                  return νℓкуяє.grab(νℓкуяє, vcнaт, error);
                });
                return await νℓкуяє.imgB(
                  νℓкуяє,
                  vcнaт,
                  `*🔖Here, ${pfname} For @${νℓкуяє.Tname || νℓкуяє.pushname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* @${νℓкуяє.Tname || νℓкуяє.pushname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  "./Gallery/vlkyre.jpg"
                );
              }
              ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
              uPayer.money = uPayer.money - parseInt(νℓкуяє.args[0]);
              uPayer.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, vcнaт, error);
              });
              uBonus.money = uBonus.money + parseInt(νℓкуяє.args[0]);
              uBonus.save().catch((error) => {
                return νℓкуяє.grab(νℓкуяє, vcнaт, error);
              });
              return await νℓкуяє.imgB(
                νℓкуяє,
                vcнaт,
                `*🔖Here, ${pfname} For @${νℓкуяє.Tname || νℓкуяє.pushname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* @${νℓкуяє.Tname || νℓкуяє.pushname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                "./Gallery/vlkyre.jpg"
              );
            }
          );
        }
      }
    );

    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${νℓкуяє.prefix}${pfname} amount_`);
  }
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву xhåÐr ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
