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
  name: `unban`,
  𝓜𝓮𝓮6ʍօʀɛ: `Remove people or group from blacklist.`,
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
      let PersonToRemoveFromBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.chatId;
      const RmUser = PersonToRemoveFromBanlist.substring(
        0,
        PersonToRemoveFromBanlist.indexOf(`@`)
      );
      if (!(await BanList.getBanlistUser(PersonToRemoveFromBanlist, ``))) {
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Entry for ${RmUser} not found in the BanList.`,
          MessageType.text
        );
      }
      BanList.removeBanlistUser(PersonToRemoveFromBanlist, ``);
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

${RmUser} removed from BanList for all the chats.`,
        MessageType.text
      );
      `🐙============================================================================================================================<⚡>`;
    } else {
      if (arg.length > 0) {
        let PersonToRemoveFromBanlist = await motor.nomentioncontact(
          arg,
          ӄʀǟӄɨռʐ,
          𝓜𝖎𝖟𝖚ӄ𝖎
        );
        `🐙============================================================================================================================<⚡>`;
        if (PersonToRemoveFromBanlist === undefined) return;
        PersonToRemoveFromBanlist += `@s.whatsapp.net`;
        if (
          !(await BanList.getBanlistUser(
            PersonToRemoveFromBanlist,
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId
          ))
        ) {
          return ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Entry for ${RmUser} not found in the BanList.`,
            MessageType.text
          );
        }
        BanList.removeBanlistUser(PersonToRemoveFromBanlist, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

${RmUser} has been removed from the BanList for this group.`,
          MessageType.text
        );
        `🐙============================================================================================================================<⚡>`;
      } else if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        let PersonToRemoveFromBanlist = 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant;
        if (
          !(await BanList.getBanlistUser(
            PersonToRemoveFromBanlist,
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId
          ))
        ) {
          return ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Entry for ${RmUser} not found in the BanList.`,
            MessageType.text
          );
        }
        BanList.removeBanlistUser(PersonToRemoveFromBanlist, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

${RmUser} has been removed from the BanList for this group.`,
          MessageType.text
        );
        `🐙============================================================================================================================<⚡>`;
      } else {
        if (!(await BanList.getBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId))) {
          return ӄʀǟӄɨռʐ.sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Entry for ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName} not found in the BanList.`,
            MessageType.text
          );
        }
        BanList.removeBanlistUser(``, 𝓜𝖎𝖟𝖚ӄ𝖎.chatId);
        return ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

Bot has been enabled for the group ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}`,
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
