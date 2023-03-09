// ==============================================================================================
require("dotenv").config();
var cors = require("cors");
var https = require("https");
var axios = require("axios");
var Tube = require("tube-exec");
var Spinnies = require("spinnies");
var FFmpeg = require("fluent-ffmpeg");
var YouTube_Sr = require("yt-search");
var fetch = require("isomorphic-unfetch");
var youtubedl = require("youtube-dl-exec");
var progress = require("progress-estimator")();
var { getDetails } = require("spotify-url-info")(fetch);
var contentDisposition = require("content-disposition");
var FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
var FFmpegProbe = require("@ffprobe-installer/ffprobe").path;
var PFPORT = process.env.PFPORT || process.env.pfport || 3003;
// ==============================================================================================
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
// ==============================================================================================
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
// ==============================================================================================
app.get("/spotify", async (request, response) => {
  try {
    let _ALINK;
    let _DROP;
    console.log(request.query);
    YouTube_Sr(request.query.title).then(async (_sdata) => {
      let QueryFound = _sdata.videos.slice(0, 1);
      QueryFound.forEach(async function (Qresponse) {
        console.log(Qresponse);
        try {
          _DROP = youtubedl(Qresponse.url, {
            noWarnings: true,
            dumpSingleJson: true,
            preferFreeFormats: true,
            noCheckCertificates: true,
            addHeader: ["referer:youtube.com", "user-agent:googlebot"],
          });
        } catch (error) {
          _DROP = Tube(Qresponse.url, {
            noWarnings: true,
            dumpSingleJson: true,
            preferFreeFormats: true,
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
        } else if (
          db_medium.width === undefined &&
          db_low.width !== undefined
        ) {
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
          contentDisposition(
            `premiumdl-spotify_audio-${request.query.title}.mp3`
          )
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
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error: error.message });
  }
});
// ==============================================================================================
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
// ==============================================================================================
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
// ==============================================================================================
app.get("/metadata", async (request, response) => {
  try {
    let _ALINK;
    YouTube_Sr(request.query.q).then(async (_sdata) => {
      let QueryFound = _sdata.videos.slice(0, 1);
      QueryFound.forEach(async function (Qresponse) {
        _FOUND = [
          {
            YT_ID: Qresponse.videoId,
            TITLE: Qresponse.title,
            UPLOADED: Qresponse.ago,
            VIEWS: Qresponse.views,
            DURATION_FULL: Qresponse.duration.timestamp,
            DURATION_SECONDS: Qresponse.duration.seconds,
            AUTHOR_NAME: Qresponse.author.name,
            AUTHOR_CHANNEL: Qresponse.author.url,
            LINK: Qresponse.url,
            THUMB: Qresponse.thumbnail,
            HQ_IMAGE: Qresponse.image,
            DESCRIPTION: Qresponse.description,
          },
        ];
        let _DROP;
        try {
          _DROP = youtubedl(_FOUND[0].LINK, {
            noWarnings: true,
            dumpSingleJson: true,
            preferFreeFormats: true,
            noCheckCertificates: true,
            addHeader: ["referer:youtube.com", "user-agent:googlebot"],
          });
        } catch (error) {
          _DROP = Tube(_FOUND[0].LINK, {
            noWarnings: true,
            dumpSingleJson: true,
            preferFreeFormats: true,
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
        } else if (
          db_medium.width === undefined &&
          db_low.width !== undefined
        ) {
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
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error: error.message });
  }
});
// ==============================================================================================
// http://localhost:9786/metadata?q=emptiness
// http://localhost:9786/audio?audio=https://tinyurl.com/2fzw596d&title=Hello
// http://localhost:9786/video?video=https://tinyurl.com/2dracs26&audio=https://tinyurl.com/2fzw596d&title=premiumdl
// ==============================================================================================
