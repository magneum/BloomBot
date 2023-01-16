const { youtubedl, youtubedlv2 } = require("@bochilteam/scraper");
const url = "https://youtu.be/iik25wqIuFo";
youtubedl(url)
  .catch((_) => youtubedlv2(url))
  .then((data) => {
    console.log(data);
    return;
    video["240p"].download().then(console.log).catch(console.error);
  });
