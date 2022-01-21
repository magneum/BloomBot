`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|`;
`|🍁|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const Carbon = require(`unofficial-carbon-now`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `Example Usage,
*${ᴋᴇɪ}carbon <text>* 
*${ᴋᴇɪ}carbon*  and reply to a text message.
Use the -t flag after  *${ᴋᴇɪ}carbon*  to get the list of themes availble.
In order to specify the theme, use  *${ᴋᴇɪ}carbon <text> -t <theme>* .`,
  more: `No input provided.
Please use the command  
*${ᴋᴇɪ}carbon <text> -t <theme>*  
or reply to a text message with  
*${ᴋᴇɪ}carbon*  to carbonize the text.`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      const Bagde = require("../../Sakura🍃Goose/Badge");
      const ms = require("parse-ms");
      Bagde.findOne(
        {
          ID: ֆǟӄʊʀǟ.sender,
        },
        async (err, userBadge) => {
          // return userBadge.delete();
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
              userBadge.save();
            }
          }
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          const jsoncool = await JSON.parse(
            fs.readFileSync(`./Sakura🛰️Server/Coolist.json`)
          );
          await jsoncool.push(ֆǟӄʊʀǟ.sender);
          fs.writeFileSync(
            `./Sakura🛰️Server/Coolist.json`,
            JSON.stringify(jsoncool)
          );
          setTimeout((ℓαвєяяσя) => {
            if (ℓαвєяяσя) return console.log(ℓαвєяяσя);
            jsoncool.splice(ֆǟӄʊʀǟ.sender);
            fs.writeFileSync(
              `./Sakura🛰️Server/Coolist.json`,
              JSON.stringify(jsoncool)
            );
          }, 15000);
          console.log(userBadge);
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          if (!ֆǟӄʊʀǟ.fromMe && userBadge.value === "False") {
            let time = ms(
              userBadge.PermanentLimitTime -
                (Date.now() - userBadge.CurrentLimitTime)
            );
            return Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
            );
          }
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          let themes = [
            `3024 night`,
            `a11y dark`,
            `blackboard`,
            `base 16 (dark)`,
            `base 16 (light)`,
            `cobalt`,
            `duotone`,
            `hopscotch`,
            `lucario`,
            `material`,
            `monokai`,
            `night owl`,
            `nord`,
            `oceanic next`,
            `one light`,
            `one dark`,
            `panda`,
            `paraiso`,
            `seti`,
            `shades of purple`,
            `solarized (dark)`,
            `solarized (light)`,
            `synthwave '84`,
            `twilight`,
            `verminal`,
            `vscode`,
            `yeti`,
            `zenburn`,
          ];
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          var code = ``;
          if (Needs[0] == null && !ֆǟӄʊʀǟ.isReply) {
            var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
            var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
              𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
            const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
            userBadge.Limits = userBadge.Limits + 1;
            userBadge.save();
            return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              ꜱᴇɴᴅᴇʀɪᴅ,
              ꜱᴇɴᴅᴇʀeceived,
              ֆǟӄʊʀǟ.commandName,
              ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
            );
            //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          } else if (ֆǟӄʊʀǟ.isReply && !ֆǟӄʊʀǟ.replyMessage) {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                ֆǟӄʊʀǟ.chatId,
                `(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭  \n${Clock}\n\nThe replied message should be text.`,
                MessageType.text,
                { quoted: chat }
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            userBadge.Limits = userBadge.Limits + 1;
            userBadge.save();
            return;
            //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          } else if (ֆǟӄʊʀǟ.isReply) {
            code = ֆǟӄʊʀǟ.replyMessage;
            themeInput = themes[Math.floor(Math.random() * themes.length)];
          } else {
            try {
              var text = ֆǟӄʊʀǟ.body.replace(
                ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + ` `,
                ``
              );
              if (text[0] === `-` && text[1] === `t`) {
                if (text[2] == null) {
                  let counter = 1;
                  var message = `(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭\n🛰️ᴘɪɴɢ: _${Ping.toFixed(
                    2
                  )}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${
                    vers.vers
                  }_\n${Clock}\n\nAvailable themes: `;
                  themes.forEach((theme) => {
                    message += `\n${counter}. ${theme}`;
                    counter += 1;
                  });
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      ֆǟӄʊʀǟ.chatId,
                      `` + message + ``,
                      MessageType.text,
                      {
                        quoted: chat,
                      }
                    )
                    .catch((ℓαвєяяσя) =>
                      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                    );
                  userBadge.Limits = userBadge.Limits + 1;
                  userBadge.save();
                  return;
                  //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
                } else {
                  await ӄʀǟӄɨռʐ
                    .sendMessage(
                      ֆǟӄʊʀǟ.chatId,
                      `(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭\n🛰️ᴘɪɴɢ: _${Ping}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n${Clock}\n\nNo input provided.
Please use the command  *${ᴋᴇɪ}carbon <text>*  or reply to a text message with  *${ᴋᴇɪ}carbon*  to carbonize the text.`,
                      MessageType.text,
                      { quoted: chat }
                    )
                    .catch((ℓαвєяяσя) =>
                      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                    );
                  userBadge.Limits = userBadge.Limits + 1;
                  userBadge.save();
                  return;
                }
              }
              //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
              var body = ֆǟӄʊʀǟ.body.split(`-t`);
              code = body[0].replace(
                ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + ` `,
                ``
              );
              themeInput = body[1].substring(1);
              if (!themes.includes(themeInput)) {
                await ӄʀǟӄɨռʐ
                  .sendMessage(
                    ֆǟӄʊʀǟ.chatId,
                    `(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭  \n${Clock}\n\nPlease enter a valid theme.
Do note that theme names are  *case sensitive*${ᴋᴇɪ}`,
                    MessageType.text,
                    { quoted: chat }
                  )
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                  );
                userBadge.Limits = userBadge.Limits + 1;
                userBadge.save();
                return;
              }
              //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
            } catch (ℓαвєяяσя) {
              if (ℓαвєяяσя instanceof TypeError) {
                code = ֆǟӄʊʀǟ.body.replace(
                  ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + ` `,
                  ``
                );
                themeInput = themes[Math.floor(Math.random() * themes.length)];
              }
            }
          }
          //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
          const carbon = new Carbon.createCarbon()
            .setCode(code)
            .setPrettify(true)
            .setTheme(themeInput);
          const output = await Carbon.generateCarbon(carbon);
          await ӄʀǟӄɨռʐ
            .sendMessage(ֆǟӄʊʀǟ.chatId, output, MessageType.image, {
              quoted: chat,
              mimetype: Mimetype.png,
              caption: `(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐁𝐨𝐭
Colour Scheme: {}`.format(themeInput),
            })
            .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
        }
      );
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍁|`;
`|🍁|`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
