const fs = require("fs");
const { Sequelize } = require("sequelize");
if (fs.existsSync(".env")) {
  require("dotenv").config({ path: ".env" });
} else {
  require("dotenv");
}

const convertToLogLevel = (value) => {
  var log = false;
  if (typeof value === "string") {
    if (value.toLowerCase() === "true") {
      log = console.log;
    }
  }
  return log;
};

process.env.DATABASE_URL =
  process.env.DATABASE_URL === undefined
    ? "./BloomBot.db"
    : process.env.DATABASE_URL;
process.env.DEBUG =
  process.env.DEBUG === undefined ? "false" : process.env.DEBUG;

const dbConfig = {
  DATABASE_URL:
    process.env.DATABASE_URL === undefined
      ? "./BloomBot.db"
      : process.env.DATABASE_URL,
  DEBUG: process.env.DEBUG === undefined ? false : process.env.DEBUG,
  DATABASE:
    process.env.DATABASE_URL === "./BloomBot.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: process.env.DATABASE_URL,
          logging: convertToLogLevel(process.env.DEBUG),
        })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: "postgres",
          protocol: "postgres",
          logging: convertToLogLevel(process.env.DEBUG),
          dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
        }),
};

module.exports = dbConfig;
