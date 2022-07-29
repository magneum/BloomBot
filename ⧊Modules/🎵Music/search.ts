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
type CustomTextChannel = TextChannel & { activeCollector: boolean };
export default {
name: FinalName,
category: "🎵Music",
description: "Search and select videos to play",
async execute(kryknz: any, message: Message, args: string[]) {
if (!args.length)
return message
.reply(`Usage: ${bot.prefix}${module.exports.name} <Video Name>`)
.catch(console.error);

if ((message.channel as CustomTextChannel).activeCollector)
return message.reply(
"A message collector is already active in this channel."
);

if (!message.member?.voice.channel)
return message
.reply("You need to join a voice channel first!")
.catch(console.error);

const search = args.join(" ");

let resultsEmbed = new MessageEmbed()
.setTitle("**Reply with the song number you want to play**")
.setDescription(`Results for: ${search}`)
.setColor("#F8AA2A");

try {
const results = await youtube.search(search, {
limit: 10,
type: "video",
});

results.map((video, index) =>
resultsEmbed.addField(
`https://youtube.com/watch?v=${video.id}`,
`${index + 1}. ${video.title}`
)
);

let resultsMessage = await message.channel.send({
embeds: [resultsEmbed],
});

function filter(msg: Message) {
const pattern = /^[1-9][0]?(\s*,\s*[1-9][0]?)*$/;
return pattern.test(msg.content);
}

(message.channel as CustomTextChannel).activeCollector = true;

const response = await message.channel.awaitMessages({
filter,
max: 1,
time: 30000,
errors: ["time"],
});
const reply = response.first()!.content;

if (reply.includes(",")) {
let songs = reply.split(",").map((str) => str.trim());

for (let song of songs) {
await bot.commands
.get("play")!
.execute(message, [resultsEmbed.fields[parseInt(song) - 1].name]);
}
} else {
const choice: any =
resultsEmbed.fields[parseInt(response.first()?.toString()!) - 1].name;
bot.commands.get("play")!.execute(message, [choice]);
}

(message.channel as CustomTextChannel).activeCollector = false;
resultsMessage.delete().catch(console.error);
response.first()!.delete().catch(console.error);
} catch (error: any) {
console.error(error);
(message.channel as CustomTextChannel).activeCollector = false;
message
.reply("There was an error executing that command.")
.catch(console.error);
}
},
};
