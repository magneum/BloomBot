//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../global.js");
var logs = require("../logs");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logs.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
var { Boom } = require("@hapi/boom");
var { DisconnectReason } = require("@adiwajshing/baileys");

module.exports = async (whatsbot, update, store, magneum) => {
  var {
    lastDisconnect,
    connection,
    isNewLogin,
    isOnline,
    qr,
    receivedPendingNotifications,
  } = update;
  if (connection == "connecting") logs.info("🐲: Connecting to WhatsApp...▶");
  else if (connection == "open") logs.info("🐲: Login successful! ▶");
  else if (connection == "close") {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if (reason === DisconnectReason.badSession) {
      logs.error(
        `❌: Bad Session File, Please Delete Session and Scan Again`
      );
      // whatsbot.logout();
    } else if (reason === DisconnectReason.connectionClosed) {
      // logs.error("❌: Connection closed, reconnecting....");
      await magneum();
    } else if (reason === DisconnectReason.connectionLost) {
      // logs.error("❌: Connection Lost from Server, reconnecting...");
      await magneum();
    } else if (reason === DisconnectReason.connectionReplaced) {
      // logs.error("❌: Connection Replaced, Another New Session Opened, Please Close Current Session First");
      // whatsbot.logout();
    } else if (reason === DisconnectReason.loggedOut) {
      // logs.error(`❌: Device Logged Out, Please Scan Again And Run.`);
      process.exit(0);
    } else if (reason === DisconnectReason.restartRequired) {
      // logs.error("❌: Restart Required, Restarting...");
      await magneum();
    } else if (reason === DisconnectReason.timedOut) {
      // logs.error("❌: Connection TimedOut, Reconnecting...");
      await magneum();
    } else
      whatsbot.end(
        logs.error(`❌: Unknown DisconnectReason: ${reason}|${connection}`)
      );
  } else if (isOnline === true) logs.debug("🐲: Online.");
  else if (isOnline === false) logs.error("🐲: Offine.");
  else if (receivedPendingNotifications === true)
    logs.debug("🐲: Received Pending Notifications.");
  else if (receivedPendingNotifications === false)
    logs.error("🐲: Not Received Pending Notifications.");
  else if (isNewLogin === true) logs.debug("🐲: New Login.");
  else if (isNewLogin === false) logs.error("🐲: Not New Login.");
  else if (qr) logs.info("Qr: "), console.log(qr);
  else logs.info("🐲: Connection...", update);
};
