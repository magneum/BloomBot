// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./ᴜʟᴛʀᴏɴ/Honeycomb-Round.otf`, {
  family: `Honeycomb`,
});
registerFont(`./ᴜʟᴛʀᴏɴ/LobsterTwo-Bold.ttf`, {
  family: `Lobster`,
});
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜱɪɢɴ = require(`./ᴜʟᴛʀᴏɴ/ꜱɪɢɴ`);
const ᴜʟᴛʀᴏɴֆʏռօք = require(`./ᴜʟᴛʀᴏɴ/UltronCOrex`);
const Matellic = require(`random-material-color`);
const gitPull = require(`./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɢɪᴛ`);
const ɠɠᴜʟᴛʀᴏɴ = require(`./ᴜʟᴛʀᴏɴ/ɠɠᴜʟᴛʀᴏɴ`);
const ᴜʟᴛʀᴏɴǟքք = require(`./ᴜʟᴛʀᴏɴ/helper`);
const clientult = require(`./ᴜʟᴛʀᴏɴ/ɠɠʊ`);
const download = require(`download-file`);
const ᴜʟᴛʀᴏɴSudo = [`block`, `unblock`];
const Kolor = require(`chalk`);
const ᴜʟᴛʀᴏɴsql = ꜱɪɢɴ.POSTQL;
const fs = require(`fs`);
console.clear();
var Text_Rand_Welcome = [
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ꜱᴇʀᴠᴇʀ - ɢʟʜꜰ!*`,
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ᴇᴠᴇʀʏᴏɴᴇ, ʟᴏᴏᴋ ʙᴜꜱʏ!*`,
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ᴄᴀɴ ɪ ɢᴇᴛ ᴀ ʜᴇᴀʟ?*`,
  `*ᴊᴏɪɴᴇᴅ ʏᴏᴜʀ ᴘᴀʀᴛʏ.*`,
  `*ᴊᴏɪɴᴇᴅ. ʏᴏᴜ ᴍᴜꜱᴛ ᴄᴏɴꜱᴛʀᴜᴄᴛ ᴀᴅᴅɪᴛɪᴏɴᴀʟ ᴘʏʟᴏɴꜱ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ, ꜱᴛᴀʏ ᴀᴡʜɪʟᴇ ᴀɴᴅ ʟɪꜱᴛᴇɴ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ, ᴡᴇ ᴡᴇʀᴇ ᴇxᴘᴇᴄᴛɪɴɢ ʏᴏᴜ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ, ᴡᴇ ʜᴏᴘᴇ ʏᴏᴜ ʙʀᴏᴜɢʜᴛ ᴘɪᴢᴢᴀ.*`,
  `*ᴡᴇʟᴄᴏᴍᴇ ʟᴇᴀᴠᴇ ʏᴏᴜʀ ᴡᴇᴀᴘᴏɴꜱ ʙʏ ᴛʜᴇ ᴅᴏᴏʀ.*`,
  `*ᴊᴜꜱᴛ ᴀᴘᴘᴇᴀʀᴇᴅ.*`,
  `*ꜱᴡᴏᴏᴏᴏꜱʜ. ᴊᴜꜱᴛ ʟᴀɴᴅᴇᴅ.*`,
  `*ʙʀᴀᴄᴇ ʏᴏᴜʀꜱᴇʟᴠᴇꜱ. ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.*`,
  `*ᴊᴜꜱᴛ ᴊᴏɪɴᴇᴅ. ʜɪᴅᴇ ʏᴏᴜʀ ʙᴀɴᴀɴᴀꜱ.*`,
  `*ᴊᴜꜱᴛ ᴀʀʀɪᴠᴇᴅ. ꜱᴇᴇᴍꜱ ᴏᴘ - ᴘʟᴇᴀꜱᴇ ɴᴇʀꜰ.*`,
  `*ᴊᴜꜱᴛ ꜱʟɪᴅ ɪɴᴛᴏ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.*`,
  `*ʜᴀꜱ ꜱᴘᴀᴡɴᴇᴅ ɪɴ ᴛʜᴇ ꜱᴇʀᴠᴇʀ.*`,
  `*ʜᴏᴘᴘᴇᴅ ɪɴᴛᴏ ᴛʜᴇ ꜱᴇʀᴠᴇʀ. ᴋᴀɴɢᴀʀᴏᴏ!!*`,
  `*ᴊᴜꜱᴛ ꜱʜᴏᴡᴇᴅ ᴜᴘ. ʜᴏʟᴅ ᴍʏ ʙᴇᴇʀ.*`,
];
var Text__Bye = [
  `ᴡɪʟʟ ʙᴇ ᴍɪꜱꜱᴇᴅ.`,
  `ᴊᴜꜱᴛ ᴡᴇɴᴛ ᴏꜰꜰʟɪɴᴇ.`,
  `ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ʟᴏʙʙʏ.`,
  `ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ᴄʟᴀɴ.`,
  `ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ɢᴀᴍᴇ.`,
  `ʜᴀꜱ ꜰʟᴇᴅ ᴛʜᴇ ᴀʀᴇᴀ.`,
  `ɴɪᴄᴇ ᴋɴᴏᴡɪɴɢ ʏᴀ!`,
  `ɪᴛ ᴡᴀꜱ ᴀ ꜰᴜɴ ᴛɪᴍᴇ.`,
  `ɪ ᴅᴏɴᴜᴛ ᴡᴀɴᴛ ᴛᴏ ꜱᴀʏ ɢᴏᴏᴅʙʏᴇ.`,
  `ᴡᴇ ʜᴏᴘᴇ ᴛᴏ ꜱᴇᴇ ʏᴏᴜ ᴀɢᴀɪɴ ꜱᴏᴏɴ.`,
  `ʏᴏᴜ'ʀᴇ ʟᴇᴀᴠɪɴɢ, ? ʏᴀʀᴇ ʏᴀʀᴇ ᴅᴀᴢᴇ.`,
  `ɢᴏᴏᴅʙʏᴇ ! ɢᴜᴇꜱꜱ ᴡʜᴏ'ꜱ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ :')`,
  `ɢᴏᴏᴅʙʏᴇ ! ɪᴛ'ꜱ ɢᴏɴɴᴀ ʙᴇ ʟᴏɴᴇʟʏ ᴡɪᴛʜᴏᴜᴛ ʏᴀ.`,
  `ᴘʟᴇᴀꜱᴇ ᴅᴏɴ'ᴛ ʟᴇᴀᴠᴇ ᴍᴇ ᴀʟᴏɴᴇ ɪɴ ᴛʜɪꜱ ᴘʟᴀᴄᴇ!`,
  `ɢᴏᴏᴅ ʟᴜᴄᴋ ꜰɪɴᴅɪɴɢ ʙᴇᴛᴛᴇʀ ꜱʜɪᴛ-ᴘᴏꜱᴛᴇʀꜱ ᴛʜᴀɴ ᴜꜱ!`,
  `ʏᴏᴜ ᴋɴᴏᴡ ᴡᴇ'ʀᴇ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ . ʀɪɢʜᴛ? ʀɪɢʜᴛ? ʀɪɢʜᴛ?`,
  `ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴꜱ, ! ʏᴏᴜ'ʀᴇ ᴏꜰꜰɪᴄɪᴀʟʟʏ ꜰʀᴇᴇ ᴏꜰ ᴛʜɪꜱ ᴍᴇꜱꜱ.`,
];
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
var υℓтяσηℓιєηт = ᴜʟᴛʀᴏɴֆʏռօք.WhatsApp;
async function ᴜʟᴛʀᴏɴRunner() {
  // υℓтяσηℓιєηт.logger.level = `error`;
  var UltronSitrep = new Map();
  if (ꜱɪɢɴ.HEROKU_API === `Null` || ꜱɪɢɴ.HEROKU_BOT_NAME === `Null`) {
    console.log(
      Kolor.yellow(
        `❌⬰ seems like heroku vars are invalid.\nPlease check and retry.`
      )
    );
    process.exit(0);
  }
  console.log(Kolor.yellow(`[INFO] Checking for updates...`));
  await gitPull();
  try {
    var session = ᴜʟᴛʀᴏɴֆʏռօք.ultronreignite(ꜱɪɢɴ.ULTRON);
    υℓтяσηℓιєηт.loadAuthInfo(session);
  } catch (cᴇʀʀᴏʀ) {
    if (
      cᴇʀʀᴏʀ instanceof TypeError ||
      cᴇʀʀᴏʀ.message === `given authInfo is null` ||
      cᴇʀʀᴏʀ instanceof SyntaxError
    ) {
      console.log(
        Kolor.red(`Incorrect Session String. Please authenticate again!`)
      );
      process.exit(0);
    } else {
      console.log(Kolor.red(`SOMETHING WENT WRONG.\n`));
      process.exit(0);
    }
  }
  // ===============================================================================
  // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  υℓтяσηℓιєηт.on(`connecting`, async () => {
    console.log(Kolor.yellow(`💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱...🤖`));
  });
  // ===============================================================================
  // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
  // ===============================================================================
  υℓтяσηℓιєηт.on(`open`, async () => {
    console.log(Kolor.yellow(`💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦...✅`));
    try {
      await ᴜʟᴛʀᴏɴsql.authenticate();
    } catch (error) {
      console.error(`❌⬰ Unable to connect to the database:`, error);
    }
    console.log(Kolor.yellow(`💡⬰  𝘚𝘺𝘯𝘤𝘪𝘯𝘨 𝘋𝘢𝘵𝘢 𝘸𝘪𝘵𝘩 𝘏𝘰𝘴𝘵...✅`));
    await ᴜʟᴛʀᴏɴsql.sync();
    console.clear();
    console.log(Kolor.yellow(`💡⬰  𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘪𝘯𝘨 𝘗𝘭𝘶𝘨𝘪𝘯𝘴...✅`));
    const Folders = fs.readdirSync(`./ᴜʟᴛʀᴏɴ🍷ᴄᴜʟᴀʀ`);
    for (const folder of Folders) {
      const commandFiles = fs
        .readdirSync(`./ᴜʟᴛʀᴏɴ🍷ᴄᴜʟᴀʀ/${folder}`)
        .filter((file) => file.endsWith(`.js`));
      for (const file of commandFiles) {
        const command = require(`./ᴜʟᴛʀᴏɴ🍷ᴄᴜʟᴀʀ/${folder}/${file}`);
        UltronSitrep.set(command.name, command);
        console.log(Kolor.yellow(`💡⬰  `), Kolor.green(command.name));
      }
    }
    console.log(
      Kolor.yellow(
        `=================😈    |  ᴜʟᴛʀᴏɴ  |    😈=================`
      ),
      Kolor.red(`
██╗   ██╗██╗  ████████╗██████╗  ██████╗ ███╗   ██╗
██║   ██║██║  ╚══██╔══╝██╔══██╗██╔═══██╗████╗  ██║
██║   ██║██║     ██║   ██████╔╝██║   ██║██╔██╗ ██║
██║   ██║██║     ██║   ██╔══██╗██║   ██║██║╚██╗██║
╚██████╔╝███████╗██║   ██║  ██║╚██████╔╝██║ ╚████║
╚═════╝ ╚══════╝╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝`),
      Kolor.yellow(
        `\n=================😈    |  ᴜʟᴛʀᴏɴ  |    😈=================`
      )
    );
    await υℓтяσηℓιєηт.sendMessage(
      υℓтяσηℓιєηт.user.jid,
      {
        url: `https://i.postimg.cc/5yphDmkW/image.png`,
      },
      MessageType.image,
      {
        mimetype: Mimetype.png,
        caption: `*⚡𝐔𝐋𝐓𝐑𝐎𝐍™ 𝗶𝘀 𝗥𝗲𝗮𝗱𝘆!*
💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 
𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..

⚙️𝗩𝗲𝗿𝘀𝗶𝗼𝗻: 
*🔸ᴠʟʙᴛ-4.89*

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
    const MemNum = update.participants[0];
    const GroupMemData = await υℓтяσηℓιєηт.groupMetadata(update.jid);
    const GroupMemG = GroupMemData.participants.length;
    const GroupMemBio = await υℓтяσηℓιєηт.getStatus(
      update.participants[0],
      MessageType.text
    );
    console.log(
      `=================😈    |  ɢʀᴏᴜᴘ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛ ᴜᴘᴅᴀᴛᴇ  |    😈=================`
    );
    var GroupID = update.jid;
    try {
      if (update.action === `add`) {
        var enable = await ɠɠᴜʟᴛʀᴏɴ.checkSettings(GroupID, `setwelcome`);
        if (enable === false || enable === `OFF`) {
          return;
        }

        var Fetched = await ɠɠᴜʟᴛʀᴏɴ.getMessage(GroupID, `setwelcome`);
        try {
          ppimg = await υℓтяσηℓιєηт.getProfilePicture(
            `${MemNum.split(`@`)[0]}@c.us`
          );
        } catch {
          ppimg = `https://i.postimg.cc/bJmWSkFL/depositphotos-39258143-stock-illustration-businessman-avatar-profile-picture.jpg`;
        }
        download(
          ppimg,
          {
            directory: `./ᴛᴇᴍᴘ/`,
            filename: `ppimg.jpg`,
          },
          function (err) {
            if (err) throw err;
            const weltext =
              Text_Rand_Welcome[
                Math.floor(Math.random() * Text_Rand_Welcome.length)
              ];
            return υℓтяσηℓιєηт.sendMessage(
              GroupID,
              {
                url: `./ᴛᴇᴍᴘ/ppimg.jpg`,
              },
              MessageType.image,
              {
                mimetype: Mimetype.png,
                caption: `
@${MemNum.split(`@`)[0]}
${weltext}

❣️𝗕𝗜𝗢➛ _${GroupMemBio.status}_
🎊𝗚𝗥𝗢𝗨𝗣➛ _${GroupMemData.subject}_
🗄️𝗪𝗲 𝗔𝗿𝗲 𝗡𝗼𝘄➛  _${GroupMemG}_ 𝗠𝗲𝗺𝗯𝗲𝗿𝘀
${Fetched.message}`,
              }
            );
          }
        );
        return;
      } else if (update.action === `remove`) {
        var enable = await ɠɠᴜʟᴛʀᴏɴ.checkSettings(GroupID, `setgoodbye`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        var Fetched = await ɠɠᴜʟᴛʀᴏɴ.getMessage(GroupID, `setgoodbye`);
        const width = 1280;
        const height = 720;
        const canvas = createCanvas(width, height);
        const context = canvas.getContext(`2d`);
        context.fillStyle = `#252525`;
        context.fillRect(0, 0, width, height);
        context.font = `bold 60pt Lobster`;
        context.textAlign = `center`;
        context.textBaseline = `top`;
        const BYETEXT = `@${MemNum.split(`@`)[0]}`;
        const BYETW = context.measureText(BYETEXT).width;
        context.fillRect(600 - BYETW / 2 - 10, 170 - 5, BYETW + 20, 120);
        const Text_Rand_Bye = `${
          Text__Bye[Math.floor(Math.random() * Text__Bye.length)]
        }`;
        context.fillStyle = Matellic.getColor();
        context.fillText(BYETEXT, 600, 170);
        context.fillStyle = `#fff`;
        context.font = `bold 50pt Honeycomb`;
        context.fillText(Text_Rand_Bye, 600, 530);
        const myimg = loadImage(`./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɠb.png`);
        await myimg.then(() => {
          const buffer = canvas.toBuffer(`image/png`);
          fs.writeFileSync(`./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɠɠ.png`, buffer);
          υℓтяσηℓιєηт.sendMessage(
            GroupID,
            {
              url: `./ᴜʟᴛʀᴏɴ/ᴜʟᴛʀᴏɴɠb.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: `🗄️𝗪𝗲 𝗔𝗿𝗲 𝗡𝗼𝘄➛  _${GroupMemG}_ 𝗠𝗲𝗺𝗯𝗲𝗿𝘀

*•⊹٭---------------٭⊹•*
${Fetched.message}`,
            }
          );
        });
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
      `setwelcome`,
      `disappear`,
      `setgoodbye`,
      `tagall`,
    ];
    if (ᴜʟᴛʀᴏɴ.isCmd && !ᴜʟᴛʀᴏɴ.fromMe) {
      if (
        adminmodls.indexOf(ᴜʟᴛʀᴏɴ.commandName) >= 0 &&
        !ᴜʟᴛʀᴏɴ.isSenderGroupAdmin
      ) {
        return υℓтяσηℓιєηт.sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          `You need to be an admin to execute this command.`,
          MessageType.text
        );
      } else if (ᴜʟᴛʀᴏɴSudo.indexOf(ᴜʟᴛʀᴏɴ.commandName) >= 0) {
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
I guess you were trying to use my commands in *${ᴜʟᴛʀᴏɴ.groupName}*. However, the bot is currently in ${worktype} mode. 
This enables only the owner and sudo clientult to use the command *${commandName}* .
If you are keen to use my features, you can deploy ᴜʟᴛʀᴏɴ on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
            {
              worktype: `public`,
              groupName: ᴜʟᴛʀᴏɴ.groupName ? ᴜʟᴛʀᴏɴ.groupName : `private chat`,
              commandName: ᴜʟᴛʀᴏɴ.commandName,
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
        Kolor.green(
          `💡⬰  ${ᴜʟᴛʀᴏɴ.commandName.toUpperCase()} command executed.`
        )
      );
      const command = UltronSitrep.get(ᴜʟᴛʀᴏɴ.commandName);
      var Arc = ᴜʟᴛʀᴏɴ.body.trim().split(/\s+/).slice(1);
      var UltronRegex = new RegExp(ꜱɪɢɴ.ULTRONIX, `g`);
      var Ultronf = /\/\^\[(.*)+\]\/\g/g.exec(UltronRegex)[1];
      if (!command) {
        return υℓтяσηℓιєηт.sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          {
            url: `https://i.postimg.cc/3RLJz2r2/Invalid.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⚠️𝗜𝗻𝘃𝗮𝗹𝗶𝗱 ᴜʟᴛʀᴏɴ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱*

*No such command found.*
Please Use *${Ultronf}help to get the list of available commands*`,
          }
        );
      } else if (command && ᴜʟᴛʀᴏɴ.commandName == `help`) {
        try {
          return command.handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc, UltronSitrep);
        } catch (cᴇʀʀᴏʀ) {
          return console.log(Kolor.red(`❌⬰ `, cᴇʀʀᴏʀ));
        }
      }
      command.handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc);
    }
  });
}
ᴜʟᴛʀᴏɴRunner().catch((cᴇʀʀᴏʀ) =>
  console.log(Kolor.red(`❌⬰`), Kolor.red(cᴇʀʀᴏʀ))
);
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
