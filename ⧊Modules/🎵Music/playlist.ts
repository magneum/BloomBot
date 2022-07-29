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
category: "🎵Music",
cooldown: 5,
description: "Play a playlist from youtube",
permissions: ["CONNECT", "SPEAK", "ADD_REACTIONS", "MANAGE_MESSAGES"],
async execute(kryknz: any, message: Message, args: string[]) {
const { channel } = message.member!.voice;

const queue = bot.queues.get(message.guild!.id);

if (!args.length)
return message
.reply(
`Usage: ${bot.prefix}playlist <YouTube Playlist URL | Playlist Name>`
)
.catch(console.error);

if (!channel)
return message
.reply("You need to join a voice channel first!")
.catch(console.error);

if (queue && channel.id !== queue.connection.joinConfig.channelId)
return message
.reply(
`You must be in the same channel as ${message.client.user!.username}`
)
.catch(console.error);

let playlist;

try {
playlist = await Playlist.from(args[0], args.join(" "));
} catch (error) {
console.error(error);

return message.reply("Playlist not found :(").catch(console.error);
}

if (queue) {
queue.songs.push(...playlist.videos);
} else {
const newQueue = new MusicQueue({
message,
connection: joinVoiceChannel({
channelId: channel.id,
guildId: channel.guild.id,
adapterCreator: channel.guild
.voiceAdapterCreator as DiscordGatewayAdapterCreator,
}),
});

bot.queues.set(message.guild!.id, newQueue);
newQueue.enqueue(playlist.videos[0]);
}

let playlistEmbed = new MessageEmbed()
.setTitle(`${playlist.data.title}`)
.setDescription(
playlist.videos
.map((song: Song, index: number) => `${index + 1}. ${song.title}`)
.join("\n")
)
.setURL(playlist.data.url!)
.setColor("#F8AA2A")
.setTimestamp();

if (playlistEmbed.description!.length >= 2048)
playlistEmbed.description =
playlistEmbed.description!.substr(0, 2007) +
"\nPlaylist larger than character limit...";

message
.reply({
content: `<@${message.author}> Started a playlist`,
embeds: [playlistEmbed],
})
.catch(console.error);
},
};
