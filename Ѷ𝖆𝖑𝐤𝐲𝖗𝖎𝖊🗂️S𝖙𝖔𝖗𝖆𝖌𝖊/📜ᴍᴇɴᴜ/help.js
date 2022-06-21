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
const os = require(`os`);
const fs = require(`fs`);
const util = require(`util`);
const hxz = require(`hxz-api`);
const chalk = require(`chalk`);
const db = require(`quick.db`);
const axios = require(`axios`);
const canvacord = require(`canvacord`);
const speed = require(`performance-now`);
const { Character } = require(`mailist`);
const moment = require(`moment-timezone`);
const vers = require(`../../package.json`);
const { performance } = require(`perf_hooks`);
const Carbon = require(`unofficial-carbon-now`);
const { exec, execSync } = require(`child_process`);
const { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
const { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
const { Group_Only } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
const { formatp, runtime } = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/Human`);
const { Image_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
const { Video_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
const { Bot_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
const { Sender_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
const YouTube_Regex =
  /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;

var Present_Path = require(`path`);
var Script_Name = Present_Path.basename(__filename);
var Final_Name = Script_Name.slice(0, -3).toLowerCase();

exports.help = async (
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
  let used = process.memoryUsage();
  let cpus = os.cpus().map((cpu) => {
    cpu.total = Object.keys(cpu.times).reduce(
      (last, type) => last + cpu.times[type],
      0
    );
    return cpu;
  });
  let cpu = cpus.reduce(
    (last, cpu, _, { length }) => {
      last.total += cpu.total;
      last.speed += cpu.speed / length;
      last.times.user += cpu.times.user;
      last.times.nice += cpu.times.nice;
      last.times.sys += cpu.times.sys;
      last.times.idle += cpu.times.idle;
      last.times.irq += cpu.times.irq;
      return last;
    },
    {
      speed: 0,
      total: 0,
      times: {
        user: 0,
        nice: 0,
        sys: 0,
        idle: 0,
        irq: 0,
      },
    }
  );
  let timestamp = speed();
  let latensi = speed() - timestamp;
  let latest = `════════★ 𝐍𝐨𝐝𝐞𝐉𝐒 𝐌𝐞𝐦-𝐔𝐬𝐚𝐠𝐞:
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), ` `)}: ${formatp(
        used[key]
      )}`
  )
  .join(`\n`)}
════════★ ${
    cpus[0]
      ? `𝐓𝐨𝐭𝐚𝐥 𝐂𝐏𝐔 𝐔𝐬𝐚𝐠𝐞
${cpus[0].model.trim()} (${cpu.speed} ᴍʜᴢ)${Object.keys(cpu.times)
          .map(
            (type) =>
              `- *${(type + `*`).padEnd(6)}: ${(
                (100 * cpu.times[type]) /
                cpu.total
              ).toFixed(2)}%`
          )
          .join(`\n`)}
════════★ 𝐂𝐏𝐔 𝐂𝐨𝐫𝐞(𝐬) 𝐔𝐬𝐚𝐠𝐞 (_${cpus.length}_ 𝐂𝐨𝐫𝐞 𝐂𝐏𝐔)
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} ᴍʜᴢ)${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + `*`).padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`
        )
        .join(`\n`)}`
  )
  .join(`\n\n`)}`
      : ``
  }`.trim();
  return await Image_Button(
    ӄ𝖚𝖓𝖆𝖎,
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
    A𝖗𝖌𝖘,
    "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png",
    `⚡「  𝐁𝐞𝐥𝐨𝐰 𝐅𝐮𝐥𝐥 𝐋𝐢𝐬𝐭 」⚡
    
╔════════★
║▷ *🔑ᴘʀᴇꜰɪx:* ${prefix}
║▷ *🦞ɢɪᴛʜᴜʙ:* ${prefix}repo
║▷ *🍾ɢᴇᴛ ᴠᴀʟᴋʏʀɪᴇ:* ${prefix}request
╚═══════╝
╔═══════★ 𝐒𝐲𝐬𝐭𝐞𝐦 𝐈𝐧𝐟𝐨𝐬
║シ︎ *⚙️ᴇɴɢɪɴᴇ:* ${vers.vers}
║シ︎ *💻ᴘʟᴀᴛꜰᴏʀᴍ:* ${os.platform()}
║シ︎ *🛰️ʟᴀᴛᴇɴᴄʏ:* ${latensi.toFixed(4)}(s)
║シ︎ *☕ᴜᴘᴛɪᴍᴇ:* ${runtime(process.uptime())}
║シ︎ *🎮ʀᴀᴍ:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(
      os.totalmem()
    )}
╚═══════╝

╔══「 🦄𝐑𝐚𝐧𝐝𝐨𝐦𝐬🦄 」
║• _${prefix}_advice
║• _${prefix}_fact
║• _${prefix}_meme
║• _${prefix}_neko
║• _${prefix}_quote
║• _${prefix}_reddit
║• _${prefix}_sr
║• _${prefix}_subreddit
║• _${prefix}_ship
║• _${prefix}_waifu
╚═══════◇

╔══「 🐾𝐀𝐧𝐢𝐦𝐚𝐭𝐢𝐨𝐧/𝐆𝐢𝐟🐾 」
║• _${prefix}_cuddle
║• _${prefix}_hug
║• _${prefix}_kick
║• _${prefix}_kiss
║• _${prefix}_pat
║• _${prefix}_slap
╚═══════◇

╔══「 ⭕𝐘𝐨𝐮𝐓𝐮𝐛𝐞+𝐅𝐢𝐥𝐭𝐞𝐫⭕ 」
║• _${prefix}_yt8d
║• _${prefix}_ytbassboost
║• _${prefix}_ytecho
║• _${prefix}_ytflanger
║• _${prefix}_ytnightcore
║• _${prefix}_ytphaser
║• _${prefix}_ytreverse
║• _${prefix}_ytslow
║• _${prefix}_ytspeed
║• _${prefix}_ytsubboost
║• _${prefix}_ytsuperslow
║• _${prefix}_ytsuperspeed
║• _${prefix}_ytsurround
║• _${prefix}_ytvaporwave
║• _${prefix}_ytvibrato
╚═══════◇

╔══「 👑𝐎𝐰𝐧𝐞𝐫👑 」
║• _${prefix}_ban
║• _${prefix}_unban
║• _${prefix}_reboot
║• _${prefix}_join
║• _${prefix}_leave
║• _${prefix}_support
║• _${prefix}_bcgroup
║• _${prefix}_bc
╚═══════◇

╔══「 📥𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫𝐬📥 」
║• _${prefix}_yta
║• _${prefix}_play
║• _${prefix}_song
║• _${prefix}_sing
║• _${prefix}_ytmp3
║• _${prefix}_ytplay
║• _${prefix}_ytaudio
║• _${prefix}_ytmusic
║• _${prefix}_youtubemusic
║•
║• _${prefix}_ytv
║• _${prefix}_watch
║• _${prefix}_ytmp4
║• _${prefix}_stream
║• _${prefix}_ytvideo
║• _${prefix}_youtubevideo
╚═══════◇

╔══「 📼𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐞𝐫📼 」
║• _${prefix}_carbon
║• _${prefix}_steal
║• _${prefix}_sticker
║• _${prefix}_tinyurl
║• _${prefix}_toimg
║• _${prefix}_stourl
╚═══════◇

╔══「 👇🏽 𝐒𝐞𝐚𝐫𝐜𝐡 👇🏽」
║• _${prefix}_anime
║• _${prefix}_manga
║•
║• _${prefix}_gify
║• _${prefix}_gif
║• _${prefix}_google
║• _${prefix}_iguser 
║• _${prefix}_image
║• _${prefix}_lyrics
║• _${prefix}_pinterest
║• _${prefix}_pokemon
║• _${prefix}_wallpaper
║•
║• _${prefix}_yts
║• _${prefix}_ytsearch
║• _${prefix}_ytscrape
║• _${prefix}_youtubescrape
║• _${prefix}_youtubesearch
╚═══════◇

╔══「 🔰𝐆𝐫𝐨𝐮𝐩𝐬/𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧🔰 」
║• _${prefix}_del
║• _${prefix}_demote
║• _${prefix}_promote
║• _${prefix}_group
║• _${prefix}_remove
║• _${prefix}_setdesc
║• _${prefix}_setgpfp
║• _${prefix}_tagall
╚═══════◇

╔══「 🍰𝐅𝐢𝐥𝐭𝐞𝐫𝐬/𝐀𝐮𝐝𝐢𝐨🍰 」
║• _${prefix}_bassboost
║• _${prefix}_echo
║• _${prefix}_fast
║• _${prefix}_flanger
║• _${prefix}_nightcore
║• _${prefix}_phaser
║• _${prefix}_reverse
║• _${prefix}_slow
║• _${prefix}_speed
║• _${prefix}_subboost
║• _${prefix}_superslow
║• _${prefix}_superspeed
║• _${prefix}_surround
║• _${prefix}_vaporwave
║• _${prefix}_vibrato
╚═══════◇

╔══「 🍌𝐇𝐞𝐧𝐭𝐚𝐢🍌 」 
║• _${prefix}_ass
║• _${prefix}_bdsm
║• _${prefix}_cum  
║• _${prefix}_doujin
║• _${prefix}_feet  
║• _${prefix}_femdom  
║• _${prefix}_foxgirl  
║• _${prefix}_glasses  
║• _${prefix}_hentai
║• _${prefix}_maid 
║• _${prefix}_masturbation
║• _${prefix}_netorare  
║• _${prefix}_orgy
║• _${prefix}_panties
║• _${prefix}_pussy
║• _${prefix}_school
║• _${prefix}_tentacles
║• _${prefix}_thighs
║• _${prefix}_uniform
║• _${prefix}_yuri
╚═══════◇

╔══「 🍆𝐏𝐨𝐫𝐧🍆 」
║• _${prefix}_p4k
║• _${prefix}_pblowjob
║• _${prefix}_pmilf
║• _${prefix}_ppussy
║• _${prefix}_pslut
╚═══════◇`
  );
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
