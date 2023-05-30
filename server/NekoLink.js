//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Nekobot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Nekobot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Nekobot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/logger/global");
var {
  Simp,
  Pokemon,
  Ship,
  IShipOptions,
} = require("@shineiichijo/canvas-chan");
var {
  mMake,
  formatp,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  GIFBufferToVideoBuffer,
  getRandom,
} = require("./myfunc");
var fs = require("fs");
var path = require("path");
var chalk = require("chalk");
var { tmpdir } = require("os");
var { JSDOM } = require("jsdom");
var { Character } = require("mailist");
var { readFile } = require("fs/promises");
var { performance } = require("perf_hooks");
var { Primbon } = require("scrape-primbon");
var { getDadjoke } = require("random-jokes");
// var { createWorker } = require("tesseract");
var { Manga } = require("@shineiichijo/marika");
var { AnimeWallpaper } = require("anime-wallpaper");
var { Doujin } = require("@shineiichijo/nhentai-pdf");
var { exec, spawn, execSync } = require("child_process");
var { DownloaderHelper } = require("node-downloader-helper");
var { TelegraPh, UploadFileUgu, webp2mp4File } = require("./uploader");
var { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
var ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
var ffprobe = require("@ffprobe-installer/ffprobe");
var ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
function getRandomImagePath() {
  return new Promise((resolve, reject) => {
    const folderPath = "public/Nekobot";
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      const imageFiles = files.filter((file) => {
        const extension = path.extname(file).toLowerCase();
        return (
          extension === ".png" || extension === ".jpg" || extension === ".jpeg"
        );
      });
      if (imageFiles.length > 0) {
        const randomImage =
          imageFiles[Math.floor(Math.random() * imageFiles.length)];
        const imagePath = path.join(folderPath, randomImage);
        resolve(imagePath);
      } else {
        reject("No .png, .jpg, or .jpeg images found in the folder.");
      }
    });
  });
}

module.exports = async (Nekobot, Nekos, update, store) => {
  Nekobot.display = getRandomImagePath()
    .then((imagePath) => {
      Nekobot.display = imagePath;
    })
    .catch((err) => {
      Nekobot.display = "./public/Nekobot_Logo.png";
    });

  Nekobot.performance = performance;
  // Nekobot.createWorker = createWorker;
  Nekobot.JSDOM = JSDOM;
  Nekobot.Character = Character;
  Nekobot.execSync = execSync;
  Nekobot.spawn = spawn;
  Nekobot.exec = exec;
  Nekobot.Primbon = Primbon;
  Nekobot.IShipOptions = IShipOptions;
  Nekobot.Ship = Ship;
  Nekobot.Pokemon = Pokemon;
  Nekobot.Simp = Simp;
  Nekobot.readFile = readFile;
  Nekobot.tmpdir = tmpdir;
  Nekobot.Doujin = Doujin;
  Nekobot.DownloaderHelper = DownloaderHelper;
  Nekobot.chalk = chalk;
  Nekobot.Sticker = Sticker;
  Nekobot.createSticker = createSticker;
  Nekobot.StickerTypes = StickerTypes;
  Nekobot.mMake = mMake;
  Nekobot.formatp = formatp;
  Nekobot.formatDate = formatDate;
  Nekobot.getTime = getTime;
  Nekobot.isUrl = isUrl;
  Nekobot.sleep = sleep;
  Nekobot.clockString = clockString;
  Nekobot.runtime = runtime;
  Nekobot.fetchJson = fetchJson;
  Nekobot.getBuffer = getBuffer;
  Nekobot.jsonformat = jsonformat;
  Nekobot.format = format;
  Nekobot.parseMention = parseMention;
  Nekobot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  Nekobot.getRandom = getRandom;
  Nekobot.getDadjoke = getDadjoke;
  Nekobot.Manga = Manga;
  Nekobot.AnimeWallpaper = AnimeWallpaper;
  Nekobot.TelegraPh = TelegraPh;
  Nekobot.UploadFileUgu = UploadFileUgu;
  Nekobot.webp2mp4File = webp2mp4File;
  Nekobot.Tname = Nekos.sender.replace(/['@s whatsapp.net']/g, "");

  Nekobot.msgFilter = require("./msgFilter");
  Nekobot.imagebutton = require("@/app/buttons/imagebutton");
  Nekobot.videobutton = require("@/app/buttons/videobutton");
  Nekobot.handlerror = require("@/app/buttons/handlerror");
  Nekobot.TTS = require("google-tts-api");
  // Nekobot.nhentaidl = require("./nhentaidl");
  Nekobot.dashboard = require("@/database/dashboard");
  Nekobot.LinkList = require("@/database/antilink");
  Nekobot.Ranker = require("@/database/autorank");
  Nekobot.Bagde = require("@/database/badge");
  Nekobot.premium = require("@/database/premium");
  Nekobot.userBanCheck = require("@/database/ban");
  Nekobot.Cooldown = require("@/database/cooldown");
  Nekobot.DebugMode = require("@/database/debug");
  Nekobot.Economy = require("@/database/economy");
  Nekobot.Gamble = require("@/database/gamble");
  Nekobot.Halt = require("@/database/halt");
  Nekobot.nsfwCheck = require("@/database/nsfw");
  Nekobot.Pokemon = require("@/database/pokemon");
  Nekobot.UserPrivate = require("@/database/private");
  Nekobot.Robbery = require("@/database/robbery");
  Nekobot.ServerDB = require("@/database/ServerDB");
  Nekobot.Welcome = require("@/database/setwelcome");
  Nekobot.Warning = require("@/database/warning");
  Nekobot.Zoology = require("@/database/zoo");
  Nekobot.Fishes = require("@/public/fishes.json");
  Nekobot.animals = require("@/public/animals.json");
  Nekobot.Jwork = require("@/public/works.json");
  Nekobot.dare = require("@/public/dare.json");
  Nekobot.truth = require("@/public/truth.json");
  Nekobot.magfetch = require("@/server/magfetch");

  Nekobot.os = require("os");
  Nekobot.fs = require("fs");
  Nekobot.got = require("got");
  Nekobot.gis = require("g-i-s");
  Nekobot.path = require("path");
  Nekobot.util = require("util");
  Nekobot.primbon = new Primbon();
  Nekobot.ms = require("parse-ms");
  Nekobot.hxz = require("hxz-api");
  Nekobot.axios = require("axios");
  Nekobot.chalk = require("chalk");
  Nekobot.playdl = require("play-dl");
  Nekobot.request = require("request");
  Nekobot.xfar = require("xfarr-api");
  Nekobot.cron = require("node-cron");
  Nekobot.nHentai = require("shentai");
  Nekobot.cheerio = require("cheerio");
  Nekobot.akaneko = require("akaneko");
  Nekobot.fetch = require("node-fetch");
  Nekobot.google = require("google-it");
  Nekobot.Spinnies = require("spinnies");
  Nekobot.Anime = require("anime-actions");
  Nekobot.Tinyurl = require("tinyurl-api");
  Nekobot.FastHub = require("simple-git")();
  Nekobot.speed = require("performance-now");
  Nekobot.moment = require("moment-timezone");
  Nekobot.Carbon = require("unofficial-carbon-now");
  Nekobot.Levels = require("discord-xp");
  Nekobot.canvacord = require("canvacord");
  Nekobot.randomMC = require("random-material-color");
  Nekobot.yClient = require("youtube-avdl");
  Nekobot.pokemontcgsdk = require("pokemontcgsdk");
  Nekobot.singer = require("play-dl");
  Nekobot.ffmpeg = ffmpeg;
  Nekobot.pathFFmpeg = require("ffmpeg-static");

  // Nekobot.memberRespA = [];
  // Nekobot.memberRespB = [];
  // Nekobot.resp1 = await Nekobot.groupInviteCode("120363020792949649@g.us");
  Nekobot.varResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "Nekobot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    var TShow = Nekobot.chalk.hex("#2D5A27").bold(Topic);
    var Show = Nekobot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      Nekobot.chalk.black(Nekobot.chalk.bgBlack(TShow)),
      Nekobot.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    var TShow = Nekobot.chalk.hex("#008B8B").bold(Topic);
    var Show = Nekobot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      Nekobot.chalk.black(Nekobot.chalk.bgBlack(TShow)),
      Nekobot.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    var TShow = Nekobot.chalk.hex("#ff6347").bold(Topic);
    var Show = Nekobot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      Nekobot.chalk.black(Nekobot.chalk.bgBlack(TShow)),
      Nekobot.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    var TShow = Nekobot.chalk.hex("#8B8000").bold(Topic);
    var Show = Nekobot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      Nekobot.chalk.black(Nekobot.chalk.bgBlack(TShow)),
      Nekobot.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (var file of files) {
      Nekobot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  Nekobot.ShowGreen = ShowGreen;
  Nekobot.ShowBlue = ShowBlue;
  Nekobot.ShowRed = ShowRed;
  Nekobot.ShowYellow = ShowYellow;
  Nekobot.between = between;
  Nekobot.clearStorage = clearStorage;
  Nekobot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  Nekobot.spinnies = new Nekobot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: Nekobot.spinner,
  });
  Nekobot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  Nekobot.Showlogger = Showlogger;
  Nekobot.packname = packname;
  Nekobot.pgdb = DATABASE_URL;
  Nekobot.ShowInfo = ShowInfo;
  Nekobot.MONGODB_URL = MONGODB_URL;
  Nekobot.author = author;
  Nekobot.prefix = prefix;
  Nekobot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  Nekobot.isSudo = sudotring.includes(
    Nekos.sender.substring(0, Nekos.sender.indexOf("@"))
  );
  return Nekobot;
};
