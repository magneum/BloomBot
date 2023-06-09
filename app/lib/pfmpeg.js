"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("dotenv").config();
const cors = require("cors");
const https = require("https");
const axios = require("axios");
const Tube = require("tube-exec");
const Spinnies = require("spinnies");
const FFmpeg = require("fluent-ffmpeg");
const fetch = require("isomorphic-unfetch");
const youtubedl = require("youtube-dl-exec");
const progress = require("progress-estimator")();
const { getDetails } = require("spotify-url-info")(fetch);
const contentDisposition = require("content-disposition");
const FFmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const FFmpegProbe = require("@ffprobe-installer/ffprobe").path;
const PFPORT = process.env.PFPORT || process.env.pfport || 3003;

function shrink(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        "tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
        (res) => {
          res.on("data", (chunk) => {
            resolve(chunk.toString());
          });
        },
      )
      .on("error", (err) => {
        reject(err);
      });
  });
}

const express = require("express");
const client = express();
const spin = new Spinnies();
spin.add("premiumdl", { text: "Blackmagik Server Started" });
client.use(cors());
client.use(express.json());
client.listen(PFPORT, () => console.log("bit.ly/premiumdl :: " + PFPORT));
client.get("/", (request, response) => {
  return response.send("bit.ly/premiumdl");
});

client.get("/spotify", async (request, response) => {
  try {
    let _ALINK;
    let _DROP;
    console.log(request.query);
    axios({
      method: "get",
      url: "https://magneum.vercel.client/api/youtube_sr?q=" + request.query,
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
      const mgdata = response.data;
      try {
        _DROP = youtubedl(mgdata.meta.url, {
          noWarnings: true,
          dumpSingleJson: true,
          preferFreeformats: true,
          noCheckCertificates: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });
      } catch (error) {
        _DROP = Tube(mgdata.meta.url, {
          noWarnings: true,
          dumpSingleJson: true,
          preferFreeformats: true,
          noCheckCertificates: true,
          addHeader: ["referer:youtube.com", "user-agent:googlebot"],
        });
      }
      const YouGhost = await progress(_DROP, "Obtaining: " + " ");
      console.log(_ALINK);
      // =========================================================
      const a_ultralow = YouGhost.formats.filter(
        (v) => v.format_id === "599" || v.format_id === "600",
      );
      const db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
      const a_low = YouGhost.formats.filter(
        (v) =>
          v.format_id === "139" ||
          v.format_id === "249" ||
          v.format_id === "250",
      );
      const db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
      const a_medium = YouGhost.formats.filter(
        (v) => v.format_id === "140" || v.format_id === "251",
      );
      const db_medium = a_medium[0] || a_medium[1] || a_medium;

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
        contentDisposition(
          `premiumdl-spotify_audio-${request.query.title}.mp3`,
        ),
      );
      FFmpeg(_ALINK)
        .setFfmpegPath(FFmpegPath)
        .setFfprobePath(FFmpegProbe)
        .format("mp3")
        .output(response, { end: true })
        .on("error", (error) => console.error("ERROR: " + error.message))
        .on("end", () =>
          console.log("INFO: stream sent to client successfully."),
        )
        .run();
    });
  } catch (error) {
    console.log(error);
    return response.status(400).json({ success: false, error: error.message });
  }
});

client.get("/video", async (request, response) => {
  try {
    console.log(request.query);
    response.setHeader(
      "Content-disposition",
      contentDisposition("premiumdl -video-" + request.query.title + ".mp4"),
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

client.get("/audio", async (request, response) => {
  try {
    console.log(request.query);
    response.setHeader(
      "Content-disposition",
      contentDisposition("premiumdl -audio-" + request.query.title + ".mp3"),
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

client.get("/metadata", async (request, response) => {
  try {
    let _ALINK;
    axios({
      method: "get",
      url: "https://magneum.vercel.client/api/youtube_sr?q=" + request.query,
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
      const mgdata = response.data;
      _FOUND = [
        {
          YT_Id: mgdata.youtube_search.YT_Id,
          TITLE: mgdata.youtube_search.TITLE,
          UPLOADED: mgdata.youtube_search.UPLOADED,
          VIEWS: mgdata.youtube_search.VIEWS,
          DURATION_FULL: mgdata.youtube_search.DURATION_FULL,
          DURATION_SECONDS: mgdata.youtube_search.DURATION_SECONDS,
          AUTHOR_NAME: mgdata.youtube_search.AUTHOR_NAME,
          AUTHOR_CHANNEL: mgdata.youtube_search.AUTHOR_CHANNEL,
          LINK: mgdata.youtube_search.LINK,
          THUMB: mgdata.youtube_search.THUMB,
          HQ_IMAGE: mgdata.youtube_search.HQ_IMAGE,
          DESCRIPTION: mgdata.youtube_search.DESCRIPTION,
        },
      ];
      let _DROP;
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
      const YouGhost = await progress(_DROP, "Obtaining: " + " ");
      // =========================================================
      const a_ultralow = YouGhost.formats.filter(
        (v) => v.format_id === "599" || v.format_id === "600",
      );
      const db_ultralow = a_ultralow[0] || a_ultralow[1] || a_ultralow;
      const a_low = YouGhost.formats.filter(
        (v) =>
          v.format_id === "139" ||
          v.format_id === "249" ||
          v.format_id === "250",
      );
      const db_low = a_low[0] || a_low[1] || a_low[2] || a_low;
      const a_medium = YouGhost.formats.filter(
        (v) => v.format_id === "140" || v.format_id === "251",
      );
      const db_medium = a_medium[0] || a_medium[1] || a_medium;

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
      const v_1080p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "399" ||
          v.format_id === "137" ||
          v.format_id === "248",
      );
      const tuub_1080p = v_1080p[2] || v_1080p[1] || v_1080p[0] || v_1080p;
      const v_720p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "247" ||
          v.format_id === "398" ||
          v.format_id === "136" ||
          v.format_id === "22",
      );
      const tuub_720p =
        v_720p[3] || v_720p[2] || v_720p[1] || v_720p[0] || v_720p;
      const v_480p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "397" ||
          v.format_id === "135" ||
          v.format_id === "244",
      );
      const tuub_480p = v_480p[0] || v_480p[1] || v_480p[2] || v_480p;
      const v_360p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "396" ||
          v.format_id === "134" ||
          v.format_id === "18" ||
          v.format_id === "243",
      );
      const tuub_360p =
        v_360p[0] || v_360p[1] || v_360p[2] || v_360p[3] || v_360p;
      const v_240p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "395" ||
          v.format_id === "133" ||
          v.format_id === "242",
      );
      const tuub_240p = v_240p[0] || v_240p[1] || v_240p[2] || v_240p;
      const v_144p = YouGhost.formats.filter(
        (v) =>
          v.format_id === "17" ||
          v.format_id === "597" ||
          v.format_id === "598" ||
          v.format_id === "394" ||
          v.format_id === "160" ||
          v.format_id === "278",
      );
      const tuub_144p =
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot (md) by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
