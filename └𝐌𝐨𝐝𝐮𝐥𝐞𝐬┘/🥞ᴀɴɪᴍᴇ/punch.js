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
require("../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let {
  isUrl,
  fetchJson,
  getBuffer,
  jsonformat,
  GIFBufferToVideoBuffer,
  getRandom,
} = require(`../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let ᴀɴɪᴍᴇ = require(`anime-actions`);
let FFmpeg = require(`fluent-ffmpeg`);
let ᴀɴɪᴍᴇ2 = require(`anime-actions`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { DownloaderHelper } = require("node-downloader-helper");
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Image_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let YouTube_Regex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
exports.punch = async (
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
  let ꜰɪɴᴀʟʟɪɴᴋ;
  let ᴀɴɪᴍᴇʟɪɴᴋ = await ᴀɴɪᴍᴇ.punch();
  let ɢᴏᴛꜰɪʟᴇ = `./Vlkyre🎒Bag/${Vlkyre.key.id}}.gif`;
  let ɢɪᴠᴇꜰɪʟᴇ = `./Vlkyre🎒Bag/${Vlkyre.key.id}}.mp4`;
  if (!ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".gif") && !ᴀɴɪᴍᴇʟɪɴᴋ.endsWith(".mp4")) {
    ꜰɪɴᴀʟʟɪɴᴋ = await ᴀɴɪᴍᴇ2.punch();
  } else {
    ꜰɪɴᴀʟʟɪɴᴋ = ᴀɴɪᴍᴇʟɪɴᴋ;
  }
  ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  let dl𝐀𝐩𝐢 = new DownloaderHelper(ꜰɪɴᴀʟʟɪɴᴋ, "./Vlkyre🎒Bag", {
    fileName: `${Vlkyre.key.id}}.gif`,
    retry: true,
  });
  await dl𝐀𝐩𝐢.on("end", async () => {
    FFmpeg(ɢᴏᴛꜰɪʟᴇ)
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .save(ɢɪᴠᴇꜰɪʟᴇ)
      .on("end", async () => {
        ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
        if (Vlkyre.mentionByReply) {
          let ʀᴇᴘʟɪᴇᴅ =
            Vlkyre.mtype == "extendedTextMessage" &&
            Vlkyre.message.extendedTextMessage.contextInfo != null
              ? Vlkyre.message.extendedTextMessage.contextInfo.participant || ""
              : "";
          await ӄryӄnz
            .sendMessage(
              Vlkyre.chatID,
              {
                video: fs.readFileSync(ɢɪᴠᴇꜰɪʟᴇ),
                gifPlayback: true,
                mentions: [Vlkyre.sender, ʀᴇᴘʟɪᴇᴅ],
                caption: `*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*


╔══└ Vlkyre 𝐏𝐫𝐨𝐭𝐨® ┘
║▷ ꜰʀᴏᴍ: @${Vlkyre.sender.split(`@`)[0] || ""}
║▷ ᴛᴏ: @${ʀᴇᴘʟɪᴇᴅ.split(`@`)[0] || ""}
║▷ ꜰᴇᴇʟɪɴɢ: ${Final_Name}
╚═══════╝`,
              },
              { quoted: Vlkyre }
            )
            .then(fs.unlinkSync(ɢɪᴠᴇꜰɪʟᴇ, ɢᴏᴛꜰɪʟᴇ))
            .catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
          return;
          ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
        } else if (Vlkyre.A𝖗𝖌𝖘[0] && Vlkyre.A𝖗𝖌𝖘[0].startsWith("@")) {
          let mention = Vlkyre.mentionByTag;
          let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || Vlkyre.msg.contextInfo.participant;
          await ӄryӄnz
            .sendMessage(
              Vlkyre.chatID,
              {
                video: fs.readFileSync(ɢɪᴠᴇꜰɪʟᴇ),
                gifPlayback: true,
                mentions: [Vlkyre.sender, 𝕻𝖊𝖗𝖘𝖔𝖓],
                caption: `*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*


╔══└ Vlkyre 𝐏𝐫𝐨𝐭𝐨® ┘
║▷ ꜰʀᴏᴍ: @${Vlkyre.sender.split(`@`)[0] || ""}
║▷ ᴛᴏ: @${𝕻𝖊𝖗𝖘𝖔𝖓.split(`@`)[0] || ""}
║▷ ꜰᴇᴇʟɪɴɢ: ${Final_Name}
╚═══════╝`,
              },
              { quoted: Vlkyre }
            )
            .then(fs.unlinkSync(ɢɪᴠᴇꜰɪʟᴇ, ɢᴏᴛꜰɪʟᴇ))
            .catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
          return;
          ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
        } else {
          await ӄryӄnz
            .sendMessage(
              Vlkyre.chatID,
              {
                video: fs.readFileSync(ɢɪᴠᴇꜰɪʟᴇ),
                gifPlayback: true,
                mentions: [Vlkyre.sender, Vlkyre.sender],
                caption: `*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*


╔══└ Vlkyre 𝐏𝐫𝐨𝐭𝐨® ┘
║▷ ꜰʀᴏᴍ: @${Vlkyre.sender.split(`@`)[0] || ""}
║▷ ꜰᴇᴇʟɪɴɢ: ${Final_Name}
╚═══════╝`,
              },
              { quoted: Vlkyre }
            )
            .then(fs.unlinkSync(ɢɪᴠᴇꜰɪʟᴇ, ɢᴏᴛꜰɪʟᴇ))
            .catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
          return;
        }
      });
  });
  ("|⬡════════════════════════════════════════════════════════════════════════════════════|▷◁|═════════════════════════════════════════════════════════════════════⬡|");
  await dl𝐀𝐩𝐢.on("error", async (Èrrðr) => {
    return await Caught(ӄryӄnz, Vlkyre, Èrrðr);
  });
  await dl𝐀𝐩𝐢.start().catch(async (Èrrðr) => {
    return await Caught(ӄryӄnz, Vlkyre, Èrrðr);
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
