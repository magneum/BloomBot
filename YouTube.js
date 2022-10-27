(async () => {
  let { ytv } = require("./Core/y2mate");
  let media = await ytv("https://www.youtube.com/watch?v=GeAq6Mft17k", "360p");
  console.log(media.dl_link);
})();
