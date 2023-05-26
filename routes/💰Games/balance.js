("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, νℓкhat, update, store) => {
  await νℓкуяє.Economy.findOne(
    {
      ID: νℓкhat.sender,
    },
    async (error, data) => {
      if (error) {
        return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
      }
      if (!data) {
        new νℓкуяє.Economy({
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
            return νℓкуяє.grab(νℓкуяє, νℓкhat, error);
          });
        return await νℓкуяє.imgB(
          νℓкуяє,
          νℓкhat,
          `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
*🧈Status:* Added To DB!
*💰Balance:* Just Opened Your Account!`,
          "./src/vlkyre.jpg"
        );
      } else {
        return await νℓкуяє.imgB(
          νℓкуяє,
          νℓкhat,
          `*🔖Here, ${pfname} For ${νℓкуяє.pushname || νℓкуяє.Tname}:*
*💰Balance:* ${data.money}`,
          "./src/vlkyre.jpg"
        );
      }
    }
  );
};
