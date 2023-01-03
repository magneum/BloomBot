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
      `*😥Sorry:* _@${νℓкуяє.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${νℓкуяє.prefix}${pfname} video-name_`
    );
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  var gotArgument = νℓкуяє.args.join(" ");
  if (gotArgument.includes("yout")) {
    return vcнaт.reply(
      `*😥Sorry:* _@${νℓкуяє.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} video-name_`
    );
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  νℓкуяє
    .axios({
      method: "get",
      url: `${KryTek_URL}/youtube?q=${gotArgument.replace(" ", "")}`,
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9,vi;q=0.8",
        "content-type": "multipart/form-data",
      },
    })
    .then(async function (response) {
      if (!response) {
        return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname}_

*❌Error*
> _No Music Found!_`);
      } else if (!response.data.LINK) {
        return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname}_

*❌Error*
> _No Music Found!_`);
      } else if (response.data.DURATION_SECONDS > 600) {
        return vcнaт.reply(`*😥Sorry:* _@${νℓкуяє.Tname}_

*❌Error*
> _Cannot Download More Then 10m audio!_`);
      } else {
        // {
        // "status": "✓ success ✓",
        // "_id": "f685b350-50ca-4f8b-886c-62ca3925362c",
        // "_youtube_search": [
        // {
        // "YT_ID": "vdbP_3o73qI",
        // "TITLE": "Jaan Nisaar - Lyrical | Kedarnath| Arijit Singh | Sushant Singh Rajput | Sara Ali Khan| Amit Trivedi",
        // "UPLOADED": "2 years ago",
        // "VIEWS": 159570291,
        // "DURATION_FULL": "4:09",
        // "DURATION_SECONDS": 249
        // },
        // {
        // "AUTHOR_NAME": "Zee Music Company",
        // "AUTHOR_CHANNEL": "https://youtube.com/@zeemusiccompany"
        // },
        // {
        // "LINK": "https://youtube.com/watch?v=vdbP_3o73qI",
        // "THUMB": "https://i.ytimg.com/vi/vdbP_3o73qI/hq720.jpg",
        // "DESCRIPTION": "Thodi si दीवानगी, thodi si आवारगी. Aayi hai in dono mein thodi si नाराज़गी, hai inka इश्क़ #JaanNisaar ..."
        // }
        // ],
        // "_youtube_downloader": [
        // {
        // "VIDEO_QUALITY": "1080",
        // "VIDEO_SIZE": "51.2 MB",
        // "VIDEO_RAW_LINK": "https://dl138.dlmate26.xyz/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ09tZFEwakQ0cUVxcE50TVprKy8yeUtzcE9JdXhFNW8rbUVNeGE5Q3JRT3ZHWk9RV0FvdE1WUzMyRy81MTJpaXJjKzQ4dVRZSkNYeGovazYyUmx6dG1uQk8rTmV2TUI3a2RUSHR5Nkd0cjBpalk3ZnpkclY3TW9YUzdva21LVTNWYTZtc2JjL2pBcGRsTzNHWE9VT2ZseDVoWTZIUzUrNVZjenVXZnNVU2s1Yjh1N0prbmVCY3hJYlpMM1pqRjRLUEQ4aFFJcWFaTmloWDB1YXlyRnNwekc2Q1JKQk5WZUNjUitlYjlXUThYd2lCRHFUcnBwUGh3dGpCUktPWm00WGl4cEthd01XN0xLWlNsQ1lLU2QreS85NVE9"
        // },
        // {
        // "AUDIO_QUALITY": "128",
        // "AUDIO_SIZE": "3.8 MB",
        // "AUDIO_RAW_LINK": "https://dl132.dlmate35.xyz/?file=M3R4SUNiN3JsOHJ6WWQ2a3NQS1Y5ZGlxVlZIOCtyZ09tZFEwakQ0cUVxcE50TVprKy8yeUtzcE9JdXhFNW8rbUVNeGE5Q3JRT3ZHWk9RV0FvdE1WUzMyRy81MTJpaXJjKzQ4dVRZSkNYeGovazYyUmx6dG1uQk8rTmV2TUI3a2RUSHR5Nkd0cjBpalk3ZnpkclY3TW9YUzdva21LSWlrYTRYME5OUG5Wem85SndXR1dLcVhDeXA4UXVUT2Q1OThiL1AyTjUwU2s1ZUY3NnZwaldrWkVUTU5TanNuazlyN0J0UlJmaDV3VGgybUI3K2UrRnBjbkdiR1hkREl0YjNSZXU3aTZCRXRHbG1NTjhYYTdxL3QxdkRCUUl2UXorM1RwL2ZDNE53PT0%3D"
        // }
        // ]
        // }
        await νℓкуяє.imgB(
          νℓкуяє,
          vcнaт,
          `*🔖Here, ${pfname} For @${νℓкуяє.Tname}:*
*💡STATUS:* ${response.data.status}
*🔑KRYTEK_ID:* ${response.data._id}
*📍YT_ID:* ${response.data._youtube_search[0].YT_ID}
*⚡TITLE:* ${response.data._youtube_search[0].TITLE}
*🗓️UPLOADED:* ${response.data._youtube_search[0].UPLOADED}
*🧿VIEWS:* ${response.data._youtube_search[0].VIEWS}
*⏰DURATION_FULL:* ${response.data._youtube_search[0].DURATION_FULL}
*⏲️DURATION_SECONDS:* ${response.data._youtube_search[0].DURATION_SECONDS}
*🖋️AUTHOR_NAME:* ${response.data._youtube_search[1].AUTHOR_NAME}
*🖊️AUTHOR_CHANNEL:* ${response.data._youtube_search[1].AUTHOR_CHANNEL}
*🔗LINK:* ${response.data._youtube_search[2].LINK}
*🖼️THUMB:* ${response.data._youtube_search[2].THUMB}
*📑DESCRIPTION:* ${response.data._youtube_search[2].DESCRIPTION}`,
          response.data._youtube_search[2].THUMB
        );

        await νℓкуяє.sendMessage(
          vcнaт.chat,
          {
            audio: { url: response.data._youtube_downloader[1].AUDIO_RAW_LINK },
            mimetype: "audio/mpeg",
            fileName: response.data._youtube_search[0].TITLE + ".mp3",
            headerType: 4,
            contextInfo: {
              externalAdReply: {
                TITLE: response.data._youtube_search[0].TITLE,
                body: "❣️Made by KryKenz.",
                renderLargerThumbnail: true,
                thumbnailUrl: response.data._youtube_search[2].THUMB,
                mediaUrl: response.data._youtube_search[2].LINK,
                mediaType: 1,
                thumbnail: await νℓкуяє.getBuffer(
                  esponse.data._youtube_search[2].THUMB
                ),
                sourceUrl: "https://bit.ly/krykenz",
              },
            },
          },
          { quoted: vcнaт }
        );
      }
    })
    .catch(function (error) {
      return νℓкуяє.grab(νℓкуяє, vcнaт, error);
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
