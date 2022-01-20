// const playlist = [
//   {
//     title: "DevOps Tutorial For Beginners ",
//     videoId: "YSkDtQ2RA_c",
//     videoUrl: "https://www.youtube.com/watch?v=YSkDtQ2RA_c",
//   },
// ];
// const fs = require("fs");
// const ytdl = require("ytdl-core");
// const length = playlist.length;

// playlist.forEach((pl, i) => {
//   const { videoUrl, title } = pl;
//   const item = i + 1;

//   ytdl(videoUrl, {
//     format: "mp3",
//   }).pipe(fs.createWriteStream(`${title}.mp3`));
//   console.log(`${item}/${length} - ${title} downloaded successfully`);
// });

import fs = require("fs");
import ytdl = require("ytdl-core");

ytdl("https://youtu.be/NOaZVn2ML44").pipe(fs.createWriteStream("video.mp4"));
