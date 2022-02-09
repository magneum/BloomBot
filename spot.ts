const fs = require("fs");
const spdl = require('spdl-core').default;

spdl
  .getInfo(
    "https://open.spotify.com/track/7qH6ICtmf08M8l3bvM27Gc?si=fc6e2bbd95764792"
  )
  .then((infos) => {
    spdl(infos.url).then((stream) => {
      stream.on("end", () => console.log("Done!"));
      stream.pipe(fs.createWriteStream(`${infos.title}.mp3`));
    });
  });
