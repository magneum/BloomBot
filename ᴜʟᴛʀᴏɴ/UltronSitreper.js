// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`ᴜʟᴛʀᴏɴ.env`)) {
  require(`dotenv`).config({
    path: `./ᴜʟᴛʀᴏɴ.env`,
  });
} else {
  require(`dotenv`);
}
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const env = {
  ULTRON: process.env.ULTRON === undefined ? `` : process.env.ULTRON,
  HEROKU_API:
    process.env.HEROKU_API === undefined ? "Null" : process.env.HEROKU_API,
  HEROKU_BOT_NAME:
    process.env.HEROKU_BOT_NAME === undefined
      ? "Null"
      : process.env.HEROKU_BOT_NAME,
  IMDB: process.env.IMDB === undefined ? `5e36f0db` : process.env.IMDB,
  ULTRONIX:
    process.env.ULTRONIX === undefined ? `^[!]` : `^[${process.env.ULTRONIX}]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: process.env.OCR === undefined ? `9ffb44def388957` : process.env.OCR,
  WAPI:
    process.env.CURRENT_WEATHER_API_KEY === undefined
      ? `6729ac2b2e2bb5c686ff427a2f06df92`
      : process.env.CURRENT_WEATHER_API_KEY,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./ᴜʟᴛʀᴏɴ.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./ᴜʟᴛʀᴏɴ.db`
      ? new Sequelize({
          dialect: `sqlite`,
          storage: process.env.DATABASE_URL,
        })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }),
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
  SUDO: process.env.KING === undefined ? `` : process.env.KING,
};
module.exports = env;
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
