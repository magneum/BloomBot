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
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let animals = require(`../../└𝐉𝐬𝐨𝐧┘/animals.json`);
let Zoology = require(`../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/zoo`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let Economy = require(`../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let { Image_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.zoo = async (
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
  await Economy.findOne(
    {
      ID: Vlkyre.sender,
    },
    async (Èrrðr, userEco) => {
      if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
      if (!userEco) {
        let newUser = new Economy({
          ID: Vlkyre.sender,
          money: 0,
          daily: 0,
          timeout: 86400000,
          fishdone: 0,
          fishtimeout: 1800000,
          workdone: 0,
          worktimeout: 900000,
        });
        await newUser.save().catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
        return await Image_Button(
          ӄryӄnz,
          Vlkyre,
          Vlkyre.A𝖗𝖌𝖘,
          "./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_DB.png",
          `╔◇══════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════◇╝

🧈Added To DB for Current command First Time!
◇ *Type:* _Just Bought A Zoo!_`
        );
        ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
      } else {
        await Zoology.findOne(
          {
            ID: Vlkyre.sender,
          },
          async (Èrrðr, userZoo) => {
            if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, Èrrðr);
            if (!userZoo) {
              let newUser = new Zoology({
                ID: Vlkyre.sender,
                zoodone: Date.now(),
                zootimeout: 1800000,
              });
              await newUser
                .save()
                .catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
              return await Image_Button(
                ӄryӄnz,
                Vlkyre,
                Vlkyre.A𝖗𝖌𝖘,
                "./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Forest.png",
                `╔◇══════════◇╗
┊  𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇══════════◇╝

🌿𝗡𝗮𝗺𝗲: _Amature Zoo Keeper!_
◇ *Type:* _Nothing Found_`
              );
              ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
            } else {
              if (userZoo.zootimeout - (Date.now() - userZoo.zoodone) > 0) {
                let time = ms(
                  userZoo.zootimeout - (Date.now() - userZoo.zoodone)
                );
                return await Image_Button(
                  ӄryӄnz,
                  Vlkyre,
                  Vlkyre.A𝖗𝖌𝖘,
                  "./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Forest.png",
                  `╔◇══════════◇╗
┊  𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇══════════◇╝

❌𝗘𝗿𝗿𝗼𝗿: You've Recently Bought a New Animal. 
🐓𝗭𝗼𝗼_𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s`
                );
                ("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
              } else {
                let zooID = Math.floor(Math.random() * 10) + 1;
                let rarity;
                if (zooID < 5) rarity = `small`;
                else if (zooID < 8) rarity = `medium`;
                else if (zooID < 9) rarity = `big`;
                else if (zooID < 10) rarity = `large`;
                else rarity = `legendary`;
                let anim = animals[rarity];
                let worth =
                  Math.floor(Math.random() * (anim.max - anim.min + 1)) +
                  anim.min;
                userEco.money = userEco.money + worth;
                userZoo.zoodone = Date.now();
                userZoo.zootimeout = 1800000;
                await userZoo
                  .save()
                  .catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, Èrrðr));
                return await Image_Button(
                  ӄryӄnz,
                  Vlkyre,
                  Vlkyre.A𝖗𝖌𝖘,
                  "./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Forest.png",
                  `╔◇══════════◇╗
┊  𝐙𝐨𝐨🐆𝐎𝐰𝐧𝐞𝐫
╚◇══════════◇╝

🐆𝗜𝘁𝗲𝗺_𝗙𝗼𝘂𝗻𝗱: _You Added ${anim.symbol} in your Zoo!_
💵𝗪𝗼𝗿𝘁𝗵: _People paid you *${worth}* to see._
💍𝗜𝘁𝗲𝗺 𝗥𝗮𝗿𝗶𝘁𝘆: _${rarity}_`
                );
              }
            }
          }
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
