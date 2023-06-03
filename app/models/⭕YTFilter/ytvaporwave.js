"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬: +𝟗𝟏𝟖𝟒𝟑𝟔𝟔𝟖𝟔𝟕𝟓𝟖 & +𝟗𝟏𝟖𝟐𝟓𝟎𝟖𝟖𝟗𝟑𝟐𝟓
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
const path = require("path");
const fileName = path.basename(__filename);
const functionName = fileName.slice(0, -3).toLowerCase();

module.exports = async (
BloomBot,
chatkey,
gmeta,
isAdmin,
groupName,
isbotAdmin,
groupAdmins,
participants,
) => {
  try {
    const query = BloomBot.args.join(" ");
    if (
      !query ||
      (query.includes("youtube") && !BloomBot.TubeRegex.test(query))
    ) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: { text: "❌", key: chatkey.key },
      });
      return chatkey.reply(
        `*😥 Apologies:* ${BloomBot.pushname || BloomBot.tagname}
*❌Error:*
> _No query provided!_

*🌻 Usage* 
> _${BloomBot.prefix}${functionName} song/link_`
      );
    }
    const response = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/youtube_sr?q=${query}`
    );
    console.log(response.response);
    const searchData = response.data.youtube_search[0];
    const musicResponse = await BloomBot.magfetch(
      BloomBot,
      `https://magneum.vercel.app/api/youtube_dl?q=${searchData.TITLE}&quality=music`
    );
    const musicData = musicResponse.data[0];
    const audioFilename = `${BloomBot.between(3000, 4000)}${musicData.YT_Id}.mp3`;
    await BloomBot.exec(
      `${BloomBot.pathFFmpeg} -i ${musicData.quick_dl} -af "aresample=48000,asetrate=48000*0.8" ${audioFilename}`
    );
    const audioFile = BloomBot.fs.readFileSync(`./${audioFilename}`);
    const thumbnail = await BloomBot.getBuffer(searchData.HQ_IMAGE);
    const mediaUrl = searchData.LINK || "Not available";
    const authorName = searchData.AUTHOR_NAME || "Not available";
    const description = searchData.DESCRIPTION || "No description available";
    const message = `
*🌻 Here's the information for ${functionName} requested by ${
      BloomBot.pushname || BloomBot.tagname
    }:*
*🎵 Title:* ${searchData.TITLE}
*👁️ Views:* ${searchData.VIEWS}  
*⏱️ Duration:* ${searchData.DURATION_FULL}
*🔗 Link:* ${mediaUrl}
*✍️ Author:* ${authorName}

*📜 Description:*
${description}`;
    await BloomBot.sendMessage(chatkey.chat, {
      text: message,
      options: {
        contextInfo: {
          externalAdReply: {
            title: searchData.TITLE,
            body: "ⒸBloomBot (md) by Magneum™",
            renderLargerThumbnail: true,
            thumbnailUrl: searchData.HQ_IMAGE,
            mediaUrl,
            mediaType: 1,
            thumbnail,
            sourceUrl: "bit.ly/magneum",
          },
        },
      },
    });
    await BloomBot.sendMessage(chatkey.chat, {
      audio: audioFile,
      mimetype: "audio/mpeg",
      fileName: `${searchData.TITLE}.mp3`,
      headerType: 4,
      contextInfo: {
        externalAdReply: {
          title: searchData.TITLE,
          body: "ⒸBloomBot (md) by Magneum™",
          renderLargerThumbnail: true,
          thumbnailUrl: searchData.HQ_IMAGE,
          mediaUrl,
          mediaType: 1,
          thumbnail,
          sourceUrl: "bit.ly/magneum",
        },
      },
    });
    BloomBot.fs.unlinkSync(`./${audioFilename}`);
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
