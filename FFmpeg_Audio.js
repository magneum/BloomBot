`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const { YouTube_Music } = require(`./Sakura🛰️Server/youmaker`);
const FFmpeg = require("fluent-FFmpeg");
const Readline = require(`readline`);
const TinyURL = require("tinyurl");
const FFmpegProc = new FFmpeg();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
YouTube_Music("https://youtu.be/UKunvvN2iCk").then((res) => {
  const { dl_link, thumb, title, filesizeF, filesize } = res;
  TinyURL.shorten(dl_link).then(
    async function (gotTiny) {
      FFmpegProc.addInput(gotTiny)
        .output("./" + title.trim().toString() + ".mp3")
        .format("mp3")
        .on(`progress`, (p) => {
          Readline.cursorTo(process.stdout, 0);
          process.stdout.write(`⬡═════| 💯𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬: ${p.targetSize}kb`);
        })
        .on("error", (Error) =>
          console.log(`⬡═════| 🐞𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐄𝐫𝐫𝐨𝐫: ` + Error)
        )
        .on("end", () =>
          console.log(`\n⬡═════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝: ` + gotTiny)
        );
      FFmpegProc.run();
    },
    async function (Error) {
      console.log(`⬡═════| 🐞𝐄𝐫𝐫𝐨𝐫: ` + Error);
    }
  );
});
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
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
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
