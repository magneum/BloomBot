const { MessageType } = require("@adiwajshing/baileys");
const ꜱɪɢɴ = require("./ꜱɪɢɴ");
require("python-format-js");

exports.getCleanedContact = async (arg, ʍɛɛℓιєηт, 𝓜𝓮𝓮6) => {
  var jidNumber = "";
  var countryCode = ꜱɪɢɴ.CCD;
  if (isNaN(arg[0]) || arg[0][0] === "+") {
    if (arg[0][0] === "@" || arg[0][0] === "+") {
      jidNumber = arg[0].substring(1, arg[0].length + 1);
    } else {
      ʍɛɛℓιєηт.sendMessage(
        𝓜𝓮𝓮6.chatId,
        "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
        MessageType.text
      );
      return;
    }
  } else {
    jidNumber = arg[0];
  }

  if (jidNumber.length < 8 || jidNumber.length > 13) {
    ʍɛɛℓιєηт.sendMessage(
      𝓜𝓮𝓮6.chatId,
      "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
      MessageType.text
    );
    return;
  } else if (jidNumber.length === 10) {
    jidNumber = countryCode + jidNumber;
  }
  var isOnWhatsApp = await ʍɛɛℓιєηт.isOnWhatsApp(jidNumber);
  if (isOnWhatsApp === undefined) {
    throw "NumberInvalid";
  }

  // isOnWhatsApp is not working
  return jidNumber;
};
