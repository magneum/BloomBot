`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
import makeWASocket, {
  DisconnectReason,
  makeInMemoryStore,
  WASocket,
} from "@adiwajshing/baileys";
import fs from "fs";
import Kolor from "chalk";
import { join } from "path";
import Vmangos from "mongoose";
import P, { Logger } from "pino";
import Konf from "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import Command from "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/command";
import { Sequelize } from "sequelize/types";
import useRemoteFileAuthState from "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/dbAuth";
import messages_upsert from "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💥𝐄𝐯𝐞𝐧𝐭𝐬/messages_upsert";
import connection_update from "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💥𝐄𝐯𝐞𝐧𝐭𝐬/connection_update";
import participants_update from "./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💥𝐄𝐯𝐞𝐧𝐭𝐬/participants_update";
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
const sequelize: Sequelize = Konf.DATABASE;
const logger: Logger = P({
  timestamp: () => `,"time":"${new Date().toJSON()}"`,
}).child({});
logger.level = "error";
console.log(Kolor.yellow("💡𝐈𝐧𝐟𝐨꧂  Trying To Connect To '🍃mongo + 🕸️sql'"));
const store = makeInMemoryStore({ logger });
store?.readFromFile("./Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞.json");
setInterval(() => {
  store?.writeToFile("./Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞.json");
}, 10_000);
("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
(async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log(Kolor.green("💡𝐈𝐧𝐟𝐨꧂  Connected with 🕸️SQL."));
  } catch (error) {
    console.error(Kolor.red("❌𝐄𝐫𝐫𝐨𝐫꧂ Unable to Connected with 🕸️SQL"));
    console.log(error);
    process.exit(0);
  }
  await sequelize.sync();
  try {
    await Vmangos.connect(Konf.VMango, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }).catch((error) => {
      console.log(Kolor.red(`❌ 𝐄𝐫𝐫𝐨𝐫⬰ ${error}`));
      process.exit(0);
    });
  } finally {
    console.log(Kolor.green("💡𝐈𝐧𝐟𝐨꧂  Connected with 🍃MONGO."));
    console.log(
      Kolor.green("💡𝐈𝐧𝐟𝐨꧂  All models synchronized successfully...")
    );
  }
  console.log(
    Kolor.green("💡𝐈𝐧𝐟𝐨꧂  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝 𝐚𝐧𝐝 𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐝 𝐰𝐢𝐭𝐡 𝐒𝐞𝐫𝐯𝐞𝐫𝐬...")
  );
  ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
  let commandHandler: Map<string, Command> = new Map();
  let Folders: string[] = fs.readdirSync(join(__dirname, "𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💞𝐒𝐨𝐮𝐥"));
  for (const Files of Folders) {
    const AllFiles = fs
      .readdirSync(join(__dirname, `./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💞𝐒𝐨𝐮𝐥/${Files}`))
      .filter((File) => File.endsWith(`.js`));
    for (const File of AllFiles) {
      const command = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💞𝐒𝐨𝐮𝐥/${Files}/${File}`);
      try {
        commandHandler.set(command.name, command);
      } catch (error) {
        console.log(
          Kolor.blue("💡𝐈𝐧𝐟𝐨꧂  Could not import module"),
          Kolor.red(`${File}`)
        );
        console.log(`❌𝐄𝐫𝐫𝐨𝐫꧂ `, error);
        continue;
      }
    }
  }
  ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
  let FFolders: string[] = fs.readdirSync(join(__dirname, "𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💖𝐇𝐞𝐚𝐫𝐭"));
  for (const FFiles of FFolders) {
    const AllFFiles = fs
      .readdirSync(join(__dirname, `./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💖𝐇𝐞𝐚𝐫𝐭/${FFiles}`))
      .filter((File) => File.endsWith(`.js`));
    for (const File of AllFFiles) {
      const command = require(`./𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞💖𝐇𝐞𝐚𝐫𝐭/${FFiles}/${File}`);
      try {
        commandHandler.set(command.name, command);
      } catch (error) {
        console.log(`❌𝐄𝐫𝐫𝐨𝐫꧂ Could not import module [ ${File} ]`, error);
        continue;
      }
    }
  }
  console.log(Kolor.yellow("💡𝐈𝐧𝐟𝐨꧂  Plugins Installed Successfully."));
  ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
  const { state, saveCreds } = await useRemoteFileAuthState(logger);
  const startSock = async () => {
    const ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇: WASocket = makeWASocket({
      logger,
      printQRInTerminal: true,
      auth: state,
      browser: ["Valkyrie", "Chrome", "4.0.0"],
      getMessage: async (key) => {
        return {};
      },
    });
    ("|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|");
    store?.bind(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.ev);
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.ev.on("group-participants.update", async (update) => {
      participants_update.participants_update(update, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇);
    });
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.ev.on("connection.update", (update) => {
      connection_update.connection_update(update, DisconnectReason, startSock);
    });
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.ev.on("messages.upsert", async (m) => {
      messages_upsert.messages_upsert(m, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, commandHandler);
    });
    ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.ev.on("creds.update", (creds) => {
      saveCreds(creds);
    });
    return ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇;
  };
  startSock();
})().catch((error) => console.log("[MAINERROR] : %s", Kolor.red(error)));
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/* 
(𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
