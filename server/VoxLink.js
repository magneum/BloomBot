//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
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
var chalk = require("chalk");
var { tmpdir } = require("os");
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

module.exports = async (FoxBot, Foxchat, update, store) => {
  FoxBot.performance = performance;
  FoxBot.createWorker = createWorker;
  FoxBot.JSDOM = JSDOM;
  FoxBot.Character = Character;
  FoxBot.execSync = execSync;
  FoxBot.spawn = spawn;
  FoxBot.exec = exec;
  FoxBot.Primbon = Primbon;
  FoxBot.IShipOptions = IShipOptions;
  FoxBot.Ship = Ship;
  FoxBot.Pokemon = Pokemon;
  FoxBot.Simp = Simp;
  FoxBot.readFile = readFile;
  FoxBot.tmpdir = tmpdir;
  FoxBot.Doujin = Doujin;
  FoxBot.DownloaderHelper = DownloaderHelper;
  FoxBot.chalk = chalk;
  FoxBot.Sticker = Sticker;
  FoxBot.createSticker = createSticker;
  FoxBot.StickerTypes = StickerTypes;
  FoxBot.νkmake = νkmake;
  FoxBot.formatp = formatp;
  FoxBot.formatDate = formatDate;
  FoxBot.getTime = getTime;
  FoxBot.isUrl = isUrl;
  FoxBot.sleep = sleep;
  FoxBot.clockString = clockString;
  FoxBot.runtime = runtime;
  FoxBot.fetchJson = fetchJson;
  FoxBot.getBuffer = getBuffer;
  FoxBot.jsonformat = jsonformat;
  FoxBot.format = format;
  FoxBot.parseMention = parseMention;
  FoxBot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  FoxBot.getRandom = getRandom;
  FoxBot.getDadjoke = getDadjoke;
  FoxBot.Manga = Manga;
  FoxBot.AnimeWallpaper = AnimeWallpaper;
  FoxBot.TelegraPh = TelegraPh;
  FoxBot.UploadFileUgu = UploadFileUgu;
  FoxBot.webp2mp4File = webp2mp4File;
  FoxBot.Tname = Foxchat.sender.replace(/['@s Foxapp.net']/g, "");

  FoxBot.msgFilter = require("./msgFilter");
  FoxBot.imagebutton = require("../buttons/imagebutton");
  FoxBot.videobutton = require("../buttons/videobutton");
  FoxBot.handlerror = require("../buttons/handlerror");
  FoxBot.TTS = require("google-tts-api");
  // FoxBot.nhentaidl = require("./nhentaidl");
  FoxBot.dashboard = require("../database/dashboard");
  FoxBot.LinkList = require("../database/antilink");
  FoxBot.Ranker = require("../database/autorank");
  FoxBot.Bagde = require("../database/badge");
  FoxBot.premium = require("../database/premium");
  FoxBot.userBanCheck = require("../database/ban");
  FoxBot.Cooldown = require("../database/cooldown");
  FoxBot.DebugMode = require("../database/debug");
  FoxBot.Economy = require("../database/economy");
  FoxBot.Gamble = require("../database/gamble");
  FoxBot.Halt = require("../database/halt");
  FoxBot.nsfwCheck = require("../database/nsfw");
  FoxBot.Pokemon = require("../database/pokemon");
  FoxBot.UserPrivate = require("../database/private");
  FoxBot.Robbery = require("../database/robbery");
  FoxBot.ServerDB = require("../database/ServerDB");
  FoxBot.Welcome = require("../database/setwelcome");
  FoxBot.Warning = require("../database/warning");
  FoxBot.Zoology = require("../database/zoo");
  FoxBot.Fishes = require("../public/fishes.json");
  FoxBot.animals = require("../public/animals.json");
  FoxBot.Jwork = require("../public/works.json");
  FoxBot.dare = require("../public/dare.json");
  FoxBot.truth = require("../public/truth.json");
  FoxBot.magfetch = require("../server/magfetch");

  FoxBot.os = require("os");
  FoxBot.fs = require("fs");
  FoxBot.got = require("got");
  FoxBot.gis = require("g-i-s");
  FoxBot.path = require("path");
  FoxBot.util = require("util");
  FoxBot.primbon = new Primbon();
  FoxBot.ms = require("parse-ms");
  FoxBot.hxz = require("hxz-api");
  FoxBot.axios = require("axios");
  FoxBot.chalk = require("chalk");
  FoxBot.playdl = require("play-dl");
  FoxBot.request = require("request");
  FoxBot.xfar = require("xfarr-api");
  FoxBot.cron = require("node-cron");
  FoxBot.nHentai = require("shentai");
  FoxBot.cheerio = require("cheerio");
  FoxBot.akaneko = require("akaneko");
  FoxBot.fetch = require("node-fetch");
  FoxBot.google = require("google-it");
  FoxBot.Spinnies = require("spinnies");
  FoxBot.Anime = require("anime-actions");
  FoxBot.Tinyurl = require("tinyurl-api");
  FoxBot.FastHub = require("simple-git")();
  FoxBot.speed = require("performance-now");
  FoxBot.moment = require("moment-timezone");
  FoxBot.Carbon = require("unofficial-carbon-now");
  FoxBot.Levels = require("discord-xp");
  FoxBot.canvacord = require("canvacord");
  FoxBot.randomMC = require("random-material-color");
  FoxBot.yClient = require("youtube-avdl");
  FoxBot.pokemontcgsdk = require("pokemontcgsdk");
  FoxBot.singer = require("play-dl");
  FoxBot.ffmpeg = ffmpeg;
  FoxBot.pathFFmpeg = require("ffmpeg-static");

  // FoxBot.memberRespA = [];
  // FoxBot.memberRespB = [];
  // FoxBot.resp1 = await FoxBot.groupInviteCode("120363020792949649@g.us");
  FoxBot.varResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "FoxBot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    var TShow = FoxBot.chalk.hex("#2D5A27").bold(Topic);
    var Show = FoxBot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      FoxBot.chalk.black(FoxBot.chalk.bgBlack(TShow)),
      FoxBot.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    var TShow = FoxBot.chalk.hex("#008B8B").bold(Topic);
    var Show = FoxBot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      FoxBot.chalk.black(FoxBot.chalk.bgBlack(TShow)),
      FoxBot.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    var TShow = FoxBot.chalk.hex("#ff6347").bold(Topic);
    var Show = FoxBot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      FoxBot.chalk.black(FoxBot.chalk.bgBlack(TShow)),
      FoxBot.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    var TShow = FoxBot.chalk.hex("#8B8000").bold(Topic);
    var Show = FoxBot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      FoxBot.chalk.black(FoxBot.chalk.bgBlack(TShow)),
      FoxBot.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (var file of files) {
      FoxBot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  FoxBot.ShowGreen = ShowGreen;
  FoxBot.ShowBlue = ShowBlue;
  FoxBot.ShowRed = ShowRed;
  FoxBot.ShowYellow = ShowYellow;
  FoxBot.between = between;
  FoxBot.clearStorage = clearStorage;
  FoxBot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  FoxBot.spinnies = new FoxBot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: FoxBot.spinner,
  });
  FoxBot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  FoxBot.Showlogger = Showlogger;
  FoxBot.packname = packname;
  FoxBot.pgdb = DATABASE_URL;
  FoxBot.ShowInfo = ShowInfo;
  FoxBot.MONGODB_URL = MONGODB_URL;
  FoxBot.author = author;
  FoxBot.prefix = prefix;
  FoxBot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  FoxBot.isSudo = sudotring.includes(
    Foxchat.sender.substring(0, Foxchat.sender.indexOf("@"))
  );
  return FoxBot;
};
