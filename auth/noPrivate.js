//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/logger/config");
exports.noPrivate = async (BloomBot, mags, update) => {
  if (!BloomBot.isSudo)
    await BloomBot.UserPrivate.findOne(
      {
        Id: mags.sender,
      },
      async (error, user) => {
        if (error) return BloomBot.handlerror(BloomBot, mags, error);
        if (!user) {
          new BloomBot.UserPrivate({
            Id: mags.sender,
            Amount: 1,
          })
            .save()
            .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
          return await BloomBot.imagebutton(
            BloomBot,
            mags,
            `*Dear* _${BloomBot.pushname || BloomBot.Tname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./public/magneum™.png"
          );
        } else if (user.Amount < 4) {
          user.Amount = user.Amount + 1;
          await user
            .save()
            .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
          return await BloomBot.imagebutton(
            BloomBot,
            mags,
            `*Dear* _${BloomBot.pushname || BloomBot.Tname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
            "./public/magneum™.png"
          );
        } else {
          await user
            .delete()
            .catch((error) => BloomBot.handlerror(BloomBot, mags, error));
          return await BloomBot.updateBlockStatus(mags.sender, "block").catch(
            (error) => BloomBot.handlerror(BloomBot, mags, error)
          );
        }
      }
    );
};
