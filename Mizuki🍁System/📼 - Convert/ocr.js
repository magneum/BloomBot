`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Mizuki_Buttons = require(`../../Mizuki🛰️Server/Mizuki_Buttons`);
const Mizuki_Static = require(`../../Mizuki🛰️Server/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Mizuki🛰️Server/cleanRF`);
const ocrSpace = require(`ocr-space-api-wrapper`);
const ꜰᴜᴄᴋ = require(`../../Mizuki🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../Mizuki🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
module.exports = {
  name: newScpt,
  𝓜𝓮𝓮6ʍօʀɛ: `Use this command to obtain text from an image by  *${ᴋᴇɪ}space*  command.`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const Bagde = require("../../Mizuki🍃Goose/Badge");
      const ms = require("parse-ms");
      Bagde.findOne(
        {
          ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
        },
        async (err, userBadge) => {
          // return userBadge.delete();
          if (err) return console.log(err);
          if (!userBadge) {
            var newUser = new Bagde({
              ID: 𝓜𝖎𝖟𝖚ӄ𝖎.sender,
              Badge: "🧵ʙᴀꜱɪᴄ",
              value: "True",
              Limits: 10,
              CurrentLimitTime: Date.now(),
              PermanentLimitTime: 86400000,
            });
            newUser.save();
          } else {
            var clock =
              userBadge.PermanentLimitTime -
              (Date.now() - userBadge.CurrentLimitTime);
            if (clock > 0 && userBadge.Limits == 0) {
              userBadge.value = "False";
              userBadge.save();
            }
            if (clock > 0 && !userBadge.Limits == 0) {
              userBadge.Limits = userBadge.Limits - 1;
              userBadge.value = "True";
              userBadge.save();
            }
            if (clock < 0 && userBadge.Limits == 0) {
              if (userBadge.Badge === "🧵ʙᴀꜱɪᴄ") {
                userBadge.Limits = 10;
              } else if (userBadge.Badge === "🥉ʙʀᴏɴᴢᴇ") {
                userBadge.Limits = 20;
              } else if (userBadge.Badge === "🥈ꜱɪʟᴠᴇʀ") {
                userBadge.Limits = 40;
              } else if (userBadge.Badge === "🥇ɢᴏʟᴅ") {
                userBadge.Limits = 60;
              } else if (userBadge.Badge === "💍ᴘʟᴀᴛɪɴᴜᴍ") {
                userBadge.Limits = 80;
              } else if (userBadge.Badge === "💎ᴅɪᴀᴍᴏɴᴅ") {
                userBadge.Limits = 100;
              }
              userBadge.CurrentLimitTime = Date.now();
              userBadge.value = "True";
              userBadge.save();
            }
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          const jsoncool = await JSON.parse(
            fs.readFileSync(`./Mizuki🛰️Server/Coolist.json`)
          );
          await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
          fs.writeFileSync(
            `./Mizuki🛰️Server/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout((ℓαвєяяσя) => {
            if (ℓαвєяяσя) return console.log(ℓαвєяяσя);
            jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
            fs.writeFileSync(
              `./Mizuki🛰️Server/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 15000);
          console.log(userBadge);
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && userBadge.value === "False") {
            let time = ms(
              userBadge.PermanentLimitTime -
                (Date.now() - userBadge.CurrentLimitTime)
            );
            return Mizuki_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║⚡ 𝗗𝗮𝗶𝗹𝘆_𝗟𝗶𝗺𝗶𝘁: ${userBadge.Limits} commands
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
            );
          }
          `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
          if (𝓜𝖎𝖟𝖚ӄ𝖎.isImage) {
            var replyChatObject = {
              message: chat.message,
            };
            var imageId = chat.key.id;
            const fileName = `./Mizuki🗑️Temp/img-` + imageId;
            const filePath = await ӄʀǟӄɨռʐ.downloadAndSaveMediaMessage(
              replyChatObject,
              fileName
            );
            const text = await ocrSpace(filePath, {
              apiKey: _𝔏𝔞𝔟_.OCR,
            });
            var Msg = text.ParsedResults[0].ParsedText;
            if (Msg === ``) {
              ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `Couldn't find text in the image`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                );
            }
            ӄʀǟӄɨռʐ
              .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Msg, MessageType.text, {
                quoted: chat,
              })
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
            fs.unlink(filePath),
              (ℓαвєяяσя) => {
                if (ℓαвєяяσя) console.log(ℓαвєяяσя);
                else {
                  console.log(`Deleted!`);
                }
              };
          }

          if (𝓜𝖎𝖟𝖚ӄ𝖎.isReplyImage) {
            var replyChatObject = {
              message:
                chat.message.extendedTextMessage.contextInfo.quotedMessage,
            };
            var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
            const fileName = `./Mizuki🗑️Temp/img-` + imageId;
            const filePath = await ӄʀǟӄɨռʐ.downloadAndSaveMediaMessage(
              replyChatObject,
              fileName
            );
            const text = await ocrSpace(filePath, {
              apiKey: _𝔏𝔞𝔟_.OCR,
            });
            var Msg = text.ParsedResults[0].ParsedText;
            if (Msg === ``) {
              ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `Couldn't find text in the image`,
                  MessageType.text,
                  { quoted: chat }
                )
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat)
                );
            }
            ӄʀǟӄɨռʐ
              .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, Msg, MessageType.text, {
                quoted: chat,
              })
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
            fs.unlink(filePath),
              (ℓαвєяяσя) => {
                if (ℓαвєяяσя) console.log(ℓαвєяяσя);
                else {
                  console.log(`Deleted!`);
                }
              };
          }
          setTimeout(async () => {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                `Please tag a valid message.`,
                MessageType.text,
                { quoted: chat }
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
            return;
          }, 300000);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `Please tag a valid message.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        }
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
