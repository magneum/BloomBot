//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../logs/global.js");
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

module.exports = async (voxbot, voxchat, update, store) => {
  voxbot.performance = performance;
  voxbot.createWorker = createWorker;
  voxbot.JSDOM = JSDOM;
  voxbot.Character = Character;
  voxbot.execSync = execSync;
  voxbot.spawn = spawn;
  voxbot.exec = exec;
  voxbot.Primbon = Primbon;
  voxbot.IShipOptions = IShipOptions;
  voxbot.Ship = Ship;
  voxbot.Pokemon = Pokemon;
  voxbot.Simp = Simp;
  voxbot.readFile = readFile;
  voxbot.tmpdir = tmpdir;
  voxbot.Doujin = Doujin;
  voxbot.DownloaderHelper = DownloaderHelper;
  voxbot.Chalk = Chalk;
  voxbot.Sticker = Sticker;
  voxbot.createSticker = createSticker;
  voxbot.StickerTypes = StickerTypes;
  voxbot.νkmake = νkmake;
  voxbot.formatp = formatp;
  voxbot.formatDate = formatDate;
  voxbot.getTime = getTime;
  voxbot.isUrl = isUrl;
  voxbot.sleep = sleep;
  voxbot.clockString = clockString;
  voxbot.runtime = runtime;
  voxbot.fetchJson = fetchJson;
  voxbot.getBuffer = getBuffer;
  voxbot.jsonformat = jsonformat;
  voxbot.format = format;
  voxbot.parseMention = parseMention;
  voxbot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  voxbot.getRandom = getRandom;
  voxbot.getDadjoke = getDadjoke;
  voxbot.Manga = Manga;
  voxbot.AnimeWallpaper = AnimeWallpaper;
  voxbot.TelegraPh = TelegraPh;
  voxbot.UploadFileUgu = UploadFileUgu;
  voxbot.webp2mp4File = webp2mp4File;
  voxbot.Tname = voxchat.sender.replace(/['@s voxapp.net']/g, "");

  voxbot.msgFilter = require("./msgFilter");
  voxbot.imagebutton = require("../buttons/imagebutton");
  voxbot.videobutton = require("../buttons/videobutton");
  voxbot.handlerror = require("../buttons/handlerror");
  voxbot.TTS = require("google-tts-api");
  // voxbot.nhentaidl = require("./nhentaidl");
  voxbot.dashboard = require("../database/dashboard");
  voxbot.LinkList = require("../database/antilink");
  voxbot.Ranker = require("../database/autorank");
  voxbot.Bagde = require("../database/badge");
  voxbot.premium = require("../database/premium");
  voxbot.userBanCheck = require("../database/ban");
  voxbot.Cooldown = require("../database/cooldown");
  voxbot.DebugMode = require("../database/debug");
  voxbot.Economy = require("../database/economy");
  voxbot.Gamble = require("../database/gamble");
  voxbot.Halt = require("../database/halt");
  voxbot.nsfwCheck = require("../database/nsfw");
  voxbot.Pokemon = require("../database/pokemon");
  voxbot.UserPrivate = require("../database/private");
  voxbot.Robbery = require("../database/robbery");
  voxbot.ServerDB = require("../database/ServerDB");
  voxbot.Welcome = require("../database/setwelcome");
  voxbot.Warning = require("../database/warning");
  voxbot.Zoology = require("../database/zoo");
  voxbot.Fishes = require("../public/fishes.json");
  voxbot.animals = require("../public/animals.json");
  voxbot.Jwork = require("../public/works.json");
  voxbot.dare = require("../public/dare.json");
  voxbot.truth = require("../public/truth.json");
  voxbot.magfetch = require("../server/magfetch");

  voxbot.os = require("os");
  voxbot.fs = require("fs");
  voxbot.got = require("got");
  voxbot.gis = require("g-i-s");
  voxbot.path = require("path");
  voxbot.util = require("util");
  voxbot.primbon = new Primbon();
  voxbot.ms = require("parse-ms");
  voxbot.hxz = require("hxz-api");
  voxbot.axios = require("axios");
  voxbot.chalk = require("chalk");
  voxbot.playdl = require("play-dl");
  voxbot.request = require("request");
  voxbot.xfar = require("xfarr-api");
  voxbot.cron = require("node-cron");
  voxbot.nHentai = require("shentai");
  voxbot.cheerio = require("cheerio");
  voxbot.akaneko = require("akaneko");
  voxbot.fetch = require("node-fetch");
  voxbot.google = require("google-it");
  voxbot.Spinnies = require("spinnies");
  voxbot.Anime = require("anime-actions");
  voxbot.Tinyurl = require("tinyurl-api");
  voxbot.FastHub = require("simple-git")();
  voxbot.speed = require("performance-now");
  voxbot.moment = require("moment-timezone");
  voxbot.Carbon = require("unofficial-carbon-now");
  voxbot.Levels = require("discord-xp");
  voxbot.canvacord = require("canvacord");
  voxbot.randomMC = require("random-material-color");
  voxbot.yClient = require("youtube-avdl");
  voxbot.pokemontcgsdk = require("pokemontcgsdk");
  voxbot.singer = require("play-dl");
  voxbot.ffmpeg = ffmpeg;
  voxbot.pathFFmpeg = require("ffmpeg-static");

  // voxbot.memberRespA = [];
  // voxbot.memberRespB = [];
  // voxbot.resp1 = await voxbot.groupInviteCode("120363020792949649@g.us");
  voxbot.letResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "voxbot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    let TShow = voxbot.chalk.hex("#2D5A27").bold(Topic);
    let Show = voxbot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      voxbot.chalk.black(voxbot.chalk.bgBlack(TShow)),
      voxbot.chalk.black(Show)
    );
  }
  function ShowBlue(Topic, Text) {
    let TShow = voxbot.chalk.hex("#008B8B").bold(Topic);
    let Show = voxbot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      voxbot.chalk.black(voxbot.chalk.bgBlack(TShow)),
      voxbot.chalk.black(Show)
    );
  }
  function ShowRed(Topic, Text) {
    let TShow = voxbot.chalk.hex("#ff6347").bold(Topic);
    let Show = voxbot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      voxbot.chalk.black(voxbot.chalk.bgBlack(TShow)),
      voxbot.chalk.black(Show)
    );
  }
  function ShowYellow(Topic, Text) {
    let TShow = voxbot.chalk.hex("#8B8000").bold(Topic);
    let Show = voxbot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      voxbot.chalk.black(voxbot.chalk.bgBlack(TShow)),
      voxbot.chalk.black(Show)
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (let file of files) {
      voxbot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  voxbot.ShowGreen = ShowGreen;
  voxbot.ShowBlue = ShowBlue;
  voxbot.ShowRed = ShowRed;
  voxbot.ShowYellow = ShowYellow;
  voxbot.between = between;
  voxbot.clearStorage = clearStorage;
  voxbot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  voxbot.spinnies = new voxbot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: voxbot.spinner,
  });
  voxbot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  voxbot.Showlogs = Showlogs;
  voxbot.packname = packname;
  voxbot.pgdb = DATABASE_URL;
  voxbot.ShowInfo = ShowInfo;
  voxbot.MONGO_URL = MONGO_URL;
  voxbot.author = author;
  voxbot.prefix = prefix;
  voxbot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  voxbot.isSudo = sudotring.includes(
    voxchat.sender.substring(0, voxchat.sender.indexOf("@"))
  );
  return voxbot;
};
