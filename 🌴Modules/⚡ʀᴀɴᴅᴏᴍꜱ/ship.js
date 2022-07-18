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
require("../../🤖Utilities/Settings");
let {
  isUrl,
  fetchJson,
  getBuffer,
  jsonformat,
  GIFBufferToVideoBuffer,
  getRandom,
} = require(`../../🤖Utilities/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { Ship, IShipOptions } = require(`@shineiichijo/canvas-chan`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
exports.ship = async (
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
  ("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
  let usep = Vlkyre.sender;
  let recp = ``;
  try {
    users = Vlkyre.mentionedJid[0]
      ? Vlkyre.mentionedJid[0]
      : Vlkyre.quoted
      ? Vlkyre.quoted.sender
      : text.replace(/[^0-9]/g, ``) + `@s.whatsapp.net`;

    ment = [usep, users];
  } catch {
    users = `none`;
    ment = [usep, Vlkyre.sender];
  }
  if (users == `none`) {
    recp = `@${Vlkyre.sender.split(`@`)[0]} x  themselves`;
    console.log(recp);
  } else {
    let rcpp = `@${users.split(`@`[0])}`;
    recp = `@${Vlkyre.sender.split(`@`)[0]} x  @${users.split(`@`)[0]}`;

    console.log(recp);
  }
  let ll = Math.floor(Math.random() * 100);
  if (ll < 30) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\tThere's still time to reconsider your choices`;
    rate = `Not Good`;
  } else if (ll < 40) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\tThere's still time to reconsider your choices`;
    rate = `Not Good`;
  } else if (ll > 50) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t Good enough, I guess!💫`;
    rate = `Aletage`;
  } else if (ll > 60) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t Good enough, I guess!💫`;
    rate = `Aletage`;
  } else if (ll > 70) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t\tStay together and you'll find a way⭐️`;
    rate = `Good`;
  } else if (ll > 80) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t\tStay together and you'll find a way⭐️`;
    rate = `Good`;
  } else if (ll > 90) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\tAmazing! You two will be a good couple💖`;
    rate = `Amazing`;
  } else if (ll == 100) {
    jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\tYou two are fated to be together💙`;
    rate = `Fated to be together`;
  }
  let caption = `\t❣️ *Matchmaking...* ❣️ 
`;
  caption += `\t\t---------------------------------
`;
  caption += `*${recp}*
`;
  caption += `\t\t---------------------------------
`;
  caption += `${jj}`;
  try {
    ppuser = await ӄryӄnz.profilePictureUrl(Vlkyre.sender, `image`);
  } catch {
    ppuser = `./👗Skins/Vlkyre.png`;
  }
  if (users == `none`) {
    try {
      ppuser2 = await ӄryӄnz.profilePictureUrl(Vlkyre.sender, `image`);
    } catch {
      ppuser = `./👗Skins/Vlkyre.png`;
    }
  } else {
    try {
      ppuser2 = await ӄryӄnz.profilePictureUrl(users, `image`);
    } catch {
      ppuser = `./👗Skins/Vlkyre.png`;
    }
  }
  let options = [
    {
      name: `Person1`,
      image: ppuser,
    },
    {
      name: `Person2`,
      image: ppuser2,
    },
  ];
  let ship = await new Ship(options, ll, rate).build();
  return await Image_Button(ӄryӄnz, Vlkyre, Vlkyre.A𝖗𝖌𝖘, ship, caption);
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
