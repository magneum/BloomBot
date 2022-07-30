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
const simplydjs = require("simply-djs");
const malScraper = require("mal-scraper");
let ScriptName = path.basename(__filename);
const Discord = module.require("discord.js");
import { Song } from "../../⧊Structure/Song";
import { splitBar } from "string-progressbar";
const { Snake } = require("discord-gamecord");
import { canModifyQueue } from "../../⧊Utils/queue";
let FinalName = ScriptName.slice(0, -3).toLowerCase();
import { playlistPattern } from "../../⧊Utils/patterns";
import { MusicQueue } from "../../⧊Structure/MusicQueue";
import { Message, MessageEmbed, TextChannel } from "discord.js";
export default {
name: FinalName,
category: "🎮Games",
description: "Foodball in Discord!",
async execute(kryknz: any, message: Message, args: string[]) {
const positions = {
left: "_ _                   🥅🥅🥅\n_ _                   🕴️\n      \n_ _                         ⚽",
middle:
"_ _                   🥅🥅🥅\n_ _                        🕴️\n      \n_ _                         ⚽",
right:
"_ _                   🥅🥅🥅\n_ _                              🕴️\n      \n_ _                         ⚽",
};
let randomized = Math.floor(Math.random() * Object.keys(positions).length);
let gameEnded = false;
let randomPos = positions[Object.keys(positions)[randomized]];

const componentsArray = [
{
type: 1,
components: [
{
  type: 2,
  style: "SECONDARY",
  custom_id: "left",
  label: "Left",
},
{
  type: 2,
  style: "PRIMARY",
  custom_id: "middle",
  label: "Middle",
},
{
  type: 2,
  style: "SECONDARY",
  custom_id: "right",
  label: "Right",
},
],
},
];

const msg = await message.channel.send({
content: randomPos,
components: componentsArray,
});

function update() {
randomized = Math.floor(Math.random() * Object.keys(positions).length);
randomPos = positions[Object.keys(positions)[randomized]];

msg.edit({
content: randomPos,
components: componentsArray,
});
}
setInterval(() => {
if (gameEnded == false) return update();
}, 1000);

const filter = (button) => {
return button.user.id === message.author.id;
};
const button = await msg.awaitMessageComponent({
filter: filter,
componentType: "BUTTON",
max: 1,
});

if (button.customId !== Object.keys(positions)[randomized]) {
gameEnded = true;
return button.reply({
content: "You won!",
});
} else {
gameEnded = true;
return button.reply({
content: "You lose...",
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
