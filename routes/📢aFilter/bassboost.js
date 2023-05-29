//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Voxbot, Voxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Voxbot.quoted) {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _Could not find any Audio in context!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} reply to Audio_`
      );
    }

    if (/audio/.test(Voxbot.mime)) {
      random = Math.floor(Math.random() * 10000);
      media = await Voxbot.downloadAndSaveMediaMessage(Voxbot.quoted, random);
      Voxbot.exec(
        `${Voxbot.pathFFmpeg} -i ${media} -af "bass=g=10,dynaudnorm=f=150" ${random}.mp3`,
        async (error) => {
          if (error) {
            return Voxchat.reply(`*🕊️You:* ${
              Voxbot.pushname || "ɴᴏ_ɴᴀᴍᴇ"
            }\n*📢Id:* ${Voxchat.chat}

*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
          } else {
            var Thumb = await Voxbot.getBuffer(Voxbot.display);
            return await Voxbot.sendMessage(
              Voxchat.chat,
              {
                audio: Voxbot.fs.readFileSync(`${random}.mp3`),
                contextInfo: {
                  externalAdReply: {
                    title: `*🎙️Filter:* _${finalname}_`,
                    body: "Voxbot by magneum™",
                    mediaType: 2,
                    thumbnail: Thumb,
                    mediaUrl: one.url,
                  },
                },
                mimetype: "audio/mpeg",
                fileName: `${one.title}.mp3`,
              },
              { quoted: Voxchat }
            ).then(Voxbot.fs.unlinkSync(`${random}.mp3`));
          }
        }
      );
    } else {
      await Voxbot.sendMessage(Voxchat.chat, {
        react: {
          text: "❌",
          key: Voxchat.key,
        },
      });
      return Voxchat.reply(
        `*😥Apologies:* _${Voxbot.pushname || Voxbot.Tname}_

*❌Error* 
> _Could not find any Audio in context!_

*⚡Usage* 
> _${Voxbot.prefix}${finalname} reply to Audio_`
      );
    }
  } catch (error) {
    return Voxbot.handlerror(Voxbot, Voxchat, error);
  }
};
