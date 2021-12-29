// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF");
const BanList = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/BanList`);
const Downloader = require(`nodejs-file-downloader`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const motor = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/motor`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const fs = require(`fs`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `unban`,
  𝓜𝓮𝓮6ʍօʀɛ: `Remove people or group from blacklist.`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        try {
          return Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `Who Is This Dumbo •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Owner-Only Commands.


┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│*❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*
└───────◆➤`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isPm && 𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
        let PersonToRemoveFromBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId;
        const RmUser = PersonToRemoveFromBanlist.substring(
          0,
          PersonToRemoveFromBanlist.indexOf(`@`)
        );
        if (!(await BanList.getBanlistUser(PersonToRemoveFromBanlist, ``))) {
          try {
            return Mizuki_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              𝓜𝖎𝖟𝖚ӄ𝖎,
              `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽${RmUser} 
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Not Pre-Banned!
└──────◆➤`,
              `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
            );
          } catch (ℓαвєяяσя) {
            ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
          }
        } else {
          await BanList.removeBanlistUser(PersonToRemoveFromBanlist, ``).then(
            async () => {
              try {
                return Mizuki_Static.MGS(
                  ӄʀǟӄɨռʐ,
                  chat,
                  𝓜𝖎𝖟𝖚ӄ𝖎,
                  `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${RmUser}
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└──────◆➤`,
                  `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
                );
              } catch (ℓαвєяяσя) {
                ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
              }
            }
          );
        }
      } else {
        if (Needs.length > 0) {
          let PersonToRemoveFromBanlist = await motor.nomentioncontact(
            Needs,
            ӄʀǟӄɨռʐ,
            𝓜𝖎𝖟𝖚ӄ𝖎
          );
          if (PersonToRemoveFromBanlist === undefined) return;
          PersonToRemoveFromBanlist += `@s.whatsapp.net`;
          const RmUser = PersonToRemoveFromBanlist.substring(
            0,
            PersonToRemoveFromBanlist.indexOf(`@`)
          );
          if (
            !(await BanList.getBanlistUser(
              PersonToRemoveFromBanlist,
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId
            ))
          ) {
            try {
              return Mizuki_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽${RmUser} 
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Not Pre-Banned!
└──────◆➤`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
              );
            } catch (ℓαвєяяσя) {
              ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
            }
          } else {
            await BanList.removeBanlistUser(
              PersonToRemoveFromBanlist,
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId
            ).then(async () => {
              try {
                return Mizuki_Static.MGS(
                  ӄʀǟӄɨռʐ,
                  chat,
                  𝓜𝖎𝖟𝖚ӄ𝖎,
                  `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${RmUser} _from this group_
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└──────◆➤`,
                  `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
                );
              } catch (ℓαвєяяσя) {
                ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
              }
            });
          }
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
          let PersonToRemoveFromBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant;
          const RmUser = PersonToRemoveFromBanlist.substring(
            0,
            PersonToRemoveFromBanlist.indexOf(`@`)
          );
          if (
            !(await BanList.getBanlistUser(
              PersonToRemoveFromBanlist,
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId
            ))
          ) {
            try {
              return Mizuki_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽𝐔𝐬𝐞𝐫: ${RmUser} 
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Not Pre-Banned!
└──────◆➤`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
              );
            } catch (ℓαвєяяσя) {
              ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
            }
          } else {
            await BanList.removeBanlistUser(
              PersonToRemoveFromBanlist,
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId
            ).then(async () => {
              try {
                return Mizuki_Static.MGS(
                  ӄʀǟӄɨռʐ,
                  chat,
                  𝓜𝖎𝖟𝖚ӄ𝖎,
                  `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽𝐆𝐫𝐨𝐮𝐩 ‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└──────◆➤`,
                  `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
                );
              } catch (ℓαвєяяσя) {
                ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
              }
            });
          }
          // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
        } else {
          if (!(await BanList.getBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId))) {
            try {
              return Mizuki_Static.MGS(
                ӄʀǟӄɨռʐ,
                chat,
                𝓜𝖎𝖟𝖚ӄ𝖎,
                `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽𝐆𝐫𝐨𝐮𝐩: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}, 
│🔓𝐒𝐭𝐚𝐭𝐮𝐬: Not Pre-Banned!
└──────◆➤`,
                `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
              );
            } catch (ℓαвєяяσя) {
              ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
            }
          } else {
            await BanList.removeBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId).then(
              async () => {
                try {
                  return Mizuki_Static.MGS(
                    ӄʀǟӄɨռʐ,
                    chat,
                    𝓜𝖎𝖟𝖚ӄ𝖎,
                    `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived} (Owner)

┌────◇🥭𝐓𝐨𝐩𝐢𝐜: _*${FinalName}*_
│
│👌🏽𝐆𝐫𝐨𝐮𝐩 ‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}
│🛡️ꜱᴜᴅᴏ ᴜɴʙᴀɴ ᴀᴄᴄᴇᴘᴛᴇᴅ
└──────◆➤`,
                    `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎™.mp4`
                  );
                } catch (ℓαвєяяσя) {
                  ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
                }
              }
            );
          }
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
