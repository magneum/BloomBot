//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("dotenv").config();
var cors = require("cors");
var https = require("https");
var axios = require("axios");
var Tube = require("tube-exec");
var Spinnies = require("spinnies");
var FFmpeg = require("fluent-ffmpeg");
var fetch = require("isomorphic-unfetch");
var youtubedl = require("youtube-dl-exec");
var progress = require("progress-estimator")();
var { getDetails } = require("spotify-url-info")(fetch);
var contentDisposition = require("content-disposition");
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;
var PFPORT = process.env.PFPORT || process.env.pfport || 3003;

function shrink(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
        (res) => {
          res.on("data", (chunk) => {
            resolve(chunk.toString());
          });
        }
      )
      .on("error", (err) => {
        reject(err);
      });
  });
}

var express = require("express");
var app = express();
var spin = new Spinnies();
spin.add("premiumdl", { text: "Blackmagik Server Started" });
app.use(cors());
app.use(express.json());
app.listen(PFPORT, () => console.log("bit.ly/premiumdl :: " + PFPORT));
app.get("/", (request, response) => {
  return response.send("bit.ly/premiumdl");
});

app.get("/spotify", async (request, response) => {
  try {
    var _ALINK;
    var _DROP;
    console.log(request.query);
    axios({
      method: "get",
      url: "https://magneum.vercel.app/api/youtube_sr?q=" + request.query,
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
    }).then(async (response) => {
      var fetchedata = response.data;
      try {
        _DROP = youtubedl(fetchedata.meta.url, {
          noWarnings: true,
          dumpSingleJson: true,
          preferFreeformats: true,
          noCheckCertificates: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });
      } catch (error) {
        _DROP = Tube(fetchedata.meta.url, {
          noWarnings: true,
          dumpSingleJson: true,
          preferFreeformats: true,
          noCheckCertificates: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });
      }
      var YouGhost = await progress(_DROP, "Obtaining: " + " ");
      console.log(_ALINK);
      // =========================================================
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
        _ALINK = db_medium.url;
      } else if (db_medium.width === undefined && db_low.width !== undefined) {
        _ALINK = db_low.url;
      } else if (
        db_medium.width === undefined &&
        db_low.width === undefined &&
        db_ultralow.width !== undefined
      ) {
        _ALINK = db_ultralow.url;
      }
      // =========================================================
      response.setHeader(
        "Content-disposition",
        contentDisposition(`premiumdl-spotify_audio-${request.query.title}.mp3`)
      );
      FFmpeg(_ALINK)
        .setFfmpegPath(FFmpegPath)
        .setFfprobePath(FFmpegProbe)
        .format("mp3")
        .output(response, { end: true })
        .on("error", (error) => console.error("ERROR: " + error.message))
        .on("end", () =>
          console.log("INFO: stream sent to client successfully.")
        )
        .run();
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error: error.message });
  }
});

app.get("/video", async (request, response) => {
  try {
    console.log(request.query);
    response.setHeader(
      "Content-disposition",
      contentDisposition("premiumdl -video-" + request.query.title + ".mp4")
    );
    FFmpeg()
      .setFfmpegPath(FFmpegPath)
      .setFfprobePath(FFmpegProbe)
      .addInput(request.query.video)
      .addInput(request.query.audio)
      .outputOptions(["-map 0:v", "-map 1:a", "-shortest", "-c:v copy"])
      .videoCodec("libx264")
      .withAudioCodec("aac")
      .format("mp4")
      .outputOptions(["-movflags", "frag_keyframe + empty_moov"])
      .on("error", (e) => console.error("ERROR: " + e.message))
      .on("end", () => console.log("INFO: stream sent to client successfully."))
      .output(response, { end: true })
      .run();
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error: error.message });
  }
});

app.get("/audio", async (request, response) => {
  try {
    console.log(request.query);
    response.setHeader(
      "Content-disposition",
      contentDisposition("premiumdl -audio-" + request.query.title + ".mp3")
    );
    FFmpeg(request.query.audio)
      .setFfmpegPath(FFmpegPath)
      .setFfprobePath(FFmpegProbe)
      .format("mp3")
      .output(response, { end: true })
      .on("error", (e) => console.error("ERROR: " + e.message))
      .on("end", () => console.log("INFO: stream sent to client successfully."))
      .run();
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error: error.message });
  }
});

app.get("/metadata", async (request, response) => {
  try {
    var _ALINK;
    axios({
      method: "get",
      url: "https://magneum.vercel.app/api/youtube_sr?q=" + request.query,
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
    }).then(async (response) => {
      var fetchedata = response.data;
      _FOUND = [
        {
          YT_Id: fetchedata.youtube_search.YT_Id,
          TITLE: fetchedata.youtube_search.TITLE,
          UPLOADED: fetchedata.youtube_search.UPLOADED,
          VIEWS: fetchedata.youtube_search.VIEWS,
          DURATION_FULL: fetchedata.youtube_search.DURATION_FULL,
          DURATION_SECONDS: fetchedata.youtube_search.DURATION_SECONDS,
          AUTHOR_NAME: fetchedata.youtube_search.AUTHOR_NAME,
          AUTHOR_CHANNEL: fetchedata.youtube_search.AUTHOR_CHANNEL,
          LINK: fetchedata.youtube_search.LINK,
          THUMB: fetchedata.youtube_search.THUMB,
          HQ_IMAGE: fetchedata.youtube_search.HQ_IMAGE,
          DESCRIPTION: fetchedata.youtube_search.DESCRIPTION,
        },
      ];
      var _DROP;
      try {
        _DROP = youtubedl(_FOUND[0].LINK, {
          noWarnings: true,
          dumpSingleJson: true,
          preferFreeformats: true,
          noCheckCertificates: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });
      } catch (error) {
        _DROP = Tube(_FOUND[0].LINK, {
          noWarnings: true,
          dumpSingleJson: true,
          preferFreeformats: true,
          noCheckCertificates: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });
      }
      var YouGhost = await progress(_DROP, "Obtaining: " + " ");
      // =========================================================
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
        _ALINK = db_medium.url;
      } else if (db_medium.width === undefined && db_low.width !== undefined) {
        _ALINK = db_low.url;
      } else if (
        db_medium.width === undefined &&
        db_low.width === undefined &&
        db_ultralow.width !== undefined
      ) {
        _ALINK = db_ultralow.url;
      }
      // =========================================================
      var v_1080p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "399" ||
          v.format_id === "137" ||
          v.format_id === "248"
      );
      var tuub_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
      var v_720p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "247" ||
          v.format_id === "398" ||
          v.format_id === "136" ||
          v.format_id === "22"
      );
      var tuub_720p =
        v_720p[3] || v_720p[2] || v_720p[1] || v_720p[0] || v_720p;
      var v_480p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "397" ||
          v.format_id === "135" ||
          v.format_id === "244"
      );
      var tuub_480p = v_480p[0] || v_480p[1] || v_480p[2] || v_480p;
      var v_360p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "396" ||
          v.format_id === "134" ||
          v.format_id === "18" ||
          v.format_id === "243"
      );
      var tuub_360p =
        v_360p[0] || v_360p[1] || v_360p[2] || v_360p[3] || v_360p;
      var v_240p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "395" ||
          v.format_id === "133" ||
          v.format_id === "242"
      );
      var tuub_240p = v_240p[0] || v_240p[1] || v_240p[2] || v_240p;
      var v_144p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "17" ||
          v.format_id === "597" ||
          v.format_id === "598" ||
          v.format_id === "394" ||
          v.format_id === "160" ||
          v.format_id === "278"
      );
      var tuub_144p =
        v_144p[0] ||
        v_144p[1] ||
        v_144p[2] ||
        v_144p[3] ||
        v_144p[4] ||
        v_144p[5] ||
        v_144p;
      // =========================================================
      if (tuub_1080p.width !== undefined) {
        return response.send({
          success: true,
          _search: _FOUND[0],
          _audio: await shrink(_ALINK),
          _video: {
            _1080p: await shrink(tuub_1080p.url),
            _720p: await shrink(tuub_720p.url),
            _480p: await shrink(tuub_480p.url),
            _360p: await shrink(tuub_360p.url),
            _240p: await shrink(tuub_240p.url),
            _144p: await shrink(tuub_144p.url),
          },
        });
      } else if (
        tuub_1080p.width === undefined &&
        tuub_720p.width !== undefined
      ) {
        return response.send({
          success: true,
          _search: _FOUND[0],
          _audio: _ALINK,
          _video: {
            _1080p: undefined,
            _720p: await shrink(tuub_720p.url),
            _480p: await shrink(tuub_480p.url),
            _360p: await shrink(tuub_360p.url),
            _240p: await shrink(tuub_240p.url),
            _144p: await shrink(tuub_144p.url),
          },
        });
      } else if (
        tuub_1080p.width === undefined &&
        tuub_720p.width === undefined &&
        tuub_480p.width !== undefined
      ) {
        return response.send({
          success: true,
          _search: _FOUND[0],
          _audio: _ALINK,
          _video: {
            _1080p: undefined,
            _720p: undefined,
            _480p: await shrink(tuub_480p.url),
            _360p: await shrink(tuub_360p.url),
            _240p: await shrink(tuub_240p.url),
            _144p: await shrink(tuub_144p.url),
          },
        });
      } else if (
        tuub_1080p.width === undefined &&
        tuub_720p.width === undefined &&
        tuub_480p.width === undefined &&
        tuub_360p.width !== undefined
      ) {
        return response.send({
          success: true,
          _search: _FOUND[0],
          _audio: _ALINK,
          _video: {
            _1080p: undefined,
            _720p: undefined,
            _480p: undefined,
            _360p: await shrink(tuub_360p.url),
            _240p: await shrink(tuub_240p.url),
            _144p: await shrink(tuub_144p.url),
          },
        });
      } else if (
        tuub_1080p.width === undefined &&
        tuub_720p.width === undefined &&
        tuub_480p.width === undefined &&
        tuub_360p.width === undefined &&
        tuub_240p.width !== undefined
      ) {
        return response.send({
          success: true,
          _search: _FOUND[0],
          _audio: _ALINK,
          _video: {
            _1080p: undefined,
            _720p: undefined,
            _480p: undefined,
            _360p: undefined,
            _240p: await shrink(tuub_240p.url),
            _144p: await shrink(tuub_144p.url),
          },
        });
      } else if (
        tuub_1080p.width === undefined &&
        tuub_720p.width === undefined &&
        tuub_480p.width === undefined &&
        tuub_360p.width === undefined &&
        tuub_240p.width === undefined &&
        tuub_144p.width !== undefined
      ) {
        return response.send({
          success: true,
          _search: _FOUND[0],
          _audio: _ALINK,
          _video: {
            _1080p: undefined,
            _720p: undefined,
            _480p: undefined,
            _360p: undefined,
            _240p: undefined,
            _144p: await shrink(tuub_144p.url),
          },
        });
      } else {
        return response.status(400).json({
          success: false,
          error: "ERROR: no downloadable video link found.",
        });
      }
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error: error.message });
  }
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
