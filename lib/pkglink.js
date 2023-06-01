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
const { Doujin } = require("@shineiichijo/nhentai-pdf");
const ffprobe = require("@ffprobe-installer/ffprobe");
const { AnimeWallpaper } = require("anime-wallpaper");
const shineiichijo = require("@shineiichijo/canvas-chan");
const { exec, spawn, execSync } = require("child_process");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const { DownloaderHelper } = require("node-downloader-helper");
const { TelegraPh, UploadFileUgu, webp2mp4File } = require("./uploader");
const {
  Sticker,
  createSticker,
  StickerTypes,
} = require("wa-sticker-formatter");
const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);
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
} = require("./bloomer");

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
  BloomBot.ApiFetch = require("@/utils/ApiFetch");
  BloomBot.Bagde = require("@/database/badge");
  BloomBot.Cooldown = require("@/database/cooldown");
  BloomBot.DebugMode = require("@/database/debug");
  BloomBot.Economy = require("@/database/economy");
  BloomBot.Fishes = require("@/public/fishes.json");
  BloomBot.Gamble = require("@/database/gamble");
  BloomBot.Halt = require("@/database/halt");
  BloomBot.Jwork = require("@/public/works.json");
  BloomBot.LinkList = require("@/database/antilink");
  BloomBot.logger = require("@/log/index.js");
  BloomBot.nhentaidl = require("./nhentaidl");
  BloomBot.nsfwCheck = require("@/database/nsfw");
  BloomBot.PokemonDb = require("@/database/pokemon");
  BloomBot.Premium = require("@/database/premium");
  BloomBot.Ranker = require("@/database/autorank");
  BloomBot.Robbery = require("@/database/robbery");
  BloomBot.ServerDB = require("@/database/ServerDB");
  BloomBot.Truth = require("@/public/truth.json");
  BloomBot.TTS = require("google-tts-api");
  BloomBot.UserBanCheck = require("@/database/ban");
  BloomBot.UserPrivate = require("@/database/private");
  BloomBot.VideoButton = require("@/app/buttons/videobutton");
  BloomBot.Warning = require("@/database/warning");
  BloomBot.Welcome = require("@/database/setwelcome");
  BloomBot.YouTubeAudio = require("@/utils/YouAudio");
  BloomBot.Zoology = require("@/database/zoo");
  BloomBot.animals = require("@/public/animals.json");
  BloomBot.dare = require("@/public/dare.json");
  BloomBot.handlerror = require("@/app/buttons/handlerror");
  BloomBot.imagebutton = require("@/app/buttons/imagebutton");

  BloomBot.akaneko = require("akaneko");
  BloomBot.Anime = require("anime-actions");
  BloomBot.axios = require("axios");
  BloomBot.canvacord = require("canvacord");
  BloomBot.Carbon = require("unofficial-carbon-now");
  BloomBot.chalk = require("chalk");
  BloomBot.cheerio = require("cheerio");
  BloomBot.cors = require("cors");
  BloomBot.cron = require("node-cron");
  BloomBot.express = require("express");
  BloomBot.fetch = require("node-fetch");
  BloomBot.FastHub = require("simple-git")();
  BloomBot.fs = require("fs");
  BloomBot.gis = require("g-i-s");
  BloomBot.google = require("google-it");
  BloomBot.got = require("got");
  BloomBot.hxz = require("hxz-api");
  BloomBot.Levels = require("discord-xp");
  BloomBot.moment = require("moment-timezone");
  BloomBot.ms = require("parse-ms");
  BloomBot.nHentai = require("shentai");
  BloomBot.path = require("path");
  BloomBot.pathFFmpeg = require("ffmpeg-static");
  BloomBot.playdl = require("play-dl");
  BloomBot.pokemontcgsdk = require("pokemontcgsdk");
  BloomBot.randomMC = require("random-material-color");
  BloomBot.request = require("request");
  BloomBot.singer = require("play-dl");
  BloomBot.Spinnies = require("spinnies");
  BloomBot.speed = require("performance-now");
  BloomBot.Tinyurl = require("tinyurl-api");
  BloomBot.util = require("util");
  BloomBot.xfar = require("xfarr-api");
  BloomBot.yClient = require("youtube-avdl");

  BloomBot.AnimeWallpaper = AnimeWallpaper;
  BloomBot.Character = Character;
  BloomBot.Doujin = Doujin;
  BloomBot.DownloaderHelper = DownloaderHelper;
  BloomBot.GIFBufferToVideoBuffer = GIFBufferToVideoBuffer;
  BloomBot.IShipOptions = IShipOptions;
  BloomBot.JSDOM = JSDOM;
  BloomBot.Manga = Manga;
  BloomBot.Pokemon = shineiichijo.Pokemon;
  BloomBot.Primbon = Primbon;
  BloomBot.Sticker = Sticker;
  BloomBot.StickerTypes = StickerTypes;
  BloomBot.TelegraPh = TelegraPh;
  BloomBot.UploadFileUgu = UploadFileUgu;
  BloomBot.chalk = chalk;
  BloomBot.clockString = clockString;
  BloomBot.createSticker = createSticker;
  BloomBot.exec = exec;
  BloomBot.execSync = execSync;
  BloomBot.fetchJson = fetchJson;
  BloomBot.ffmpeg = ffmpeg;
  BloomBot.format = format;
  BloomBot.formatDate = formatDate;
  BloomBot.formatp = formatp;
  BloomBot.getBuffer = getBuffer;
  BloomBot.getTime = getTime;
  BloomBot.getDadjoke = getDadjoke;
  BloomBot.getRandom = getRandom;
  BloomBot.isUrl = isUrl;
  BloomBot.jsonformat = jsonformat;
  BloomBot.mMake = mMake;
  BloomBot.parseMention = parseMention;
  BloomBot.performance = performance;
  BloomBot.randomUUID = randomUUID;
  BloomBot.readFile = readFile;
  BloomBot.runtime = runtime;
  BloomBot.sleep = sleep;
  BloomBot.spawn = spawn;
  BloomBot.tmpdir = tmpdir;
  BloomBot.webp2mp4File = webp2mp4File;

  BloomBot.Logos = getRandomImagePath()
    .then((imagePath) => {
      BloomBot.Logos = imagePath;
    })
    .catch((err) => {
      BloomBot.Logos = "./public/BloomBot_Logo.png";
    });
  BloomBot.Tname = mags.sender.replace(/['@s whatsapp.net']/g, "");
  BloomBot.spinner = {
    interval: 80,
    frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
  };
  BloomBot.spinnies = new BloomBot.Spinnies({
    color: "cyan",
    succeedColor: "green",
    spinner: BloomBot.spinner,
  });
  BloomBot.YouTubeRegex =
    /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  // BloomBot.packname = packname;
  // BloomBot.ShowInfo = ShowInfo;
  // BloomBot.author = author;
  // BloomBot.prefix = prefix;
  // BloomBot.SUDO = SUDO;
  SudoString =
    process.env.SUDO === undefined
      ? "918436686758,917430922909"
      : process.env.SUDO;
  BloomBot.isSudo = SudoString.includes(
    mags.sender.substring(0, mags.sender.indexOf("@")),
  );
  return BloomBot;
};
