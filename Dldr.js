const ffmpeg = require("fluent-ffmpeg");
const ytdl = require("ytdl-core");
const yts = require("yt-search");

(async () => {
  let ID;
  var song = await yts(args.join(" "));
  song = song.all;
  ID = song[0].url;
  var stream = ytdl(ID, {
    quality: "highestaudio",
  });
  ffmpeg(stream)
    .audioBitrate(128)
    .toFormat("ipod")
    .saveToFile(`./${ID}.mp3`)
    .on("end", async () => {
      console.log("Finished!");
    });
})();
