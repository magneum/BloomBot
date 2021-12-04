const { WAConnection } = require("@adiwajshing/baileys");
const ULTRON = new WAConnection();
const KOLOR = require("chalk");
ULTRON.version = [3, 3234, 9];
exports.WhatsApp = ULTRON;
exports.saveSession = async () => {
  ULTRON.browserDescription = ["Chrome", "1.0"];
  ULTRON.on("qr", async (qr) => {
    console.log(KOLOR.blueBright.bold("Scan the QR code!"));
  });
  ULTRON.logger.level = "error";
  ULTRON.connectOptions.maxRetries = 5;
  await ULTRON.connect();
  var ULJS = JSON.stringify(ULTRON.base64EncodedAuthInfo());
  var ULTRONSESSION = Buffer.from(ULJS).toString("base64");
  console.log(
    KOLOR.yellowBright.bold("Your string session\n\n"),
    KOLOR.greenBright.bold(ULTRONSESSION)
  );
  process.exit(0);
};