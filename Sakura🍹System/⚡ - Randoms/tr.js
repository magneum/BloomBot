`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const translate = require(`@vitalets/google-translate-api`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `Use  *${ᴋᴇɪ}tr <text> | <language>*  to translate text to the specified language. 
You can also reply to a text message with syntax  *${ᴋᴇɪ}tr <language>*  to translate text.`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
      const Bagde = require(`../../Sakura🍃Goose/badge`);
      const ms = require(`parse-ms`);
      Bagde.findOne(
        {
          ID: ֆǟӄʊʀǟ.sender,
        },
        async (err, userBadge) => {
          if (err) return console.log(err);
          if (!userBadge) {
            var newUser = new Bagde({
              ID: ֆǟӄʊʀǟ.sender,
              Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
              value: `True`,
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
              userBadge.value = `False`;
              userBadge
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
            }
            //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
            if (clock > 0 && !userBadge.Limits == 0) {
              userBadge.Limits = userBadge.Limits - 1;
              userBadge.value = `True`;
              userBadge
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
            }
            //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
            if (clock < 0 && userBadge.Limits == 0) {
              if (userBadge.Badge === `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`) {
                userBadge.Limits = 10;
              } else if (userBadge.Badge === `🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ`) {
                userBadge.Limits = 20;
              } else if (userBadge.Badge === `🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ`) {
                userBadge.Limits = 40;
              } else if (userBadge.Badge === `🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ`) {
                userBadge.Limits = 60;
              } else if (userBadge.Badge === `💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ`) {
                userBadge.Limits = 80;
              } else if (userBadge.Badge === `💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ`) {
                userBadge.Limits = 100;
              }
              userBadge.CurrentLimitTime = Date.now();
              userBadge.value = `True`;
              userBadge
                .save()
                .catch((ℓαвєяяσя) =>
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                );
            }
          }
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          const hold = require(`../../Sakura🛰️Server/Hold`);
          hold.Hold(ֆǟӄʊʀǟ);
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          if (!ֆǟӄʊʀǟ.fromMe && userBadge.value === `False`) {
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
          //|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
          var text = ``;
          var language = ``;
          if (Needs.length === 0) {
            var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
            var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
              𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
            const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
            return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              ꜱᴇɴᴅᴇʀɪᴅ,
              ꜱᴇɴᴅᴇʀeceived,
              ֆǟӄʊʀǟ.commandName,
              ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
            );
          }

          if (!ֆǟӄʊʀǟ.isReply) {
            try {
              var body = ֆǟӄʊʀǟ.body.split(`|`);
              text = body[0].replace(
                ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + ` `,
                ``
              );
              var i = 0;
              while (body[1].split(` `)[i] == ``) {
                i++;
              }
              language = body[1].split(` `)[i];
            } catch (ℓαвєяяσя) {
              if (ℓαвєяяσя instanceof TypeError) {
                text = ֆǟӄʊʀǟ.body.replace(
                  ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + ` `,
                  ``
                );
                language = `English`;
              }
            }
          } else if (ֆǟӄʊʀǟ.replyMessage) {
            text = ֆǟӄʊʀǟ.replyMessage;
            language = Needs[0];
          } else {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                ֆǟӄʊʀǟ.chatId,
                `Please reply to a text message.`,
                MessageType.text,
                { quoted: chat }
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
          }

          if (text.length > 4000) {
            await ӄʀǟӄɨռʐ
              .sendMessage(
                ֆǟӄʊʀǟ.chatId,
                `*Total characters should be less than 4000.*\nTotal characters for current input were {}.`.format(
                  text.length
                ),
                MessageType.text,
                { quoted: chat }
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
          }
          await translate(text, {
            to: language,
          }).then((res) => {
            ӄʀǟӄɨռʐ
              .sendMessage(
                ֆǟӄʊʀǟ.chatId,
                `Translated From *${res.from.language.iso}* to> *${language}*
${res.text}`,
                MessageType.text,
                { quoted: chat }
              )
              .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
          });
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
