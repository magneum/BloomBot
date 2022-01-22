const getVideoId = require("get-video-id");
const ffmpeg = require("fluent-ffmpeg");
const readline = require("readline");
const ytdl = require("ytdl-core");

const { id } = getVideoId("https://youtu.be/UKunvvN2iCk?list=RDUKunvvN2iCk");
let stream = ytdl(id, {
  quality: "highestaudio",
});
let start = Date.now();
let YouTY = `${start}_${id}.mp3`;
ffmpeg(stream)
  .audioBitrate(128)
  .save(`${__dirname}/${YouTY}`)
  .on("progress", (progress) => {
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`${progress.targetSize}kb downloaded`);
  })
  .on("end", () => {
    console.log(`Download Done In: ${(Date.now() - start) / 1000}s`);

    const Content = await fs.readFileSync(YouTY);
    console.log(Content);
    await ӄʀǟӄɨռʐ.sendMessage(ֆǟӄʊʀǟ.chatId, Content, MessageType.audio, {
      quoted: chat,
      mimetype: "audio/mp4",
    });
    await cleanRF.cleanRF(YouTY);
    return;
  });
