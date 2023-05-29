//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose Bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 FoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the Bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the Bot.
//  ║👉 Enjoy the features and functionality of FoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ FoxBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
var logger = require("../logger");
process.removeAllListeners("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException", (error) => {
  logger.error(error);
});
require("events").EventEmitter.prototype._maxListeners = 0;
require("../logger/global.js");
var cleanDatabase = require("./elephant");
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
var { Boom } = require("@hapi/boom");
var bodyParser = require("body-parser");
const { exec } = require("child_process");
var dboard = require("../database/dashboard");
let PhoneNumber = require("awesome-phonenumber");
var { useRemoteFileAuthState } = require("../auth/Database");
var {
  νkmake,
  fetchJson,
  getBuffer,
  getSizeMedia,
} = require("../server/myfunc");
async function rmdb() {
  await new Promise((resolve, reject) => {
    exec("rm -rf FoxBot.db", (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
  process.exit(0);
}
async function magneum() {
  await monGoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => {
      logger.error("❌: Unable to Connect with Mongoose.");
      logger.error(error);
    })
    .then(logger.info("🐲: Connected with Mongoose."));
  var νℓpage = express();
  var sequelize = DATABASE;
  var store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
  });
  var getVersionWaweb = () => {
    var version;
    try {
      var a = fetchJson(
        "https://web.Foxapp.com/check-update?version=1&platform=web"
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
  νℓpage.get("/FoxBot", (request, response) => {
    response.sendFile("views/FoxBot.html", { root: __dirname });
  });
  νℓpage.post("/FoxBot", urlencodedParser, (request, response) => {
    var phoneNum = request.body.phone.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      ""
    );
    dboard.findOne(
      {
        Id: phoneNum + "@s.Foxapp.net",
      },
      async (error, uBoard) => {
        if (error) return logger.error("❌:", error);
        if (!uBoard) return response.sendFile(__dirname + "/views/nodb.html");
        response.render(__dirname + "/views/dashboard.html", {
          uBoard: uBoard,
        });
      }
    );
  });
  νℓpage.listen(PORT, logger.info("FoxBot: started at port: " + PORT));

  await sequelize.sync();
  var { state, saveCreds } = await useRemoteFileAuthState();
  var FoxBot = νℓкуяє_вσт({
    auth: state,
    msgRetryCounterMap,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "silent" }),
    browser: [process.env.deployer || "FoxBot-by-magneum", "Chrome", "4.0.0"],
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
  store.bind(FoxBot.ev);

  // FoxBot.ev.on("creds.update", (update) => require("./events/creds.update")(update));
  // FoxBot.ws.on("CB:call", (update) => require("./events/cb_call")(FoxBot, update, store));
  // FoxBot.ev.on("contacts.update", (update) => require("./events/contacts.update")(FoxBot, update, store));
  // FoxBot.ev.on("messages.upsert", (update) => require("./events/messages.upsert")(FoxBot, update, store));
  // FoxBot.ev.on("connection.update", (update) => require("./events/connection.update")(FoxBot, update, store, magneum));
  // FoxBot.ev.on("group-participants.update", (update) => require("./events/group-participants.update")(FoxBot, update, store));

  FoxBot.ev.on("creds.update", async (update) => await saveCreds());
  FoxBot.ev.on("connection.update", async (update) => {
    const { lastDisconnect, connection, qr } = update;
    switch (connection) {
      case "connecting":
        logger.info("🐲: Connecting to WhatsApp...▶");
        break;
      case "open":
        logger.info("🐲: Login successful! ▶");
        break;
      case "close":
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        switch (reason) {
          case DisconnectReason.badSession:
            logger.error("❌: Bad Session File...");
            await cleanDatabase().catch(rmdb());
            await FoxBot.end();
            await magneum();
            break;
          case DisconnectReason.connectionClosed:
            logger.error("❌: Reconnecting....");
            await cleanDatabase().catch(rmdb());
            await FoxBot.end();
            await magneum();
            break;
          case DisconnectReason.connectionLost:
            logger.error("❌: Reconnecting...");
            await magneum();
            break;
          case DisconnectReason.connectionReplaced:
            logger.error("❌: Connection Replaced...");
            await cleanDatabase().catch(rmdb());
            await FoxBot.end();
            await magneum();
            break;
          case DisconnectReason.loggedOut:
            logger.error("❌: Device Logged Out...");
            await cleanDatabase().catch(rmdb());
            await FoxBot.end();
            await magneum();
            break;
          case DisconnectReason.restartRequired:
            logger.error("❌: Restart Required, Restarting...");
            await magneum();
            break;
          case DisconnectReason.timedOut:
            logger.error("❌: Connection TimedOut, Reconnecting...");
            await magneum();
            break;
          default:
            FoxBot.end(
              logger.error(
                `❌: Unknown DisconnectReason: ${reason}|${connection}`
              )
            );
        }
        break;
      case true:
        logger.debug("🐲: Online.");
        break;
      case false:
        logger.error("🐲: Offline.");
        break;
      case true:
        logger.debug("🐲: Received Pending Notifications.");
        break;
      case false:
        logger.error("🐲: Not Received Pending Notifications.");
        break;
      case true:
        logger.debug("🐲: New Login.");
        break;
      case false:
        logger.error("🐲: Not New Login.");
        break;
      default:
        logger.info("🐲: Connection...", update);
    }
  });

  FoxBot.ev.on("messages.upsert", async (update) => {
    νTēxt = update.messages[0];
    if (!νTēxt.message) return;
    νTēxt.message =
      Object.keys(νTēxt.message)[0] === "ephemeralMessage"
        ? νTēxt.message.ephemeralMessage.message
        : νTēxt.message;
    if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
    if (!FoxBot.public && !νTēxt.key.fromMe && update.type === "notify") return;
    if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
    Foxchat = await νkmake(FoxBot, νTēxt, store);
    await require("../server/router.js")(FoxBot, Foxchat, update, store);
  });

  FoxBot.ev.on("group-participants.update", async (update) => {
    let metadata = await FoxBot.groupMetadata(update.id);
    let participants = update.participants;
    logger.info(update);
    for (let sperson of participants) {
      var imåge;
      try {
        imåge = await FoxBot.profilePictureUrl(sperson, "image");
      } catch {
        imåge = "./public/FoxBot.png";
      }

      if (update.action == "add") {
        return await FoxBot
          .sendMessage(
            update.id,
            {
              image: { url: imåge },
              caption: `*🕊️You:* @${sperson.replace(/['@s Foxapp.net']/g, "")}
*📢Id:* ${update.id}

> Firstly Welcome.
> I am FoxBot Whatsapp Bot.
> To Start using type .help or press below buttons.`,
              footer:
                "*VLkyre™ By FoxBot*\n*💻HomePage:* https://bit.ly/magneum",
              buttons: [
                {
                  buttonId: `${FoxBot.prefix}Dashboard`,
                  buttonText: { displayText: `${FoxBot.prefix}Dashboard` },
                  type: 1,
                },
                {
                  buttonId: `${FoxBot.prefix}FoxBot`,
                  buttonText: { displayText: `${FoxBot.prefix}FoxBot` },
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
          .catch((error) => logger.error(error));
      } else if (update.action == "remove") {
        return;
      } else {
        return;
      }
    }
  });

  FoxBot.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };
  FoxBot.getName = (jid, withoutContact = false) => {
    id = FoxBot.decodeJid(jid);
    withoutContact = FoxBot.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = FoxBot.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.Foxapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.Foxapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === FoxBot.decodeJid(FoxBot.user.id)
          ? FoxBot.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.Foxapp.net", "")).getNumber(
        "international"
      )
    );
  };

  FoxBot.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await FoxBot.getName(i + "@s.Foxapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await FoxBot.getName(
          i + "@s.Foxapp.net"
        )}\nFN:${await FoxBot.getName(
          i + "@s.Foxapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Phone\nitem2.EMAIL;type=INTERNET:νℓкуяєBots@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/riki_4932\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    FoxBot.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} contact`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

  FoxBot.public = true;
  FoxBot.serializeM = (Foxchat) => νkmake(FoxBot, Foxchat, store);

  FoxBot.send5ButImg = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
      { upload: FoxBot.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      Foxchat.chat,
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
    FoxBot.relayMessage(jid, template.message, {
      messageId: template.key.id,
    });
  };

  FoxBot.sendButtonText = (
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
    FoxBot.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  FoxBot.sendText = (jid, text, quoted = "", options) =>
    FoxBot.sendMessage(jid, { text: text, ...options }, { quoted });

  FoxBot.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await FoxBot.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  FoxBot.sendVideo = async (
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
    return await FoxBot.sendMessage(
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

  FoxBot.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await FoxBot.sendMessage(
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

  FoxBot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    FoxBot.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.Foxapp.net"
          ),
        },
        ...options,
      },
      { quoted }
    );

  FoxBot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
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

    await FoxBot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  FoxBot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
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

    await FoxBot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  FoxBot.downloadAndSaveMediaMessage = async (
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

  FoxBot.downloadMediaMessage = async (message) => {
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

  FoxBot.sendMedia = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await FoxBot.getFile(path, true);
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
    await FoxBot.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

  FoxBot.copyNforward = async (
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
    await FoxBot.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  FoxBot.cMod = (
    jid,
    copy,
    text = "",
    sender = FoxBot.user.id,
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
    if (copy.key.remoteJid.includes("@s.Foxapp.net"))
      sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast"))
      sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === FoxBot.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  FoxBot.getFile = async (PATH, save) => {
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

  FoxBot.ws.on("CB:call", async (update) => {
    var sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    var callerId = update.content[0].attrs["call-creator"];
    let person = await FoxBot.sendContact(callerId, global.owner);
    FoxBot.sendMessage(
      callerId,
      {
        text: "Automatic system block!",
      },
      { quoted: person }
    );
    await sleep(8000);
    await FoxBot.updateBlockStatus(callerId, "block");
  });

  FoxBot.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let jid = FoxBot.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[jid] = { jid, name: contact.notify };
    }
  });
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
    await FoxBot.updateProfileStatus(
      "Feeling: " + __Feeling + "  :FoxBot by magneum"
    );
  }, 1000 * 10);
}
magneum().catch((error) => logger.error(error));
