//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var ytdl = require("ytdl-secktor");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  NekoBot,
  nekos,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!NekoBot.args) {
      await NekoBot.sendMessage(nekos.chat, {
        react: {
          text: "❌",
          key: nekos.key,
        },
      });
      return nekos.reply(
        `*😥Apologies:* _${NekoBot.pushname || NekoBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${NekoBot.prefix}${finalname} song-name_`
      );
    } else
      NekoBot.magfetch(
        NekoBot,
        "https://magneum.vercel.app/api/youtube_sr?q=" + NekoBot.args.join(" ")
      ).then(async (response) => {
        var fetchedata = response.data;
        console.log(fetchedata);

        return await NekoBot.sendMessage(
          nekos.chat,
          {
            image: { url: fetchedata.youtube_search[0].HQ_IMAGE },
            caption: `*🔖Here, ${finalname} for ${NekoBot.pushname}:*
*🍻Title:* ${fetchedata.youtube_search[0].TITLE}
*🙈Views:* ${fetchedata.youtube_search[0].VIEWS}
*🔗Link:* ${fetchedata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${fetchedata.youtube_search[0].DURATION_FULL}
*📜Description:* ${fetchedata.youtube_search[0].DESCRIPTION}`,
            footer:
              "*NekoBot™ by magneum*\n*💻HomePage:* https://bit.ly/magneum",
            buttons: [
              {
                buttonId: `${NekoBot.prefix}Dashboard`,
                buttonText: { displayText: `${NekoBot.prefix}Dashboard` },
                type: 1,
              },
              {
                buttonId: `${NekoBot.prefix}Help`,
                buttonText: { displayText: `${NekoBot.prefix}Help` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [nekos.sender],
          },
          {
            contextInfo: { mentionedJid: [nekos.sender] },
            quoted: nekos,
          }
        );

        await NekoBot.imagebutton(
          NekoBot,
          nekos,
          `*🔖Here, ${finalname} for ${NekoBot.pushname}:*
*🍻Title:* ${fetchedata.youtube_search[0].TITLE}
*🙈Views:* ${fetchedata.youtube_search[0].VIEWS}
*🔗Link:* ${fetchedata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${fetchedata.youtube_search[0].DURATION_FULL}
*📜Description:* ${fetchedata.youtube_search[0].DESCRIPTION}`,
          fetchedata.youtube_search[0].HQ_IMAGE
        );
        return;
        var stream = ytdl(fetchedata.youtube_search[0].LINK, {
          filter: (info) =>
            info.audioBitrate == 160 || info.audioBitrate == 128,
        }).pipe(NekoBot.fs.createWriteStream(`./${fetchedata.uuid}`));
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
        await NekoBot.sendMessage(
          nekos.chat,
          {
            audio: NekoBot.fs.readFileSync(`./${fetchedata.uuid}`),
            mimetype: "audio/mpeg",
            fileName: fetchedata.youtube_search[0].TITLE + ".mp3",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                title: fetchedata.youtube_search[0].TITLE,
                body: "⭕made by NekoBot",
                renderLargerThumbnail: true,
                thumbnailUrl: fetchedata.youtube_search[0].THUMB,
                mediaUrl: fetchedata.youtube_search[0].LINK,
                mediaType: 1,
                thumbnail: await NekoBot.getBuffer(
                  fetchedata.youtube_search[0].HQ_IMAGE
                ),
                sourceUrl: "https://bit.ly/magneum",
              },
            },
          },
          { quoted: nekos }
        ).then(NekoBot.fs.unlinkSync(`./${fetchedata.uuid}`));
      });
  } catch (error) {
    return NekoBot.handlerror(NekoBot, nekos, error);
  }
};
