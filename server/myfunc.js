//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
  var wwChat = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay =
    wwChat > 0 ? wwChat + (wwChat == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  var h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  var wwChat = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  var s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, wwChat, s].map((v) => v.toString().padStart(2, 0)).join(":");
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

exports.mMake = async (OpenBot, wwChat, store) => {
  if (!wwChat) return wwChat;
  var νproto = proto.WebMessageInfo;
  if (wwChat.key) {
    wwChat.id = wwChat.key.id;
    wwChat.isBaileys =
      wwChat.id.startsWith("BAE5") && wwChat.id.length === 16;
    wwChat.chat = wwChat.key.remoteJid;
    wwChat.fromMe = wwChat.key.fromMe;
    wwChat.isGroup = wwChat.chat.endsWith("@g.us");
    wwChat.sender = OpenBot.decodeJid(
      (wwChat.fromMe && OpenBot.user.id) ||
        wwChat.participant ||
        wwChat.key.participant ||
        wwChat.chat ||
        ""
    );
    if (wwChat.isGroup)
      wwChat.participant = OpenBot.decodeJid(wwChat.key.participant) || "";
  }
  if (wwChat.message) {
    wwChat.mtype = getContentType(wwChat.message);
    wwChat.msg =
      wwChat.mtype == "viewOnceMessage"
        ? wwChat.message[wwChat.mtype].message[
            getContentType(wwChat.message[wwChat.mtype].message)
          ]
        : wwChat.message[wwChat.mtype];
    wwChat.body =
      wwChat.message.conversation ||
      wwChat.msg.caption ||
      wwChat.msg.text ||
      (wwChat.mtype == "listResponseMessage" &&
        wwChat.msg.singleSelectReply.selectedRowId) ||
      (wwChat.mtype == "buttonsResponseMessage" &&
        wwChat.msg.selectedButtonId) ||
      (wwChat.mtype == "viewOnceMessage" && wwChat.msg.caption) ||
      wwChat.text;
    var quoted = (wwChat.quoted = wwChat.msg.contextInfo
      ? wwChat.msg.contextInfo.quotedMessage
      : null);
    wwChat.mentionedJid = wwChat.msg.contextInfo
      ? wwChat.msg.contextInfo.mentionedJid
      : [];
    if (wwChat.quoted) {
      var type = getContentType(quoted);
      wwChat.quoted = wwChat.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(wwChat.quoted);
        wwChat.quoted = wwChat.quoted[type];
      }
      if (typeof wwChat.quoted === "string")
        wwChat.quoted = {
          text: wwChat.quoted,
        };
      wwChat.quoted.mtype = type;
      wwChat.quoted.id = wwChat.msg.contextInfo.stanzaId;
      wwChat.quoted.chat = wwChat.msg.contextInfo.remoteJid || wwChat.chat;
      wwChat.quoted.isBaileys = wwChat.quoted.id
        ? wwChat.quoted.id.startsWith("BAE5") &&
          wwChat.quoted.id.length === 16
        : false;
      wwChat.quoted.sender = OpenBot.decodeJid(
        wwChat.msg.contextInfo.participant
      );
      wwChat.quoted.fromMe =
        wwChat.quoted.sender === (OpenBot.user && OpenBot.user.id);
      wwChat.quoted.text =
        wwChat.quoted.text ||
        wwChat.quoted.caption ||
        wwChat.quoted.conversation ||
        wwChat.quoted.contentText ||
        wwChat.quoted.selectedDisplayText ||
        wwChat.quoted.title ||
        "";
      wwChat.quoted.mentionedJid = wwChat.msg.contextInfo
        ? wwChat.msg.contextInfo.mentionedJid
        : [];
      wwChat.getQuotedObj = wwChat.getQuotedMessage = async () => {
        if (!wwChat.quoted.id) return false;
        var q = await store.loadMessage(
          wwChat.chat,
          wwChat.quoted.id,
          OpenBot
        );
        return exports.mMake(OpenBot, q, store);
      };
      var vM = (wwChat.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: wwChat.quoted.chat,
          fromMe: wwChat.quoted.fromMe,
          id: wwChat.quoted.id,
        },
        message: quoted,
        ...(wwChat.isGroup ? { participant: wwChat.quoted.sender } : {}),
      }));
      wwChat.quoted.delete = () =>
        OpenBot.sendMessage(wwChat.quoted.chat, { delete: vM.key });
      wwChat.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        OpenBot.copyNForward(jid, vM, forceForward, options);
      wwChat.quoted.download = () =>
        OpenBot.downloadMediaMessage(wwChat.quoted);
    }
  }

  if (wwChat.msg.url)
    wwChat.download = () => OpenBot.downloadMediaMessage(wwChat.msg);
  wwChat.text =
    wwChat.msg.text ||
    wwChat.msg.caption ||
    wwChat.message.conversation ||
    wwChat.msg.contentText ||
    wwChat.msg.selectedDisplayText ||
    wwChat.msg.title ||
    "";
  wwChat.reply = (text, chatId = wwChat.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? OpenBot.sendMedia(chatId, text, "file", "", wwChat, { ...options })
      : OpenBot.sendText(chatId, text, wwChat, { ...options });
  wwChat.copy = () =>
    exports.mMake(OpenBot, νproto.fromObject(νproto.toObject(wwChat)));
  wwChat.copyNForward = (
    jid = wwChat.chat,
    forceForward = false,
    options = {}
  ) => OpenBot.copyNForward(jid, wwChat, forceForward, options);

  return wwChat;
};

var file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  delete require.cache[file];
  require(file);
});
