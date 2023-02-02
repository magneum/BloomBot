("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (νℓкуяє, vcнaт, update, store) => {
  try {
    if (!νℓкуяє.args.join(" ")) {
      await νℓкуяє.sendMessage(vcнaт.chat, {
        react: {
          text: "❌",
          key: vcнaт.key,
        },
      });
      return vcнaт.reply(
        `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${νℓкуяє.prefix}${pfname} song/link_`
      );
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
    var gotArgument = νℓкуяє.args.join(" ");
    if (gotArgument.includes("yout")) {
      if (!νℓкуяє.TubeRegex.test(gotArgument)) {
        await νℓкуяє.sendMessage(vcнaт.chat, {
          react: {
            text: "❌",
            key: vcнaт.key,
          },
        });
        return vcнaт.reply(
          `*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} song/link_`
        );
      }
    }
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");

    var Found = await νℓкуяє.ySearch(gotArgument);
    var vFound = Found.videos.slice(0, 1);
    vFound.forEach(async function (vData) {
      if (!vData.url) {
        return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error*
> _No Music Found!_`);
      } else if (vData.seconds > 600) {
        return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname || νℓкуяє.Tname}_

*❌Error*
> _Cannot Download More Then 10m audio!_`);
      } else {
        console.log(vData);
        await νℓкуяє.imgB(
          νℓкуяє,
          vcнaт,
          `*🔖Here, ${pfname} For @${νℓкуяє.Tname || νℓкуяє.pushname}:*
*⭕Filter:* ${pfname}
*🍻Title:* ${vData.title || "null"}
*🙈Views:* ${vData.views || "null"}
*⏰Duration:* ${vData.timestamp || "null"} | ${vData.ago || "null"}
*🔗Link:* ${vData.url || "null"}
*🖊️Author:* ${vData.author.name || "null"}


*📜Description:*
${vData.description || "null"}`,
          vData.thumbnail
        );
        ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
        let audiOut = νℓкуяє.between(1000, 2000) + vData.videoId + ".mp3";
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
        let audioConv = νℓкуяє.between(3000, 4000) + vData.videoId + ".mp3";
        νℓкуяє.exec(
          `${νℓкуяє.pathFFmpeg} -i ${audiOut} -af "atempo=0.5" ${audioConv}`,
          async (error) => {
            if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
            else {
              await νℓкуяє.sendMessage(
                vcнaт.chat,
                {
                  audio: νℓкуяє.fs.readFileSync(`./${audioConv}`),
                  mimetype: "audio/mpeg",
                  fileName: vData.title + ".mp3",
                  headerType: 4,
                  contextInfo: {
                    externalAdReply: {
                      title: vData.title,
                      body: "YT-Filter⭕Made by xhadr.",
                      renderLargerThumbnail: true,
                      thumbnailUrl: vData.thumbnail,
                      mediaUrl: vData.url,
                      mediaType: 1,
                      thumbnail: await νℓкуяє.getBuffer(vData.thumbnail),
                      sourceUrl: "https://bit.ly/xhadr",
                    },
                  },
                },
                { quoted: vcнaт }
              );
              await νℓкуяє.fs.unlinkSync(`./${audiOut}`);
              return await νℓкуяє.fs.unlinkSync(`./${audioConv}`);
            }
          }
        );
      }
    });
  } catch (error) {
    return νℓкуяє.grab(νℓкуяє, vcнaт, error);
  }
};
