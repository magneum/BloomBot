//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("@/logger/global");
var logger = require("@/logger");
var { Boom } = require("@hapi/boom");
var { exec } = require("child_process");
var cleanDatabase = require("@/app/elephant");
var { DisconnectReason } = require("@adiwajshing/baileys");

async function rmdb() {
  await new Promise((resolve, reject) => {
    exec("rm -rf Foxbot.db", (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
  process.exit(0);
}

module.exports = async (Foxbot, update, magneum) => {
  var { lastDisconnect, connection, qr } = update;
  switch (connection) {
    case "connecting":
      logger.info("📢 Connecting to WhatsApp...");
      break;
    case "open":
      logger.info("📢 Login successful!");
      break;
    case "close":
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      switch (reason) {
        case DisconnectReason.badSession:
          logger.error(
            "❌ Bad Session File. Cleaning database and reconnecting..."
          );
          await cleanDatabase().catch(rmdb());
          await Foxbot.end();
          await magneum();
          break;
        case DisconnectReason.connectionClosed:
          logger.error(
            "❌ Connection closed. Cleaning database and reconnecting..."
          );
          await cleanDatabase().catch(rmdb());
          await Foxbot.end();
          await magneum();
          break;
        case DisconnectReason.connectionLost:
          logger.error("❌ Connection lost. Reconnecting...");
          await magneum();
          break;
        case DisconnectReason.connectionReplaced:
          logger.error(
            "❌ Connection replaced. Cleaning database and reconnecting..."
          );
          await cleanDatabase().catch(rmdb());
          await Foxbot.end();
          await magneum();
          break;
        case DisconnectReason.loggedOut:
          logger.error(
            "❌ Device logged out. Cleaning database and reconnecting..."
          );
          await cleanDatabase().catch(rmdb());
          await Foxbot.end();
          await magneum();
          break;
        case DisconnectReason.restartRequired:
          logger.error("❌ Restart required. Restarting...");
          await magneum();
          break;
        case DisconnectReason.timedOut:
          logger.error("❌ Connection timed out. Reconnecting...");
          await magneum();
          break;
        default:
          Foxbot.end(
            logger.error(`❌ Unknown DisconnectReason: ${reason}|${connection}`)
          );
      }
      break;
    case true:
      logger.debug("📢 Online.");
      break;
    case false:
      logger.error("📢 Offline.");
      break;
    case true:
      logger.debug("📢 Received pending notifications.");
      break;
    case false:
      logger.error("📢 Not received pending notifications.");
      break;
    case true:
      logger.debug("📢 New login.");
      break;
    case false:
      logger.error("📢 Not new login.");
      break;
    case qr:
      if (qr != undefined) logger.info("📢 QR Code received:", qr);
      break;
    default:
      logger.info("📢 Foxbot by Magneum connected:", update);
  }
};
