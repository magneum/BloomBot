`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`Sakura☣️Reactor.env`)) {
  require(`dotenv`).config({
    path: `./Sakura☣️Reactor.env`,
  });
} else {
  require(`dotenv`);
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const env = {
  MIZUKI: process.env.MIZUKI === undefined ? `Null` : process.env.MIZUKI,
  SakuraMdb:
    process.env.SakuraMdb === undefined ? `Null` : process.env.SakuraMdb,
  HEROKU_API_KEY:
    process.env.HEROKU_API_KEY === undefined
      ? `Null`
      : process.env.HEROKU_API_KEY,
  HEROKU_APP_NAME:
    process.env.HEROKU_APP_NAME === undefined
      ? `Null`
      : process.env.HEROKU_APP_NAME,
  Krakinz: process.env.Krakinz === undefined ? `Null` : process.env.Krakinz,
  IMDB: `5e36f0db`,
  FOXTROT: `^[/]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: `9ffb44def388957`,
  TEN: `0G2R8PTUGMRP`,
  ɴᴏᴛᴍᴇᴀᴅᴍɪɴ: `./Sakura☣️Reactor/𝓜𝖎𝖟𝖚ӄ𝖎NotMeAdmin.png`,
  ɴᴏᴛᴀᴅᴍɪɴ: `./Sakura☣️Reactor/𝓜𝖎𝖟𝖚ӄ𝖎MemErr.png`,
  WAPI: `6729ac2b2e2bb5c686ff427a2f06df92`,
  ERROR: `https://i.postimg.cc/sDPF83Mx/Sakura-Error.png`,
  INVL: `https://i.postimg.cc/q7k5WK9Z/Sakura-Invalid.png`,
  HASH: `https://chat.whatsapp.com/LKN8uVBd8ucHRHofz0jBSd`,
  DEV: `918250889325,918436686758`,
  HEROKU: process.env.HEROKU,
  MIZUKIQL: (process.env.MIZUKIQL =
    process.env.MIZUKIQL === undefined
      ? `./Sakura☣️Reactor/Sakura☣️Reactor.db`
      : process.env.MIZUKIQL),
  POSTQL:
    process.env.MIZUKIQL === `./Sakura☣️Reactor/Sakura☣️Reactor.db`
      ? new Sequelize({ dialect: `sqlite`, storage: process.env.MIZUKIQL })
      : new Sequelize(process.env.MIZUKIQL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false },
          },
        }),
  MEE: `https://i.postimg.cc/3r6MShnN/image.png`,
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
};
module.exports = env;
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
