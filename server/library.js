//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const fs = require("fs");
const path = require("path");
const didYouMean = require("didyoumean2").default;

module.exports = async (Foxbot, Foxchat, update, store) => {
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

  const gmeta = Foxchat.isGroup
    ? await Foxbot.groupMetadata(Foxchat.chat).catch((error) => {})
    : "";
  const groupName = Foxchat.isGroup ? gmeta.subject : "";
  const participants = Foxchat.isGroup ? await gmeta.participants : "";
  const groupAdmins = Foxchat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  const groupOwner = Foxchat.isGroup ? gmeta.owner : "";
  const isbotAdmin = Foxchat.isGroup
    ? groupAdmins.includes(await Foxbot.decodeJid(Foxbot.user.id))
    : false;
  const isAdmin = Foxchat.isGroup
    ? groupAdmins.includes(Foxchat.sender)
    : false;

  const vbody =
    Foxchat.mtype === "conversation"
      ? Foxchat.message.conversation
      : Foxchat.mtype == "imageMessage"
      ? Foxchat.message.imageMessage.caption
      : Foxchat.mtype == "videoMessage"
      ? Foxchat.message.videoMessage.caption
      : Foxchat.mtype == "extendedTextMessage"
      ? Foxchat.message.extendedTextMessage.text
      : Foxchat.mtype == "buttonsResponseMessage"
      ? Foxchat.message.buttonsResponseMessage.selectedButtonId
      : Foxchat.mtype == "listResponseMessage"
      ? Foxchat.message.listResponseMessage.singleSelectReply.selectedRowId
      : Foxchat.mtype == "templateButtonReplyMessage"
      ? Foxchat.message.templateButtonReplyMessage.selectedId
      : Foxchat.mtype === "messageContextInfo"
      ? Foxchat.message.buttonsResponseMessage?.selectedButtonId ||
        Foxchat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Foxchat.text
      : "";
  const vcommand = vbody
    .replace(Foxbot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();

  console.log(
    "\n◎✕———————————————————————✕ Foxbot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    Foxbot.chalk.blueBright("🖊️COMMANDS: "),
    Foxbot.chalk.green(vcommand)
  );
  console.log(
    Foxbot.chalk.blueBright("🖊️MESSAGE: "),
    Foxbot.chalk.green(vbody)
  );
  console.log(
    Foxbot.chalk.blueBright("❣️USER_NAME: "),
    Foxbot.chalk.green(Foxbot.pushname)
  );
  console.log(
    Foxbot.chalk.blueBright("📱USER_NUMBER: "),
    Foxbot.chalk.green(Foxchat.sender)
  );
  console.log(
    Foxbot.chalk.blueBright("💬CHAT_Id: "),
    Foxbot.chalk.green(Foxchat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ Foxbot by magneum ✕———————————————————————✕◎\n"
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
          Foxbot,
          Foxchat,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          Foxbot.isSudo
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
      return await Foxbot.sendMessage(Foxchat.chat, {
        image: { url: Foxbot.display },
        caption: `*📢ID:* ${Foxchat.chat}\n\n${suggestionMessage}`,
        footer: "*Foxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Foxbot.prefix}${suggestedCommand}`,
            buttonText: {
              displayText: `${Foxbot.prefix}${suggestedCommand}`,
            },
            type: 1,
          },
          {
            buttonId: `${Foxbot.prefix}Home`,
            buttonText: { displayText: `${Foxbot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Foxchat.sender],
      });
    } else {
      const errorMessage =
        "⚠️ *Apologies* ⚠️\n\n" +
        `@${Foxbot.Tname}, it seems that the command you entered doesn't exist.\n` +
        "For more information, please visit: _bit.ly/magneum_";
      return await Foxbot.sendMessage(Foxchat.chat, {
        image: { url: Foxbot.display },
        caption: `*📢ID:* ${Foxchat.chat}\n\n${errorMessage}`,
        footer: "*Foxbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${Foxbot.prefix}Home`,
            buttonText: { displayText: `${Foxbot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [Foxchat.sender],
      });
    }
  }
};
