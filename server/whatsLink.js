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
    const folderPath = "public/whats";
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

module.exports = async (OpenBot, ocID, update, store) => {
  OpenBot.display = getRandomImagePath()
    .then((imagePath) => {
      OpenBot.display = imagePath;
    })
    .catch((err) => {
      OpenBot.display = "./public/OpenBot_Logo.png";
    });

  OpenBot.performance = performance;
  // OpenBot.createWorker = createWorker;
  OpenBot.JSDOM = JSDOM;
  OpenBot.Character = Character;
  OpenBot.execSync = execSync;
  OpenBot.spawn = spawn;
  OpenBot.exec = exec;
  OpenBot.Primbon = Primbon;
  OpenBot.IShipOptions = IShipOptions;
  OpenBot.Ship = Ship;
  OpenBot.Pokemon = Pokemon;
  OpenBot.Simp = Simp;
  OpenBot.readFile = readFile;
  OpenBot.tmpdir = tmpdir;
  OpenBot.Doujin = Doujin;
  OpenBot.DownloaderHelper = DownloaderHelper;
  OpenBot.chalk = chalk;
  OpenBot.Sticker = Sticker;
  OpenBot.createSticker = createSticker;
  OpenBot.StickerTypes = StickerTypes;
  OpenBot.mMake = mMake;
  OpenBot.formatp = formatp;
  OpenBot.formatDate = formatDate;
  OpenBot.getTime = getTime;
  OpenBot.isUrl = isUrl;
  OpenBot.sleep = sleep;
  OpenBot.clockString = clockString;
  OpenBot.runtime = runtime;
  OpenBot.fetchJson = fetchJson;
  OpenBot.getBuffer = getBuffer;
  OpenBot.jsonformat = jsonformat;
  OpenBot.format = format;
  OpenBot.parseMention = parseMention;
  OpenBot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  OpenBot.getRandom = getRandom;
  OpenBot.getDadjoke = getDadjoke;
  OpenBot.Manga = Manga;
  OpenBot.AnimeWallpaper = AnimeWallpaper;
  OpenBot.TelegraPh = TelegraPh;
  OpenBot.UploadFileUgu = UploadFileUgu;
  OpenBot.webp2mp4File = webp2mp4File;
  OpenBot.Tname = ocID.sender.replace(/['@s whatsapp.net']/g, "");

  OpenBot.msgFilter = require("./msgFilter");
  OpenBot.imagebutton = require("@/app/buttons/imagebutton");
  OpenBot.videobutton = require("@/app/buttons/videobutton");
  OpenBot.handlerror = require("@/app/buttons/handlerror");
  OpenBot.TTS = require("google-tts-api");
  // OpenBot.nhentaidl = require("./nhentaidl");
  OpenBot.dashboard = require("@/database/dashboard");
  OpenBot.LinkList = require("@/database/antilink");
  OpenBot.Ranker = require("@/database/autorank");
  OpenBot.Bagde = require("@/database/badge");
  OpenBot.premium = require("@/database/premium");
  OpenBot.userBanCheck = require("@/database/ban");
  OpenBot.Cooldown = require("@/database/cooldown");
  OpenBot.DebugMode = require("@/database/debug");
  OpenBot.Economy = require("@/database/economy");
  OpenBot.Gamble = require("@/database/gamble");
  OpenBot.Halt = require("@/database/halt");
  OpenBot.nsfwCheck = require("@/database/nsfw");
  OpenBot.Pokemon = require("@/database/pokemon");
  OpenBot.UserPrivate = require("@/database/private");
  OpenBot.Robbery = require("@/database/robbery");
  OpenBot.ServerDB = require("@/database/ServerDB");
  OpenBot.Welcome = require("@/database/setwelcome");
  OpenBot.Warning = require("@/database/warning");
  OpenBot.Zoology = require("@/database/zoo");
  OpenBot.Fishes = require("@/public/fishes.json");
  OpenBot.animals = require("@/public/animals.json");
  OpenBot.Jwork = require("@/public/works.json");
  OpenBot.dare = require("@/public/dare.json");
  OpenBot.truth = require("@/public/truth.json");
  OpenBot.magfetch = require("@/server/magfetch");

  OpenBot.os = require("os");
  OpenBot.fs = require("fs");
  OpenBot.got = require("got");
  OpenBot.gis = require("g-i-s");
  OpenBot.path = require("path");
  OpenBot.util = require("util");
  OpenBot.primbon = new Primbon();
  OpenBot.ms = require("parse-ms");
  OpenBot.hxz = require("hxz-api");
  OpenBot.axios = require("axios");
  OpenBot.chalk = require("chalk");
  OpenBot.playdl = require("play-dl");
  OpenBot.request = require("request");
  OpenBot.xfar = require("xfarr-api");
  OpenBot.cron = require("node-cron");
  OpenBot.nHentai = require("shentai");
  OpenBot.cheerio = require("cheerio");
  OpenBot.akaneko = require("akaneko");
  OpenBot.fetch = require("node-fetch");
  OpenBot.google = require("google-it");
  OpenBot.Spinnies = require("spinnies");
  OpenBot.Anime = require("anime-actions");
  OpenBot.Tinyurl = require("tinyurl-api");
  OpenBot.FastHub = require("simple-git")();
  OpenBot.speed = require("performance-now");
  OpenBot.moment = require("moment-timezone");
  OpenBot.Carbon = require("unofficial-carbon-now");
  OpenBot.Levels = require("discord-xp");
  OpenBot.canvacord = require("canvacord");
  OpenBot.randomMC = require("random-material-color");
  OpenBot.yClient = require("youtube-avdl");
  OpenBot.pokemontcgsdk = require("pokemontcgsdk");
  OpenBot.singer = require("play-dl");
  OpenBot.ffmpeg = ffmpeg;
  OpenBot.pathFFmpeg = require("ffmpeg-static");

  // OpenBot.memberRespA = [];
  // OpenBot.memberRespB = [];
  // OpenBot.resp1 = await OpenBot.groupInviteCode("120363020792949649@g.us");
  OpenBot.varResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "OpenBot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    var TShow = OpenBot.chalk.hex("#2D5A27").bold(Topic);
    var Show = OpenBot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      OpenBot.chalk.black(OpenBot.chalk.bgBlack(TShow)),
      OpenBot.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    var TShow = OpenBot.chalk.hex("#008B8B").bold(Topic);
    var Show = OpenBot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      OpenBot.chalk.black(OpenBot.chalk.bgBlack(TShow)),
      OpenBot.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    var TShow = OpenBot.chalk.hex("#ff6347").bold(Topic);
    var Show = OpenBot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      OpenBot.chalk.black(OpenBot.chalk.bgBlack(TShow)),
      OpenBot.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    var TShow = OpenBot.chalk.hex("#8B8000").bold(Topic);
    var Show = OpenBot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      OpenBot.chalk.black(OpenBot.chalk.bgBlack(TShow)),
      OpenBot.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (var file of files) {
      OpenBot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  OpenBot.ShowGreen = ShowGreen;
  OpenBot.ShowBlue = ShowBlue;
  OpenBot.ShowRed = ShowRed;
  OpenBot.ShowYellow = ShowYellow;
  OpenBot.between = between;
  OpenBot.clearStorage = clearStorage;
  OpenBot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  OpenBot.spinnies = new OpenBot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: OpenBot.spinner,
  });
  OpenBot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  OpenBot.Showlogger = Showlogger;
  OpenBot.packname = packname;
  OpenBot.pgdb = DATABASE_URL;
  OpenBot.ShowInfo = ShowInfo;
  OpenBot.MONGODB_URL = MONGODB_URL;
  OpenBot.author = author;
  OpenBot.prefix = prefix;
  OpenBot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  OpenBot.isSudo = sudotring.includes(
    ocID.sender.substring(0, ocID.sender.indexOf("@"))
  );
  return OpenBot;
};
