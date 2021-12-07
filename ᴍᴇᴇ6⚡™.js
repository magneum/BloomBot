// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./ᴍᴇᴇ6/Honeycomb-Round.otf`, {
  family: `Honeycomb`,
});
registerFont(`./ᴍᴇᴇ6/LobsterTwo-Bold.ttf`, {
  family: `Lobster`,
});
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ᴍᴇᴇ6ֆʏռօք = require(`./ᴍᴇᴇ6/ᴍᴇᴇ6ᴢᴇɴ`);
const ℓιєηт = require("./ᴍᴇᴇ6/catch");
const vers = require(`./package.json`);
const clientult = require(`./ᴍᴇᴇ6/ɠɠʊ`);
const gitPull = require(`./ᴍᴇᴇ6/ᴍᴇᴇ6ɢɪᴛ`);
const ɠɠᴍᴇᴇ6 = require(`./ᴍᴇᴇ6/ɠɠᴍᴇᴇ6`);
const ᴍᴇᴇ6Sudo = [`block`, `unblock`];
const ᴍᴇᴇ6ǟքք = require(`./ᴍᴇᴇ6/helper`);
const download = require(`download-file`);
const ꜱɪɢɴ = require(`./ᴍᴇᴇ6/ꜱɪɢɴ`);
const Kolor = require(`chalk`);
const ᴍᴇᴇ6sql = ꜱɪɢɴ.POSTQL;
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
  `*ᴡɪʟʟ ʙᴇ ᴍɪꜱꜱᴇᴅ.*`,
  `*ᴊᴜꜱᴛ ᴡᴇɴᴛ ᴏꜰꜰʟɪɴᴇ.*`,
  `*ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ʟᴏʙʙʏ.*`,
  `*ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ᴄʟᴀɴ.*`,
  `*ʜᴀꜱ ʟᴇꜰᴛ ᴛʜᴇ ɢᴀᴍᴇ.*`,
  `*ʜᴀꜱ ꜰʟᴇᴅ ᴛʜᴇ ᴀʀᴇᴀ.*`,
  `*ɴɪᴄᴇ ᴋɴᴏᴡɪɴɢ ʏᴀ!*`,
  `*ɪᴛ ᴡᴀꜱ ᴀ ꜰᴜɴ ᴛɪᴍᴇ.*`,
  `*ɪ ᴅᴏɴᴜᴛ ᴡᴀɴᴛ ᴛᴏ ꜱᴀʏ ɢᴏᴏᴅʙʏᴇ.*`,
  `*ᴡᴇ ʜᴏᴘᴇ ᴛᴏ ꜱᴇᴇ ʏᴏᴜ ᴀɢᴀɪɴ ꜱᴏᴏɴ.*`,
  `*ʏᴏᴜ'ʀᴇ ʟᴇᴀᴠɪɴɢ, ? ʏᴀʀᴇ ʏᴀʀᴇ ᴅᴀᴢᴇ.*`,
  `*ɢᴏᴏᴅʙʏᴇ ! ɢᴜᴇꜱꜱ ᴡʜᴏ'ꜱ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ :')*`,
  `*ɢᴏᴏᴅʙʏᴇ ! ɪᴛ'ꜱ ɢᴏɴɴᴀ ʙᴇ ʟᴏɴᴇʟʏ ᴡɪᴛʜᴏᴜᴛ ʏᴀ.*`,
  `*ᴘʟᴇᴀꜱᴇ ᴅᴏɴ'ᴛ ʟᴇᴀᴠᴇ ᴍᴇ ᴀʟᴏɴᴇ ɪɴ ᴛʜɪꜱ ᴘʟᴀᴄᴇ!*`,
  `*ɢᴏᴏᴅ ʟᴜᴄᴋ ꜰɪɴᴅɪɴɢ ʙᴇᴛᴛᴇʀ ꜱʜɪᴛ-ᴘᴏꜱᴛᴇʀꜱ ᴛʜᴀɴ ᴜꜱ!*`,
  `*ʏᴏᴜ ᴋɴᴏᴡ ᴡᴇ'ʀᴇ ɢᴏɴɴᴀ ᴍɪꜱꜱ ʏᴏᴜ . ʀɪɢʜᴛ? ʀɪɢʜᴛ? ʀɪɢʜᴛ?*`,
  `*ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴꜱ, ! ʏᴏᴜ'ʀᴇ ᴏꜰꜰɪᴄɪᴀʟʟʏ ꜰʀᴇᴇ ᴏꜰ ᴛʜɪꜱ ᴍᴇꜱꜱ.*`,
];
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
var υℓтяσηℓιєηт = ᴍᴇᴇ6ֆʏռօք.WhatsApp;
async function ᴍᴇᴇ6s() {
  var Mee6Sitrep = new Map();
  if (ꜱɪɢɴ.HEROKU_API === `Null` || ꜱɪɢɴ.HEROKU_BOT_NAME === `Null`) {
    console.log(
      Kolor.yellow(
        `❌⬰ seems like heroku vars are invalid.\nPlease check and retry.`
      )
    );
    process.exit(0);
  }
  console.log(
    Kolor.yellow(`=================😈    |  ᴍᴇᴇ6  |    😈=================`)
  );
  console.log(Kolor.yellow(`[INFO] Checking for updates...`));
  await gitPull();
  try {
    var session = ᴍᴇᴇ6ֆʏռօք.Mee6reignite(ꜱɪɢɴ.Mee6);
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
  // 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
  // ===============================================================================
  υℓтяσηℓιєηт.on(`connecting`, async () => {
    console.log(
      Kolor.yellow(`=================😈    |  ᴍᴇᴇ6  |    😈=================`)
    );
    console.log(Kolor.yellow(`💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱...🤖`));
  });
  // ===============================================================================
  // 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
  // ===============================================================================
  υℓтяσηℓιєηт.on(`open`, async () => {
    console.log(
      Kolor.yellow(`=================😈    |  ᴍᴇᴇ6  |    😈=================`)
    );
    console.log(Kolor.yellow(`💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦...✅`));
    try {
      await ᴍᴇᴇ6sql.authenticate();
    } catch (error) {
      console.error(`❌⬰ Unable to connect to the database:`, error);
    }
    console.log(
      Kolor.yellow(`=================😈    |  ᴍᴇᴇ6  |    😈=================`)
    );
    console.log(Kolor.yellow(`💡⬰  𝘚𝘺𝘯𝘤𝘪𝘯𝘨 𝘋𝘢𝘵𝘢 𝘸𝘪𝘵𝘩 𝘏𝘰𝘴𝘵...✅`));
    await ᴍᴇᴇ6sql.sync();
    console.clear();
    console.log(
      Kolor.yellow(
        `\n\n\n\n\n\n=================😈    |  ᴍᴇᴇ6  |    😈=================`
      )
    );
    console.log(Kolor.yellow(`💡⬰  𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘪𝘯𝘨 𝘗𝘭𝘶𝘨𝘪𝘯𝘴...✅`));
    const Folders = fs.readdirSync(`./мєє🛸ѕєєкѕ`);
    for (const folder of Folders) {
      const commandFiles = fs
        .readdirSync(`./мєє🛸ѕєєкѕ/${folder}`)
        .filter((file) => file.endsWith(`.js`));
      for (const file of commandFiles) {
        const command = require(`./мєє🛸ѕєєкѕ/${folder}/${file}`);
        Mee6Sitrep.set(command.name, command);
        console.log(
          Kolor.yellow(`💡⬰  `),
          Kolor.green(command.name.toUpperCase())
        );
      }
    }
    console.log(
      Kolor.green(
        `\n\n\n=================😈    |  ᴍᴇᴇ6  |    😈=================`
      ),
      Kolor.blue(`
      ███    ███ ███████ ███████  ███████  
      ████  ████ ██      ██       ██       
      ██ ████ ██ █████   █████    ███████  
      ██  ██  ██ ██      ██       ██   ██ 
      ██      ██ ███████ ███████  ███████     
`),
      Kolor.green(`=================😈    |  ᴍᴇᴇ6  |    😈=================`)
    );
    await υℓтяσηℓιєηт.sendMessage(
      υℓтяσηℓιєηт.user.jid,
      {
        url: `https://i.postimg.cc/d0yKmR0t/Mee6.png`,
      },
      MessageType.image,
      {
        mimetype: Mimetype.png,
        caption: `*⚡𝐌𝐞𝐞𝟔™ 𝗶𝘀 𝗥𝗲𝗮𝗱𝘆!*

⚙️𝗩𝗲𝗿𝘀𝗶𝗼𝗻: 
￫ ${vers.vers}


💻 𝗪𝗵𝗮𝘁 𝗖𝗮𝗻 𝐌𝐞𝐞𝟔™ 𝗗𝗼???
⧪ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
⧪ ᴍᴇᴇ6 ɪꜱ ᴡʀɪᴛᴛᴇɴ ɪɴ ᴊᴀᴠᴀꜱᴄʀɪᴘᴛ ᴀɴᴅ ɪꜱ ʙʏ ꜰᴀʀ ᴛʜᴇ ᴍᴏꜱᴛ ᴀᴅᴠᴀɴᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ.
⧪ ᴜꜱᴇ ᴍᴇᴇ6 ɪɴ ʙᴏᴛʜ ᴘᴜʙʟɪᴄ-ɢʀᴏᴜᴘꜱ ᴀɴᴅ ᴘʀɪᴠᴀᴛᴇ
⧪ ꜱᴏ ᴍᴀɴʏ ᴄᴏᴍᴍᴀɴᴅꜱ ᴛʜᴀᴛ ᴡɪʟʟ ʙʟᴏᴡ ᴜᴘ ᴛʜᴇ ᴇᴠᴇʀʏ-ᴅᴀʏ ᴜꜱᴇ ᴏꜰ ʙᴏʀɪɴɢ ᴡʜᴀᴛꜱᴀᴘᴘ.


❣️𝗙𝗼𝗿 𝗺𝗼𝗿𝗲 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻 𝗙𝗼𝗹𝗹𝗼𝘄 𝘁𝗵𝗲𝘀𝗲 𝗜𝗺𝗽-𝗟𝗶𝗻𝗸𝘀:
⧪ ᴡʜᴀᴛꜱᴀᴘᴘ: https://chat.whatsapp.com/FmMcEeSqZQw85qAkgUs3f5 (RΣPӨЯƬ)
⧪ ɢɪᴛʜᴜʙ:  https://github.com/Krakinz
⧪ ᴅɪꜱᴄᴏʀᴅ:  https://discord.gg/xcFN6NDHEV`,
      }
    );
  });
  // ===============================================================================
  // 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
  // ===============================================================================
  await υℓтяσηℓιєηт.connect();
  υℓтяσηℓιєηт.on(`group-participants-update`, async (update) => {
    console.log(update);
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
        var enable = await ɠɠᴍᴇᴇ6.checkSettings(GroupID, `setwelcome`);
        if (enable === false || enable === `OFF`) {
          return;
        }

        var Fetched = await ɠɠᴍᴇᴇ6.getMessage(GroupID, `setwelcome`);
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
        var enable = await ɠɠᴍᴇᴇ6.checkSettings(GroupID, `setgoodbye`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        var Fetched = await ɠɠᴍᴇᴇ6.getMessage(GroupID, `setgoodbye`);
      }
    } catch (cᴇʀʀᴏʀ) {
      console.log(cᴇʀʀᴏʀ);
    }
  });
  // ===============================================================================
  // 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
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
    var ᴍᴇᴇ6 = ᴍᴇᴇ6ǟքք.resolve(chat, υℓтяσηℓιєηт, groupMetadata);
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
    var Mee6Regex = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
    var Mee6f = /\/\^\[(.*)+\]\/\g/g.exec(Mee6Regex)[1];
    if (ᴍᴇᴇ6.chatId === "120363025343298860@g.us") {
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.MEE,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⚡𝐌𝐞𝐞𝟔™* | 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 |
⬡=======================⬡
➛ɪ ᴀᴍ ᴍʀ ᴍᴇᴇ6, ʟᴏᴏᴋ ᴀᴛ ᴍᴇ!
➛ɪ ᴀᴍ ᴅɪꜱᴀʙʟᴇᴅ ɪɴ ᴛʜɪꜱ ɢʀᴏᴜᴘ

➛ᴛᴏ ᴜꜱᴇ ᴍʏ ᴄᴏᴍᴍᴀɴᴅꜱ ᴘʟᴇᴀꜱᴇ 
➛ɢᴏ ɪɴ ᴘʀɪᴠᴀᴛᴇ ᴏʀ ᴀɴʏ ᴏᴛʜᴇʀ ɢʀᴏᴜᴘꜱ.

⧪𝗠𝘆 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗔𝗹𝗹𝗼𝘄𝗲𝗱 𝗛𝗲𝗿𝗲⧪
  *⬡${Mee6f}ping
  *⬡${Mee6f}update
  *⬡${Mee6f}nekobin
  *⬡${Mee6f}help
  *⬡${Mee6f}uptime
⬡=======================⬡`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      return;
    }
    if (ᴍᴇᴇ6.isCmd && !ᴍᴇᴇ6.fromMe) {
      if (
        adminmodls.indexOf(ᴍᴇᴇ6.commandName) >= 0 &&
        !ᴍᴇᴇ6.isSenderGroupAdmin
      ) {
        return υℓтяσηℓιєηт.sendMessage(
          ᴍᴇᴇ6.chatId,
          `You need to be an admin to execute this command.`,
          MessageType.text
        );
      } else if (ᴍᴇᴇ6Sudo.indexOf(ᴍᴇᴇ6.commandName) >= 0) {
        var messageSent = await clientult.getUser(ᴍᴇᴇ6.chatId);
        if (messageSent) {
          return console.log(
            Kolor.blue(
              `💡⬰  Promo message had already been sent to ` + ᴍᴇᴇ6.chatId
            )
          );
        } else {
          await clientult.addUser(ᴍᴇᴇ6.chatId);
          return υℓтяσηℓιєηт.sendMessage(
            ᴍᴇᴇ6.chatId,
            `ᴍᴇᴇ6 is Alive!.
I guess you were trying to use my commands in *${ᴍᴇᴇ6.groupName}*. However, the bot is currently in ${worktype} mode. 
This enables only the owner and sudo clientult to use the command *${commandName}* .
If you are keen to use my features, you can deploy ᴍᴇᴇ6 on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
            {
              worktype: `public`,
              groupName: ᴍᴇᴇ6.groupName ? ᴍᴇᴇ6.groupName : `private chat`,
              commandName: ᴍᴇᴇ6.commandName,
            },
            MessageType.text,
            {
              contextInfo: {
                stanzaId: chat.key.id,
                participant: ᴍᴇᴇ6.sender,
                quotedMessage: {
                  conversation: ᴍᴇᴇ6.body,
                },
              },
            }
          );
        }
      }
    }
    // ===============================================================================
    // 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
    // ===============================================================================
    if (ᴍᴇᴇ6.isCmd) {
      console.log(
        Kolor.green(`💡⬰  ${ᴍᴇᴇ6.commandName.toUpperCase()} command executed.`)
      );
      const command = Mee6Sitrep.get(ᴍᴇᴇ6.commandName);
      var Arc = ᴍᴇᴇ6.body.trim().split(/\s+/).slice(1);
      var Mee6Regex = new RegExp(ꜱɪɢɴ.Mee6IX, `g`);
      var Mee6f = /\/\^\[(.*)+\]\/\g/g.exec(Mee6Regex)[1];
      if (!command) {
        return υℓтяσηℓιєηт
          .sendMessage(
            ᴍᴇᴇ6.chatId,
            {
              url: ꜱɪɢɴ.INVL,
            },
            MessageType.image,
            {
              mimetype: Mimetype.png,
              caption: `*⚠️𝗜𝗻𝘃𝗮𝗹𝗶𝗱 ᴍᴇᴇ6 𝗖𝗼𝗺𝗺𝗮𝗻𝗱*

*No such command found.*
Please Use *${Mee6f}help to get the list of available commands*`,
            }
          )
          .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
      } else if (command && ᴍᴇᴇ6.commandName == `help`) {
        try {
          return command.handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc, Mee6Sitrep);
        } catch (cᴇʀʀᴏʀ) {
          return console.log(Kolor.red(`❌⬰ `, cᴇʀʀᴏʀ));
        }
      }
      command.handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc);
    }
  });
}
ᴍᴇᴇ6s().catch((cᴇʀʀᴏʀ) => console.log(Kolor.red(`❌⬰`), Kolor.red(cᴇʀʀᴏʀ)));
// ===============================================================================
// 🎮ᴍᴇᴇ6™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ
// ===============================================================================
