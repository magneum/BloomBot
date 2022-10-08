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
} = require("../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ");
let fs = require("fs");
let got = require("got");
let util = require("util");
let hxz = require("hxz-api");
let chalk = require("chalk");
let db = require("quick.db");
let axios = require("axios");
let canvacord = require("canvacord");
let { Character } = require("mailist");
let moment = require("moment-timezone");
let Carbon = require("unofficial-carbon-now");
let { exec, execSync } = require("child_process");
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { DownloaderHelper } = require("node-downloader-helper");
let { Sticker, StickerTypes } = require("wa-sticker-formatter");
let { Image_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let Present_Path = require("path");
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.p4k = async (
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
  ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
  await got("https://www.reddit.com/r/RealGirls/random.json").then(
    async (FF) => {
      let ꜰɪʟᴇ = JSON.parse(FF.body);
      let title = ꜰɪʟᴇ[0].data.children[0].data.title;
      let ꜰɪɴᴀʟʟɪɴᴋ = ꜰɪʟᴇ[0].data.children[0].data.url;
      if (
        !ꜰɪɴᴀʟʟɪɴᴋ.endsWith(".png") &&
        !ꜰɪɴᴀʟʟɪɴᴋ.endsWith(".jpg") &&
        !ꜰɪɴᴀʟʟɪɴᴋ.endsWith(".jpeg")
      ) {
        let ꜰɪɴᴀʟʟɪɴᴋ = await got(
          "https://www.reddit.com/r/RealGirls/random.json"
        ).then(async (FF) => {
          let ꜰɪʟᴇ = JSON.parse(FF.body);
          let title = ꜰɪʟᴇ[0].data.children[0].data.title;
          let ꜰɪɴᴀʟʟɪɴᴋ = ꜰɪʟᴇ[0].data.children[0].data.url;
          return await Image_Button(
            ӄryӄnz,
            Vlkyre,
            Vlkyre.A𝖗𝖌𝖘,
            ꜰɪɴᴀʟʟɪɴᴋ,
            `☣️𝐅𝐫𝐨𝐦: www.reddit.com
👅𝐓𝐨𝐩𝐢𝐜: ${title}`
          );
        });
        ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
      } else if (ꜰɪɴᴀʟʟɪɴᴋ.endsWith(".gif")) {
        let ɢᴏᴛꜰɪʟᴇ = `./Vlkyre🎒Bag/${Vlkyre.key.id}.gif`;
        let ɢɪᴠᴇꜰɪʟᴇ = `./Vlkyre🎒Bag/${Vlkyre.key.id}.mp4`;
        let ꜰɪʟᴇ𝐩𝐢 = new DownloaderHelper(ꜰɪɴᴀʟʟɪɴᴋ, "./Vlkyre🎒Bag", {
          fileName: `${Vlkyre.key.id}.gif`,
          retry: true,
        });
        await ꜰɪʟʟ𝐩𝐢.on("end", async () => {
          ffmpeg(ɢᴏᴛꜰɪʟᴇ)
            .outputOptions([
              "-pix_fmt yuv420p",
              "-c:v libx264",
              "-movflags +faststart",
              "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
            ])
            .save(ɢɪᴠᴇꜰɪʟᴇ)
            .on("end", async () => {
              await ӄryӄnz
                .sendMessage(
                  Vlkyre.chatID,
                  {
                    gifPlayback: true,
                    video: fs.readFileSync(ɢɪᴠᴇꜰɪʟᴇ),
                    mentions: [Vlkyre.sender, ʀᴇᴘʟɪᴇᴅ],
                    caption: `*⦓ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ⦔*

⚰️𝐅𝐨𝐫: @${Vlkyre.sender.split("@")[0] || ""}
☣️𝐅𝐫𝐨𝐦: www.reddit.com
👅𝐓𝐨𝐩𝐢𝐜: ${title}`,
                  },
                  { quoted: Vlkyre }
                )
                .then(fs.unlinkSync(ɢɪᴠᴇꜰɪʟᴇ, ɢᴏᴛꜰɪʟᴇ))
                .catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
            });
        });
        await ꜰɪʟʟ𝐩𝐢.on("error", async (Èrrðr) => {
          return await Caught(ӄryӄnz, Vlkyre, Èrrðr);
        });
        await ꜰɪʟʟ𝐩𝐢.start().catch(async (Èrrðr) => {
          return await Caught(ӄryӄnz, Vlkyre, Èrrðr);
        });
        ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
      } else {
        return await Image_Button(
          ӄryӄnz,
          Vlkyre,
          Vlkyre.A𝖗𝖌𝖘,
          ꜰɪɴᴀʟʟɪɴᴋ,
          `☣️𝐅𝐫𝐨𝐦: www.reddit.com
👅𝐓𝐨𝐩𝐢𝐜: ${title}`
        );
      }
    }
  );
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
