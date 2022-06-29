("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { Ship, IShipOptions } = require(`@shineiichijo/canvas-chan`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let { Group_Only } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Group_Only");
let { Image_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let { Video_Button } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Video_Button");
let { Bot_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Bot_Not_Admin");
let { Sender_Not_Admin } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧭S𝖜𝖎𝖙𝖈𝖍/Sender_Not_Admin");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
exports.ship = async (
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
pushName,
fromMe,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
groupAdmins,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body,
mentionByTag,
mentionByReply
) => {
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
let usep = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender;
let recp = ``;
try {
users = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionedJid[0]
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mentionedJid[0]
: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted
? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted.sender
: text.replace(/[^0-9]/g, ``) + `@s.whatsapp.net`;

ment = [usep, users];
} catch {
users = `none`;
ment = [usep, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender];
}
if (users == `none`) {
recp = `@${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.split(`@`)[0]} x  themselves`;
console.log(recp);
} else {
let rcpp = `@${users.split(`@`[0])}`;
recp = `@${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.split(`@`)[0]} x  @${users.split(`@`)[0]}`;

console.log(recp);
}
let ll = Math.floor(Math.random() * 100);
if (ll < 30) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\tThere's still time to reconsider your choices`;
rate = `Not Good`;
} else if (ll < 40) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\tThere's still time to reconsider your choices`;
rate = `Not Good`;
} else if (ll > 50) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t Good enough, I guess!💫`;
rate = `Aletage`;
} else if (ll > 60) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t Good enough, I guess!💫`;
rate = `Aletage`;
} else if (ll > 70) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t\tStay together and you'll find a way⭐️`;
rate = `Good`;
} else if (ll > 80) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\t\t\tStay together and you'll find a way⭐️`;
rate = `Good`;
} else if (ll > 90) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\tAmazing! You two will be a good couple💖`;
rate = `Amazing`;
} else if (ll == 100) {
jj = `\t\t\t\t\t*ShipCent : ${ll}%* 
\tYou two are fated to be together💙`;
rate = `Fated to be together`;
}
let caption = `\t❣️ *Matchmaking...* ❣️ 
`;
caption += `\t\t---------------------------------
`;
caption += `*${recp}*
`;
caption += `\t\t---------------------------------
`;
caption += `${jj}`;
try {
ppuser = await ᴋᴜɴᴀɪ.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `image`);
} catch {
ppuser = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png`;
}
if (users == `none`) {
try {
ppuser2 = await ᴋᴜɴᴀɪ.profilePictureUrl(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender, `image`);
} catch {
ppuser = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png`;
}
} else {
try {
ppuser2 = await ᴋᴜɴᴀɪ.profilePictureUrl(users, `image`);
} catch {
ppuser = `./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png`;
}
}
let options = [
{
name: `Person1`,
image: ppuser,
},
{
name: `Person2`,
image: ppuser2,
},
];
let ship = await new Ship(options, ll, rate).build();
return await Image_Button(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, A𝖗𝖌𝖘, ship, caption);
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
