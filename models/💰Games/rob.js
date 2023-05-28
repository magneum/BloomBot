//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
<<<<<<< HEAD
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
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
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ᴠᴏxʙᴏᴛ вσт by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
=======
module.exports = async (voxbot, voxchat, update, store) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  let ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
  let MoneyLaptop = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;
  let MoneyCharm = Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000;
  let MoneySword = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
<<<<<<< HEAD
  if (WhatsBot.mentionByReply) {
=======
  if (voxbot.mentionByReply) {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let receiver =
      voxchat.mtype == "extendedTextMessage" &&
      voxchat.message.extendedTextMessage.contextInfo != null
        ? voxchat.message.extendedTextMessage.contextInfo.participant || ""
        : "";
<<<<<<< HEAD
    let receiverName = await WhatsBot.getName(receiver);
    if (receiver === voxchat.sender) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    let receiverName = await voxbot.getName(receiver);
    if (receiver === voxchat.sender) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _Can't rob your own bank_`
      );
    }

<<<<<<< HEAD
    WhatsBot.Economy.findOne(
=======
    voxbot.Economy.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      {
        Id: voxchat.sender,
      },
      async (error, ᴄᴇᴄᴏ) => {
<<<<<<< HEAD
        if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
        WhatsBot.Economy.findOne(
=======
        if (error) return voxbot.handlerror(voxbot, voxchat, error);
        voxbot.Economy.findOne(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          {
            Id: receiver,
          },
          async (error, ᴠᴇᴄᴏ) => {
<<<<<<< HEAD
            if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
            if (!ᴠᴇᴄᴏ) {
              let newUser = new WhatsBot.Economy({
=======
            if (error) return voxbot.handlerror(voxbot, voxchat, error);
            if (!ᴠᴇᴄᴏ) {
              let newUser = new voxbot.Economy({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
                .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
                .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 1/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName}'s Bank Guard Caught You and Took You To The Jail!
*🧈Status:* You Got Arrested and Took 0gold.ReTry Again!`,
<<<<<<< HEAD
                "./public/WhatsBot.jpg"
=======
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            if (!ᴄᴇᴄᴏ) {
<<<<<<< HEAD
              let newUser = new WhatsBot.Economy({
=======
              let newUser = new voxbot.Economy({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                Id: voxchat.sender,
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
<<<<<<< HEAD
                .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
                .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 2/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* You are the worst robber.
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:  Fell On a pool and died!.ReTry!`,
<<<<<<< HEAD
                "./public/WhatsBot.jpg"
=======
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            if (ᴄᴇᴄᴏ.money < 1000) {
<<<<<<< HEAD
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* You Will Need Atleast 1000 in your bank before you can rob someone!
🍌‍𝗥𝗲𝗮𝘀𝗼𝗻: If You Get Caught, ᴠɪᴄᴛɪᴍ will charge you money to spare your life.`,
<<<<<<< HEAD
                "./public/WhatsBot.jpg"
=======
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            if (ᴠᴇᴄᴏ.money < 1000) {
<<<<<<< HEAD
              return await WhatsBot.imagebutton(
                WhatsBot,
                voxchat,
                `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
              return await voxbot.imagebutton(
                voxbot,
                voxchat,
                `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*@${receiverName}*
*❌𝗘𝗿𝗿𝗼𝗿:*  needs atleast 1000gold in their account before you can rob them!
*🍌‍𝗥𝗲𝗮𝘀𝗼𝗻:* Broke AF! Leave This Begger Alone!`,
<<<<<<< HEAD
                "./public/WhatsBot.jpg"
=======
                "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
              );
            }

            Robbery.findOne(
              {
                Id: voxchat.sender,
              },
              async (error, ᴄᴜʟᴘʀɪᴛ) => {
<<<<<<< HEAD
                if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
                if (error) return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                Robbery.findOne(
                  {
                    Id: receiver,
                  },
                  async (error, ᴠɪᴄᴛɪᴍ) => {
<<<<<<< HEAD
                    if (error) return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
                    if (error) return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                    if (!ᴠɪᴄᴛɪᴍ) {
                      let newUser = new Robbery({
                        Id: receiver,
                        sword: 0,
                        laptop: 0,
                        charm: 0,
                        CurrentRobberyTime: Date.now(),
                        PermanentRobberyTime: 900000,
                      });
                      await newUser
                        .save()
<<<<<<< HEAD
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 3/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName}'s Bank Police Caught You and Took You To The Jail!
*🧈Status:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰Balance:* ${ᴄᴇᴄᴏ.money}`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                      );
                    }

                    if (!ᴄᴜʟᴘʀɪᴛ) {
                      let newUser = new Robbery({
                        Id: voxchat.sender,
                        sword: 0,
                        laptop: 0,
                        charm: 0,
                        CurrentRobberyTime: Date.now(),
                        PermanentRobberyTime: 900000,
                      });
                      await newUser
                        .save()
<<<<<<< HEAD
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*🔥𝐁𝐚𝐧𝐤 𝗦𝗮𝗳𝗲𝘁𝘆:* 4/4 used
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} caught You Red Handed and Sent You To The Jail!
*🧈Status:* You Got Arrested and Took ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}gold!
*💰Balance:* ${ᴄᴇᴄᴏ.money}`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                      );
                    }

                    if (
                      ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
                        (Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime) >
                      0
                    ) {
                      let Time = ms(
                        ᴄᴜʟᴘʀɪᴛ.PermanentRobberyTime -
                          (Date.now() - ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime)
                      );
<<<<<<< HEAD
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝

*❌𝗘𝗿𝗿𝗼𝗿:* You've Recently Tried Robbing Someone!.
🕐𝐑𝐨𝐛 𝗔𝗴𝗮𝗶𝗻: ${Time.minutes}m ${Time.seconds}s.`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a powerful ⚔️sword that killed you!
*🧈Status:* You Got Arrested!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🧈Status:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a 💻laptop that caught you digitally-robbing!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴜʟᴘʀɪᴛ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴠᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🧈Status:* You Got Arrested!
*❌𝗘𝗿𝗿𝗼𝗿:* @${receiverName} had a 🔮charm that magically saved their bank!

**💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲* *
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${ᴄᴇᴄᴏ.money}
*💀𝐕𝐢𝐜𝐭𝐢𝐦:* ${ᴠᴇᴄᴏ.money}`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                      );
                    }

                    if (ᴠᴇᴄᴏ.money < 1000) {
                      ᴠᴇᴄᴏ.money = 0;
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ᴠᴇᴄᴏ.money;
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠᴇᴄᴏ
                        .save()
<<<<<<< HEAD
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓𝐒𝐭𝐚𝐭𝐮𝐬:* @${receiverName} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* Seems Like The Victim Had Gold<1000. _You Got All Their Golds ${
                          ᴠᴇᴄᴏ.money
                        }!
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${receiverName}, visit ${prefix}shop ASAP.

<<<<<<< HEAD
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${WhatsBot.pushname || WhatsBot.Tname}, 
=======
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${voxbot.pushname || voxbot.Tname}, 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${receiverName}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                      );
                    } else {
                      ᴠᴇᴄᴏ.money = ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      ᴄᴇᴄᴏ.money = ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ;
                      ᴄᴜʟᴘʀɪᴛ.CurrentRobberyTime = Date.now();
                      await ᴠᴇᴄᴏ
                        .save()
<<<<<<< HEAD
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => WhatsBot.handlerror(WhatsBot, voxchat, error));
                      return await WhatsBot.imagebutton(
                        WhatsBot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          WhatsBot.pushname || WhatsBot.Tname
=======
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      await ᴄᴇᴄᴏ
                        .save()
                        .catch((error) => voxbot.handlerror(voxbot, voxchat, error));
                      return await voxbot.imagebutton(
                        voxbot,
                        voxchat,
                        `*🔖Here, ${finalname} for ${
                          voxbot.pushname || voxbot.Tname
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                        }:*
╔◇══════════◇╗
┊ 𝐁𝐚𝐧𝐤🚓𝐑𝐨𝐛𝐛𝐞𝐫𝐲
╚◇══════════◇╝


*🔓𝐒𝐭𝐚𝐭𝐮𝐬:* @${receiverName} _Got Robbed!_
*👑𝗔𝗺𝗼𝘂𝗻𝘁:* You Got ${ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}
*⚰️𝗥𝗲𝗮𝘀𝗼𝗻:* Didn't have any safety stuffs. @${receiverName}, visit ${prefix}shop ASAP.

<<<<<<< HEAD
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${WhatsBot.pushname || WhatsBot.Tname}, 
=======
*🐌𝐂𝐮𝐥𝐩𝐫𝐢𝐭:* ${voxbot.pushname || voxbot.Tname}, 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴄᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴄᴇᴄᴏ.money + ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}

*💀𝐕𝐢𝐜𝐭𝐢𝐦:* @${receiverName}
*❓𝗕𝗲𝗳𝗼𝗿𝗲:* ${ᴠᴇᴄᴏ.money}
*💸𝗔𝗳𝘁𝗲𝗿:* ${ᴠᴇᴄᴏ.money - ʀᴀɴᴅᴏᴍ_ᴍᴏɴᴇʏ}`,
<<<<<<< HEAD
                        "./public/WhatsBot.jpg"
=======
                        "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
    return await WhatsBot.imagebutton(
      WhatsBot,
      voxchat,
      `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:*
=======
    return await voxbot.imagebutton(
      voxbot,
      voxchat,
      `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:*
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
      "./public/WhatsBot.jpg"
=======
      "./public/voxbot.jpg"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    );
  }
};
