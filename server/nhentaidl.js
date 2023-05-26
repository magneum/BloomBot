// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
let fs = require("fs-extra");
let request = require("request");
let FormData = require("form-data");
let topdf = require("image-to-pdf");
let nhentai = require("nhentai-node-api");
let { default: Axios } = require("axios");

let uploadFile = (path) =>
  new Promise((resolve, reject) => {
    let fs = require("fs");
    let fd = new FormData();
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
