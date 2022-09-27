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
let yts = require(`yt-search`);
let Tinyurl = require("tinyurl-api");
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { yta } = require(`../../🤖Utilities/y2mate`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../👒Buttons/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Image_Button } = require("../../👒Buttons/Image_Button");
let { Video_Button } = require("../../👒Buttons/Video_Button");
let { yta_var } = require(`../../🤖Utilities/letiableServers`);
let { ytv_var } = require(`../../🤖Utilities/letiableServers`);
let YouTube_Regex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../👒Buttons/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.yta = async (
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
  if (Vlkyre.A𝖗𝖌𝖘.length === 0) {
    return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
      ӄryӄnz,
      Vlkyre,
      `*❌ERROR:* No query provided!
*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
    );
  }
  if (Vlkyre.A𝖗𝖌𝖘.includes("yout")) {
    if (!YouTube_Regex.test(Vlkyre.A𝖗𝖌𝖘[0])) {
      return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
        ӄryӄnz,
        Vlkyre,
        `*❌ERROR:* No query provided!
*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
      );
    }
  }
  ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  let FinalGot;
  if (YouTube_Regex.test(Vlkyre.A𝖗𝖌𝖘[0])) {
    FinalGot = Vlkyre.A𝖗𝖌𝖘[0];
  } else {
    FinalGot = F𝖚𝖑𝖑_A𝖗𝖌𝖘;
  }
  let LinkFound = await yts(FinalGot);
  if (!LinkFound) {
    return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
      ӄryӄnz,
      Vlkyre,
      `*❌ERROR:* No Music Found!
*⚡USAGE:* ${prefix}${Final_Name} <song name or youtube link>`
    );
  }
  ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  let TubeFile = LinkFound.videos.slice(0, 1);
  TubeFile.forEach(async function (Found) {
    if (Found.seconds > 1800) {
      return await Image_Button(
        ӄryӄnz,
        Vlkyre,
        Vlkyre.A𝖗𝖌𝖘,
        Found.thumbnail,
        `❌𝗘𝗿𝗿𝗼𝗿: _Choose Smaller Audio less then 30mins!_

⭕️𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐀𝐈: ${Found.title}
🍻𝐓𝐢𝐭𝐥𝐞: ${Found.title}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}`
      );
    }
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
    let Media = await yta(Found.url, "128kbps");
    let { DLoader, thumb, title, RSize, BSize } = await yta_var(
      Found.url,
      "en136"
    );
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
    let DirectFile;
    try {
      DirectFile = await Tinyurl(DLoader);
    } catch (error) {
      DirectFile = "Null";
    }
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
    await Image_Button(
      ӄryӄnz,
      Vlkyre,
      Vlkyre.A𝖗𝖌𝖘,
      Found.thumbnail,
      `𝐘𝐨𝐮𝐓𝐮𝐛𝐞⭕️𝐌𝐮𝐬𝐢𝐜
🍻𝐓𝐢𝐭𝐥𝐞: ${Found.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${Found.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${BSize || "undefined"}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}


*👇🏽‍𝐏𝐫𝐞𝐬𝐬 𝐓𝐡𝐢𝐬👇🏽‍*
_${DirectFile}_`
    );
    ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
    try {
      return await ӄryӄnz.sendMessage(
        Vlkyre.chatID,
        {
          audio: { url: Media.DLoader },
          contextInfo: {
            externalAdReply: {
              title: `🍻𝐓𝐢𝐭𝐥𝐞: ${Found.title}`,
              body: `ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™`,
              mediaType: 2,
              thumbnail: await getBuffer(Found.thumbnail),
              mediaUrl: Found.thumbnail,
            },
          },
          mimetype: `audio/mpeg`,
          fileName: `${Found.title}.mp3`,
        },
        { quoted: Vlkyre }
      );
    } catch {}
  });
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
