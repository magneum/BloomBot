//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
require("../global.js");
const logger = require("../logger");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logger.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
var { Boom } = require("@hapi/boom");
var { DisconnectReason } = require("@adiwajshing/baileys");

module.exports = async (ꪜᴏxʙᴏᴛ, update, store, mågneum) => {
  const {
    lastDisconnect,
    connection,
    isNewLogin,
    isOnline,
    qr,
    receivedPendingNotifications,
  } = update;
  if (connection == "connecting") logger.info("🐲: Connecting to WhatsApp...▶");
  else if (connection == "open") logger.info("🐲: Login successful! ▶");
  else if (connection == "close") {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if (reason === DisconnectReason.badSession) {
      logger.error(
        `❌: Bad Session File, Please Delete Session and Scan Again`
      );
      // ꪜᴏxʙᴏᴛ.logout();
    } else if (reason === DisconnectReason.connectionClosed) {
      // logger.error("❌: Connection closed, reconnecting....");
      await mågneum();
    } else if (reason === DisconnectReason.connectionLost) {
      // logger.error("❌: Connection Lost from Server, reconnecting...");
      await mågneum();
    } else if (reason === DisconnectReason.connectionReplaced) {
      // logger.error("❌: Connection Replaced, Another New Session Opened, Please Close Current Session First");
      // ꪜᴏxʙᴏᴛ.logout();
    } else if (reason === DisconnectReason.loggedOut) {
      // logger.error(`❌: Device Logged Out, Please Scan Again And Run.`);
      process.exit(0);
    } else if (reason === DisconnectReason.restartRequired) {
      // logger.error("❌: Restart Required, Restarting...");
      await mågneum();
    } else if (reason === DisconnectReason.timedOut) {
      // logger.error("❌: Connection TimedOut, Reconnecting...");
      await mågneum();
    } else
      ꪜᴏxʙᴏᴛ.end(
        logger.error(`❌: Unknown DisconnectReason: ${reason}|${connection}`)
      );
  } else if (isOnline === true) logger.debug("🐲: Online.");
  else if (isOnline === false) logger.error("🐲: Offine.");
  else if (receivedPendingNotifications === true)
    logger.debug("🐲: Received Pending Notifications.");
  else if (receivedPendingNotifications === false)
    logger.error("🐲: Not Received Pending Notifications.");
  else if (isNewLogin === true) logger.debug("🐲: New Login.");
  else if (isNewLogin === false) logger.error("🐲: Not New Login.");
  else if (qr) logger.info("Qr: "), console.log(qr);
  else logger.info("🐲: Connection...", update);
};
