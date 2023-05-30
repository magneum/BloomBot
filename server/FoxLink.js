//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
var { createWorker } = require("tesseract");
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

module.exports = async (
  Foxbot,
  Foxchat,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  Foxbot.display = getRandomImagePath()
    .then((imagePath) => {
      Foxbot.display = imagePath;
    })
    .catch((err) => {
      Foxbot.display = "./public/FoxBot_Logo.png";
    });

  Foxbot.performance = performance;
  Foxbot.createWorker = createWorker;
  Foxbot.JSDOM = JSDOM;
  Foxbot.Character = Character;
  Foxbot.execSync = execSync;
  Foxbot.spawn = spawn;
  Foxbot.exec = exec;
  Foxbot.Primbon = Primbon;
  Foxbot.IShipOptions = IShipOptions;
  Foxbot.Ship = Ship;
  Foxbot.Pokemon = Pokemon;
  Foxbot.Simp = Simp;
  Foxbot.readFile = readFile;
  Foxbot.tmpdir = tmpdir;
  Foxbot.Doujin = Doujin;
  Foxbot.DownloaderHelper = DownloaderHelper;
  Foxbot.chalk = chalk;
  Foxbot.Sticker = Sticker;
  Foxbot.createSticker = createSticker;
  Foxbot.StickerTypes = StickerTypes;
  Foxbot.mMake = mMake;
  Foxbot.formatp = formatp;
  Foxbot.formatDate = formatDate;
  Foxbot.getTime = getTime;
  Foxbot.isUrl = isUrl;
  Foxbot.sleep = sleep;
  Foxbot.clockString = clockString;
  Foxbot.runtime = runtime;
  Foxbot.fetchJson = fetchJson;
  Foxbot.getBuffer = getBuffer;
  Foxbot.jsonformat = jsonformat;
  Foxbot.format = format;
  Foxbot.parseMention = parseMention;
  Foxbot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  Foxbot.getRandom = getRandom;
  Foxbot.getDadjoke = getDadjoke;
  Foxbot.Manga = Manga;
  Foxbot.AnimeWallpaper = AnimeWallpaper;
  Foxbot.TelegraPh = TelegraPh;
  Foxbot.UploadFileUgu = UploadFileUgu;
  Foxbot.webp2mp4File = webp2mp4File;
  Foxbot.Tname = Foxchat.sender.replace(/['@s whatsapp.net']/g, "");

  Foxbot.msgFilter = require("./msgFilter");
  Foxbot.imagebutton = require("@/app/buttons/imagebutton");
  Foxbot.videobutton = require("@/app/buttons/videobutton");
  Foxbot.handlerror = require("@/app/buttons/handlerror");
  Foxbot.TTS = require("google-tts-api");
  // Foxbot.nhentaidl = require("./nhentaidl");
  Foxbot.dashboard = require("@/database/dashboard");
  Foxbot.LinkList = require("@/database/antilink");
  Foxbot.Ranker = require("@/database/autorank");
  Foxbot.Bagde = require("@/database/badge");
  Foxbot.premium = require("@/database/premium");
  Foxbot.userBanCheck = require("@/database/ban");
  Foxbot.Cooldown = require("@/database/cooldown");
  Foxbot.DebugMode = require("@/database/debug");
  Foxbot.Economy = require("@/database/economy");
  Foxbot.Gamble = require("@/database/gamble");
  Foxbot.Halt = require("@/database/halt");
  Foxbot.nsfwCheck = require("@/database/nsfw");
  Foxbot.Pokemon = require("@/database/pokemon");
  Foxbot.UserPrivate = require("@/database/private");
  Foxbot.Robbery = require("@/database/robbery");
  Foxbot.ServerDB = require("@/database/ServerDB");
  Foxbot.Welcome = require("@/database/setwelcome");
  Foxbot.Warning = require("@/database/warning");
  Foxbot.Zoology = require("@/database/zoo");
  Foxbot.Fishes = require("@/public/fishes.json");
  Foxbot.animals = require("@/public/animals.json");
  Foxbot.Jwork = require("@/public/works.json");
  Foxbot.dare = require("@/public/dare.json");
  Foxbot.truth = require("@/public/truth.json");
  Foxbot.magfetch = require("@/server/magfetch");

  Foxbot.os = require("os");
  Foxbot.fs = require("fs");
  Foxbot.got = require("got");
  Foxbot.gis = require("g-i-s");
  Foxbot.path = require("path");
  Foxbot.util = require("util");
  Foxbot.primbon = new Primbon();
  Foxbot.ms = require("parse-ms");
  Foxbot.hxz = require("hxz-api");
  Foxbot.axios = require("axios");
  Foxbot.chalk = require("chalk");
  Foxbot.playdl = require("play-dl");
  Foxbot.request = require("request");
  Foxbot.xfar = require("xfarr-api");
  Foxbot.cron = require("node-cron");
  Foxbot.nHentai = require("shentai");
  Foxbot.cheerio = require("cheerio");
  Foxbot.akaneko = require("akaneko");
  Foxbot.fetch = require("node-fetch");
  Foxbot.google = require("google-it");
  Foxbot.Spinnies = require("spinnies");
  Foxbot.Anime = require("anime-actions");
  Foxbot.Tinyurl = require("tinyurl-api");
  Foxbot.FastHub = require("simple-git")();
  Foxbot.speed = require("performance-now");
  Foxbot.moment = require("moment-timezone");
  Foxbot.Carbon = require("unofficial-carbon-now");
  Foxbot.Levels = require("discord-xp");
  Foxbot.canvacord = require("canvacord");
  Foxbot.randomMC = require("random-material-color");
  Foxbot.yClient = require("youtube-avdl");
  Foxbot.pokemontcgsdk = require("pokemontcgsdk");
  Foxbot.singer = require("play-dl");
  Foxbot.ffmpeg = ffmpeg;
  Foxbot.pathFFmpeg = require("ffmpeg-static");

  // Foxbot.memberRespA = [];
  // Foxbot.memberRespB = [];
  // Foxbot.resp1 = await Foxbot.groupInviteCode("120363020792949649@g.us");
  Foxbot.varResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "Foxbot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    var TShow = Foxbot.chalk.hex("#2D5A27").bold(Topic);
    var Show = Foxbot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      Foxbot.chalk.black(Foxbot.chalk.bgBlack(TShow)),
      Foxbot.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    var TShow = Foxbot.chalk.hex("#008B8B").bold(Topic);
    var Show = Foxbot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      Foxbot.chalk.black(Foxbot.chalk.bgBlack(TShow)),
      Foxbot.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    var TShow = Foxbot.chalk.hex("#ff6347").bold(Topic);
    var Show = Foxbot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      Foxbot.chalk.black(Foxbot.chalk.bgBlack(TShow)),
      Foxbot.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    var TShow = Foxbot.chalk.hex("#8B8000").bold(Topic);
    var Show = Foxbot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      Foxbot.chalk.black(Foxbot.chalk.bgBlack(TShow)),
      Foxbot.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (var file of files) {
      Foxbot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  Foxbot.ShowGreen = ShowGreen;
  Foxbot.ShowBlue = ShowBlue;
  Foxbot.ShowRed = ShowRed;
  Foxbot.ShowYellow = ShowYellow;
  Foxbot.between = between;
  Foxbot.clearStorage = clearStorage;
  Foxbot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  Foxbot.spinnies = new Foxbot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: Foxbot.spinner,
  });
  Foxbot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  Foxbot.Showlogger = Showlogger;
  Foxbot.packname = packname;
  Foxbot.pgdb = DATABASE_URL;
  Foxbot.ShowInfo = ShowInfo;
  Foxbot.MONGODB_URL = MONGODB_URL;
  Foxbot.author = author;
  Foxbot.prefix = prefix;
  Foxbot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  Foxbot.isSudo = sudotring.includes(
    Foxchat.sender.substring(0, Foxchat.sender.indexOf("@"))
  );
  return Foxbot;
};
