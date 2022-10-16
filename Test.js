var Hx = require("hxz-api");
const { Response } = require("node-fetch");
let { yta } = require("./•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/y2mate");

try {
  Hx.youtube("https://www.youtube.com/watch?v=g6fnFALEseI").then(
    async (response) => {
      let Media = await yta(
        "https://www.youtube.com/watch?v=g6fnFALEseI",
        "128kbps"
      );
      console.log(Media.DLoader);
    }
  );
} catch (error) {
  console.log(error);
}
