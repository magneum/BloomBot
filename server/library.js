//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐎𝐩𝐞𝐧𝐁𝐨𝐭😺𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 OpenBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of OpenBot responsibly! Make the most out of your
//  ║   whatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ OpenBot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
const fs = require("fs");
const path = require("path");
const didYouMean = require("didyoumean2").default;

module.exports = async (OpenBot, ocID, update, store) => {
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

  const gmeta = ocID.isGroup
    ? await OpenBot.groupMetadata(ocID.chat).catch((error) => {})
    : "";
  const groupName = ocID.isGroup ? gmeta.subject : "";
  const participants = ocID.isGroup ? await gmeta.participants : "";
  const groupAdmins = ocID.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  const groupOwner = ocID.isGroup ? gmeta.owner : "";
  const isbotAdmin = ocID.isGroup
    ? groupAdmins.includes(await OpenBot.decodeJid(OpenBot.user.id))
    : false;
  const isAdmin = ocID.isGroup
    ? groupAdmins.includes(ocID.sender)
    : false;

  const vbody =
    ocID.mtype === "conversation"
      ? ocID.message.conversation
      : ocID.mtype == "imageMessage"
      ? ocID.message.imageMessage.caption
      : ocID.mtype == "videoMessage"
      ? ocID.message.videoMessage.caption
      : ocID.mtype == "extendedTextMessage"
      ? ocID.message.extendedTextMessage.text
      : ocID.mtype == "buttonsResponseMessage"
      ? ocID.message.buttonsResponseMessage.selectedButtonId
      : ocID.mtype == "listResponseMessage"
      ? ocID.message.listResponseMessage.singleSelectReply.selectedRowId
      : ocID.mtype == "templateButtonReplyMessage"
      ? ocID.message.templateButtonReplyMessage.selectedId
      : ocID.mtype === "messageContextInfo"
      ? ocID.message.buttonsResponseMessage?.selectedButtonId ||
        ocID.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        ocID.text
      : "";
  const vcommand = vbody
    .replace(OpenBot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();

  console.log(
    "\n◎✕———————————————————————✕ OpenBot by magneum ✕———————————————————————✕◎"
  );
  console.log(
    OpenBot.chalk.blueBright("🖊️COMMANDS: "),
    OpenBot.chalk.green(vcommand)
  );
  console.log(
    OpenBot.chalk.blueBright("🖊️MESSAGE: "),
    OpenBot.chalk.green(vbody)
  );
  console.log(
    OpenBot.chalk.blueBright("❣️USER_NAME: "),
    OpenBot.chalk.green(OpenBot.pushname)
  );
  console.log(
    OpenBot.chalk.blueBright("📱USER_NUMBER: "),
    OpenBot.chalk.green(ocID.sender)
  );
  console.log(
    OpenBot.chalk.blueBright("💬CHAT_Id: "),
    OpenBot.chalk.green(ocID.chat)
  );
  console.log(
    "◎✕———————————————————————✕ OpenBot by magneum ✕———————————————————————✕◎\n"
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
          OpenBot,
          ocID,
          gmeta,
          isAdmin,
          groupName,
          isbotAdmin,
          groupAdmins,
          participants,
          OpenBot.isSudo
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
      return await OpenBot.sendMessage(ocID.chat, {
        image: { url: OpenBot.display },
        caption: `*📢ID:* ${ocID.chat}\n\n${suggestionMessage}`,
        footer: "*OpenBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${OpenBot.prefix}${suggestedCommand}`,
            buttonText: {
              displayText: `${OpenBot.prefix}${suggestedCommand}`,
            },
            type: 1,
          },
          {
            buttonId: `${OpenBot.prefix}Home`,
            buttonText: { displayText: `${OpenBot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ocID.sender],
      });
    } else {
      const errorMessage =
        "⚠️ *Apologies* ⚠️\n\n" +
        `@${OpenBot.Tname}, it seems that the command you entered doesn't exist.\n` +
        "For more information, please visit: _bit.ly/magneum_";
      return await OpenBot.sendMessage(ocID.chat, {
        image: { url: OpenBot.display },
        caption: `*📢ID:* ${ocID.chat}\n\n${errorMessage}`,
        footer: "*OpenBot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${OpenBot.prefix}Home`,
            buttonText: { displayText: `${OpenBot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [ocID.sender],
      });
    }
  }
};
