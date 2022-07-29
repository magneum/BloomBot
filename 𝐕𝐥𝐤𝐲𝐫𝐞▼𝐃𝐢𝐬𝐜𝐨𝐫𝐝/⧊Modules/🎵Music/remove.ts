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
const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/;
export default {
name: FinalName,
category: "🎵Music",
description: "Remove song from the queue",
async execute(kryknz: any, message: Message, args: string[]) {
const queue = bot.queues.get(message.guild!.id);

if (!queue) return message.reply("There is no queue.").catch(console.error);

if (!canModifyQueue(message.member!))
return message
.reply("You need to join a voice channel first!")
.catch(console.error);

if (!args.length)
return message.reply(`Usage: ${bot.prefix}remove <Queue Number>`);

const removeArgs = args.join("");

const songs = removeArgs.split(",").map((arg) => parseInt(arg));

let removed: Song[] = [];

if (pattern.test(removeArgs)) {
queue.songs = queue.songs.filter((item, index) => {
if (songs.find((songIndex) => songIndex - 1 === index))
removed.push(item);
else return true;
});
queue.textChannel.send(
`<@${message.author.id}> ❌ removed **${removed
.map((song) => song.title)
.join("\n")}** from the queue.`
);
} else if (
!isNaN(args[0]) &&
args[0] >= 1 &&
args[0] <= queue.songs.length
) {
return queue.textChannel.send(
`<@${message.author.id}> ❌ removed **${removed
.map((song) => song.title)
.join("\n")}** from the queue.`
);
} else {
return message.reply(`Usage: ${bot.prefix}remove <Queue Number>`);
}
},
};
