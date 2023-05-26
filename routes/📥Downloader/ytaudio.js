// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var progress = require("progress-estimator")();
var youtubedl = require("youtube-dl-exec");
var FFmpeg = require("fluent-ffmpeg");
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ѕуηтнσяiα, νℓкhat, update, store) => {
  try {
    if (!ѕуηтнσяiα.args) {
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
> _${ѕуηтнσяiα.prefix}${pfname} song-name_`
      );
    }
    ѕуηтнσяiα
      .axios({
        method: "get",
        url:
          "https://magneum.vercel.app/api/youtube_sr?q=" +
          ѕуηтнσяiα.args.join(" "),
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "user-agent": [
            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 YaBrowser/19.10.3.281 Yowser/2.5 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36 Edg/99.0.1150.30",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
          ],
        },
      })
      .then(async (response) => {
        var mData = response.data;
        console.log(mData);
        await ѕуηтнσяiα.imgB(
          ѕуηтнσяiα,
          νℓкhat,
          `*🔖Here, ${pfname} For ${ѕуηтнσяiα.pushname}:*
*🍻Title:* ${mData.youtube_search[0].TITLE}
*🙈Views:* ${mData.youtube_search[0].VIEWS}
*🔗Link:* ${mData.youtube_search[0].LINK || "null"}
*⏰Duration:* ${mData.youtube_search[0].DURATION_FULL}
*📜Description:* ${mData.youtube_search[0].DESCRIPTION}`,
          mData.youtube_search[0].HQ_IMAGE
        );
        // =========================================================
        const ytdl = require("ytdl-secktor");
        const stream = ytdl(mData.youtube_search[0].LINK, {
          filter: (info) =>
            info.audioBitrate == 160 || info.audioBitrate == 128,
        }).pipe(ѕуηтнσяiα.fs.createWriteStream(`./${mData.uuid}`));
        await new Promise((resolve, reject) => {
          stream.on("error", reject);
          stream.on("finish", resolve);
        });
        await ѕуηтнσяiα
          .sendMessage(
            νℓкhat.chat,
            {
              audio: ѕуηтнσяiα.fs.readFileSync(`./${mData.uuid}`),
              mimetype: "audio/mpeg",
              fileName: mData.youtube_search[0].TITLE + ".mp3",
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: mData.youtube_search[0].TITLE,
                  body: "⭕made by synthoria",
                  renderLargerThumbnail: true,
                  thumbnailUrl: mData.youtube_search[0].THUMB,
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
          )
          .then(ѕуηтнσяiα.fs.unlinkSync(`./${mData.uuid}`));
        return;
        let _DROP = youtubedl(mData.youtube_search[0].LINK, {
          noWarnings: true,
          dumpSingleJson: true,
          preferFreeFormats: true,
          noCheckCertificates: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });
        var YouGhost = await progress(_DROP, "Obtaining: " + " ");
        var a_ultralow = YouGhost.formats.filter(
          (v) => v.format_id === "599" || v.format_id === "600"
        );
        var db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
        var a_low = YouGhost.formats.filter(
          (v) =>
            v.format_id === "139" ||
            v.format_id === "249" ||
            v.format_id === "250"
        );
        var db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
        var a_medium = YouGhost.formats.filter(
          (v) => v.format_id === "140" || v.format_id === "251"
        );
        var db_medium = a_medium[0] || a_medium[1] || a_medium;

        if (db_medium.width !== undefined) {
          console.log(db_medium.url);
          FFmpeg(db_medium.url)
            .setFfmpegPath(FFmpegPath)
            .setFfprobePath(FFmpegProbe)
            .format("mp3")
            .output(
              async (data) => {
                await ѕуηтнσяiα.sendMessage(
                  νℓкhat.chat,
                  {
                    audio: {
                      url: data,
                    },
                    mimetype: "audio/mpeg",
                    fileName: mData.youtube_search[0].TITLE + ".mp3",
                    headerType: 4,
                    contextInfo: {
                      externalAdReply: {
                        title: mData.youtube_search[0].TITLE,
                        body: "⭕made by synthoria",
                        renderLargerThumbnail: true,
                        thumbnailUrl: mData.youtube_search[0].THUMB,
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
              },
              { end: true }
            )
            .on("error", (e) => console.error("ERROR: " + e.message))
            .on("end", () =>
              console.log("INFO: stream sent to client successfully.")
            )
            .run();
        } else if (
          db_medium.width === undefined &&
          db_low.width !== undefined
        ) {
          console.log(db_low.url);
          FFmpeg(db_low.url)
            .setFfmpegPath(FFmpegPath)
            .setFfprobePath(FFmpegProbe)
            .format("mp3")
            .output(
              async (data) => {
                await ѕуηтнσяiα.sendMessage(
                  νℓкhat.chat,
                  {
                    audio: {
                      url: data,
                    },
                    mimetype: "audio/mpeg",
                    fileName: mData.youtube_search[0].TITLE + ".mp3",
                    headerType: 4,
                    contextInfo: {
                      externalAdReply: {
                        title: mData.youtube_search[0].TITLE,
                        body: "⭕made by synthoria",
                        renderLargerThumbnail: true,
                        thumbnailUrl: mData.youtube_search[0].THUMB,
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
              },
              { end: true }
            )
            .on("error", (e) => console.error("ERROR: " + e.message))
            .on("end", () =>
              console.log("INFO: stream sent to client successfully.")
            )
            .run();
        } else if (
          db_medium.width === undefined &&
          db_low.width === undefined &&
          db_ultralow.width !== undefined
        ) {
          console.log(db_ultralow.url);
          FFmpeg(db_ultralow.url)
            .setFfmpegPath(FFmpegPath)
            .setFfprobePath(FFmpegProbe)
            .format("mp3")
            .output(
              async (data) => {
                await ѕуηтнσяiα.sendMessage(
                  νℓкhat.chat,
                  {
                    audio: {
                      url: data,
                    },
                    mimetype: "audio/mpeg",
                    fileName: mData.youtube_search[0].TITLE + ".mp3",
                    headerType: 4,
                    contextInfo: {
                      externalAdReply: {
                        title: mData.youtube_search[0].TITLE,
                        body: "⭕made by synthoria",
                        renderLargerThumbnail: true,
                        thumbnailUrl: mData.youtube_search[0].THUMB,
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
              },
              { end: true }
            )
            .on("error", (e) => console.error("ERROR: " + e.message))
            .on("end", () =>
              console.log("INFO: stream sent to client successfully.")
            )
            .run();
        }
      });
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat, error);
  }
};
