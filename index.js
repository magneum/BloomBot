BloomBot.ev.on("connection.update", async (update) => {
  var {
    lastDisconnect,
    connection,
    isNewLogin,
    isOnline,
    qr,
    receivedPendingNotifications,
  } = update;
  if (connection == "connecting") logger.info("📢 Connecting to WhatsApp...");
  else if (connection == "open") logger.info("📢 Login successful! ");
  else if (connection == "close") {
    let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
    if (reason === DisconnectReason.badSession) {
      logger.error(`❌ Bad Session File, Please Delete Session and Scan Again`);
      BloomBot.logout();
    } else if (reason === DisconnectReason.connectionClosed) {
      logger.error("❌ Connection closed, reconnecting....");
      await purgepg().catch((e) => {
        logger.error("❌ purging db error ", e);
        rmdb();
      });
      BloomBot.end();
      await magneum();
    } else if (reason === DisconnectReason.connectionLost) {
      logger.error("❌ Connection Lost from Server, reconnecting...");
      await purgepg().catch((e) => {
        logger.error("❌ purging db error ", e);
        rmdb();
      });
      BloomBot.end();
      await magneum();
    } else if (reason === DisconnectReason.connectionReplaced) {
      logger.error(
        "❌ Connection Replaced, Another New Session Opened, Please Close Current Session First"
      );
      BloomBot.logout();
    } else if (reason === DisconnectReason.loggedOut) {
      logger.error("❌ Device Logged Out, Please Scan Again And Run.");
      await purgepg().catch((e) => {
        logger.error("❌ purging db error ", e);
        rmdb();
      });
      BloomBot.end();
      await magneum();
    } else if (reason === DisconnectReason.restartRequired) {
      logger.debug("🐞 Restart Required, Restarting...");
      await purgepg().catch((e) => {
        logger.error("❌ purging db error ", e);
        rmdb();
      });
      BloomBot.end();
      await magneum();
    } else if (reason === DisconnectReason.timedOut) {
      logger.error("❌ Connection TimedOut, Reconnecting...");
      await purgepg().catch((e) => {
        logger.error("❌ purging db error ", e);
        rmdb();
      });
      BloomBot.end();
      await magneum();
    } else
      BloomBot.end(
        logger.error(`❌ Unknown DisconnectReason: ${reason}|${connection}`)
      );
  } else if (isOnline === true) logger.debug("📢 Online.");
  else if (isOnline === false) logger.error("📢 Offine.");
  else if (receivedPendingNotifications === true)
    logger.debug("📢 Received Pending Notifications.");
  else if (receivedPendingNotifications === false)
    logger.error("📢 Not Received Pending Notifications.");
  else if (isNewLogin === true) logger.debug("📢 New Login.");
  else if (isNewLogin === false) logger.error("📢 Not New Login.");
  else if (qr) logger.info("Qr: "), console.log(qr);
  else logger.info("📢 Connection...", update);
});
