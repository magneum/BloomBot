//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
// _© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
const { MessageType } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
// _© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
exports.getCleanedContact = async (arg, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
  var jidNumber = ``;
  var countryCode = _𝔏𝔞𝔟_.CCD;
  if (isNaN(arg[0]) || arg[0][0] === `+`) {
    if (arg[0][0] === `@` || arg[0][0] === `+`) {
      jidNumber = arg[0].substring(1, arg[0].length + 1);
    } else {
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `*Enter valid contact number.* Approved Syntax:\n1. XXXXXXXXXX \n2. Tag the person \n3. +(YYY)XXXXXXXXXX. \n_(YY- Country Code, without zeros)_`,
        MessageType.text
      );
      return;
    }
  } else {
    jidNumber = arg[0];
  }

  if (jidNumber.length < 8 || jidNumber.length > 13) {
    𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
      𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
      `*Enter valid contact number.* Approved Syntax:\n1. XXXXXXXXXX \n2. Tag the person \n3. +(YYY)XXXXXXXXXX. \n_(YY- Country Code, without zeros)_`,
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

  // isOnWhatsApp is not working
  return jidNumber;
};
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
// _© 𝐌𝐢𝐳𝐮𝐤𝐢 𝐁𝐨𝐭_
//⬡==================⬡-----------------⦿   𝐌𝐢𝐳𝐮𝐤𝐢™   ⦿-----------------⬡==================⬡`;
