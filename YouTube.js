(async () => {
  let { ytv, yta } = require("./Core/y2mate");
  let media = await yta("https://www.youtube.com/watch?v=GeAq6Mft17k", "128kbps");
  console.log(media.dl_link);
})();
