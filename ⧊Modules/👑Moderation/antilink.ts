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
import move from "array-move";
import youtube from "youtube-sr";
import { bot } from "../../⧊Vlkyre";
let ScriptName = path.basename(__filename);
import { Song } from "../../⧊Structure/Song";
import { splitBar } from "string-progressbar";
import { canModifyQueue } from "../../⧊Utils/queue";
let FinalName = ScriptName.slice(0, -3).toLowerCase();
import { playlistPattern } from "../../⧊Utils/patterns";
import { MusicQueue } from "../../⧊Structure/MusicQueue";
import { Message, MessageEmbed, TextChannel } from "discord.js";
const prefixModel = require("../../⧊Database/Javascript/antilink");
export default {
name: FinalName,
category: "👑Moderation",
description: "Set Settings for Antilink!",
permissions: ["MANAGE_MESSAGES", "MANAGE_GUILD"],
async execute(kryknz: any, message: Message, args: string[]) {
if (args[0] === "On" || args[0] === "on") {
const data = await prefixModel.findOne({
Guild_ID: message.guild.id,
});
if (data) {
await prefixModel.findOneAndRemove({
Guild_ID: message.guild.id,
});
new prefixModel({
Guild_ID: message.guild.id,
})
.save()
.catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setURL("https://github.com/krakinz")
.setColor("#849871")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.setDescription(
`**\`\`\`diff\nAntilink is now active!\n\`\`\`**`
),
],
})
.catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
}
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
new prefixModel({
Guild_ID: message.guild.id,
})
.save()
.catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setURL("https://github.com/krakinz")
.setColor("#849871")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.setDescription(
`**\`\`\`diff\nAntilink is now active!\n\`\`\`**`
),
],
})
.catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});

("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} else if (args[0] === "off" || args[0] === "Off") {
const data2 = await prefixModel.findOne({
Guild_ID: message.guild.id,
});
if (data2) {
await prefixModel.findOneAndRemove({
Guild_ID: message.guild.id,
});
return message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setURL("https://github.com/krakinz")
.setColor("#f5f9ad")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.setDescription(
`**\`\`\`diff\nAntilink has been turned off!\n\`\`\`**`
),
],
})
.catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
}
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
return message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setURL("https://github.com/krakinz")
.setColor("#B33F40")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
).setDescription(`**\`\`\`diff
-Antilink isn't setup!    
\`\`\`**`),
],
})
.catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} else {
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#B33F40")
.setDescription(`**\`\`\`fix
ARGUMENTS NEEDED\n\`\`\`**`)
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(
`**\`🧀ᴜꜱᴀɢᴇ\`**`,
`${bot.prefix}${FinalName} <on or off>`,
true
),
],
})
.catch((error) => {
console.log(error);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
}
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
