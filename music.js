const ytdl = require("ytdl-core");
const videoURL = "https://www.youtube.com/watch?v=S3Dpfyc15qQ";

async function getBestAudioURL() {
  try {
    const info = await ytdl.getInfo(videoURL);
    const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
    const bestAudio = audioFormats.find((format) => format.audioBitrate);

    if (!bestAudio) {
      console.log("No audio formats found");
      return;
    }

    console.log("Audio download URL:", bestAudio.url);
  } catch (error) {
    console.log("Error:", error);
  }
}
getBestAudioURL();
