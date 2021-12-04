// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: "help",
  commandType: "Information📜",
  description: "get information about available commands",
  ᴜʟᴛʀᴏɴʍօʀɛ:
    "To get more info use ```!help [command]```. Ex: ```!help ping```",
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc) {
    let commands = client.commands;
    if (!args.length) {
      let adminHelp = "🔱 *Administration*\n\n";
      let infoHelp = "🔱 *Info*\n\n";
      let pluginHelp = "🔱 *Plugins*\n\n";
      commands.forEach((command) => {
        if (command.commandType === "admin")
          adminHelp += `⭐ *${command.name} (${command.command})*  - ${command.description}\n`;
        if (command.commandType === "info")
          infoHelp += `⭐ *${command.name} (${command.command})*  - ${command.description}\n`;
        if (command.commandType === "plugin")
          pluginHelp += `⭐ *${command.name} (${command.command})*  - ${command.description}\n`;
      });
      let help = `${adminHelp}\n${infoHelp}\n${pluginHelp}\n${
        commands.get("help").help
      }`;
      await client.sendMessage(msg.to, help);
    }
  },
};
