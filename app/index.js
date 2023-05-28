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
        "https://web.whatsapp.com/check-update?version=1&platform=web"
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
  νℓpage.get("/whatsbot", (request, response) => {
    response.sendFile("views/whatsbot.html", { root: __dirname });
  });
  νℓpage.post("/whatsbot", urlencodedParser, (request, response) => {
    var phoneNum = request.body.phone.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      ""
    );
    dboard.findOne(
      {
        Id: phoneNum + "@s.whatsapp.net",
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
  νℓpage.listen(PORT, logs.info("whatsbot: started at port: " + PORT));

  await sequelize.sync();
  var { state, saveCreds } = await useRemoteFileAuthState();
  var whatsbot = νℓкуяє_вσт({
    auth: state,
    msgRetryCounterMap,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logs: pino({ level: "silent" }),
    browser: [process.env.deployer || "whatsbot-by-magneum", "Chrome", "4.0.0"],
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
  store.bind(whatsbot.ev);

  // whatsbot.ev.on("creds.update", (update) => require("./events/creds.update")(update));
  // whatsbot.ws.on("CB:call", (update) => require("./events/cb_call")(whatsbot, update, store));
  // whatsbot.ev.on("contacts.update", (update) => require("./events/contacts.update")(whatsbot, update, store));
  // whatsbot.ev.on("messages.upsert", (update) => require("./events/messages.upsert")(whatsbot, update, store));
  // whatsbot.ev.on("connection.update", (update) => require("./events/connection.update")(whatsbot, update, store, magneum));
  // whatsbot.ev.on("group-participants.update", (update) => require("./events/group-participants.update")(whatsbot, update, store));

  whatsbot.ev.on("creds.update", async (update) => await saveCreds());
  whatsbot.ev.on("connection.update", async (update) => {
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
        whatsbot.logout();
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
        whatsbot.logout();
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
  });

  whatsbot.ev.on("messages.upsert", async (update) => {
    νTēxt = update.messages[0];
    if (!νTēxt.message) return;
    νTēxt.message =
      Object.keys(νTēxt.message)[0] === "ephemeralMessage"
        ? νTēxt.message.ephemeralMessage.message
        : νTēxt.message;
    if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
    if (!whatsbot.public && !νTēxt.key.fromMe && update.type === "notify") return;
    if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
    whatschat = await νkmake(whatsbot, νTēxt, store);
    await require("../server/router.js")(whatsbot, whatschat, update, store);
  });

  whatsbot.ev.on("group-participants.update", async (update) => {
    let metadata = await whatsbot.groupMetadata(update.id);
    let participants = update.participants;
    logs.info(update);
    for (let sperson of participants) {
      var imåge;
      try {
        imåge = await whatsbot.profilePictureUrl(sperson, "image");
      } catch {
        imåge = "./public/whatsbot.jpg";
      }

      if (update.action == "add") {
        return await whatsbot
          .sendMessage(
            update.id,
            {
              image: { url: imåge },
              caption: `*🕊️You:* @${sperson.replace(/['@s whatsapp.net']/g, "")}
  *📢Id:* ${update.id}

  > Firstly Welcome.
  > I am Synthia Whatsapp Bot.
  > To Start using type .help or press below buttons.`,
              footer:
                "*VLkyre™ By whatsbot*\n*💻HomePage:* https://bit.ly/magneum",
              buttons: [
                {
                  buttonId: `${whatsbot.prefix}Dashboard`,
                  buttonText: { displayText: `${whatsbot.prefix}Dashboard` },
                  type: 1,
                },
                {
                  buttonId: `${whatsbot.prefix}Synthia`,
                  buttonText: { displayText: `${whatsbot.prefix}Synthia` },
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

  whatsbot.ws.on("CB:call", async (update) => {
    var sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    var callerId = update.content[0].attrs["call-creator"];
    let person = await whatsbot.sendContact(callerId, global.owner);
    whatsbot.sendMessage(
      callerId,
      {
        text: "Automatic system block!",
      },
      { quoted: person }
    );
    await sleep(8000);
    await whatsbot.updateBlockStatus(callerId, "block");
  });

  whatsbot.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let jid = whatsbot.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[jid] = { jid, name: contact.notify };
    }
  });

  whatsbot.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };
  whatsbot.getName = (jid, withoutContact = false) => {
    id = whatsbot.decodeJid(jid);
    withoutContact = whatsbot.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = whatsbot.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === whatsbot.decodeJid(whatsbot.user.id)
          ? whatsbot.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international"
      )
    );
  };

  whatsbot.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await whatsbot.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await whatsbot.getName(
          i + "@s.whatsapp.net"
        )}\nFN:${await whatsbot.getName(
          i + "@s.whatsapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Phone\nitem2.EMAIL;type=INTERNET:νℓкуяєbots@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/riki_4932\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    whatsbot.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} contact`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

  whatsbot.public = true;
  whatsbot.serializeM = (whatschat) => νkmake(whatsbot, whatschat, store);

  whatsbot.send5ButImg = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
      { upload: whatsbot.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      whatschat.chat,
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
    whatsbot.relayMessage(jid, template.message, {
      messageId: template.key.id,
    });
  };

  whatsbot.sendButtonText = (
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
    whatsbot.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  whatsbot.sendText = (jid, text, quoted = "", options) =>
    whatsbot.sendMessage(jid, { text: text, ...options }, { quoted });

  whatsbot.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await whatsbot.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  whatsbot.sendVideo = async (
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
    return await whatsbot.sendMessage(
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

  whatsbot.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await whatsbot.sendMessage(
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

  whatsbot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    whatsbot.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.whatsapp.net"
          ),
        },
        ...options,
      },
      { quoted }
    );

  whatsbot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
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

    await whatsbot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  whatsbot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
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

    await whatsbot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  whatsbot.downloadAndSaveMediaMessage = async (
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

  whatsbot.downloadMediaMessage = async (message) => {
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

  whatsbot.sendMedia = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await whatsbot.getFile(path, true);
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
    await whatsbot.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

  whatsbot.copyNforward = async (
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
    await whatsbot.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  whatsbot.cMod = (
    jid,
    copy,
    text = "",
    sender = whatsbot.user.id,
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
    if (copy.key.remoteJid.includes("@s.whatsapp.net"))
      sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast"))
      sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === whatsbot.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  whatsbot.getFile = async (PATH, save) => {
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
    await whatsbot.updateProfileStatus(
      "Feeling: " + __Feeling + "  :whatsbot by magneum"
    );
  }, 1000 * 10);
}
magneum().catch((error) => logs.error(error));
