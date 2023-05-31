//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸBloomBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var { proto, getContentType } = require("@adiwajshing/baileys");
var { sizeFormatter } = require("human-readable");
var child_process = require("child_process");
var moment = require("moment-timezone");
var { unlink } = require("fs").promises;
var axios = require("axios");
var util = require("util");
var fs = require("fs");

var unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);
var sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
exports.unixTimestampSeconds = unixTimestampSeconds;

exports.generateMessageTag = (epoch) => {
  var tag = (0, exports.unixTimestampSeconds)().toString();
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
    var res = await axios({
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
    var res = await axios({
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
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var blyat = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay =
    blyat > 0 ? blyat + (blyat == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  var h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  var blyat = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  var s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, blyat, s].map((v) => v.toString().padStart(2, 0)).join(":");
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
  var d = new Date(n);
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

exports.formatp = sizeFormatter({
  std: "JEDEC",
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

exports.jsonformat = (string) => {
  return JSON.stringify(string, null, 2);
};

function format(...args) {
  return util.format(...args);
}

exports.logic = (check, inp, out) => {
  if (inp.length !== out.length)
    throw new Error("Input and Output must have same length");
  for (var i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
};

exports.generateProfilePicture = async (buffer) => {
  var jimp = await jimp_1.read(buffer);
  var min = jimp.getWidth();
  var max = jimp.getHeight();
  var cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped
      .scaleToFit(720, 720)
      .getBufferAsync(jimp_1.MIME_JPEG),
  };
};

exports.bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  var k = 1024;
  var dm = decimals < 0 ? 0 : decimals;
  var sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  var i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

exports.getSizeMedia = (path) => {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        var length = parseInt(res.headers["content-length"]);
        var size = exports.bytesToSize(length, 3);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      var length = Buffer.byteLength(path);
      var size = exports.bytesToSize(length, 3);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("error gatau apah");
    }
  });
};

exports.parseMention = (text = "") => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.whatsapp.net"
  );
};

exports.GIFBufferToVideoBuffer = async (image) => {
  var filename = `${Math.random().toString(36)}`;
  await fs.writeFileSync(`./Bin/${filename}.gif`, image);
  child_process.exec(
    `ffmpeg -i ./Bin/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Bin/${filename}.mp4`
  );
  await sleep(4000);

  var buffer5 = await fs.readFileSync(`./Bin/${filename}.mp4`);
  Promise.all([
    unlink(`./Bin/${filename}.mp4`),
    unlink(`./Bin/${filename}.gif`),
  ]);
  return buffer5;
};

exports.mMake = async (BloomBot, blyat, store) => {
  if (!blyat) return blyat;
  var νproto = proto.WebMessageInfo;
  if (blyat.key) {
    blyat.id = blyat.key.id;
    blyat.isBaileys =
      blyat.id.startsWith("BAE5") && blyat.id.length === 16;
    blyat.chat = blyat.key.remoteJid;
    blyat.fromMe = blyat.key.fromMe;
    blyat.isGroup = blyat.chat.endsWith("@g.us");
    blyat.sender = BloomBot.decodeJid(
      (blyat.fromMe && BloomBot.user.id) ||
        blyat.participant ||
        blyat.key.participant ||
        blyat.chat ||
        ""
    );
    if (blyat.isGroup)
      blyat.participant = BloomBot.decodeJid(blyat.key.participant) || "";
  }
  if (blyat.message) {
    blyat.mtype = getContentType(blyat.message);
    blyat.msg =
      blyat.mtype == "viewOnceMessage"
        ? blyat.message[blyat.mtype].message[
            getContentType(blyat.message[blyat.mtype].message)
          ]
        : blyat.message[blyat.mtype];
    blyat.body =
      blyat.message.conversation ||
      blyat.msg.caption ||
      blyat.msg.text ||
      (blyat.mtype == "listResponseMessage" &&
        blyat.msg.singleSelectReply.selectedRowId) ||
      (blyat.mtype == "buttonsResponseMessage" &&
        blyat.msg.selectedButtonId) ||
      (blyat.mtype == "viewOnceMessage" && blyat.msg.caption) ||
      blyat.text;
    var quoted = (blyat.quoted = blyat.msg.contextInfo
      ? blyat.msg.contextInfo.quotedMessage
      : null);
    blyat.mentionedJid = blyat.msg.contextInfo
      ? blyat.msg.contextInfo.mentionedJid
      : [];
    if (blyat.quoted) {
      var type = getContentType(quoted);
      blyat.quoted = blyat.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(blyat.quoted);
        blyat.quoted = blyat.quoted[type];
      }
      if (typeof blyat.quoted === "string")
        blyat.quoted = {
          text: blyat.quoted,
        };
      blyat.quoted.mtype = type;
      blyat.quoted.id = blyat.msg.contextInfo.stanzaId;
      blyat.quoted.chat = blyat.msg.contextInfo.remoteJid || blyat.chat;
      blyat.quoted.isBaileys = blyat.quoted.id
        ? blyat.quoted.id.startsWith("BAE5") &&
          blyat.quoted.id.length === 16
        : false;
      blyat.quoted.sender = BloomBot.decodeJid(
        blyat.msg.contextInfo.participant
      );
      blyat.quoted.fromMe =
        blyat.quoted.sender === (BloomBot.user && BloomBot.user.id);
      blyat.quoted.text =
        blyat.quoted.text ||
        blyat.quoted.caption ||
        blyat.quoted.conversation ||
        blyat.quoted.contentText ||
        blyat.quoted.selectedDisplayText ||
        blyat.quoted.title ||
        "";
      blyat.quoted.mentionedJid = blyat.msg.contextInfo
        ? blyat.msg.contextInfo.mentionedJid
        : [];
      blyat.getQuotedObj = blyat.getQuotedMessage = async () => {
        if (!blyat.quoted.id) return false;
        var q = await store.loadMessage(
          blyat.chat,
          blyat.quoted.id,
          BloomBot
        );
        return exports.mMake(BloomBot, q, store);
      };
      var vM = (blyat.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: blyat.quoted.chat,
          fromMe: blyat.quoted.fromMe,
          id: blyat.quoted.id,
        },
        message: quoted,
        ...(blyat.isGroup ? { participant: blyat.quoted.sender } : {}),
      }));
      blyat.quoted.delete = () =>
        BloomBot.sendMessage(blyat.quoted.chat, { delete: vM.key });
      blyat.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        BloomBot.copyNForward(jid, vM, forceForward, options);
      blyat.quoted.download = () =>
        BloomBot.downloadMediaMessage(blyat.quoted);
    }
  }

  if (blyat.msg.url)
    blyat.download = () => BloomBot.downloadMediaMessage(blyat.msg);
  blyat.text =
    blyat.msg.text ||
    blyat.msg.caption ||
    blyat.message.conversation ||
    blyat.msg.contentText ||
    blyat.msg.selectedDisplayText ||
    blyat.msg.title ||
    "";
  blyat.reply = (text, chatId = blyat.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? BloomBot.sendMedia(chatId, text, "file", "", blyat, { ...options })
      : BloomBot.sendText(chatId, text, blyat, { ...options });
  blyat.copy = () =>
    exports.mMake(BloomBot, νproto.fromObject(νproto.toObject(blyat)));
  blyat.copyNForward = (
    jid = blyat.chat,
    forceForward = false,
    options = {}
  ) => BloomBot.copyNForward(jid, blyat, forceForward, options);

  return blyat;
};

var file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  delete require.cache[file];
  require(file);
});
