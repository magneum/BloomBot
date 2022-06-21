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
const yts = require(`yt-search`);
const ytdl = require("ytdl-core");
const Tinyurl = require("tinyurl-api");
const canvacord = require(`canvacord`);
const ffmpeg = require("fluent-ffmpeg");
const { Character } = require(`mailist`);
const moment = require(`moment-timezone`);
const Carbon = require(`unofficial-carbon-now`);
const { exec, execSync } = require(`child_process`);
const { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
const { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
const { yta_var } = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/VariableServers`);
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

exports.bassboost = async (
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
  commandName
) => {
  if (!Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
    return await Group_Only(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
  }

  if (A𝖗𝖌𝖘.length === 0) {
    return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
      ӄ𝖚𝖓𝖆𝖎,
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
      `*❌ERROR:* No query provided!

*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
    );
  }

  if (A𝖗𝖌𝖘.includes("yout")) {
    if (!YouTube_Regex.test(A𝖗𝖌𝖘[0])) {
      return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
        ӄ𝖚𝖓𝖆𝖎,
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
        `*❌ERROR:* No query provided!

*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
      );
    }
  }

  var FFmpegFile = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🎒𝕭𝖆𝖌/${Date.now()}${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.key.id}.mp3`;
  let RawFile = await ӄ𝖚𝖓𝖆𝖎.downloadAndSaveMediaMessage(quoted);
  exec(`ffmpeg -i ${RawFile} -af "atempo=0.8" ${FFmpegFile}`, async (error) => {
    cleanRF.cleanRF(Convert_From);
    if (error) {
      return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
        ӄ𝖚𝖓𝖆𝖎,
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
        `*❌ERROR:* Could not convert!

*⚡USAGE:* ${prefix}${Final_Name} <Song name or Youtube link>`
      );
    }

    return await ӄ𝖚𝖓𝖆𝖎
      .sendMessage(
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
        {
          audio: { url: FFmpegFile },
          contextInfo: {
            externalAdReply: {
              title: "Audio FIlter",
              body: `ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™`,
              mediaType: 2,
              thumbnail: await getBuffer(`./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png`),
              mediaUrl: `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png`,
            },
          },
          mimetype: `audio/mpeg`,
          fileName: `𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞.mp3`,
        },
        { quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
      )
      .then(fs.unlinkSync(RawFile, FilteredAudio));
  });
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
