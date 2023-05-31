const logger = require("progress-estimator")();
const youtubedl = require("youtube-dl-exec");
const axios = require("axios");
const chalk = require("chalk");

module.exports = async (query) => {
  try {
    console.log(chalk.yellow("Fetching data from API..."));
    const apiUrl = `https://magneum.vercel.app/api/youtube_sr?q=${query}`;
    const response = await axios.get(apiUrl);
    const { youtube_search: searchData } = response.data;
    if (!searchData || searchData.length === 0) {
      return {
        success: false,
        error: "No search results found.",
      };
    }
    const promise = youtubedl(searchData[0].LINK, {
      dumpSingleJson: true,
    });
    const { formats } = await logger(promise, "📢: Obtaining YouTube Data...");
    if (!formats || formats.length === 0) {
      return {
        success: false,
        error: "No audio formats available.",
      };
    }
    const ultralowFormat = formats.find(
      (format) => format.format_id === "599" || format.format_id === "600"
    );
    const lowFormat = formats.find(
      (format) =>
        format.format_id === "139" ||
        format.format_id === "249" ||
        format.format_id === "250"
    );
    const mediumFormat = formats.find(
      (format) => format.format_id === "140" || format.format_id === "251"
    );
    const audiolink =
      (mediumFormat && mediumFormat.width && mediumFormat.url) ||
      (lowFormat && lowFormat.width && lowFormat.url) ||
      (ultralowFormat && ultralowFormat.width && ultralowFormat.url);
    if (!audiolink) {
      return {
        success: false,
        error: "Unable to determine download link.",
      };
    }
    console.log(chalk.green("📢: YouTube Fetching Completed..."));
    return {
      success: true,
      audio: audiolink,
    };
  } catch (error) {
    console.error(chalk.red("Error:"), error.message);
    return {
      success: false,
      error: error.message,
    };
  }
};
