"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ ⒸBloomBot (multi-device) by Magneum™
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
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[  ⒸBloomBot (md) by Magneum™  ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const youtubedl = require("youtube-dl-exec");
const progress = require("progress-estimator")();

async function GetYouTubeInfo(query, type = "audio") {
  const promise = youtubedl(query, {
    noWarnings: true,
    dumpSingleJson: true,
    noCheckCertificates: true,
    addHeader: ["referer:youtube.com", "user-agent:googlebot"],
  });
  const result = await progress(promise, "📢 Obtaining...");
  const formats = result.formats;
  if (type === "audio") {
    const audioFormats = formats.filter((format) => format.vcodec === "none");
    return audioFormats;
  } else if (type === "video") {
    const videoFormats = formats.filter(
      (format) =>
        format.acodec === "none" && !format.format_note.includes("storyboard")
    );
    const highestFormat = findHighestFormatByProperty(videoFormats, "filesize");
    return highestFormat;
  } else {
    return "❌ Error: Invalid type argument. Supported types are 'audio' and 'video'.";
  }
}
function findHighestFormatByProperty(formats, property) {
  let highestFormat = null;
  let highestSize = 0;
  for (const format of formats) {
    if (format[property] > highestSize) {
      highestFormat = format;
      highestSize = format[property];
    }
  }
  return highestFormat;
}
module.exports = GetYouTubeInfo;

// const logger = require("progress-estimator")();
// const youtubedl = require("youtube-dl-exec");
// const axios = require("axios");
// const chalk = require("chalk");

// module.exports = async (query) => {
// try {
// console.log(chalk.yellow("📢Info: Fetching data from API..."));
// const response = await axios.get(
// `https://magneum.vercel.app/api/youtube_sr?q=${query}`
// );
// const { youtube_search: searchData } = response.data;
// if (!searchData || searchData.length === 0) {
// return {
// success: false,
// error: "No search results found.",
// };
// } else {
// const promise = youtubedl(searchData[0].LINK, {
// dumpSingleJson: true,
// });
// const { formats } = await logger(
// promise,
// "📢Info: Obtaining YouTube Data..."
// );
// if (!formats || formats.length === 0) {
// return {
// success: false,
// error: "No audio formats available.",
// };
// }
// const ultralowFormat = formats.find(
// (format) => format.format_id === "599" || format.format_id === "600"
// );
// const lowFormat = formats.find(
// (format) =>
// format.format_id === "139" ||
// format.format_id === "249" ||
// format.format_id === "250"
// );
// const mediumFormat = formats.find(
// (format) => format.format_id === "140" || format.format_id === "251"
// );
// const audiolink = mediumFormat.url || lowFormat.url || ultralowFormat.url;
// if (!audiolink) {
// return {
// success: false,
// error: "Unable to determine download link.",
// };
// } else {
// console.log(chalk.green("📢Info: YouTube Fetching Completed..."));
// return {
// success: true,
// audio: audiolink,
// };
// }
// }
// } catch (error) {
// console.error(chalk.red("❌Error:"), error.message);
// return {
// success: false,
// error: error.message,
// };
// }
// };
