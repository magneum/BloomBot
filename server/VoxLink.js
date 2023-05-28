//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logger/global.js");
var {
  Simp,
  Pokemon,
  Ship,
  IShipOptions,
} = require("@shineiichijo/canvas-chan");
var {
  νkmake,
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
var { tmpdir } = require("os");
var chalk = require("chalk");
var { JSDOM } = require("jsdom");
var { Character } = require("mailist");
var { readFile } = require("fs/promises");
var { performance } = require("perf_hooks");
var { Primbon } = require("scrape-primbon");
var { getDadjoke } = require("random-jokes");
var { createWorker } = require("tesseract.js");
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

module.exports = async (whatsbot, whatschat, update, store) => {
  whatsbot.performance = performance;
  whatsbot.createWorker = createWorker;
  whatsbot.JSDOM = JSDOM;
  whatsbot.Character = Character;
  whatsbot.execSync = execSync;
  whatsbot.spawn = spawn;
  whatsbot.exec = exec;
  whatsbot.Primbon = Primbon;
  whatsbot.IShipOptions = IShipOptions;
  whatsbot.Ship = Ship;
  whatsbot.Pokemon = Pokemon;
  whatsbot.Simp = Simp;
  whatsbot.readFile = readFile;
  whatsbot.tmpdir = tmpdir;
  whatsbot.Doujin = Doujin;
  whatsbot.DownloaderHelper = DownloaderHelper;
  whatsbot.Chalk = Chalk;
  whatsbot.Sticker = Sticker;
  whatsbot.createSticker = createSticker;
  whatsbot.StickerTypes = StickerTypes;
  whatsbot.νkmake = νkmake;
  whatsbot.formatp = formatp;
  whatsbot.formatDate = formatDate;
  whatsbot.getTime = getTime;
  whatsbot.isUrl = isUrl;
  whatsbot.sleep = sleep;
  whatsbot.clockString = clockString;
  whatsbot.runtime = runtime;
  whatsbot.fetchJson = fetchJson;
  whatsbot.getBuffer = getBuffer;
  whatsbot.jsonformat = jsonformat;
  whatsbot.format = format;
  whatsbot.parseMention = parseMention;
  whatsbot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  whatsbot.getRandom = getRandom;
  whatsbot.getDadjoke = getDadjoke;
  whatsbot.Manga = Manga;
  whatsbot.AnimeWallpaper = AnimeWallpaper;
  whatsbot.TelegraPh = TelegraPh;
  whatsbot.UploadFileUgu = UploadFileUgu;
  whatsbot.webp2mp4File = webp2mp4File;
  whatsbot.Tname = whatschat.sender.replace(/['@s whatsapp.net']/g, "");

  whatsbot.msgFilter = require("./msgFilter");
  whatsbot.imagebutton = require("../buttons/imagebutton");
  whatsbot.videobutton = require("../buttons/videobutton");
  whatsbot.handlerror = require("../buttons/handlerror");
  whatsbot.TTS = require("google-tts-api");
  // whatsbot.nhentaidl = require("./nhentaidl");
  whatsbot.dashboard = require("../database/dashboard");
  whatsbot.LinkList = require("../database/antilink");
  whatsbot.Ranker = require("../database/autorank");
  whatsbot.Bagde = require("../database/badge");
  whatsbot.premium = require("../database/premium");
  whatsbot.userBanCheck = require("../database/ban");
  whatsbot.Cooldown = require("../database/cooldown");
  whatsbot.DebugMode = require("../database/debug");
  whatsbot.Economy = require("../database/economy");
  whatsbot.Gamble = require("../database/gamble");
  whatsbot.Halt = require("../database/halt");
  whatsbot.nsfwCheck = require("../database/nsfw");
  whatsbot.Pokemon = require("../database/pokemon");
  whatsbot.UserPrivate = require("../database/private");
  whatsbot.Robbery = require("../database/robbery");
  whatsbot.ServerDB = require("../database/ServerDB");
  whatsbot.Welcome = require("../database/setwelcome");
  whatsbot.Warning = require("../database/warning");
  whatsbot.Zoology = require("../database/zoo");
  whatsbot.Fishes = require("../public/fishes.json");
  whatsbot.animals = require("../public/animals.json");
  whatsbot.Jwork = require("../public/works.json");
  whatsbot.dare = require("../public/dare.json");
  whatsbot.truth = require("../public/truth.json");
  whatsbot.magfetch = require("../server/magfetch");

  whatsbot.os = require("os");
  whatsbot.fs = require("fs");
  whatsbot.got = require("got");
  whatsbot.gis = require("g-i-s");
  whatsbot.path = require("path");
  whatsbot.util = require("util");
  whatsbot.primbon = new Primbon();
  whatsbot.ms = require("parse-ms");
  whatsbot.hxz = require("hxz-api");
  whatsbot.axios = require("axios");
  whatsbot.chalk = require("chalk");
  whatsbot.playdl = require("play-dl");
  whatsbot.request = require("request");
  whatsbot.xfar = require("xfarr-api");
  whatsbot.cron = require("node-cron");
  whatsbot.nHentai = require("shentai");
  whatsbot.cheerio = require("cheerio");
  whatsbot.akaneko = require("akaneko");
  whatsbot.fetch = require("node-fetch");
  whatsbot.google = require("google-it");
  whatsbot.Spinnies = require("spinnies");
  whatsbot.Anime = require("anime-actions");
  whatsbot.Tinyurl = require("tinyurl-api");
  whatsbot.FastHub = require("simple-git")();
  whatsbot.speed = require("performance-now");
  whatsbot.moment = require("moment-timezone");
  whatsbot.Carbon = require("unofficial-carbon-now");
  whatsbot.Levels = require("discord-xp");
  whatsbot.canvacord = require("canvacord");
  whatsbot.randomMC = require("random-material-color");
  whatsbot.yClient = require("youtube-avdl");
  whatsbot.pokemontcgsdk = require("pokemontcgsdk");
  whatsbot.singer = require("play-dl");
  whatsbot.ffmpeg = ffmpeg;
  whatsbot.pathFFmpeg = require("ffmpeg-static");

  // whatsbot.memberRespA = [];
  // whatsbot.memberRespB = [];
  // whatsbot.resp1 = await whatsbot.groupInviteCode("120363020792949649@g.us");
  whatsbot.varResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "whatsbot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    var TShow = whatsbot.chalk.hex("#2D5A27").bold(Topic);
    var Show = whatsbot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      whatsbot.chalk.black(whatsbot.chalk.bgBlack(TShow)),
      whatsbot.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    var TShow = whatsbot.chalk.hex("#008B8B").bold(Topic);
    var Show = whatsbot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      whatsbot.chalk.black(whatsbot.chalk.bgBlack(TShow)),
      whatsbot.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    var TShow = whatsbot.chalk.hex("#ff6347").bold(Topic);
    var Show = whatsbot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      whatsbot.chalk.black(whatsbot.chalk.bgBlack(TShow)),
      whatsbot.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    var TShow = whatsbot.chalk.hex("#8B8000").bold(Topic);
    var Show = whatsbot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      whatsbot.chalk.black(whatsbot.chalk.bgBlack(TShow)),
      whatsbot.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (var file of files) {
      whatsbot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  whatsbot.ShowGreen = ShowGreen;
  whatsbot.ShowBlue = ShowBlue;
  whatsbot.ShowRed = ShowRed;
  whatsbot.ShowYellow = ShowYellow;
  whatsbot.between = between;
  whatsbot.clearStorage = clearStorage;
  whatsbot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  whatsbot.spinnies = new whatsbot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: whatsbot.spinner,
  });
  whatsbot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  whatsbot.Showlogger = Showlogger;
  whatsbot.packname = packname;
  whatsbot.pgdb = DATABASE_URL;
  whatsbot.ShowInfo = ShowInfo;
  whatsbot.MONGO_URL = MONGO_URL;
  whatsbot.author = author;
  whatsbot.prefix = prefix;
  whatsbot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  whatsbot.isSudo = sudotring.includes(
    whatschat.sender.substring(0, whatschat.sender.indexOf("@"))
  );
  return whatsbot;
};
