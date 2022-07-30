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
const { Connect4 } = require("discord-gamecord");
import { canModifyQueue } from "../../⧊Utils/queue";
let FinalName = ScriptName.slice(0, -3).toLowerCase();
import { playlistPattern } from "../../⧊Utils/patterns";
import { MusicQueue } from "../../⧊Structure/MusicQueue";
import { Message, MessageEmbed, TextChannel } from "discord.js";
export default {
name: FinalName,
category: "🎮Games",
description: "First one to shoot wins!",
async execute(kryknz: any, message: Message, args: string[]) {
const positions = {
safe: "_ _                          :fish:\n            _ _              :hand_splayed:\n            _ _              :cat:",
danger:
"_ _                          :bomb:\n            _ _              :hand_splayed:\n            _ _              :cat:",
win: "_ _           :crown:**You won.**:crown:\n_ _                      :hand_splayed:\n_ _                      :cat:",
lose: "_ _           :skull:**You lost.**:skull:             \n_ _                      :hand_splayed:\n_ _                      :cat:",
};

let randomized = Math.floor(Math.random() * 2);
let gameEnded = false;
let randomPos = positions[Object.keys(positions)[randomized]];
let data = 0;

const componentsArray = [
{
type: 1,
components: [
{
type: 2,
style: "SECONDARY",
custom_id: "e",
label: "\u200b",
disabled: true,
},
{
type: 2,
style: "PRIMARY",
custom_id: String(Math.random()),
emoji: {
id: "890611575227023391",
},
},
{
type: 2,
style: "SECONDARY",
custom_id: "ee",
label: "\u200b",
disabled: true,
},
],
},
];

const msg = await message.reply({
content: `Catch 3 fishes to win!\n\n${randomPos}`,
components: componentsArray,
});

const filter = (button) => {
return button.user.id === message.author.id;
};
const game = await message.channel.createMessageComponentCollector({
filter,
componentType: "BUTTON",
});

function update(button) {
randomized = Math.floor(Math.random() * 2);
randomPos = positions[Object.keys(positions)[randomized]];

if (data === 3) {
gameEnded = true;
game.stop();
componentsArray[0].components[1].disabled = true;

msg.edit({
content: positions.win,
components: componentsArray,
});
button.reply({
content: "GG! You caught 3 fishes!",
});
} else if (data <= -9) {
gameEnded = true;
game.stop();
componentsArray[0].components[1].disabled = true;

msg.edit({
content: positions.lose,
components: componentsArray,
});
button.reply({
content: "GG You lost XD",
});
} else {
if (button) return button.deferUpdate();
msg.edit({
content: randomPos + `           **${data}**`,
components: componentsArray,
});
}
}

setInterval(() => {
if (gameEnded === false) return update();
}, 2000);

game.on("collect", async (button) => {
if (randomized !== 0) {
data -= 3;
update(button);
} else {
data++;
update(button);
}
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
