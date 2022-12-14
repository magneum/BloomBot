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
require("../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let {
  isUrl,
  fetchJson,
  getBuffer,
  jsonformat,
  GIFBufferToVideoBuffer,
  getRandom,
} = require(`../../•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let Economy = require(`../../•𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let ClaimSchema = require("../../•𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/Claim");
let { Image_Button } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../•𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.claim = async (
  ӄryӄnz,
  Vlkyre,
  pushName,
  F𝖚𝖑𝖑_A𝖗𝖌𝖘,
  quoted,
  isMedia,
  isGroup,
  isBotAdmin,
  isSenderAdmin,
  isSenderTUF,
  commandName,
  body
) => {
  let mime = (Vlkyre.quoted.msg || Vlkyre.quoted).mimetype || "";
  if (/image/.test(mime)) {
    console.log("downloading!");
    await quoted.download().then(console.log("Done!"));
    // await groupClaim.findOne(
    // {
    // ID: Vlkyre.sender,
    // },
    // async (Èrrðr, claimg) => {
    // if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr));
    // if (!claimg) {
    // new Economy({
    // ID: Vlkyre.sender,
    // claimg: 14400000,
    // total: 0,
    // })
    // .save()
    // .catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
    // return;
    // }
    // if (claimg.fishtimeout - (Date.now() - claimg.fishdone) > 0) {
    // let time = ms(claimg.fishtimeout - (Date.now() - claimg.fishdone));
    // return await Image_Button(
    // ӄryӄnz,
    // Vlkyre,
    // Vlkyre.A𝖗𝖌𝖘,
    // "./•𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_FIsh.png",
    // `❌𝗘𝗿𝗿𝗼𝗿: You've Recently Claimed A Pokemon.
    // 🕐𝗔𝗴𝗮𝗶𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s`
    // );
    // }
    // }
    // );
  } else {
    console.log("None!");
    await quoted.download();
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
