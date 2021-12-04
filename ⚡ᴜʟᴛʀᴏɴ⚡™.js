// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./ᴜʟᴛʀᴏɴ/Honeycomb-Round.otf`, { family: `Honeycomb` });
registerFont(`./ᴜʟᴛʀᴏɴ/LobsterTwo-Bold.ttf`, { family: `Lobster` });
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`./ᴜʟᴛʀᴏɴ/UltronSitreper`);
const ᴜʟᴛʀᴏɴֆʏռօք = require(`./ᴜʟᴛʀᴏɴ/UltronCOrex`);
var randomMC = require(`random-material-color`);
const gitPull = require(`./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɢɪᴛ`);
const ɠɠᴜʟᴛʀᴏɴ = require(`./ᴜʟᴛʀᴏɴ/ɠɠᴜʟᴛʀᴏɴ`);
const ᴜʟᴛʀᴏɴǟքք = require(`./ᴜʟᴛʀᴏɴ/helper`);
const clientult = require(`./ᴜʟᴛʀᴏɴ/ɠɠʊ`);
const ᴜʟᴛʀᴏɴsql = UltronSitreper.POSTQL;
const ᴜʟᴛʀᴏɴSudo = [`block`, `unblock`];
var rg = require(`random-greetings`);
const Kolor = require(`chalk`);
const fs = require(`fs`);
console.clear();
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
var υℓтяσηℓιєηт = ᴜʟᴛʀᴏɴֆʏռօք.WhatsApp;
async function ᴜʟᴛʀᴏɴRunner() {
  υℓтяσηℓιєηт.logger.level = `error`;
  var UltronSitrep = new Map();
  if (
    UltronSitreper.HEROKU_API === "Null" ||
    UltronSitreper.HEROKU_BOT_NAME === "Null"
  ) {
    console.log(
      Kolor.yellowBright.bold(
        `❌⬰ seems like heroku vars are invalid.\nPlease check and retry.`
      )
    );
    process.exit(0);
  }
  console.log(Kolor.yellowBright.bold(`[INFO] Checking for updates...`));
  await gitPull();
  try {
    var session = ᴜʟᴛʀᴏɴֆʏռօք.ultronreignite(UltronSitreper.ULTRON);
    υℓтяσηℓιєηт.loadAuthInfo(session);
  } catch (cᴇʀʀᴏʀ) {
    if (
      cᴇʀʀᴏʀ instanceof TypeError ||
      cᴇʀʀᴏʀ.message === `given authInfo is null` ||
      cᴇʀʀᴏʀ instanceof SyntaxError
    ) {
      console.log(
        Kolor.redBright.bold(
          `Incorrect Session String. Please authenticate again!`
        )
      );
      process.exit(0);
    } else {
      console.log(Kolor.redBright.bold(`SOMETHING WENT WRONG.\n`));
      process.exit(0);
    }
  }
  // ===============================================================================
  // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  υℓтяσηℓιєηт.on(`connecting`, async () => {
    console.log(Kolor.yellowBright.bold(`💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱...🤖`));
  });
  // ===============================================================================
  // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  υℓтяσηℓιєηт.on(`open`, async () => {
    console.log(Kolor.yellowBright.bold(`💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦...✅`));
    try {
      await ᴜʟᴛʀᴏɴsql.authenticate();
    } catch (error) {
      console.error(`❌⬰ Unable to connect to the database:`, error);
    }
    console.log(Kolor.yellowBright.bold(`💡⬰  𝘚𝘺𝘯𝘤𝘪𝘯𝘨 𝘋𝘢𝘵𝘢 𝘸𝘪𝘵𝘩 𝘏𝘰𝘴𝘵...✅`));
    await ᴜʟᴛʀᴏɴsql.sync();
    console.clear();
    console.log(Kolor.yellowBright.bold(`💡⬰  𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘪𝘯𝘨 𝘗𝘭𝘶𝘨𝘪𝘯𝘴...✅`));
    const Folders = fs.readdirSync(`./ᴜʟᴛʀᴏɴ💀ᴄᴜʟᴀʀ`);
    for (const folder of Folders) {
      const moduleFiles = fs
        .readdirSync(`./ᴜʟᴛʀᴏɴ💀ᴄᴜʟᴀʀ/${folder}`)
        .filter((file) => file.endsWith(`.js`));
      for (const file of moduleFiles) {
        const module = require(`./ᴜʟᴛʀᴏɴ💀ᴄᴜʟᴀʀ/${folder}/${file}`);
        UltronSitrep.set(module.name, module);
        console.log(
          Kolor.yellowBright.bold(`💡⬰  `),
          Kolor.greenBright.bold(module.name)
        );
      }
    }
    console.log(
      Kolor.yellowBright.bold(
        `=================😈    |  ᴜʟᴛʀᴏɴ  |    😈=================`
      ),
      Kolor.redBright.bold(`
██╗   ██╗██╗  ████████╗██████╗  ██████╗ ███╗   ██╗
██║   ██║██║  ╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║
██║   ██║██║     ██║   ██████╔╝██║   ██║██╔██╗ ██║
██║   ██║██║     ██║   ██╔══██╗██║   ██║██║╚██╗██║
╚██████╔╝███████╗██║   ██║  ██║╚██████╔╝██║ ╚████║
  ╚═════╝ ╚══════╝╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝`),
      Kolor.yellowBright.bold(
        `\n=================😈    |  ᴜʟᴛʀᴏɴ  |    😈=================`
      )
    );
    await υℓтяσηℓιєηт.sendMessage(
      υℓтяσηℓιєηт.user.jid,
      {
        url: `./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴ.png`,
      },
      MessageType.image,
      {
        mimetype: Mimetype.png,
        caption: `*⚡𝐔𝐋𝐓𝐑𝐎𝐍™ 𝗶𝘀 𝗥𝗲𝗮𝗱𝘆!*
💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..


𝗙𝗼𝗿 𝗺𝗼𝗿𝗲 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗿𝗲𝗴𝗮𝗿𝗱𝗶𝗻𝗴 𝗕𝗼𝘁 𝗙𝗼𝗹𝗹𝗼𝘄 𝘁𝗵𝗲𝘀𝗲❣️𝗜𝗺𝗽-𝗟𝗶𝗻𝗸𝘀:
*🔸ᴡʜᴀᴛꜱᴀᴘᴘ*⇀ https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5
*🔸ɢɪᴛʜᴜʙ*⇀ https://github.com/Krakinz
*🔸ᴅɪꜱᴄᴏʀᴅ*⇀ https://discord.gg/xcFN6NDHEV`,
      }
    );
  });
  // ===============================================================================
  // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  await υℓтяσηℓιєηт.connect();
  υℓтяσηℓιєηт.on(`group-participants-update`, async (update) => {
    console.log(
      `=================😈    |  ɢʀᴏᴜᴘ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ ᴜᴘᴅᴀᴛᴇ  |    😈=================`
    );
    var groupId = update.jid;
    var parID = update.participants;
    try {
      if (update.action === `add`) {
        var enable = await ɠɠᴜʟᴛʀᴏɴ.checkSettings(groupId, `welcome`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        var greets = [
          `ID➛ ${parID}\nJust joined the server - glhf!`,
          `ID➛ ${parID}\nJust joined. Everyone, look busy!`,
          `ID➛ ${parID}\nJust joined. Can I get a heal?`,
          `ID➛ ${parID}\nJoined your party.`,
          `ID➛ ${parID}\nJoined. You must construct additional pylons.`,
          `ID➛ ${parID}\nIs here.`,
          `ID➛ ${parID}\nWelcome, Stay awhile and listen.`,
          `ID➛ ${parID}\nWelcome, We were expecting you ( ͡° ͜ʖ ͡°)`,
          `ID➛ ${parID}\nWelcome, We hope you brought pizza.`,
          `ID➛ ${parID}\nWelcome Leave your weapons by the door.`,
          `ID➛ ${parID}\nJust Appeared.`,
          `ID➛ ${parID}\nSwoooosh. Just landed.`,
          `ID➛ ${parID}\nBrace yourselves. Just joined the server.`,
          `ID➛ ${parID}\nJust joined. Hide your bananas.`,
          `ID➛ ${parID}\nJust arrived. Seems OP - please nerf.`,
          `ID➛ ${parID}\nJust slid into the server.`,
          `ID➛ ${parID}\nHas spawned in the server.`,
          `ID➛ ${parID}\nShowed up!`,
          `ID➛ ${parID}\nHopped into the server. Kangaroo!!`,
          `ID➛ ${parID}\nJust showed up. Hold my beer.`,
        ];
        var Fetched = await ɠɠᴜʟᴛʀᴏɴ.getMessage(groupId, `welcome`);
        const width = 1280;
        const height = 720;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext(`2d`);
        context.fillStyle = `#252525`;
        context.fillRect(0, 0, width, height);
        context.font = `bold 50pt Lobster`;
        context.textAlign = `center`;
        context.textBaseline = `top`;
        const text = greets[Math.floor(Math.random() * greets.length)];
        const textWidth = context.measureText(text).width;
        context.fillRect(
          600 - textWidth / 2 - 10,
          170 - 5,
          textWidth + 20,
          120
        );
        const text2 = rg.greet();
        context.fillStyle = randomMC.getColor();
        context.fillText(text, 600, 170);
        context.fillStyle = `#fff`;
        context.font = `bold 40pt Honeycomb`;
        context.fillText(text2, 600, 530);
        const myimg = loadImage(`./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɠɠ.png`);
        await myimg.then(() => {
          const buffer = canvas.toBuffer(`image/png`);
          fs.writeFileSync(`./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɠɠ.png`, buffer);
          υℓтяσηℓιєηт.sendMessage(
            groupId,
            {
              url: `./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɠɠ.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: `\n${Fetched.message}`,
            }
          );
        });
        return;
      } else if (update.action === `remove`) {
        var enable = await ɠɠᴜʟᴛʀᴏɴ.checkSettings(groupId, `goodbye`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        υℓтяσηℓιєηт.sendMessage(groupId, `GooDbye`, MessageType.text);
      }
    } catch (cᴇʀʀᴏʀ) {
      console.log(cᴇʀʀᴏʀ);
    }
  });
  // ===============================================================================
  // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  υℓтяσηℓιєηт.on(`chat-update`, async (chat) => {
    if (!chat.hasNewMessage) {
      return;
    }
    if (!chat.messages) {
      return;
    }
    chat = chat.messages.all()[0];
    var sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`)
      ? await υℓтяσηℓιєηт.groupMetadata(sender)
      : ``;
    var ᴜʟᴛʀᴏɴ = ᴜʟᴛʀᴏɴǟքք.resolve(chat, υℓтяσηℓιєηт, groupMetadata);
    const adminmodls = [
      `add`,
      `demote`,
      `invite`,
      `mute`,
      `promote`,
      `remove`,
      `unmute`,
      `welcome`,
      `disappear`,
      `goodbye`,
      `setdp`,
      `tagall`,
    ];
    if (ᴜʟᴛʀᴏɴ.isCmd && !ᴜʟᴛʀᴏɴ.fromMe && !ᴜʟᴛʀᴏɴ.isSenderSUDO) {
      if (UltronSitreper.PRIVACY === `public`) {
        if (
          adminmodls.indexOf(ᴜʟᴛʀᴏɴ.moduleName) >= 0 &&
          !ᴜʟᴛʀᴏɴ.isSenderGroupAdmin
        ) {
          console.log(
            Kolor.redBright.bold(`💡⬰  adminmodls `),
            Kolor.greenBright.bold(`${ᴜʟᴛʀᴏɴ.moduleName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          return υℓтяσηℓιєηт.sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `You need to be an admin to execute this module.`,
            MessageType.text
          );
        } else if (
          ᴜʟᴛʀᴏɴSudo.indexOf(ᴜʟᴛʀᴏɴ.moduleName) >= 0 &&
          !ᴜʟᴛʀᴏɴ.isSenderSUDO
        ) {
          console.log(
            Kolor.redBright.bold(`💡⬰  sudo commmand `),
            Kolor.greenBright.bold(`${ᴜʟᴛʀᴏɴ.moduleName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          var messageSent = await clientult.getUser(ᴜʟᴛʀᴏɴ.chatId);
          if (messageSent) {
            return console.log(
              Kolor.blue(
                `💡⬰  Promo message had already been sent to ` + ᴜʟᴛʀᴏɴ.chatId
              )
            );
          } else {
            await clientult.addUser(ᴜʟᴛʀᴏɴ.chatId);
            return υℓтяσηℓιєηт.sendMessage(
              ᴜʟᴛʀᴏɴ.chatId,
              `ᴜʟᴛʀᴏɴ is Alive!.
I guess you were trying to use my modules in *${ᴜʟᴛʀᴏɴ.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo clientult to use the module *${moduleName}* .
If you are keen to use my features, you can deploy ᴜʟᴛʀᴏɴ on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
              {
                worktype: `public`,
                groupName: ᴜʟᴛʀᴏɴ.groupName ? ᴜʟᴛʀᴏɴ.groupName : `private chat`,
                moduleName: ᴜʟᴛʀᴏɴ.moduleName,
              },
              MessageType.text,
              {
                contextInfo: {
                  stanzaId: chat.key.id,
                  participant: ᴜʟᴛʀᴏɴ.sender,
                  quotedMessage: {
                    conversation: ᴜʟᴛʀᴏɴ.body,
                  },
                },
              }
            );
          }
        }
      } else if (UltronSitreper.PRIVACY === `private` && !ᴜʟᴛʀᴏɴ.isSenderSUDO) {
        console.log(
          Kolor.redBright.bold(`💡⬰  commmand `),
          Kolor.greenBright.bold(`${ᴜʟᴛʀᴏɴ.moduleName}`),
          Kolor.redBright.bold(`not executed in private Work Type.`)
        );
        var messageSent = await clientult.getUser(ᴜʟᴛʀᴏɴ.chatId);
        if (messageSent) {
          return console.log(
            Kolor.blue(
              `💡⬰  Promo message had already been sent to ` + ᴜʟᴛʀᴏɴ.chatId
            )
          );
        } else {
          await clientult.addUser(ᴜʟᴛʀᴏɴ.chatId);
          return υℓтяσηℓιєηт.sendMessage(
            ᴜʟᴛʀᴏɴ.chatId,
            `ᴜʟᴛʀᴏɴ is Alive!.
I guess you were trying to use my modules in *${ᴜʟᴛʀᴏɴ.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo clientult to use the module *${moduleName}* .
If you are keen to use my features, you can deploy ᴜʟᴛʀᴏɴ on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
            {
              worktype: `private`,
              groupName: ᴜʟᴛʀᴏɴ.groupName ? ᴜʟᴛʀᴏɴ.groupName : `private chat`,
              moduleName: ᴜʟᴛʀᴏɴ.moduleName,
            },
            MessageType.text,
            {
              contextInfo: {
                stanzaId: chat.key.id,
                participant: ᴜʟᴛʀᴏɴ.sender,
                quotedMessage: {
                  conversation: ᴜʟᴛʀᴏɴ.body,
                },
              },
            }
          );
        }
      }
    }
    // ===============================================================================
    // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
    // ===============================================================================
    if (ᴜʟᴛʀᴏɴ.isCmd) {
      console.log(
        Kolor.greenBright.bold(
          `💡⬰  ${ᴜʟᴛʀᴏɴ.moduleName.toUpperCase()} module executed.`
        )
      );
      const module = UltronSitrep.get(ᴜʟᴛʀᴏɴ.moduleName);
      var Arc = ᴜʟᴛʀᴏɴ.body.trim().split(/\s+/).slice(1);
      var UltronRegex = new RegExp(UltronSitreper.ULTRONIX, `g`);
      var Ultronf = /\/\^\[(.*)+\]\/\g/g.exec(UltronRegex)[1];
      if (!module) {
        return υℓтяσηℓιєηт.sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          {
            url: `https://i.postimg.cc/Gt46wxDL/ltr-Invalid.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⚠️𝗜𝗻𝘃𝗮𝗹𝗶𝗱 ᴜʟᴛʀᴏɴ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱*

*No such module found.*
Please Use *${Ultronf}help to get the list of available modules*`,
          }
        );
      } else if (module && ᴜʟᴛʀᴏɴ.moduleName == `help`) {
        try {
          return module.handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc, UltronSitrep);
        } catch (cᴇʀʀᴏʀ) {
          return console.log(Kolor.redBright.bold(`❌⬰ `, cᴇʀʀᴏʀ));
        }
      }
      module.handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc);
    }
  });
}
ᴜʟᴛʀᴏɴRunner().catch((cᴇʀʀᴏʀ) =>
  console.log(Kolor.redBright.bold(`❌⬰`), Kolor.redBright.italic(cᴇʀʀᴏʀ))
);
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
