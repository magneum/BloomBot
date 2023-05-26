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
exports.noPrivate = async (VօxB໐t, νℓкhat, update) => {
  if (!VօxB໐t.isSudoWorker)
    await VօxB໐t.UserPrivate.findOne(
      {
        ID: νℓкhat.sender,
      },
      async (error, user) => {
        if (error) return VօxB໐t.grab(VօxB໐t, νℓкhat, error);
        if (!user) {
          new VօxB໐t.UserPrivate({
            ID: νℓкhat.sender,
            Amount: 1,
          })
            .save()
            .catch((error) => VօxB໐t.grab(VօxB໐t, νℓкhat, error));
          return await VօxB໐t.imgB(
            VօxB໐t,
            νℓкhat,
            `*Dear* _${VօxB໐t.pushname || VօxB໐t.Tname}_
• This Private Is Being Guarded By Synthoria Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./src/magneum.png"
          );
        } else if (user.Amount < 4) {
          user.Amount = user.Amount + 1;
          await user
            .save()
            .catch((error) => VօxB໐t.grab(VօxB໐t, νℓкhat, error));
          return await VօxB໐t.imgB(
            VօxB໐t,
            νℓкhat,
            `*Dear* _${VօxB໐t.pushname || VօxB໐t.Tname}_
• This Private Is Being Guarded By Synthoria Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./src/magneum.png"
          );
        } else {
          await user
            .delete()
            .catch((error) => VօxB໐t.grab(VօxB໐t, νℓкhat, error));
          return await VօxB໐t.updateBlockStatus(νℓкhat.sender, "block").catch(
            (error) => VօxB໐t.grab(VօxB໐t, νℓкhat, error)
          );
        }
      }
    );
};
