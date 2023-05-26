("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
let { proto, getContentType } = require("@adiwajshing/baileys");
let { sizeFormatter } = require("human-readable");
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
  let νℓкhat = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);
  let dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  let hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  let mDisplay =
    νℓкhat > 0 ? νℓкhat + (νℓкhat == 1 ? " minute, " : " minutes, ") : "";
  let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  let h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  let νℓкhat = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  let s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, νℓкhat, s].map((v) => v.toString().padStart(2, 0)).join(":");
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
    (v) => v[1] + "@s.whatsapp.net"
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

exports.νkmake = async (νℓкуяє, νℓкhat, store) => {
  if (!νℓкhat) return νℓкhat;
  let νproto = proto.WebMessageInfo;
  if (νℓкhat.key) {
    νℓкhat.id = νℓкhat.key.id;
    νℓкhat.isBaileys = νℓкhat.id.startsWith("BAE5") && νℓкhat.id.length === 16;
    νℓкhat.chat = νℓкhat.key.remoteJid;
    νℓкhat.fromMe = νℓкhat.key.fromMe;
    νℓкhat.isGroup = νℓкhat.chat.endsWith("@g.us");
    νℓкhat.sender = νℓкуяє.decodeJid(
      (νℓкhat.fromMe && νℓкуяє.user.id) ||
        νℓкhat.participant ||
        νℓкhat.key.participant ||
        νℓкhat.chat ||
        ""
    );
    if (νℓкhat.isGroup)
      νℓкhat.participant = νℓкуяє.decodeJid(νℓкhat.key.participant) || "";
  }
  if (νℓкhat.message) {
    νℓкhat.mtype = getContentType(νℓкhat.message);
    νℓкhat.msg =
      νℓкhat.mtype == "viewOnceMessage"
        ? νℓкhat.message[νℓкhat.mtype].message[
            getContentType(νℓкhat.message[νℓкhat.mtype].message)
          ]
        : νℓкhat.message[νℓкhat.mtype];
    νℓкhat.body =
      νℓкhat.message.conversation ||
      νℓкhat.msg.caption ||
      νℓкhat.msg.text ||
      (νℓкhat.mtype == "listResponseMessage" &&
        νℓкhat.msg.singleSelectReply.selectedRowId) ||
      (νℓкhat.mtype == "buttonsResponseMessage" &&
        νℓкhat.msg.selectedButtonId) ||
      (νℓкhat.mtype == "viewOnceMessage" && νℓкhat.msg.caption) ||
      νℓкhat.text;
    let quoted = (νℓкhat.quoted = νℓкhat.msg.contextInfo
      ? νℓкhat.msg.contextInfo.quotedMessage
      : null);
    νℓкhat.mentionedJid = νℓкhat.msg.contextInfo
      ? νℓкhat.msg.contextInfo.mentionedJid
      : [];
    if (νℓкhat.quoted) {
      let type = getContentType(quoted);
      νℓкhat.quoted = νℓкhat.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(νℓкhat.quoted);
        νℓкhat.quoted = νℓкhat.quoted[type];
      }
      if (typeof νℓкhat.quoted === "string")
        νℓкhat.quoted = {
          text: νℓкhat.quoted,
        };
      νℓкhat.quoted.mtype = type;
      νℓкhat.quoted.id = νℓкhat.msg.contextInfo.stanzaId;
      νℓкhat.quoted.chat = νℓкhat.msg.contextInfo.remoteJid || νℓкhat.chat;
      νℓкhat.quoted.isBaileys = νℓкhat.quoted.id
        ? νℓкhat.quoted.id.startsWith("BAE5") && νℓкhat.quoted.id.length === 16
        : false;
      νℓкhat.quoted.sender = νℓкуяє.decodeJid(
        νℓкhat.msg.contextInfo.participant
      );
      νℓкhat.quoted.fromMe =
        νℓкhat.quoted.sender === (νℓкуяє.user && νℓкуяє.user.id);
      νℓкhat.quoted.text =
        νℓкhat.quoted.text ||
        νℓкhat.quoted.caption ||
        νℓкhat.quoted.conversation ||
        νℓкhat.quoted.contentText ||
        νℓкhat.quoted.selectedDisplayText ||
        νℓкhat.quoted.title ||
        "";
      νℓкhat.quoted.mentionedJid = νℓкhat.msg.contextInfo
        ? νℓкhat.msg.contextInfo.mentionedJid
        : [];
      νℓкhat.getQuotedObj = νℓкhat.getQuotedMessage = async () => {
        if (!νℓкhat.quoted.id) return false;
        let q = await store.loadMessage(νℓкhat.chat, νℓкhat.quoted.id, νℓкуяє);
        return exports.νkmake(νℓкуяє, q, store);
      };
      let vM = (νℓкhat.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: νℓкhat.quoted.chat,
          fromMe: νℓкhat.quoted.fromMe,
          id: νℓкhat.quoted.id,
        },
        message: quoted,
        ...(νℓкhat.isGroup ? { participant: νℓкhat.quoted.sender } : {}),
      }));
      νℓкhat.quoted.delete = () =>
        νℓкуяє.sendMessage(νℓкhat.quoted.chat, { delete: vM.key });
      νℓкhat.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        νℓкуяє.copyNForward(jid, vM, forceForward, options);
      νℓкhat.quoted.download = () => νℓкуяє.downloadMediaMessage(νℓкhat.quoted);
    }
  }

  if (νℓкhat.msg.url)
    νℓкhat.download = () => νℓкуяє.downloadMediaMessage(νℓкhat.msg);
  νℓкhat.text =
    νℓкhat.msg.text ||
    νℓкhat.msg.caption ||
    νℓкhat.message.conversation ||
    νℓкhat.msg.contentText ||
    νℓкhat.msg.selectedDisplayText ||
    νℓкhat.msg.title ||
    "";
  νℓкhat.reply = (text, chatId = νℓкhat.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? νℓкуяє.sendMedia(chatId, text, "file", "", νℓкhat, { ...options })
      : νℓкуяє.sendText(chatId, text, νℓкhat, { ...options });
  νℓкhat.copy = () =>
    exports.νkmake(νℓкуяє, νproto.fromObject(νproto.toObject(νℓкhat)));
  νℓкhat.copyNForward = (
    jid = νℓкhat.chat,
    forceForward = false,
    options = {}
  ) => νℓкуяє.copyNForward(jid, νℓкhat, forceForward, options);

  return νℓкhat;
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
