// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  try {
    await ѕуηтнσяiα.Economy.findOne(
      {
        ID: νℓкhat.sender,
      },
      async (error, userEco) => {
        if (error) {
          return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
        }

        if (!userEco) {
          let newUser = new ѕуηтнσяiα.Economy({
            ID: νℓкhat.sender,
            money: 0,
            daily: 0,
            timeout: 86400000,
            fishdone: 0,
            fishtimeout: 1800000,
            workdone: 0,
            worktimeout: 900000,
          });
          await newUser.save().catch((error) => {
            return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
          });
          return await ѕуηтнσяiα.imgB(
            ѕуηтнσяiα,
            νℓкhat,
            `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
*🧈Status:* Added To DB!
◇ *Type:* _Just Bought A Zoo!_`,
            "./src/voxbot.jpg"
          );
        } else {
          await ѕуηтнσяiα.Zoology.findOne(
            {
              ID: νℓкhat.sender,
            },
            async (error, userZoo) => {
              if (error) return Caught(ӄryӄnz, Synthia, error);
              if (!userZoo) {
                new ѕуηтнσяiα.Zoology({
                  ID: νℓкhat.sender,
                  zoodone: Date.now(),
                  zootimeout: 1800000,
                })
                  .save()
                  .catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                return await ѕуηтнσяiα.imgB(
                  ѕуηтнσяiα,
                  νℓкhat,
                  `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}:*
🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
🐓*Type:* _Nothing Found_`,
                  "./src/voxbot.jpg"
                );
              } else {
                if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
                  let time = ѕуηтнσяiα.ms(
                    userZoo.zootimeout - (Date.now() - userZoo.zoodone)
                  );
                  return await ѕуηтнσяiα.imgB(
                    ѕуηтнσяiα,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      ѕуηтнσяiα.Tname || ѕуηтнσяiα.pushname
                    }:*
❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`,
                    "./src/voxbot.jpg"
                  );
                } else {
                  let zooID = Math.floor(Math.random() * 10) + 1;
                  let rarity;
                  if (zooID < 5) rarity = `small`;
                  else if (zooID < 8) rarity = `medium`;
                  else if (zooID < 9) rarity = `big`;
                  else if (zooID < 10) rarity = `large`;
                  else rarity = `legendary`;
                  let anim = ѕуηтнσяiα.animals[rarity];
                  let worth =
                    Math.floor(Math.random() * (anim.max - anim.min + 1)) +
                    anim.min;
                  userEco.money = userEco.money + worth;
                  userZoo.zoodone = Date.now();
                  userZoo.zootimeout = 1800000;
                  userZoo.save().catch((error) => {
                    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                  });
                  return await ѕуηтнσяiα.imgB(
                    ѕуηтнσяiα,
                    νℓкhat,
                    `*🔖Here, ${pfname} For @${
                      ѕуηтнσяiα.Tname || ѕуηтнσяiα.pushname
                    }:*
🐆𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
💵𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_`,
                    "./src/voxbot.jpg"
                  );
                }
              }
            }
          );
        }
      }
    );
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
