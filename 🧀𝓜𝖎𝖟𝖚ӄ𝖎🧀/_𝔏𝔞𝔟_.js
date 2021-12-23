`🐙============================================================================================================================<⚡>`;
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`𝓜𝖎𝖟𝖚ӄ𝖎.env`)) {
  require(`dotenv`).config({
    path: `./𝓜𝖎𝖟𝖚ӄ𝖎.env`,
  });
} else {
  require(`dotenv`);
}
var ᴛ = [`https://i.postimg.cc/sXG9mb1D/Mizuki-Main.png`];
const MizukiMain = ᴛ[Math.floor(Math.random() * ᴛ.length)];
`🐙============================================================================================================================<⚡>`;
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
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  HASH: `https://chat.whatsapp.com/KC32fr1BLmzHYgToZjMuHn`,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./𝓜𝖎𝖟𝖚ӄ𝖎.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./𝓜𝖎𝖟𝖚ӄ𝖎.db`
      ? new Sequelize({ dialect: `sqlite`, storage: process.env.DATABASE_URL })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        }),
  MEE: MizukiMain,
  SUDO:
    process.env.SUDO === undefined
      ? `918250889325,918436686758,989035024059`
      : process.env.SUDO,
  ɴᴏᴛᴀᴅᴍɪɴ: `./𝓜𝖎𝖟𝖚ӄ𝖎/𝓜𝖎𝖟𝖚ӄ𝖎MemErr.png`,
  INVL: `https://i.postimg.cc/x8KGDHKw/Mizuki-Invalid.png`,
  UPT: `https://i.postimg.cc/kgjQm7bg/Mizuki-Update.png`,
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
};
module.exports = env;
`🐙============================================================================================================================<⚡>`;
