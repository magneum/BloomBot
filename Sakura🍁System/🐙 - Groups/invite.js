`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
  name: newScpt,
  description: `Use this command to send a group invite link in the group or personally to someone.`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}invite`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const jsoncool = await JSON.parse(
        fs.readFileSync(`./Sakura🛰️Server/Coolist.json`)
      );
      await jsoncool.push(ֆǟӄʊʀǟ.sender);
      await fs.writeFileSync(
        `./Sakura🛰️Server/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(ֆǟӄʊʀǟ.sender);
        await fs.writeFileSync(
          `./Sakura🛰️Server/Coolist.json`,
          JSON.stringify(jsoncool)
        );
      }, 15000);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isSenderGroupAdmin) {
        try {
          return Sakura_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `*❌ Admins Only | You Are Not Allowed! ❌*`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        }
      }

      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin) {
        try {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
                      `@${ꜱᴇɴᴅᴇʀeceived}, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        }
      }

      if (!ֆǟӄʊʀǟ.isGroup) {
        try {
          return Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived}, 

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
`
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        }
      }

      const code = await ӄʀǟӄɨռʐ.groupInviteCode(chat.key.remoteJid);
      const groupData = await ӄʀǟӄɨռʐ.groupMetadata(chat.key.remoteJid);
      try {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(ֆǟӄʊʀǟ.chatId);
      } catch {
        𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = `https://i.postimg.cc/6QmT53dR/Npp.png`;
      }
      if (ֆǟӄʊʀǟ.isReply) {
        var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
        var personreceived = Receiver.substring(0, Receiver.length - 15);
        try {
          Sakura_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `@${ꜱᴇɴᴅᴇʀeceived}, _Invite link has been sent in their DM!_`
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
        }
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          Receiver,
          { url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 },
          MessageType.image,
          { mimetype: Mimetype.png }
        );
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            Receiver,
            {
              contentText: `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 •@${personreceived}, 


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupData.subject}
💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupData.participants.length}
🍰 𝐆𝐫𝐨𝐮𝐩: https://chat.whatsapp.com/${code}
`,
              footerText: `(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 \n${Clock}`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}help`,
                  buttonText: { displayText: `${ᴋᴇɪ}help` },
                  type: 1,
                },
              ],
              headerType: 4,
              imageMessage: media.message.imageMessage,
            },
            MessageType.buttonsMessage,
            {
              contextInfo: { mentionedJid: [Receiver] },
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
      } else {
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          ֆǟӄʊʀǟ.chatId,
          { url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 },
          MessageType.image,
          { mimetype: Mimetype.png }
        );
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            ֆǟӄʊʀǟ.chatId,
            {
              contentText: `@${ꜱᴇɴᴅᴇʀeceived}, 


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
📜𝐆𝐫𝐨𝐮𝐩 𝐍𝐚𝐦𝐞: ${groupData.subject}
💞𝐌𝐞𝐦𝐛𝐞𝐫 𝐂𝐨𝐮𝐧𝐭: ${groupData.participants.length}
🍰 𝐆𝐫𝐨𝐮𝐩: https://chat.whatsapp.com/${code}
`,
              footerText: `(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭 \n${Clock}`,
              buttons: [
                {
                  buttonId: `${ᴋᴇɪ}help`,
                  buttonText: { displayText: `${ᴋᴇɪ}help` },
                  type: 1,
                },
              ],
              headerType: 4,
              imageMessage: media.message.imageMessage,
            },
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
      }
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`⬡🍁⬡`;
`⬡🍁⬡`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`(𝐜)𝐌𝐢𝐳𝐮𝐤𝐢 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡🍁⬡===========================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
