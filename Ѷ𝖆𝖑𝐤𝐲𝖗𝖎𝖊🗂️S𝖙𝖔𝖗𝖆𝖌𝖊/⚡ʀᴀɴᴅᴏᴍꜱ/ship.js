("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
const {
  isUrl,
  fetchJson,
  getBuffer,
  jsonformat,
  GIFBufferToVideoBuffer,
  getRandom,
} = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/myfunc`);
const fs = require(`fs`);
const util = require(`util`);
const hxz = require(`hxz-api`);
const chalk = require(`chalk`);
const db = require(`quick.db`);
const axios = require(`axios`);
const canvacord = require(`canvacord`);
const { Character } = require(`mailist`);
const moment = require(`moment-timezone`);
const Carbon = require(`unofficial-carbon-now`);
const { exec, execSync } = require(`child_process`);
const { Ship, IShipOptions } = require(`@shineiichijo/canvas-chan`);
const { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
const { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
const { Group_Only } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
const { Image_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
const { Video_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
const { Bot_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
const { Sender_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
var Present_Path = require(`path`);
var Script_Name = Present_Path.basename(__filename);
var Final_Name = Script_Name.slice(0, -3).toLowerCase();
const { Caught } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.ship = async (
  ӄ𝖚𝖓𝖆𝖎,
  Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
  A𝖗𝖌𝖘,
  pushName,
  fromMe,
  F𝖚𝖑𝖑_A𝖗𝖌𝖘,
  quoted,
  mime,
  isMedia,
  isGroup,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmin,
  isSenderAdmin,
  isSenderTUF,
  commandName,
  body,
  isReply,
  mentionByTag,
  mentionByReply
) => {
  try {
    if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) return await Group_Only(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
    `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
    let usep = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender;
    let recp = ``;
    try {
      users = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionedJid[0]
        ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionedJid[0]
        : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted
        ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender
        : text.replace(/[^0-9]/g, ``) + `@s.whatsapp.net`;

      ment = [usep, users];
    } catch {
      users = `none`;
      ment = [usep, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender];
    }
    if (users == `none`) {
      recp = `@${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.split(`@`)[0]} x  themselves`;
      console.log(recp);
    } else {
      let rcpp = `@${users.split(`@`[0])}`;
      recp = `@${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.split(`@`)[0]} x  @${users.split(`@`)[0]}`;

      console.log(recp);
    }
    const ll = Math.floor(Math.random() * 100);
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
      rate = `Avarage`;
    } else if (ll > 60) {
      jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t Good enough, I guess!💫`;
      rate = `Avarage`;
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
      ppuser = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `image`);
    } catch {
      ppuser = `https://www.linkpicture.com/q/IMG-20220118-WA0387.png`;
    }
    if (users == `none`) {
      try {
        ppuser2 = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `image`);
      } catch {
        ppuser2 = `https://www.linkpicture.com/q/IMG-20220118-WA0387.png`;
      }
    } else {
      try {
        ppuser2 = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(users, `image`);
      } catch {
        ppuser2 = `https://www.linkpicture.com/q/IMG-20220118-WA0387.png`;
      }
    }
    const options = [
      {
        name: `Person1`,
        image: ppuser,
      },
      {
        name: `Person2`,
        image: ppuser2,
      },
    ];
    const ship = await new Ship(options, ll, rate).build();
    return await Image_Button(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, A𝖗𝖌𝖘, ship, caption);
  } catch (err) {
    const util = require(`util`);
    Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, util.format(err));
  }
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
