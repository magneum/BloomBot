// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Mizuki_Static = require(`./Mizuki_Static`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
const fs = require(`fs`);
require(`python-format-js`);
const cleanRF = require("./cleanRF");
const vers = require(`../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const speed = require("performance-now");
let Timestamp = speed();
const Ping = speed() - Timestamp;
const date = require("date-and-time");
const now = new Date();
date.format(now, "ddd, MMM DD YYYY");
const pattern = date.compile("ddd, MMM DD YYYY");
const Clock = date.format(now, pattern);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
exports.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = async (
  ӄʀǟӄɨռʐ,
  chat,
  𝓜𝖎𝖟𝖚ӄ𝖎,
  ꜱᴇɴᴅᴇʀɪᴅ,
  ꜱᴇɴᴅᴇʀeceived,
  commandName,
  needs
) => {
  var MediaUrl = `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`;
  try {
    return Mizuki_Static.MGS(
      ӄʀǟӄɨռʐ,
      chat,
      𝓜𝖎𝖟𝖚ӄ𝖎,
      `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived},  

┌────────◆➤ ⚠️𝐑𝐄𝐀𝐃 𝐇𝐎𝐖 𝐓𝐎 𝐔𝐒𝐄
│
│❗ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${commandName}
│❓ 𝐔𝐬𝐚𝐠𝐞: ${needs === undefined ? `null` : needs}`,
      MediaUrl
    );
  } catch (ℓαвєяяσя) {
    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
  }
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
