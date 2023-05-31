var YouTubeAudio = require("../utils/YouAudio");
var { randomUUID } = require("crypto");
var ffmpeg = require("fluent-ffmpeg");

function downloadAndConvertToMP3(url, outputPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(url)
      .noVideo()
      .audioCodec("libmp3lame")
      .outputOptions("-q:a", "2")
      .output(outputPath)
      .on("end", () => {
        console.log("Audio conversion completed successfully.");
        resolve(outputPath);
      })
      .on("error", (error) => {
        console.error("Error occurred during FFmpeg conversion:", error);
        reject(error);
      })
      .run();
  });
}

return YouTubeAudio("5 sec music")
  .then(async (AudioLink) => {
    var mp3FilePath = randomUUID() + ".mp3";
    downloadAndConvertToMP3(AudioLink.audio, mp3FilePath).then();
  })
  .catch((error) => {
    console.error(error);
  });
