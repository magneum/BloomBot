const { WAConnection } = require("@adiwajshing/baileys");
const config = require("../Últrðñ/config");
const conn = new WAConnection();
const chalk = require("chalk");
conn.version = [3, 3234, 9];
const fs = require("fs");
exports.WhatsApp = conn;
exports.saveSession = async () => {
  if (
    (!fs.existsSync("./config.env") && config.HEROKU == false) ||
    config.ULTRON == ""
  ) {
    conn.browserDescription = ["Últrðñ", "Chrome", "1.0"];
    conn.logger.level = "error";
    conn.connectOptions.maxRetries = 5;

    conn.on("qr", async (qr) => {
      console.log(chalk.blueBright.bold("Scan the QR code above.\n"));
    });
    await conn.connect();

    var sass = JSON.stringify(conn.base64EncodedAuthInfo());
    var stringSession = Buffer.from(sass).toString("base64");
    console.log(
      chalk.greenBright.bold("Your string session ->"),
      stringSession
    );
    if (config.HEROKU === false) {
      fs.writeFileSync("./config.env", `ULTRON="${stringSession}"`);
    }
    process.exit(0);
  }
};
exports.restoreSession = function (sessionString) {
  var dec = JSON.parse(Buffer.from(sessionString, "base64").toString("utf-8"));
  return dec;
};