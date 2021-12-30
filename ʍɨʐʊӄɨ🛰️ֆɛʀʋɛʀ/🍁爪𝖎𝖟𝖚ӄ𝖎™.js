// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Mizuki_Buttons = require(`./Mizuki_Buttons`);
const Mizuki_Static = require(`./Mizuki_Static`);
const LetGoChecker = require(`./LetGoChecker`);
const 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք = require(`./𝓜𝖎𝖟𝖚ӄ𝖎ᴢᴇɴ`);
const AutoKrakz = require(`./𝓜𝖎𝖟𝖚ӄ𝖎ɢɪᴛ`);
const speed = require(`performance-now`);
const LinkList = require(`./LinkList`);
const { ʄǟռƈʏ } = require(`../ʄǟռƈʏ`);
const 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք = require(`./helper`);
const welbuts = require(`./welbuts`);
const BanList = require(`./BanList`);
const postDb = require(`./postDb`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const Kolor = require(`chalk`);
const yes_no = _𝔏𝔞𝔟_.Krakinz;
let Timestamp = speed();
const Ping = speed() - Timestamp;
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
const 𝓜𝖎𝖟𝖚ӄ𝖎sql = _𝔏𝔞𝔟_.POSTQL;
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
console.clear();
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
var ӄʀǟӄɨռʐ = 𝓜𝖎𝖟𝖚ӄ𝖎ֆʏռօք.WhatsApp;
ӄʀǟӄɨռʐ.logger.level = `error`;
async function 爪𝖎𝖟𝖚ӄ𝖎() {
  var ꜱɪᴛʀᴀᴘ = new Map();
  var commandUsage = new Map();
  console.log(Kolor.yellow(`💡INFO ⬰ 𝐒𝐲𝐦𝐥𝐢𝐧𝐤𝐢𝐧𝐠 𝐖𝐢𝐭𝐡 𝐌𝐢𝐳𝐮𝐤𝐢 𝐒𝐲𝐬𝐭𝐞𝐦...\n✔️`));
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
  console.log(Kolor.yellow(`💡INFO ⬰ Checking For 🍁爪𝖎𝖟𝖚ӄ𝖎™Updates ...\n✔️`));
  await AutoKrakz();
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
    console.log(
      Kolor.yellow(`💡INFO ⬰ Connecting to 🍁爪𝖎𝖟𝖚ӄ𝖎™ Whatsapp...🛸`)
    );
    console.log(Kolor.yellow(`💡INFO ⬰ 🍁爪𝖎𝖟𝖚ӄ𝖎™ Connected✔️`));
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`open`, async () => {
    console.log(
      Kolor.yellow(
        `⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡`
      )
    );
    console.log(
      Kolor.green.italic(`💡INFO ⬰ 𝐋𝐢𝐧𝐤𝐢𝐧𝐠 𝐌𝐢𝐳𝐮𝐤𝐢 𝐖𝐢𝐭𝐡 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞...✔️`)
    );
    try {
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql.authenticate();
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql.validate();
      await 𝓜𝖎𝖟𝖚ӄ𝖎sql
        .sync()
        .then(console.log(Kolor.yellow(`💡INFO ⬰ 🍁爪𝖎𝖟𝖚ӄ𝖎™ Connected✔️`)));
    } catch (ℓαвєяяσя) {
      console.ℓαвєяяσя(
        `❌ERROR ⬰  𝗨𝗻𝗮𝗯𝗹𝗲 𝘁𝗼 𝗰𝗼𝗻𝗻𝗲𝗰𝘁 𝘁𝗼 𝘁𝗵𝗲 𝗱𝗮𝘁𝗮𝗯𝗮𝘀𝗲:`,
        ℓαвєяяσя
      );
    }
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
    const ᴍɪᴢᴜᴋɪɢɪ = require(`simple-git`)();
    await ᴍɪᴢᴜᴋɪɢɪ.fetch();
    var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋ = await ᴍɪᴢᴜᴋɪɢɪ.log([`KrakinzLab..origin/KrakinzLab`]);
    await ӄʀǟӄɨռʐ.sendMessage(
      ӄʀǟӄɨռʐ.user.jid,
      {
        url: _𝔏𝔞𝔟_.MEE,
      },
      MessageType.image,
      {
        mimetype: Mimetype.png,
        caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭 _${vers.vers}_

┌━━━━━━━◆➤
│💡ᴘʀᴇꜰɪx: ${ᴋᴇɪ}
│🛰️𝐏𝐢𝐧𝐠: ${Ping.toFixed(4)}s
│📅𝐃𝐚𝐭𝐞: ${Clock}
│🛸𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}
│💀 𝐎𝐥𝐝 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.verold}_
│🧈 𝐍𝐞𝐰 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_
│🧃 𝐍𝐞𝐰 𝐔𝐩𝐝𝐚𝐭𝐞𝐬: _${ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋ.total}_
└───────〇`,
      }
    );
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  await ӄʀǟӄɨռʐ.connect().then(ʄǟռƈʏ(ꜱɪᴛʀᴀᴘ, commandUsage));
  ӄʀǟӄɨռʐ.on(`group-update`, async (update) => {
    try {
      const groupupdateID = await ӄʀǟӄɨռʐ.groupMetadata(update.jid);
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (update.announce == `false`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*

┌━━━━━━━◆➤
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Open For All*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘰𝘱𝘦𝘯𝘦𝘥 𝘣𝘺 𝘢𝘥𝘮𝘪𝘯 
⬡ 𝘕𝘰𝘸 𝘢𝘭𝘭 𝘮𝘦𝘮𝘣𝘦𝘳𝘴 𝘤𝘢𝘯 𝘴𝘦𝘯𝘥 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (update.announce == `true`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━◆➤
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Admins-Only*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘩𝘢𝘴 𝘣𝘦𝘦𝘯 𝘤𝘭𝘰𝘴𝘦𝘥 𝘣𝘺 𝘈𝘥𝘮𝘪𝘯𝘴
⬡ 𝘕𝘰𝘸 _only_ 𝘈𝘥𝘮𝘪𝘯𝘴 𝘤𝘢𝘯 𝘴𝘦𝘯𝘥 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (!update.desc == ``) {
        tag = update.descOwner.split(`@`)[0] + `@s.whatsapp.net`;
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              contextInfo: {
                mentionedJid: [tag],
              },
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━◆➤
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*New Description Added*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│🍌𝐂𝐡𝐚𝐧𝐠𝐞𝐝 𝐁𝐲: @${update.descOwner.split(`@`)[0]}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

★━━━━━★ 𝐍𝐞𝐰 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 ★━━━━━★
${update.desc}`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (update.restrict == `false`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━◆➤
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Info Edit Allowed For All*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰 𝘌𝘥𝘪𝘵 𝘏𝘢𝘴 𝘉𝘦𝘦𝘯 𝘖𝘱𝘦𝘯𝘦𝘥 𝘍𝘰𝘳 𝘌𝘷𝘦𝘳𝘺𝘰𝘯𝘦
⬡ 𝘕𝘰𝘸 𝘈𝘭𝘭 𝘔𝘦𝘮𝘣𝘦𝘳𝘴 𝘊𝘢𝘯 𝘌𝘥𝘪𝘵 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      } else if (update.restrict == `true`) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            groupupdateID.id,
            { url: `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4` },
            MessageType.video,
            {
              mimetype: `video/gif`,
              caption: `*🍁Attention Here Everyone In the Group!🍁*


┌━━━━━━━◆➤
│⛺𝐆𝐫𝐨𝐮𝐩 𝐒𝐞𝐭𝐭𝐢𝐧𝐠: _*Info Edit Allowed For Admins-Only*_
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupupdateID.subject}
│💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupupdateID.participants.length}
└───────〇

⬡ 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰 𝘌𝘥𝘪𝘵 𝘏𝘢𝘴 𝘉𝘦𝘦𝘯 𝘊𝘭𝘰𝘴𝘦𝘥 𝘍𝘰𝘳 𝘌𝘷𝘦𝘳𝘺𝘰𝘯𝘦
⬡ 𝘕𝘰𝘸 𝘈𝘭𝘭 𝘈𝘥𝘮𝘪𝘯𝘴 𝘊𝘢𝘯 𝘌𝘥𝘪𝘵 𝘎𝘳𝘰𝘶𝘱 𝘐𝘯𝘧𝘰`,
            }
          )
          .catch((ℓαвєяяσя) => console.log(ℓαвєяяσя));
      }
    } catch {}
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`group-participants-update`, async (update) => {
    try {
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
              caption: `\n©️ 𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭\n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                4
              )}s_ 📅ᴅᴀᴛᴇ: _${Clock}_

┌━━━━━━━◆➤
│🔑𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
│🤖ᴀᴅᴅ ᴍɪᴢᴜᴋɪ ɪɴ ʏᴏᴜʀ ɢʀᴏᴜᴘ: _${ᴋᴇɪ}request_
│☣️𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
└───────〇

𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚👋🏻 ᴇᴠᴇʀʏᴏɴᴇ, ʀᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ ʏᴏᴜ ʜᴇʀᴇ
ᴘʟᴇᴀꜱᴇ ᴛʏᴘᴇ *${ᴋᴇɪ}help* ᴛᴏ ᴋɴᴏᴡ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ!`,
            }
          )
          .then(console.log(Kolor.green.italic(GroupID)))
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
    } catch (ℓαвєяяσя) {
      console.log(ℓαвєяяσя);
    }
  });
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  ӄʀǟӄɨռʐ.on(`chat-update`, async (chat) => {
    if (!chat.hasNewMessage) return;
    if (!chat.messages) return;
    console.log(
      "⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡"
    );
    chat = chat.messages.all()[0];
    const sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`)
      ? await ӄʀǟӄɨռʐ.groupMetadata(chat.key.remoteJid)
      : ``;
    var 𝓜𝖎𝖟𝖚ӄ𝖎 = 𝓜𝖎𝖟𝖚ӄ𝖎ǟքք.resolve(chat, ӄʀǟӄɨռʐ, groupMetadata);
    // console.log(𝓜𝖎𝖟𝖚ӄ𝖎);
    console.log(chat);
    console.log(
      "⬡==========================⬡    🍁 爪𝖎𝖟𝖚ӄ𝖎™ 🍁    ⬡==========================⬡"
    );
    if (
      𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
      !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
      !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
      !𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(_𝔏𝔞𝔟_.HASH) &&
      𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`https://chat.whatsapp.com/`)
    ) {
      var CheckLinks = await LinkList.getLinklistUser(
        𝓜𝖎𝖟𝖚ӄ𝖎.sender,
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId
      );
      const REMOVE = chat.key.fromMe
        ? ӄʀǟӄɨռʐ.user.jid
        : 𝓜𝖎𝖟𝖚ӄ𝖎.isGroup
        ? chat.participant
        : chat.key.remoteJid;
      console.log(
        Kolor.green.italic(
          `💡INFO ⬰ Antilink ${CheckLinks} in > ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}.`
        )
      );
      if (CheckLinks === true) {
        Mizuki_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          𝓜𝖎𝖟𝖚ӄ𝖎,
          `•──[ Message From Admins  ]──•
┌────◆➤ 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤🐙𝐀𝐜𝐭𝐢𝐯𝐞
│
│😑Baka 𝘺𝘰𝘶 𝘸𝘪𝘭𝘭 𝘣𝘦 𝗔𝘂𝘁𝗼-𝗞𝗶𝗰𝗸𝗲𝗱!
│🎪𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
└──────◆➤`,
          `./ʍɨʐʊӄɨ☣️ƈօʀɛ/Mizuki_Antilink.png`
        );
        return await ӄʀǟӄɨռʐ
          .groupRemove(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [REMOVE])
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      }
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isCmd) {
      var CheckBans = await BanList.getBanlistUser(
        𝓜𝖎𝖟𝖚ӄ𝖎.sender,
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId
      );
      //const BANNED = await LetGoChecker(𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckBans);
      //console.log(Kolor.red.bold(BANNED));
      console.log(Kolor.red.bold(CheckBans));
      if (CheckBans === true && !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        console.log(Kolor.blue.bold(`💡𝗜𝗻𝗳𝗼 ⬰ Banlisted!`));
        return;
      }
      console.log(
        Kolor.yellow(
          `💡INFO ⬰ ${𝓜𝖎𝖟𝖚ӄ𝖎.commandName} Executed By ${𝓜𝖎𝖟𝖚ӄ𝖎.sender}`
        )
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
        await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
        var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
          `KrakinzLab..origin/KrakinzLab`,
        ]);
        let members = [];
        for (var i = 0; i < 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers.length; i++) {
          members[i] = 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[i].jid;
        }
        // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
          require(`simple-git`)()
            .exec(async () => {
              console.log(
                Kolor.green(
                  `⬡==========================⬡    🍁Starting Mizuki pull...`
                )
              );
              try {
                return Mizuki_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  𝓜𝖎𝖟𝖚ӄ𝖎,
                  `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived},

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*Auto-Update*_
│
│💀 𝐎𝐥𝐝 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_
│🧈 𝐍𝐞𝐰 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.verold}_
│🧃 𝐍𝐞𝐰 𝐔𝐩𝐝𝐚𝐭𝐞𝐬: _${ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total}_
└───────〇`
                );
              } catch (ℓαвєяяσя) {
                ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
              }
            })
            .pull(async (err, update) => {
              if (err) {
                try {
                  const mergeSummary = await ᴍɪᴢᴜᴋɪɢɪᴛ.merge();
                  console.log(`Merged ${mergeSummary.merges.length} files`);
                } catch (err) {
                  console.error(
                    `Merge resulted in ${Kolor.red(err)} conflicts`
                  );
                }
                // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
              } else if (update && update.summary.changes) {
                var child = require(`child_process`).exec(
                  `python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`
                );
                child.stdout.pipe(process.stdout);
                child.on(`exit`, async function () {
                  process.exitCode = 1;
                });
              }
            });
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      const command = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      var Needs = 𝓜𝖎𝖟𝖚ӄ𝖎.body.trim().split(/\s+/).slice(1);
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      if (!command) {
        try {
          return Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived}, 

❌ 𝚆𝚛𝚘𝚗𝚐 𝙲𝚘𝚖𝚖𝚊𝚗𝚍
Type _${ᴋᴇɪ}help_ and Read Everything Properly`,
            _𝔏𝔞𝔟_.INVL
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      const moment = require("moment-timezone");
      const time2 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
      if (time2 < "24:59:00") {
        var Timers = "Good night😴";
      }
      if (time2 < "19:00:00") {
        var Timers = "Good evening🌞";
      }
      if (time2 < "18:00:00") {
        var Timers = "good afternoon🌄";
      }
      if (time2 < "15:00:00") {
        var Timers = "good afternoon☀️";
      }
      if (time2 < "11:00:00") {
        var Timers = "Good morning🌅";
      }
      if (time2 < "05:00:00") {
        var Timers = "Good night💤";
      }
      return command.handle(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        Needs,
        ꜱɪᴛʀᴀᴘ,
        Clock,
        Ping,
        Timers
      );
    }
  });
}
爪𝖎𝖟𝖚ӄ𝖎().catch((ℓαвєяяσя) =>
  console.log(Kolor.red(`❌ERROR ⬰ `), Kolor.red(ℓαвєяяσя))
);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
