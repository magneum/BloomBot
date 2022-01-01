try {
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
    TEN: `0G2R8PTUGMRP`,
    ɴᴏᴛᴍᴇᴀᴅᴍɪɴ: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎NotMeAdmin.png`,
    ɴᴏᴛᴀᴅᴍɪɴ: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎MemErr.png`,
    WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
    UPT: `https://i.postimg.cc/sDXbg5xF/image.png`,
    ERROR: `https://i.postimg.cc/sDPF83Mx/Mizuki-Error.png`,
    INVL: `https://i.postimg.cc/q7k5WK9Z/Mizuki-Invalid.png`,
    HASH: `https://chat.whatsapp.com/EKyTcSlzOmF20MELthQwgy`,
    DEV: `918436686758,918250889325,989035024059`,
    MIZUKIQL: (process.env.MIZUKIQL =
      process.env.MIZUKIQL === undefined
        ? `./ʍɨʐʊӄɨ☣️ƈօʀɛ/ʍɨʐʊӄɨ☣️ƈօʀɛ.db`
        : process.env.MIZUKIQL),
    POSTQL:
      process.env.MIZUKIQL === `./ʍɨʐʊӄɨ☣️ƈօʀɛ/ʍɨʐʊӄɨ☣️ƈօʀɛ.db`
        ? new Sequelize({ dialect: `sqlite`, storage: process.env.MIZUKIQL })
        : new Sequelize(process.env.MIZUKIQL, {
            dialect: `postgres`,
            protocol: `postgres`,
            dialectOptions: {
              ssl: { require: true, rejectUnauthorized: false },
            },
          }),
    MEE: `https://i.postimg.cc/vB077MSQ/image.png`,
    PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
  };
  module.exports = env;
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
