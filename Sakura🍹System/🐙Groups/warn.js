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
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
    const defaultnm = ֆǟӄʊʀǟ.commandName;
    var ꜱᴇɴᴅᴇʀeceived = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    if (!ֆǟӄʊʀǟ.isGroup) {
      return Sakura_Buttons.MTB(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, _This Command is Only For Groups!_!`
      );
    }
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isSenderGroupAdmin) {
      return Sakura_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 *Admins Only*
║❌ _You Are Not Allowed!_
╚════════════╝`,
        _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
      );
    }
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin) {
      return Sakura_Buttons.MTB(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, 

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ *How Can I Use Admin Only Commands If i am not admin?*
║💡 𝐅𝐢𝐱: _Make Me Admin First!_
╚════════════╝`,
        _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
      );
    }
    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    if (
      ֆǟӄʊʀǟ.isReply &&
      ֆǟӄʊʀǟ.isGroup &&
      ֆǟӄʊʀǟ.isBotGroupAdmin &&
      ֆǟӄʊʀǟ.isSenderGroupAdmin
    ) {
      const RemoveTheSucker = chat.key.fromMe
        ? ӄʀǟӄɨռʐ.user.jid
        : ֆǟӄʊʀǟ.isGroup
        ? chat.participant
        : chat.key.remoteJid;
      Warning.findOne(
        {
          ID: RemoveTheSucker,
        },
        async (Error, userWarn) => {
          if (Error) console.log(Error);
          if (!userWarn) {
            var newUser = new Warning({
              ID: RemoveTheSucker,
              serverID: ֆǟӄʊʀǟ.chatId,
              warns: 1,
            });
            return await newUser
              .save()
              .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
          }
          var CurrentWarns = userWarn.warns;
          if (CurrentWarns > 0 && CurrentWarns <= 3) {
            userWarn.ID = RemoveTheSucker;
            userWarn.serverID = ֆǟӄʊʀǟ.chatId;
            userWarn.warns = userWarn.warns + 1;
          }

          if (ֆǟӄʊʀǟ.isBotGroupAdmin && CurrentWarns >= 3) {
            await userWarn.delet();
            setTimeout(async () => {
              await ӄʀǟӄɨռʐ
                .groupRemove(ֆǟӄʊʀǟ.chatId, [RemoveTheSucker])
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              return;
            }, 6000);
          }
        }
      );
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
  },
};
