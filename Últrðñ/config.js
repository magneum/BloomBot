const fs = require("fs");
const { Sequelize } = require("sequelize");
if (fs.existsSync("Últrðñ.env")) {
  require("dotenv").config({ path: "./Últrðñ.env" });
} else {
  require("dotenv");
}
process.env.SQLL =
  process.env.SQLL === undefined ? "./Últrðñ.db" : process.env.SQLL;

const env = {
  ULTRON: process.env.ULTRON === undefined ? "" : process.env.ULTRON,
  HEROKU: process.env.HEROKU === undefined ? false : true,
  ULTRONIX:
    process.env.ULTRONIX === undefined ? "^[.?!]" : process.env.ULTRONIX,
  CCD: process.env.CCD === undefined ? "91" : process.env.CCD,
  OCR: process.env.OCR === undefined ? "9ffb44def388957" : process.env.OCR,
  WAPI:
    process.env.CURRENT_WEATHER_API_KEY === undefined
      ? "6729ac2b2e2bb5c686ff427a2f06df92"
      : process.env.CURRENT_WEATHER_API_KEY,
  SQLL: process.env.SQLL,
  POSTQL:
    process.env.SQLL === "./Últrðñ.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: process.env.SQLL,
        })
      : new Sequelize(process.env.SQLL, {
          dialect: "postgres",
          protocol: "postgres",
          dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        }),
  PRIVACY: process.env.PRIVACY === undefined ? "private" : process.env.PRIVACY,
  SUDO: process.env.SUDO === undefined ? "" : process.env.SUDO,
};

module.exports = env;
