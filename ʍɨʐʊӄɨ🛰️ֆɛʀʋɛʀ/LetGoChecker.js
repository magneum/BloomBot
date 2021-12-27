// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const chalk = require("chalk");
const LetGoChecker = async (𝓜𝖎𝖟𝖚ӄ𝖎, ӄʀǟӄɨռʐ, CheckBans) => {
  if (
    !𝓜𝖎𝖟𝖚ӄ𝖎.fromMe &&
    !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderDev &&
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
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
