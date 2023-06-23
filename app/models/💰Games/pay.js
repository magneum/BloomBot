require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();
module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  if (!BloomBot.mentionByReply) {
    return chatkey.reply(`*😥Apologies:* _${
      BloomBot.pushname || BloomBot.tagname
    }_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
  }
  if (BloomBot.args.length === 0) {
    return chatkey.reply(`*😥Apologies:* _${
      BloomBot.pushname || BloomBot.tagname
    }_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
  }
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(BloomBot.args[0])) {
    return chatkey.reply(`*😥Apologies:* _${
      BloomBot.pushname || BloomBot.tagname
    }_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
  }
  if (BloomBot.args[0].match(/[a-z]/i)) {
    return chatkey.reply(`*😥Apologies:* _${
      BloomBot.pushname || BloomBot.tagname
    }_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
  }

  if (BloomBot.mentionByReply) {
    receiver =
      BloomBot.mtype == "extendedTextMessage" &&
      BloomBot.message.extendedTextMessage.contextInfo != null
        ? BloomBot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    receiverName = await BloomBot.getName(receiver);
    if (receiver === chatkey.sender) {
      return chatkey.reply(`*😥Apologies:* _${
        BloomBot.pushname || BloomBot.tagname
      }_ 

*❌Error:* 
> _Can't pay self account!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
    }

    await BloomBot.Economy.findOne(
      {
        Id: chatkey.sender,
      },
      async (error, uPayer) => {
        if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
        if (!uPayer) {
          new BloomBot.Economy({
            Id: chatkey.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch(async (error) => {
              return BloomBot.handlerror(BloomBot, chatkey, error);
            });
          return chatkey.reply(`*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_ 

*❌Error:* 
> _You Have 0-gold To Pay_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
        }

        if (parseInt(BloomBot.args[0]) > uPayer.money) {
          return chatkey.reply(`*😥Apologies:* _${
            BloomBot.pushname || BloomBot.tagname
          }_ 

*❌Error:* 
> _You Have 0-gold To Pay_

*💰Balance:*
>${uPayer.money}

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
        } else {
          await BloomBot.Economy.findOne(
            {
              Id: receiver,
            },
            async (error, uBonus) => {
              if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
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
                  .catch(async (error) => {
                    return BloomBot.handlerror(BloomBot, chatkey, error);
                  });
                uPayer.money = uPayer.money - parseInt(BloomBot.args[0]);
                uPayer.save().catch(async (error) => {
                  return BloomBot.handlerror(BloomBot, chatkey, error);
                });
                return await BloomBot.imagebutton(
                  BloomBot,
                  chatkey,
                  `*🌻Hola!* ${currFile} for ${
                    BloomBot.pushname || BloomBot.tagname
                  }

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${BloomBot.pushname || BloomBot.tagname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${payGold}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                  BloomBot.display,
                );
              }

              uPayer.money = uPayer.money - parseInt(BloomBot.args[0]);
              uPayer.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              uBonus.money = uBonus.money + parseInt(BloomBot.args[0]);
              uBonus.save().catch(async (error) => {
                return BloomBot.handlerror(BloomBot, chatkey, error);
              });
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}

┌『 *📥Paying Account* 』
│║⦁ *💰Balance:* ${uPayer.money}
│║⦁ *🦚Account Holder:* ${BloomBot.pushname || BloomBot.tagname}
┕╚═══════⋑

┌『 *📥Receiver Account* 』
│║⦁ *💰Balance:* ${uBonus.money}
│║⦁ *🐿️Account To Pay:* @${receiverName}
┕╚═══════⋑`,
                BloomBot.display,
              );
            },
          );
        }
      },
    );
  } else {
    return chatkey.reply(`*😥Apologies:* _${
      BloomBot.pushname || BloomBot.tagname
    }_ 

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> Reply-Person: _${BloomBot.prefix}${currFile} amount_`);
  }
};
