let nhentai = require("nhentai-node-api");
let topdf = require("image-to-pdf");
let request = require("request");
let fs = require("fs-extra");

// module
const FormData = require("form-data");
const { default: Axios } = require("axios");
const filetype = require("file-type");
//end module

//function upload file
const uploadFile = (path) =>
  new Promise((resolve, reject) => {
    const fs = require("fs");
    const fd = new FormData();
    fd.append("file", fs.createReadStream(path));
    Axios({
      method: "POST",
      url: "https://uploader.caliph.my.id/upload",
      data: fd,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: {
        "user-agent": "MRHRTZ-ZONE :D",
        "content-type": `multipart/form-data; boundary=${fd._boundary}`,
      },
    })
      .then(({ data }) => resolve(data))
      .catch(reject);
  });
// end function
exports.toURL = uploadFile;

exports.NhentaiDL = async (msg, args, conn) => {
  if (!args[0]) return msg.reply(`Penggunaan #nhentai 298547`);
  if (isNaN(args[0])) return msg.reply("Pake angka");
  await msg.reply("Loading...");
  let count = 0;
  let ResultPdf = [];
  let doujin = await nhentai.getDoujin(args[0]);
  let title = doujin.title.default;
  let details = doujin.details;
  let parodies = details.parodies.map((v) => v.name);
  let characters = details.characters.map((v) => v.name);
  let tags = details.tags.map((v) => v.name);
  let artists = details.artists.map((v) => v.name);
  let groups = details.groups.map((v) => v.name);
  let categories = details.categories.map((v) => v.name);
  let array_page = doujin.pages.map((a) =>
    a.replace(/(t[0-9]\.nhentai)/, "i.nhentai")
  );

  await conn.sendFile(
    msg.from,
    array_page[0],
    Date.now() + ".jpg",
    `*${title}*\n_${doujin.title.native || ""}_\n• Language: ${
      doujin.language
    }\n• Parodies: ${parodies.join(", ")}\n• Groups: ${groups.join(
      ", "
    )}\n• Artists: ${artists.join(", ")}\n• Tags: ${tags.join(
      ", "
    )}\n• Categories: ${categories.join(", ")}\n• Pages: ${
      array_page.length
    }\n• Favorited: ${doujin.favorites}\n• Link: ${doujin.link}`,
    msg
  );
  if (array_page.length > 50)
    return msg.reply("terlalu banyak halaman, Maks Page 50!");
  for (let i = 0; i < array_page.length; i++) {
    if (!fs.existsSync("./nhentai")) fs.mkdirSync("./nhentai");
    let image_name = "./nhentai/" + title + i + ".jpg";
    await new Promise((resolve) =>
      request(array_page[i])
        .pipe(fs.createWriteStream(image_name))
        .on("finish", resolve)
    );
    console.log(array_page[i]);
    ResultPdf.push(image_name);
    count++;
  }

  await new Promise((resolve) =>
    topdf(ResultPdf, "A4")
      .pipe(fs.createWriteStream("./nhentai/" + title + ".pdf"))
      .on("finish", resolve)
  );

  for (let i = 0; i < array_page.length; i++) {
    fs.unlink("./nhentai/" + title + i + ".jpg");
  }

  let size = await fs.statSync(`./nhentai/${title}.pdf`).size;
  if (size < 10000000) {
    await msg.reply("Uploading...");
    let thumbnail = await conn.getBuffer(doujin.cover);
    await conn
      .sendFile(
        msg.from,
        fs.readFileSync(`./nhentai/${title}.pdf`),
        `${title}.pdf`,
        "",
        msg,
        false,
        {
          asDocument: true,
          thumbnail: thumbnail,
        }
      )
      .then(() => fs.unlinkSync(`./nhentai/${title}.pdf`));
  } else {
    await msg.reply("Uploading to up.rzkyfdlh.tech because file size to large");
    URL = await uploadFile(`./nhentai/${title}.pdf`);
    fs.unlinkSync(`./nhentai/${title}.pdf`);
    await msg.reply("Link download to file: " + URL.result.url);
  }
};
