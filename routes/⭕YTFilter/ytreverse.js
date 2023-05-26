("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
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

    νℓкуяє
      .magfetch(
        νℓкуяє,
        "https://magneum.vercel.app/api/youtube_sr?q=" + νℓкуяє.args.join(" ")
      )
      .then(async (response) => {
        var mData = response.data;
        console.log(mData);
        await νℓкуяє.imgB(
          νℓкуяє,
          νℓкhat,
          `*🔖Here, ${pfname} For ${νℓкуяє.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}  
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*🖊️Author:* ${mData.youtube_search[0].AUTHOR_NAME || "null"}

*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
          mData.youtube_search[0].HQ_IMAGE
        );

        νℓкуяє
          .magfetch(
            νℓкуяє,
            "https://magneum.vercel.app/api/youtube_dl?q=" +
              mData.youtube_search[0].TITLE +
              "&quality=music"
          )
          .then(async (response) => {
            var musicData = response.data;
            console.log(musicData);
            let audioConv =
              νℓкуяє.between(3000, 4000) + musicData[0].YT_ID + ".mp3";
            νℓкуяє.exec(
              `${νℓкуяє.pathFFmpeg} -i ${musicData[0].quick_dl} -filter_complex 'areverse' ${audioConv}`,
              async (error) => {
                if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
                else
                  await νℓкуяє.sendMessage(
                    vcнaт.chat,
                    {
                      audio: νℓкуяє.fs.readFileSync(`./${audioConv}`),
                      mimetype: "audio/mpeg",
                      fileName: mData.youtube_search[0].TITLE + ".mp3",
                      headerType: 4,
                      contextInfo: {
                        externalAdReply: {
                          title: mData.youtube_search[0].title,
                          body: "YT-Filter⭕Made by magneum.",
                          renderLargerThumbnail: true,
                          thumbnailUrl: mData.youtube_search[0].thumbnail,
                          mediaUrl: mData.youtube_search[0].url,
                          mediaType: 1,
                          thumbnail: await νℓкуяє.getBuffer(
                            mData.youtube_search[0].thumbnail
                          ),
                          sourceUrl: "https://bit.ly/magneum",
                        },
                      },
                    },
                    { quoted: vcнaт }
                  );
                return await νℓкуяє.fs.unlinkSync(`./${audioConv}`);
              }
            );
          });
      });
  } catch (error) {
    return νℓкуяє.grab(νℓкуяє, vcнaт, error);
  }
};
