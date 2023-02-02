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
exports.noPrivate = async (νℓкуяє, vcнaт, update) => {
  if (!νℓкуяє.isSudoWorker)
    await νℓкуяє.UserPrivate.findOne(
      {
        ID: vcнaт.sender,
      },
      async (error, user) => {
        if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
        if (!user) {
          new νℓкуяє.UserPrivate({
            ID: vcнaт.sender,
            Amount: 1,
          })
            .save()
            .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
          return await νℓкуяє.imgB(
            νℓкуяє,
            vcнaт,
            `*Dear* _${νℓкуяє.pushname || νℓкуяє.Tname}_
• This Private Is Being Guarded By Vlkyre Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./Gallery/magneum.png"
          );
        } else if (user.Amount < 4) {
          user.Amount = user.Amount + 1;
          await user.save().catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
          return await νℓкуяє.imgB(
            νℓкуяє,
            vcнaт,
            `*Dear* _${νℓкуяє.pushname || νℓкуяє.Tname}_
• This Private Is Being Guarded By Vlkyre Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./Gallery/magneum.png"
          );
        } else {
          await user
            .delete()
            .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
          return await νℓкуяє
            .updateBlockStatus(vcнaт.sender, "block")
            .catch((error) => νℓкуяє.grab(νℓкуяє, vcнaт, error));
        }
      }
    );
};
