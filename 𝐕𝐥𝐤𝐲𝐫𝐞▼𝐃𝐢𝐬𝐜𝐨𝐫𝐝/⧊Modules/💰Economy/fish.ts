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
import fs from "fs";
import path from "path";
import {
DiscordGatewayAdapterCreator,
joinVoiceChannel,
} from "@discordjs/voice";
import ms from "parse-ms";
import move from "array-move";
import youtube from "youtube-sr";
import { bot } from "../../⧊Vlkyre";
const malScraper = require("mal-scraper");
let ScriptName = path.basename(__filename);
import { Song } from "../../⧊Structure/Song";
import { splitBar } from "string-progressbar";
import { canModifyQueue } from "../../⧊Utils/queue";
let FinalName = ScriptName.slice(0, -3).toLowerCase();
let Economy = require(`../../⧊Database/Economy/economy`);
import { playlistPattern } from "../../⧊Utils/patterns";
import { MusicQueue } from "../../⧊Structure/MusicQueue";
import { Message, MessageEmbed, TextChannel } from "discord.js";
let Fishes = require(`../../⧊Database/Economy/Fson/fishes.json`);
export default {
name: FinalName,
category: "💰Economy",
description: "Play Fishing game to earn money.",
async execute(kryknz: any, message: Message, args: string[]) {
await Economy.findOne(
{
ID: message.author,
},
async (Error, uEco) => {
if (Error) return console.log(Error);
if (!uEco) {
let newUser = new Economy({
ID: message.author,
money: 0,
daily: 0,
timeout: 0,
fishdone: Date.now(),
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser.save().catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#ECCF8D")
.setURL("https://github.com/kryknz")
.setThumbnail(
"https://i.postimg.cc/dVZmmS4r/Vlkyre-15-AKv5i-omy24uv-Wcz64-Np-A.png"
)
.setDescription(
`**\`\`\`fix
🐡 VLKYRE FISHING GAME 🐡
\`\`\`**`
)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(
`**\`🧈DataBase\`**`,
`Added To DB for Current command First Time.\nTry Again!`,
true
)
.addField(
`**\`💰Balance\`**`,
`Just Opened Your Account.`,
true
)

.addField(
`**\`🧀Usage\`**`,
`${bot.prefix}${FinalName} <anime name>`,
true
),
],
})
.catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
if (uEco.fishtimeout - (Date.now() - uEco.fishdone) > 0) {
let time = ms(uEco.fishtimeout - (Date.now() - uEco.fishdone));
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#B33F40")
.setURL("https://github.com/kryknz")
.setThumbnail(
"https://i.postimg.cc/50Dfvy0w/Vlkyre-FIsh.jpg"
)
.setDescription(
`**\`\`\`fix
🐡 VLKYRE FISHING GAME 🐡
\`\`\`**`
)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(
`**\`❌Error\`**`,
`You've Recently Casted A Line.`,
true
)
.addField(
`**\`🕐ꜰɪꜱʜ ᴀɢᴀɪɴ\`**`,
`${time.minutes}m ${time.seconds}s.`,
true
)

.addField(
`**\`🧀Usage\`**`,
`${bot.prefix}${FinalName} <anime name>`,
true
),
],
})
.catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
let fishID = Math.floor(Math.random() * 10) + 1;
let rarity;
if (fishID < 5) rarity = `junk`;
else if (fishID < 8) rarity = `common`;
else if (fishID < 9) rarity = `uncommon`;
else if (fishID < 10) rarity = `rare`;
else rarity = `legendary`;
let fishh = Fishes[rarity];
let worth =
Math.floor(Math.random() * (fishh.max - fishh.min + 1)) +
fishh.min;
uEco.money = uEco.money + worth;
uEco.fishdone = Date.now();
uEco.fishtimeout = 1800000;
uEco.save().catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setURL("https://github.com/kryknz")
.setThumbnail(
"https://i.postimg.cc/50Dfvy0w/Vlkyre-FIsh.jpg"
)
.setDescription(
`**\`\`\`fix
🐡 VLKYRE FISHING GAME 🐡
\`\`\`**`
)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(
`**\`🎣Item\`**`,
`You Cast Out Your Line And Caught A ${fishh.symbol}.`,
true
)
.addField(
`**\`💵Worth\`**`,
` It'd Sell For Around ${worth}.`,
true
)
.addField(`**\`💍ʀᴀʀɪᴛʏ\`**`, rarity, true)

.addField(
`**\`🧀Usage\`**`,
`${bot.prefix}${FinalName} <anime name>`,
true
),
],
})
.catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
}
}
}
);
},
};
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
