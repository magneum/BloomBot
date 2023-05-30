//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/config");
var path = require("path");
var fileName = path.basename(__filename);
var functionName = fileName.slice(0, -3).toLowerCase();

module.exports = async (BloomBot, vChat) => {
  try {
    var query = BloomBot.args.join(" ");
    if (
      !query ||
      (query.includes("youtube") && !BloomBot.TubeRegex.test(query))
    ) {
      await BloomBot.sendMessage(vChat.chat, {
        react: { text: "❌", key: vChat.key },
      });
      return vChat.reply(
        `*😥 Apologies:* ${BloomBot.pushname || BloomBot.Tname}
*❌ Error* 
> _No query provided!_

*⚡ Usage* 
> _${BloomBot.prefix}${functionName} song/link_`
      );
    }
    var response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/youtube_sr?q=${query}`
    );
    console.log(response.response);
    var searchData = response.data.youtube_search[0];
    var musicResponse = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/youtube_dl?q=${searchData.TITLE}&quality=music`
    );
    var musicData = musicResponse.data[0];
    var audioFilename = `${BloomBot.between(3000, 4000)}${musicData.YT_Id}.mp3`;
    await BloomBot.exec(
      `${BloomBot.pathFFmpeg} -i ${musicData.quick_dl} -af 'bass=g=10,dynaudnorm=f=150' ${audioFilename}`
    );
    var audioFile = BloomBot.fs.readFileSync(`./${audioFilename}`);
    var thumbnail = await BloomBot.getBuffer(searchData.HQ_IMAGE);
    var mediaUrl = searchData.LINK || "Not available";
    var authorName = searchData.AUTHOR_NAME || "Not available";
    var description = searchData.DESCRIPTION || "No description available";
    var message = `
*⚡ Here's the information for ${functionName} requested by ${
      BloomBot.pushname || BloomBot.Tname
    }:*
*🎵 Title:* ${searchData.TITLE}
*👁️ Views:* ${searchData.VIEWS}  
*⏱️ Duration:* ${searchData.DURATION_FULL}
*🔗 Link:* ${mediaUrl}
*✍️ Author:* ${authorName}

*📜 Description:*
${description}`;
    await BloomBot.sendMessage(vChat.chat, {
      text: message,
      options: {
        contextInfo: {
          externalAdReply: {
            title: searchData.TITLE,
            body: "This result is powered by magneum™'s YT-Filter.",
            renderLargerThumbnail: true,
            thumbnailUrl: searchData.HQ_IMAGE,
            mediaUrl,
            mediaType: 1,
            thumbnail,
            sourceUrl: "https://bit.ly/magneum",
          },
        },
      },
    });
    await BloomBot.sendMessage(vChat.chat, {
      audio: audioFile,
      mimetype: "audio/mpeg",
      fileName: `${searchData.TITLE}.mp3`,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: searchData.TITLE,
          body: "This result is powered by magneum™'s YT-Filter.",
          renderLargerThumbnail: true,
          thumbnailUrl: searchData.HQ_IMAGE,
          mediaUrl,
          mediaType: 1,
          thumbnail,
          sourceUrl: "https://bit.ly/magneum",
        },
      },
    });
    BloomBot.fs.unlinkSync(`./${audioFilename}`);
  } catch (error) {
    return BloomBot.handlerror(BloomBot, vChat, error);
  }
};
module.exports.aliases = [];
