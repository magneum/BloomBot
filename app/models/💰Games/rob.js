//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("#/config/index.js");
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
  const ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
  const MoneyLaptop = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
  const MoneyCharm = Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000;
  const MoneySword = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
  if (BloomBot.mentionByReply) {
    const receiver =
      chatkey.mtype == "extendedTextMessage" &&
      chatkey.message.extendedTextMessage.contextInfo != null
        ? chatkey.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const receiverName = await BloomBot.getName(receiver);
    if (receiver === chatkey.sender) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _Can't rob your own bank_`,
      );
    }

    BloomBot.Economy.findOne(
      {
        Id: chatkey.sender,
      },
      async (error, ᴄᴇᴄᴏ) => {
        if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
        BloomBot.Economy.findOne(
          {
            Id: receiver,
          },
          async (error, ᴠᴇᴄᴏ) => {
            if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
            if (!ᴠᴇᴄᴏ) {
              const newUser = new BloomBot.Economy({
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
                .catch(async (error) => BloomBot.handlerror(BloomBot, chatkey, error));
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 1/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName}'s Bank Guard Caught You and Took You To The Jail!
*🧈Status:* You Got Arrested and Took 0gold.ReTry Again!`,
                BloomBot.display,
              );
            }

            if (!ᴄᴇᴄᴏ) {
              const newUser = new BloomBot.Economy({
                Id: chatkey.sender,
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
                .catch(async (error) => BloomBot.handlerror(BloomBot, chatkey, error));
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 2/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* You are the worst robber.
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:  Fell On a pool and died!.ReTry!`,
                BloomBot.display,
              );
            }

            if (ᴄᴇᴄᴏ.money < 1000) {
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* You Will Need Atleast 1000 in your bank before you can rob someone!
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻: If You Get Caught, ᴠɪᴄᴛɪᴍ will charge you money to spare your life.`,
                BloomBot.display,
              );
            }

            if (ᴠᴇᴄᴏ.money < 1000) {
              return await BloomBot.imagebutton(
                BloomBot,
                chatkey,
                `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*@${receiverName}*
*❌𝗘𝗿𝗿𝗼𝗿:*  needs atleast 1000gold in their account before you can rob them!
*🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:* Broke AF! Leave This Begger Alone!`,
                BloomBot.display,
              );
            }

            Robbery.findOne(
              {
                Id: chatkey.sender,
              },
              async (error, ᴄᴜʟᴘʀɪᴛ) => {
                if (error) return BloomBot.handlerror(BloomBot, chatkey, error);
                Robbery.findOne(
                  {
                    Id: receiver,
                  },
                  async (error, ᴠɪᴄᴛɪᴍ) => {
                    if (error)
                      return BloomBot.handlerror(BloomBot, chatkey, error);
                    if (!ᴠɪᴄᴛɪᴍ) {
                      const newUser = new Robbery({
                        Id: receiver,
                        sword: 0,
                        laptop: 0,
                        charm: 0,
                        CurrentRobberyTime: Date.now(),
                        PermanentRobberyTime: 900000,
                      });
                      await newUser
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 3/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName}'s Bank Police Caught You and Took You To The Jail!
*🧈Status:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰Balance:* ${ᴄᴇᴄᴏ.money}`,
                        BloomBot.display,
                      );
                    }

                    if (!ᴄᴜʟᴘʀɪᴛ) {
                      const newUser = new Robbery({
                        Id: chatkey.sender,
                        sword: 0,
                        laptop: 0,
                        charm: 0,
                        CurrentRobberyTime: Date.now(),
                        PermanentRobberyTime: 900000,
                      });
                      await newUser
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 4/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} caught You Red Handed and Sent You To The Jail!
*🧈Status:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰Balance:* ${ᴄᴇᴄᴏ.money}`,
                        BloomBot.display,
                      );
                    }

                    if (
                      ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
                        (Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime) >
                      0
                    ) {
                      const Time = ms(
                        ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
                          (Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime),
                      );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*❌𝗘𝗿𝗿𝗼𝗿:* You've Recently Tried Robbing Someone!.
🕐𝐑𝐨𝐛 𝗔𝗴𝗮𝗶𝗻: ${Time.minutes}m ${Time.seconds}s.`,
                        BloomBot.display,
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
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a powerful ⚔️sword that killed you!
*🧈Status:* You Got Arrested!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
                        BloomBot.display,
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
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🧈Status:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a 💻laptop that caught you digitally-robbing!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
                        BloomBot.display,
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
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🧈Status:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a 🔮charm that magically saved their bank!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
                        BloomBot.display,
                      );
                    }

                    if (ᴠᴇᴄᴏ.money < 1000) {
                      ᴠᴇᴄᴏ.money = 0;
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ᴠᴇᴄᴏ.money;
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓Status:* @${receiverName} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* Seems Like The Victim Had Gold<1000. _You Got All Their Golds ${
                          ᴠᴇᴄᴏ.money
                        }!
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${receiverName}, visit ${prefix}shop ASAP.

*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${BloomBot.pushname || BloomBot.tagname}, 
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${receiverName}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
                        BloomBot.display,
                      );
                    } else {
                      ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch(async (error) =>
                          BloomBot.handlerror(BloomBot, chatkey, error),
                        );
                      return await BloomBot.imagebutton(
                        BloomBot,
                        chatkey,
                        `*🌻Here, ${currFile} for ${
                          BloomBot.pushname || BloomBot.tagname
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓Status:* @${receiverName} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* You Got ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${receiverName}, visit ${prefix}shop ASAP.

*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${BloomBot.pushname || BloomBot.tagname}, 
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${receiverName}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
                        BloomBot.display,
                      );
                    }
                  },
                );
              },
            );
          },
        );
      },
    );
  } else {
    return await BloomBot.imagebutton(
      BloomBot,
      chatkey,
      `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*❌ERROR:* No query provided!
*🌻USAGE:* Reply Person: ${prefix}${currFile}}


┌『 *⚔️Swords* 』
│║⦁ *🛸𝗧𝘆𝗽𝗲:* The medium account safe mode. 
│║⦁ *🧀𝗚𝗼𝗹𝗱:* To buy sword you will need to have 4000gold.
│║⦁ *🌻𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a sword will save your entire balance and will automatically deduct random(1000-2000) from Culprit's account and add it to your account!
┕╚═══════⋑

┌『 *💻laptop* 』
│║⦁ *🛸𝗧𝘆𝗽𝗲:* The hard account safe mode.
│║⦁ *🧀𝗚𝗼𝗹𝗱:* To buy laptop you will need to have 3000gold.
│║⦁ *🌻𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a laptop will save your entire balance and will automatically deduct random(3000-4000) from Culprit's account and add it to your account!
┕╚═══════⋑

┌『 *💻Charm* 』
│║⦁ *🛸𝗧𝘆𝗽𝗲:* The devil account safe mode.
│║⦁ *🧀𝗚𝗼𝗹𝗱:* To buy laptop you will need to have 6000gold.
│║⦁ *🌻𝗣𝗲𝗿𝗸𝘀:* If robbery attempt was made on your account, a charm will save your entire balance and will automatically deduct random(5000-6000) from Culprit's account and add it to your account!
┕╚═══════⋑`,
      BloomBot.display,
    );
  }
};
