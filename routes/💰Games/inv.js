//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    Foxbot.Robbery.findOne(
      {
        Id: Foxchat.sender,
      },
      async (error, userRob) => {
        if (error) return Foxbot.handlerror(Foxbot, Foxchat, error);
        if (!userRob) {
          new Foxbot.Robbery({
            Id: Foxchat.sender,
            sword: 0,
            laptop: 0,
            charm: 0,
            CurrentRobberyTime: 0,
            PermanentRobberyTime: 900000,
          })
            .save()
            .catch((error) => Foxbot.handlerror(Foxbot, Foxchat, error));
          return await Foxbot.imagebutton(
            Foxbot,
            Foxchat,
            `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
*🧈Status:* Added To DB!
*💰Balance:* Just Opened Your Account!`,
            Foxbot.display
          );
        }
        return await Foxbot.imagebutton(
          Foxbot,
          Foxchat,
          `*🔖Here, ${finalname} for ${Foxbot.pushname || Foxbot.Tname}:*
⚔️ 𝗦𝘄𝗼𝗿𝗱: ${userRob.sword}
💻 𝗟𝗮𝗽𝘁𝗼𝗽: ${userRob.laptop}
🔮 𝗖𝗵𝗮𝗿𝗺: ${userRob.charm}`,
          Foxbot.display
        );
      }
    );
  } catch (error) {
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};
