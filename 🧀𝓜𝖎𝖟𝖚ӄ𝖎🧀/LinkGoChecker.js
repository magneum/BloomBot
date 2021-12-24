const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const chalk = require("chalk");

const LinkGoChecker = async (𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckLinks) => {
  if (CheckLinks) {
    if (
      !𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(_𝔏𝔞𝔟_.HASH) &&
      𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://chat.whatsapp.com/`) &&
      𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://wa.me/`) &&
      𝓜𝖎𝖟𝖚ӄ𝖎.body.includes(`://discord.gg`)
    ) {
      console.log(
        chalk.blueBright.bold(
          `💡𝗜𝗻𝗳𝗼 ⬰ Antilink Active in ${𝓜𝖎𝖟𝖚ӄ𝖎.groupName}.`
        )
      );
      return false;
    }
  } else {
    return true;
  }
};

module.exports = LinkGoChecker;
