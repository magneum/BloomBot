const pkg = require("../package.json");
const Youtube = require("youtube-sr").default;
const { Readable } = require("stream"); // eslint-disable-line no-unused-vars
const ytdl = require("discord-ytdl-core");
const fetch = require("node-fetch");
const spotifyApi = require("spotify-url-info");

/**
 * @typedef {Object} trackInfo
 * @property {string} title The track title
 * @property {string} artist The track artist
 * @property {string} url The track url
 * @property {string} id The track id
 * @property {number?} duration The track duration
 * @property {string} thumbnail The track thumbnail
 */

/**
 * Downloads the track from the given url. Returns a readable stream
 * @param {string} url The track url
 * @param {Object} options The download options
 * @returns {Promise<Readable>} The readable stream
 */
const spdl = async (url, options = {}) => {
return new Promise(async (resolve, reject) => {
// eslint-disable-line no-async-promise-executor
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

class SPDLCore {
constructor() {
throw new Error(
`The ${this.constructor.name} class may not be instantiated!`
);
}

/**
* Gives the information of a track
* @param {string} url The track url
* @returns {Promise<trackInfo>} The track info
*/
static async getInfo(url) {
return new Promise(async (resolve, reject) => {
// eslint-disable-line no-async-promise-executor
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

/**
* Returns true if url is a spotify track link
* @param {string} url The spotify url
* @param {'album' | 'track' | 'playlist'} type The url type
* @returns {boolean} Is a spotify link
*/
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

/**
* Returns a beautified spotify url
* @param {string} url The url to beautify
* @returns {string} The beautified url
* @private
* @ignore
*/
static parse(url) {
return url.split("?")[0];
}

/**
* Checks for updates
* @private
* @ignore
*/
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
