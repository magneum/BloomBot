`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const motor = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/motor`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `promote`,
  description: `Demote a person from admin`,
  𝓜𝓮𝓮6ʍօʀɛ: `Use this module to demote a person from admin by entering the person's mobile number. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example-
*${ᴋᴇɪ}promote 9861212121*`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg) {
    try {
      `🐙============================================================================================================================<⚡>`;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived},
This command is only applicable for group chats.`,
          MessageType.text,
          {
            quoted: chat,
            contextInfo: {
              mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
            },
          }
        );
        return;
      }
      `🐙============================================================================================================================<⚡>`;
      console.log(𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO);
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
        let content = await fs.readFileSync(_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ);
        const media = await ӄʀǟӄɨռʐ.prepareMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          content,
          MessageType.image,
          {
            mimetype: Mimetype.png,
          }
        );
        const buttons = [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ];
        const buttonMessage = {
          contentText: `@${ꜱᴇɴᴅᴇʀeceived}, ❌ You Are Not Allowed!

*🎊Groups:* Admins & Developers!
*🫒Private:* Everyone`,
          footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
          buttons: buttons,
          headerType: 4,
          imageMessage: media.message.imageMessage,
        };
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            buttonMessage,
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      `🐙============================================================================================================================<⚡>`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
        return await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            {
              url: _𝔏𝔞𝔟_.ERROR,
            },
            MessageType.image,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
              mimetype: Mimetype.png,
              caption: `
⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀeceived}, *ʏᴏᴜ need ᴛᴏ ᴍᴀᴋᴇ ᴍᴇ ᴀᴅᴍɪɴ ꜰɪʀꜱᴛ*`,
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      `🐙============================================================================================================================<⚡>`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply && typeof arg[0] == `undefined`) {
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived},
Reply/tag/enter contact number of the person to be demoted.`,
          MessageType.text,
          {
            quoted: chat,
            contextInfo: {
              mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
            },
          }
        );
        return;
      }
      `🐙============================================================================================================================<⚡>`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        const reply = chat.message.extendedTextMessage;
        var contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        var contact = await motor.nomentioncontact(arg, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
      `🐙============================================================================================================================<⚡>`;
      var admin = false;
      var isMember = await motor.onwhatsappserver(contact, 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers);
      for (const index in 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers) {
        if (contact == 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].jid.split(`@`)[0]) {
          if (𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].isAdmin) {
            admin = true;
          }
        }
      }
      `🐙============================================================================================================================<⚡>`;
      if (isMember) {
        if (!admin == true) {
          const arr = [contact + `@s.whatsapp.net`];
          ӄʀǟӄɨռʐ.groupMakeAdmin(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, arr);
          ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived},
${contact} promoted to admin*`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          );
        } else {
          ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived},
${contact} is already an admin`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          );
        }
      }
      `🐙============================================================================================================================<⚡>`;
      if (!isMember) {
        if (contact === undefined) {
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived},
Person not found.`,
              MessageType.text,
              {
                quoted: chat,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }
      }
      `🐙============================================================================================================================<⚡>`;
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
