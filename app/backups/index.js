"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 🤖📱 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("../module-alias");
require("@/config/index.js");
const logger = require("@/log/index.js");
const gitPull = require("@/utils/gitPull");
const purgepg = require("./purgepg");
const {
  default: Bloom_bot_client,
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
const fs = require("fs");
const path = require("path");
const pino = require("pino");
const express = require("express");
const monGoose = require("mongoose");
const { Boom } = require("@hapi/boom");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const dashboards = require("@/database/dashboard");
let PhoneNumber = require("awesome-phonenumber");
const remote_authstate = require("@/auth/remote_authstate");
const { fallback_remote_authstate } = require("@/auth/Database");
const {
  chatkey_maker,
  fetchJson,
  getBuffer,
  getSizeMedia,
} = require("@/lib/bloomHive");

async function rmdb() {
  await new Promise((resolve, reject) => {
    exec("rm -rf BloomBot.db", (error, stdout, stderr) => {
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
    .catch(async (error) => {
      logger.error("❌ Unable to Connect with mongoose.");
      logger.error(error);
    })
    .then(logger.info("📢 Connected with mongoose."));
  const opage = express();
  const store = makeInMemoryStore({
    logger: pino().child({ level: "silent", stream: "store" }),
  });
  const getVersionWaweb = () => {
    let version;
    try {
      const a = fetchJson(
        "web.whatsapp.com/check-update?version=1&platform=web"
      );
      version = [a.currentVersion.replace(/[.]/g, ", ")];
    } catch {
      version = [2, 2204, 13];
    }
    return version;
  };
  const urlencodedParser = bodyParser.urlencoded({ extended: false });
  opage.engine("html", require("ejs").renderFile);
  opage.use(express.static("./views"));
  opage.set("view engine", "html");
  opage.set("views", __dirname);
  opage.get("/", (request, response) => {
    response.redirect("bit.ly/magneum");
  });
  opage.get("/BloomBot", (request, response) => {
    response.sendFile("views/BloomBot.html", { root: __dirname });
  });
  opage.post("/BloomBot", urlencodedParser, (request, response) => {
    const phoneNum = request.body.phone.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      ""
    );
    dashboards.findOne(
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
  opage.listen(PORT, logger.info("📢 BloomBot started at port " + PORT));

  // const sequelize = DATABASE;
  // await sequelize.sync();
  let state, saveCreds;
  try {
    ({ state, saveCreds } = await remote_authstate());
    logger.info(
      "📢 Successfully retrieved state and saveCreds from remote_authstate."
    );
  } catch (error) {
    logger.error("📢 Error occurred in remote_authstate:", error);
    logger.debug(
      "📢 Using fallback_remote_authstate: Retrieving state and saveCreds from Reddis_RemoteFileAuthState."
    );
    ({ state, saveCreds } = await fallback_remote_authstate(logger));
    logger.info(
      "📢 Successfully retrieved state and saveCreds from fallback_remote_authstate."
    );
  }

  const BloomBot = Bloom_bot_client({
    auth: state,
    MessageRetryMap,
    printQRInTerminal: true,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "silent" }),
    browser: ["BloomBot-by-magneum", "Chrome", "4.0.0"],
    version: getVersionWaweb() || [2, 2242, 6],
    fireInitQueries: false,
    downloadHistory: false,
    syncFullHistory: false,
    shouldSyncHistoryMessage: false,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      if (store) {
        const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
        return msg.message || undefined;
      }
      return {
        conversation: "An Error Occurred, Repeat Command!",
      };
    },
  });
  store.bind(BloomBot.ev);

  BloomBot.ev.on("creds.update", async (update) => await saveCreds());
  BloomBot.ev.on("connection.update", async (update) => {
    const {
      lastDisconnect,
      connection,
      isNewLogin,
      isOnline,
      qr,
      receivedPendingNotifications,
    } = update;
    if (connection == "connecting") logger.info("📢 Connecting to WhatsApp...");
    else if (connection == "open") logger.info("📢 Login successful!");
    else if (connection == "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        logger.error(
          `❌ Bad Session File, Please Delete Session and Scan Again`
        );
        BloomBot.logout();
      } else if (reason === DisconnectReason.connectionClosed) {
        logger.error("❌ Connection closed, reconnecting....");
        await magneum();
      } else if (reason === DisconnectReason.connectionLost) {
        logger.error("❌ Connection Lost from Server, reconnecting...");
        await magneum();
      } else if (reason === DisconnectReason.connectionReplaced) {
        logger.error(
          "❌ Connection Replaced, Another New Session Opened, Please Close Current Session First"
        );
        BloomBot.logout();
      } else if (reason === DisconnectReason.loggedOut) {
        logger.error(`❌ Device Logged Out, Please Scan Again And Run.`);
        process.exit(0);
      } else if (reason === DisconnectReason.restartRequired) {
        logger.debug("💡: Restart Required, Restarting...");
        await magneum();
      } else if (reason === DisconnectReason.timedOut) {
        logger.error("❌ Connection TimedOut, Reconnecting...");
        await magneum();
      } else
        BloomBot.end(
          logger.error(`❌ Unknown DisconnectReason: ${reason}|${connection}`)
        );
    } else if (isOnline === true) logger.debug("💡: Online.");
    else if (isOnline === false) logger.error("📢 Offine.");
    else if (receivedPendingNotifications === true)
      logger.debug("💡: Received Pending Notifications.");
    else if (receivedPendingNotifications === false)
      logger.error("📢 Not Received Pending Notifications.");
    else if (isNewLogin === true) logger.debug("💡: New Login.");
    else if (isNewLogin === false) logger.error("📢 Not New Login.");
    else if (qr) logger.info("Qr: "), console.log(qr);
    else logger.info("📢 Connection...", update);
  });

  BloomBot.ev.on("messages.upsert", async (update) => {
    oText = update.messages[0];
    if (!oText.message) return;
    oText.message =
      Object.keys(oText.message)[0] === "ephemeralMessage"
        ? oText.message.ephemeralMessage.message
        : oText.message;
    if (oText.key && oText.key.remoteJid === "status@broadcast") return;
    if (!BloomBot.public && !oText.key.fromMe && update.type === "notify")
      return;
    if (oText.key.id.startsWith("BAE5") && oText.key.id.length === 16) return;
    chatkey = await chatkey_maker(BloomBot, oText, store);
    await require("../lib/symlink")(BloomBot, chatkey, update, store);
  });

  BloomBot.ev.on("group-participants.update", async (update) => {
    let metadata = await BloomBot.groupMetadata(update.id);
    let participants = update.participants;
    logger.info(update);
    for (let sperson of participants) {
      let imåge;
      try {
        imåge = await BloomBot.profilePictureUrl(sperson, "image");
      } catch {
        imåge = BloomBot.display;
      }

      if (update.action == "add") {
        return await BloomBot.sendMessage(
          update.id,
          {
            image: { url: imåge },
            caption: `*🌻You:* @${sperson.replace(/['@s whatsapp.net']/g, "")}
*📢Chat Id:* ${update.id}

> Firstly Welcome.
> I am BloomBot whatsapp bot.
> To Start using type .help or press below buttons.`,
            footer: "*ⒸBloomBot (md) by Magneum™ *\n*💻homePage:* bit.ly/magneum",
            buttons: [
              {
                buttonId: `${BloomBot.prefix}Dashboard`,
                buttonText: { displayText: `${BloomBot.prefix}Dashboard` },
                type: 1,
              },
              {
                buttonId: `${BloomBot.prefix}BloomBot`,
                buttonText: { displayText: `${BloomBot.prefix}BloomBot` },
                type: 1,
              },
            ],
            headerType: 4,
            mentions: [sperson],
          },
          {
            contextInfo: { mentionedJid: [sperson] },
          }
        ).catch(async (error) => logger.error(error));
      } else if (update.action == "remove") {
        return;
      } else {
        return;
      }
    }
  });

  BloomBot.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };
  BloomBot.getName = (jid, withoutContact = false) => {
    id = BloomBot.decodeJid(jid);
    withoutContact = BloomBot.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = BloomBot.groupMetadata(id) || {};
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
          : id === BloomBot.decodeJid(BloomBot.user.id)
          ? BloomBot.user
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

  BloomBot.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await BloomBot.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await BloomBot.getName(
          i + "@s.whatsapp.net"
        )}\nFN:${await BloomBot.getName(
          i + "@s.whatsapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Phone\nitem2.EMAIL;type=INTERNET:νℓкуяєbots@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:instagram.com/riki_4932\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;India;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    BloomBot.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} contact`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

  BloomBot.public = true;
  BloomBot.serializeM = (chatkey) => chatkey_maker(BloomBot, chatkey, store);

  BloomBot.send5ButImg = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
      { upload: BloomBot.waUploadToServer }
    );
    const template = generateWAMessageFromContent(
      chatkey.chat,
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
    BloomBot.relayMessage(jid, template.message, {
      messageId: template.key.id,
    });
  };

  BloomBot.sendButtonText = (
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
    BloomBot.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  BloomBot.sendText = (jid, text, quoted = "", options) =>
    BloomBot.sendMessage(jid, { text: text, ...options }, { quoted });

  BloomBot.sendImage = async (
    jid,
    path,
    caption = "",
    quoted = "",
    options
  ) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await BloomBot.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  BloomBot.sendVideo = async (
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
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await BloomBot.sendMessage(
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

  BloomBot.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await BloomBot.sendMessage(
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

  BloomBot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    BloomBot.sendMessage(
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

  BloomBot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }

    await BloomBot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  BloomBot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }

    await BloomBot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  BloomBot.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  BloomBot.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    return buffer;
  };

  BloomBot.sendMedia = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await BloomBot.getFile(path, true);
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
      let { writeExif } = require("../lib/convr");
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
    await BloomBot.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

  BloomBot.copyNforward = async (
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
    const waMessage = await generateWAMessageFromContent(
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
    await BloomBot.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  BloomBot.cMod = (
    jid,
    copy,
    text = "",
    sender = BloomBot.user.id,
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
    copy.key.fromMe = sender === BloomBot.user.id;

    return proto.WebMessageInfo.fromObject(copy);
  };

  BloomBot.getFile = async (PATH, save) => {
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

  BloomBot.ws.on("CB:call", async (update) => {
    const sleep = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    const callerId = update.content[0].attrs["call-creator"];
    let person = await BloomBot.sendContact(callerId, global.owner);
    BloomBot.sendMessage(
      callerId,
      {
        text: "Automatic system block!",
      },
      { quoted: person }
    );
    await sleep(8000);
    await BloomBot.updateBlockStatus(callerId, "block");
  });

  BloomBot.ev.on("contacts.update", async (update) => {
    for (let contact of update) {
      let jid = BloomBot.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[jid] = { jid, name: contact.notify };
    }
  });
  setInterval(async () => {
    const _Type = [
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
    const __Feeling = _Type[Math.floor(Math.random() * _Type.length)];
    await BloomBot.updateProfileStatus(
      "Feeling: " + __Feeling + " (ⒸBloomBot (md) by Magneum™)"
    );
  }, 2 * 60 * 1000); // Run every 2 minutes (2 minutes * 60 seconds * 1000 milliseconds)
  setInterval(async () => {
    await BloomBot.updateProfilePicture("120363020792949649@g.us", {
      url: BloomBot.display,
    });
  }, 60 * 60 * 1000);
  setInterval(async () => {
    gitPull();
  }, 5 * 60 * 1000);
}
magneum().catch(async (error) => logger.error(error));
