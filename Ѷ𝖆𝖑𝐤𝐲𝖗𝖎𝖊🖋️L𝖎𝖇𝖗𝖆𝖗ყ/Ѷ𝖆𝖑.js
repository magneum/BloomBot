("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
require(`./𝕷𝖆ყO𝖚𝖙`);
const fs = require(`fs`);
const util = require(`util`);
const chalk = require(`chalk`);
const moment = require(`moment-timezone`);
const { Caught } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
const Ranker = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
const LinkList = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/antilink`);
const userBanCheck = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
module.exports = ӄ𝖚𝖓𝖆𝖎 = async (ӄ𝖚𝖓𝖆, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎, chatUpdate, Ѷ𝖎𝖔𝖓) => {
try {
const Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎;
const ӄ𝖚𝖓𝖆𝖎 = ӄ𝖚𝖓𝖆;
const Figure =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `conversation`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `imageMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.imageMessage.caption
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `videoMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.videoMessage.caption
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `extendedTextMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.text
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `buttonsResponseMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage.selectedButtonId
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `listResponseMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage.singleSelectReply.selectedRowId
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `templateButtonReplyMessage`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.templateButtonReplyMessage.selectedId
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `messageContextInfo`
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage?.selectedButtonId ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage?.singleSelectReply
.selectedRowId ||
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text
: ``;
const isReply =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `extendedTextMessage` &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.hasOwnProperty(`contextInfo`) &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.hasOwnProperty(
`stanzaId`
);
const budy = typeof Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text == `string` ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text : ``;
const isCommand = Figure.startsWith(prefix);
const isCmd =
prefix.includes(Figure != `` && Figure.slice(0, 1)) &&
Figure.slice(1) != ``;
const commandName = isCmd
? Figure.slice(1).trim().split(` `)[0].toLowerCase()
: ``;
const A𝖗𝖌𝖘 = Figure.trim().split(/ +/).slice(1);
const pushName = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || `No Name`;
const botNumber = await ӄ𝖚𝖓𝖆𝖎.decodeJid(ӄ𝖚𝖓𝖆𝖎.user.id);
const isCreator = [botNumber, ...global.owner]
.map((v) => v.replace(/[^0-9]/g, ``) + `@s.whatsapp.net`)
.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender);
const fromMe = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender == botNumber ? true : false;
const F𝖚𝖑𝖑_A𝖗𝖌𝖘 = A𝖗𝖌𝖘.join(` `);
const quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
const mime = (quoted.msg || quoted).mimetype || ``;
const isMedia = /image|video|sticker|audio/.test(mime);
const isGroup = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.endsWith(`@g.us`);
const groupMetadata = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? await ӄ𝖚𝖓𝖆𝖎.groupMetadata(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID).catch((e) => {})
: ``;
const groupName = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup ? groupMetadata.subject : ``;
const participants = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? await groupMetadata.participants
: ``;
const groupAdmins = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? await participants.filter((v) => v.admin !== null).map((v) => v.id)
: ``;
const isBotAdmin = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? groupAdmins.includes(botNumber)
: false;
const isSenderAdmin = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup
? groupAdmins.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender)
: false;
const mentionByTag =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.mentionedJid
: [];
const mentionByReply =
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.participant || ""
: "";
const Time = moment.tz(`Asia/Kolkata`).format(`DD/MM HH:mm:ss`);
const TUFString = KATE;
const isSenderTUF = TUFString.includes(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.substring(0, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.indexOf(`@`))
);
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
if (isCommand && !isGroup) {
return Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply(`You cannot use any command in dm`);
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message && !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe && Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup) {
await Ranker.findOne(
{
serverID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
},
async (error, userRank) => {
if (error) return Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, error);
if (!userRank) return;
const { ARanks } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/ARanks");
await ARanks(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ӄ𝖚𝖓𝖆𝖎, Caught);
}
);
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
if (
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message &&
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.isGroup &&
!isSenderAdmin &&
isBotAdmin &&
!isSenderTUF
) {
const { DenyLink } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/DenyLink");
await DenyLink(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
ӄ𝖚𝖓𝖆𝖎,
Caught,
Image_Button,
A𝖗𝖌𝖘,
LinkList,
Figure
);
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
await userBanCheck.findOne(
{
ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender || Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
},
async (error, userBCheck) => {
if (error) return Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e);
if (userBCheck) return;

if (isCmd) {
const { BeutyFly } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/BeutyFly");
await BeutyFly(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chalk, budy, pushName);
}
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
switch (commandName) {
case ``:
if (isCommand) {
const dbut = [
{
buttonId: `${prefix}help`,
buttonText: { displayText: `Commands` },
type: 1,
},
{
buttonId: `${prefix}info`,
buttonText: { displayText: `Bot status` },
type: 1,
},
];
let buttonMessaged = {
text: `Hey *${pushName}* I am ${name}. Do you mean: ${prefix}help`,
footer: `@ARUS`,
buttons: dbut,
headerType: 4,
};

await ӄ𝖚𝖓𝖆𝖎.sendMessage(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, buttonMessaged, {
quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
});
}
break;
//       case `lead`:
//       case `leaderboard`:
//         const mems_id = new Array();
//         const lb = await Levels.fetchLeaderboard(`bot`, 10);
//         let lbtext = `*━━━━『💫LeaderBoard💫』━━━━*

// `;
//         for (let i = 0; i < lb.length; i++) {
//           const levelRole = lb[i].level;
//           var role = `Warrior`;
//           if (levelRole <= 2) {
//             var role = `Elite III`;
//           } else if (levelRole <= 4) {
//             var role = `Elite II`;
//           } else if (levelRole <= 6) {
//             var role = `Elite I`;
//           } else if (levelRole <= 8) {
//             var role = `Master IV`;
//           } else if (levelRole <= 10) {
//             var role = `Master III`;
//           } else if (levelRole <= 12) {
//             var role = `Master II`;
//           } else if (levelRole <= 14) {
//             var role = `Master I`;
//           } else if (levelRole <= 16) {
//             var role = `Grandmaster V`;
//           } else if (levelRole <= 18) {
//             var role = `Grandmaster IV`;
//           } else if (levelRole <= 20) {
//             var role = `Grandmaster III`;
//           } else if (levelRole <= 22) {
//             var role = `Grandmaster II`;
//           } else if (levelRole <= 24) {
//             var role = `Grandmaster I`;
//           } else if (levelRole <= 26) {
//             var role = `Epic V`;
//           } else if (levelRole <= 28) {
//             var role = `Epic IV`;
//           } else if (levelRole <= 30) {
//             var role = `Epic III`;
//           } else if (levelRole <= 32) {
//             var role = `Epic II`;
//           } else if (levelRole <= 34) {
//             var role = `Epic I`;
//           } else if (levelRole <= 36) {
//             var role = `Legend V`;
//           } else if (levelRole <= 38) {
//             var role = `Legend IV`;
//           } else if (levelRole <= 40) {
//             var role = `Legend III`;
//           } else if (levelRole <= 42) {
//             var role = `Legend II`;
//           } else if (levelRole <= 44) {
//             var role = `Legend I`;
//           } else if (levelRole <= 46) {
//             var role = `Mythic`;
//           } else if (levelRole <= 50) {
//             var role = `Mythic Glory`;
//           }
//           let name = await user.findOne({ id: lb[i].userID });
//           lbtext += `${i + 1}#
// *🔰Name*: ${name.name}
// *🎐Level*: ${lb[i].level}
// *🍀Exp*: ${lb[i].xp}
// *〽️Role*: ${role}

// `;
//           mems_id.push(lb[i].userID);
//         }
//         Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply(lbtext);
//         break;

//       case `rank`:
//         const userq = await Levels.fetch(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `bot`);
//         const levelRoleq = userq.level;
//         var role = `Warrior`;
//         if (levelRoleq <= 2) {
//           var role = `Elite III`;
//         } else if (levelRoleq <= 4) {
//           var role = `Elite II`;
//         } else if (levelRoleq <= 6) {
//           var role = `Elite I`;
//         } else if (levelRoleq <= 8) {
//           var role = `Master IV`;
//         } else if (levelRoleq <= 10) {
//           var role = `Master III`;
//         } else if (levelRoleq <= 12) {
//           var role = `Master II`;
//         } else if (levelRoleq <= 14) {
//           var role = `Master I`;
//         } else if (levelRoleq <= 16) {
//           var role = `Grandmaster V`;
//         } else if (levelRoleq <= 18) {
//           var role = `Grandmaster IV`;
//         } else if (levelRoleq <= 20) {
//           var role = `Grandmaster III`;
//         } else if (levelRoleq <= 22) {
//           var role = `Grandmaster II`;
//         } else if (levelRoleq <= 24) {
//           var role = `Grandmaster I`;
//         } else if (levelRoleq <= 26) {
//           var role = `Epic V`;
//         } else if (levelRoleq <= 28) {
//           var role = `Epic IV`;
//         } else if (levelRoleq <= 30) {
//           var role = `Epic III`;
//         } else if (levelRoleq <= 32) {
//           var role = `Epic II`;
//         } else if (levelRoleq <= 34) {
//           var role = `Epic I`;
//         } else if (levelRoleq <= 36) {
//           var role = `Legend V`;
//         } else if (levelRoleq <= 38) {
//           var role = `Legend IV`;
//         } else if (levelRoleq <= 40) {
//           var role = `Legend III`;
//         } else if (levelRoleq <= 42) {
//           var role = `Legend II`;
//         } else if (levelRoleq <= 44) {
//           var role = `Legend I`;
//         } else if (levelRoleq <= 46) {
//           var role = `Mythic`;
//         } else if (levelRoleq <= 50) {
//           var role = `Mythic Glory`;
//         }
//         let disc = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.substring(3, 7);
//         let textr = ``;
//         if (pushName) {
//           textr += `*${pushName}#${disc}'s* Exp

// `;
//         } else {
//           textr += `*${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender}#${disc}'s* Exp

// `;
//         }
//         textr += `*🍀Exp*: ${userq.xp} / ${Levels.xpFor(userq.level + 1)}
// *🎐Level*: ${userq.level}
// *🔮️Role*: ${role}`;
//         try {
//           ppuser = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `image`);
//         } catch {
//           ppuser = `https://www.linkpicture.com/q/IMG-20220118-WA0387.png`;
//         }
//         const rank = new canvacord.Rank()
//           .setAvatar(ppuser)
//           .setLevel(userq.level)
//           .setLevelColor(`#ffa200`, `#ffa200`)
//           .setCurrentXP(userq.xp)
//           .setOverlay(`#000000`, 100, false)
//           .setRequiredXP(Levels.xpFor(userq.level + 1))
//           .setProgressBar(`#ffa200`, `COLOR`)
//           .setRank(0, role, false)
//           .setBackground(`COLOR`, `#000000`)
//           .setUsername(pushName)
//           .setDiscriminator(disc);
//         rank.build().then(async (data) => {
//           ӄ𝖚𝖓𝖆𝖎.sendMessage(
//             Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
//             { image: data, caption: textr },
//             { quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
//           );
//         });
//         break;

//       case `profile`:
//         const userw = await Levels.fetch(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `bot`);
//         const levelRole = userw.level;
//         var role = `Warrior`;
//         if (levelRole <= 2) {
//           var role = `Elite III`;
//         } else if (levelRole <= 4) {
//           var role = `Elite II`;
//         } else if (levelRole <= 6) {
//           var role = `Elite I`;
//         } else if (levelRole <= 8) {
//           var role = `Master IV`;
//         } else if (levelRole <= 10) {
//           var role = `Master III`;
//         } else if (levelRole <= 12) {
//           var role = `Master II`;
//         } else if (levelRole <= 14) {
//           var role = `Master I`;
//         } else if (levelRole <= 16) {
//           var role = `Grandmaster V`;
//         } else if (levelRole <= 18) {
//           var role = `Grandmaster IV`;
//         } else if (levelRole <= 20) {
//           var role = `Grandmaster III`;
//         } else if (levelRole <= 22) {
//           var role = `Grandmaster II`;
//         } else if (levelRole <= 24) {
//           var role = `Grandmaster I`;
//         } else if (levelRole <= 26) {
//           var role = `Epic V`;
//         } else if (levelRole <= 28) {
//           var role = `Epic IV`;
//         } else if (levelRole <= 30) {
//           var role = `Epic III`;
//         } else if (levelRole <= 32) {
//           var role = `Epic II`;
//         } else if (levelRole <= 34) {
//           var role = `Epic I`;
//         } else if (levelRole <= 36) {
//           var role = `Legend V`;
//         } else if (levelRole <= 38) {
//           var role = `Legend IV`;
//         } else if (levelRole <= 40) {
//           var role = `Legend III`;
//         } else if (levelRole <= 42) {
//           var role = `Legend II`;
//         } else if (levelRole <= 44) {
//           var role = `Legend I`;
//         } else if (levelRole <= 46) {
//           var role = `Mythic`;
//         } else if (levelRole <= 50) {
//           var role = `Mythic Glory`;
//         }
//         let bio = ``;
//         try {
//           bio = (await ӄ𝖚𝖓𝖆𝖎.fetchStatus(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender)).status;
//         } catch (error) {
//           Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e)
//           bio = `None`;
//         }
//         let disec = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.substring(3, 7);
//         let tex = ``;
//         if (pushName) {
//           tex += `*🍃Name*: ${pushName}#${disec}

// `;
//           tex += `*🔰Number*: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender}

// `;
//         }
//         if (bio.status) {
//           tex += `*🏳 Bio*: ${bio}

// `;
//         }
//         tex += `*🕹XP*: ${userw.xp} / ${Levels.xpFor(userw.level + 1)}

// *❤Level*: ${userw.level}

// *🏮 Role*: ${role}
// `;

//         try {
//           ppuser = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `image`);
//         } catch {
//           ppuser = `https://www.linkpicture.com/q/IMG-20220118-WA0387.png`;
//         }
//         if (isCreator) {
//           tex += `
// *🔱Owner*: True

// `;
//         }
//         if (groupName) {
//           tex += `
// *🚥Group*: ${groupName}

// `;
//         }
//         if (isSenderAdmin) {
//           tex += `*♨️Admim*: true
// `;
//         }
//         ӄ𝖚𝖓𝖆𝖎.sendMessage(
//           Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
//           { image: { url: ppuser }, caption: tex },
//           { quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 }
//         );
//         break;

case `pokemon`:
const {
pokemon,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pokemon");
await pokemon(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `carbon`:
const { carbon } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/carbon");
await carbon(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `getgif`:
case `gify`:
case `gif`:
const { gify } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/gify");
await gify(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `s`:
case `sgif`:
case `sticker`:
case `stickergif`:
const {
sticker,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/sticker");
await sticker(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `toimg`:
const { toimg } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/toimg");
await toimg(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `pin`:
case `pinterest`:
const {
pinterest,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pinterest");
await pinterest(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `tourl`:
const { tourl } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tourl");
await tourl(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `remove`:
const { remove } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/remove");
await remove(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `promote`:
const {
promote,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/promote");
await promote(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `demote`:
const { demote } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/demote");
await demote(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `setdesc`:
const {
setdesc,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setdesc");
await setdesc(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `seticon`:
case `setppgrup`:
case `setgpfp`:
const {
setgpfp,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setgpfp");
await setgpfp(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `tagall`:
const { tagall } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/tagall");
await tagall(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `group`:
const { group } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/group");
await group(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `invite`:
case `grouplink`:
const { invite } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/invite");
await invite(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `del`:
case `delete`:
const { del } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/del");
await del(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `ban`:
const { ban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/ban");
await ban(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `unban`:
const { unban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/unban");
await unban(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `yta`:
case `play`:
case `song`:
case `sing`:
case `ytmp3`:
case `ytplay`:
case `ytaudio`:
case `ytmusic`:
case `youtubemusic`:
const { yta } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/yta");
await yta(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `ytv`:
case `watch`:
case `stream`:
case `ytmp4`:
case `ytvideo`:
case `youtubevideo`:
const { ytv } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/ytv");
await ytv(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `yts`:
case `ytsearch`:
case `ytscrape`:
case `youtubescrape`:
case `youtubesearch`:
const { yts } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/yts");
await yts(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `sr`:
case `reddit`:
case `subreddit`:
const { reddit } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/reddit");
await reddit(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `meme`:
const { meme } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/meme");
await meme(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `tinyurl`:
const {
tinyurl,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tinyurl");
await tinyurl(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `join`:
const { join } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/join");
await join(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `leave`:
const { leave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/leave");
await leave(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `lyrics`:
const { lyrics } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/lyrics");
await lyrics(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `gimage`:
case `image`:
const { image } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/image");
await image(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `web`:
case `find`:
case `search`:
case `google`:
const { google } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/google");
await google(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `take`:
case `steal`:
const { steal } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/steal");
await steal(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `iguser`:
const { iguser } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/iguser");
await iguser(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `ship`:
const { ship } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/ship");
await ship(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `quote`:
const { quote } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/quote");
await quote(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `fact`:
const { fact } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/fact");
await fact(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `advice`:
const { advice } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/advice");
await advice(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `bot`:
const { bot } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/bot");
await bot(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `pat`:
const { pat } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/pat");
await pat(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `hug`:
const { hug } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/hug");
await hug(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `kiss`:
const { kiss } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kiss");
await kiss(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `slap`:
const { slap } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/slap");
await slap(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `cuddle`:
const { cuddle } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/cuddle");
await cuddle(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `kick`:
const { kick } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kick");
await kick(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `waifu`:
const { waifu } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/waifu");
await waifu(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `neko`:
const { neko } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/neko");
await neko(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `anime`:
const { anime } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/anime");
await anime(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `manga`:
const { manga } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/manga");
await manga(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `wallpaper`:
const {
wallpaper,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/wallpaper");
await wallpaper(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `bc`:
case `bcgroup`:
const { bcgroup } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/bcgroup");
await bcgroup(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `yt8d`:
const { yt8d } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/yt8d");
await yt8d(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytbassboost`:
const {
ytbassboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytbassboost");
await ytbassboost(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytecho`:
const {
ytecho,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytecho");
await ytecho(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytflanger`:
const {
ytflanger,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytflanger");
await ytflanger(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytnightcore`:
const {
ytnightcore,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytnightcore");
await ytnightcore(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytphaser`:
const {
ytphaser,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytphaser");
await ytphaser(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytreverse`:
const {
ytreverse,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytreverse");
await ytreverse(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytslow`:
const {
ytslow,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytslow");
await ytslow(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytspeed`:
const {
ytspeed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytspeed");
await ytspeed(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsubboost`:
const {
ytsubboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsubboost");
await ytsubboost(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsuperslow`:
const {
ytsuperspeed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperspeed");
await ytsuperspeed(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsuperslow`:
const {
ytsuperslow,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperslow");
await ytsuperslow(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytsurround`:
const {
ytsurround,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsurround");
await ytsurround(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytvaporwave`:
const {
ytvaporwave,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvaporwave");
await ytvaporwave(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ytvibrato`:
const {
ytvibrato,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvibrato");
await ytvibrato(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `bassboost`:
const {
bassboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/bassboost");
await bassboost(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `echo`:
const { echo } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/echo");
await echo(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `flanger`:
const {
flanger,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/flanger");
await flanger(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `nightcore`:
const {
nightcore,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/nightcore");
await nightcore(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `phaser`:
const { phaser } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/phaser");
await phaser(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `reverse`:
const {
reverse,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/reverse");
await reverse(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `slow`:
const { slow } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/slow");
await slow(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `speed`:
const { speed } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/speed");
await speed(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `subboost`:
const {
subboost,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/subboost");
await subboost(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `superspeed`:
const {
superspeed,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/superspeed");
await superspeed(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `surround`:
const {
surround,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/surround");
await surround(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `vaporwave`:
const {
vaporwave,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vaporwave");
await vaporwave(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `vibrato`:
const {
vibrato,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vibrato");
await vibrato(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `ass`:
const { ass } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/ass");
await ass(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `bdsm`:
const { bdsm } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/bdsm");
await bdsm(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `cum`:
const { cum } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/cum");
await cum(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `doujin`:
const { doujin } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/doujin");
await doujin(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `feet`:
const { feet } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/feet");
await feet(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `femdom`:
const { femdom } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/femdom");
await femdom(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `foxgirl`:
const {
foxgirl,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/foxgirl");
await foxgirl(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `glasses`:
const {
glasses,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/glasses");
await glasses(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `hentai`:
const { hentai } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/hentai");
await hentai(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `maid`:
const { maid } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/maid");
await maid(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `masturbation`:
const {
masturbation,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/masturbation");
await masturbation(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `netorare`:
const {
netorare,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/netorare");
await netorare(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `orgy`:
const { orgy } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/orgy");
await orgy(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `panties`:
const {
panties,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/panties");
await panties(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `school`:
const { school } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/school");
await school(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `tentacles`:
const {
tentacles,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/tentacles");
await tentacles(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `thighs`:
const { thighs } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/thighs");
await thighs(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `uniform`:
const {
uniform,
} = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/uniform");
await uniform(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
case `yuri`:
const { yuri } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/yuri");
await yuri(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `sp`:
case `dev`:
case `bot`:
case `devs`:
case `official`:
case `support`:
const { support } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/support");
await support(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `rule`:
case `rules`:
const { rules } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/rules");
await rules(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;

case `h`:
case `how`:
case `help`:
case `menu`:
case `allmenu`:
const { help } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📜ᴍᴇɴᴜ/help");
await help(
ӄ𝖚𝖓𝖆𝖎,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
mime,
isMedia,
isGroup,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
Figure,
isReply,
mentionByTag,
mentionByReply
);
break;
default:
return await ӄ𝖚𝖓𝖆𝖎.sendMessage(
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
{
contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
image: { url: "https://i.postimg.cc/qB1f08hd/Uni.png" },
caption: `┌─「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
├• ɴᴀᴍᴇ: ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
└────────────────◇


*❌ERROR:* Couldn't find any matching commands. Try again with the commands from the help list`,
footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*",
buttons: [
{
buttonId: prefix + "help",
buttonText: { displayText: prefix + "help" },
type: 1,
},
{
buttonId: prefix + "support",
buttonText: { displayText: prefix + "support" },
type: 1,
},
],
headerType: 4,
},
{
quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
}
);
}
}
);
} catch (err) {
Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, util.format(err));
}
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
var Present_Path = require(`path`);
var Present_File = require.resolve(__filename);
var Present_Name = Present_Path.basename(__filename);
fs.watchFile(Present_File, () => {
fs.unwatchFile(Present_File);
console.log(
chalk.yellowBright("💡𝐈𝐧𝐟𝐨꧂ "),
chalk.greenBright(`File Auto Updated: ${Present_Name}`)
);
delete require.cache[Present_File];
require(Present_File);
});
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
