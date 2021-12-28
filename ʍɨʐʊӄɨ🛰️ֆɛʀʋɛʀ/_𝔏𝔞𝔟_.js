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
var ᴛ = [`https://i.postimg.cc/sDXbg5xF/image.png`];
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
  ɴᴏᴛᴍᴇᴀᴅᴍɪɴ: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎NotMeAdmin.png`,
  ɴᴏᴛᴀᴅᴍɪɴ: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎MemErr.png`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  UPT: `https://i.postimg.cc/sDXbg5xF/image.png`,
  ERROR: `https://i.postimg.cc/sDPF83Mx/Mizuki-Error.png`,
  INVL: `https://i.postimg.cc/q7k5WK9Z/Mizuki-Invalid.png`,
  HASH: `google.com`,
  DEV: `918436686758,989035024059`,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./ʍɨʐʊӄɨ☣️ƈօʀɛ/ʍɨʐʊӄɨ☣️ƈօʀɛ.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./ʍɨʐʊӄɨ☣️ƈօʀɛ/ʍɨʐʊӄɨ☣️ƈօʀɛ.db`
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
