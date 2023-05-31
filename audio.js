const progress = require("progress-estimator");
const youtubedl = require("youtube-dl-exec");
const axios = require("axios");
const chalk = require("chalk");

async function fetchDataAndDownloadAudio() {
  try {
    console.log(chalk.yellow("Fetching data from API..."));
    const response = await axios.get(
      "https://magneum.vercel.app/api/youtube_sr?q=jaan nisar"
    );
    const searchData = response.data.youtube_search;
    console.log(searchData);
    const foundItems = [searchData];
    let audioLink = await youtubedl(foundItems[0].LINK, {
      noWarnings: true,
      dumpSingleJson: true,
      preferFreeformats: true,
      noCheckCertificates: true,
      addHeader: ["referer:youtube.com", "user-agent:googlebot"],
    });
    console.log(chalk.yellow("Downloading audio..."));
    const audioDownload = progress(audioLink, "Obtaining: ", {
      format:
        chalk.cyan("{bar}") +
        " {percentage}% | ETA: {eta_formatted} | {value}/{total}",
    });
    const { formats } = audioDownload;
    const ultralowFormats = formats.filter(
      (format) => format.format_id === "599" || format.format_id === "600"
    );
    const ultralowFormat = ultralowFormats[0] || ultralowFormats;
    const lowFormats = formats.filter(
      (format) =>
        format.format_id === "139" ||
        format.format_id === "249" ||
        format.format_id === "250"
    );
    const lowFormat = lowFormats[0] || lowFormats;
    const mediumFormats = formats.filter(
      (format) => format.format_id === "140" || format.format_id === "251"
    );
    const mediumFormat = mediumFormats[0] || mediumFormats;
    if (mediumFormat.width !== undefined) {
      audioLink = mediumFormat.url;
    } else if (lowFormat.width !== undefined) {
      audioLink = lowFormat.url;
    } else if (ultralowFormat.width !== undefined) {
      audioLink = ultralowFormat.url;
    }
    console.log(chalk.green("Download complete!"));
    return {
      success: true,
      searchResult: foundItems[0],
      audio: audioLink,
    };
  } catch (error) {
    console.error(chalk.red("Error:"), error);
    return {
      success: false,
      error: error.message,
    };
  }
}

fetchDataAndDownloadAudio()
  .then((result) => {
    console.log(chalk.green("Result:"), result);
  })
  .catch((error) => {
    console.error(chalk.red("Error:"), error);
  });
