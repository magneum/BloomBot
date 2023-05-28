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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../global.js");
exports.noPrivate = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update) => {
  if (!ꪜᴏxʙᴏᴛ.isSudoWorker)
    await ꪜᴏxʙᴏᴛ.UserPrivate.findOne(
      {
        ID: ᴠᴏxᴄ.sender,
      },
      async (error, user) => {
        if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
        if (!user) {
          new ꪜᴏxʙᴏᴛ.UserPrivate({
            ID: ᴠᴏxᴄ.sender,
            Amount: 1,
          })
            .save()
            .catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
          return await ꪜᴏxʙᴏᴛ.imgB(
            ꪜᴏxʙᴏᴛ,
            ᴠᴏxᴄ,
            `*Dear* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
• This Private Is Being Guarded By Synthoria Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./src/magneum.png"
          );
        } else if (user.Amount < 4) {
          user.Amount = user.Amount + 1;
          await user.save().catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
          return await ꪜᴏxʙᴏᴛ.imgB(
            ꪜᴏxʙᴏᴛ,
            ᴠᴏxᴄ,
            `*Dear* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
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
            .catch((error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error));
          return await ꪜᴏxʙᴏᴛ.updateBlockStatus(ᴠᴏxᴄ.sender, "block").catch(
            (error) => ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error)
          );
        }
      }
    );
};
