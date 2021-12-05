const { WAConnection } = require("@adiwajshing/baileys");
const conn = new WAConnection();
conn.version = [3, 3234, 9];
exports.WhatsApp = conn;
exports.ultronreignite = function (sessionString) {
  var dec = JSON.parse(Buffer.from(sessionString, "base64").toString("utf-8"));
  return dec;
};
