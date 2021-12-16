// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const fs = require(`fs`);
const chalk = require(`chalk`);
require(`python-format-js`);
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
exports.getCleanedContact = async (args, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var jidNumber = ``;
  var countryCode = _𝔏𝔞𝔟_.CCD;
  if (isNaN(args[0]) || args[0][0] === `+`) {
    if (args[0][0] === `@` || args[0][0] === `+`) {
      jidNumber = args[0].substring(1, args[0].length + 1);
    } else {
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
        MessageType.text
      );
      return;
    }
  } else {
    jidNumber = args[0];
  }

  if (jidNumber.length < 8 || jidNumber.length > 13) {
    𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      `*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 
3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
      MessageType.text
    );
    return;
  } else if (jidNumber.length === 10) {
    jidNumber = countryCode + jidNumber;
  }
  var isOnWhatsApp = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.isOnWhatsApp(jidNumber);
  if (isOnWhatsApp === undefined) {
    throw `NumberInvalid`;
  }
  return jidNumber;
};
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
exports.isMember = async (chatId, groupMembers) => {
  var isMember = false;
  if (!(chatId === undefined)) {
    for (const index in groupMembers) {
      if (chatId == groupMembers[index].jid.split(`@`)[0]) {
        isMember = true;
      }
    }
    return isMember;
  } else {
    return isMember;
  }
};
// ⦿──────────────────────────────────────────────────────────────────⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
