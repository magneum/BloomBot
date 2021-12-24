const chalk = require("chalk");

const LetGoChecker = async (𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckBans) => {
  if (
    !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
    !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO &&
    !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
    CheckBans
  ) {
    console.log(chalk.blueBright.bold(`💡𝗜𝗻𝗳𝗼 ⬰ Banlisted Chat or User.`));
    return false;
  } else {
    return true;
  }
};

module.exports = LetGoChecker;
