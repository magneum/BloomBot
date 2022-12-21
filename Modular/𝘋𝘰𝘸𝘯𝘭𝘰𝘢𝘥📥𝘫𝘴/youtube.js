("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт) => {
  if (!νℓкуяє.args.join(" ")) {
    return vcнaт.reply(
      `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${νℓкуяє.prefix}${pfname} song/link_`
    );
  }
  if (νℓкуяє.args.join(" ").includes("yout")) {
    if (!νℓкуяє.TubeRegex.test(νℓкуяє.args.join(" "))) {
      return vcнaт.reply(
        `*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} song/link_`
      );
    }
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  var Found = await νℓкуяє.ySearch(νℓкуяє.args.join(" "));
  var vFound = Found.videos.slice(0, 1);
  vFound.forEach(async function (vData) {
    if (!vData.url) {
      return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_

*❌Error*
> _No Music Found!_`);
    } else if (vData.seconds > 600) {
      return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_

*❌Error*
> _Cannot Download More Then 10m audio!_`);
    } else {
      await νℓкуяє.imgB(
        νℓкуяє,
        vcнaт,
        `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
*🍻Title:* ${vData.title}
*🙈Views:* ${vData.views}
*⏰Duration:* ${vData.timestamp}
*🔗Link:* ${vData.url}
*🖊️Author:* ${vData.author.name}


*📜Description:*
${vData.description}`,
        vData.thumbnail
      );
      let audiOut = Math.random() + vData.videoId + ".mp3";
      var audio = νℓкуяє
        .yClient(vData.url, {
          filter: (info) =>
            info.audioBitrate == 160 || info.audioBitrate == 128,
        })
        .pipe(νℓкуяє.fs.createWriteStream(`./${audiOut}`));
      await new Promise((resolve, reject) => {
        audio.on("error", reject);
        audio.on("finish", resolve);
      });
      await νℓкуяє.sendMessage(
        vcнaт.chat,
        {
          audio: νℓкуяє.fs.readFileSync(`./${audiOut}`),
          mimetype: "audio/mpeg",
          fileName: vData.title + ".mp3",
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: vData.title,
              body: "❣️Made by KryKenz.",
              renderLargerThumbnail: true,
              thumbnailUrl: vData.thumbnail,
              mediaUrl: vData.url,
              mediaType: 1,
              thumbnail: await νℓкуяє.getBuffer(vData.thumbnail),
              sourceUrl: vData.url,
            },
          },
        },
        { quoted: vcнaт }
      );
      return νℓкуяє.fs.unlinkSync(`./${audiOut}`);
    }
  });
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
