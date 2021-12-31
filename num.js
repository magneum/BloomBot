const { MessageType } = require(`@adiwajshing/baileys`);
const chalk = require(`chalk`);
const STRINGS = require(`../lib/db.js`);
const ADD = STRINGS.add;
const CONFIG = require(`../config`);
const fs = require(`fs`);

module.exports = {
  name: `add`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    if (!Needs[0]) {
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `Enter the number you want to add.

For instance,  *.add <NUMBER>* .`,
        MessageType.text
      );
    }
    let number;
    if (isNaN(Needs[0]) || Needs[0][0] === `+` || Needs[0].length < 10) {
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `Valid formats -
1. XXXXXXXXXX
2. YYXXXXXXXXXX

For example-
*.add 9861212121*
*.add 919861212121*`,
        MessageType.text
      );
    }
    if (Needs[0].length == 10 && !isNaN(Needs[0])) {
      number = CONFIG.COUNTRY_CODE + Needs[0];
    } else {
      number = Needs[0];
    }
    const exists = await ӄʀǟӄɨռʐ.isOnWhatsApp(number + `@s.whatsapp.net`);
    if (!exists) {
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.`,
        MessageType.text
      );
    }
    const request = ӄʀǟӄɨռʐ.groupAdd(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, [
      𝓜𝖎𝖟𝖚ӄ𝖎.owner,
      number + `@s.whatsapp.net`,
    ]);
    const response = await request;
    if (response[number + `@c.us`] == 408) {
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `The number entered cannot be added back before 24 hours.`,
        MessageType.text
      );
    } else if (response[number + `@c.us`] == 403) {
      for (const index in response.participants) {
        if ([number + `@c.us`] in response.participants[index]) {
          var code = response.participants[index][number + `@c.us`].invite_code;
          var tom =
            response.participants[index][number + `@c.us`].invite_code_exp;
        }
      }
      var invite = {
        caption: `Hi! You have been invited to join this WhatsApp group!`,
        groupJid: 𝓜𝖎𝖟𝖚ӄ𝖎.groupId,
        groupName: 𝓜𝖎𝖟𝖚ӄ𝖎.groupName,
        inviteCode: code,
        inviteExpiration: tom,
        jpegThumbnail: fs.readFileSync(`./images/BotsApp_invite.jpeg`),
      };
      await ӄʀǟӄɨռʐ.sendMessage(
        number + `@s.whatsapp.net`,
        invite,
        MessageType.groupInviteMessage
      );
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `The number you're trying to add cannot be added to the group directly. An invite link has been sent to them.`,
        MessageType.text
      );
    } else if (response[number + `@c.us`] == 409) {
      return ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `The number entered is already a member of this group.`,
        MessageType.text
      );
    }
    ӄʀǟӄɨռʐ.sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      `` + number + `ADD.SUCCESS` + ``,
      MessageType.text
    );
    return;
  },
};
