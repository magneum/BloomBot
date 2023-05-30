//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸOpenBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ⒸOpenBot by magneum™ ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
var fs = require("fs");
var path = require("path");
var didYouMean = require("didyoumean2").default;

module.exports = async (OpenBot, vChat, update, store) => {
  var routePath = path.join(__dirname, "..", "routes");
  var specialFolders = fs
    .readdirSync(routePath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  var commandList = []; // List to store command filenames and aliases

  var findCommandFile = (folderPath, command) => {
    var files = fs.readdirSync(folderPath);
    for (var file of files) {
      var fileName = path.parse(file).name.toLowerCase();
      var commandAliases = require(path.join(folderPath, file)).aliases || [];
      commandList.push({ name: fileName, aliases: commandAliases }); // Add command and its aliases to the list
      if (fileName === command || commandAliases.includes(command)) {
        return file;
      }
    }
    return null;
  };

  var gmeta = vChat.isGroup
    ? await OpenBot.groupMetadata(vChat.chat).catch((error) => {})
    : "";
  var groupName = vChat.isGroup ? gmeta.subject : "";
  var participants = vChat.isGroup ? await gmeta.participants : "";
  var groupAdmins = vChat.isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  var groupOwner = vChat.isGroup ? gmeta.owner : "";
  var isbotAdmin = vChat.isGroup
    ? groupAdmins.includes(await OpenBot.decodeJid(OpenBot.user.id))
    : false;
  var isAdmin = vChat.isGroup
    ? groupAdmins.includes(vChat.sender)
    : false;

  var vbody =
    vChat.mtype === "conversation"
      ? vChat.message.conversation
      : vChat.mtype == "imageMessage"
      ? vChat.message.imageMessage.caption
      : vChat.mtype == "videoMessage"
      ? vChat.message.videoMessage.caption
      : vChat.mtype == "extendedTextMessage"
      ? vChat.message.extendedTextMessage.text
      : vChat.mtype == "buttonsResponseMessage"
      ? vChat.message.buttonsResponseMessage.selectedButtonId
      : vChat.mtype == "listResponseMessage"
      ? vChat.message.listResponseMessage.singleSelectReply.selectedRowId
      : vChat.mtype == "templateButtonReplyMessage"
      ? vChat.message.templateButtonReplyMessage.selectedId
      : vChat.mtype === "messageContextInfo"
      ? vChat.message.buttonsResponseMessage?.selectedButtonId ||
        vChat.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        vChat.text
      : "";
  var vcommand = vbody
    .replace(OpenBot.prefix, "")
    .trim()
    .split(/ +/)
    .shift()
    .toLowerCase();

  console.log(
    "\n◎✕———————————————————————✕ ⒸOpenBot by magneum™ ✕———————————————————————✕◎"
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
    OpenBot.chalk.green(vChat.sender)
  );
  console.log(
    OpenBot.chalk.blueBright("💬CHAT_Id: "),
    OpenBot.chalk.green(vChat.chat)
  );
  console.log(
    "◎✕———————————————————————✕ ⒸOpenBot by magneum™ ✕———————————————————————✕◎\n"
  );

  let commandFound = false;
  let suggestedCommand = null;

  for (var folder of specialFolders) {
    var folderPath = path.join(routePath, folder);
    if (fs.existsSync(folderPath)) {
      var commandFile = findCommandFile(folderPath, vcommand);
      if (commandFile) {
        var commandFilePath = path.join(folderPath, commandFile);
        require(commandFilePath)(
          OpenBot,
          vChat,
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
        var folderCommands = commandList.map((cmd) => cmd.name);
        var suggestion = didYouMean(vcommand, folderCommands);
        if (suggestion) {
          suggestedCommand = suggestion;
        }
      }
    }
  }

  if (!commandFound) {
    if (suggestedCommand) {
      var suggestionMessage =
        "Command not found. Below are some suggestions. Press the button that is closest to what you need.";
      return await OpenBot.sendMessage(vChat.chat, {
        image: { url: OpenBot.display },
        caption: `*📢ID:* ${vChat.chat}\n\n${suggestionMessage}`,
        footer: "*ⒸOpenBot by magneum™*\n*💻HomePage:* https://bit.ly/magneum",
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
        mentions: [vChat.sender],
      });
    } else {
      var errorMessage =
        "⚠️ *Apologies* ⚠️\n\n" +
        `@${OpenBot.Tname}, it seems that the command you entered doesn't exist.\n` +
        "For more information, please visit: _bit.ly/magneum_";
      return await OpenBot.sendMessage(vChat.chat, {
        image: { url: OpenBot.display },
        caption: `*📢ID:* ${vChat.chat}\n\n${errorMessage}`,
        footer: "*ⒸOpenBot by magneum™*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${OpenBot.prefix}Home`,
            buttonText: { displayText: `${OpenBot.prefix}Home` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [vChat.sender],
      });
    }
  }
};
