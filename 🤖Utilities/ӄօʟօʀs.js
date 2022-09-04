("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
("use strict");
exports.__esModule = true;
require("../🤖Utilities/Settings");
let ӄօʟօʀ = require("@heroku-cli/color");
exports.ӄօʟօʀs = async (ӄryӄnz, Vlkyre) => {
  let chalk = require("chalk");
  let Gamboge = chalk.hex("#e49b0f");
  let Glaucous = chalk.hex("#6082B6");
  let Feldgrau = chalk.hex("#4d5d53");
  let Burgundy = chalk.hex("#810020");
  let Vermilion = chalk.hex("#E34234");
  let Burlywood = chalk.hex("#deb887");
  let 𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆 = await Vlkyre.groupMetadata;
  await ӄryӄnz.sendReadReceipt(Vlkyre.chatID, Vlkyre.sender, [Vlkyre.key.id]);
  if (HEROKU_API_KEY === undefined) {
    console.log(Gamboge("▷═════════════════════|✠|═════════════════════◁"));
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "),
        Feldgrau("".concat(new Date()))
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("💤 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "),
        Glaucous(Vlkyre.commandName || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫: "),
        Burgundy(Vlkyre.sender || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫𝐍𝐚𝐦𝐞: "),
        Gamboge(Vlkyre.pushName || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("❗ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐀𝐝𝐦𝐢𝐧: "),
        Vermilion(Vlkyre.isSenderAdmin || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("⚡ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐓𝐔𝐅: "),
        Vermilion(Vlkyre.isSenderTUF || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🧀 𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: "),
        Burlywood(𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "),
        Feldgrau("".concat(new Date()))
      )
    );
    console.log(
      ӄօʟօʀ["default"].Gamboge(
        "▷═════════════════════|✠|═════════════════════◁"
      )
    );
    console.log(ӄօʟօʀ["default"].Feldgrau("{\nᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™\n}"));
  } else {
    console.log(
      ӄօʟօʀ["default"].bgRed("▷═════════════════════|✠|═════════════════════◁")
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "),
        ӄօʟօʀ["default"].bgGreen("".concat(new Date()))
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("💤 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "),
        ӄօʟօʀ["default"].bgBlue(Vlkyre.commandName || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫: "),
        ӄօʟօʀ["default"].bgRed(Vlkyre.sender || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🧛🏽‍♂️ 𝐒𝐞𝐧𝐝𝐞𝐫𝐍𝐚𝐦𝐞: "),
        ӄօʟօʀ["default"].bgMagenta(Vlkyre.pushName || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("❗ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐀𝐝𝐦𝐢𝐧: "),
        ӄօʟօʀ["default"].bgYellow(Vlkyre.isSenderAdmin || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("⚡ 𝐒𝐞𝐧𝐝𝐞𝐫 𝐓𝐔𝐅: "),
        ӄօʟօʀ["default"].bgYellow(Vlkyre.isSenderTUF || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🧀 𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: "),
        ӄօʟօʀ["default"].bgCyan(𝕲𝖗𝖔𝖚𝖕𝖒𝖊𝖙𝖆.subject || "")
      )
    );
    console.log(
      ӄօʟօʀ["default"].black(
        ӄօʟօʀ["default"].bgWhite("🕐 𝐓𝐢𝐦𝐞: "),
        ӄօʟօʀ["default"].bgWhite("".concat(new Date()))
      )
    );
    console.log(
      ӄօʟօʀ["default"].bgRed("▷═════════════════════|✠|═════════════════════◁")
    );
    console.log(ӄօʟօʀ["default"].bgBlack("{\nᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™\n}"));
  }
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
