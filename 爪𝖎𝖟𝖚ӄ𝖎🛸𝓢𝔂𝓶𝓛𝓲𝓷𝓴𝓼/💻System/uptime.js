const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../爪𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const ꜱɪɢɴ = require(`../../爪𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/ꜱɪɢɴ`);
var ᴋᴇɪᴇx = new RegExp(ꜱɪɢɴ.MizukiIX, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `uptime`,
  description: `ᴄʜᴇᴄᴋ 爪𝖎𝖟𝖚ӄ𝖎 ᴜᴘᴛɪᴍᴇ`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎, arg) {
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    await 爪𝖎𝖟𝖚ӄ𝖎git.fetch();
    var Sender = 爪𝖎𝖟𝖚ӄ𝖎.sender;
    var ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎 = await 爪𝖎𝖟𝖚ӄ𝖎git.log(["KrakinzLab..origin/KrakinzLab"]);
    personsending = Sender.substring(0, Sender.length - 15);
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (ɴᴇᴡ爪𝖎𝖟𝖚ӄ𝖎.total != 0) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎.logGroup,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐞𝐞𝟔™!`,
          MessageType.text
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
    }
    // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    if (爪𝖎𝖟𝖚ӄ𝖎.chatId === "120363025343298860@g.us" && !爪𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎.chatId,
          `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

*•@${personsending}*,
シ︎𝙎𝙥𝙖𝙢/𝙏𝙚𝙨𝙩 𝐆𝐫𝐨𝐮𝐩🛸 https://chat.whatsapp.com/GDNPVuH3eMq72UOUHavZxH`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎.sender],
            },
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
      return;
      // ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
    } else {
      var Sender = 爪𝖎𝖟𝖚ӄ𝖎.sender;
      var personsending = Sender.substring(0, Sender.length - 15);
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
      await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          爪𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: ꜱɪɢɴ.MEE,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎.sender],
            },
            caption: `*©️ 爪𝖎𝖟𝖚ӄ𝖎* by _₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟_

*•@${personsending}*,  *This 𝐌𝐞𝐞𝟔's Is Running Since:*
⚰️𝐔𝐩𝐓𝐢𝐦𝐞: ${runtime(process.uptime())}`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
    }
  },
};
