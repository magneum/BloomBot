import chalk from "chalk";
import { adminCommands, sudoCommands } from "./input-sanitization";
import Users from "../𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🕸️sql/user";
import format from "string-format";
import νℓкуяιє from "./msb";
import Client from "./client";
import { MessageType } from "./message-type";

const clearance = async (
νℓкуяιє: νℓкуяιє,
client: Client,
isBlacklist: boolean
): Promise<boolean> => {
if (isBlacklist) {
if (νℓкуяιє.isGroup) {
await client.getGroupMetaData(νℓкуяιє.chatId, νℓкуяιє);
if (
!νℓкуяιє.fromMe &&
!νℓкуяιє.isSenderSUDO &&
!νℓкуяιє.isSenderGroupAdmin
) {
return false;
}
} else if (!νℓкуяιє.fromMe && !νℓкуяιє.isSenderSUDO) {
console.log(chalk.blueBright.bold(`[INFO] Blacklisted Chat or User.`));
return false;
}
} else if (
νℓкуяιє.chatId === "917838204238-1634977991@g.us" ||
νℓкуяιє.chatId === "120363020858647962@g.us" ||
νℓкуяιє.chatId === "120363023294554225@g.us"
) {
console.log(
chalk.blueBright.bold(`[INFO] Bot disabled in Support Groups.`)
);
return false;
}
if (νℓкуяιє.isCmd && !νℓкуяιє.fromMe && !νℓкуяιє.isSenderSUDO) {
if (νℓкуяιє.isGroup) {
await client.getGroupMetaData(νℓкуяιє.chatId, νℓкуяιє);
if (
adminCommands.indexOf(νℓкуяιє.commandName) >= 0 &&
!νℓкуяιє.isSenderGroupAdmin
) {
console.log(
chalk.redBright.bold(`[INFO] admin commmand `),
chalk.greenBright.bold(`${νℓкуяιє.commandName}`),
chalk.redBright.bold(`not executed in public Work Type.`)
);
await client.sendMessage(
νℓкуяιє.chatId,
"GENERAL.ADMIN_PERMISSION",
MessageType.text
);
return false;
} else if (
sudoCommands.indexOf(νℓкуяιє.commandName) >= 0 &&
!νℓкуяιє.isSenderSUDO
) {
console.log(
chalk.redBright.bold(`[INFO] sudo commmand `),
chalk.greenBright.bold(`${νℓкуяιє.commandName}`),
chalk.redBright.bold(`not executed in public Work Type.`)
);
let messageSent: boolean = await Users.getUser(νℓкуяιє.chatId);
if (messageSent) {
console.log(
chalk.blueBright.bold(
"[INFO] Promo message had already been sent to " + νℓкуяιє.chatId
)
);
return false;
} else {
await client.sendMessage(
νℓкуяιє.chatId,
format("GENERAL.SUDO_PERMISSION", {
worktype: "public",
groupName: νℓкуяιє.groupName ? νℓкуяιє.groupName : "private chat",
commandName: νℓкуяιє.commandName,
}),
MessageType.text
);
await Users.addUser(νℓкуяιє.chatId);
return false;
}
} else {
return true;
}
} else if (νℓкуяιє.isPm) {
return true;
}
} else {
return true;
}
};

export = clearance;
