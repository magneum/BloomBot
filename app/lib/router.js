"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
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
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("@/config/index.js");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const { tmpdir } = require("os");
const { JSDOM } = require("jsdom");
const { Character } = require("mailist");
const { randomUUId } = require("crypto");
const { readFile } = require("fs/promises");
const { performance } = require("perf_hooks");
const { Primbon } = require("scrape-primbon");
const { getDadjoke } = require("random-jokes");
const { Manga } = require("@shineiichijo/marika");
const { AnimeWallpaper } = require("anime-wallpaper");
const { Doujin } = require("@shineiichijo/nhentai-pdf");
const { exec, spawn, execSync } = require("child_process");
const { DownloaderHelper } = require("node-downloader-helper");
const { Simp, Pokemon, Ship } = require("@shineiichijo/canvas-chan");
const { TelegraPh, UploadFileUgu, webp2mp4File } = require("./uploader.js");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  writeExif,
} = require("./convr.js");
const { NhentaiDL } = require("./nhentaidl.js");
const {
  chatkey_maker,
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
} = require("./bloomHive.js");
const {
  Sticker,
  createSticker,
  StickerTypes,
} = require("wa-sticker-formatter");
const { promisify } = require("util");
const { randomUUID } = require("crypto");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const ffprobe = require("@ffprobe-installer/ffprobe");
const ffmpeg = require("fluent-ffmpeg")()
  .setFfprobePath(ffprobe.path)
  .setFfmpegPath(ffmpegInstaller.path);

function getRandomImagePath() {
  return new Promise((resolve, reject) => {
    const folderPath = "app/public/bloom";
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

module.exports = async (BloomBot, chatkey, update, store) => {
  BloomBot.display = getRandomImagePath().then((imagePath) => {
    BloomBot.display = imagePath;
  });

  BloomBot.performance = performance;
  BloomBot.JSDOM = JSDOM;
  BloomBot.randomUUId = randomUUId;
  BloomBot.Character = Character;
  BloomBot.execSync = execSync;
  BloomBot.spawn = spawn;
  BloomBot.exec = exec;
  BloomBot.Primbon = Primbon;
  BloomBot.Ship = Ship;
  BloomBot.Pokemon = Pokemon;
  BloomBot.Simp = Simp;
  BloomBot.readFile = readFile;
  BloomBot.tmpdir = tmpdir;
  BloomBot.Doujin = Doujin;
  BloomBot.DownloaderHelper = DownloaderHelper;
  BloomBot.chalk = chalk;
  BloomBot.Sticker = Sticker;
  BloomBot.createSticker = createSticker;
  BloomBot.StickerTypes = StickerTypes;
  BloomBot.chatkey_maker = chatkey_maker;
  BloomBot.formatp = formatp;
  BloomBot.formatDate = formatDate;
  BloomBot.getTime = getTime;
  BloomBot.randomUUID = randomUUID;
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
  BloomBot.imageToWebp = imageToWebp;
  BloomBot.videoToWebp = videoToWebp;
  BloomBot.writeExifImg = writeExifImg;
  BloomBot.writeExifVid = writeExifVid;
  BloomBot.writeExif = writeExif;
  BloomBot.nhentaidl = NhentaiDL;
  BloomBot.promisify = promisify;

  BloomBot.msgFilter = require("./msgFilter.js");
  BloomBot.imagebutton = require("@/client/buttons/imagebutton");
  BloomBot.videobutton = require("@/client/buttons/videobutton");
  BloomBot.handlerror = require("@/client/buttons/handlerror");
  BloomBot.TTS = require("google-tts-api");
  BloomBot.dashboard = require("@/database/mongo/dashboard");
  BloomBot.LinkList = require("@/database/mongo/antilink");
  BloomBot.Anticall = require("@/database/mongo/anticall");
  BloomBot.Ranker = require("@/database/mongo/autorank");
  BloomBot.Bagde = require("@/database/mongo/badge");
  BloomBot.premium = require("@/database/mongo/premium");
  BloomBot.userBanCheck = require("@/database/mongo/ban");
  BloomBot.Cooldown = require("@/database/mongo/cooldown");
  BloomBot.DebugMode = require("@/database/mongo/debug");
  BloomBot.Economy = require("@/database/mongo/economy");
  BloomBot.Gamble = require("@/database/mongo/gamble");
  BloomBot.Halt = require("@/database/mongo/halt");
  BloomBot.nsfwCheck = require("@/database/mongo/nsfw");
  BloomBot.Pokemon = require("@/database/mongo/pokemon");
  BloomBot.UserPrivate = require("@/database/mongo/private");
  BloomBot.Robbery = require("@/database/mongo/robbery");
  BloomBot.ServerDB = require("@/database/mongo/ServerDB");
  BloomBot.Welcome = require("@/database/mongo/setwelcome");
  BloomBot.Warning = require("@/database/mongo/warning");
  BloomBot.Zoology = require("@/database/mongo/zoo");
  BloomBot.Fishes = require("@/database/json/fishes.json");
  BloomBot.animals = require("@/database/json/animals.json");
  BloomBot.YouAuxiliary = require("@/utils/YouAuxiliary.js");
  BloomBot.Jwork = require("@/database/json/works.json");
  BloomBot.dare = require("@/database/json/dare.json");
  BloomBot.truth = require("@/database/json/truth.json");
  BloomBot.magfetch = require("@/lib/magfetch.js");
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
  // BloomBot.resp1 = await BloomBot.groupInviteCode("120363020792949649@g.us");
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
  BloomBot.BLOOM_MODE = BLOOM_MODE;
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
    chatkey.sender.substring(0, chatkey.sender.indexOf("@")),
  );
  BloomBot.tagname = chatkey.sender.replace(/['@s whatsapp.net']/g, "");
  return BloomBot;
};
