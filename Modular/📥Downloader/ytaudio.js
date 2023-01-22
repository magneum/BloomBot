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
  await νℓкуяє.sendMessage(vcнaт.chat, {
    react: {
      text: "🔖",
      key: vcнaт.key,
    },
  });
  try {
    if (!νℓкуяє.args) {
      await νℓкуяє.sendMessage(vcнaт.chat, {
        react: {
          text: "❌",
          key: vcнaт.key,
        },
      });
      return vcнaт.reply(
        `*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} manga-name_`
      );
    }
    νℓкуяє
      .axios({
        method: "get",
        url:
          "https://magneum.vercel.app/api/youtube_sr?q=" +
          νℓкуяє.args.join(" "),
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then(async (response) => {
        var mData = response.data[0];
        await νℓкуяє.imgB(
          νℓкуяє,
          νℓcнαт,
          `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
          *🍻Title:* ${mData._youtube_search[0].TITLE}
          *🙈Views:* ${mData._youtube_search[0].VIEWS}
          *⏰Duration:* ${mData._youtube_search[0].DURATION_FULL}
          *📜Description:* ${mData._youtube_search[0].DESCRIPTION}`,
          mData.HQ_IMAGE
        );
      });
    νℓкуяє
      .axios({
        method: "get",
        url:
          "https://magneum.vercel.app/api/youtube_dl?q=" +
          νℓкуяє.args.join(" ") +
          "&quality=128kbps",
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      })
      .then(async (response) => {
        var mData = response.data[0];
        await νℓкуяє.sendMessage(
          vcнaт.chat,
          {
            audio: {
              url: mData.quick_dl,
            },
            mimetype: "audio/mpeg",
            fileName: mData.TITLE + ".mp3",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                TITLE: mData.TITLE,
                body: "❣️Made by magneum.",
                renderLargerThumbnail: true,
                thumbnailUrl: mData.THUMB,
                mediaUrl: mData.LINK,
                mediaType: 1,
                thumbnail: await νℓкуяє.getBuffer(mData.HQ_IMAGE),
                sourceUrl: "https://bit.ly/magneum",
              },
            },
          },
          { quoted: vcнaт }
        );
      });
  } catch (error) {
    return νℓкуяє.grab(νℓкуяє, vcнaт, error);
  }
};
