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
import vCrypt from "bcrypt";
import move from "array-move";
import youtube from "youtube-sr";
import { bot } from "../../⧊Vlkyre";
import generator from "generate-password";
const malScraper = require("mal-scraper");
let ScriptName = path.basename(__filename);
import { Song } from "../../⧊Structure/Song";
import { splitBar } from "string-progressbar";
import { canModifyQueue } from "../../⧊Utils/queue";
let FinalName = ScriptName.slice(0, -3).toLowerCase();
import { playlistPattern } from "../../⧊Utils/patterns";
import { MusicQueue } from "../../⧊Structure/MusicQueue";
let vUser = require(`../../⧊Database/Verification/vUser`);
import { Message, MessageEmbed, TextChannel } from "discord.js";
export default {
name: FinalName,
category: "🔎ᴡᴇʙꜱᴇᴀʀᴄʜ",
description: "Get info about an anime",
async execute(kryknz: any, message: Message, args: string[]) {
await vUser.findOne(
{
ID: message.author,
},
async (Error, vPs) => {
if (Error) {
return message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
}
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
if (!vPs) {
let passWORD = generator.generate({
length: 10,
numbers: true,
});
vCrypt.hash(passWORD, 10, async function (Error, phraseWORD) {
if (Error) {
return message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
}
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
await new vUser({
ID: message.author,
Verity: phraseWORD,
passWORD: passWORD,
})
.save()
.catch((Error) => {
console.log(Error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
});
await message.reply(
"**⚡Vlkyre:** _Please check the message in your DM_"
);
return await message.author
.send({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(
`**\`\`\`fix
✅✅ VLKYRE VERIFICATION DONE ✅✅\n\`\`\`**`
)
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(`**🆔ID**`, `${message.author}`, true)
.addField(`**🔔PassWord**`, `${passWORD}`, true)
.addField(`**🔑Verification Key**`, `${phraseWORD}`, true),
],
})
.catch((Error) => {
console.log(Error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} else {
await message.reply(
"**⚡Vlkyre:** _Please check the message in your DM_"
);
return await message.author
.send({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(
`**\`\`\`fix
✅✅ VLKYRE VERIFICATION DONE ✅✅\n\`\`\`**`
)
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(`**🆔ID**`, `${vPs.ID}`, true)
.addField(`**🔔PassWord**`, `${vPs.passWORD}`, true)
.addField(`**🔑Verification Key**`, `${vPs.Verity}`, true),
],
})
.catch((Error) => {
console.log(Error.message);
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
