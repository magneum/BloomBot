const ytlist = require("youtube-playlist");
const fs = require("fs");
const path = require("path");
const ytdl = require("ytdl-core");

const printProgress = (message) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(message);
};

const createFolders = (folder) => {
  if (!fs.existsSync(`download`))
    fs.mkdirSync(`download`, (err) => {
      if (err) {
        console.error("Couldn't create folder download");
        return 0;
      }
      console.info("Successfully created folder download");
    });
  if (!fs.existsSync(`download/${folder}`))
    fs.mkdirSync(`download/${folder}`, (err) => {
      if (err) {
        console.error(`Couldn't create folder download/${folder}`);
        return 0;
      }
      console.info(`Successfully created folder download/${folder}`);
    });
  return 1;
};

const download = (url, folder, title, options) => {
  const writer = fs.createWriteStream(
    path.resolve(__dirname, "download", folder, `${title}.mp4`)
  );
  let contentLength = 0;
  ytdl(url, options)
    .on("info", (videoInfo, videoFormat) => {
      contentLength = Number(videoFormat.contentLength);
    })
    .on("progress", (byteReceived, totalByteReceived, totalByteFile) => {
      if (contentLength)
        printProgress(
          `Completed ${((totalByteReceived / totalByteFile) * 100).toFixed(
            2
          )} %`
        );
    })
    .pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

module.exports = (url, options) => {
  ytlist(url, ["url", "name"]).then(async (res) => {
    const { name: foldername, playlist } = res.data;
    const folder = await createFolders(foldername);
    if (folder) {
      for (let i = 0; i < playlist.length; i++) {
        const { url, name: title } = playlist[i];
        console.info(
          `Started ${title.replace(/\||\?|\\|\/|\:|\*|"|\<|\>/g, "-")}`
        );
        try {
          await download(
            url,
            foldername.replace(/\||\?|\\|\/|\:|\*|"|\<|\>/g, "-"),
            title.replace(/\||\?|\\|\/|\:|\*|"|\<|\>/g, "-"),
            options
          );
        } catch (err) {
          console.error(err);
          i--;
        }
        console.info(
          `\nCompleted ${title.replace(/\||\?|\\|\/|\:|\*|"|\<|\>/g, "-")}`
        );
      }
    } else {
      console.error("Could't create folder. Quititng...");
    }
  });
};
