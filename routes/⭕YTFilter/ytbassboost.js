// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐨𝐫𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthoria was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ║
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  try {
    if (!ѕуηтнσяiα.args.join(" ")) {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${ѕуηтнσяiα.prefix}${pfname} song/link_`
      );
    }

    var gotArgument = ѕуηтнσяiα.args.join(" ");
    if (gotArgument.includes("yout")) {
      if (!ѕуηтнσяiα.TubeRegex.test(gotArgument)) {
        await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ѕуηтнσяiα.prefix}${pfname} song/link_`
        );
      }
    }

    ѕуηтнσяiα
      .magfetch(
        ѕуηтнσяiα,
        "https://magneum.vercel.app/api/youtube_sr?q=" +
          ѕуηтнσяiα.args.join(" ")
      )
      .then(async (response) => {
        var mData = response.data;
        console.log(mData);
        await ѕуηтнσяiα.imgB(
          ѕуηтнσяiα,
          νℓкhat,
          `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}  
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*🖊️Author:* ${mData.youtube_search[0].AUTHOR_NAME || "null"}

*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
          mData.youtube_search[0].HQ_IMAGE
        );

        ѕуηтнσяiα
          .magfetch(
            ѕуηтнσяiα,
            "https://magneum.vercel.app/api/youtube_dl?q=" +
              mData.youtube_search[0].TITLE +
              "&quality=music"
          )
          .then(async (response) => {
            var musicData = response.data;
            console.log(musicData);
            let audioConv =
              ѕуηтнσяiα.between(3000, 4000) + musicData[0].YT_ID + ".mp3";
            ѕуηтнσяiα.exec(
              `${ѕуηтнσяiα.pathFFmpeg} -i ${musicData[0].quick_dl} -af 'bass=g=10,dynaudnorm=f=150' ${audioConv}`,
              async (error) => {
                if (error) return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
                else {
                  await ѕуηтнσяiα.sendMessage(
                    νℓкhat.chat,
                    {
                      audio: ѕуηтнσяiα.fs.readFileSync(`./${audioConv}`),
                      mimetype: "audio/mpeg",
                      fileName: mData.youtube_search[0].TITLE + ".mp3",
                      headerType: 4,
                      contextInfo: {
                        externalAdReply: {
                          title: mData.youtube_search[0].TITLE,
                          body: "YT-Filter⭕Made by magneum.",
                          renderLargerThumbnail: true,
                          thumbnailUrl: mData.youtube_search[0].HQ_IMAGE,
                          mediaUrl: mData.youtube_search[0].LINK,
                          mediaType: 1,
                          thumbnail: await ѕуηтнσяiα.getBuffer(
                            mData.youtube_search[0].HQ_IMAGE
                          ),
                          sourceUrl: "https://bit.ly/magneum",
                        },
                      },
                    },
                    { quoted: νℓкhat }
                  );
                  return await ѕуηтнσяiα.fs.unlinkSync(`./${audioConv}`);
                }
              }
            );
          });
      });
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
