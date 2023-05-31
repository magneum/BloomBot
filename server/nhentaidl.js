//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭🌻𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  IS A WHATSAPP USER-BOT WITH AUTOMATION, MODERATION, MUSIC, GAMES AND MORE OF 200+ COMMANDS!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by Magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const fs = require("fs-extra");
const request = require("request");
const formgdata = require("form-data");
const topdf = require("image-to-pdf");
const nhentai = require("nhentai-node-api");
const { default: Axios } = require("axios");

const uploadFile = (path) =>
  new Promise((resolve, reject) => {
    const fs = require("fs");
    const fd = new formgdata();
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
  const count = 0;
  const ResultPdf = [];
  const doujin = await nhentai.getDoujin(args[0]);
  const title = doujin.title.default;
  const details = doujin.details;
  const parodies = details.parodies.map((v) => v.name);
  const characters = details.characters.map((v) => v.name);
  const tags = details.tags.map((v) => v.name);
  const artists = details.artists.map((v) => v.name);
  const groups = details.groups.map((v) => v.name);
  const categories = details.categories.map((v) => v.name);
  const array_page = doujin.pages.map((a) =>
    a.replace(/(t[0-9]\.nhentai)/, "i.nhentai")
  );

  await conn.sendFile(
    msg.from,
    array_page[0],
    Date.now() + ".png",
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
  for (const i = 0; i < array_page.length; i++) {
    if (!fs.existsSync("./nhentai")) fs.mkdirSync("./nhentai");
    const image_name = "./nhentai/" + title + i + ".png";
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

  for (const i = 0; i < array_page.length; i++) {
    fs.unlink("./nhentai/" + title + i + ".png");
  }

  const size = await fs.statSync(`./nhentai/${title}.pdf`).size;
  if (size < 10000000) {
    await msg.reply("Uploading...");
    const thumbnail = await conn.getBuffer(doujin.cover);
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
