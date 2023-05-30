//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/logger/global");
exports.noPrivate = async (OpenBot, ocID, update) => {
  if (!OpenBot.isSudo)
    await OpenBot.UserPrivate.findOne(
      {
        Id: ocID.sender,
      },
      async (error, user) => {
        if (error) return OpenBot.handlerror(OpenBot, ocID, error);
        if (!user) {
          new OpenBot.UserPrivate({
            Id: ocID.sender,
            Amount: 1,
          })
            .save()
            .catch((error) => OpenBot.handlerror(OpenBot, ocID, error));
          return await OpenBot.imagebutton(
            OpenBot,
            ocID,
            `*Dear* _${OpenBot.pushname || OpenBot.Tname}_
• This Private Is Being Guarded By OpenBot Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./public/magneum.png"
          );
        } else if (user.Amount < 4) {
          user.Amount = user.Amount + 1;
          await user
            .save()
            .catch((error) => OpenBot.handlerror(OpenBot, ocID, error));
          return await OpenBot.imagebutton(
            OpenBot,
            ocID,
            `*Dear* _${OpenBot.pushname || OpenBot.Tname}_
• This Private Is Being Guarded By OpenBot Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./public/magneum.png"
          );
        } else {
          await user
            .delete()
            .catch((error) => OpenBot.handlerror(OpenBot, ocID, error));
          return await OpenBot.updateBlockStatus(ocID.sender, "block").catch(
            (error) => OpenBot.handlerror(OpenBot, ocID, error)
          );
        }
      }
    );
};
