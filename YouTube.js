(async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const { yta } = require("./VariableServers");
  const Downloader = require(`nodejs-file-downloader`);

  let { dl_link, thumb, title, filesize, filesizeF } = await yta(
    "https://youtu.be/1QnOyKJ7dmg",
    "en61"
  );
  console.log(thumb);
  console.log(title);
  console.log(dl_link);
  console.log(filesize);
  console.log(filesizeF);

  const Tinyurl = require("tinyurl-api");
  const TinyDone = await Tinyurl(dl_link);

  const downloader = await new Downloader({
    url: TinyDone,
    directory: `ᴠʟᴋʏʀᴇ🀄ᴇxʜᴀᴜꜱᴛ`,
    fileName: `${title}.mp3`,
    cloneFiles: false,
  });
  try {
    await downloader.download();
    console.log("All done");
  } catch (error) {
    console.log(error);
  }
})();
