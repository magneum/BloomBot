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
let yts = require(`yt-search`);
const util = require(`util`);
const hxz = require(`hxz-api`);
const chalk = require(`chalk`);
const db = require(`quick.db`);
const axios = require(`axios`);
const Tinyurl = require("tinyurl-api");
const canvacord = require(`canvacord`);
const { Character } = require(`mailist`);
const moment = require(`moment-timezone`);
const Carbon = require(`unofficial-carbon-now`);
const { exec, execSync } = require(`child_process`);
let { yta } = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/y2mate`);
const { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { yta_var } = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/VariableServers`);
let { ytv_var } = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/VariableServers`);
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

exports.yta = async (
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
  isSenderTUF
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

  let FinalGot;
  if (YouTube_Regex.test(A𝖗𝖌𝖘[0])) {
    FinalGot = A𝖗𝖌𝖘[0];
  } else {
    FinalGot = F𝖚𝖑𝖑_A𝖗𝖌𝖘;
  }
  const LinkFound = await yts(FinalGot);
  if (!LinkFound) {
    return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
      ӄ𝖚𝖓𝖆𝖎,
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
      `*❌ERROR:* No Music Found!

*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
    );
  }

  var TubeFile = LinkFound.videos.slice(0, 1);
  TubeFile.forEach(async function (Found) {
    if (Found.seconds > 1800) {
      return await Image_Button(
        ӄ𝖚𝖓𝖆𝖎,
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
        A𝖗𝖌𝖘,
        Found.thumbnail,
        `❌𝗘𝗿𝗿𝗼𝗿: _Choose Smaller Audio less then 30mins!_

⭕️𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐀𝐈: ${Found.title}
🍻𝐓𝐢𝐭𝐥𝐞: ${Found.title}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}`
      );
    }

    let { dl_link, thumb, title, filesize, filesizeF } = await yta_var(
      Found.url,
      "id4"
    );
    let DirectFile;
    try {
      DirectFile = await Tinyurl(dl_link);
    } catch (error) {
      DirectFile = "Null";
    }

    await Image_Button(
      ӄ𝖚𝖓𝖆𝖎,
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
      A𝖗𝖌𝖘,
      Found.thumbnail,
      `𝐘𝐨𝐮𝐓𝐮𝐛𝐞⭕️𝐌𝐮𝐬𝐢𝐜
🍻𝐓𝐢𝐭𝐥𝐞: ${Found.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${Found.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
🌐𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`
    );
    return await ӄ𝖚𝖓𝖆𝖎.sendMessage(
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
      {
        audio: { url: dl_link },
        contextInfo: {
          externalAdReply: {
            title: Found.title,
            body: `ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™`,
            mediaType: 2,
            thumbnail: await getBuffer(
              `https://i.ytimg.com/vi/${Found.videoId}/hqdefault.jpg`
            ),
            mediaUrl: Found.thumbnail,
          },
        },
        mimetype: `audio/mpeg`,
        fileName: `${Found.title}.mp3`,
      },
      { quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
    );
  });
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
