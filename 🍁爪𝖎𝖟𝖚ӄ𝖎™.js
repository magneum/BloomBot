// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
//    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const LetGoChecker = require("./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/LetGoChecker");
const 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/𝓜𝖎𝖟𝖚ӄ𝖎ᴢᴇɴ`);
const AutoKrakz = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/𝓜𝖎𝖟𝖚ӄ𝖎ɢɪᴛ`);
const LinkList = require("./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/LinkList");
const 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/helper`);
const welbuts = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/welbuts`);
const BanList = require("./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/BanList");
const postDb = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/postDb`);
const _𝔏𝔞𝔟_ = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const download = require(`download-file`);
const ascii = require(`ascii-table`);
const Kolor = require(`chalk`);
const yes_no = _𝔏𝔞𝔟_.Krakinz;
const vers = require(`./package.json`);
const 𝓜𝖎𝖟𝖚ӄ𝖎sql = _𝔏𝔞𝔟_.POSTQL;
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
console.clear();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var ӄʀǟӄɨռʐ = 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք.WhatsApp;
const ᴍɪᴢᴜᴋɪᴛᴀʙʟᴇ = new ascii().setHeading(`🍁𝐂𝐨𝐦𝐦𝐚𝐧 𝐍𝐚𝐦𝐞🍁`, `🍁𝐇𝐞𝐚𝐥𝐭𝐡🍁`);
ӄʀǟӄɨռʐ.logger.level = `error`;
async function 𝐌𝐢𝐳𝐮𝐤𝐢() {
  var ꜱɪᴛʀᴀᴘ = new Map();
  var commandUsage = new Map();
  console.log(Kolor.yellow(`💡INFO ⬰ 𝐒𝐲𝐦𝐥𝐢𝐧𝐤𝐢𝐧𝐠 𝐖𝐢𝐭𝐡 𝐌𝐢𝐳𝐮𝐤𝐢 𝐒𝐲𝐬𝐭𝐞𝐦...\n✔️`));
  function loadCommands() {
    const ᴍɪᴢᴜᴋɪᴅᴇʀꜱ = fs.readdirSync(`./ʍɨʐʊӄɨ🍬ֆʏʍʟɨռӄɛʀֆ`);
    for (const ʜᴏʟᴅᴇʀ of ᴍɪᴢᴜᴋɪᴅᴇʀꜱ) {
      const commandFiles = fs
        .readdirSync(`./ʍɨʐʊӄɨ🍬ֆʏʍʟɨռӄɛʀֆ/${ʜᴏʟᴅᴇʀ}`)
        .filter((ᴍɪꜱᴏ) => ᴍɪꜱᴏ.endsWith(`.js`));
      for (const ᴍɪꜱᴏ of commandFiles) {
        const command = require(`./ʍɨʐʊӄɨ🍬ֆʏʍʟɨռӄɛʀֆ/${ʜᴏʟᴅᴇʀ}/${ᴍɪꜱᴏ}`);
        ꜱɪᴛʀᴀᴘ.set(command.name, command);
        commandUsage.set(command.𝓜𝓮𝓮6ʍօʀɛ, command.description);
        ᴍɪᴢᴜᴋɪᴛᴀʙʟᴇ.addRow(
          Kolor.green.bold(command.name.toUpperCase()),
          `✔️   𝘚𝘺𝘮-𝘓𝘪𝘯𝘬𝘦𝘥`
        );
      }
      console.log(ᴍɪᴢᴜᴋɪᴛᴀʙʟᴇ.toString());
    }
  }
  console.clear();
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  if (_𝔏𝔞𝔟_.HEROKU_API === `Null` || _𝔏𝔞𝔟_.HEROKU_BOT_NAME === `Null`) {
    console.log(
      Kolor.yellow(
        `❌ERROR ⬰  𝐒𝐞𝐞𝐦𝐬 𝐥𝐢𝐤𝐞 𝐇𝐞𝐫𝐨𝐤𝐮 𝐯𝐚𝐫𝐬 𝐚𝐫𝐞 𝐢𝐧𝐯𝐚𝐥𝐢𝐝.𝐏𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐚𝐧𝐝 𝐫𝐞𝐭𝐫𝐲!`
      )
    );
    process.exit(0);
  }
  console.log(
    Kolor.yellow(
      `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
    )
  );
  console.log(Kolor.yellow(`💡INFO ⬰ 𝐂𝐡𝐞𝐜𝐤𝐢𝐧𝐠 𝐅𝐨𝐫 𝐌𝐢𝐳𝐮𝐤𝐢 𝐔𝐩𝐝𝐚𝐭𝐞𝐬...\n✔️`));
  // if (yes_no === `Null`) {
  //   await AutoKrakz();
  // }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  try {
    var session = 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք.Mee6reignite(_𝔏𝔞𝔟_.Mee6);
    ӄʀǟӄɨռʐ.loadAuthInfo(session);
  } catch (ℓαвєяяσя) {
    if (
      ℓαвєяяσя instanceof Typeℓαвєяяσя ||
      ℓαвєяяσя.message === `given authInfo is null` ||
      ℓαвєяяσя instanceof Syntaxℓαвєяяσя
    ) {
      console.log(
        Kolor.red(`𝗜𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁 𝗦𝗲𝘀𝘀𝗶𝗼𝗻 𝗦𝘁𝗿𝗶𝗻𝗴. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗮𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗲 𝗮𝗴𝗮𝗶𝗻!`)
      );
      process.exit(0);
    } else {
      console.log(Kolor.red(`SOMETHING WENT WRONG.\n`));
      process.exit(0);
    }
  }
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`connecting`, async () => {
    console.log(
      Kolor.yellow(
        `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
      )
    );
    console.log(Kolor.yellow(`💡INFO ⬰ 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠 𝐖𝐢𝐭𝐡 𝐘𝐨𝐮𝐫 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩...🛸`));
    console.log(Kolor.yellow(`💡INFO ⬰ 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝...✔️`));
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`open`, async () => {
    console.log(
      Kolor.yellow(
        `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
      )
    );
    console.log(Kolor.green(`💡INFO ⬰ 𝐋𝐢𝐧𝐤𝐢𝐧𝐠 𝐌𝐢𝐳𝐮𝐤𝐢 𝐖𝐢𝐭𝐡 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞...✔️`));
    try {
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql.authenticate();
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql.validate();
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql
        .sync()
        .then(console.log(Kolor.yellow(`💡INFO ⬰ 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝...✔️`)));
    } catch (ℓαвєяяσя) {
      console.ℓαвєяяσя(
        `❌ERROR ⬰  𝗨𝗻𝗮𝗯𝗹𝗲 𝘁𝗼 𝗰𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲:`,
        ℓαвєяяσя
      );
    }
    console.clear();
    console.log(
      Kolor.red(`
⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡
███╗   ███╗██╗███████╗██╗   ██╗██╗  ██╗██╗
████╗ ████║██║╚══███╔╝██║   ██║██║ ██╔╝██║
██╔████╔██║██║  ███╔╝ ██║   ██║█████╔╝ ██║
██║╚██╔╝██║██║ ███╔╝  ██║   ██║██╔═██╗ ██║
██║ ╚═╝ ██║██║███████╗╚██████╔╝██║  ██╗██║
╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝
⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`)
    );
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (yes_no === `Null`) {
      await ӄʀǟӄɨռʐ.sendMessage(
        ӄʀǟӄɨռʐ.user.jid,
        {
          url: _𝔏𝔞𝔟_.MEE,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

シ︎💡ᴘʀᴇꜰɪx: ${ᴋᴇɪ}
シ︎🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}`,
        }
      );
    } else {
      console.log(
        Kolor.blue
          .italic`🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 ⬡==========================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛-𝐃𝐞𝐯-𝐌𝐨𝐝𝐞 🍁`
      );
    }
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  await ӄʀǟӄɨռʐ.connect().then(loadCommands());
  ӄʀǟӄɨռʐ.on(`group-update`, async (update) => {
    groupupdateID = await ӄʀǟӄɨռʐ.groupMetadata(update.jid);
    if (update.announce == `false`) {
      ӄʀǟӄɨռʐ
        .sendMessage(
          groupupdateID.id,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

*<○ ${groupupdateID.subject} Opened ○>*
Group has been opened by admin Now all members can send messages`,
          MessageType.text
        )
        .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } else if (update.announce == `true`) {
      ӄʀǟӄɨռʐ
        .sendMessage(
          groupupdateID.id,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

*<○ ${groupupdateID.subject} 𝗖𝗹𝗼𝘀𝗲𝗱 ○>*
ɢʀᴏᴜᴘ ʜᴀꜱ ʙᴇᴇɴ ᴄʟᴏꜱᴇᴅ ʙʏ ᴀᴅᴍɪɴ ɴᴏᴡ ᴏɴʟʏ ᴀᴅᴍɪɴ ᴄᴀɴ ꜱᴇɴᴅ ᴍᴇꜱꜱᴀɢᴇꜱ`,
          MessageType.text
        )
        .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } else if (!update.desc == ``) {
      tag = update.descOwner.split(`@`)[0] + `@s.whatsapp.net`;
      ӄʀǟӄɨռʐ
        .sendMessage(
          groupupdateID.id,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

*<○ ${groupupdateID.subject} 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ○>*
• 𝙶𝚛𝚘𝚞𝚙 𝚍𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗 𝚑𝚊𝚜 𝚋𝚎𝚎𝚗 𝚌𝚑𝚊𝚗𝚐𝚎𝚍 𝚋𝚢:@${update.descOwner.split(`@`)[0]}

• 𝙽𝚎𝚠 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: 
${update.desc}`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [tag],
            },
          }
        )
        .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } else if (update.restrict == `false`) {
      ӄʀǟӄɨռʐ
        .sendMessage(
          groupupdateID.id,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

*<○ ${groupupdateID.subject} 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖h𝗮𝗻𝗴𝗲 ○>*
ᴇᴅɪᴛ ɢʀᴏᴜᴘ ɪɴꜰᴏ ʜᴀꜱ ʙᴇᴇɴ ᴏᴘᴇɴᴇᴅ ꜰᴏʀ ᴍᴇᴍʙᴇʀꜱ ɴᴏᴡ ᴀʟʟ ᴍᴇᴍʙᴇʀꜱ ᴄᴀɴ ᴇᴅɪᴛ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪɴꜰᴏ`,
          MessageType.text,
          {}
        )
        .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } else if (update.restrict == `true`) {
      ӄʀǟӄɨռʐ
        .sendMessage(
          groupupdateID.id,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

*<○ ${groupupdateID.subject} 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ○>*
ɢʀᴏᴜᴘ ɪɴꜰᴏ ʜᴀꜱ ʙᴇᴇɴ ᴄʟᴏꜱᴇᴅ ꜰᴏʀ ᴍᴇᴍʙᴇʀꜱ ɴᴏᴡ ᴏɴʟʏ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ ᴄᴀɴ ᴇᴅɪᴛ ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪɴꜰᴏ`,
          MessageType.text,
          {}
        )
        .catch((ℓαвєяяσя) => console.log(Kolor.redBright(ℓαвєяяσя)));
    }
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`group-participants-update`, async (update) => {
    var GroupID = update.jid;
    const GroupMemData = await ӄʀǟӄɨռʐ.groupMetadata(update.jid);
    const GroupMemG = GroupMemData.participants.length;
    const GroupMemBio = await ӄʀǟӄɨռʐ.getStatus(
      update.participants[0],
      MessageType.text
    );
    const MemNum = update.participants[0];
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (update.action == `add` && MemNum.includes(ӄʀǟӄɨռʐ.user.jid)) {
      console.log(`⬡••••••••⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁Added    ⬡••••••••⬡`);
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          GroupID,
          fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`),
          MessageType.video,
          {
            mimetype: `video/gif`,
            caption: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

🔑𝐏𝐫𝐞𝐟𝐢𝐱: *!*
👑𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_

𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 ᴇᴠᴇʀʏᴏɴᴇ, ʀᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ʜᴇʀᴇ
ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ *${ᴋᴇɪ}help* ᴛᴏ ᴋɴᴏᴡ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ!`,
          }
        )
        .then(console.log(Kolor.green(GroupID)))
        .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (update.action === `add` && !MemNum.includes(ӄʀǟӄɨռʐ.user.jid)) {
      var enable = await postDb.checkSettings(GroupID, `setwelcome`);
      if (enable === false || enable === `OFF`) {
        return;
      } else {
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        return welbuts
          .welbuts(
            ӄʀǟӄɨռʐ,
            GroupID,
            GroupMemData,
            GroupMemG,
            GroupMemBio,
            MemNum
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
      }
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (update.action === `remove`) {
      return;
    }
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`chat-update`, async (chat) => {
    console.log(chat);
    console.log(
      Kolor.yellow(
        `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
      )
    );
    if (!chat.hasNewMessage) return;
    if (!chat.messages) return;
    chat = chat.messages.all()[0];
    var sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`)
      ? await ӄʀǟӄɨռʐ.groupMetadata(sender)
      : ``;
    var 𝓜𝖎𝖟𝖚ӄ𝖎 = 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք.resolve(chat, ӄʀǟӄɨռʐ, groupMetadata);
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    let CheckBans = await BanList.getBanlistUser(𝓜𝖎𝖟𝖚ӄ𝖎.sender, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
    const letGos = await LetGoChecker(𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckBans);
    if (!letGos) {
      return;
    } else {
      if (
        𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
        !𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(_𝔏𝔞𝔟_.HASH) &&
        𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`https://chat.whatsapp.com/`)
      ) {
        const REMOVE = chat.key.fromMe
          ? ӄʀǟӄɨռʐ.user.jid
          : 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
          ? chat.participant
          : chat.key.remoteJid;
        let CheckLinks = await LinkList.getLinklistUser(
          𝓜𝖎𝖟𝖚ӄ𝖎.sender,
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId
        );
        if (CheckLinks === true) {
          await ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*


•──[ Message From Admins  ]──•
┌────⭓ 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤🐙𝐀𝐜𝐭𝐢𝐯𝐞
│ 😑Baka 𝘺𝘰𝘶 𝘸𝘪𝘭𝘭 𝘣𝘦 𝗔𝘂𝘁𝗼-𝗞𝗶𝗰𝗸𝗲𝗱!
└──────⭓`,
            MessageType.text
          );

          await ӄʀǟӄɨռʐ.groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [REMOVE]);

          console.log(
            Kolor.greenBright(
              `💡INFO ⬰ Antilink ${CheckLinks} in > ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}.`
            )
          );
        } else if (CheckLinks === false) {
          console.log(
            Kolor.redBright(
              `💡INFO ⬰ Antilink is ${CheckLinks} in > ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}.`
            )
          );
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isCmd) {
        // 120363039360979234@g.us
        console.log(
          Kolor.yellow(
            `💡INFO ⬰ ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName} Executed By ${𝓜𝖎𝖟𝖚ӄ𝖎.sender}`
          )
        );
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
        await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
        var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
          `KrakinzLab..origin/KrakinzLab`,
        ]);
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
          try {
            const mergeSummary = await git.merge();
            console.log(`Merged ${mergeSummary.merges.length} files`);
          } catch (err) {
            console.error(
              `Merge resulted in ${err.git.conflicts.length} conflicts`
            );
          }

          require("simple-git")()
            .exec(async () => {
              await ӄʀǟӄɨռʐ.sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `*🍁爪𝖎𝖟𝖚ӄ𝖎™*

*• Bot Auto-Udated!*
*• New Version: *🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*
*• Total New Commits:* ${ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total}`,
                MessageType.text
              );
              console.log(
                Kolor.blue.bold(
                  "⬡==========================⬡    🍁Starting Mizuki pull..."
                )
              );
            })
            .pull((err, update) => {
              if (update && update.summary.changes) {
                var child = require("child_process").exec("node 🍁爪𝖎𝖟𝖚ӄ𝖎™.js");
                child.stdout.pipe(process.stdout);
                child.on("exit", async function () {
                  process.exitCode = 1;
                });
              }
            });
        } else {
          console.log(
            "⬡==========================⬡    🍁Already Udated to Latest Version!"
          );
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        const command = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        var arg = 𝓜𝖎𝖟𝖚ӄ𝖎.body.trim().split(/\s+/).slice(1);
        var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
        var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (!command) {
          let content = fs.readFileSync(`./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Invalid.png`);
          const media = await ӄʀǟӄɨռʐ.prepareMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            content,
            MessageType.image,
            {
              mimetype: Mimetype.png,
            }
          );
          return await ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              contentText: `𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗖𝗼𝗺𝗺𝗮𝗻𝗱

*😑Baka* @${ꜱᴇɴᴅᴇʀeceived},Type *${ᴋᴇɪ}help*`,
              footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}list`,
                  buttonText: { displayText: `${ᴋᴇɪ}list` },
                  type: 1,
                },
                {
                  buttonId: `${ᴋᴇɪ}list`,
                  buttonText: { displayText: `${ᴋᴇɪ}list` },
                  type: 1,
                },
              ],
              headerType: 4,
              imageMessage: media.message.imageMessage,
            },
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          );
        }
        return command.handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ);
      }
    }
  });
}
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
𝐌𝐢𝐳𝐮𝐤𝐢().catch((ℓαвєяяσя) =>
  console.log(Kolor.red(`❌ERROR ⬰ `), Kolor.red(ℓαвєяяσя))
);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
