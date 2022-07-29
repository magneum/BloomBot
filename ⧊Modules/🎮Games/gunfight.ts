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
description: "First one to shoot wins!",
async execute(kryknz: any, message: Message, args: string[]) {
const opponent = message.mentions.users.first();
const positions = {
three:
"_ _        :levitate: :point_right:      **3**        :point_left: :levitate:",
two: "_ _        :levitate: :point_right:      **2**        :point_left: :levitate:",
one: "_ _        :levitate: :point_right:      **1**        :point_left: :levitate:",
go: "_ _        :levitate: :point_right:      **GO!**        :point_left: :levitate:",
ended1:
"_ _     :levitate: :point_right:      **STOP!**        :skull_crossbones: :levitate:",
ended2:
"_ _     :levitate: :skull_crossbones:      **STOP!**        :point_left: :levitate:",
};

const componentsArray = [
{
type: 1,
components: [
{
type: 2,
label: "Shoot!",
custom_id: "shoot1",
style: "PRIMARY",
disabled: true,
},
{
type: 2,
label: "\u200b",
custom_id: "id lol useless",
style: "SECONDARY",
disabled: true,
},
{
type: 2,
label: "Shoot!",
custom_id: "shoot2",
style: "DANGER",
disabled: true,
},
],
},
];

const msg = await message.channel.send({
content: positions.three,
components: componentsArray,
});

function countdown() {
setTimeout(() => {
msg.edit({
content: positions.two,
components: componentsArray,
});
}, 1000);
setTimeout(() => {
msg.edit({
content: positions.one,
components: componentsArray,
});
}, 2000);
setTimeout(() => {
componentsArray[0].components[0].disabled = false;
componentsArray[0].components[2].disabled = false;
msg.edit({
content: positions.go,
components: componentsArray,
});
}, 3000);
}
countdown();

const filter = (button) => {
return (
button.user.id == message.author.id || button.user.id == opponent.id
);
};

const button = await msg.awaitMessageComponent({
filter: filter,
componentType: "BUTTON",
max: 1,
});

componentsArray[0].components[0].disabled = true;
componentsArray[0].components[2].disabled = true;

if (button.customId === "shoot1" && button.user.id == message.author.id) {
msg.edit({
content: positions.ended1,
components: componentsArray,
});
return button.reply({
content: `<@${message.author.id}> won!`,
});
} else if (button.customId === "shoot2" && button.user.id == opponent.id) {
msg.edit({
content: positions.ended1,
components: componentsArray,
});
return button.reply({
content: `<@${opponent.id}> won!`,
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
