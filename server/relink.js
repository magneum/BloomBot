"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 🤖📱 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
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
//  ║     🚨LEGAL NOTICE🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ 🐞 DEVELOPERS: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("@/config");
const {
  Simp,
  Pokemon,
  Ship,
  IShipOptions,
} = require("@shineiichijo/canvas-chan");
const {
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
} = require("./obFunc");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { tmpdir } = require("os");
const { JSDOM } = require("jsdom");
const { Character } = require("mailist");
const { randomUUID } = require("crypto");
const { readFile } = require("fs/promises");
const { performance } = require("perf_hooks");
const { Primbon } = require("scrape-primbon");
const { getDadjoke } = require("random-jokes");
const { Manga } = require("@shineiichijo/marika");
const { AnimeWallpaper } = require("anime-wallpaper");
const { Doujin } = require("@shineiichijo/nhentai-pdf");
const { exec, spawn, execSync } = require("child_process");
const { DownloaderHelper } = require("node-downloader-helper");
const { TelegraPh, UploadFileUgu, webp2mp4File } = require("./uploader");
const {
  Sticker,
  createSticker,
  StickerTypes,
} = require("wa-sticker-formatter");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
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

module.exports = async (BloomBot, mags, update, store) => {
  BloomBot.display = getRandomImagePath()
    .then((imagePath) => {
      BloomBot.display = imagePath;
    })
    .catch((err) => {
      BloomBot.display = "./public/BloomBot_Logo.png";
    });

  BloomBot.performance = performance;
  BloomBot.JSDOM = JSDOM;
  BloomBot.randomUUID = randomUUID;
  BloomBot.Character = Character;
  BloomBot.execSync = execSync;
  BloomBot.spawn = spawn;
  BloomBot.exec = exec;
  BloomBot.Primbon = Primbon;
  BloomBot.IShipOptions = IShipOptions;
  BloomBot.Ship = Ship;
  BloomBot.Pokemon = Pokemon;
  BloomBot.Simp = Simp;
  BloomBot.IShipOptions = IShipOptions;
  BloomBot.readFile = readFile;
  BloomBot.tmpdir = tmpdir;
  BloomBot.Doujin = Doujin;
  BloomBot.DownloaderHelper = DownloaderHelper;
  BloomBot.chalk = chalk;
  BloomBot.Sticker = Sticker;
  BloomBot.createSticker = createSticker;
  BloomBot.StickerTypes = StickerTypes;
  BloomBot.mMake = mMake;
  BloomBot.formatp = formatp;
  BloomBot.formatDate = formatDate;
  BloomBot.getTime = getTime;
  BloomBot.isUrl = isUrl;
  BloomBot.sleep = sleep;
  BloomBot.clockString = clockString;
  BloomBot.runtime = runtime;
  BloomBot.fetchJson = fetchJson;
  BloomBot.getBuffer = getBuffer;
  BloomBot.jsonformat = jsonformat;
  BloomBot.format = format;
  BloomBot.parseMention = parseMention;
  BloomBot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  BloomBot.getRandom = getRandom;
  BloomBot.getDadjoke = getDadjoke;
  BloomBot.Manga = Manga;
  BloomBot.AnimeWallpaper = AnimeWallpaper;
  BloomBot.TelegraPh = TelegraPh;
  BloomBot.UploadFileUgu = UploadFileUgu;
  BloomBot.webp2mp4File = webp2mp4File;
  BloomBot.Tname = mags.sender.replace(/['@s whatsapp.net']/g, "");

  BloomBot.msgFilter = require("./msgFilter");
  BloomBot.imagebutton = require("@/app/buttons/imagebutton");
  BloomBot.videobutton = require("@/app/buttons/videobutton");
  BloomBot.handlerror = require("@/app/buttons/handlerror");
  BloomBot.TTS = require("google-tts-api");
  // BloomBot.nhentaidl = require("./nhentaidl");
  BloomBot.dashboard = require("@/database/dashboard");
  BloomBot.LinkList = require("@/database/antilink");
  BloomBot.Ranker = require("@/database/autorank");
  BloomBot.Bagde = require("@/database/badge");
  BloomBot.premium = require("@/database/premium");
  BloomBot.userBanCheck = require("@/database/ban");
  BloomBot.Cooldown = require("@/database/cooldown");
  BloomBot.DebugMode = require("@/database/debug");
  BloomBot.Economy = require("@/database/economy");
  BloomBot.Gamble = require("@/database/gamble");
  BloomBot.Halt = require("@/database/halt");
  BloomBot.nsfwCheck = require("@/database/nsfw");
  BloomBot.Pokemon = require("@/database/pokemon");
  BloomBot.UserPrivate = require("@/database/private");
  BloomBot.Robbery = require("@/database/robbery");
  BloomBot.ServerDB = require("@/database/ServerDB");
  BloomBot.Welcome = require("@/database/setwelcome");
  BloomBot.Warning = require("@/database/warning");
  BloomBot.Zoology = require("@/database/zoo");
  BloomBot.Fishes = require("@/public/fishes.json");
  BloomBot.animals = require("@/public/animals.json");
  BloomBot.Jwork = require("@/public/works.json");
  BloomBot.dare = require("@/public/dare.json");
  BloomBot.truth = require("@/public/truth.json");
  BloomBot.magfetch = require("@/server/magfetch");
  BloomBot.YouTubeAudio = require("@/utils/YouAudio");
  BloomBot.logger = require("@/log/index.js");

  BloomBot.os = require("os");
  BloomBot.fs = require("fs");
  BloomBot.got = require("got");
  BloomBot.gis = require("g-i-s");
  BloomBot.path = require("path");
  BloomBot.util = require("util");
  BloomBot.primbon = new Primbon();
  BloomBot.ms = require("parse-ms");
  BloomBot.hxz = require("hxz-api");
  BloomBot.axios = require("axios");
  BloomBot.cors = require("cors");
  BloomBot.express = require("express");
  BloomBot.chalk = require("chalk");
  BloomBot.clear = require("cli-clear");
  BloomBot.playdl = require("play-dl");
  BloomBot.request = require("request");
  BloomBot.xfar = require("xfarr-api");
  BloomBot.cron = require("node-cron");
  BloomBot.nHentai = require("shentai");
  BloomBot.cheerio = require("cheerio");
  BloomBot.akaneko = require("akaneko");
  BloomBot.fetch = require("node-fetch");
  BloomBot.google = require("google-it");
  BloomBot.Spinnies = require("spinnies");
  BloomBot.Anime = require("anime-actions");
  BloomBot.Tinyurl = require("tinyurl-api");
  BloomBot.FastHub = require("simple-git")();
  BloomBot.speed = require("performance-now");
  BloomBot.moment = require("moment-timezone");
  BloomBot.Carbon = require("unofficial-carbon-now");
  BloomBot.Levels = require("discord-xp");
  BloomBot.canvacord = require("canvacord");
  BloomBot.randomMC = require("random-material-color");
  BloomBot.yClient = require("youtube-avdl");
  BloomBot.pokemontcgsdk = require("pokemontcgsdk");
  BloomBot.singer = require("play-dl");
  BloomBot.ffmpeg = ffmpeg;
  BloomBot.pathFFmpeg = require("ffmpeg-static");

  // BloomBot.memberRespA = [];
  // BloomBot.memberRespB = [];
  // BloomBot.resp1 = await BloomBot.groupInviteCode("120363020792949649@g.us");
  BloomBot.constResp = [
    "h",
    "m",
    "c",
    "help",
    "list",
    "command",
    "commands",
    "BloomBot",
    "Commands",
  ];

  function ShowGreen(Topic, Text) {
    const TShow = BloomBot.chalk.hex("#2D5A27").bold(Topic);
    const Show = BloomBot.chalk.hex("#849871").italic.bold(Text);
    console.log(
      BloomBot.chalk.black(BloomBot.chalk.bgBlack(TShow)),
      BloomBot.chalk.black(Show),
    );
  }
  function ShowBlue(Topic, Text) {
    const TShow = BloomBot.chalk.hex("#008B8B").bold(Topic);
    const Show = BloomBot.chalk.hex("#818d94").italic.bold(Text);
    console.log(
      BloomBot.chalk.black(BloomBot.chalk.bgBlack(TShow)),
      BloomBot.chalk.black(Show),
    );
  }
  function ShowRed(Topic, Text) {
    const TShow = BloomBot.chalk.hex("#ff6347").bold(Topic);
    const Show = BloomBot.chalk.hex("#ed7777").italic.bold(Text);
    console.log(
      BloomBot.chalk.black(BloomBot.chalk.bgBlack(TShow)),
      BloomBot.chalk.black(Show),
    );
  }
  function ShowYellow(Topic, Text) {
    const TShow = BloomBot.chalk.hex("#8B8000").bold(Topic);
    const Show = BloomBot.chalk.hex("#ECCF8D").italic.bold(Text);
    console.log(
      BloomBot.chalk.black(BloomBot.chalk.bgBlack(TShow)),
      BloomBot.chalk.black(Show),
    );
  }
  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  function clearStorage(files) {
    for (const file of files) {
      BloomBot.fs.unlink(file, (err) => {
        if (err) throw err;
      });
    }
  }

  BloomBot.ShowGreen = ShowGreen;
  BloomBot.ShowBlue = ShowBlue;
  BloomBot.ShowRed = ShowRed;
  BloomBot.ShowYellow = ShowYellow;
  BloomBot.between = between;
  BloomBot.clearStorage = clearStorage;
  BloomBot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  BloomBot.spinnies = new BloomBot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: BloomBot.spinner,
  });
  BloomBot.TubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  BloomBot.Showlogger = Showlogger;
  BloomBot.bloom_mode = bloom_mode;
  BloomBot.packname = packname;
  BloomBot.ShowInfo = ShowInfo;
  BloomBot.author = author;
  BloomBot.prefix = prefix;
  BloomBot.sudo = sudo;
  sudotring =
    process.env.sudo === undefined
      ? "918436686758,917430922909"
      : process.env.sudo;
  BloomBot.isSudo = sudotring.includes(
    mags.sender.substring(0, mags.sender.indexOf("@")),
  );
  return BloomBot;
};
