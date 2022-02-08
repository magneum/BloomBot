const ffmpeg = require("fluent-ffmpeg");
const readline = require("readline");
const ytdl = require("ytdl-core");
const fs = require("fs");

var YouFile = ytdl("https://youtu.be/ZceKV-l9d_k", {
filter: "audioonly",
});

var BAudio = Date.now() + ".mp3";
var AAudio = Date.now() + "_Filtered_" + ".mp3";

ffmpeg(YouFile)
.audioBitrate(128)
.toFormat("ipod")
.saveToFile(BAudio)
.on("progress", (progress) => {
readline.cursorTo(process.stdout, 0);
process.stdout.write(`${progress.targetSize}kb downloaded!`);
})
.on("end", () => {
require("child_process").exec(
`ffmpeg -i ${BAudio} -af equalizer=f=94:width_type=o:width=2:g=30 ${AAudio}`,
async (Error) => {
fs.unlink(BAudio, (Error) => {
if (Error) return console.log(Error);
});
if (Error) return console.log(Error);
console.log("\nFiltered Done!");
}
);
});
