"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const { proto, getContentType } = require("@adiwajshing/baileys");
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
  const chatkey = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  const mDisplay =
    chatkey > 0 ? chatkey + (chatkey == 1 ? " minute, " : " minutes, ") : "";
  const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.clockString = function (seconds) {
  const h = isNaN(seconds) ? "--" : Math.floor((seconds % (3600 * 24)) / 3600);
  const chatkey = isNaN(seconds) ? "--" : Math.floor((seconds % 3600) / 60);
  const s = isNaN(seconds) ? "--" : Math.floor(seconds % 60);
  return [h, chatkey, s].map((v) => v.toString().padStart(2, 0)).join(":");
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

exports.chatkey_maker = async (BloomBot, chatkey, store) => {
  if (!chatkey) return chatkey;
  const νproto = proto.WebMessageInfo;
  if (chatkey.key) {
    chatkey.id = chatkey.key.id;
    chatkey.isBaileys =
      chatkey.id.startsWith("BAE5") && chatkey.id.length === 16;
    chatkey.chat = chatkey.key.remoteJid;
    chatkey.fromMe = chatkey.key.fromMe;
    chatkey.isGroup = chatkey.chat.endsWith("@g.us");
    chatkey.sender = BloomBot.decodeJid(
      (chatkey.fromMe && BloomBot.user.id) ||
        chatkey.participant ||
        chatkey.key.participant ||
        chatkey.chat ||
        "",
    );
    if (chatkey.isGroup)
      chatkey.participant = BloomBot.decodeJid(chatkey.key.participant) || "";
  }
  if (chatkey.message) {
    chatkey.mtype = getContentType(chatkey.message);
    chatkey.msg =
      chatkey.mtype == "viewOnceMessage"
        ? chatkey.message[chatkey.mtype].message[
            getContentType(chatkey.message[chatkey.mtype].message)
          ]
        : chatkey.message[chatkey.mtype];
    chatkey.body =
      chatkey.message.conversation ||
      chatkey.msg.caption ||
      chatkey.msg.text ||
      (chatkey.mtype == "listResponseMessage" &&
        chatkey.msg.singleSelectReply.selectedRowId) ||
      (chatkey.mtype == "buttonsResponseMessage" &&
        chatkey.msg.selectedButtonId) ||
      (chatkey.mtype == "viewOnceMessage" && chatkey.msg.caption) ||
      chatkey.text;
    const quoted = (chatkey.quoted = chatkey.msg.contextInfo
      ? chatkey.msg.contextInfo.quotedMessage
      : null);
    chatkey.mentionedJid = chatkey.msg.contextInfo
      ? chatkey.msg.contextInfo.mentionedJid
      : [];
    if (chatkey.quoted) {
      const type = getContentType(quoted);
      chatkey.quoted = chatkey.quoted[type];
      if (["productMessage"].includes(type)) {
        type = getContentType(chatkey.quoted);
        chatkey.quoted = chatkey.quoted[type];
      }
      if (typeof chatkey.quoted === "string")
        chatkey.quoted = {
          text: chatkey.quoted,
        };
      chatkey.quoted.mtype = type;
      chatkey.quoted.id = chatkey.msg.contextInfo.stanzaId;
      chatkey.quoted.chat = chatkey.msg.contextInfo.remoteJid || chatkey.chat;
      chatkey.quoted.isBaileys = chatkey.quoted.id
        ? chatkey.quoted.id.startsWith("BAE5") &&
          chatkey.quoted.id.length === 16
        : false;
      chatkey.quoted.sender = BloomBot.decodeJid(
        chatkey.msg.contextInfo.participant,
      );
      chatkey.quoted.fromMe =
        chatkey.quoted.sender === (BloomBot.user && BloomBot.user.id);
      chatkey.quoted.text =
        chatkey.quoted.text ||
        chatkey.quoted.caption ||
        chatkey.quoted.conversation ||
        chatkey.quoted.contentText ||
        chatkey.quoted.selectedDisplayText ||
        chatkey.quoted.title ||
        "";
      chatkey.quoted.mentionedJid = chatkey.msg.contextInfo
        ? chatkey.msg.contextInfo.mentionedJid
        : [];
      chatkey.getQuotedObj = chatkey.getQuotedMessage = async () => {
        if (!chatkey.quoted.id) return false;
        const q = await store.loadMessage(
          chatkey.chat,
          chatkey.quoted.id,
          BloomBot,
        );
        return exports.chatkey_maker(BloomBot, q, store);
      };
      const vM = (chatkey.quoted.fakeObj = νproto.fromObject({
        key: {
          remoteJid: chatkey.quoted.chat,
          fromMe: chatkey.quoted.fromMe,
          id: chatkey.quoted.id,
        },
        message: quoted,
        ...(chatkey.isGroup ? { participant: chatkey.quoted.sender } : {}),
      }));
      chatkey.quoted.delete = () =>
        BloomBot.sendMessage(chatkey.quoted.chat, { delete: vM.key });
      chatkey.quoted.copyNForward = (jid, forceForward = false, options = {}) =>
        BloomBot.copyNForward(jid, vM, forceForward, options);
      chatkey.quoted.download = () =>
        BloomBot.downloadMediaMessage(chatkey.quoted);
    }
  }

  if (chatkey.msg.url)
    chatkey.download = () => BloomBot.downloadMediaMessage(chatkey.msg);
  chatkey.text =
    chatkey.msg.text ||
    chatkey.msg.caption ||
    chatkey.message.conversation ||
    chatkey.msg.contentText ||
    chatkey.msg.selectedDisplayText ||
    chatkey.msg.title ||
    "";
  chatkey.reply = (text, chatId = chatkey.chat, options = {}) =>
    Buffer.isBuffer(text)
      ? BloomBot.sendMedia(chatId, text, "file", "", chatkey, { ...options })
      : BloomBot.sendText(chatId, text, chatkey, { ...options });
  chatkey.copy = () =>
    exports.chatkey_maker(
      BloomBot,
      νproto.fromObject(νproto.toObject(chatkey)),
    );
  chatkey.copyNForward = (
    jid = chatkey.chat,
    forceForward = false,
    options = {},
  ) => BloomBot.copyNForward(jid, chatkey, forceForward, options);

  return chatkey;
};
