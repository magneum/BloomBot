// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const motor = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/motor`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `promote`,
  description: `Demote a person from admin`,
  𝓜𝓮𝓮6ʍօʀɛ: `Use this module to demote a person from admin by entering the person's mobile number. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example-
*${ᴋᴇɪ}promote 9861212121*`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
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
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${vers.vers}_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(
              4
            )}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_

•@${ꜱᴇɴᴅᴇʀeceived},
This command is only applicable for group chats.`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        return;
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
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
          footerText: `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${
            vers.vers
          }_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(4)}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
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
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
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
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply && typeof arg[0] == `undefined`) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${vers.vers}_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(
              4
            )}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_

•@${ꜱᴇɴᴅᴇʀeceived},
Reply/tag/enter contact number of the person to be demoted.`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        return;
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        const reply = chat.message.extendedTextMessage;
        var contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        var contact = await motor.nomentioncontact(arg, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var admin = false;
      var isMember = await motor.onwhatsappserver(contact, 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers);
      for (const index in 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers) {
        if (contact == 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].jid.split(`@`)[0]) {
          if (𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].isAdmin) {
            admin = true;
          }
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (isMember) {
        if (!admin == true) {
          const arr = [contact + `@s.whatsapp.net`];
          ӄʀǟӄɨռʐ.groupMakeAdmin(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, arr);
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${vers.vers}_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(
                4
              )}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_

•@${ꜱᴇɴᴅᴇʀeceived},
${contact} promoted to admin*`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        } else {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${vers.vers}_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(
                4
              )}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_

•@${ꜱᴇɴᴅᴇʀeceived},
${contact} is already an admin`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!isMember) {
        if (contact === undefined) {
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*(c)爪𝖎𝖟𝖚ӄ𝖎🍁乃օȶ*  _${vers.vers}_\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(
                4
              )}s_\n📅𝐃𝐚𝐭𝐞: _${Clock}_

•@${ꜱᴇɴᴅᴇʀeceived},
Person not found.`,
              MessageType.text,
              {
                quoted: chat,
              }
            )
            .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
          return;
        }
      }
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(
        "⬡==========================⬡    🍁 " +
          ℓαвєяяσя +
          "🍁    ⬡==========================⬡"
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
