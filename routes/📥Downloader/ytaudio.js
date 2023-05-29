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
var ytdl = require("ytdl-secktor");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (
  Foxbot,
  Foxchat,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!Foxbot.args) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} song-name_`
      );
    }
    Foxbot.magfetch(
      Foxbot,
      "https://magneum.vercel.app/api/youtube_sr?q=" + Foxbot.args.join(" ")
    ).then(async (response) => {
      var fetchedata = response.data;
      console.log(fetchedata);

      return await Foxbot.sendMessage(
        Foxchat.chat,
        {
          image: { url: fetchedata.youtube_search[0].HQ_IMAGE },
          caption: `*🔖Here, ${finalname} for ${Foxbot.pushname}:*
*🍻Title:* ${fetchedata.youtube_search[0].TITLE}
*🙈Views:* ${fetchedata.youtube_search[0].VIEWS}
*🔗Link:* ${fetchedata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${fetchedata.youtube_search[0].DURATION_FULL}
*📜Description:* ${fetchedata.youtube_search[0].DESCRIPTION}`,
          footer: "*Foxbot™ by magneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${Foxbot.prefix}Dashboard`,
              buttonText: { displayText: `${Foxbot.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${Foxbot.prefix}Help`,
              buttonText: { displayText: `${Foxbot.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 4,
          mentions: [Foxchat.sender],
        },
        {
          contextInfo: { mentionedJid: [Foxchat.sender] },
          quoted: Foxchat,
        }
      );

      await Foxbot.imagebutton(
        Foxbot,
        Foxchat,
        `*🔖Here, ${finalname} for ${Foxbot.pushname}:*
*🍻Title:* ${fetchedata.youtube_search[0].TITLE}
*🙈Views:* ${fetchedata.youtube_search[0].VIEWS}
*🔗Link:* ${fetchedata.youtube_search[0].LINK || "null"}
*⏰Duration:* ${fetchedata.youtube_search[0].DURATION_FULL}
*📜Description:* ${fetchedata.youtube_search[0].DESCRIPTION}`,
        fetchedata.youtube_search[0].HQ_IMAGE
      );
      return;
      var stream = ytdl(fetchedata.youtube_search[0].LINK, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
      }).pipe(Foxbot.fs.createWriteStream(`./${fetchedata.uuid}`));
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
      });
      await Foxbot.sendMessage(
        Foxchat.chat,
        {
          audio: Foxbot.fs.readFileSync(`./${fetchedata.uuid}`),
          mimetype: "audio/mpeg",
          fileName: fetchedata.youtube_search[0].TITLE + ".mp3",
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: fetchedata.youtube_search[0].TITLE,
              body: "⭕made by Foxbot",
              renderLargerThumbnail: true,
              thumbnailUrl: fetchedata.youtube_search[0].THUMB,
              mediaUrl: fetchedata.youtube_search[0].LINK,
              mediaType: 1,
              thumbnail: await Foxbot.getBuffer(
                fetchedata.youtube_search[0].HQ_IMAGE
              ),
              sourceUrl: "https://bit.ly/magneum",
            },
          },
        },
        { quoted: Foxchat }
      ).then(Foxbot.fs.unlinkSync(`./${fetchedata.uuid}`));
    });
  } catch (error) {
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};
