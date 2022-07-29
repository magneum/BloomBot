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
const malScraper = require("mal-scraper");
let ScriptName = path.basename(__filename);
import { Song } from "../../⧊Structure/Song";
import { splitBar } from "string-progressbar";
import { canModifyQueue } from "../../⧊Utils/queue";
let FinalName = ScriptName.slice(0, -3).toLowerCase();
import { playlistPattern } from "../../⧊Utils/patterns";
import { MusicQueue } from "../../⧊Structure/MusicQueue";
import { Message, MessageEmbed, TextChannel } from "discord.js";
export default {
name: FinalName,
category: "🔎Websearch",
description: "Get info about an anime",
async execute(kryknz: any, message: Message, args: string[]) {
if (!args.length) {
return await message
.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#B33F40")
.setDescription(`**\`\`\`fix
ARGUMENTS NEEDED\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
)
.addField(
`**\`🧀ᴜꜱᴀɢᴇ\`**`,
`${bot.prefix}${FinalName} <anime name>`,
true
),
],
})
.catch((error) =>
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
)
);
}
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
malScraper.getInfoFromName(args.join(" ")).then((data) => {
message.reply({
embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setImage(data.picture)
.setURL("https://github.com/kryknz")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setDescription(`Anime Search result for ${args}`.split(",").join(" "))
.addField("**💡ᴛɪᴛʟᴇ**", `${data.title}`, true)
.addField("**🧀ᴘʀᴇᴍɪᴇʀᴇᴅ**", `${data.premiered}`, true)
.addField("**😈ʙʀᴏᴀᴅᴄᴀꜱᴛ**", `${data.broadcast}`, true)
.addField("**❓ɢᴇɴʀᴇꜱ**", `${data.genres}`, true)
.addField("**📜ᴇɴɢʟɪꜱʜ ᴛɪᴛʟᴇ**", `${data.englishTitle}`, true)
.addField("**🈶ᴊᴀᴘᴀɴᴇꜱᴇ ᴛɪᴛʟᴇ**", `${data.japaneseTitle}`, true)
.addField("**🫒ᴛʏᴘᴇ**", `${data.type}`, true)
.addField("**👀ᴇᴘɪꜱᴏᴅᴇꜱ**", `${data.episodes}`, true)
.addField("**🔥ʀᴀᴛɪɴɢ**", `${data.rating}`, true)
.addField("**🛰️ᴀɪʀᴇᴅ**", `${data.aired}`, true)
.addField("**💯ꜱᴄᴏʀᴇ**", `${data.score}`, true)
.addField("**⭐ꜰᴀᴠᴏʀɪᴛᴇ**", `${data.favorites}`, true)
.addField("**🏅ʀᴀɴᴋᴇᴅ**", `${data.ranked}`, true)
.addField("**⏰ᴅᴜʀᴀᴛɪᴏɴ**", `${data.duration}`, true)
.addField("**🛸ꜱᴛᴜᴅɪᴏꜱ**", `${data.studios}`, true)
.addField("**🥳ᴘᴏᴘᴜʟᴀʀɪᴛʏ**", `${data.popularity}`, true)
.addField("**🥷ᴍᴇᴍʙᴇʀꜱ**", `${data.members}`, true)
.addField("**👌🏽ꜱᴄᴏʀᴇ ꜱᴛᴀᴛꜱ**", `${data.scoreStats}`, true)
.addField("**🫐ꜱᴏᴜʀᴄᴇ**", `${data.source}`, true)
.addField("**🔎ꜱʏɴᴏɴʏᴍꜱ**", `${data.synonyms}`, true)
.addField("**🕸️ꜱᴛᴀᴛᴜꜱ**", `${data.status}`, true)
.addField("**🎯ɪᴅᴇɴᴛɪꜰɪᴇʀ**", `${data.id}`, true)
.addField("**📥ʟɪɴᴋ**", `[Website](${data.url})`, true)
.setFooter(
`❣️Requested by ${message.author.username}`,
message.author.avatarURL({ dynamic: true })
),
],
}).catch((error) =>
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
)
);
});
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
