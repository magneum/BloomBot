`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Warning = require(`../../Sakura🍃Goose/warning`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}unwarn* _reply to person_`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, _This Command is Only For Groups!_!`
        );
      }
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      const hold = require("../../Sakura🛰️Server/Hold");
      hold.Hold(ֆǟӄʊʀǟ);
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isSenderGroupAdmin) {
        try {
          return Sakura_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `*❌ Admins Only | You Are Not Allowed! ❌*`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
          );
        } catch (Error) {
          ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        }
      }
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin) {
        try {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
          );
        } catch (Error) {
          ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        }
      }
      `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      if (!ֆǟӄʊʀǟ.isReply) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          աɦօֆɛռȶɦǟȶ,
          ꜱᴇɴᴅᴇʀeceived,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      } else if (ֆǟӄʊʀǟ.isReply) {
        var person = ֆǟӄʊʀǟ.replyParticipant;
        if (ֆǟӄʊʀǟ.owner === person) {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `*❌ Owner Can't Be Warned!*`
          );
        }
        `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
        Warning.findOne(
          {
            ID: person,
            ServerID: ֆǟӄʊʀǟ.chatId,
          },
          async (Error, userWarn) => {
            if (Error) return console.log(Error);
            if (!userWarn) {
              return Sakura_Buttons.MTB(
                ӄʀǟӄɨռʐ,
                chat,
                ֆǟӄʊʀǟ,
                `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║♀️ 𝗣𝗲𝗿𝘀𝗼𝗻: @${person}
║❗ 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: Never Warned!
╚════════════╝`
              ).catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
            } else {
              if (userWarn.warnings > 0) {
                userWarn.warnings = userWarn.warnings - 1;
                await userWarn
                  .save()
                  .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                return Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║♀️ 𝗣𝗲𝗿𝘀𝗼𝗻: @${person}
║❗ 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${userWarn.warnings}
╚════════════╝`
                ).catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              }
              `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
              if (userWarn.warnings == 0) {
                Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║♀️ 𝗣𝗲𝗿𝘀𝗼𝗻: @${person}
║❗ 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: No Warnings!
╚════════════╝`
                ).catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                return await userWarn
                  .delete()
                  .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              }
            }
          }
        );
        `|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
      } else {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          աɦօֆɛռȶɦǟȶ,
          ꜱᴇɴᴅᴇʀeceived,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      }
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
`|⬡===========================================|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |===========================================⬡|`;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
