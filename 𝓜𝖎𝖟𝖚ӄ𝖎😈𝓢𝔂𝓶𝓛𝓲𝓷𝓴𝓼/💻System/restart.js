const { exec, execSync } = require("child_process");
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 𝓜𝓮𝓮git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
// 🛸𝓜𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐢𝐳𝐮𝐤𝐢™⦿-----------------⬡==================⬡
module.exports = {
  name: `restart`,
  description: `ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ʙᴇ ᴜꜱᴇᴅ ᴛᴏ restart ᴛʜᴇ ʙᴏᴛ`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg) {
    var Sender = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
    var personsending = Sender.substring(0, Sender.length - 15);
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
      return await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
        .sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          {
            url: _𝔏𝔞𝔟_.ERROR,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
            },
            caption: `⬡ *爪𝖎𝖟𝖚ӄ𝖎* by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟 ⬡

*•@${personsending}*,⚠️𝙉𝙞𝙘𝙚 𝙏𝙧𝙮 𝘽𝙪𝙩 𝙊𝙣𝙡𝙮 𝙈𝙮 𝙊𝙬𝙣𝙚𝙧 𝘾𝙖𝙣 𝙪𝙨𝙚 𝙩𝙝𝙖𝙩 𝙘𝙤𝙢𝙢𝙖𝙣𝙙!`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
      .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, `*Restarting*`, MessageType.text, {
        contextInfo: {
          mentionedJid: [𝓜𝖎𝖟𝖚ӄ𝖎.sender],
        },
      })
      .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎));
    var child_process = require("child_process");
    ʍɛɛstart("MeeSeeks™.js");
    function ʍɛɛstart(nodemon) {
      console.log("Master process is running.");
      var proc = child_process.spawn("node", [nodemon]);
      proc.stdout.on("data", function (data) {
        console.log(data.toString());
      });
      proc.stderr.on("data", function (data) {
        console.log(data.toString());
      });
      proc.on("exit", function (code) {
        console.log("child process exited with code " + code);
        delete proc;
        setTimeout(ʍɛɛstart, 5000);
      });
    }
  },
};
