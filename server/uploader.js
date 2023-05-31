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
const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const Bodyform = require("form-data");

function TelegraPh(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
    try {
      const form = new Bodyform();
      form.append("file", fs.createReadStream(Path));
      const data = await axios({
        url: "https://telegra.ph/upload",
        method: "POST",
        headers: {
          ...form.getHeaders(),
        },
        data: form,
      });
      return resolve("https://telegra.ph" + data.data[0].public);
    } catch (err) {
      return reject(new Error(String(err)));
    }
  });
}

async function UploadFileUgu(input) {
  return new Promise(async (resolve, reject) => {
    const form = new Bodyform();
    form.append("files[]", fs.createReadStream(input));
    await axios({
      url: "https://uguu.se/upload.php",
      method: "POST",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
        ...form.getHeaders(),
      },
      data: form,
    })
      .then((data) => {
        resolve(data.data.files[0]);
      })
      .catch((err) => reject(err));
  });
}

function webp2mp4File(path) {
  return new Promise((resolve, reject) => {
    const form = new Bodyform();
    form.append("new-image-url", "");
    form.append("new-image", fs.createReadStream(path));
    axios({
      method: "post",
      url: "https://s6.ezgif.com/webp-to-mp4",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      },
    })
      .then(({ data }) => {
        const bodyformThen = new Bodyform();
        const $ = cheerio.load(data);
        const file = $('input[name="file"]').attr("value");
        bodyformThen.append("file", file);
        bodyformThen.append("convert", "Convert WebP to MP4!");
        axios({
          method: "post",
          url: "https://ezgif.com/webp-to-mp4/" + file,
          data: bodyformThen,
          headers: {
            "Content-Type": `multipart/form-data; boundary=${bodyformThen._boundary}`,
          },
        })
          .then(({ data }) => {
            const $ = cheerio.load(data);
            const result =
              "https:" +
              $("div#output > p.outfile > video > source").attr("public");
            resolve({
              status: true,
              message: "Created By MRHRTZ",
              result: result,
            });
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

module.exports = { TelegraPh, UploadFileUgu, webp2mp4File };
