"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║>> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║>> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║>> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║>> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║>> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║>> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║>> 📞 Need assistance or have issues? Contact our developers.
//  ║>> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║>> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║>>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║>>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║>>    subsidiaries. This is an independent and unofficial software.
//  ║>>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const { proto, getContentType } = require("@whiskeysockets/baileys");
const { sizeFormatter } = require("human-readable");
const child_process = require("child_process");
const moment = require("moment-timezone");
const { unlink } = require("fs").promises;
const axios = require("axios");
const util = require("util");
const fs = require("fs");

const unixTimestampSeconds = (date = new Date()) =>
  Math.floor(date.getTime() / 1000);
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
exports.unixTimestampSeconds = unixTimestampSeconds;

exports.generateMessageTag = (epoch) => {
  const tag = (0, exports.unixTimestampSeconds)().toString();
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
    const res = await axios({
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
    const res = await axios({
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
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const Sockey = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  const mDisplay =
    Sockey > 0 ? Sockey + (Sockey == 1 ? " minute, " : " minutes, ") : "";
  const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  const h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  const Sockey = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  const s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, Sockey, s].map((v) => v.toString().padStart(2, 0)).join(":");
};

exports.sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

exports.isUrl = (url) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,
      "gi",
    ),
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
  const d = new Date(n);
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
  for (const i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i];
  return null;
};

exports.generateProfilePicture = async (buffer) => {
  const jimp = await jimp_1.read(buffer);
  const min = jimp.getWidth();
  const max = jimp.getHeight();
  const cropped = jimp.crop(0, 0, min, max);
  return {
    img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
    preview: await cropped
      .scaleToFit(720, 720)
      .getBufferAsync(jimp_1.MIME_JPEG),
  };
};

exports.bytesToSize = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

exports.getSizeMedia = (path) => {
  return new Promise((resolve, reject) => {
    if (/http/.test(path)) {
      axios.get(path).then((res) => {
        const length = parseInt(res.headers["content-length"]);
        const size = exports.bytesToSize(length, 3);
        if (!isNaN(length)) resolve(size);
      });
    } else if (Buffer.isBuffer(path)) {
      const length = Buffer.byteLength(path);
      const size = exports.bytesToSize(length, 3);
      if (!isNaN(length)) resolve(size);
    } else {
      reject("error gatau apah");
    }
  });
};

exports.parseMention = (text = "") => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.whatsapp.net",
  );
};

exports.GIFBufferToVideoBuffer = async (image) => {
  const filename = `${Math.random().toString(36)}`;
  fs.writeFileSync(`./Bin/${filename}.gif`, image);
  child_process.exec(
    `ffmpeg -i ./Bin/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Bin/${filename}.mp4`,
  );
  await sleep(4000);

  const buffer5 = fs.readFileSync(`./Bin/${filename}.mp4`);
  Promise.all([
    unlink(`./Bin/${filename}.mp4`),
    unlink(`./Bin/${filename}.gif`),
  ]);
  return buffer5;
};

exports.Sockey_maker = async (BloomBot, Sockey, store) => {
  if (!Sockey) return Sockey;
  const νproto = proto.WebMessageInfo;
  if (Sockey.key) {
    Sockey.id = Sockey.key.id;
    Sockey.isBaileys =
      Sockey.id.startsWith("BAE5") && Sockey.id.length === 16;
    Sockey.chat = Sockey.key.remoteJid;
    Sockey.fromMe = Sockey.key.fromMe;
    Sockey.isGroup = Sockey.chat.endsWith("@g.us");
    Sockey.sender = BloomBot.decodeJid(
      (Sockey.fromMe && BloomBot.user.id) ||
        Sockey.participant ||
        Sockey.key.participant ||
        Sockey.chat ||
        "",
    );
    if (Sockey.isGroup)
      Sockey.participant = BloomBot.decodeJid(Sockey.key.participant) || "";
  }
  if (Sockey.message) {
    Sockey.mtype = getContentType(Sockey.message);
    Sockey.msg =
      Sockey.mtype == "viewOnceMessage"
        ? Sockey.message[Sockey.mtype].message[
            getContentType(Sockey.message[Sockey.mtype].message)
          ]
        : Sockey.message[Sockey.mtype];
    Sockey.body =
      Sockey.message.conversation ||
      Sockey.msg.caption ||
      Sockey.msg.text ||
      (Sockey.mtype == "listResponseMessage" &&
        Sockey.msg.singleSelectReply.selectedRowId) ||
      (Sockey.mtype == "buttonsResponseMessage" &&
        Sockey.msg.selectedButtonId) ||
      (Sockey.mtype == "viewOnceMessage" && Sockey.msg.caption) ||
      Sockey.text;
    const quoted = (Sockey.quoted = Sockey.msg.contextInfo
      ? Sockey.msg.contextInfo.quotedMessage
      : null);
    Sockey.mentionedJid = Sockey.msg.contextInfo
      ? Sockey.msg.contextInfo.mentionedJid
      : [];
    if (Sockey.quoted) {
      const type = getContentType(quoted);
      Sockey.quoted = Sockey.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(Sockey.quoted);
        Sockey.quoted = Sockey.quoted[type];
      }
      if (typeof Sockey.quoted === "string")
        Sockey.quoted = {
          text: Sockey.quoted,
        };
      Sockey.quoted.mtype = type;
      Sockey.quoted.id = Sockey.msg.contextInfo.stanzaId;
      Sockey.quoted.chat = Sockey.msg.contextInfo.remoteJid || Sockey.chat;
      Sockey.quoted.isBaileys = Sockey.quoted.id
        ? Sockey.quoted.id.startsWith("BAE5") &&
          Sockey.quoted.id.length === 16
        : false;
      Sockey.quoted.sender = BloomBot.decodeJid(
        Sockey.msg.contextInfo.participant,
      );
      Sockey.quoted.fromMe =
        Sockey.quoted.sender === (BloomBot.user && BloomBot.user.id);
      Sockey.quoted.text =
        Sockey.quoted.text ||
        Sockey.quoted.caption ||
        Sockey.quoted.conversation ||
        Sockey.quoted.contentText ||
        Sockey.quoted.selectedDisplayText ||
        Sockey.quoted.title ||
        "";
      Sockey.quoted.mentionedJid = Sockey.msg.contextInfo
        ? Sockey.msg.contextInfo.mentionedJid
        : [];
      Sockey.getQuotedObj = Sockey.getQuotedMessage = async () => {
        if (!Sockey.quoted.id) return false;
        const q = await store.loadMessage(
          Sockey.chat,
          Sockey.quoted.id,
          BloomBot,
        );
        return exports.Sockey_maker(BloomBot, q, store);
      };
      const vM = (Sockey.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: Sockey.quoted.chat,
          fromMe: Sockey.quoted.fromMe,
          id: Sockey.quoted.id,
        },
        message: quoted,
        ...(Sockey.isGroup ? { participant: Sockey.quoted.sender } : {}),
      }));
      Sockey.quoted.delete = () =>
        BloomBot.sendMessage(Sockey.quoted.chat, { delete: vM.key });
      Sockey.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        BloomBot.copyNForward(jid, vM, forceForward, options);
      Sockey.quoted.download = () =>
        BloomBot.downloadMediaMessage(Sockey.quoted);
    }
  }

  if (Sockey.msg.url)
    Sockey.download = () => BloomBot.downloadMediaMessage(Sockey.msg);
  Sockey.text =
    Sockey.msg.text ||
    Sockey.msg.caption ||
    Sockey.message.conversation ||
    Sockey.msg.contentText ||
    Sockey.msg.selectedDisplayText ||
    Sockey.msg.title ||
    "";
  Sockey.reply = (text, chatId = Sockey.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? BloomBot.sendMedia(chatId, text, "file", "", Sockey, { ...options })
      : BloomBot.sendText(chatId, text, Sockey, { ...options });
  Sockey.copy = () =>
    exports.Sockey_maker(
      BloomBot,
      νproto.fromObject(νproto.toObject(Sockey)),
    );
  Sockey.copyNForward = (
    jid = Sockey.chat,
    forceForward = false,
    options = {},
  ) => BloomBot.copyNForward(jid, Sockey, forceForward, options);

  return Sockey;
};
