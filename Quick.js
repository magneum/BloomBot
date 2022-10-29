(async () => {
var TubeSearch = require("yt-search");
var pathFFmpeg = require("ffmpeg-static");
var { Tube_Audio, Tube_Video } = require("./Core/youtube");

var Audios = await TubeSearch("10 sec music");
var oneAudio = Audios.videos.slice(0, 1);
oneAudio.forEach(async function (one) {
var { DLoader, thumb, title, RSize, BSize } = await Tube_Audio(
one.url,
"en136"
);
require("child_process").exec(
`${pathFFmpeg} -i ${DLoader} -af "apulsator=hz=0.08" ${one.videoId}.mp3`,
(error) => {
console.error;
console.log("Done...");
}
);
});
})();
