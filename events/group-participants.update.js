//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../global.js");
var logs = require("../logs");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logs.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;

module.exports = async (voxbot, update, store) => {
  let metadata = await voxbot.groupMetadata(update.id);
  let participants = update.participants;
  logs.info(update);
  for (let sperson of participants) {
    var imåge;
    try {
      imåge = await voxbot.profilePictureUrl(sperson, "image");
    } catch {
      imåge = "./public/voxbot.jpg";
    }

    if (update.action == "add") {
      return await voxbot
        .sendMessage(
          update.id,
          {
            image: { url: imåge },
            caption: `*🕊️You:* @${sperson.replace(/['@s voxapp.net']/g, "")}
*📢Id:* ${update.id}

> Firstly Welcome.
> I am voxbot Whatsapp Bot.
> To Start using type .help or press below buttons.`,
            footer: "*VLkyre™ By voxbot*\n*💻HomePage:* https://bit.ly/magneum",
            buttons: [
              {
                buttonId: `${voxbot.prefix}Dashboard`,
                buttonText: { displayText: `${voxbot.prefix}Dashboard` },
                type: 1,
              },
              {
                buttonId: `${voxbot.prefix}voxbot`,
                buttonText: { displayText: `${voxbot.prefix}voxbot` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [sperson],
          },
          {
            contextInfo: { mentionedJid: [sperson] },
          }
        )
        .catch((error) => logs.error(error));
    } else if (update.action == "remove") {
      return;
    } else {
      return;
    }
  }
};
