const img = "https://cdn.discordapp.com/embed/avatars/0.png";
const { ImageMaker } = require("canvacord");
const canvacord = require("canvacord");
const fs = require(`fs`);

const rank = new canvacord.Rank()
  .setAvatar(img)
  .setCurrentXP(10)
  .setRequiredXP(100)
  .setStatus("dnd")
  .setProgressBar("#FFFFFF", "COLOR")
  .setUsername("Snowflake")
  .setDiscriminator("0007");

rank.build().then((data) => {
  fs.writeFile("./RankCard.png", data, (Error) => {
    if (Error) console.log(Error);
  });
});
