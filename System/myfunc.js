("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var { proto, delay, getContentType } = require("@adiwajshing/baileys");
var { sizeFormatter } = require("human-readable");
var { defaultMaxListeners } = require("stream");
var child_process = require("child_process");
var moment = require("moment-timezone");
var { unlink } = require("fs").promises;
var ffmpeg = require("fluent-ffmpeg");
var Crypto = require("crypto");
var chalk = require("chalk");
var axios = require("axios");
var util = require("util");
var jimp = require("jimp");
var fs = require("fs");
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);
var sleep = (ms) => {
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
  var vcнaт = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay =
    vcнaт > 0 ? vcнaт + (vcнaт == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  let vcнaт = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, vcнaт, s].map((v) => v.toString().padStart(2, 0)).join(":");
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

exports.formatp = sizeFormatter({
  std: "JEDEC", //'SI' = default | 'IEC' | 'JEDEC'
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
  for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
exports.νkmake = async (νℓкуяє, vcнaт, store) => {
  if (!vcнaт) return vcнaт;
  let νproto = proto.WebMessageInfo;
  if (vcнaт.key) {
    vcнaт.id = vcнaт.key.id;
    vcнaт.isBaileys = vcнaт.id.startsWith("BAE5") && vcнaт.id.length === 16;
    vcнaт.chat = vcнaт.key.remoteJid;
    vcнaт.fromMe = vcнaт.key.fromMe;
    vcнaт.isGroup = vcнaт.chat.endsWith("@g.us");
    vcнaт.sender = νℓкуяє.decodeJid(
      (vcнaт.fromMe && νℓкуяє.user.id) ||
        vcнaт.participant ||
        vcнaт.key.participant ||
        vcнaт.chat ||
        ""
    );
    if (vcнaт.isGroup)
      vcнaт.participant = νℓкуяє.decodeJid(vcнaт.key.participant) || "";
  }
  if (vcнaт.message) {
    vcнaт.mtype = getContentType(vcнaт.message);
    vcнaт.msg =
      vcнaт.mtype == "viewOnceMessage"
        ? vcнaт.message[vcнaт.mtype].message[
            getContentType(vcнaт.message[vcнaт.mtype].message)
          ]
        : vcнaт.message[vcнaт.mtype];
    vcнaт.body =
      vcнaт.message.conversation ||
      vcнaт.msg.caption ||
      vcнaт.msg.text ||
      (vcнaт.mtype == "listResponseMessage" &&
        vcнaт.msg.singleSelectReply.selectedRowId) ||
      (vcнaт.mtype == "buttonsResponseMessage" &&
        vcнaт.msg.selectedButtonId) ||
      (vcнaт.mtype == "viewOnceMessage" && vcнaт.msg.caption) ||
      vcнaт.text;
    let quoted = (vcнaт.quoted = vcнaт.msg.contextInfo
      ? vcнaт.msg.contextInfo.quotedMessage
      : null);
    vcнaт.mentionedJid = vcнaт.msg.contextInfo
      ? vcнaт.msg.contextInfo.mentionedJid
      : [];
    if (vcнaт.quoted) {
      let type = getContentType(quoted);
      vcнaт.quoted = vcнaт.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(vcнaт.quoted);
        vcнaт.quoted = vcнaт.quoted[type];
      }
      if (typeof vcнaт.quoted === "string")
        vcнaт.quoted = {
          text: vcнaт.quoted,
        };
      vcнaт.quoted.mtype = type;
      vcнaт.quoted.id = vcнaт.msg.contextInfo.stanzaId;
      vcнaт.quoted.chat = vcнaт.msg.contextInfo.remoteJid || vcнaт.chat;
      vcнaт.quoted.isBaileys = vcнaт.quoted.id
        ? vcнaт.quoted.id.startsWith("BAE5") && vcнaт.quoted.id.length === 16
        : false;
      vcнaт.quoted.sender = νℓкуяє.decodeJid(
        vcнaт.msg.contextInfo.participant
      );
      vcнaт.quoted.fromMe =
        vcнaт.quoted.sender === (νℓкуяє.user && νℓкуяє.user.id);
      vcнaт.quoted.text =
        vcнaт.quoted.text ||
        vcнaт.quoted.caption ||
        vcнaт.quoted.conversation ||
        vcнaт.quoted.contentText ||
        vcнaт.quoted.selectedDisplayText ||
        vcнaт.quoted.title ||
        "";
      vcнaт.quoted.mentionedJid = vcнaт.msg.contextInfo
        ? vcнaт.msg.contextInfo.mentionedJid
        : [];
      vcнaт.getQuotedObj = vcнaт.getQuotedMessage = async () => {
        if (!vcнaт.quoted.id) return false;
        let q = await store.loadMessage(vcнaт.chat, vcнaт.quoted.id, νℓкуяє);
        return exports.νkmake(νℓкуяє, q, store);
      };
      let vM = (vcнaт.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: vcнaт.quoted.chat,
          fromMe: vcнaт.quoted.fromMe,
          id: vcнaт.quoted.id,
        },
        message: quoted,
        ...(vcнaт.isGroup ? { participant: vcнaт.quoted.sender } : {}),
      }));
      vcнaт.quoted.delete = () =>
        νℓкуяє.sendMessage(vcнaт.quoted.chat, { delete: vM.key });
      vcнaт.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        νℓкуяє.copyNForward(jid, vM, forceForward, options);
      vcнaт.quoted.download = () => νℓкуяє.downloadMediaMessage(vcнaт.quoted);
    }
  }

  if (vcнaт.msg.url)
    vcнaт.download = () => νℓкуяє.downloadMediaMessage(vcнaт.msg);
  vcнaт.text =
    vcнaт.msg.text ||
    vcнaт.msg.caption ||
    vcнaт.message.conversation ||
    vcнaт.msg.contentText ||
    vcнaт.msg.selectedDisplayText ||
    vcнaт.msg.title ||
    "";
  vcнaт.reply = (text, chatId = vcнaт.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? νℓкуяє.sendMedia(chatId, text, "file", "", vcнaт, { ...options })
      : νℓкуяє.sendText(chatId, text, vcнaт, { ...options });
  vcнaт.copy = () =>
    exports.νkmake(νℓкуяє, νproto.fromObject(νproto.toObject(vcнaт)));
  vcнaт.copyNForward = (
    jid = vcнaт.chat,
    forceForward = false,
    options = {}
  ) => νℓкуяє.copyNForward(jid, vcнaт, forceForward, options);

  return vcнaт;
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
