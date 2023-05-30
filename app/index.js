//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../module-alias");
require("@/logger/global");
var logger = require("@/logger");
var gitPull = require("@/utils/gitPull");
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
var { exec } = require("child_process");
var dboard = require("@/database/dashboard");
let PhoneNumber = require("awesome-phonenumber");
var { useRemoteFileAuthState } = require("@/auth/Database");
var { mMake, fetchJson, getBuffer, getSizeMedia } = require("@/server/myfunc");
async function rmdb() {
  await new Promise((resolve, reject) => {
    exec("rm -rf OpenBot.db", (error, stdout, stderr) => {
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
    .then(logger.info("📢: Connected with Mongoose."));
  var νℓpage = express();
  var sequelize = DATABASE;
  var store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
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
  var urlencodedParser = bodyParser.urlencoded({ extended: false });
  νℓpage.engine("html", require("ejs").renderFile);
  νℓpage.use(express.static("./views"));
  νℓpage.set("view engine", "html");
  νℓpage.set("views", __dirname);
  νℓpage.get("/", (request, response) => {
    response.redirect("https://bit.ly/magneum");
  });
  νℓpage.get("/OpenBot", (request, response) => {
    response.sendFile("views/OpenBot.html", { root: __dirname });
  });
  νℓpage.post("/OpenBot", urlencodedParser, (request, response) => {
    var phoneNum = request.body.phone.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      ""
    );
    dboard.findOne(
      {
        Id: phoneNum + "@s.whatsapp.net",
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
  νℓpage.listen(PORT, logger.info("📢: OpenBot started at port " + PORT));

  await sequelize.sync();
  var { state, saveCreds } = await useRemoteFileAuthState();
  var OpenBot = νℓкуяє_вσт({
    auth: state,
    MessageRetryMap,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "silent" }),
    browser: [process.env.deployer || "OpenBot-by-magneum", "Chrome", "4.0.0"],
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
  store.bind(OpenBot.ev);

  // OpenBot.ev.on("creds.update", (update) => require("./events/creds.update")(update));
  // OpenBot.ws.on("CB:call", (update) => require("./events/cb_call")(OpenBot, update, store));
  // OpenBot.ev.on("contacts.update", (update) => require("./events/contacts.update")(OpenBot, update, store));
  // OpenBot.ev.on("messages.upsert", (update) => require("./events/messages.upsert")(OpenBot, update, store));
  // OpenBot.ev.on("connection.update", (update) => require("./events/connection.update")(OpenBot, update, store, magneum));
  // OpenBot.ev.on("group-participants.update", (update) => require("./events/group-participants.update")(OpenBot, update, store));

  OpenBot.ev.on("creds.update", async (update) => await saveCreds());
  OpenBot.ev.on("connection.update", async (update) => {
    var { lastDisconnect, connection, qr } = update;
    switch (connection) {
      case "connecting":
        logger.info("📢: Connecting to whatsApp...");
        break;
      case "open":
        logger.info("📢: Login successful! ");
        break;
      case "close":
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        switch (reason) {
          case DisconnectReason.badSession:
            logger.error("❌: Bad Session File...");
            await cleanDatabase().catch(rmdb());
            await OpenBot.end();
            await magneum();
            break;
          case DisconnectReason.connectionClosed:
            logger.error("❌: Reconnecting....");
            await cleanDatabase().catch(rmdb());
            await OpenBot.end();
            await magneum();
            break;
          case DisconnectReason.connectionLost:
            logger.error("❌: Reconnecting...");
            await magneum();
            break;
          case DisconnectReason.connectionReplaced:
            logger.error("❌: Connection Replaced...");
            await cleanDatabase().catch(rmdb());
            await OpenBot.end();
            await magneum();
            break;
          case DisconnectReason.loggedOut:
            logger.error("❌: Device Logged Out...");
            await cleanDatabase().catch(rmdb());
            await OpenBot.end();
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
            OpenBot.end(
              logger.error(
                `❌: Unknown DisconnectReason: ${reason}|${connection}`
              )
            );
        }
        break;
      case true:
        logger.debug("📢: Online.");
        break;
      case false:
        logger.error("📢: Offline.");
        break;
      case true:
        logger.debug("📢: Received Pending Notifications.");
        break;
      case false:
        logger.error("📢: Not Received Pending Notifications.");
        break;
      case true:
        logger.debug("📢: New Login.");
        break;
      case false:
        logger.error("📢: Not New Login.");
        break;
      default:
        logger.info("📢: OpenBot by Magneum connected...", update);
    }
  });

  OpenBot.ev.on("messages.upsert", async (update) => {
    νTēxt = update.messages[0];
    if (!νTēxt.message) return;
    νTēxt.message =
      Object.keys(νTēxt.message)[0] === "ephemeralMessage"
        ? νTēxt.message.ephemeralMessage.message
        : νTēxt.message;
    if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
    if (!OpenBot.public && !νTēxt.key.fromMe && update.type === "notify") return;
    if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
    ocID = await mMake(OpenBot, νTēxt, store);
    await require("../server/router")(OpenBot, ocID, update, store);
  });

  OpenBot.ev.on("group-participants.update", async (update) => {
    let metadata = await OpenBot.groupMetadata(update.id);
    let participants = update.participants;
    logger.info(update);
    for (let sperson of participants) {
      var imåge;
      try {
        imåge = await OpenBot.profilePictureUrl(sperson, "image");
      } catch {
        imåge = OpenBot.display;
      }

      if (update.action == "add") {
        return await OpenBot.sendMessage(
          update.id,
          {
            image: { url: imåge },
            caption: `*😺You:* @${sperson.replace(/['@s whatsapp.net']/g, "")}
*📢Id:* ${update.id}

> Firstly Welcome.
> I am OpenBot whatsapp bot.
> To Start using type .help or press below buttons.`,
            footer: "*VLkyre™ By OpenBot*\n*💻HomePage:* https://bit.ly/magneum",
            buttons: [
              {
                buttonId: `${OpenBot.prefix}Dashboard`,
                buttonText: { displayText: `${OpenBot.prefix}Dashboard` },
                type: 1,
              },
              {
                buttonId: `${OpenBot.prefix}OpenBot`,
                buttonText: { displayText: `${OpenBot.prefix}OpenBot` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [sperson],
          },
          {
            contextInfo: { mentionedJid: [sperson] },
          }
        ).catch((error) => logger.error(error));
      } else if (update.action == "remove") {
        return;
      } else {
        return;
      }
    }
  });

  OpenBot.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };
  OpenBot.getName = (jid, withoutContact = false) => {
    id = OpenBot.decodeJid(jid);
    withoutContact = OpenBot.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = OpenBot.groupMetadata(id) || {};
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
              name: "whatsApp",
            }
          : id === OpenBot.decodeJid(OpenBot.user.id)
          ? OpenBot.user
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

  OpenBot.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await OpenBot.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await OpenBot.getName(
          i + "@s.whatsapp.net"
        )}\nFN:${await OpenBot.getName(
          i + "@s.whatsapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Phone\nitem2.EMAIL;type=INTERNET:νℓкуяєbots@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/riki_4932\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    OpenBot.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} contact`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

  OpenBot.public = true;
  OpenBot.serializeM = (ocID) => mMake(OpenBot, ocID, store);

  OpenBot.send5ButImg = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
      { upload: OpenBot.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      ocID.chat,
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
    OpenBot.relayMessage(jid, template.message, {
      messageId: template.key.id,
    });
  };

  OpenBot.sendButtonText = (
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
    OpenBot.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  OpenBot.sendText = (jid, text, quoted = "", options) =>
    OpenBot.sendMessage(jid, { text: text, ...options }, { quoted });

  OpenBot.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await OpenBot.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  OpenBot.sendVideo = async (
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
    return await OpenBot.sendMessage(
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

  OpenBot.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await OpenBot.sendMessage(
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

  OpenBot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    OpenBot.sendMessage(
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

  OpenBot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
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

    await OpenBot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  OpenBot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
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

    await OpenBot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  OpenBot.downloadAndSaveMediaMessage = async (
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

  OpenBot.downloadMediaMessage = async (message) => {
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

  OpenBot.sendMedia = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await OpenBot.getFile(path, true);
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
    await OpenBot.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

  OpenBot.copyNforward = async (
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
    await OpenBot.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  OpenBot.cMod = (
    jid,
    copy,
    text = "",
    sender = OpenBot.user.id,
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
    copy.key.fromMe = sender === OpenBot.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  OpenBot.getFile = async (PATH, save) => {
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
      "@/Bin/" + new Date() * 1 + "." + type.ext
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

  OpenBot.ws.on("CB:call", async (update) => {
    var sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    var callerId = update.content[0].attrs["call-creator"];
    let person = await OpenBot.sendContact(callerId, global.owner);
    OpenBot.sendMessage(
      callerId,
      {
        text: "Automatic system block!",
      },
      { quoted: person }
    );
    await sleep(8000);
    await OpenBot.updateBlockStatus(callerId, "block");
  });

  OpenBot.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let jid = OpenBot.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[jid] = { jid, name: contact.notify };
    }
  });
  setInterval(async () => {
    var _Type = [
      "🎭Designer",
      "🌏Inventor",
      "🎨Creator",
      "🎉Founder",
      "🐞Innovator",
      "🏗️Builder",
      "🖊️Author",
      "💡Maker",
      "🎤Speaker",
      "🎬Director",
      "🎼Musician",
      "📷Photographer",
      "🎮Gamer",
      "🎯Strategist",
      "📚Educator",
      "🔬Scientist",
      "👩‍💻Programmer",
      "🎓Researcher",
      "📺TV host",
      "🎤Singer",
      "🎥Filmmaker",
      "🎧Audio engineer",
      "🎪Circus performer",
      "🧪Chemist",
      "🗺️Cartographer",
      "🎢Roller coaster designer",
      "🎁Gift wrapper",
      "🚀Space explorer",
      "🔮Psychic",
      "🌳Environmentalist",
      "🎟️Ticket collector",
      "🍽️Chef",
      "📈Financial analyst",
      "🧩Puzzle solver",
      "🌌Astronomer",
      "🔍Investigator",
      "🎭Actor",
      "🌋Volcanologist",
      "🔐Locksmith",
      "🎡Amusement park designer",
      "🏰Architect",
      "📓Journalist",
      "📡Radio host",
      "🎭Mime artist",
      "🎮Game tester",
      "🚒Firefighter",
      "🚁Pilot",
      "🎾Tennis player",
      "⚖️Lawyer",
      "🎧DJ",
      "📻Radio presenter",
      "🍳Cook",
      "🏇Jockey",
      "🔧Mechanic",
      "🎪Acrobat",
      "🎯Archer",
      "🎬Stunt performer",
      "🛠️Handyman",
    ];
    var __Feeling = _Type[Math.floor(Math.random() * _Type.length)];
    await OpenBot.updateProfileStatus(
      "Feeling: " + __Feeling + " (OpenBot by magneum)"
    );
  }, 2 * 60 * 1000); // Run every 2 minutes (2 minutes * 60 seconds * 1000 milliseconds)
  setInterval(async () => {
    await OpenBot.updateProfilePicture("120363020792949649@g.us", {
      url: OpenBot.display,
    });
  }, 60 * 60 * 1000); // Run every hour (60 minutes * 60 seconds * 1000 milliseconds)
  setInterval(async () => {
    gitPull();
  }, 4 * 60 * 1000); // Run every hour (4 minutes * 60 seconds * 1000 milliseconds)
}
magneum().catch((error) => logger.error(error));
