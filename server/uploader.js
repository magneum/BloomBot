<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
let fs = require("fs");
let axios = require("axios");
let cheerio = require("cheerio");
let Bodyform = require("form-data");

function TelegraPh(Path) {
  return new Promise(async (resolve, reject) => {
    if (!fs.existsSync(Path)) return reject(new Error("File not Found"));
    try {
      let form = new Bodyform();
      form.append("file", fs.createReadStream(Path));
      let data = await axios({
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
    let form = new Bodyform();
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
    let form = new Bodyform();
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
        let bodyformThen = new Bodyform();
        let $ = cheerio.load(data);
        let file = $('input[name="file"]').attr("value");
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
            let $ = cheerio.load(data);
            let result =
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
