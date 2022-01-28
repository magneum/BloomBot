const { YouTube_Music } = require(`./Sakura🛰️Server/youmaker`);
const ffmpeg = require("fluent-ffmpeg");
const TinyURL = require("tinyurl");
const proc = new ffmpeg();

// const { spawn } = require("child_process");
// const child = spawn("node", ["Sakura☣️Reactor/🍹ֆǟӄʊʀǟ™.js"]);
// child.stdout.on("data", (data) => {
//   console.log("Stdout:" + data);
// });
// child.stderr.on("data", (data) => {
//   console.log("Stderr:" + data);
// });
// child.on("error", (Error) => console.log("Error:" + Error));
// child.on("exit", (code, signal) => {
//   if (code) console.log("Process Exited With Code: " + code);
//   if (signal) console.log("Process Exited With Signal: " + signal);
//   console.log("All Done!");
// });

YouTube_Music(Found.url).then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res;
  require("tinyurl")
    .TinyURL.shorten(dl_link)
    .then(
      async function (gotTiny) {
        console.log(gotTiny);
        const File = title.trim();
        proc
          .addInput(gotTiny)
          .output("./" + File.toStrimg() + ".mp3")
          .format("mp3")
          .on("error", (err) => console.log(err))
          .on("end", () => console.log("Done FFmpeg"));
        proc.run();
      },
      async function (Error) {
        console.log(Error);
      }
    );
});
