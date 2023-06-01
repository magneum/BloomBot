const logger = require("progress-estimator")({
  storagePath: "./log/pe",
  logLevel: "info",
});
const youtubedl = require("youtube-dl-exec");
const chalk = require("chalk");

async function getYoutubeLink() {
  const downloadOptions = {
    noWarnings: true,
    dumpSingleJson: true,
    preferFreeFormats: true,
    noCheckCertificates: true,
    addHeader: ["referer:youtube.com", "user-agent:googlebot"],
  };

  try {
    const downloadOutput = await youtubedl(
      "https://www.youtube.com/watch?v=6xKWiCMKKJg",
      downloadOptions
    );
    const downloadResult = await logger(downloadOutput, "📢 Obtaining...");
    const formats = downloadResult.formats;
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
    console.log(mediumFormat || lowFormat || ultralowFormat);
  } catch (err) {
    console.log(chalk.red("❌ Error: ", err));
  }
}

getYoutubeLink();
