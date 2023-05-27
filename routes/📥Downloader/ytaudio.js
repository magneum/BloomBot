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
const ytdl = require("ytdl-secktor");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (VօxB໐t, ᴠᴏxᴄ, update, store) => {
  try {
    if (!VօxB໐t.args) {
      await VօxB໐t.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} song-name_`
      );
    }
    VօxB໐t.magfetch(
      VօxB໐t,
      "https://magneum.vercel.app/api/youtube_sr?q=" + VօxB໐t.args.join(" ")
    ).then(async (response) => {
      var mData = response.data;
      console.log(mData);

      return await VօxB໐t.sendMessage(
        ᴠᴏxᴄ.chat,
        {
          image: { url: mData.youtube_search[0].HQ_IMAGE },
          caption: `*🔖Here, ${pfname} For ${VօxB໐t.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
          footer:
            "*Synthoria™ by Mågneum*\n*💻HomePage:* https://bit.ly/magneum",
          buttons: [
            {
              buttonId: `${VօxB໐t.prefix}Dashboard`,
              buttonText: { displayText: `${VօxB໐t.prefix}Dashboard` },
              type: 1,
            },
            {
              buttonId: `${VօxB໐t.prefix}Help`,
              buttonText: { displayText: `${VօxB໐t.prefix}Help` },
              type: 1,
            },
          ],
          headerType: 4,
          mentions: [ᴠᴏxᴄ.sender],
        },
        {
          contextInfo: { mentionedJid: [ᴠᴏxᴄ.sender] },
          quoted: ᴠᴏxᴄ,
        }
      );

      await VօxB໐t.imgB(
        VօxB໐t,
        ᴠᴏxᴄ,
        `*🔖Here, ${pfname} For ${VօxB໐t.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
        mData.youtube_search[0].HQ_IMAGE
      );
      return;
      const stream = ytdl(mData.youtube_search[0].LINK, {
        filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
      }).pipe(VօxB໐t.fs.createWriteStream(`./${mData.uuid}`));
      await new Promise((resolve, reject) => {
        stream.on("error", reject);
        stream.on("finish", resolve);
      });
      await VօxB໐t.sendMessage(
        ᴠᴏxᴄ.chat,
        {
          audio: VօxB໐t.fs.readFileSync(`./${mData.uuid}`),
          mimetype: "audio/mpeg",
          fileName: mData.youtube_search[0].TITLE + ".mp3",
          headerType: 4,
          contextInfo: {
            externalAdReply: {
              title: mData.youtube_search[0].TITLE,
              body: "⭕made by voxbot",
              renderLargerThumbnail: true,
              thumbnailUrl: mData.youtube_search[0].THUMB,
              mediaUrl: mData.youtube_search[0].LINK,
              mediaType: 1,
              thumbnail: await VօxB໐t.getBuffer(
                mData.youtube_search[0].HQ_IMAGE
              ),
              sourceUrl: "https://bit.ly/magneum",
            },
          },
        },
        { quoted: ᴠᴏxᴄ }
      ).then(VօxB໐t.fs.unlinkSync(`./${mData.uuid}`));
    });
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, ᴠᴏxᴄ, error);
  }
};
