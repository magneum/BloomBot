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
require("../global.js");
exports.vimium = async (ѕуηтнiα, νℓкhat, update, store) => {
  if (ѕуηтнiα.isSudoWorker) {
    await ѕуηтнiα.sendMessage(νℓкhat.chat, {
      react: {
        text: "🔖",
        key: νℓкhat.key,
      },
    });
    return await require("../System/library")(ѕуηтнiα, νℓкhat, update, store);
  } else
    await ѕуηтнiα.vimium.findOne(
      {
        ID: νℓкhat.sender,
      },
      async (error, userVium) => {
        if (error) return ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error);
        if (!userVium) {
          new ѕуηтнiα.vimium({
            ID: νℓкhat.sender,
            Limits: 30,
            currTime: Date.now(),
            permTime: 86400000, //3600000
          })
            .save()
            .catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
          return await require("../System/library")(
            ѕуηтнiα,
            νℓкhat,
            update,
            store
          );
        }
        if (userVium.Limits < 1) {
          if (userVium.permTime - (Date.now() - userVium.currTime) > 0) {
            let clock = ѕуηтнiα.ms(
              userVium.permTime - (Date.now() - userVium.currTime)
            );
            return await ѕуηтнiα.imgB(
              ѕуηтнiα,
              νℓкhat,
              `*Dear* _${ѕуηтнiα.pushname || ѕуηтнiα.Tname}_
> You have used up all your free commands for the day.
*💵Limit:* ${userVium.Limits - 1}/30
*💵Renew:* ${clock.hours}h ${clock.minutes}m ${clock.seconds}s`,
              "./src/voxbot.jpg"
            );
          }
        } else {
          await ѕуηтнiα.sendMessage(νℓкhat.chat, {
            react: {
              text: "🔖",
              key: νℓкhat.key,
            },
          });
          userVium.currTime = Date.now();
          userVium.Limits = userVium.Limits - 1;
          userVium
            .save()
            .catch((error) => ѕуηтнiα.grab(ѕуηтнiα, νℓкhat, error));
          return await require("../System/library")(
            ѕуηтнiα,
            νℓкhat,
            update,
            store
          );
        }
      }
    );
};
