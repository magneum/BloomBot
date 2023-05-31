var logger = require("progress-estimator")();
var youtubedl = require("youtube-dl-exec");
var axios = require("axios");
var chalk = require("chalk");

module.exports = async (query) => {
  try {
    console.log(chalk.yellow("📢Info: Fetching data from API..."));
    var response = await axios.get(
      `https://magneum.vercel.app/api/youtube_sr?q=${query}`
    );
    var { youtube_search: searchData } = response.data;
    if (!searchData || searchData.length === 0) {
      return {
        success: false,
        error: "No search results found.",
      };
    } else {
      var promise = youtubedl(searchData[0].LINK, {
        dumpSingleJson: true,
      });
      var { formats } = await logger(
        promise,
        "📢Info: Obtaining YouTube Data..."
      );
      if (!formats || formats.length === 0) {
        return {
          success: false,
          error: "No audio formats available.",
        };
      }
      var ultralowFormat = formats.find(
        (format) => format.format_id === "599" || format.format_id === "600"
      );
      var lowFormat = formats.find(
        (format) =>
          format.format_id === "139" ||
          format.format_id === "249" ||
          format.format_id === "250"
      );
      var mediumFormat = formats.find(
        (format) => format.format_id === "140" || format.format_id === "251"
      );
      var audiolink = mediumFormat.url || lowFormat.url || ultralowFormat.url;
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
