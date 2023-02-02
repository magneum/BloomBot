("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../global.js");
exports.vimium = async (νℓкуяє, vcнaт, update, store) => {
  if (νℓкуяє.isSudoWorker) {
    await νℓкуяє.sendMessage(vcнaт.chat, {
      react: {
        text: "🔖",
        key: vcнaт.key,
      },
    });
    return await require("../System/library")(νℓкуяє, vcнaт, update, store);
  } else
    await νℓкуяє.vimium.findOne(
      {
        ID: vcнaт.sender,
      },
      async (error, userVium) => {
        if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
        if (!userVium) {
          new νℓкуяє.vimium({
            ID: vcнaт.sender,
            Limits: 30,
            currTime: Date.now(),
            permTime: 86400000, //3600000
          })
            .save()
            .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
          return await require("../System/library")(
            νℓкуяє,
            vcнaт,
            update,
            store
          );
        }
        if (userVium.Limits < 1) {
          if (userVium.permTime - (Date.now() - userVium.currTime) > 0) {
            let clock = νℓкуяє.ms(
              userVium.permTime - (Date.now() - userVium.currTime)
            );
            return await νℓкуяє.imgB(
              νℓкуяє,
              vcнaт,
              `*Dear* _${νℓкуяє.pushname || νℓкуяє.Tname}_
> You have used up all your free commands for the day.
*💵Limit:* ${userVium.Limits - 1}/30
*💵Renew:* ${clock.hours}h ${clock.minutes}m ${clock.seconds}s`,
              "./src/vlkyre.jpg"
            );
          }
        } else {
          await νℓкуяє.sendMessage(vcнaт.chat, {
            react: {
              text: "🔖",
              key: vcнaт.key,
            },
          });
          userVium.currTime = Date.now();
          userVium.Limits = userVium.Limits - 1;
          userVium.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
          return await require("../System/library")(
            νℓкуяє,
            vcнaт,
            update,
            store
          );
        }
      }
    );
};
