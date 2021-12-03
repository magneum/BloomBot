// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const ᴋʀᴀᴋɪɴᴢᴋᴏɴ = require(`./ƈʏӄօռ/sessionString`);
const Welcmr = require(`./Últrðñ/wlcmr`);
const UltronSitreper = require(`./Últrðñ/UltronSitreper`);
const ÚltrðñSudo = [`block`, `unblock`];
const Users = require(`./Últrðñ/user`);
const wa = require(`./ƈʏӄօռ/helper`);
const Cyborgsql = UltronSitreper.POSTQL;
const Kolor = require(`chalk`);
const fs = require(`fs`);
console.clear();
var randomMC = require('random-material-color');
var rg = require('random-greetings');
const {
  registerFont,
  createCanvas,
  loadImage
} = require(`canvas`);
registerFont(`./Últrðñ/Honeycomb-Round.otf`, {
  family: `Honeycomb`,
});
registerFont(`./Últrðñ/LobsterTwo-Bold.ttf`, {
  family: `Lobster`,
});
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
var ӄʀǟӄɨռʐ = ᴋʀᴀᴋɪɴᴢᴋᴏɴ.WhatsApp;
async function CyborgRunner() {
  ӄʀǟӄɨռʐ.logger.level = `error`;
  var UltronSitrep = new Map();
  try {
    var session = ᴋʀᴀᴋɪɴᴢᴋᴏɴ.restoreSession(UltronSitreper.ULTRON);
    ӄʀǟӄɨռʐ.loadAuthInfo(session);
  } catch (cᴇʀʀᴏʀ) {
    if (cᴇʀʀᴏʀ instanceof TypeError || cᴇʀʀᴏʀ.message === `given authInfo is null` || cᴇʀʀᴏʀ instanceof SyntaxError) {
      console.log(Kolor.redBright.bold(`Incorrect Session String. Please authenticate again!`));
      process.exit(0);
    } else {
      console.log(Kolor.redBright.bold(`SOMETHING WENT WRONG.\n`));
      process.exit(0);
    }
  }
  // ===============================================================================
  // 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  ӄʀǟӄɨռʐ.on(`connecting`, async () => {
    console.log(Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱...🤖`));
  });
  // ===============================================================================
  // 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  ӄʀǟӄɨռʐ.on(`open`, async () => {
    console.log(Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦...✅`));
    try {
      await Cyborgsql.authenticate();
    } catch (error) {
      console.error(`⧪ᴇʀʀᴏʀ❌⬰ Unable to connect to the database:`, error);
    }
    console.log(Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘚𝘺𝘯𝘤𝘪𝘯𝘨 𝘋𝘢𝘵𝘢 𝘸𝘪𝘵𝘩 𝘏𝘰𝘴𝘵...✅`));
    await Cyborgsql.sync();
    console.clear();
    console.log(Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘪𝘯𝘨 𝘗𝘭𝘶𝘨𝘪𝘯𝘴...✅`));
    const Folders = fs.readdirSync(`./Últrðñ_ℌ𝔦𝔳𝔢`);
    for (const folder of Folders) {
      const commandFiles = fs.readdirSync(`./Últrðñ_ℌ𝔦𝔳𝔢/${folder}`).filter((file) => file.endsWith(`.js`));
      for (const file of commandFiles) {
        const command = require(`./Últrðñ_ℌ𝔦𝔳𝔢/${folder}/${file}`);
        UltronSitrep.set(command.name, command);
        console.log(
          Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  `),
          Kolor.greenBright.bold(command.name.toUpperCase()),
          Kolor.whiteBright.bold(command.description.toLowerCase())
        );
      }
    }
    // ===============================================================================
    // 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
    // ===============================================================================
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.IMDB);
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.HEROKU);
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.ULTRONIX);
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.CCD);
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.OCR);
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.WAPI);
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.PRIVACY);
    console.log(Kolor.yellowBright.bold(`----------------------------------------|  Últrðñ  |`));
    console.log(UltronSitreper.SUDO);
    console.log(
      Kolor.yellowBright.bold(`=================😈    |  Últrðñ  |    😈=================`),
      Kolor.redBright.bold(`
/$$   /$$ /$$   /$$                                  
| $$  | $$| $$  | $$                                  
| $$  | $$| $$ /$$$$$$    /$$$$$$   /$$$$$$  /$$$$$$$ 
| $$  | $$| $$|_  $$_/   /$$__  $$ /$$__  $$| $$__  $$
| $$  | $$| $$  | $$    | $$   __/| $$    $$| $$    $$
| $$  | $$| $$  | $$ /$$| $$      | $$  | $$| $$  | $$
|  $$$$$$/| $$  |  $$$$/| $$      |  $$$$$$/| $$  | $$
______/ |__/    ___/  |__/        ______/ |__/  |__/`),
      Kolor.yellowBright.bold(`\n=================😈    |  Últrðñ  |    😈=================`));
  });
  // ===============================================================================
  // 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  await ӄʀǟӄɨռʐ.connect();
  ӄʀǟӄɨռʐ.on(`group-participants-update`, async (update) => {
    console.log(`------------------- GROUP PARTICIPANT UPDATE -------------------`);
    console.log(update.participants);
    console.log(update.action);
    console.log(update.actor);
    console.log(update.jid);
    var groupId = update.jid;
    var parID = update.participants;
    try {
      if (update.action === `add`) {
        var enable = await Welcmr.checkSettings(groupId, `welcome`);
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
        var Fetched = await Welcmr.getMessage(groupId, `welcome`);
        const width = 1280;
        const height = 720;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext(`2d`);
        context.fillStyle = `#555555`;
        context.fillRect(0, 0, width, height);
        context.font = `bold 50pt Lobster`;
        context.textAlign = `center`;
        context.textBaseline = `top`;
        const text = greets[Math.floor(Math.random() * greets.length)];
        const textWidth = context.measureText(text).width;
        context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
        const text2 = Fetched.message;
        context.fillStyle = randomMC.getColor();
        context.fillText(text, 600, 170);
        context.fillStyle = `#fff`;
        context.font = `bold 30pt Honeycomb`;
        context.fillText(text2, 600, 530);
        const myimg = loadImage(`./Últrðñ/Últrðñ-Welcmr.png`)
        await myimg.then(() => {
          const buffer = canvas.toBuffer(`image/png`);
          fs.writeFileSync(`./Últrðñ/Últrðñ-Welcmr.png`, buffer);
          ӄʀǟӄɨռʐ.sendMessage(
            groupId, {
              url: `./Últrðñ/Últrðñ-Welcmr.png`
            },
            MessageType.image, {
              mimetype: Mimetype.png,
              caption: `
➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
*🖥️PostSql➛* ${Fetched.message}`
            }
          );
        });
        return;
      } else if (update.action === `remove`) {
        var enable = await Welcmr.checkSettings(groupId, `goodbye`);
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
          `Where’s ID➛ ${parID}\n? In the server!`,
          `ID➛ ${parID}\nHopped into the server. Kangaroo!!`,
          `ID➛ ${parID}\nJust showed up. Hold my beer.`,
        ];
        var Fetched = await Welcmr.getMessage(groupId, `goodbye`);
        const width = 1280;
        const height = 720;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext(`2d`);
        context.fillStyle = `#555555`;
        context.fillRect(0, 0, width, height);
        context.font = `bold 50pt Lobster`;
        context.textAlign = `center`;
        context.textBaseline = `top`;
        const text = greets[Math.floor(Math.random() * greets.length)];
        const textWidth = context.measureText(text).width;
        context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
        const text2 = Fetched.message;
        context.fillStyle = randomMC.getColor();
        context.fillText(text, 600, 170);
        context.fillStyle = `#fff`;
        context.font = `bold 30pt Honeycomb`;
        context.fillText(text2, 600, 530);
        const myimg = loadImage(`./Últrðñ/Últrðñ-Welcmr.png`)
        await myimg.then(() => {
          const buffer = canvas.toBuffer(`image/png`);
          fs.writeFileSync(`./Últrðñ/Últrðñ-Welcmr.png`, buffer);
          ӄʀǟӄɨռʐ.sendMessage(
            groupId, {
              url: `./Últrðñ/Últrðñ-Welcmr.png`
            },
            MessageType.image, {
              mimetype: Mimetype.png,
              caption: `
➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
*🖥️PostSql➛* ${Fetched.message}`
            }
          );
        });
      }
      ӄʀǟӄɨռʐ.sendMessage(
        groupId,
        "on (event: 'group-participants-update', listener: (update: {jid: string, participants: string[], actor?: string, action: WAParticipantAction}) => void): this",
        MessageType.text
      );
    } catch (cᴇʀʀᴏʀ) {
      console.log(cᴇʀʀᴏʀ);
    }
  });
  // ===============================================================================
  // 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  ӄʀǟӄɨռʐ.on(`chat-update`, async (chat) => {
    if (!chat.hasNewMessage) {
      return
    };
    if (!chat.messages) {
      return
    };
    chat = chat.messages.all()[0];
    var sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`) ? await ӄʀǟӄɨռʐ.groupMetadata(sender) : ``;
    var Últrðñ = wa.resolve(chat, ӄʀǟӄɨռʐ, groupMetadata);
    const ÚltrðñRights = [
      `add`, `demote`, `invite`, `mute`, `promote`, `remove`, `unmute`,
      `welcome`, `disappear`, `goodbye`, `setdp`, `tagall`, `spam`,
      // Below are NSFW Commands!
      `ass`, `bdsm`, `blowjob`, `cum`, `doujin`, `feet`, `femdom`, `foxgirl`, `glasses`, `hentai`, `maid`,
      `masturbation`, `netorare`, `orgy`, `panties`, `pussy`, `school`, `tentacles`, `thighs`, `uniform`, `yuri`,
    ];
    if (Últrðñ.isCmd && !Últrðñ.fromMe && !Últrðñ.isSenderSUDO) {
      if (UltronSitreper.PRIVACY === `public`) {
        if (ÚltrðñRights.indexOf(Últrðñ.commandName) >= 0 && !Últrðñ.isSenderGroupAdmin) {
          console.log(
            Kolor.redBright.bold(`⧪ɪɴꜰᴏ💡⬰  ÚltrðñRights `),
            Kolor.greenBright.bold(`${Últrðñ.commandName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          return ӄʀǟӄɨռʐ.sendMessage(Últrðñ.chatId, `You need to be an admin to execute this command.`, MessageType.text);
        } else if (ÚltrðñSudo.indexOf(Últrðñ.commandName) >= 0 && !Últrðñ.isSenderSUDO) {
          console.log(
            Kolor.redBright.bold(`⧪ɪɴꜰᴏ💡⬰  sudo commmand `),
            Kolor.greenBright.bold(`${Últrðñ.commandName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          var messageSent = await Users.getUser(Últrðñ.chatId);
          if (messageSent) {
            return console.log(Kolor.blue(`⧪ɪɴꜰᴏ💡⬰  Promo message had already been sent to ` + Últrðñ.chatId));
          } else {
            await Users.addUser(Últrðñ.chatId);
            return ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `Últrðñ is Alive!.
I guess you were trying to use my commands in *${Últrðñ.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo users to use the command *${commandName}* .
If you are keen to use my features, you can deploy Últrðñ on your own account without much effort, in less than 5 minutes! Check out the links given below.`, {
                worktype: `public`,
                groupName: Últrðñ.groupName ? Últrðñ.groupName : `private chat`,
                commandName: Últrðñ.commandName,
              },
              MessageType.text, {
                contextInfo: {
                  stanzaId: chat.key.id,
                  participant: Últrðñ.sender,
                  quotedMessage: {
                    conversation: Últrðñ.body,
                  },
                },
              }
            );
          }
        }
      } else if (UltronSitreper.PRIVACY === `private` && !Últrðñ.isSenderSUDO) {
        console.log(
          Kolor.redBright.bold(`⧪ɪɴꜰᴏ💡⬰  commmand `),
          Kolor.greenBright.bold(`${Últrðñ.commandName}`),
          Kolor.redBright.bold(`not executed in private Work Type.`)
        );
        var messageSent = await Users.getUser(Últrðñ.chatId);
        if (messageSent) {
          return console.log(Kolor.blue(`⧪ɪɴꜰᴏ💡⬰  Promo message had already been sent to ` + Últrðñ.chatId));
        } else {
          await Users.addUser(Últrðñ.chatId);
          return ӄʀǟӄɨռʐ.sendMessage(
            Últrðñ.chatId,
            `Últrðñ is Alive!.
I guess you were trying to use my commands in *${Últrðñ.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo users to use the command *${commandName}* .
If you are keen to use my features, you can deploy Últrðñ on your own account without much effort, in less than 5 minutes! Check out the links given below.`, {
              worktype: `private`,
              groupName: Últrðñ.groupName ? Últrðñ.groupName : `private chat`,
              commandName: Últrðñ.commandName,
            },
            MessageType.text, {
              contextInfo: {
                stanzaId: chat.key.id,
                participant: Últrðñ.sender,
                quotedMessage: {
                  conversation: Últrðñ.body,
                },
              },
            }
          );
        }
      }
    }
    // ===============================================================================
    // 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
    // ===============================================================================
    if (Últrðñ.isCmd) {
      console.log(Kolor.redBright.bold(`⧪ɪɴꜰᴏ💡⬰  ${Últrðñ.commandName.toUpperCase()} command executed.`));
      const command = UltronSitrep.get(Últrðñ.commandName);
      var Arc = Últrðñ.body.trim().split(/\s+/).slice(1);
      var UltronRegex = new RegExp(UltronSitreper.ULTRONIX, "g");
      var Ultronf = /\/\^\[(.*)+\]\/\g/g.exec(UltronRegex)[1];
      if (!command) {
        return ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId, {
            url: `https://i.postimg.cc/Gt46wxDL/ltr-Invalid.png`,
          },
          MessageType.image, {
            mimetype: Mimetype.png,
            caption: `*⚠️𝗜𝗻𝘃𝗮𝗹𝗶𝗱 Últrðñ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱*

        *No such command found.*
        Please Use *${Ultronf}help to get the list of available commands*`,
          }
        );
      } else if (command && Últrðñ.commandName == `help`) {
        try {
          return command.handle(ӄʀǟӄɨռʐ, chat, Últrðñ, Arc, UltronSitrep);
        } catch (cᴇʀʀᴏʀ) {
          return console.log(Kolor.redBright.bold(`⧪ᴇʀʀᴏʀ❌⬰ `, cᴇʀʀᴏʀ));
        }
      }
      command.handle(ӄʀǟӄɨռʐ, chat, Últrðñ, Arc)
    }
  });
}
CyborgRunner().catch((cᴇʀʀᴏʀ) =>
  console.log(Kolor.redBright.bold(`⧪ᴇʀʀᴏʀ❌⬰`), Kolor.redBright.italic(cᴇʀʀᴏʀ))
);
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================