// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`ʍɨʐʊӄɨ☣️ƈօʀɛ.env`)) {
  require(`dotenv`).config({
    path: `./ʍɨʐʊӄɨ☣️ƈօʀɛ.env`,
  });
} else {
  require(`dotenv`);
}
var ᴛ = [
  `https://i.postimg.cc/T1cTxHMb/image.png`,
  `https://i.postimg.cc/nLrDRg9C/image.png`,
  `https://i.postimg.cc/DyRHw3nK/2.png`,
  `https://i.postimg.cc/76XjHCYB/mizuki-main.jpg`,
];
const MizukiMain = ᴛ[Math.floor(Math.random() * ᴛ.length)];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const env = {
  Mee6: process.env.MIZUKI === undefined ? `Null` : process.env.MIZUKI,
  HEROKU_API:
    process.env.HEROKU_API === undefined ? `Null` : process.env.HEROKU_API,
  HEROKU_BOT_NAME:
    process.env.HEROKU_BOT_NAME === undefined
      ? `Null`
      : process.env.HEROKU_BOT_NAME,
  Krakinz: process.env.Krakinz === undefined ? `Null` : process.env.Krakinz,
  IMDB: `5e36f0db`,
  FOXTROT: `^[/]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: `9ffb44def388957`,
  ɴᴏᴛᴀᴅᴍɪɴ: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎MemErr.png`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  UPT: `https://i.postimg.cc/RFXvJhgD/Mizuki-Main.png`,
  INVL: `https://i.postimg.cc/x8KGDHKw/Mizuki-Invalid.png`,
  HASH: `https://chat.whatsapp.com/KC32fr1BLmzHYgToZjMuHn`,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./ʍɨʐʊӄɨ☣️ƈօʀɛ.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./ʍɨʐʊӄɨ☣️ƈօʀɛ.db`
      ? new Sequelize({ dialect: `sqlite`, storage: process.env.DATABASE_URL })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        }),
  MEE: MizukiMain,
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
};
module.exports = env;
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
