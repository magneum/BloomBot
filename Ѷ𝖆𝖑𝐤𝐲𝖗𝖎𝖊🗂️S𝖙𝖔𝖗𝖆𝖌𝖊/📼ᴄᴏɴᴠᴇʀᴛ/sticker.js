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
const { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
const { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
const { Group_Only } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
const { Image_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
const { Video_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
const { Bot_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
const { Sender_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
const YouTube_Regex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

var Present_Path = require(`path`);
var Script_Name = Present_Path.basename(__filename);
var Final_Name = Script_Name.slice(0, -3).toLowerCase();

exports.sticker = async (
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
  body
) => {
  if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
    return await Group_Only(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
  }

  {
    if (!quoted) {
      return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
        ӄ𝖚𝖓𝖆𝖎,
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
        `*❌ERROR:*  Could not find any Image/Video in context!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the sticker>`
      );
    }
    if (q) {
      anu = A𝖗𝖌𝖘.join(` `).split(`|`);
      pack = anu[0] !== `` ? anu[0] : global.packname;
      author = anu[1] !== `` ? anu[1] : global.author;
    } else {
      pack = global.packname;
      author = global.author;
    }
    if (/image/.test(mime)) {
      let media = await quoted.download();
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply(`wait your request is under process`);
      let sticker = new Sticker(media, {
        pack: pack,
        author: author,
        type: StickerTypes.FULL,
        categories: [`🤩`, `🎉`],
        id: `12345`,
        quality: 75,
        background: `transparent`,
      });
      const buffer = await sticker.toBuffer();
      ӄ𝖚𝖓𝖆𝖎.sendMessage(
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
        { sticker: buffer },
        { quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
      );
    } else if (/video/.test(mime)) {
      if ((quoted.msg || quoted).seconds > 20)
        return Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply(
          `🕐 Cannot fetch videos longer than *21 Seconds*`
        );
      let media = await quoted.download();
      let sticker = new Sticker(media, {
        pack: pack,
        author: author,
        type: StickerTypes.FULL,
        categories: [`🤩`, `🎉`],
        id: `12345`,
        quality: 75,
        background: `transparent`,
      });
      const stikk = await sticker.toBuffer();
      ӄ𝖚𝖓𝖆𝖎.sendMessage(
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
        { sticker: stikk },
        { quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
      );
    } else {
      return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
        ӄ𝖚𝖓𝖆𝖎,
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
        `*❌ERROR:*  Could not find any Image/Video in context!

*⚡USAGE:* ${prefix}${Final_Name} <Tag the sticker>`
      );
    }
  }
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
