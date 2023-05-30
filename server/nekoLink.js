//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
    const folderPath = "public/src";
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

module.exports = async (NekoBot, nekos, update, store) => {
  NekoBot.display = getRandomImagePath()
    .then((imagePath) => {
      NekoBot.display = imagePath;
    })
    .catch((err) => {
      NekoBot.display = "./public/nekoBot_Logo.png";
    });

  NekoBot.performance = performance;
  // NekoBot.createWorker = createWorker;
  NekoBot.JSDOM = JSDOM;
  NekoBot.Character = Character;
  NekoBot.execSync = execSync;
  NekoBot.spawn = spawn;
  NekoBot.exec = exec;
  NekoBot.Primbon = Primbon;
  NekoBot.IShipOptions = IShipOptions;
  NekoBot.Ship = Ship;
  NekoBot.Pokemon = Pokemon;
  NekoBot.Simp = Simp;
  NekoBot.readFile = readFile;
  NekoBot.tmpdir = tmpdir;
  NekoBot.Doujin = Doujin;
  NekoBot.DownloaderHelper = DownloaderHelper;
  NekoBot.chalk = chalk;
  NekoBot.Sticker = Sticker;
  NekoBot.createSticker = createSticker;
  NekoBot.StickerTypes = StickerTypes;
  NekoBot.mMake = mMake;
  NekoBot.formatp = formatp;
  NekoBot.formatDate = formatDate;
  NekoBot.getTime = getTime;
  NekoBot.isUrl = isUrl;
  NekoBot.sleep = sleep;
  NekoBot.clockString = clockString;
  NekoBot.runtime = runtime;
  NekoBot.fetchJson = fetchJson;
  NekoBot.getBuffer = getBuffer;
  NekoBot.jsonformat = jsonformat;
  NekoBot.format = format;
  NekoBot.parseMention = parseMention;
  NekoBot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  NekoBot.getRandom = getRandom;
  NekoBot.getDadjoke = getDadjoke;
  NekoBot.Manga = Manga;
  NekoBot.AnimeWallpaper = AnimeWallpaper;
  NekoBot.TelegraPh = TelegraPh;
  NekoBot.UploadFileUgu = UploadFileUgu;
  NekoBot.webp2mp4File = webp2mp4File;
  NekoBot.Tname = nekos.sender.replace(/['@s whatsapp.net']/g, "");

  NekoBot.msgFilter = require("./msgFilter");
  NekoBot.imagebutton = require("@/app/buttons/imagebutton");
  NekoBot.videobutton = require("@/app/buttons/videobutton");
  NekoBot.handlerror = require("@/app/buttons/handlerror");
  NekoBot.TTS = require("google-tts-api");
  // NekoBot.nhentaidl = require("./nhentaidl");
  NekoBot.dashboard = require("@/database/dashboard");
  NekoBot.LinkList = require("@/database/antilink");
  NekoBot.Ranker = require("@/database/autorank");
  NekoBot.Bagde = require("@/database/badge");
  NekoBot.premium = require("@/database/premium");
  NekoBot.userBanCheck = require("@/database/ban");
  NekoBot.Cooldown = require("@/database/cooldown");
  NekoBot.DebugMode = require("@/database/debug");
  NekoBot.Economy = require("@/database/economy");
  NekoBot.Gamble = require("@/database/gamble");
  NekoBot.Halt = require("@/database/halt");
  NekoBot.nsfwCheck = require("@/database/nsfw");
  NekoBot.Pokemon = require("@/database/pokemon");
  NekoBot.UserPrivate = require("@/database/private");
  NekoBot.Robbery = require("@/database/robbery");
  NekoBot.ServerDB = require("@/database/ServerDB");
  NekoBot.Welcome = require("@/database/setwelcome");
  NekoBot.Warning = require("@/database/warning");
  NekoBot.Zoology = require("@/database/zoo");
  NekoBot.Fishes = require("@/public/fishes.json");
  NekoBot.animals = require("@/public/animals.json");
  NekoBot.Jwork = require("@/public/works.json");
  NekoBot.dare = require("@/public/dare.json");
  NekoBot.truth = require("@/public/truth.json");
  NekoBot.magfetch = require("@/server/magfetch");

  NekoBot.os = require("os");
  NekoBot.fs = require("fs");
  NekoBot.got = require("got");
  NekoBot.gis = require("g-i-s");
  NekoBot.path = require("path");
  NekoBot.util = require("util");
  NekoBot.primbon = new Primbon();
  NekoBot.ms = require("parse-ms");
  NekoBot.hxz = require("hxz-api");
  NekoBot.axios = require("axios");
  NekoBot.chalk = require("chalk");
  NekoBot.playdl = require("play-dl");
  NekoBot.request = require("request");
  NekoBot.xfar = require("xfarr-api");
  NekoBot.cron = require("node-cron");
  NekoBot.nHentai = require("shentai");
  NekoBot.cheerio = require("cheerio");
  NekoBot.akaneko = require("akaneko");
  NekoBot.fetch = require("node-fetch");
  NekoBot.google = require("google-it");
  NekoBot.Spinnies = require("spinnies");
  NekoBot.Anime = require("anime-actions");
  NekoBot.Tinyurl = require("tinyurl-api");
  NekoBot.FastHub = require("simple-git")();
  NekoBot.speed = require("performance-now");
  NekoBot.moment = require("moment-timezone");
  NekoBot.Carbon = require("unofficial-carbon-now");
  NekoBot.Levels = require("discord-xp");
  NekoBot.canvacord = require("canvacord");
  NekoBot.randomMC = require("random-material-color");
  NekoBot.yClient = require("youtube-avdl");
  NekoBot.pokemontcgsdk = require("pokemontcgsdk");
  NekoBot.singer = require("play-dl");
  NekoBot.ffmpeg = ffmpeg;
  NekoBot.pathFFmpeg = require("ffmpeg-static");

  // NekoBot.memberRespA = [];
  // NekoBot.memberRespB = [];
  // NekoBot.resp1 = await NekoBot.groupInviteCode("120363020792949649@g.us");
  NekoBot.varResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "NekoBot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    var TShow = NekoBot.chalk.hex("#2D5A27").bold(Topic);
    var Show = NekoBot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      NekoBot.chalk.black(NekoBot.chalk.bgBlack(TShow)),
      NekoBot.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    var TShow = NekoBot.chalk.hex("#008B8B").bold(Topic);
    var Show = NekoBot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      NekoBot.chalk.black(NekoBot.chalk.bgBlack(TShow)),
      NekoBot.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    var TShow = NekoBot.chalk.hex("#ff6347").bold(Topic);
    var Show = NekoBot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      NekoBot.chalk.black(NekoBot.chalk.bgBlack(TShow)),
      NekoBot.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    var TShow = NekoBot.chalk.hex("#8B8000").bold(Topic);
    var Show = NekoBot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      NekoBot.chalk.black(NekoBot.chalk.bgBlack(TShow)),
      NekoBot.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (var file of files) {
      NekoBot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  NekoBot.ShowGreen = ShowGreen;
  NekoBot.ShowBlue = ShowBlue;
  NekoBot.ShowRed = ShowRed;
  NekoBot.ShowYellow = ShowYellow;
  NekoBot.between = between;
  NekoBot.clearStorage = clearStorage;
  NekoBot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  NekoBot.spinnies = new NekoBot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: NekoBot.spinner,
  });
  NekoBot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  NekoBot.Showlogger = Showlogger;
  NekoBot.packname = packname;
  NekoBot.pgdb = DATABASE_URL;
  NekoBot.ShowInfo = ShowInfo;
  NekoBot.MONGODB_URL = MONGODB_URL;
  NekoBot.author = author;
  NekoBot.prefix = prefix;
  NekoBot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  NekoBot.isSudo = sudotring.includes(
    nekos.sender.substring(0, nekos.sender.indexOf("@"))
  );
  return NekoBot;
};
