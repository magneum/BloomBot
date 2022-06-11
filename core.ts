const ffmpeg = require("fluent-ffmpeg");
const ytdl = require("ytdl-core");
var FFmpegFile = `./Filter_${Date.now()}_Normalized.mp3`;
var FilteredAudio = `./Filter_${Date.now()}_Nightcore.mp3`;

var FFmpegStream = ytdl("https://youtu.be/L5CV53wCWO0", {
filter: "audioonly",
});
ffmpeg(FFmpegStream)
.saveToFile(FFmpegFile)
.on("end", () => {
require("child_process").exec(
`ffmpeg -i ${FFmpegFile} -af "aresample=48000,asetrate=48000*1.25" ${FilteredAudio}`,
async () => {
console.log("Done!");
}
);
});
