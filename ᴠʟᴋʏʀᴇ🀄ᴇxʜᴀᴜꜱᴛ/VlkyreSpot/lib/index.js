`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const pkg = require("../package.json");
const Youtube = require("youtube-sr").default;
const { Readable } = require("stream");
const ytdl = require("discord-ytdl-core");
const fetch = require("node-fetch");
const spotifyApi = require("spotify-url-info");
const spdl = async (url, options = {}) => {
return new Promise(async (resolve, reject) => {
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
try {
if (!SPDLCore.validateURL(url)) return reject(new Error("Invalid URL"));
const infos = await spotifyApi.getPreview(url);
if (!infos || infos.type !== "track")
return reject(new Error("Track not found"));
let video = await Youtube.searchOne(`${infos.track} ${infos.artist}`);
if (!video) video = await Youtube.searchOne(`${infos.track}`);
if (!video || video.views === 0)
return reject(new Error("Track not found"));
return resolve(ytdl(video.url, options));
} catch (err) {
return reject(err);
}
});
};
`|⬡════════════════════════════════════════════|⌜ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⌬ ❝ ᴘᴏᴡᴇʀᴇᴅ ☊ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞ ⌟|═══════════════════════════════════════════⬡|`;
class SPDLCore {
constructor() {
throw new Error(
`The ${this.constructor.name} class may not be instantiated!`
);
}
static async getInfo(url) {
return new Promise(async (resolve, reject) => {
if (!SPDLCore.validateURL(url)) return reject(new Error("Invalid URL"));
const infos = await spotifyApi
.getPreview(url)
.catch((err) => reject(err));
if (!infos || infos.type !== "track")
return reject(new Error("Track not found"));
let video = await Youtube.searchOne(
`${infos.track} ${infos.artist}`
).catch((err) => reject(err));
if (!video)
video = await Youtube.searchOne(`${infos.track}`).catch((err) =>
reject(err)
);
if (!video || video.views === 0)
return reject(new Error("Track not found"));
return resolve({
title: infos.track,
artist: infos.artist,
url: infos.link,
id: infos.link.split("/")[infos.link.split("/").length - 1],
duration: video.duration,
thumbnail: infos.image,
});
});
}
static validateURL(url, type = "track") {
switch (type) {
case "track":
return /^https?:\/\/(?:open|play)\.spotify\.com\/track\/[\w\d]+$/i.test(
SPDLCore.parse(url)
);
case "album":
return /^https?:\/\/(?:open|play)\.spotify\.com\/album\/[\w\d]+$/i.test(
SPDLCore.parse(url)
);
case "playlist":
return /^https?:\/\/(?:open|play)\.spotify\.com\/playlist\/[\w\d]+$/i.test(
SPDLCore.parse(url)
);
default:
return false;
}
}
static parse(url) {
return url.split("?")[0];
}
static async updater() {
if (!process.env.SPDL_NO_UPDATE) {
try {
const fetched = await fetch(
"https://api.github.com/repos/SkyDonald/spdl-core/releases/latest",
{
headers: {
"User-Agent": `spdl-core v${pkg.version}`,
},
}
);
const data = await fetched.json();
} catch (err) {
console.warn("Error checking for updates: ", err.message);
console.warn(
"You can disable this check by setting the `SPDL_NO_UPDATE` env variable to false"
);
}
}
}
}
spdl.validateURL = SPDLCore.validateURL;
spdl.getInfo = SPDLCore.getInfo;
spdl.checkUpdate = SPDLCore.updater;
SPDLCore.updater();
module.exports = spdl;
module.exports.default = spdl;
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
