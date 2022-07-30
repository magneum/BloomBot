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
export default {
name: FinalName,
category: "⚙️System",
description: "Display all commands and descriptions",
async execute(kryknz: any, message: Message, args: string[]) {
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
if (!args) {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
🔖🔖 VLKYRE COMMAND LIST 🔖🔖\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`⚙️System\`**`, `${bot.prefix}help system`, true)
.addField(`**\`🎮Games\`**`, `${bot.prefix}help games`, true)
.addField(`**\`💰Economy\`**`, `${bot.prefix}help economy`, true)
.addField(`**\`🔎Websearch\`**`, `${bot.prefix}help websearch`, true)
.addField(`**\`🎵Music\`**`, `${bot.prefix}help music`, true)
.addField(`**\`👑Moderation\`**`, `${bot.prefix}help moderation`, true)
.addField(`**\`🍑Hentai\`**`, `${bot.prefix}help hentai`, true)
.addField(`**\`🔞Nsfw\`**`, `${bot.prefix}help nsfw`, true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "system") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
⚙️⚙️ SYSTEM COMMAND LIST ⚙️⚙️\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`${bot.prefix}help\`**`, "_Display all commands and descriptions_", true)
.addField(`**\`${bot.prefix}ping\`**`, "_Show the bot's average ping_", true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "hentai") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
🍑🍑 HENTAI COMMAND LIST 🍑🍑\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`● ${bot.prefix}hass\`**`, "I know you like anime ass~ uwu", true)
.addField(`**\`● ${bot.prefix}hbdsm\`**`, "If you don't know what it is, search it up", true)
.addField(`**\`● ${bot.prefix}hblowjob\`**`, "Basically an image of a girl sucking on a sharp blade", true)
.addField(`**\`● ${bot.prefix}hcum\`**`, "Basically sticky white stuff that is usually milked from sharpies.", true)
.addField(`**\`● ${bot.prefix}hdoujin\`**`, "Sends a random doujin page imageURL!", true)
.addField(`**\`● ${bot.prefix}hentai\`**`, "Sends a random vanilla hentai imageURL~", true)
.addField(`**\`● ${bot.prefix}hfeet\`**`, "So you like smelly feet huh?", true)
.addField(`**\`● ${bot.prefix}hfemdom\`**`, "Female Domination?", true)
.addField(`**\`● ${bot.prefix}hfoxgirl\`**`, "Girl's that are wannabe foxes, yes", true)
.addField(`**\`● ${bot.prefix}hgif\`**`, "Basically an animated image, so yes :3", true)
.addField(`**\`● ${bot.prefix}hglasses\`**`, "Girls that wear glasses, uwu~", true)
.addField(`**\`● ${bot.prefix}hmaid\`**`, "Maids, Maid Uniforms, etc, you know what maids are :3", true)
.addField(`**\`● ${bot.prefix}hmasturbation\`**`, "Solo Queue in CSGO!", true)
.addField(`**\`● ${bot.prefix}hnetorare\`**`, "Wow, I won't even question your fetishes.", true)
.addField(`**\`● ${bot.prefix}horgy\`**`, "Group Lewd Acts", true)
.addField(`**\`● ${bot.prefix}hpanties\`**`, "I mean... just why? You like underwear?", true)
.addField(`**\`● ${bot.prefix}hpussy\`**`, "The genitals of a female, or a cat, you give the meaning.", true)
.addField(`**\`● ${bot.prefix}hschool\`**`, "School Uniforms!~ Yatta~!", true)
.addField(`**\`● ${bot.prefix}succubus\`**`, "Spooky Succubus, oh I'm so scared~ Totally don't suck me~", true)
.addField(`**\`● ${bot.prefix}htentacles\`**`, "I'm sorry but, why do they look like intestines?", true)
.addField(`**\`● ${bot.prefix}hthighs\`**`, "The top part of your legs, very hot, isn't it?", true)
.addField(`**\`● ${bot.prefix}huniform\`**`, "Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~", true)
.addField(`**\`● ${bot.prefix}hyuri\`**`, "Girls on Girls, and Girl's only!<3", true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "games") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
🎮🎮 GAMES COMMAND LIST 🎮🎮\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`● ${bot.prefix}snake\`**`, "_Snake Game in discord!_", true)
.addField(`**\`● ${bot.prefix}tictactoe\`**`, "_Tic Tac Toe in discord!_", true)
.addField(`**\`● ${bot.prefix}gunfight\`**`, "_First one to shoot wins!_", true)

.addField(`**\`● ${bot.prefix}connect4\`**`, "_Connect4 in Discord!_", true)
.addField(`**\`● ${bot.prefix}fasttype\`**`, "_Type as fast as you can!_", true)
.addField(`**\`● ${bot.prefix}football\`**`, "_Foodball in Discord!_", true)
.addField(`**\`● ${bot.prefix}guessthenumber\`**`, "_Guess The Number!_", true)
.addField(`**\`● ${bot.prefix}rps\`**`, "_Rock paper scissors in discord!_", true)


.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "music") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
🎵🎵 MUSIC PLAYER COMMAND LIST 🎵🎵\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`● ${bot.prefix}loop\`**`, "_Toggle music loop_", true)
.addField(`**\`● ${bot.prefix}move\`**`, "_Move songs around in the queue_", true)
.addField(`**\`● ${bot.prefix}nowplaying\`**`, "_Show now playing song_", true)
.addField(`**\`● ${bot.prefix}pause\`**`, "_Pause the currently playing music_", true)
.addField(`**\`● ${bot.prefix}play\`**`, "_Plays audio from YouTube or Soundcloud_", true)
.addField(`**\`● ${bot.prefix}playlist\`**`, "_Play a playlist from youtube_", true)
.addField(`**\`● ${bot.prefix}remove\`**`, "_Remove song from the queue_", true)
.addField(`**\`● ${bot.prefix}resume\`**`, "_Resume currently playing music_", true)
.addField(`**\`● ${bot.prefix}search\`**`, "_Search and select videos to play_", true)
.addField(`**\`● ${bot.prefix}shuffle\`**`, "_Shuffle queue_", true)
.addField(`**\`● ${bot.prefix}skip\`**`, "_Skip the currently playing song_", true)
.addField(`**\`● ${bot.prefix}stop\`**`, "_Stops the music_", true)
.addField(`**\`● ${bot.prefix}volume\`**`, "_Change volume of currently playing music_", true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "moderation") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
👑👑 MODERATION COMMAND LIST 👑👑\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`● ${bot.prefix}antilink\`**`, "_Set Settings for Antilink!_", true)
.addField(`**\`● ${bot.prefix}channelupdate\`**`, "_Set Settings for Channel Updates!_", true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "economy") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
💰💰 ECONOMY GAMES COMMAND LIST 💰💰\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`● ${bot.prefix}daily\`**`, "_Collect Daily Bonus Money._", true)
.addField(`**\`● ${bot.prefix}fish\`**`, "_Play Fishing game to earn money._", true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "websearch") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
🔎🔎 WEB SEARCH COMMAND LIST 🔎🔎\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`● ${bot.prefix}anime\`**`, "_Get info about an anime_", true)
.addField(`**\`● ${bot.prefix}gif\`**`, "_Get any gif_", true)
.addField(`**\`● ${bot.prefix}ytsearch\`**`, "_Search YouTube For Music or Video_", true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 

else if (args[0].toLowerCase() == "nsfw") {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
🔞🔞 NOT SAFE FOR WORK LIST 🔞🔞\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`● ${bot.prefix}p4k\`**`, "_Get High Quality Random 4k Porn Images._", true)
.addField(`**\`● ${bot.prefix}pblowjob\`**`, "_Get High Quality Random 4k Blowjobs Images._", true)
.addField(`**\`● ${bot.prefix}pcumslut\`**`, "_Get High Quality Random 4k Cumslut Images._", true)
.addField(`**\`● ${bot.prefix}pmilf\`**`, "_Get High Quality Random 4k Milf Images._", true)
.addField(`**\`● ${bot.prefix}pmilk\`**`, "_Get High Quality Random 4k Milking Images._", true)
.addField(`**\`● ${bot.prefix}ppussy\`**`, "_Get High Quality Random 4k Pussy Images._", true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
message.reply(
"**❌Error:** _Sorry There Was a problem with the command.\nPlease try again later!_"
);
});
("⬡════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞⚡ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |════════════════════════════════════════════════⬡");
} 
else {
return await message.reply({ embeds: [
new MessageEmbed()
.setTimestamp()
.setColor("#849871")
.setThumbnail("https://i.postimg.cc/85JtZ4Q5/Vlkyre.png")
.setDescription(`**\`\`\`fix
🔖🔖 VLKYRE COMMAND LIST 🔖🔖\n\`\`\`**`)
.setURL("https://github.com/kryknz")
.setTitle("⚡𝐕𝐋𝐊𝐘𝐑𝐄: _𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 + 𝐃𝐈𝐒𝐂𝐎𝐑𝐃_ 𝐁𝐎𝐓")
.setFooter(`❣️Requested by ${message.author.username}`)
.addField(`**\`⚙️System\`**`, `${bot.prefix}help system`, true)
.addField(`**\`🎮Games\`**`, `${bot.prefix}help games`, true)
.addField(`**\`💰Economy\`**`, `${bot.prefix}help economy`, true)
.addField(`**\`🔎Websearch\`**`, `${bot.prefix}help websearch`, true)
.addField(`**\`🎵Music\`**`, `${bot.prefix}help music`, true)
.addField(`**\`👑Moderation\`**`, `${bot.prefix}help moderation`, true)
.addField(`**\`🍑Hentai\`**`, `${bot.prefix}help hentai`, true)
.addField(`**\`🔞Nsfw\`**`, `${bot.prefix}help nsfw`, true)
.setFooter( `❣️Requested by ${message.author.username}`, message.author.avatarURL({ dynamic: true })),
],
}).catch((error) => {
console.log(error.message);
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