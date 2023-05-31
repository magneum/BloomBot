const logger = require("progress-estimator")();
const youtubedl = require("youtube-dl-exec");
const axios = require("axios");
const chalk = require("chalk");

module.exports = async (query) => {
  try {
    console.log(chalk.yellow("📢Info: Fetching data from API..."));
    const response = await axios.get(
      `https://magneum.vercel.app/api/youtube_sr?q=${query}`
    );
    const { youtube_search: searchData } = response.data;
    if (!searchData || searchData.length === 0) {
      return {
        success: false,
        error: "No search results found.",
      };
    } else {
      const promise = youtubedl(searchData[0].LINK, {
        dumpSingleJson: true,
      });
      const { formats } = await logger(
        promise,
        "📢Info: Obtaining YouTube Data..."
      );
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
      } else {
        console.log(chalk.green("📢Info: YouTube Fetching Completed..."));
        return {
          success: true,
          audio: audiolink,
        };
      }
    }
  } catch (error) {
    console.error(chalk.red("❌Error:"), error.message);
    return {
      success: false,
      error: error.message,
    };
  }
};
