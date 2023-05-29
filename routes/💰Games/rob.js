//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  var ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
  var MoneyLaptop = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
  var MoneyCharm = Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000;
  var MoneySword = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
  if (Foxbot.mentionByReply) {
    var receiver =
      Foxchat.mtype == "extendedTextMessage" &&
      Foxchat.message.extendedTextMessage.contextInfo != null
        ? Foxchat.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    var receiverName = await Foxbot.getName(receiver);
    if (receiver === Foxchat.sender) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _Can't rob your own bank_`
      );
    }

    Foxbot.Economy.findOne(
      {
        Id: Foxchat.sender,
      },
      async (error, ᴄᴇᴄᴏ) => {
        if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
        Foxbot.Economy.findOne(
          {
            Id: receiver,
          },
          async (error, ᴠᴇᴄᴏ) => {
            if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
            if (!ᴠᴇᴄᴏ) {
              var newUser = new Foxbot.Economy({
                Id: receiver,
                money: 0,
                daily: 0,
                timeout: 86400000,
                fishdone: 0,
                fishtimeout: 1800000,
                workdone: 0,
                worktimeout: 900000,
              });
              await newUser
                .save()
                .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 1/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName}'s Bank Guard Caught You and Took You To The Jail!
*🧈Status:* You Got Arrested and Took 0gold.ReTry Again!`,
                Foxbot.display
              );
            }

            if (!ᴄᴇᴄᴏ) {
              var newUser = new Foxbot.Economy({
                Id: Foxchat.sender,
                money: 0,
                daily: 0,
                timeout: 86400000,
                fishdone: 0,
                fishtimeout: 1800000,
                workdone: 0,
                worktimeout: 900000,
              });
              await newUser
                .save()
                .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 2/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* You are the worst robber.
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:  Fell On a pool and died!.ReTry!`,
                Foxbot.display
              );
            }

            if (ᴄᴇᴄᴏ.money < 1000) {
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* You Will Need Atleast 1000 in your bank before you can rob someone!
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻: If You Get Caught, ᴠɪᴄᴛɪᴍ will charge you money to spare your life.`,
                Foxbot.display
              );
            }

            if (ᴠᴇᴄᴏ.money < 1000) {
              return await Foxbot.imagebutton(
                Foxbot,
                Foxchat,
                `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*@${receiverName}*
*❌𝗘𝗿𝗿𝗼𝗿:*  needs atleast 1000gold in their account before you can rob them!
*🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:* Broke AF! Leave This Begger Alone!`,
                Foxbot.display
              );
            }

            Robbery.findOne(
              {
                Id: Foxchat.sender,
              },
              async (error, ᴄᴜʟᴘʀɪᴛ) => {
                if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
                Robbery.findOne(
                  {
                    Id: receiver,
                  },
                  async (error, ᴠɪᴄᴛɪᴍ) => {
                    if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
                    if (!ᴠɪᴄᴛɪᴍ) {
                      var newUser = new Robbery({
                        Id: receiver,
                        sword: 0,
                        laptop: 0,
                        charm: 0,
                        CurrentRobberyTime: Date.now(),
                        PermanentRobberyTime: 900000,
                      });
                      await newUser
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 3/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName}'s Bank Police Caught You and Took You To The Jail!
*🧈Status:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰Balance:* ${ᴄᴇᴄᴏ.money}`,
                        Foxbot.display
                      );
                    }

                    if (!ᴄᴜʟᴘʀɪᴛ) {
                      var newUser = new Robbery({
                        Id: Foxchat.sender,
                        sword: 0,
                        laptop: 0,
                        charm: 0,
                        CurrentRobberyTime: Date.now(),
                        PermanentRobberyTime: 900000,
                      });
                      await newUser
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 4/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} caught You Red Handed and Sent You To The Jail!
*🧈Status:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰Balance:* ${ᴄᴇᴄᴏ.money}`,
                        Foxbot.display
                      );
                    }

                    if (
                      ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
                        (Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime) >
                      0
                    ) {
                      var Time = ms(
                        ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
                          (Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime)
                      );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*❌𝗘𝗿𝗿𝗼𝗿:* You've Recently Tried Robbing Someone!.
🕐𝐑𝐨𝐛 𝗔𝗴𝗮𝗶𝗻: ${Time.minutes}m ${Time.seconds}s.`,
                        Foxbot.display
                      );
                    }

                    if (ᴠɪᴄᴛɪᴍ.sword > 0) {
                      ᴠɪᴄᴛɪᴍ.sword = ᴠɪᴄᴛɪᴍ.sword - 1;
                      if (ᴄᴇᴄᴏ.money < 3000) {
                        ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + ᴄᴇᴄᴏ.money;
                        ᴄᴇᴄᴏ.money = 0;
                      } else {
                        ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + MoneySword;
                        ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - MoneySword;
                      }
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠɪᴄᴛɪᴍ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a powerful ⚔️sword that killed you!
*🧈Status:* You Got Arrested!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
                        Foxbot.display
                      );
                    } else if (ᴠɪᴄᴛɪᴍ.laptop > 0) {
                      ᴠɪᴄᴛɪᴍ.laptop = ᴠɪᴄᴛɪᴍ.laptop - 1;
                      if (ᴄᴇᴄᴏ.money < 4000) {
                        ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + ᴄᴇᴄᴏ.money;
                        ᴄᴇᴄᴏ.money = 0;
                      } else {
                        ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + MoneyLaptop;
                        ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - MoneyLaptop;
                      }
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠɪᴄᴛɪᴍ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🧈Status:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a 💻laptop that caught you digitally-robbing!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
                        Foxbot.display
                      );
                    } else if (ᴠɪᴄᴛɪᴍ.charm > 0) {
                      ᴠɪᴄᴛɪᴍ.charm = ᴠɪᴄᴛɪᴍ.charm - 1;
                      if (ᴄᴇᴄᴏ.money < 6000) {
                        ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + ᴄᴇᴄᴏ.money;
                        ᴄᴇᴄᴏ.money = 0;
                      } else {
                        ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money + MoneyCharm;
                        ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - MoneyCharm;
                      }
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠɪᴄᴛɪᴍ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🧈Status:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a 🔮charm that magically saved their bank!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
                        Foxbot.display
                      );
                    }

                    if (ᴠᴇᴄᴏ.money < 1000) {
                      ᴠᴇᴄᴏ.money = 0;
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ᴠᴇᴄᴏ.money;
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓𝐒𝐭𝐚𝐭𝐮𝐬:* @${receiverName} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* Seems Like The Victim Had Gold<1000. _You Got All Their Golds ${
                          ᴠᴇᴄᴏ.money
                        }!
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${receiverName}, visit ${prefix}shop ASAP.

*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${Foxbot.pushname || Foxbot.Tname}, 
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${receiverName}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
                        Foxbot.display
                      );
                    } else {
                      ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) =>
                          Foxbot.handlerror(Foxbot, Foxchat, error)
                        );
                      return await Foxbot.imagebutton(
                        Foxbot,
                        Foxchat,
                        `*🔖Here, ${finalname} for ${
                          Foxbot.pushname || Foxbot.Tname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓𝐒𝐭𝐚𝐭𝐮𝐬:* @${receiverName} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* You Got ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${receiverName}, visit ${prefix}shop ASAP.

*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${Foxbot.pushname || Foxbot.Tname}, 
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${receiverName}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
                        Foxbot.display
                      );
                    }
                  }
                );
              }
            );
          }
        );
      }
    );
  } else {
    return await Foxbot.imagebutton(
      Foxbot,
      Foxchat,
      `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*❌ERROR:* No query provided!
*⚡USAGE:* Reply Person: ${prefix}${finalname}}


┌『 *⚔️Swords* 』
│║⦁ *🛸𝗧𝘆𝗽𝗲:* The medium account safe mode. 
│║⦁ *🧀𝗚𝗼𝗹𝗱:* To buy sword you will need to have 4000gold.
│║⦁ *⚡𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a sword will save your entire balance and will automatically deduct random(1000-2000) from Culprit's account and add it to your account!
┕╚═══════⋑

┌『 *💻laptop* 』
│║⦁ *🛸𝗧𝘆𝗽𝗲:* The hard account safe mode.
│║⦁ *🧀𝗚𝗼𝗹𝗱:* To buy laptop you will need to have 3000gold.
│║⦁ *⚡𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a laptop will save your entire balance and will automatically deduct random(3000-4000) from Culprit's account and add it to your account!
┕╚═══════⋑

┌『 *💻Charm* 』
│║⦁ *🛸𝗧𝘆𝗽𝗲:* The devil account safe mode.
│║⦁ *🧀𝗚𝗼𝗹𝗱:* To buy laptop you will need to have 6000gold.
│║⦁ *⚡𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a charm will save your entire balance and will automatically deduct random(5000-6000) from Culprit's account and add it to your account!
┕╚═══════⋑`,
      Foxbot.display
    );
  }
};
