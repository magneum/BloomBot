const chalk = require("chalk");

const clearance = async (𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckBans) => {
  if (
    !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
    !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO &&
    !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin &&
    CheckBans
  ) {
    console.log(chalk.blueBright.bold(`[INFO] Banlisted Chat or User.`));
    return true; //
  } else if (
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId === "917838204238-1634977991@g.us" ||
    𝓜𝖎𝖟𝖚ӄ𝖎.chatId === "120363020858647962@g.us"
  ) {
    console.log(chalk.blueBright.bold(`[INFO] Banlisted Chat or User.`));
    return true;
  }
  if (𝓜𝖎𝖟𝖚ӄ𝖎.isCmd && !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderSUDO) {
  } else {
    return false;
  }
};

module.exports = clearance;
