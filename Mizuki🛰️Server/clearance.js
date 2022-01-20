`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const { MessageType } = require(`@adiwajshing/baileys`);
const Bagde = require(`../Mizuki🍃Goose/Badge`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ms = require("parse-ms");
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;

const clearance = async (ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  // if (𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
  //   value = "True";
  //   return;
  // }
  Bagde.findOne(
    {
      ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
    },
    async (err, user) => {
      // return user.delete();
      if (err) return console.log(err);
      if (!user) {
        var newUser = new Bagde({
          ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
          Badge: "🧵ʙᴀꜱɪᴄ",
          value: "True",
          Limits: 10,
          CurrentLimitTime: Date.now(),
          PermanentLimitTime: 86400000,
        });
        newUser.save();

        return;
      } else {
        console.log(user);
        var clock =
          user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime);
        let time = ms(
          user.PermanentLimitTime - (Date.now() - user.CurrentLimitTime)
        );
        console.log(clock);
        console.log(time);
        if (clock > 0 && user.Limits == 0) {
          ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${user.Badge}
║⚡ 𝗗𝗮𝗶𝗹𝘆_𝗟𝗶𝗺𝗶𝘁: ${user.Limits} commands
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`,
            MessageType.text,
            { quoted: chat }
          );
          user.value = "False";
          user.save();

          return;
        }
        if (clock > 0 && !user.Limits == 0) {
          user.Limits = user.Limits - 1;
          user.value = "True";
          user.save();

          return;
        }
        if (clock < 0 && user.Limits == 0) {
          if (user.Badge === "🧵ʙᴀꜱɪᴄ") {
            user.Limits = 10;
          } else if (user.Badge === "🥉ʙʀᴏɴᴢᴇ") {
            user.Limits = 20;
          } else if (user.Badge === "🥈ꜱɪʟᴠᴇʀ") {
            user.Limits = 40;
          } else if (user.Badge === "🥇ɢᴏʟᴅ") {
            user.Limits = 60;
          } else if (user.Badge === "💍ᴘʟᴀᴛɪɴᴜᴍ") {
            user.Limits = 80;
          } else if (user.Badge === "💎ᴅɪᴀᴍᴏɴᴅ") {
            user.Limits = 100;
          }
          user.CurrentLimitTime = Date.now();
          user.value = "True";
          user.save();

          return;
        }
      }
    }
  );
};
module.exports = clearance;
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
