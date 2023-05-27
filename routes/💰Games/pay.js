//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, ᴠᴏxᴄ, update, store) => {
  if (!VօxB໐t.mentionByReply) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
  }
  if (VօxB໐t.args.length === 0) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(VօxB໐t.args[0])) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
  }
  if (VօxB໐t.args[0].match(/[a-z]/i)) {
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
  }

  if (VօxB໐t.mentionByReply) {
    receiver =
      VօxB໐t.mtype == "extendedTextMessage" &&
      VօxB໐t.message.extendedTextMessage.contextInfo != null
        ? VօxB໐t.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await VօxB໐t.getName(receiver);
    if (receiver === ᴠᴏxᴄ.sender) {
      return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _Can't pay self account!_

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
    }

    await VօxB໐t.Economy.findOne(
      {
        ID: ᴠᴏxᴄ.sender,
      },
      async (error, uPayer) => {
        if (error) return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
        if (!uPayer) {
          new VօxB໐t.Economy({
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
              return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
            });
          return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
        }

        if (parseInt(VօxB໐t.args[0]) > uPayer.money) {
          return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
        } else {
          await VօxB໐t.Economy.findOne(
            {
              ID: receiver,
            },
            async (error, uBonus) => {
              if (error) return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
              if (!uBonus) {
                new VօxB໐t.Economy({
                  ID: receiver,
                  money: parseInt(VօxB໐t.args[0]),
                  daily: 0,
                  timeout: 86400000,
                  fishdone: 0,
                  fishtimeout: 1800000,
                  workdone: 0,
                  worktimeout: 900000,
                })
                  .save()
                  .catch((error) => {
                    return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
                  });
                uPayer.money = uPayer.money - parseInt(VօxB໐t.args[0]);
                uPayer.save().catch((error) => {
                  return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
                });
                return await VօxB໐t.imgB(
                  VօxB໐t,
                  ᴠᴏxᴄ,
                  `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${VօxB໐t.pushname || VօxB໐t.Tname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  "./src/voxbot.jpg"
                );
              }

              uPayer.money = uPayer.money - parseInt(VօxB໐t.args[0]);
              uPayer.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
              });
              uBonus.money = uBonus.money + parseInt(VօxB໐t.args[0]);
              uBonus.save().catch((error) => {
                return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
              });
              return await VօxB໐t.imgB(
                VօxB໐t,
                ᴠᴏxᴄ,
                `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${VօxB໐t.pushname || VօxB໐t.Tname}
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
    return ᴠᴏxᴄ.reply(`*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_ 

*❌Error* 
> _No query provided!_

*⚡Usage* 
> Reply-Person: _${VօxB໐t.prefix}${pfname} amount_`);
  }
};
