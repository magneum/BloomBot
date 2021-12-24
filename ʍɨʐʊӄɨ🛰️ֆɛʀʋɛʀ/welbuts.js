// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const vers = require(`../package.json`);
const postDb = require(`./postDb`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
require(`python-format-js`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var ᴛᴡᴇʟ = [
  `just joined the server!`,
  `just joined. Everyone,look busy!`,
  `just joined!`,
  `joined the party!`,
  `welcome, we were expecting you to join!`,
  `welcome, we hope you bought pizza for us!`,
  `welcome, leave your weapons by the door!`,
  `Swooosh! Just landed.`,
  `just joined. Hide your bananas!`,
  `just joined. Seems OP, please nerf!`,
  `just slid into the server!`,
  `has spawned in the server!`,
  `just showed up in the server!`,
];
var ᴛʙʏᴇ = [
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
var Flower = ["💐", "🌻", "🌼", "🌹", "🌸", "💮"];
var People = ["👮", "👳", "🤱", "🤰", "💂"];
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
exports.welbuts = async (
  ӄʀǟӄɨռʐ,
  GroupID,
  GroupMemData,
  GroupMemG,
  GroupMemBio,
  MemNum
) => {
  try {
    var ꜰᴇᴛᴄʜᴇᴅᴡᴇʟᴄᴏᴍᴇ = await postDb.getMessage(GroupID, `setwelcome`);
    const ᴡᴇʟᴄᴏᴍᴇʀᴛxᴛ = ᴛᴡᴇʟ[Math.floor(Math.random() * ᴛᴡᴇʟ.length)];
    const FlowerWel = Flower[Math.floor(Math.random() * Flower.length)];
    const PeopleWel = People[Math.floor(Math.random() * People.length)];
    var ᴘᴘᴡᴇʟᴄᴏᴍᴇ = MemNum.substring(0, MemNum.length - 15);
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    try {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(`${MemNum.split(`@`)[0]}@c.us`);
    } catch {
      𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `https://i.postimg.cc/3wfrmmpB/NoPP.jpg`;
    }
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    const downloader = await new Downloader({
      url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗,
      directory: `./ʍɨʐʊӄɨ🗑️ȶɛʍք`,
      fileName: `${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`,
      cloneFiles: false,
    });
    await downloader.download();
    let content = fs.readFileSync(
      `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`
    );
    const media = await ӄʀǟӄɨռʐ.prepareMessage(
      GroupID,
      content,
      MessageType.image,
      {
        mimetype: Mimetype.png,
      }
    );
    await ӄʀǟӄɨռʐ
      .sendMessage(
        GroupID,
        {
          contentText: `⚡@${ᴘᴘᴡᴇʟᴄᴏᴍᴇ} ${ᴡᴇʟᴄᴏᴍᴇʀᴛxᴛ}

${FlowerWel}𝗕𝗶𝗼: ${GroupMemBio.status}
${PeopleWel}𝗠𝗲𝗺𝗯𝗲𝗿𝘀: ${GroupMemG}
💡𝗚𝗿𝗼𝘂𝗽: ${GroupMemData.subject}

${ꜰᴇᴛᴄʜᴇᴅᴡᴇʟᴄᴏᴍᴇ.message}`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
          buttons: [
            {
              buttonId: `${ᴋᴇɪ}help`,
              buttonText: { displayText: `${ᴋᴇɪ}help` },
              type: 1,
            },
            {
              buttonId: `${ᴋᴇɪ}list`,
              buttonText: { displayText: `${ᴋᴇɪ}list` },
              type: 1,
            },
            {
              buttonId: `${ᴋᴇɪ}getdesc`,
              buttonText: { displayText: `${ᴋᴇɪ}getdesc` },
              type: 1,
            },
          ],
          headerType: 4,
          imageMessage: media.message.imageMessage,
        },
        MessageType.buttonsMessage,
        {
          contextInfo: { mentionedJid: [MemNum] },
        }
      )
      .then(fs.unlinkSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${ᴘᴘᴡᴇʟᴄᴏᴍᴇ}_${FlowerWel}.png`));
  } catch (ℓαвєяяσя) {
    await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
    console.log(
      "⬡==========================⬡    🍁 " +
        ℓαвєяяσя +
        "🍁    ⬡==========================⬡"
    );
  }
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
