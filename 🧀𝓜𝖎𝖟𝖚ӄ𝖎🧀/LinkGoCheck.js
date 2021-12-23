const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const LinkGoCheck = async (𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckLinks) => {
  console.log(CheckLinks);
  if (
    CheckLinks &&
    𝓜𝖎𝖟𝖚ӄ𝖎.isGroup &&
    !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
    !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin
  ) {
    if (
      (!𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(_𝔏𝔞𝔟_.HASH) &&
        𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://chat.whatsapp.com/`)) ||
      𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://wa.me/`) ||
      𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://discord.gg`)
    ) {
      return false;
    }
  } else {
    return true;
  }
};

module.exports = LinkGoCheck;
