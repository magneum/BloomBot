const { YouTube_Video } = require(`./ᴄᴏʀʟᴇxᴀ🛰️Server/youmaker`);
const Downloader = require(`nodejs-file-downloader`);
const TinyURL = require("tinyurl");
const fs = require(`fs`);

YouTube_Video("https://youtu.be/ZceKV-l9d_k").then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res;
  TinyURL.shorten(dl_link).then(
    async function (DirectFile) {
      const downloader = await new Downloader({
        url: DirectFile,
        directory: `${__dirname}`,
        fileName: Date.now() + ".mp4",
        cloneFiles: false,
      });
      try {
        await downloader.download();
      } catch (Error) {
        console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
      }

    },
    async function (Error) {
      console.log(`⬡═══════════════════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
    }
  );
});
