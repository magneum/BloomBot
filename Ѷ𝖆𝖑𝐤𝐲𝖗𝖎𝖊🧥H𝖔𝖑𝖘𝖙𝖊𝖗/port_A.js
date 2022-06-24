("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
const fs = require(`fs`);
const chalk = require(`chalk`);
exports.port_A = async (ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chatUpdate, Ѷ𝖎𝖔𝖓) => {
  return await ӄ𝖚𝖓𝖆𝖎.sendMessage(
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
    {
      contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
      image: { url: "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png" },
      caption: `╔══『 𝐏𝐫𝐨𝐭𝐨𝐓𝐲𝐩𝐞® 』
║ *❣️ ɴᴀᴍᴇ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.split("@")[0]}
╚═══════╝


╔◇══════════════◇╗
┊ 🦊𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧🦊
╚◇══════════════◇╝

𝐉𝐨𝐢𝐧 𝐓𝐨 𝐁𝐞 𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐝:
*𝗚roup⛩️1:* chat.whatsapp.com/Gn50KMVAJKZHYJeaGhs3UV
*𝗚roup⛩️2:* chat.whatsapp.com/BF6J4MiaduL7ZRgt2Tqzk8
*𝗚roup⛩️3:* chat.whatsapp.com/Hx5VAZMfthg5okQwerohXM
*𝗚roup⛩️4:* chat.whatsapp.com/EwPq86c1N5L4iZKxpHL6WP
*𝗚roup⛩️5:* chat.whatsapp.com/CcRTdjc2SHS0XlMP0Bvi2q`,
      footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ",
      buttons: [
        {
          buttonId: prefix + "help",
          buttonText: { displayText: prefix + "help" },
          type: 1,
        },
        {
          buttonId: prefix + "support",
          buttonText: { displayText: prefix + "support" },
          type: 1,
        },
      ],
      headerType: 4,
    },
    {
      quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
    }
  );
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
var Present_Path = require(`path`);
var Present_File = require.resolve(__filename);
var Present_Name = Present_Path.basename(__filename);
fs.watchFile(Present_File, () => {
  fs.unwatchFile(Present_File);
  console.log(
    chalk.yellowBright("💡𝐈𝐧𝐟𝐨꧂ "),
    chalk.greenBright(`File Auto Updated: ${Present_Name}`)
  );
  delete require.cache[Present_File];
  require(Present_File);
});
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
