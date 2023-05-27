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
  try {
    await VօxB໐t.Economy.findOne(
      {
        ID: ᴠᴏxᴄ.sender,
      },
      async (error, userEco) => {
        if (error) {
          return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
        }

        if (!userEco) {
          new VօxB໐t.Economy({
            ID: ᴠᴏxᴄ.sender,
            money: 0,
            daily: 0,
            timeout: 0,
            fishdone: Date.now(),
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          })
            .save()
            .catch((error) => {
              return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
            });
          return await VօxB໐t.imgB(
            VօxB໐t,
            ᴠᴏxᴄ,
            `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
*🧈Status:* Added To DB!
*💰Balance:* Just Opened Your Account!`,
            "./src/voxbot.jpg"
          );
        } else {
          if (userEco.fishtimeout - (Date.now() - userEco.fishdone) > 0) {
            let time = VօxB໐t.ms(
              userEco.fishtimeout - (Date.now() - userEco.fishdone)
            );
            return await VօxB໐t.imgB(
              VօxB໐t,
              ᴠᴏxᴄ,
              `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Casted A Line. 
🕐𝗙𝗶𝘀𝗵 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
              "./src/voxbot.jpg"
            );
          } else {
            let fishID = Math.floor(Math.random() * 10) + 1;
            let rarity;
            if (fishID < 5) rarity = `junk`;
            else if (fishID < 8) rarity = `common`;
            else if (fishID < 9) rarity = `uncommon`;
            else if (fishID < 10) rarity = `rare`;
            else rarity = `legendary`;
            let fishh = VօxB໐t.Fishes[rarity];
            let worth =
              Math.floor(Math.random() * (fishh.max - fishh.min + 1)) +
              fishh.min;
            userEco.money = userEco.money + worth;
            userEco.fishdone = Date.now();
            userEco.fishtimeout = 1800000;
            userEco.save().catch((error) => {
              return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
            });
            return await VօxB໐t.imgB(
              VօxB໐t,
              ᴠᴏxᴄ,
              `*🔖Here, ${pfname} For ${VօxB໐t.pushname || VօxB໐t.Tname}:*
🎣𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: You Cast Out Your Line And Caught A ${fishh.symbol}.
💵𝗪𝗼𝗿𝘁𝗵: It'd Sell For Around *${worth}*!
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: ${rarity}`,
              "./src/voxbot.jpg"
            );
          }
        }
      }
    );
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
  }
};
