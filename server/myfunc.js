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
let { proto, getContentType } = require("@adiwajshing/baileys");
// let { sizeformatter } = require("human-readable");
let child_process = require("child_process");
let moment = require("moment-timezone");
let { unlink } = require("fs").promises;
let chalk = require("chalk");
let axios = require("axios");
let util = require("util");
let fs = require("fs");

let unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);
let sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
exports.unixTimestampSeconds = unixTimestampSeconds;

exports.generateMessageTag = (epoch) => {
  let tag = (0, exports.unixTimestampSeconds)().toString();
  if (epoch) tag += ".--" + epoch;
  return tag;
};

exports.processTime = (timestamp, now) => {
  return moment.duration(now - moment(timestamp * 1000)).asSeconds();
};

exports.getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`;
};

exports.getBuffer = async (url, options) => {
  try {
    options ? options : {};
    let res = await axios({
      method: "get",
      url,
      headers: {
        DNT: 1,
        "Upgrade-Insecure-Request": 1,
      },
      ...options,
      responseType: "arraybuffer",
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.fetchJson = async (url, options) => {
  try {
    options ? options : {};
    let res = await axios({
      method: "GET",
      url: url,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
      },
      ...options,
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

exports.runtime = function (seconds) {
  seconds = Number(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let voxchat = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);
  let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  let mDisplay =
    voxchat > 0 ? voxchat + (voxchat == 1 ? " minute, " : " minutes, ") : "";
  let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  let voxchat = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, voxchat, s].map((v) => v.toString().padStart(2, 0)).join(":");
};

exports.sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

exports.isUrl = (url) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
      "gi"
    )
  );
};

exports.getTime = (format, date) => {
  if (date) {
    return moment(date).locale("id").format(format);
  } else {
    return moment.tz("Asia/Jakarta").locale("id").format(format);
  }
};

exports.formatDate = (n, locale = "id") => {
  let d = new Date(n);
  return d.toLocaleDateString(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

// exports.formatp = sizeformatter({
//   std: "JEDEC",
//   decimalPlaces: 2,
//   keepTrailingZeroes: false,
//   render: (literal, symbol) => `${literal} ${symbol}B`,
// });

exports.jsonformat = (string) => {
  return JSON.stringify(string, null, 2);
};

function format(...args) {
  return util.format(...args);
}

exports.logic = (check, inp, out) => {
  if (inp.length !== out.length)
    throw new Error("Input and Output must have same length");
  for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
};

exports.generateProfilePicture = async (buffer) => {
  let jimp = await jimp_1.read(buffer);
  let min = jimp.getWidth();
  let max = jimp.getHeight();
  let cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped
      .scaleToFit(720, 720)
      .getBufferAsync(jimp_1.MIME_JPEG),
  };
};

exports.bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  let k = 1024;
  let dm = decimals < 0 ? 0 : decimals;
  let sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  let i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

exports.getSizeMedia = (path) => {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        let length = parseInt(res.headers["content-length"]);
        let size = exports.bytesToSize(length, 3);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      let length = Buffer.byteLength(path);
      let size = exports.bytesToSize(length, 3);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("error gatau apah");
    }
  });
};

exports.parseMention = (text = "") => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.voxapp.net"
  );
};

exports.GIFBufferToVideoBuffer = async (image) => {
  let filename = `${Math.random().toString(36)}`;
  await fs.writeFileSync(`./Bin/${filename}.gif`, image);
  child_process.exec(
    `ffmpeg -i ./Bin/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Bin/${filename}.mp4`
  );
  await sleep(4000);

  let buffer5 = await fs.readFileSync(`./Bin/${filename}.mp4`);
  Promise.all([
    unlink(`./Bin/${filename}.mp4`),
    unlink(`./Bin/${filename}.gif`),
  ]);
  return buffer5;
};

<<<<<<< HEAD
exports.νkmake = async (WhatsBot, voxchat, store) => {
=======
exports.νkmake = async (voxbot, voxchat, store) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  if (!voxchat) return voxchat;
  let νproto = proto.WebMessageInfo;
  if (voxchat.key) {
    voxchat.id = voxchat.key.id;
    voxchat.isBaileys =
      voxchat.id.startsWith("BAE5") && voxchat.id.length === 16;
    voxchat.chat = voxchat.key.remoteJid;
    voxchat.fromMe = voxchat.key.fromMe;
    voxchat.isGroup = voxchat.chat.endsWith("@g.us");
<<<<<<< HEAD
    voxchat.sender = WhatsBot.decodeJid(
      (voxchat.fromMe && WhatsBot.user.id) ||
=======
    voxchat.sender = voxbot.decodeJid(
      (voxchat.fromMe && voxbot.user.id) ||
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        voxchat.participant ||
        voxchat.key.participant ||
        voxchat.chat ||
        ""
    );
    if (voxchat.isGroup)
<<<<<<< HEAD
      voxchat.participant = WhatsBot.decodeJid(voxchat.key.participant) || "";
=======
      voxchat.participant = voxbot.decodeJid(voxchat.key.participant) || "";
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  }
  if (voxchat.message) {
    voxchat.mtype = getContentType(voxchat.message);
    voxchat.msg =
      voxchat.mtype == "viewOnceMessage"
        ? voxchat.message[voxchat.mtype].message[
            getContentType(voxchat.message[voxchat.mtype].message)
          ]
        : voxchat.message[voxchat.mtype];
    voxchat.body =
      voxchat.message.conversation ||
      voxchat.msg.caption ||
      voxchat.msg.text ||
      (voxchat.mtype == "listResponseMessage" &&
        voxchat.msg.singleSelectReply.selectedRowId) ||
      (voxchat.mtype == "buttonsResponseMessage" &&
        voxchat.msg.selectedButtonId) ||
      (voxchat.mtype == "viewOnceMessage" && voxchat.msg.caption) ||
      voxchat.text;
    let quoted = (voxchat.quoted = voxchat.msg.contextInfo
      ? voxchat.msg.contextInfo.quotedMessage
      : null);
    voxchat.mentionedJid = voxchat.msg.contextInfo
      ? voxchat.msg.contextInfo.mentionedJid
      : [];
    if (voxchat.quoted) {
      let type = getContentType(quoted);
      voxchat.quoted = voxchat.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(voxchat.quoted);
        voxchat.quoted = voxchat.quoted[type];
      }
      if (typeof voxchat.quoted === "string")
        voxchat.quoted = {
          text: voxchat.quoted,
        };
      voxchat.quoted.mtype = type;
      voxchat.quoted.id = voxchat.msg.contextInfo.stanzaId;
      voxchat.quoted.chat = voxchat.msg.contextInfo.remoteJid || voxchat.chat;
      voxchat.quoted.isBaileys = voxchat.quoted.id
        ? voxchat.quoted.id.startsWith("BAE5") &&
          voxchat.quoted.id.length === 16
        : false;
<<<<<<< HEAD
      voxchat.quoted.sender = WhatsBot.decodeJid(
        voxchat.msg.contextInfo.participant
      );
      voxchat.quoted.fromMe =
        voxchat.quoted.sender === (WhatsBot.user && WhatsBot.user.id);
=======
      voxchat.quoted.sender = voxbot.decodeJid(
        voxchat.msg.contextInfo.participant
      );
      voxchat.quoted.fromMe =
        voxchat.quoted.sender === (voxbot.user && voxbot.user.id);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      voxchat.quoted.text =
        voxchat.quoted.text ||
        voxchat.quoted.caption ||
        voxchat.quoted.conversation ||
        voxchat.quoted.contentText ||
        voxchat.quoted.selectedDisplayText ||
        voxchat.quoted.title ||
        "";
      voxchat.quoted.mentionedJid = voxchat.msg.contextInfo
        ? voxchat.msg.contextInfo.mentionedJid
        : [];
      voxchat.getQuotedObj = voxchat.getQuotedMessage = async () => {
        if (!voxchat.quoted.id) return false;
        let q = await store.loadMessage(
          voxchat.chat,
          voxchat.quoted.id,
<<<<<<< HEAD
          WhatsBot
        );
        return exports.νkmake(WhatsBot, q, store);
=======
          voxbot
        );
        return exports.νkmake(voxbot, q, store);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      };
      let vM = (voxchat.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: voxchat.quoted.chat,
          fromMe: voxchat.quoted.fromMe,
          id: voxchat.quoted.id,
        },
        message: quoted,
        ...(voxchat.isGroup ? { participant: voxchat.quoted.sender } : {}),
      }));
      voxchat.quoted.delete = () =>
<<<<<<< HEAD
        WhatsBot.sendMessage(voxchat.quoted.chat, { delete: vM.key });
      voxchat.quoted.copyNforward = (jid, forceforward = false, options = {}) =>
        WhatsBot.copyNforward(jid, vM, forceforward, options);
      voxchat.quoted.download = () =>
        WhatsBot.downloadMediaMessage(voxchat.quoted);
=======
        voxbot.sendMessage(voxchat.quoted.chat, { delete: vM.key });
      voxchat.quoted.copyNforward = (jid, forceforward = false, options = {}) =>
        voxbot.copyNforward(jid, vM, forceforward, options);
      voxchat.quoted.download = () =>
        voxbot.downloadMediaMessage(voxchat.quoted);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    }
  }

  if (voxchat.msg.url)
<<<<<<< HEAD
    voxchat.download = () => WhatsBot.downloadMediaMessage(voxchat.msg);
=======
    voxchat.download = () => voxbot.downloadMediaMessage(voxchat.msg);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  voxchat.text =
    voxchat.msg.text ||
    voxchat.msg.caption ||
    voxchat.message.conversation ||
    voxchat.msg.contentText ||
    voxchat.msg.selectedDisplayText ||
    voxchat.msg.title ||
    "";
  voxchat.reply = (text, chatId = voxchat.chat, options = {}) =>
    Buffer.isBuffer(text)
<<<<<<< HEAD
      ? WhatsBot.sendMedia(chatId, text, "file", "", voxchat, { ...options })
      : WhatsBot.sendText(chatId, text, voxchat, { ...options });
  voxchat.copy = () =>
    exports.νkmake(WhatsBot, νproto.fromObject(νproto.toObject(voxchat)));
=======
      ? voxbot.sendMedia(chatId, text, "file", "", voxchat, { ...options })
      : voxbot.sendText(chatId, text, voxchat, { ...options });
  voxchat.copy = () =>
    exports.νkmake(voxbot, νproto.fromObject(νproto.toObject(voxchat)));
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
  voxchat.copyNforward = (
    jid = voxchat.chat,
    forceforward = false,
    options = {}
<<<<<<< HEAD
  ) => WhatsBot.copyNforward(jid, voxchat, forceforward, options);
=======
  ) => voxbot.copyNforward(jid, voxchat, forceforward, options);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

  return voxchat;
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
