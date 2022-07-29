("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
/*
╔⧉༻ [ ⚡𝐕𝐥𝐤𝐲𝐫𝐞⚡ ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩/𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
import ms from "ms";
import chalk from "chalk";
import { join } from "path";
import { readdirSync } from "fs";
import { config } from "../⧊Utils/config";
import { MusicQueue } from "./MusicQueue";
import { Command } from "../⧊Interfaces/Command";
import { Client, Collection, Snowflake } from "discord.js";
import { checkPermissions } from "../⧊Utils/checkPermissions";
import { Message, MessageEmbed, TextChannel } from "discord.js";
const antilinkData = require("../⧊Database/Javascript/antilink");
const channelData = require("../⧊Database/Javascript/channelupdate");
const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
import { MissingPermissionsException } from "../⧊Utils/MissingPermissionsException";
function generateStyle(Topic: any, TName: any, Text: any, Name: any) {
let TPrint = chalk.hex(TName).bold(Topic);
let Print = chalk.hex(Name).italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TPrint)), chalk.black(Print));
}
export class Bot {
public readonly prefix = config.PREFIX;
public commands = new Collection<string, Command>();
public cooldowns = new Collection<string, Collection<Snowflake, number>>();
public queues = new Collection<Snowflake, MusicQueue>();
public constructor(public readonly client: Client) {
this.client.login(config.TOKEN);

this.client.on("ready", () => {
console.log(`${this.client.user!.username} ready!`);
client.user!.setActivity(`${this.prefix}help and ${this.prefix}play`, {
type: "LISTENING",
});
});

this.client.on("warn", (info) => console.log(info));
this.client.on("error", console.error);
this.importCommands();
this.onMessageCreate();
}
private async importCommands() {
let Directory = readdirSync("./⧊Modules");
for (let Folder of Directory) {
let File = readdirSync(`./⧊Modules/${Folder}`);
for (let sFile of File) {
const command = await import(
join(__dirname, "..", "⧊Modules", `${Folder}`, `${sFile}`)
);
this.commands.set(command.default.name, command.default);
generateStyle(
command.default.category,
"#654321",
command.default.name.toUpperCase() +
" | Description: " +
command.default.description,
"#ECCF8D"
);
}
}
}
private async onMessageCreate() {
this.client.on("messageCreate", async (message: any) => {
if (message.author.bot || !message.guild) return;
const antilink = await antilinkData.findOne({
Guild_ID: message.guild.id,
});
if (antilink) {
if (
message.content.match("https://") ||
message.content.match("discord.gg") ||
message.content.match("www.")
) {
message.delete();
let msg = message.channel
.send(
"**⚠️CAUTION:** _No links allowed while anti-link is active!_"
)
.then((msg) => {
let time = "4s";
setTimeout(function () {
msg.delete();
}, ms(time));
});
}
}
const prefixRegex = new RegExp(
`^(<@!?${this.client.user!.id}>|${escapeRegex(this.prefix)})\\s*`
);
if (!prefixRegex.test(message.content)) return;
const [, matchedPrefix] = message.content.match(prefixRegex);
const args: string[] = message.content
.slice(matchedPrefix.length)
.trim()
.split(/ +/);
const commandName = args.shift()?.toLowerCase();
const command = this.commands.get(commandName!);
if (!command) return;
if (!this.cooldowns.has(command.name)) {
this.cooldowns.set(command.name, new Collection());
}
const now = Date.now();
const timestamps: any = this.cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 1) * 1000;
if (timestamps.has(message.author.id)) {
const expirationTime =
timestamps.get(message.author.id) + cooldownAmount;

if (now < expirationTime) {
const timeLeft = (expirationTime - now) / 1000;
return message.reply(
`please wait ${timeLeft.toFixed(
1
)} more second(s) before reusing the ${command.name} command.`
);
}
}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
try {
const permissionsCheck: any = await checkPermissions(command, message);
if (permissionsCheck.result) {
generateStyle(
"⚡Command Executed: ",
"#2D5A27",
command.name.toUpperCase(),
"#849871"
);
command.execute(this.client, message, args).catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
} else {
throw new MissingPermissionsException(permissionsCheck.missing);
}
} catch (error: any) {
console.error(error);

if (error.message.includes("permissions")) {
message.reply(error.toString()).catch(console.error);
} else {
message
.reply("There was an error executing that command.")
.catch(console.error);
}
}
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
this.client.on("channelCreate", async (channel: any) => {
const CData = await channelData.findOne({
Guild_ID: channel.guild.id,
});
if (!CData) return;
channel.guild.channels.cache.get(CData.Channel_ID).send({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setDescription(
`**\`\`\`fix
A CHANNEL HAS BEEN CREATED!
\`\`\`**`
)
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setTitle("「 Vlkyre Whatsapp + Discord Multipurpose Bot 」")
.setFooter(`Created With ❣️ By KryKnz`)
.addField(`**「 CH. NAME 」**`, channel.name, true)
.addField(`**「 CH. ID 」**`, channel.id, true)
.addField(`**「 CH. TYPE 」**`, channel.type, true),
],
});
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
this.client.on("channelDelete", async (channel: any) => {
const CData = await channelData.findOne({
Guild_ID: channel.guild.id,
});
if (!CData) return;
channel.guild.channels.cache.get(CData.Channel_ID).send({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setDescription(
`**\`\`\`fix
A CHANNEL HAS BEEN DELETED!
\`\`\`**`
)
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setTitle("「 Vlkyre Whatsapp + Discord Multipurpose Bot 」")
.setFooter(`Created With ❣️ By KryKnz`)
.addField(`**「 CH. NAME 」**`, channel.name, true)
.addField(`**「 CH. ID 」**`, channel.id, true)
.addField(`**「 CH. TYPE 」**`, channel.type, true),
],
});
});
}
}
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
/*
╔⧉༻ [ ⚡𝐕𝐥𝐤𝐲𝐫𝐞⚡ ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩/𝐃𝐢𝐬𝐜𝐨𝐫𝐝 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞𝐁𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
