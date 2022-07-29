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
import { playlistPattern } from "../../⧊Utils/patterns";
import { MusicQueue } from "../../⧊Structure/MusicQueue";
let Economy = require(`../../⧊Database/Economy/economy`);
import { Message, MessageEmbed, TextChannel } from "discord.js";
export default {
name: FinalName,
category: "💰Economy",
description: "Collect Daily Bonus Money.",
async execute(kryknz: any, message: Message, args: string[]) {
await Economy.findOne(
{
ID: message.author,
},
async (Error, uEco) => {
if (Error) return Caught(ӄryӄnz, Vlkyre, util.format(Error));
if (!uEco) {
let newUser = new Economy({
ID: message.author,
money: 500,
daily: Date.now(),
timeout: 86400000,
fishdone: 0,
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
if (uEco.timeout - (Date.now() - uEco.daily) > 0) {
let ᴄʟᴏᴄᴋ = ms(uEco.timeout - (Date.now() - uEco.daily));
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#B33F40")
.setURL("https://github.com/kryknz")
.setDescription(
`**\`\`\`fix
💵 VLKYRE DAILY BONUS 💵\n\`\`\`**`
)
.setTitle(
"「 Vlkyre Whatsapp + Discord Multipurpose Bot 」"
)
.setThumbnail(
"https://i.postimg.cc/2SmqKcxP/Vlkyre-Gold.jpg"
)
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(
`**❌Error**`,
`You've already collected your daily reward.`,
true
)
.addField(
`**🕐Collect Again**`,
`${ᴄʟᴏᴄᴋ.hours}h ${ᴄʟᴏᴄᴋ.minutes}m ${ᴄʟᴏᴄᴋ.seconds}s.`,
true
)

.addField(
`**🧀Usage**`,
`${bot.prefix}${FinalName} <once 24hr>`,
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
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
uEco.daily = Date.now();
uEco.money = uEco.money + 500;
await uEco.save().catch((error) => {
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
.setDescription(
`**\`\`\`fix
💵 VLKYRE DAILY BONUS 💵\n\`\`\`**`
)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setThumbnail("https://i.postimg.cc/2SmqKcxP/Vlkyre-Gold.jpg")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(
`**✅Daily Collected**`,
`You've collected your daily reward.`,
true
)
.addField(`**✅Daily Money**`, `💰500`, true)
.addField(`**💰Balance**`, `${uEco.money}`, true)

.addField(
`**🧀Usage**`,
`${bot.prefix}${FinalName} <once 24hr>`,
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
