const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const speed = require("performance-now");
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const os = require("os");
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
const fs = require("fs");
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `help`,
  description: `ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 爪𝖎𝖟𝖚ӄ𝖎git.fetch();
    var Sender = 爪𝖎𝖟𝖚ӄ𝖎.sender;
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    const runtime = function (seconds) {
      seconds = Number(seconds);
      var d = Math.floor(seconds / (3600 * 24));
      var h = Math.floor((seconds % (3600 * 24)) / 3600);
      var m = Math.floor((seconds % 3600) / 60);
      var s = Math.floor(seconds % 60);
      var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
      return dDisplay + hDisplay + mDisplay + sDisplay;
    };
    uptime = process.uptime();
    timestampe = speed();
    latensie = speed() - timestampe;
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    let content = fs.readFileSync("./𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/爪𝖎𝖟𝖚ӄ𝖎.jpg");
    const media = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.prepareMessage(
      爪𝖎𝖟𝖚ӄ𝖎.chatId,
      content,
      MessageType.image
    );
    const buttons = [
      {
        buttonId: `${ᴋᴇɪ}menu`,
        buttonText: { displayText: `${ᴋᴇɪ}menu` },
        type: 1,
      },
      {
        buttonId: `${ᴋᴇɪ}ping`,
        buttonText: { displayText: `${ᴋᴇɪ}ping` },
        type: 1,
      },
      // {
      //   buttonId: `${ᴋᴇɪ}group`,
      //   buttonText: { displayText: `${ᴋᴇɪ}group` },
      //   type: 1,
      // },
    ];
    const buttonMessage = {
      contentText: `
*Hey •@${personsending}*
シ︎💡ᴘʀᴇꜰɪx: ${ᴋᴇɪ}
シ︎⚙️ᴇɴɢɪɴᴇ: ￫ ${vers.vers}
シ︎💻ᴘʟᴀᴛꜰᴏʀᴍ: _${os.platform()}_
シ︎🛰️ᴘɪɴɢ: _${latensie.toFixed(6)}s_
シ︎⚰️ᴜᴘᴛɪᴍᴇ: _${runtime(process.uptime())}_
シ︎🛸𝐆𝐫𝐨𝐮𝐩: https://chat.whatsapp.com/Ih78PSfbxhn6hIS2D09S5S

*↦ ʜᴇʀᴇ ᴀʀᴇ ᴛʜᴇ ᴄᴀᴛᴇɢᴏʀɪᴇꜱ ↤*
⬣ *${ᴋᴇɪ}systemside*➾ 🛸𝙎𝙮𝙨𝙩𝙚𝙢
⬣ *${ᴋᴇɪ}animeside*➾ 🤩𝘼𝙣𝙞𝙢𝙚
⬣ *${ᴋᴇɪ}musicside*➾ 🎙️𝙈𝙪𝙨𝙞𝙘
⬣ *${ᴋᴇɪ}groupside*➾ 👑𝙂𝙧𝙤𝙪𝙥𝙨
⬣ *${ᴋᴇɪ}funside*➾ 🧀𝙁𝙪𝙣𝙨
⬣ *${ᴋᴇɪ}nsfwside*➾ 🔞𝘼𝙙𝙪𝙡𝙩`,
      footerText: `⬡ *爪𝖎𝖟𝖚ӄ𝖎* by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟 ⬡`,
      buttons: buttons,
      headerType: 4,
      imageMessage: media.message.imageMessage,
    };
    await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
      爪𝖎𝖟𝖚ӄ𝖎.chatId,
      buttonMessage,
      MessageType.buttonsMessage,
      { contextInfo: { mentionedJid: [Sender] } }
    );
  },
};
// ===============================================================================
// 🎮爪𝖎𝖟𝖚ӄ𝖎™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
