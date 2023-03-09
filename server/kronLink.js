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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (νℓкуяє, νℓкhat, update, store) => {
  νℓкуяє.performance = performance;
  νℓкуяє.createWorker = createWorker;
  νℓкуяє.JSDOM = JSDOM;
  νℓкуяє.Character = Character;
  νℓкуяє.execSync = execSync;
  νℓкуяє.spawn = spawn;
  νℓкуяє.exec = exec;
  νℓкуяє.Primbon = Primbon;
  νℓкуяє.IShipOptions = IShipOptions;
  νℓкуяє.Ship = Ship;
  νℓкуяє.Pokemon = Pokemon;
  νℓкуяє.Simp = Simp;
  νℓкуяє.readFile = readFile;
  νℓкуяє.tmpdir = tmpdir;
  νℓкуяє.Doujin = Doujin;
  νℓкуяє.DownloaderHelper = DownloaderHelper;
  νℓкуяє.Chalk = Chalk;
  νℓкуяє.Sticker = Sticker;
  νℓкуяє.createSticker = createSticker;
  νℓкуяє.StickerTypes = StickerTypes;
  νℓкуяє.νkmake = νkmake;
  νℓкуяє.formatp = formatp;
  νℓкуяє.formatDate = formatDate;
  νℓкуяє.getTime = getTime;
  νℓкуяє.isUrl = isUrl;
  νℓкуяє.sleep = sleep;
  νℓкуяє.clockString = clockString;
  νℓкуяє.runtime = runtime;
  νℓкуяє.fetchJson = fetchJson;
  νℓкуяє.getBuffer = getBuffer;
  νℓкуяє.jsonformat = jsonformat;
  νℓкуяє.format = format;
  νℓкуяє.parseMention = parseMention;
  νℓкуяє.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  νℓкуяє.getRandom = getRandom;
  νℓкуяє.getDadjoke = getDadjoke;
  νℓкуяє.Manga = Manga;
  νℓкуяє.AnimeWallpaper = AnimeWallpaper;
  νℓкуяє.TelegraPh = TelegraPh;
  νℓкуяє.UploadFileUgu = UploadFileUgu;
  νℓкуяє.webp2mp4File = webp2mp4File;
  νℓкуяє.Tname = νℓкhat.sender.replace(/['@s whatsapp.net']/g, "");
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  νℓкуяє.msgFilter = require("./msgFilter");
  νℓкуяє.imgB = require("../bin/buttons/imgB");
  νℓкуяє.vidB = require("../bin/buttons/vidB");
  νℓкуяє.grab = require("../bin/buttons/grab");
  νℓкуяє.TTS = require("google-tts-api");
  // νℓкуяє.nhentaidl = require("./nhentaidl");
  νℓкуяє.dashboard = require("../database/dashboard");
  νℓкуяє.LinkList = require("../database/antilink");
  νℓкуяє.Ranker = require("../database/autorank");
  νℓкуяє.Bagde = require("../database/badge");
  νℓкуяє.vimium = require("../database/vimium");
  νℓкуяє.userBanCheck = require("../database/ban");
  νℓкуяє.Cooldown = require("../database/cooldown");
  νℓкуяє.DebugMode = require("../database/debug");
  νℓкуяє.Economy = require("../database/economy");
  νℓкуяє.Gamble = require("../database/gamble");
  νℓкуяє.Halt = require("../database/halt");
  νℓкуяє.nsfwCheck = require("../database/nsfw");
  νℓкуяє.Pokemon = require("../database/pokemon");
  νℓкуяє.UserPrivate = require("../database/private");
  νℓкуяє.Robbery = require("../database/robbery");
  νℓкуяє.ServerDB = require("../database/ServerDB");
  νℓкуяє.Welcome = require("../database/setwelcome");
  νℓкуяє.Warning = require("../database/warning");
  νℓкуяє.Zoology = require("../database/zoo");
  νℓкуяє.Fishes = require("../src/fishes.json");
  νℓкуяє.animals = require("../src/animals.json");
  νℓкуяє.Jwork = require("../src/works.json");
  νℓкуяє.dare = require("../src/dare.json");
  νℓкуяє.truth = require("../src/truth.json");
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  νℓкуяє.os = require("os");
  νℓкуяє.fs = require("fs");
  νℓкуяє.got = require("got");
  νℓкуяє.gis = require("g-i-s");
  νℓкуяє.path = require("path");
  νℓкуяє.util = require("util");
  νℓкуяє.primbon = new Primbon();
  νℓкуяє.ms = require("parse-ms");
  νℓкуяє.hxz = require("hxz-api");
  νℓкуяє.axios = require("axios");
  νℓкуяє.chalk = require("chalk");
  νℓкуяє.playdl = require("play-dl");
  νℓкуяє.request = require("request");
  νℓкуяє.xfar = require("xfarr-api");
  νℓкуяє.cron = require("node-cron");
  νℓкуяє.nHentai = require("shentai");
  νℓкуяє.cheerio = require("cheerio");
  νℓкуяє.akaneko = require("akaneko");
  νℓкуяє.fetch = require("node-fetch");
  νℓкуяє.google = require("google-it");
  νℓкуяє.Spinnies = require("spinnies");
  νℓкуяє.Anime = require("anime-actions");
  νℓкуяє.Tinyurl = require("tinyurl-api");
  νℓкуяє.FastHub = require("simple-git")();
  νℓкуяє.speed = require("performance-now");
  νℓкуяє.moment = require("moment-timezone");
  νℓкуяє.Carbon = require("unofficial-carbon-now");
  νℓкуяє.Levels = require("discord-xp");
  νℓкуяє.canvacord = require("canvacord");
  νℓкуяє.randomMC = require("random-material-color");
  νℓкуяє.yClient = require("youtube-avdl");
  νℓкуяє.pokemontcgsdk = require("pokemontcgsdk");
  νℓкуяє.singer = require("play-dl");
  νℓкуяє.ffmpeg = ffmpeg;
  νℓкуяє.pathFFmpeg = require("ffmpeg-static");
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  νℓкуяє.memberRespA = [];
  νℓкуяє.resp1 = await νℓкуяє.groupInviteCode("120363020792949649@g.us");
  νℓкуяє.letResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "Vlkyre",
    "Commands",
  ];
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  function ShowGreen(Topic, Text) {
    let TShow = νℓкуяє.chalk.hex("#2D5A27").bold(Topic);
    let Show = νℓкуяє.chalk.hex("#849871").italic.bold(Text);
    console.log(
      νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
      νℓкуяє.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    let TShow = νℓкуяє.chalk.hex("#008B8B").bold(Topic);
    let Show = νℓкуяє.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
      νℓкуяє.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    let TShow = νℓкуяє.chalk.hex("#ff6347").bold(Topic);
    let Show = νℓкуяє.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
      νℓкуяє.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    let TShow = νℓкуяє.chalk.hex("#8B8000").bold(Topic);
    let Show = νℓкуяє.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
      νℓкуяє.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (let file of files) {
      νℓкуяє.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  νℓкуяє.ShowGreen = ShowGreen;
  νℓкуяє.ShowBlue = ShowBlue;
  νℓкуяє.ShowRed = ShowRed;
  νℓкуяє.ShowYellow = ShowYellow;
  νℓкуяє.between = between;
  νℓкуяє.clearStorage = clearStorage;
  νℓкуяє.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  νℓкуяє.spinnies = new νℓкуяє.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: νℓкуяє.spinner,
  });
  νℓкуяє.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  νℓкуяє.ShowLogger = ShowLogger;
  νℓкуяє.packname = packname;
  νℓкуяє.pgdb = DATABASE_URL;
  νℓкуяє.ShowInfo = ShowInfo;
  νℓкуяє.MONGO_URL = MONGO_URL;
  νℓкуяє.author = author;
  νℓкуяє.prefix = prefix;
  νℓкуяє.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  νℓкуяє.isSudoWorker = sudotring.includes(
    νℓкhat.sender.substring(0, νℓкhat.sender.indexOf("@"))
  );
  var LOGOS = [
    "vlkyre_ (1).png",
    "vlkyre_ (2).png",
    "vlkyre_ (3).png",
    "vlkyre_ (4).png",
    "vlkyre_ (5).png",
  ];
  var i = Math.floor(Math.random() * LOGOS.length);
  νℓкуяє.logo = "./src/logo/" + LOGOS[i];
  ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  return νℓкуяє;
};
