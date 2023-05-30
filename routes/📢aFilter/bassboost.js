//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Nekobot, Nekos, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Nekobot.quoted) {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _Could not find any Audio in context!_

*⚡Usage* 
> _${Nekobot.prefix}${finalname} reply to Audio_`
      );
    }

    if (/audio/.test(Nekobot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await Nekobot.downloadAndSaveMediaMessage(Nekobot.quoted, random);
      Nekobot.exec(
        `${Nekobot.pathFFmpeg} -i ${media} -af "bass=g=10,dynaudnorm=f=150" ${random}.mp3`,
        async (error) => {
          if (error) {
            return Nekos.reply(`*😺You:* ${
              Nekobot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${Nekos.chat}

*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          } else {
            var Thumb = await Nekobot.getBuffer(Nekobot.display);
            return await Nekobot.sendMessage(
              Nekos.chat,
              {
                audio: Nekobot.fs.readFileSync(`${random}.mp3`),
                contextInfo: {
                  externalAdReply: {
                    title: `*🎙️Filter:* _${finalname}_`,
                    body: "Nekobot by magneum™",
                    mediaType: 2,
                    thumbnail: Thumb,
                    mediaUrl: one.url,
                  },
                },
                mimetype: "audio/mpeg",
                fileName: `${one.title}.mp3`,
              },
              { quoted: Nekos }
            ).then(Nekobot.fs.unlinkSync(`${random}.mp3`));
          }
        }
      );
    } else {
      await Nekobot.sendMessage(Nekos.chat, {
        react: {
          text: "❌",
          key: Nekos.key,
        },
      });
      return Nekos.reply(
        `*😥Apologies:* _${Nekobot.pushname || Nekobot.Tname}_

*❌Error* 
> _Could not find any Audio in context!_

*⚡Usage* 
> _${Nekobot.prefix}${finalname} reply to Audio_`
      );
    }
  } catch (error) {
    return Nekobot.handlerror(Nekobot, Nekos, error);
  }
};
