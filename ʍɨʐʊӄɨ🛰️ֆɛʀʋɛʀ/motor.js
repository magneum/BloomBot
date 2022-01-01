try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const { MessageType } = require(`@adiwajshing/baileys`);
  const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
  require(`python-format-js`);
  const vers = require(`../package.json`);
  const speed = require(`performance-now`);
  let Timestamp = speed();
  const Ping = speed() - Timestamp;
  const date = require(`date-and-time`);
  const now = new Date();
  date.format(now, `ddd, MMM DD YYYY`);
  const pattern = date.compile(`ddd, MMM DD YYYY`);
  const Clock = date.format(now, pattern);
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  exports.nomentioncontact = async (args, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎) => {
    var jidNumber = ``;
    var countryCode = _𝔏𝔞𝔟_.CCD;
    if (isNaN(args[0]) || args[0][0] === `+`) {
      if (args[0][0] === `@` || args[0][0] === `+`) {
        jidNumber = args[0].substring(1, args[0].length + 1);
      } else {
        ӄʀǟӄɨռʐ.sendMessage(
          𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
          `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭  \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

*Enter valid contact number.* Approved Syntax:
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
    // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    if (jidNumber.length < 8 || jidNumber.length > 13) {
      ӄʀǟӄɨռʐ.sendMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        `\n(c)𝐌𝐢𝐳𝐮𝐤𝐢🍁𝐁𝐨𝐭  \n🛰️ᴘɪɴɢ: _${Ping.toFixed(4)}s_\n📅ᴅᴀᴛᴇ: _${Clock}_

*Enter valid contact number.* Approved Syntax:
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
    var isOnWhatsApp = await ӄʀǟӄɨռʐ.isOnWhatsApp(jidNumber);
    if (isOnWhatsApp === undefined) {
      throw `NumberInvalid`;
    }
    return jidNumber;
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  exports.onwhatsappserver = async (chatId, groupMembers) => {
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
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
