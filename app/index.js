<<<<<<< HEAD
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
=======
//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
<<<<<<< HEAD
//  ║🎉 WhatsBot is intended for fun and convenience, but we're not responsible for account bans.
=======
//  ║🎉 voxbot is intended for fun and convenience, but we're not responsible for account bans.
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
<<<<<<< HEAD
//  ║👉 Enjoy the features and functionality of WhatsBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ WhatsBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
=======
//  ║👉 Enjoy the features and functionality of voxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ voxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
var logs = require("../logs");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logs.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
require("../logs/global.js");
var {
  default: νℓкуяє_вσт,
  DisconnectReason,
  generateforwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  makeInMemoryStore,
  MessageRetryMap,
  jidDecode,
  proto,
} = require("@adiwajshing/baileys");
var fs = require("fs");
var path = require("path");
var pino = require("pino");
var express = require("express");
var monGoose = require("mongoose");
var git = require("simple-git")();
var { Boom } = require("@hapi/boom");
var bodyParser = require("body-parser");
var dboard = require("../database/dashboard");
let PhoneNumber = require("awesome-phonenumber");
var { useRemoteFileAuthState } = require("../auth/db");
var {
  νkmake,
  fetchJson,
  getBuffer,
  getSizeMedia,
} = require("../server/myfunc");

async function magneum() {
  await monGoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      logs.error("❌: Unable to Connect with Mongoose.");
      logs.error(error);
    })
    .then(logs.info("🐲: Connected with Mongoose."));
  var νℓpage = express();
  var sequelize = DATABASE;
  var store = makeInMemoryStore({
    logs: pino().child({ level: "silent", stream: "store" }),
  });
  var getVersionWaweb = () => {
    var version;
    try {
      var a = fetchJson(
        "https://web.voxapp.com/check-update?version=1&platform=web"
      );
      version = [a.currentVersion.replace(/[.]/g, ", ")];
    } catch {
      version = [2, 2204, 13];
    }
    return version;
  };
  var msgRetryCounterMap = MessageRetryMap;

  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  νℓpage.engine("html", require("ejs").renderFile);
  νℓpage.use(express.static("./views"));
  νℓpage.set("view engine", "html");
  νℓpage.set("views", __dirname);
  νℓpage.get("/", (request, response) => {
    response.redirect("https://bit.ly/magneum");
  });
  νℓpage.get("/WhatsBot", (request, response) => {
    response.sendFile("views/WhatsBot.html", { root: __dirname });
  });
  νℓpage.post("/WhatsBot", urlencodedParser, (request, response) => {
    var phoneNum = request.body.phone.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      ""
    );
    dboard.findOne(
      {
        Id: phoneNum + "@s.voxapp.net",
      },
      async (error, uBoard) => {
        if (error) return logs.error("❌:", error);
        if (!uBoard) return response.sendFile(__dirname + "/views/nodb.html");
        response.render(__dirname + "/views/dashboard.html", {
          uBoard: uBoard,
        });
      }
    );
  });
  νℓpage.listen(PORT, logs.info("VLKYRE: started at port: " + PORT));

  await sequelize.sync();
  var { state, saveCreds } = await useRemoteFileAuthState();
<<<<<<< HEAD
  var WhatsBot = νℓкуяє_вσт({
=======
  var voxbot = νℓкуяє_вσт({
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    auth: state,
    msgRetryCounterMap,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logs: pino({ level: "silent" }),
<<<<<<< HEAD
    browser: [process.env.deployer || "WhatsBot-by-magneum", "Chrome", "4.0.0"],
=======
    browser: [process.env.deployer || "voxbot-by-magneum", "Chrome", "4.0.0"],
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    version: getVersionWaweb() || [2, 2242, 6],
    fireInitQueries: false,
    downloadHistory: false,
    syncFullHistory: false,
    shouldSyncHistoryMessage: false,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        var msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg.message || undefined;
      }
      return {
        conversation: "An Error Occurred, Repeat Command!",
      };
    },
  });
<<<<<<< HEAD
  store.bind(WhatsBot.ev);

  // WhatsBot.ev.on("creds.update", (update) => require("./events/creds.update")(update));
  // WhatsBot.ws.on("CB:call", (update) => require("./events/cb_call")(WhatsBot, update, store));
  // WhatsBot.ev.on("contacts.update", (update) => require("./events/contacts.update")(WhatsBot, update, store));
  // WhatsBot.ev.on("messages.upsert", (update) => require("./events/messages.upsert")(WhatsBot, update, store));
  // WhatsBot.ev.on("connection.update", (update) => require("./events/connection.update")(WhatsBot, update, store, magneum));
  // WhatsBot.ev.on("group-participants.update", (update) => require("./events/group-participants.update")(WhatsBot, update, store));

  WhatsBot.ev.on("creds.update", async (update) => await saveCreds());
  WhatsBot.ev.on("connection.update", async (update) => {
=======
  store.bind(voxbot.ev);

  // voxbot.ev.on("creds.update", (update) =>
  // require("./events/creds.update")(update)
  // );
  // voxbot.ev.on("connection.update", (update) =>
  // require("./events/connection.update")(voxbot, update, store, magneum)
  // );
  // voxbot.ev.on("messages.upsert", (update) =>
  // require("./events/messages.upsert")(voxbot, update, store)
  // );
  // voxbot.ev.on("group-participants.update", (update) =>
  // require("./events/group-participants.update")(voxbot, update, store)
  // );
  // voxbot.ev.on("contacts.update", (update) =>
  // require("./events/contacts.update")(voxbot, update, store)
  // );
  // voxbot.ws.on("CB:call", (update) =>
  // require("./events/cb_call")(voxbot, update, store)
  // );

  voxbot.ev.on("creds.update", async (update) => await saveCreds());
  voxbot.ev.on("connection.update", async (update) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
<<<<<<< HEAD
        WhatsBot.logout();
=======
        voxbot.logout();
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      } else if (reason === DisconnectReason.connectionClosed) {
        logs.error("❌: Connection closed, reconnecting....");
        await magneum();
      } else if (reason === DisconnectReason.connectionLost) {
        logs.error("❌: Connection Lost from Server, reconnecting...");
        await magneum();
      } else if (reason === DisconnectReason.connectionReplaced) {
        logs.error(
          "❌: Connection Replaced, Another New Session Opened, Please Close Current Session First"
        );
<<<<<<< HEAD
        WhatsBot.logout();
=======
        voxbot.logout();
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      } else if (reason === DisconnectReason.loggedOut) {
        logs.error(`❌: Device Logged Out, Please Scan Again And Run.`);
        process.exit(0);
      } else if (reason === DisconnectReason.restartRequired) {
        logs.error("❌: Restart Required, Restarting...");
        await magneum();
      } else if (reason === DisconnectReason.timedOut) {
        logs.error("❌: Connection TimedOut, Reconnecting...");
        await magneum();
      } else
<<<<<<< HEAD
        WhatsBot.end(
=======
        voxbot.end(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
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
  });

<<<<<<< HEAD
  WhatsBot.ev.on("messages.upsert", async (update) => {
=======
  voxbot.ev.on("messages.upsert", async (update) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    νTēxt = update.messages[0];
    if (!νTēxt.message) return;
    νTēxt.message =
      Object.keys(νTēxt.message)[0] === "ephemeralMessage"
        ? νTēxt.message.ephemeralMessage.message
        : νTēxt.message;
    if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
<<<<<<< HEAD
    if (!WhatsBot.public && !νTēxt.key.fromMe && update.type === "notify") return;
    if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
    voxchat = await νkmake(WhatsBot, νTēxt, store);
    await require("../server/router.js")(WhatsBot, voxchat, update, store);
  });

  WhatsBot.ev.on("group-participants.update", async (update) => {
    let metadata = await WhatsBot.groupMetadata(update.id);
=======
    if (!voxbot.public && !νTēxt.key.fromMe && update.type === "notify") return;
    if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
    voxchat = await νkmake(voxbot, νTēxt, store);
    await require("../server/router.js")(voxbot, voxchat, update, store);
  });

  voxbot.ev.on("group-participants.update", async (update) => {
    let metadata = await voxbot.groupMetadata(update.id);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let participants = update.participants;
    logs.info(update);
    for (let sperson of participants) {
      var imåge;
      try {
<<<<<<< HEAD
        imåge = await WhatsBot.profilePictureUrl(sperson, "image");
      } catch {
        imåge = "./public/WhatsBot.jpg";
      }

      if (update.action == "add") {
        return await WhatsBot
=======
        imåge = await voxbot.profilePictureUrl(sperson, "image");
      } catch {
        imåge = "./public/voxbot.jpg";
      }

      if (update.action == "add") {
        return await voxbot
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          .sendMessage(
            update.id,
            {
              image: { url: imåge },
              caption: `*🕊️You:* @${sperson.replace(/['@s voxapp.net']/g, "")}
  *📢Id:* ${update.id}

  > Firstly Welcome.
  > I am Synthia Whatsapp Bot.
  > To Start using type .help or press below buttons.`,
              footer:
<<<<<<< HEAD
                "*VLkyre™ By WhatsBot*\n*💻HomePage:* https://bit.ly/magneum",
              buttons: [
                {
                  buttonId: `${WhatsBot.prefix}Dashboard`,
                  buttonText: { displayText: `${WhatsBot.prefix}Dashboard` },
                  type: 1,
                },
                {
                  buttonId: `${WhatsBot.prefix}Synthia`,
                  buttonText: { displayText: `${WhatsBot.prefix}Synthia` },
=======
                "*VLkyre™ By voxbot*\n*💻HomePage:* https://bit.ly/magneum",
              buttons: [
                {
                  buttonId: `${voxbot.prefix}Dashboard`,
                  buttonText: { displayText: `${voxbot.prefix}Dashboard` },
                  type: 1,
                },
                {
                  buttonId: `${voxbot.prefix}Synthia`,
                  buttonText: { displayText: `${voxbot.prefix}Synthia` },
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
                  type: 1,
                },
              ],
              headerType: 4,
              mentions: [sperson],
            },
            {
              contextInfo: { mentionedJid: [sperson] },
            }
          )
          .catch((error) => logs.error(error));
      } else if (update.action == "remove") {
        return;
      } else {
        return;
      }
    }
  });

<<<<<<< HEAD
  WhatsBot.ws.on("CB:call", async (update) => {
=======
  voxbot.ws.on("CB:call", async (update) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    var sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    var callerId = update.content[0].attrs["call-creator"];
<<<<<<< HEAD
    let person = await WhatsBot.sendContact(callerId, global.owner);
    WhatsBot.sendMessage(
=======
    let person = await voxbot.sendContact(callerId, global.owner);
    voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      callerId,
      {
        text: "Automatic system block!",
      },
      { quoted: person }
    );
    await sleep(8000);
<<<<<<< HEAD
    await WhatsBot.updateBlockStatus(callerId, "block");
  });

  WhatsBot.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let jid = WhatsBot.decodeJid(contact.id);
=======
    await voxbot.updateBlockStatus(callerId, "block");
  });

  voxbot.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let jid = voxbot.decodeJid(contact.id);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      if (store && store.contacts)
        store.contacts[jid] = { jid, name: contact.notify };
    }
  });

<<<<<<< HEAD
  WhatsBot.decodeJid = (jid) => {
=======
  voxbot.decodeJid = (jid) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };
<<<<<<< HEAD
  WhatsBot.getName = (jid, withoutContact = false) => {
    id = WhatsBot.decodeJid(jid);
    withoutContact = WhatsBot.withoutContact || withoutContact;
=======
  voxbot.getName = (jid, withoutContact = false) => {
    id = voxbot.decodeJid(jid);
    withoutContact = voxbot.withoutContact || withoutContact;
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
<<<<<<< HEAD
        if (!(v.name || v.subject)) v = WhatsBot.groupMetadata(id) || {};
=======
        if (!(v.name || v.subject)) v = voxbot.groupMetadata(id) || {};
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.voxapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.voxapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
<<<<<<< HEAD
          : id === WhatsBot.decodeJid(WhatsBot.user.id)
          ? WhatsBot.user
=======
          : id === voxbot.decodeJid(voxbot.user.id)
          ? voxbot.user
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.voxapp.net", "")).getNumber(
        "international"
      )
    );
  };

<<<<<<< HEAD
  WhatsBot.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await WhatsBot.getName(i + "@s.voxapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await WhatsBot.getName(
          i + "@s.voxapp.net"
        )}\nFN:${await WhatsBot.getName(
=======
  voxbot.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await voxbot.getName(i + "@s.voxapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await voxbot.getName(
          i + "@s.voxapp.net"
        )}\nFN:${await voxbot.getName(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
          i + "@s.voxapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Phone\nitem2.EMAIL;type=INTERNET:νℓкуяєbots@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/riki_4932\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
<<<<<<< HEAD
    WhatsBot.sendMessage(
=======
    voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      {
        contacts: { displayName: `${list.length} contact`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

<<<<<<< HEAD
  WhatsBot.public = true;
  WhatsBot.serializeM = (voxchat) => νkmake(WhatsBot, voxchat, store);

  WhatsBot.send5ButImg = async (
=======
  voxbot.public = true;
  voxbot.serializeM = (voxchat) => νkmake(voxbot, voxchat, store);

  voxbot.send5ButImg = async (
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
<<<<<<< HEAD
      { upload: WhatsBot.waUploadToServer }
=======
      { upload: voxbot.waUploadToServer }
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    );
    var template = generateWAMessageFromContent(
      voxchat.chat,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
<<<<<<< HEAD
    WhatsBot.relayMessage(jid, template.message, {
=======
    voxbot.relayMessage(jid, template.message, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      messageId: template.key.id,
    });
  };

<<<<<<< HEAD
  WhatsBot.sendButtonText = (
=======
  voxbot.sendButtonText = (
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    jid,
    buttons = [],
    text,
    footer,
    quoted = "",
    options = {}
  ) => {
    let buttonMessage = {
      text,
      footer,
      buttons,
      headerType: 2,
      ...options,
    };
<<<<<<< HEAD
    WhatsBot.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  WhatsBot.sendText = (jid, text, quoted = "", options) =>
    WhatsBot.sendMessage(jid, { text: text, ...options }, { quoted });

  WhatsBot.sendImage = async (jid, path, caption = "", quoted = "", options) => {
=======
    voxbot.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  voxbot.sendText = (jid, text, quoted = "", options) =>
    voxbot.sendMessage(jid, { text: text, ...options }, { quoted });

  voxbot.sendImage = async (jid, path, caption = "", quoted = "", options) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
<<<<<<< HEAD
    return await WhatsBot.sendMessage(
=======
    return await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

<<<<<<< HEAD
  WhatsBot.sendVideo = async (
=======
  voxbot.sendVideo = async (
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    jid,
    path,
    caption = "",
    quoted = "",
    gif = false,
    options
  ) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
<<<<<<< HEAD
    return await WhatsBot.sendMessage(
=======
    return await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

<<<<<<< HEAD
  WhatsBot.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
=======
  voxbot.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
<<<<<<< HEAD
    return await WhatsBot.sendMessage(
=======
    return await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

<<<<<<< HEAD
  WhatsBot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    WhatsBot.sendMessage(
=======
  voxbot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.voxapp.net"
          ),
        },
        ...options,
      },
      { quoted }
    );

<<<<<<< HEAD
  WhatsBot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
=======
  voxbot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }

<<<<<<< HEAD
    await WhatsBot.sendMessage(
=======
    await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

<<<<<<< HEAD
  WhatsBot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
=======
  voxbot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }

<<<<<<< HEAD
    await WhatsBot.sendMessage(
=======
    await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

<<<<<<< HEAD
  WhatsBot.downloadAndSaveMediaMessage = async (
=======
  voxbot.downloadAndSaveMediaMessage = async (
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    var stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (var chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

<<<<<<< HEAD
  WhatsBot.downloadMediaMessage = async (message) => {
=======
  voxbot.downloadMediaMessage = async (message) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    var stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (var chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    return buffer;
  };

<<<<<<< HEAD
  WhatsBot.sendMedia = async (
=======
  voxbot.sendMedia = async (
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
<<<<<<< HEAD
    let types = await WhatsBot.getFile(path, true);
=======
    let types = await voxbot.getFile(path, true);
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let { mime, ext, response, data, filename } = types;
    if ((response && response.status !== 200) || file.length <= 65536) {
      try {
        throw { json: JSON.parse(file.toString()) };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    let type = "",
      mimetype = mime,
      pathFile = filename;
    if (options.asDocument) type = "document";
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require("../server/exif");
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: options.packname ? options.packname : global.packname,
        author: options.author ? options.author : global.author,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = "sticker";
      mimetype = "image/webp";
    } else if (/image/.test(mime)) type = "image";
    else if (/video/.test(mime)) type = "video";
    else if (/audio/.test(mime)) type = "audio";
    else type = "document";
<<<<<<< HEAD
    await WhatsBot.sendMessage(
=======
    await voxbot.sendMessage(
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

<<<<<<< HEAD
  WhatsBot.copyNforward = async (
=======
  voxbot.copyNforward = async (
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    jid,
    message,
    forceforward = false,
    options = {}
  ) => {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }

    let mtype = Object.keys(message.message)[0];
    let content = await generateforwardMessageContent(message, forceforward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != "conversation") context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    var waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    );
<<<<<<< HEAD
    await WhatsBot.relayMessage(jid, waMessage.message, {
=======
    await voxbot.relayMessage(jid, waMessage.message, {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

<<<<<<< HEAD
  WhatsBot.cMod = (
    jid,
    copy,
    text = "",
    sender = WhatsBot.user.id,
=======
  voxbot.cMod = (
    jid,
    copy,
    text = "",
    sender = voxbot.user.id,
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    options = {}
  ) => {
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral
      ? copy.message.ephemeralMessage.message
      : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.voxapp.net"))
      sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast"))
      sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
<<<<<<< HEAD
    copy.key.fromMe = sender === WhatsBot.user.id;
=======
    copy.key.fromMe = sender === voxbot.user.id;
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a

    return proto.WebMessageInfo.fromObject(copy);
  };

<<<<<<< HEAD
  WhatsBot.getFile = async (PATH, save) => {
=======
  voxbot.getFile = async (PATH, save) => {
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    let response;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split`,`[1], "base64")
      : /^https?:\/\//.test(PATH)
      ? await (response = await getBuffer(PATH))
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === "string"
      ? PATH
      : Buffer.alloc(0);
    let type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".Bin",
    };
    filename = path.join(
      __filename,
      "../Bin/" + new Date() * 1 + "." + type.ext
    );
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      response,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };

  setInterval(async () => {
    var _Type = [
      "🎭designer",
      "🌏inventor",
      "🎨creator",
      "🎉founder",
      "🐞innovator",
      "🏗️builder",
      "🖊️author",
      "💡maker",
    ];
    var __Feeling = _Type[Math.floor(Math.random() * _Type.length)];
<<<<<<< HEAD
    await WhatsBot.updateProfileStatus(
      "Feeling: " + __Feeling + "  :WhatsBot by magneum"
=======
    await voxbot.updateProfileStatus(
      "Feeling: " + __Feeling + "  :voxbot by magneum"
>>>>>>> 17f52fe472c04e519779246ebe3026ed85ef536a
    );
  }, 1000 * 10);
}
magneum().catch((error) => logs.error(error));
