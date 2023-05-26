//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../global.js");
let {
  Simp,
  Pokemon,
  Ship,
  IShipOptions,
} = require("@shineiichijo/canvas-chan");
let {
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
let { tmpdir } = require("os");
let { JSDOM } = require("jsdom");
let { Character } = require("mailist");
let { readFile } = require("fs/promises");
let { Chalk } = require("cfonts/lib/Chalk");
let { performance } = require("perf_hooks");
let { Primbon } = require("scrape-primbon");
let { getDadjoke } = require("random-jokes");
let { createWorker } = require("tesseract.js");
let { Manga } = require("@shineiichijo/marika");
let { AnimeWallpaper } = require("anime-wallpaper");
let { Doujin } = require("@shineiichijo/nhentai-pdf");
let { exec, spawn, execSync } = require("child_process");
let { DownloaderHelper } = require("node-downloader-helper");
let { TelegraPh, UploadFileUgu, webp2mp4File } = require("./uploader");
let { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
let ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
let ffprobe = require("@ffprobe-installer/ffprobe");
let ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);

module.exports = async (ѕуηтнiα, νℓкhat, update, store) => {
  ѕуηтнiα.performance = performance;
  ѕуηтнiα.createWorker = createWorker;
  ѕуηтнiα.JSDOM = JSDOM;
  ѕуηтнiα.Character = Character;
  ѕуηтнiα.execSync = execSync;
  ѕуηтнiα.spawn = spawn;
  ѕуηтнiα.exec = exec;
  ѕуηтнiα.Primbon = Primbon;
  ѕуηтнiα.IShipOptions = IShipOptions;
  ѕуηтнiα.Ship = Ship;
  ѕуηтнiα.Pokemon = Pokemon;
  ѕуηтнiα.Simp = Simp;
  ѕуηтнiα.readFile = readFile;
  ѕуηтнiα.tmpdir = tmpdir;
  ѕуηтнiα.Doujin = Doujin;
  ѕуηтнiα.DownloaderHelper = DownloaderHelper;
  ѕуηтнiα.Chalk = Chalk;
  ѕуηтнiα.Sticker = Sticker;
  ѕуηтнiα.createSticker = createSticker;
  ѕуηтнiα.StickerTypes = StickerTypes;
  ѕуηтнiα.νkmake = νkmake;
  ѕуηтнiα.formatp = formatp;
  ѕуηтнiα.formatDate = formatDate;
  ѕуηтнiα.getTime = getTime;
  ѕуηтнiα.isUrl = isUrl;
  ѕуηтнiα.sleep = sleep;
  ѕуηтнiα.clockString = clockString;
  ѕуηтнiα.runtime = runtime;
  ѕуηтнiα.fetchJson = fetchJson;
  ѕуηтнiα.getBuffer = getBuffer;
  ѕуηтнiα.jsonformat = jsonformat;
  ѕуηтнiα.format = format;
  ѕуηтнiα.parseMention = parseMention;
  ѕуηтнiα.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  ѕуηтнiα.getRandom = getRandom;
  ѕуηтнiα.getDadjoke = getDadjoke;
  ѕуηтнiα.Manga = Manga;
  ѕуηтнiα.AnimeWallpaper = AnimeWallpaper;
  ѕуηтнiα.TelegraPh = TelegraPh;
  ѕуηтнiα.UploadFileUgu = UploadFileUgu;
  ѕуηтнiα.webp2mp4File = webp2mp4File;
  ѕуηтнiα.Tname = νℓкhat.sender.replace(/['@s whatsapp.net']/g, "");

  ѕуηтнiα.msgFilter = require("./msgFilter");
  ѕуηтнiα.imgB = require("../buttons/imgB");
  ѕуηтнiα.vidB = require("../buttons/vidB");
  ѕуηтнiα.grab = require("../buttons/grab");
  ѕуηтнiα.TTS = require("google-tts-api");
  // ѕуηтнiα.nhentaidl = require("./nhentaidl");
  ѕуηтнiα.dashboard = require("../database/dashboard");
  ѕуηтнiα.LinkList = require("../database/antilink");
  ѕуηтнiα.Ranker = require("../database/autorank");
  ѕуηтнiα.Bagde = require("../database/badge");
  ѕуηтнiα.vimium = require("../database/vimium");
  ѕуηтнiα.userBanCheck = require("../database/ban");
  ѕуηтнiα.Cooldown = require("../database/cooldown");
  ѕуηтнiα.DebugMode = require("../database/debug");
  ѕуηтнiα.Economy = require("../database/economy");
  ѕуηтнiα.Gamble = require("../database/gamble");
  ѕуηтнiα.Halt = require("../database/halt");
  ѕуηтнiα.nsfwCheck = require("../database/nsfw");
  ѕуηтнiα.Pokemon = require("../database/pokemon");
  ѕуηтнiα.UserPrivate = require("../database/private");
  ѕуηтнiα.Robbery = require("../database/robbery");
  ѕуηтнiα.ServerDB = require("../database/ServerDB");
  ѕуηтнiα.Welcome = require("../database/setwelcome");
  ѕуηтнiα.Warning = require("../database/warning");
  ѕуηтнiα.Zoology = require("../database/zoo");
  ѕуηтнiα.Fishes = require("../src/fishes.json");
  ѕуηтнiα.animals = require("../src/animals.json");
  ѕуηтнiα.Jwork = require("../src/works.json");
  ѕуηтнiα.dare = require("../src/dare.json");
  ѕуηтнiα.truth = require("../src/truth.json");
  ѕуηтнiα.magfetch = require("../server/magfetch");

  ѕуηтнiα.os = require("os");
  ѕуηтнiα.fs = require("fs");
  ѕуηтнiα.got = require("got");
  ѕуηтнiα.gis = require("g-i-s");
  ѕуηтнiα.path = require("path");
  ѕуηтнiα.util = require("util");
  ѕуηтнiα.primbon = new Primbon();
  ѕуηтнiα.ms = require("parse-ms");
  ѕуηтнiα.hxz = require("hxz-api");
  ѕуηтнiα.axios = require("axios");
  ѕуηтнiα.chalk = require("chalk");
  ѕуηтнiα.playdl = require("play-dl");
  ѕуηтнiα.request = require("request");
  ѕуηтнiα.xfar = require("xfarr-api");
  ѕуηтнiα.cron = require("node-cron");
  ѕуηтнiα.nHentai = require("shentai");
  ѕуηтнiα.cheerio = require("cheerio");
  ѕуηтнiα.akaneko = require("akaneko");
  ѕуηтнiα.fetch = require("node-fetch");
  ѕуηтнiα.google = require("google-it");
  ѕуηтнiα.Spinnies = require("spinnies");
  ѕуηтнiα.Anime = require("anime-actions");
  ѕуηтнiα.Tinyurl = require("tinyurl-api");
  ѕуηтнiα.FastHub = require("simple-git")();
  ѕуηтнiα.speed = require("performance-now");
  ѕуηтнiα.moment = require("moment-timezone");
  ѕуηтнiα.Carbon = require("unofficial-carbon-now");
  ѕуηтнiα.Levels = require("discord-xp");
  ѕуηтнiα.canvacord = require("canvacord");
  ѕуηтнiα.randomMC = require("random-material-color");
  ѕуηтнiα.yClient = require("youtube-avdl");
  ѕуηтнiα.pokemontcgsdk = require("pokemontcgsdk");
  ѕуηтнiα.singer = require("play-dl");
  ѕуηтнiα.ffmpeg = ffmpeg;
  ѕуηтнiα.pathFFmpeg = require("ffmpeg-static");

  // ѕуηтнiα.memberRespA = [];
  // ѕуηтнiα.memberRespB = [];
  // ѕуηтнiα.resp1 = await ѕуηтнiα.groupInviteCode("120363020792949649@g.us");
  ѕуηтнiα.letResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "VօxB໐t",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    let TShow = ѕуηтнiα.chalk.hex("#2D5A27").bold(Topic);
    let Show = ѕуηтнiα.chalk.hex("#849871").italic.bold(Text);
    console.log(
      ѕуηтнiα.chalk.black(ѕуηтнiα.chalk.bgBlack(TShow)),
      ѕуηтнiα.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    let TShow = ѕуηтнiα.chalk.hex("#008B8B").bold(Topic);
    let Show = ѕуηтнiα.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      ѕуηтнiα.chalk.black(ѕуηтнiα.chalk.bgBlack(TShow)),
      ѕуηтнiα.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    let TShow = ѕуηтнiα.chalk.hex("#ff6347").bold(Topic);
    let Show = ѕуηтнiα.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      ѕуηтнiα.chalk.black(ѕуηтнiα.chalk.bgBlack(TShow)),
      ѕуηтнiα.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    let TShow = ѕуηтнiα.chalk.hex("#8B8000").bold(Topic);
    let Show = ѕуηтнiα.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      ѕуηтнiα.chalk.black(ѕуηтнiα.chalk.bgBlack(TShow)),
      ѕуηтнiα.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (let file of files) {
      ѕуηтнiα.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  ѕуηтнiα.ShowGreen = ShowGreen;
  ѕуηтнiα.ShowBlue = ShowBlue;
  ѕуηтнiα.ShowRed = ShowRed;
  ѕуηтнiα.ShowYellow = ShowYellow;
  ѕуηтнiα.between = between;
  ѕуηтнiα.clearStorage = clearStorage;
  ѕуηтнiα.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  ѕуηтнiα.spinnies = new ѕуηтнiα.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: ѕуηтнiα.spinner,
  });
  ѕуηтнiα.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  ѕуηтнiα.ShowLogger = ShowLogger;
  ѕуηтнiα.packname = packname;
  ѕуηтнiα.pgdb = DATABASE_URL;
  ѕуηтнiα.ShowInfo = ShowInfo;
  ѕуηтнiα.MONGO_URL = MONGO_URL;
  ѕуηтнiα.author = author;
  ѕуηтнiα.prefix = prefix;
  ѕуηтнiα.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  ѕуηтнiα.isSudoWorker = sudotring.includes(
    νℓкhat.sender.substring(0, νℓкhat.sender.indexOf("@"))
  );
  var LOGOS = [
    "voxbot_ (1).png",
    "voxbot_ (2).png",
    "voxbot_ (3).png",
    "voxbot_ (4).png",
    "voxbot_ (5).png",
  ];
  var i = Math.floor(Math.random() * LOGOS.length);
  ѕуηтнiα.logo = "./src/logo/" + LOGOS[i];

  return ѕуηтнiα;
};
