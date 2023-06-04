const youtubedl = require("youtube-dl-exec");
const fluent = require("fluent-ffmpeg");
const chalk = require("chalk");

function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength).trim();
  }
  return str;
}

function logWithBullet(bullet, message, color) {
  console.log(chalk[color](`${bullet} ${message}`));
}

async function downloadAudio() {
  try {
    const videoUrl = "https://www.youtube.com/watch?v=S3Dpfyc15qQ";

    const info = await youtubedl(videoUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
    });

    if (!info || !info.formats || info.formats.length === 0) {
      throw new Error(chalk.red("No audio formats found for the video."));
    }

    const audioFormats = info.formats.filter((format) =>
      format.acodec.startsWith("mp4a"),
    );

    if (audioFormats.length === 0) {
      throw new Error(chalk.red("No audio formats found for the video."));
    }

    const bestAudio = audioFormats.reduce((prev, current) =>
      prev.abr > current.abr ? prev : current,
    );

    logWithBullet("•", "Video title: " + info.title, "cyan");
    logWithBullet("•", "Video duration: " + info.duration, "green");
    logWithBullet("•", "Video author: " + info.uploader, "magenta");
    logWithBullet("•", "Video view count: " + info.view_count, "yellow");
    logWithBullet("•", "Video thumbnail URL: " + info.thumbnail, "blue");
    logWithBullet("•", "Audio download URL: " + bestAudio.url, "cyanBright");

    logWithBullet(chalk.white("• Best Audio Format:"), "", "white");
    Object.entries(bestAudio).forEach(([key, value]) => {
      const keyColor = key === "url" ? "cyan" : "gray";
      logWithBullet(
        chalk.gray("  - " + key + ":"),
        chalk[keyColor](value),
        keyColor,
      );
    });

    const maxLength = 50;
    const audioTitle = truncateString(
      info.title.replace(/[^\w\s-]/g, ""),
      maxLength,
    );
    const outputPath = `${audioTitle}.m4a`;

    await new Promise((resolve, reject) => {
      fluent(bestAudio.url)
        .outputOptions(["-c:v", "copy", "-c:a", "copy", "-f", "ipod"])
        .on("end", () => {
          logWithBullet(
            "✓",
            "Audio file downloaded successfully: " + outputPath,
            "green",
          );
          resolve();
        })
        .on("error", (error) => {
          reject(chalk.red(error));
        })
        .save(outputPath);
    });
  } catch (error) {
    console.log(chalk.red("Error:"), error.message);
  }
}

downloadAudio();
