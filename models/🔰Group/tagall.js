<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
require("../../logs/global.js");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
<<<<<<< HEAD
  WhatsBot,
=======
  voxbot,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  voxchat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!voxchat.isGroup) {
<<<<<<< HEAD
      await WhatsBot.sendMessage(voxchat.chat, {
=======
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error*  
> _It's a group command!_`
      );
    }
<<<<<<< HEAD
    if (!isAdmin && !WhatsBot.isSudo) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
    if (!isAdmin && !voxbot.isSudo) {
      await voxbot.sendMessage(voxchat.chat, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
<<<<<<< HEAD
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_
=======
        `*😥Apologies:* _${voxbot.pushname || voxbot.Tname}_
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

*❌Error* 
> _This is an Admin only Command!_`
      );
    }

    try {
<<<<<<< HEAD
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await WhatsBot.profilePictureUrl(voxchat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/WhatsBot.jpg";
    }
    if (WhatsBot.args) {
      return await WhatsBot.sendMessage(
=======
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await voxbot.profilePictureUrl(voxchat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./public/voxbot.jpg";
    }
    if (voxbot.args) {
      return await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        voxchat.chat,
        {
          image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
          caption: `*📢Id:* ${voxchat.chat}
<<<<<<< HEAD
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${WhatsBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${WhatsBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: \n${WhatsBot.args.join(" ")}`,
=======
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${voxbot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: \n${voxbot.args.join(" ")}`,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          mentions: await participants.map((a) => a.id),
        },
        { quoted: voxchat }
      );
    } else {
<<<<<<< HEAD
      return await WhatsBot.sendMessage(
=======
      return await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        voxchat.chat,
        {
          image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
          caption: `*📢Id:* ${voxchat.chat}
<<<<<<< HEAD
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${WhatsBot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${WhatsBot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
=======
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${voxbot.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: \nAttention Everyone`,
          mentions: await participants.map((a) => a.id),
        },
        { quoted: voxchat }
      );
    }
  } catch (error) {
<<<<<<< HEAD
    return WhatsBot.handlerror(WhatsBot, voxchat);
=======
    return voxbot.handlerror(voxbot, voxchat);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
