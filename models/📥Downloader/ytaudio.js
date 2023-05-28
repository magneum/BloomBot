//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../../logs/global.js");
var presentpath = require("path");
var ytdl = require("ytdl-secktor");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (WhatsBot, voxchat, update, store) => {
  try {
    if (!WhatsBot.args) {
      await WhatsBot.sendMessage(voxchat.chat, {
        react: {
          text: "❌",
          key: voxchat.key,
        },
      });
      return voxchat.reply(
        `*😥Apologies:* _${WhatsBot.pushname || WhatsBot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${WhatsBot.prefix}${finalname} song-name_`
      );
    }
    WhatsBot
      .magfetch(
        WhatsBot,
        "https://magneum.vercel.app/api/youtube_sr?q=" + WhatsBot.args.join(" ")
      )
      .then(async (response) => {
        var fetchedata = response.data;
        console.log(fetchedata);

        return await WhatsBot.sendMessage(
          voxchat.chat,
          {
            image: { url: fetchedata.youtube_search[0].HQ_IMAGE },
            caption: `*🔖Here, ${finalname} for ${WhatsBot.pushname}:*
*🍻Title:* ${fetchedata.youtube_search[0].TITLE}
*🙈Views:* ${fetchedata.youtube_search[0].VIEWS}
*🔗Link:* ${fetchedata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${fetchedata.youtube_search[0].DURATION_FULL}
*📜Description:* ${fetchedata.youtube_search[0].DESCRIPTION}`,
            footer:
              "*WhatsBot™ by magneum*\n*💻HomePage:* https://bit.ly/magneum",
            buttons: [
              {
                buttonId: `${WhatsBot.prefix}Dashboard`,
                buttonText: { displayText: `${WhatsBot.prefix}Dashboard` },
                type: 1,
              },
              {
                buttonId: `${WhatsBot.prefix}Help`,
                buttonText: { displayText: `${WhatsBot.prefix}Help` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [voxchat.sender],
          },
          {
            contextInfo: { mentionedJid: [voxchat.sender] },
            quoted: voxchat,
          }
        );

        await WhatsBot.imagebutton(
          WhatsBot,
          voxchat,
          `*🔖Here, ${finalname} for ${WhatsBot.pushname}:*
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
        }).pipe(WhatsBot.fs.createWriteStream(`./${fetchedata.uuid}`));
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
        await WhatsBot
          .sendMessage(
            voxchat.chat,
            {
              audio: WhatsBot.fs.readFileSync(`./${fetchedata.uuid}`),
              mimetype: "audio/mpeg",
              fileName: fetchedata.youtube_search[0].TITLE + ".mp3",
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: fetchedata.youtube_search[0].TITLE,
                  body: "⭕made by WhatsBot",
                  renderLargerThumbnail: true,
                  thumbnailUrl: fetchedata.youtube_search[0].THUMB,
                  mediaUrl: fetchedata.youtube_search[0].LINK,
                  mediaType: 1,
                  thumbnail: await WhatsBot.getBuffer(
                    fetchedata.youtube_search[0].HQ_IMAGE
                  ),
                  sourceUrl: "https://bit.ly/magneum",
                },
              },
            },
            { quoted: voxchat }
          )
          .then(WhatsBot.fs.unlinkSync(`./${fetchedata.uuid}`));
      });
  } catch (error) {
    return WhatsBot.handlerror(WhatsBot, voxchat, error);
  }
};
