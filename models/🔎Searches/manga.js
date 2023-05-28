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
<<<<<<< HEAD
module.exports = async (WhatsBot, voxchat, update, store) => {
  try {
    if (!WhatsBot.args.join(" ")) {
      await WhatsBot.sendMessage(voxchat.chat, {
=======
module.exports = async (voxbot, voxchat, update, store) => {
  try {
    if (!voxbot.args.join(" ")) {
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
> _No query provided!_

*⚡Usage* 
<<<<<<< HEAD
> _${WhatsBot.prefix}${finalname} manga-name_`
      );
    }

    var manga = new WhatsBot.Manga();
    var response = await manga.searchManga(WhatsBot.args.join(" "));
=======
> _${voxbot.prefix}${finalname} manga-name_`
      );
    }

    var manga = new voxbot.Manga();
    var response = await manga.searchManga(voxbot.args.join(" "));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    var Found = `*🎀Title:* ${response.data[0].title}`;
    Found += `*📈Status:* ${response.data[0].status}`;
    Found += `*🌸Total Volumes:* ${response.data[0].volumes}`;
    Found += `*🎗Total Chapters:* ${response.data[0].chapters}`;
    Found += `*🧧Genres:*`;
    for (var i = 0; i < response.data[0].genres.length; i++) {
      Found += `\t\t\t\t\t\t\t\t*${response.data[0].genres[i].name}*`;
    }
    Found += `*✨Published on:* ${response.data[0].published.from}`;
    Found += `*🌟Score:* ${response.data[0].scored}`;
    Found += `*🎐Popularity:* ${response.data[0].popularity}`;
    Found += `*🎏Favorites:* ${response.data[0].favorites}`;
    Found += `*✍Authors:*`;
    for (var i = 0; i < response.data[0].authors.length; i++) {
      Found += `\t\t\t\t\t\t\t\t\t*${response.data[0].authors[i].name}* *(${response.data[0].authors[0].type})*`;
    }
    Found += `*🌐URL:* ${response.data[0].url}`;
    if (response.data[0].background !== null)
      Found += `*🎆Background:* ${response.data[0].background}`;
    Found += `*❄️Description:* ${response.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ``
    )}`;
<<<<<<< HEAD
    await WhatsBot.imagebutton(
      WhatsBot,
      voxchat,
      `*🔖Here, ${finalname} for ${WhatsBot.pushname || WhatsBot.Tname}:* 
=======
    await voxbot.imagebutton(
      voxbot,
      voxchat,
      `*🔖Here, ${finalname} for ${voxbot.pushname || voxbot.Tname}:* 
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
> ${Found}`,
      response.data[0].images.jpg.large_image_url
    );
  } catch (error) {
<<<<<<< HEAD
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
=======
    return voxbot.handlerror(voxbot, voxchat, error);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
};
