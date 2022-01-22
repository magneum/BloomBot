`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const ffmpeg = require(`fluent-ffmpeg`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const got = require(`got`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      if (
        ֆǟӄʊʀǟ.isGroup &&
        !ֆǟӄʊʀǟ.fromMe &&
        !ֆǟӄʊʀǟ.isSenderDev &&
        !ֆǟӄʊʀǟ.isSenderGroupAdmin
      ) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*❌ Admins Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      const Bagde = require("../../Sakura🍃Goose/Badge");
      const ms = require("parse-ms");
      Bagde.findOne(
        {
          ID: ֆǟӄʊʀǟ.sender,
        },
        async (err, userBadge) => {
          if (err) return console.log(err);
          if (!userBadge) {
            var newUser = new Bagde({
              ID: ֆǟӄʊʀǟ.sender,
              Badge: "🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ",
              value: "True",
              Limits: 10,
              CurrentLimitTime: Date.now(),
              PermanentLimitTime: 86400000,
            });
            newUser
              .save()
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            return Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `*@${ꜱᴇɴᴅᴇʀeceived}, Account Verified.Try Command Again!*`
            );
            //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          } else {
            var clock =
              userBadge.PermanentLimitTime -
              (Date.now() - userBadge.CurrentLimitTime);
            if (clock > 0 && userBadge.Limits == 0) {
              userBadge.value = "False";
              userBadge
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
            }
            //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
            if (clock > 0 && !userBadge.Limits == 0) {
              userBadge.Limits = userBadge.Limits - 1;
              userBadge.value = "True";
              userBadge
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
            }
            //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
            if (clock < 0 && userBadge.Limits == 0) {
              if (userBadge.Badge === "🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 10;
              } else if (userBadge.Badge === "🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 20;
              } else if (userBadge.Badge === "🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 40;
              } else if (userBadge.Badge === "🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 60;
              } else if (userBadge.Badge === "💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 80;
              } else if (userBadge.Badge === "💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ") {
                userBadge.Limits = 100;
              }
              userBadge.CurrentLimitTime = Date.now();
              userBadge.value = "True";
              userBadge
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
            }
          }
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          const hold = require("../../Sakura🛰️Server/Hold");
          hold.Hold(ֆǟӄʊʀǟ);
          console.log(userBadge);
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          if (ֆǟӄʊʀǟ.isGroup) {
            var where = "(ᴀᴅᴍɪɴ)";
          } else {
            var where = "(ᴘʀɪᴠᴀᴛᴇ)";
          }

          await got(`https://www.reddit.com/r/pussy/random.json`).then(
            async (newScpt) => {
              var file = JSON.parse(newScpt.body);
              var title = file[0].data.children[0].data.title;
              var amazeme = file[0].data.children[0].data.url;

              if (
                !amazeme.endsWith(`.png`) &&
                !amazeme.endsWith(`.jpg`) &&
                !amazeme.endsWith(`.jpeg`)
              ) {
                var amazeme = await got(
                  `https://www.reddit.com/r/pussy/random.json`
                ).then(async (newScpt) => {
                  var file = JSON.parse(newScpt.body);
                  var title = file[0].data.children[0].data.title;
                  var amazeme = file[0].data.children[0].data.url;
                  return Sakura_Buttons.MIB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `
────★ 🔞𝐇𝐮𝐦𝐚𝐧 𝐍𝐒𝐅𝐖

👅 𝐓𝐨𝐩𝐢𝐜: ${title}
📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} ${where}
`,
                    amazeme
                  );
                });
              } else if (amazeme.endsWith(`.gif`)) {
                const downloader = await new Downloader({
                  url: amazeme,
                  directory: `./Sakura🗑️Temp`,
                  fileName: `${Ping}_${FinalName}.gif`,
                  cloneFiles: false,
                });
                try {
                  await downloader.download();
                } catch (ℓαвєяяσя) {
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `@${ꜱᴇɴᴅᴇʀeceived},

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥺 𝐎𝐩𝐩𝐬𝐢𝐞 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧!
║🍹 𝐒𝐞𝐫𝐯𝐞𝐫 𝐃𝐢𝐝𝐧'𝐭 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
╚════════════╝`
                  );
                }
                ffmpeg(`./Sakura🗑️Temp/${Ping}_${FinalName}.gif`)
                  .outputOptions([
                    `-pix_fmt yuv420p`,
                    `-c:v libx264`,
                    `-movflags +faststart`,
                    `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
                  ])
                  .save(`./Sakura🗑️Temp/${Ping}_${FinalName}.mp4`)
                  .on(`end`, async () => {
                    return Sakura_Static.MSB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `
────★ 🔞𝐇𝐮𝐦𝐚𝐧 𝐍𝐒𝐅𝐖

👅 𝐓𝐨𝐩𝐢𝐜: ${title}
📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} ${where}
`,
                      `./Sakura🗑️Temp/${Ping}_${FinalName}.mp4`
                    )
                      .then(
                        cleanRF.cleanRF(
                          `./Sakura🗑️Temp/${Ping}_${FinalName}.mp4`,
                          `./Sakura🗑️Temp/${Ping}_${FinalName}.gif`
                        )
                      )
                      .catch((ℓαвєяяσя) =>
                        ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                  });
              } else {
                return Sakura_Buttons.MIB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `
────★ 🔞𝐇𝐮𝐦𝐚𝐧 𝐍𝐒𝐅𝐖

👅 𝐓𝐨𝐩𝐢𝐜: ${title}
📞 𝐎𝐫𝐝𝐞𝐫𝐞𝐝𝐁𝐲: @${ꜱᴇɴᴅᴇʀeceived} ${where}
`,
                  amazeme
                );
              }
            }
          );
        }
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
