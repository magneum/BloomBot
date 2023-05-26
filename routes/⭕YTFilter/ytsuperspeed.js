//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, vcнaт, update, store) => {
  try {
    if (!VօxB໐t.args.join(" ")) {
      await VօxB໐t.sendMessage(vcнaт.chat, {
        react: {
          text: "❌",
          key: vcнaт.key,
        },
      });
      return vcнaт.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${VօxB໐t.prefix}${pfname} song/link_`
      );
    }

    var gotArgument = VօxB໐t.args.join(" ");
    if (gotArgument.includes("yout")) {
      if (!VօxB໐t.TubeRegex.test(gotArgument)) {
        await VօxB໐t.sendMessage(vcнaт.chat, {
          react: {
            text: "❌",
            key: vcнaт.key,
          },
        });
        return vcнaт.reply(
          `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} song/link_`
        );
      }
    }

    VօxB໐t.magfetch(
      VօxB໐t,
      "https://magneum.vercel.app/api/youtube_sr?q=" + VօxB໐t.args.join(" ")
    ).then(async (response) => {
      var mData = response.data;
      console.log(mData);
      await VօxB໐t.imgB(
        VօxB໐t,
        νℓкhat,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}  
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*🖊️Author:* ${mData.youtube_search[0].AUTHOR_NAME || "null"}

*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
        mData.youtube_search[0].HQ_IMAGE
      );

      VօxB໐t.magfetch(
        VօxB໐t,
        "https://magneum.vercel.app/api/youtube_dl?q=" +
          mData.youtube_search[0].TITLE +
          "&quality=music"
      ).then(async (response) => {
        var musicData = response.data;
        console.log(musicData);
        let audioConv =
          VօxB໐t.between(3000, 4000) + musicData[0].YT_ID + ".mp3";
        VօxB໐t.exec(
          `${VօxB໐t.pathFFmpeg} -i ${musicData[0].quick_dl} -af 'atempo=3' ${audioConv}`,
          async (error) => {
            if (error) return VօxB໐t.grab(VօxB໐t, vcнaт, error);
            else
              await VօxB໐t.sendMessage(
                vcнaт.chat,
                {
                  audio: VօxB໐t.fs.readFileSync(`./${audioConv}`),
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
                      thumbnail: await VօxB໐t.getBuffer(
                        mData.youtube_search[0].thumbnail
                      ),
                      sourceUrl: "https://bit.ly/magneum",
                    },
                  },
                },
                { quoted: vcнaт }
              );
            return await VօxB໐t.fs.unlinkSync(`./${audioConv}`);
          }
        );
      });
    });
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, vcнaт, error);
  }
};
