const Downloader = require(`nodejs-file-downloader`);
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
const fs = require(`fs`);
const akaneko = require(`akaneko`);

(async () => {
  const link = await akaneko.nsfw.blowjob();
  try {
    if (link.endsWith(`.png`)) {
      const downloader = await new Downloader({
        url: link,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `link__.png`,
        cloneFiles: false,
      });
      await downloader.download().then(async () => {});
    } else if (link.endsWith(`.webp`)) {
      const downloader = await new Downloader({
        url: link,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `link__.webp`,
        cloneFiles: false,
      });
      await downloader.download().then(async () => {
        await ffmpeg
          .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/link__.webp`)
          .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/link__.png`)
          .on("end", async () => {
            console.log("Finished WEBP to PNG");
          })
          .on("error", (e) => console.log(e))
          .run();
      });
    } else if (link.endsWith(`.jpg`)) {
      const downloader = await new Downloader({
        url: link,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `link__.jpg`,
        cloneFiles: false,
      });
      await downloader.download().then(async () => {
        await ffmpeg
          .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/link__.jpg`)
          .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/link__.png`)
          .on("end", async () => {
            console.log("Finished JPG to PNG");
          })
          .on("error", (e) => console.log(e))
          .run();
      });
    } else if (link.endsWith(`.jpeg`)) {
      const downloader = await new Downloader({
        url: link,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `link__.jpeg`,
        cloneFiles: false,
      });
      await downloader.download().then(async () => {
        await ffmpeg
          .input(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/link__.jpeg`)
          .output(`./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷/link__.png`)
          .on("end", async () => {
            console.log("Finished JPEG to PNG");
          })
          .on("error", (e) => console.log(e))
          .run();
      });
    } else if (
      !link.endsWith(`.png`) ||
      !link.endsWith(`.webp`) ||
      !link.endsWith(`.jpg`) ||
      !link.endsWith(`.jpeg`) ||
      !link.endsWith(`.gif`) ||
      !link.endsWith(`.mp4`)
    ) {
      const downloader = await new Downloader({
        url: link,
        directory: `./𝓜𝖎𝖟𝖚ӄ𝖎🗑️𝓑𝓲𝓷`,
        fileName: `link__.png`,
        cloneFiles: false,
      });
      await downloader.download().then(async () => {});
    }
  } catch (ℓαвєяяσя) {
    if (ℓαвєяяσя.status == 404 || ℓαвєяяσя.status == 400) {
      console.log("Not Found");
    }
  }
})();
