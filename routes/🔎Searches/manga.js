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
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (OpenBot, ocID, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!OpenBot.args.join(" ")) {
      await OpenBot.sendMessage(ocID.chat, {
        react: {
          text: "❌",
          key: ocID.key,
        },
      });
      return ocID.reply(
        `*😥Apologies:* _${OpenBot.pushname || OpenBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${OpenBot.prefix}${finalname} manga-name_`
      );
    }

    var manga = new OpenBot.Manga();
    var response = await manga.searchManga(OpenBot.args.join(" "));
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
    await OpenBot.imagebutton(
      OpenBot,
      ocID,
      `*🔖Here, ${finalname} for ${OpenBot.pushname || OpenBot.Tname}:* 
> ${Found}`,
      response.data[0].images.png.large_image_url
    );
  } catch (error) {
    return OpenBot.handlerror(OpenBot, ocID, error);
  }
};
