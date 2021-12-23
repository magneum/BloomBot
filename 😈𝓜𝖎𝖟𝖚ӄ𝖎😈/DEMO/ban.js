`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const BanList = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/BanList`);
const Downloader = require(`nodejs-file-downloader`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const motor = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/motor`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const fs = require(`fs`);
`🐙============================================================================================================================<⚡>`;
module.exports = {
  name: `ban`,
  𝓜𝓮𝓮6ʍօʀɛ: `Add people to blacklist and *restrict them* from using the bot. You can blacklist specific *groups* or *people in groups* or *people altogether* from using the bot. 

These are the configurations -

1. If you send the command in a group *without replying* to anyone, the bot will be *disabled for that group.*
2. If you send the command in a group and *reply to someone*, they will not be able to use the bot in that *specific group.*
3. If you tag someone in a group like *${ᴋᴇɪ}ban @<person>*, they will not be able to use the bot in that specific group.
4. If you send the command in *personal chat* of a person, they will be blacklisted from using the bot in *any group.*`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    `🐙============================================================================================================================<⚡>`;
    console.log(𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO);
    if (!𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
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

only *𝓜𝖎𝖟𝖚ӄ𝖎-Owners* can use this feature`,
        footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      return await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    }
    `🐙============================================================================================================================<⚡>`;
    if (𝓜𝖎𝖟𝖚ӄ𝖎.isPm && 𝓜𝖎𝖟𝖚ӄ𝖎.fromMe) {
      let PersonToBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId;
      BanList.addBanlistUser(PersonToBanlist, ``);
      const User = PersonToBanlist.substring(0, PersonToBanlist.indexOf(`@`));
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

${User} banned from using the bot in all chats.`,
        MessageType.text
      );
      `🐙============================================================================================================================<⚡>`;
    } else {
      if (arg.length > 0) {
        let PersonToBanlist = await motor.nomentioncontact(
          arg,
          ӄʀǟӄɨռʐ,
          𝓜𝖎𝖟𝖚ӄ𝖎
        );
        `🐙============================================================================================================================<⚡>`;
        if (PersonToBanlist === undefined) return;
        PersonToBanlist += `@s.whatsapp.net`;
        if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === PersonToBanlist) {
          return ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Bot cannot blacklist itself. Tag or reply to a different user.`,
            MessageType.text
          );
        }
        BanList.addBanlistUser(PersonToBanlist, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

${User} has been blacklisted from using the bot in this group.`,
          MessageType.text
        );
        `🐙============================================================================================================================<⚡>`;
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        let PersonToBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant;
        if (𝓜𝖎𝖟𝖚ӄ𝖎.owner === PersonToBanlist) {
          return ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Bot cannot blacklist itself. Tag or reply to a different user.`,
            MessageType.text
          );
        }
        BanList.addBanlistUser(PersonToBanlist, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

${User} has been blacklisted from using the bot in this group.`,
          MessageType.text
        );
        `🐙============================================================================================================================<⚡>`;
      } else {
        BanList.addBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Bot has been disabled for the group ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}. For more configurations use the *.help ban* command.`,
          MessageType.text
        );
      }
    }
  },
};
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
