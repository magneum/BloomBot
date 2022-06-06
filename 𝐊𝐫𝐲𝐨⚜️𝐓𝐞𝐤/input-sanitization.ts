import config from "../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞🀄𝐕𝐞𝐧𝐭/config";
import fs, { PathLike } from "fs";
import chalk from "chalk";
import format from "string-format";
import { Transform } from "stream";
import { writeFile } from "fs/promises";
import νℓкуяιє from "./msb";
import Client from "./client";
import { MessageType } from "./message-type";
import { GroupParticipant } from "@adiwajshing/baileys";

const getCleanedContact = async (
  args: string[],
  client: Client,
  νℓкуяιє: νℓкуяιє
) => {
  var jidNumber = "";
  var countryCode = config.COUNTRY_CODE;
  if (parseInt(args[0]) === NaN || args[0][0] === "+" || args[0][0] === "@") {
    if (args[0][0] === "@" || args[0][0] === "+") {
      jidNumber = args[0].substring(1, args[0].length + 1);
    } else {
      client.sendMessage(
        νℓкуяιє.chatId,
        "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
        MessageType.text
      );
      return undefined;
    }
  } else {
    jidNumber = args[0];
  }

  if (jidNumber.length < 8 || jidNumber.length > 13) {
    client.sendMessage(
      νℓкуяιє.chatId,
      "*Enter valid contact number.* Approved Syntax:\n```1. XXXXXXXXXX``` \n```2. Tag the person``` \n```3. +(YYY)XXXXXXXXXX.``` \n_(YY- Country Code, without zeros)_",
      MessageType.text
    );
    return undefined;
  } else if (jidNumber.length === 10) {
    jidNumber = countryCode + jidNumber;
  }
  console.log(jidNumber);
  var isOnWhatsApp = await client.ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.onWhatsApp(jidNumber);
  if (isOnWhatsApp === undefined) {
    throw "NumberInvalid";
  }

  // isOnWhatsApp is not working
  return jidNumber;
};

const deleteFiles = async (...locations: PathLike[]) => {
  for (let location of locations) {
    fs.unlink(location, (err) => {
      if (err) console.log(err);
      else {
        // console.log("\nDeleted file at: " + location);
      }
    });
  }
};

// const performanceTime = async (startTime) => {
//     var endTime = window.performance.now();
//     console.log(
//         `-----------\nExecution time: ${
//             (endTime - startTime) / 1000
//         } seconds\n----------`
//     );
// }

const isMember = async (chatId: string, groupMembers: GroupParticipant[]) => {
  var isMember = false;
  if (!(chatId === undefined)) {
    for (const index in groupMembers) {
      if (chatId == groupMembers[index].id.split("@")[0]) {
        isMember = true;
      }
    }
  }
  return isMember;
};

const handleError = async (
  err,
  client,
  νℓкуяιє,
  customMessage = "```Something went wrong. The error has been logged in log chats```"
) => {
  console.log(chalk.redBright.bold("[ERROR] " + err));
  let data = {
    commandName: νℓкуяιє.commandName,
    fromMe: νℓкуяιє.fromMe,
    isReply: νℓкуяιє.isReply,
    isGroup: νℓкуяιє.isGroup,
    isPm: νℓкуяιє.isPm,
    isImage: νℓкуяιє.isImage,
    isBotGroupAdmin: νℓкуяιє.isBotGroupAdmin,
    isSenderGroupAdmin: νℓкуяιє.isSenderGroupAdmin,
    isSenderSudo: νℓкуяιє.isSenderSUDO,
    err: err,
  };
  // client.sendMessage(νℓкуяιє.chatId, customMessage, MessageType.text);
  // client.sendMessage(νℓкуяιє.logGroup, { text: format(ERROR_TEMPLATE, data) });
};

const saveBuffer = async (fileName: string, stream: Transform) => {
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  await writeFile(fileName, buffer);
};

const inputSanitization = {
  handleError: handleError,
  deleteFiles: deleteFiles,
  saveBuffer: saveBuffer,
  getCleanedContact: getCleanedContact,
  isMember: isMember,
};

export default inputSanitization;

export const adminCommands = [
  "add",
  "demote",
  "invite",
  "mute",
  "promote",
  "remove",
  "unmute",
  "welcome",
  "disappear",
  "goodbye",
  "setdp",
  "tagall",
  "abl",
  "rbl",
];

export const sudoCommands = ["block", "unblock"];
