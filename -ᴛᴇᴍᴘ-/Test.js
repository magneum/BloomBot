var Hx = require("hxz-api");
var search = require("yt-search");
var short = require("tinyurl-api");
var { Response } = require("node-fetch");
var { yta } = require("./•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/y2mate");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
var { DownloaderHelper } = require("node-downloader-helper");

async function dLoader(string) {
var raw = await search(string);
var item = raw.videos.slice(0, 1);
console.log(item);
item.forEach(function (data) {
try {
Hx.youtube(data.url).then(async (response) => {
var shorten = await short(response.mp3);
let pLoad = new DownloaderHelper(shorten, "./", {
fileName: response.id + ".mp3",
});
await pLoad.on("error", (error) => {
console.log(error);
});
await pLoad.start().then(async () => {
console.log(response);
console.log(shorten);
});
});
} catch (error) {
console.log(error);
}
});
}

dLoader("5 sec music");
