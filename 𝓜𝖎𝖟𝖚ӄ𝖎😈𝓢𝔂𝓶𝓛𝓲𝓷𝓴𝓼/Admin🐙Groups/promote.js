// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch`);
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
const motor = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/motor`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
module.exports = {
  name: `promote`,
  extendedDescription: `Use this module to promote a member to admin. You can enter the person's mobile number as per the format below. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example-
*${ᴋᴇɪ}promote 9861212121*`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
      await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([
        `KrakinzLab..origin/KrakinzLab`,
      ]);
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.logGroup,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝙐𝙥𝙙𝙖𝙩𝙚🤖𝙋𝙚𝙣𝙙𝙞𝙣𝙜
*•𝘗𝘭𝘦𝘢𝘴𝘦 𝘜𝘱𝘥𝘢𝘵𝘦 𝘜𝘴𝘪𝘯𝘨 *${ᴋᴇɪ}update* 𝘰𝘳 𝘳𝘦𝘥𝘦𝘱𝘭𝘰𝘺 𝐌𝐢𝐳𝐮𝐤𝐢™!`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
      }
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.chatId === `120363025343298860@g.us` && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
        await ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
シ︎𝐆𝐫𝐨𝐮𝐩👓${_𝔏𝔞𝔟_.HASH}`,
            MessageType.text,
            {
              quoted: chat,
              contextInfo: {
                mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
              },
            }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        return;
      }
      // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
      try {
        if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
This command is only applicable in a group chat.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }
        // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
        if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
          return await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              {
                url: _𝔏𝔞𝔟_.ERROR,
              },
              MessageType.image,
              {
                quoted: chat,
                mimetype: Mimetype.png,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
                caption: `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

⚠️𝗘𝗿𝗿𝗼𝗿: @${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ}, *ʏᴏᴜ ᴅᴏɴ'ᴛ ꜱᴇᴇᴍ ᴛᴏ ʙᴇ ᴀᴅᴍɪɴ..*`,
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
        }
        // ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
        if (!𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Sorry, dont have the permission to do so since I am not an admin.`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }
        if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply && typeof arg[0] == `undefined`) {
          ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
Reply/tag/enter contact number of the person to be promoted.`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
          return;
        }

        if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
          const reply = chat.message.extendedTextMessage;
          var contact = reply.contextInfo.participant.split(`@`)[0];
          var contactmen = reply.contextInfo.participant + "@s.whatsapp.net";
          var admin = false;
          var CheckMember = await motor.isMember(contact, 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers);
          for (const index in 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers) {
            if (contact == 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].jid.split(`@`)[0]) {
              if (𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].isAdmin) {
                admin = true;
              }
            }
          }
          if (CheckMember) {
            if (!admin == true) {
              const arr = [contact + `@s.whatsapp.net`];
              ӄʀǟӄɨռʐ.groupMakeAdmin(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, arr);
              ӄʀǟӄɨռʐ
                .sendMessage(
                  𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
                  `_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

𝗔𝗵𝗺 •@${ꜱᴇɴᴅᴇʀᴄᴏɴꜰ},
${reply.contextInfo.participant.split(`@`)[0];
            } is promoted to admin`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, contactmen],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
} else {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

            𝗔𝗵𝗺 •@${ ꜱᴇɴᴅᴇʀᴄᴏɴꜰ },
${ reply.contextInfo.participant.split(`@`)[0]; } is already an admin`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, contactmen],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
}
}
if (!CheckMember) {
if (contact === undefined) {
return;
}

ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

            𝗔𝗵𝗺 •@${ ꜱᴇɴᴅᴇʀᴄᴏɴꜰ },
Person is not in the group.`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
return;
}
} catch (ℓαвєяяσя) {
if (ℓαвєяяσя === `NumberInvalid`) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`

            𝗔𝗵𝗺 •@${ ꜱᴇɴᴅᴇʀᴄᴏɴꜰ },
The number you're trying to add isn't available on WhatsApp or  ${ arg[0] } is Invalid number`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
} else {
await ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
}
}
} else {
var contact = await motor.getCleanedContact(arg, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
var contactmen = contact;
var admin = false;
var CheckMember = await motor.isMember(contact, 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers);
for(const index in 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers) {
if (contact == 𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].jid.split(`@`)[0]) {
if (𝓜𝖎𝖟𝖚ӄ𝖎.groupMembers[index].isAdmin) {
admin = true;
}
}
}
if (CheckMember) {
if (!admin == true) {
const arr = [contact + `@s.whatsapp.net`];
ӄʀǟӄɨռʐ.groupMakeAdmin(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, arr);
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

            𝗔𝗵𝗺 •@${ ꜱᴇɴᴅᴇʀᴄᴏɴꜰ },
${ await motor.getCleanedContact(arg, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) } is promoted to admin`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, contactmen],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
} else {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

            𝗔𝗵𝗺 •@${ ꜱᴇɴᴅᴇʀᴄᴏɴꜰ },
${ await motor.getCleanedContact(arg, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) } is already an admin`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ, contactmen],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
}
}
if (!CheckMember) {
if (contact === undefined) {
return;
}

ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`_© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_

            𝗔𝗵𝗺 •@${ ꜱᴇɴᴅᴇʀᴄᴏɴꜰ },
Person is not in the group.`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
return;
}
} catch (ℓαвєяяσя) {
if (ℓαвєяяσя === `NumberInvalid`) {
ӄʀǟӄɨռʐ
.sendMessage(
𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
`

            𝗔𝗵𝗺 •@${ ꜱᴇɴᴅᴇʀᴄᴏɴꜰ },
The number you're trying to add isn't available on WhatsApp or  ${ arg[0] } is Invalid number`,
MessageType.text,
{
quoted: chat,
contextInfo: {
mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
},
}
)
.catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
} else {
await ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
}
}
}


} catch (ℓαвєяяσя) {
ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
console.log(ℓαвєяяσя);
}
},
};
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
