const { MessageType } = require("@adiwajshing/baileys");
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
require("python-format-js");

exports.getCleanedContact = async (arg, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎) => {
  var jidNumber = "";
  var countryCode = ꜱɪɢɴ.CCD;
  if (isNaN(arg[0]) || arg[0][0] === "+") {
    if (arg[0][0] === "@" || arg[0][0] === "+") {
      jidNumber = arg[0].substring(1, arg[0].length + 1);
    } else {
      𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
        爪𝖎𝖟𝖚ӄ𝖎.chatId,
        "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
        MessageType.text
      );
      return;
    }
  } else {
    jidNumber = arg[0];
  }

  if (jidNumber.length < 8 || jidNumber.length > 13) {
    𝓚𝓻𝓪𝓴𝓲𝓷𝔃.sendMessage(
      爪𝖎𝖟𝖚ӄ𝖎.chatId,
      "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
      MessageType.text
    );
    return;
  } else if (jidNumber.length === 10) {
    jidNumber = countryCode + jidNumber;
  }
  var isOnWhatsApp = await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃.isOnWhatsApp(jidNumber);
  if (isOnWhatsApp === undefined) {
    throw "NumberInvalid";
  }

  // isOnWhatsApp is not working
  return jidNumber;
};
