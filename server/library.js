//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐍𝐞𝐤𝐨𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 NekoBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of NekoBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ NekoBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const fs = require("fs");
const path = require("path");
const didYouMean = require("didyoumean2").default;

module.exports = async (NekoBot, Nekos, update, store) => {
  const routePath = path.join(__dirname, "..", "routes");
  const specialFolders = fs
    .readdirSync(routePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const commandList = []; // List to store command filenames and aliases

  const findCommandFile = (folderPath, command) => {
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      const fileName = path.parse(file).name.toLowerCase();
      const commandAliases = require(path.join(folderPath, file)).aliases || [];
      commandList.push({ name: fileName, aliases: commandAliases }); // Add command and its aliases to the list
      if (fileName === command || commandAliases.includes(command)) {
        return file;
      }
    }
    return null;
  };

  const gmeta = Nekos.isGroup
    ? await NekoBot.groupMetadata(Nekos.chat).catch((error) => {})
    : "";
  const groupName = Nekos.isGroup ? gmeta.subject : "";
  const participants = Nekos.isGroup ? await gmeta.participants : "";
  const groupAdmins = Nekos.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  const groupOwner = Nekos.isGroup ? gmeta.owner : "";
  const isbotAdmin = Nekos.isGroup
    ? groupAdmins.includes(await NekoBot.decodeJid(NekoBot.user.id))
    : false;
  const isAdmin = Nekos.isGroup
    ? groupAdmins.includes(Nekos.sender)
    : false;

  const vbody =
    Nekos.mtype === "conversation"
      ? Nekos.message.conversation
      : Nekos.mtype == "imageMessage"
      ? Nekos.message.imageMessage.caption
      : Nekos.mtype == "videoMessage"
      ? Nekos.message.videoMessage.caption
      : Nekos.mtype == "extendedTextMessage"
      ? Nekos.message.extendedTextMessage.text
      : Nekos.mtype == "buttonsResponseMessage"
      ? Nekos.message.buttonsResponseMessage.selectedButtonId
      : Nekos.mtype == "listResponseMessage"
      ? Nekos.message.listResponseMessage.singleSelectReply.selectedRowId
      : Nekos.mtype == "templateButtonReplyMessage"
      ? Nekos.message.templateButtonReplyMessage.selectedId
      : Nekos.mtype === "messageContextInfo"
      ? Nekos.message.buttonsResponseMessage?.selectedButtonId ||
        Nekos.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Nekos.text
      : "";
  const vcommand = vbody
    .replace(NekoBot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();

  console.log(
    "\n◎✕———————————————————————✕ NekoBot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    NekoBot.chalk.blueBright("🖊️COMMANDS: "),
    NekoBot.chalk.green(vcommand)
  );
  console.log(
    NekoBot.chalk.blueBright("🖊️MESSAGE: "),
    NekoBot.chalk.green(vbody)
  );
  console.log(
    NekoBot.chalk.blueBright("❣️USER_NAME: "),
    NekoBot.chalk.green(NekoBot.pushname)
  );
  console.log(
    NekoBot.chalk.blueBright("📱USER_NUMBER: "),
    NekoBot.chalk.green(Nekos.sender)
  );
  console.log(
    NekoBot.chalk.blueBright("💬CHAT_Id: "),
    NekoBot.chalk.green(Nekos.chat)
  );
  console.log(
    "◎✕———————————————————————✕ NekoBot by magneum ✕———————————————————————✕◎\n"
  );

  let commandFound = false;
  let suggestedCommand = null;

  for (const folder of specialFolders) {
    const folderPath = path.join(routePath, folder);
    if (fs.existsSync(folderPath)) {
      const commandFile = findCommandFile(folderPath, vcommand);
      if (commandFile) {
        const commandFilePath = path.join(folderPath, commandFile);
        require(commandFilePath)(
          NekoBot,
          Nekos,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          NekoBot.isSudo
        );
        commandFound = true;
        break;
      } else {
        const folderCommands = commandList.map((cmd) => cmd.name);
        const suggestion = didYouMean(vcommand, folderCommands);
        if (suggestion) {
          suggestedCommand = suggestion;
        }
      }
    }
  }

  if (!commandFound) {
    if (suggestedCommand) {
      const suggestionMessage =
        "Command not found. Below are some suggestions. Press the button that is closest to what you need.";
      return await NekoBot.sendMessage(Nekos.chat, {
        image: { url: NekoBot.display },
        caption: `*📢ID:* ${Nekos.chat}\n\n${suggestionMessage}`,
        footer: "*NekoBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${NekoBot.prefix}${suggestedCommand}`,
            buttonText: {
              displayText: `${NekoBot.prefix}${suggestedCommand}`,
            },
            type: 1,
          },
          {
            buttonId: `${NekoBot.prefix}Home`,
            buttonText: { displayText: `${NekoBot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Nekos.sender],
      });
    } else {
      const errorMessage =
        "⚠️ *Apologies* ⚠️\n\n" +
        `@${NekoBot.Tname}, it seems that the command you entered doesn't exist.\n` +
        "For more information, please visit: _bit.ly/magneum_";
      return await NekoBot.sendMessage(Nekos.chat, {
        image: { url: NekoBot.display },
        caption: `*📢ID:* ${Nekos.chat}\n\n${errorMessage}`,
        footer: "*NekoBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${NekoBot.prefix}Home`,
            buttonText: { displayText: `${NekoBot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Nekos.sender],
      });
    }
  }
};
