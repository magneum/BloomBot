("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
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
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
let {
isUrl,
fetchJson,
getBuffer,
jsonformat,
GIFBufferToVideoBuffer,
getRandom,
} = require(`../../└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/ɴᴇᴄᴛᴏʀ`);
let fs = require(`fs`);
let util = require(`util`);
let hxz = require(`hxz-api`);
let chalk = require(`chalk`);
let db = require(`quick.db`);
let axios = require(`axios`);
let ms = require(`parse-ms`);
let canvacord = require(`canvacord`);
let { Character } = require(`mailist`);
let moment = require(`moment-timezone`);
let Carbon = require(`unofficial-carbon-now`);
let { exec, execSync } = require(`child_process`);
let { N𝖊𝖊𝖉__A𝖗𝖌𝖘 } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/N𝖊𝖊𝖉__A𝖗𝖌𝖘");
let { Sticker, StickerTypes } = require(`wa-sticker-formatter`);
let Economy = require(`../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/economy`);
let Robbery = require(`../../└𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞𝐬┘/🍃𝖒𝖔𝖓𝖌𝖔/robbery`);
let { Image_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Image_Button");
let { Video_Button } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Video_Button");
let Present_Path = require(`path`);
let Script_Name = Present_Path.basename(__filename);
let Final_Name = Script_Name.slice(0, -3).toLowerCase();
let { Caught } = require("../../└𝐁𝐮𝐭𝐭𝐨𝐧𝐬┘/Caught");
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
exports.buy = async (
ӄryӄnz,
Vlkyre,
pushName,
F𝖚𝖑𝖑_A𝖗𝖌𝖘,
quoted,
isMedia,
isGroup,
isBotAdmin,
isSenderAdmin,
isSenderTUF,
commandName,
body
) => {
let Item;
let NewLimit;
let ItemPrice;
const BadgeCatelog = [
`🥉Bronze 20 Commands`,
`🥈Silver 40 Commands`,
`🥇Golden 60 Commands`,
`💍Platinum 80 Commands`,
`💎Diamond 100 Commands`,
];
const BadCatelog = [`bronze`, `silver`, `gold`, `platinum`, `diamond`];
const RobCatelog = ["sword", "laptop", "charm"];
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Vlkyre.A𝖗𝖌𝖘[0] === "bronze") {
Item = `🥉Bronze 20 Commands`;
ItemPrice = 20000;
NewLimit = 20;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "silver") {
Item = `🥈Silver 40 Commands`;
ItemPrice = 40000;
NewLimit = 40;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "gold") {
Item = `🥇Golden 60 Commands`;
ItemPrice = 60000;
NewLimit = 60;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "platinum") {
Item = `💍Platinum 80 Commands`;
ItemPrice = 80000;
NewLimit = 80;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "diamond") {
Item = `💎Diamond 100 Commands`;
ItemPrice = 100000;
NewLimit = 100;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "charm") {
Item = "charm";
ItemPrice = 6000;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "sword") {
Item = "sword";
ItemPrice = 1000;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "laptop") {
Item = "laptop";
ItemPrice = 4000;
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Vlkyre.A𝖗𝖌𝖘[0] === "bronze") {
Item = `🥉Bronze 20 Commands`;
ItemPrice = 20000;
NewLimit = 20;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "silver") {
Item = `🥈Silver 40 Commands`;
ItemPrice = 40000;
NewLimit = 40;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "gold") {
Item = `🥇Golden 60 Commands`;
ItemPrice = 60000;
NewLimit = 60;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "platinum") {
Item = `💍Platinum 80 Commands`;
ItemPrice = 80000;
NewLimit = 80;
}
if (Vlkyre.A𝖗𝖌𝖘[0] === "diamond") {
Item = `💎Diamond 100 Commands`;
ItemPrice = 100000;
NewLimit = 100;
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (!F𝖚𝖑𝖑_A𝖗𝖌𝖘) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:* No query provided!
*⚡USAGE:* ${prefix}${Final_Name} <item name>
Get Item-List From ${prefix}shop!`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Vlkyre.A𝖗𝖌𝖘.length === 0) {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:* No query provided!
*⚡USAGE:* ${prefix}${Final_Name} <item name>
Get Item-List From ${prefix}shop!`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (RobCatelog.includes(Vlkyre.A𝖗𝖌𝖘[0])) {
Economy.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr));
if (!userEco) {
let newUser = new Economy({
ID: Vlkyre.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_DB.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`
);
}
Robbery.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userRob) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr));
if (!userRob) {
let newUser = new Robbery({
ID: Vlkyre.sender,
sword: 0,
laptop: 0,
charm: 0,
CurrentRobberyTime: 0,
PermanentRobberyTime: 600000,
});
await newUser
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_DB.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


💰𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`
);
} else {
if (userEco.money < ItemPrice) {
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Gold.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (Item === "sword" && userRob.sword < 2) {
userRob.sword = userRob.sword + 1;
userEco.money = userEco.money - ItemPrice;
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
await userRob
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Gold.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`
);
}
if (Item === "laptop" && userRob.laptop < 2) {
userRob.laptop = userRob.laptop + 1;
userEco.money = userEco.money - ItemPrice;
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
await userRob
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Gold.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`
);
}
if (Item === "charm" && userRob.charm < 2) {
userRob.charm = userRob.charm + 1;
userEco.money = userEco.money - ItemPrice;
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
await userRob
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Gold.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`
);
}
return await Image_Button(
ӄryӄnz,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./└𝐀𝐬𝐬𝐞𝐬𝐭𝐬┘/Vlkyre_Gold.png",
`╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* _Check If You Already Have That Item!_
🧀 𝗜𝘁𝗲𝗺: _${Item}_`
);
}
}
);
}
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else if (BadCatelog.includes(Vlkyre.A𝖗𝖌𝖘[0])) {
await Economy.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userEco) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr));
await Bagde.findOne(
{
ID: Vlkyre.sender,
},
async (Èrrðr, userBadge) => {
if (Èrrðr) return Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr));
if (!userEco) {
let newEcoUser = new Economy({
ID: Vlkyre.sender,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
newEcoUser
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return Vlkyre_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
KryChat,
Vlkyre,
`*₍ @${Vlkyre.sender.replace(/[^\d+]/g, "")} ₎*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


*❌𝗘𝗿𝗿𝗼𝗿:* _You Are Broke!_
💼 𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀 𝗜𝘁𝗲𝗺: _${Item}_
🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
`./Vlkyre🔌cord/Vlkyre_shop.png`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (!userBadge) {
let newBagdeUser = new Bagde({
ID: Vlkyre.sender,
Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
value: `True`,
Limits: 10,
CurrentLimitTime: 0,
PermanentLimitTime: 0,
});
newBagdeUser
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return Vlkyre_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
KryChat,
Vlkyre,
`*₍ @${Vlkyre.sender.replace(/[^\d+]/g, "")} ₎*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _Just Opened Your Account!_`,
`./Vlkyre🔌cord/Vlkyre_shop.png`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (userEco.money < ItemPrice) {
return Vlkyre_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
KryChat,
Vlkyre,
`*₍ @${Vlkyre.sender.replace(/[^\d+]/g, "")} ₎*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


❌𝗘𝗿𝗿𝗼𝗿: _You Are Broke!_
💼𝗘𝗮𝗿𝗻: _read ${prefix}ecomenu._
🧀𝗜𝘁𝗲𝗺: _${Item}_
🪙𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: _${ItemPrice} gold_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
`./Vlkyre🔌cord/Vlkyre_shop.png`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (userBadge.Badge === Item) {
return Vlkyre_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
KryChat,
Vlkyre,
`*₍ @${Vlkyre.sender.replace(/[^\d+]/g, "")} ₎*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


❌𝗘𝗿𝗿𝗼𝗿: _You Already Have That Item!_
🧀𝗜𝘁𝗲𝗺: _${Item}_`,
`./Vlkyre🔌cord/Vlkyre_shop.png`
);
}
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
if (
userEco.money > ItemPrice &&
BadgeCatelog.includes(Item) &&
NewLimit > 0
) {
userEco.money = userEco.money - ItemPrice;
userBadge.Limits = NewLimit;
userBadge.Badge = Item;
await userEco
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
await userBadge
.save()
.catch((Èrrðr) => Caught(ӄryӄnz, Vlkyre, util.format(Èrrðr)));
return Vlkyre_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
KryChat,
Vlkyre,
`*₍ @${Vlkyre.sender.replace(/[^\d+]/g, "")} ₎*
╔◇══════════◇╗
┊𝐕𝐥𝐤𝐲𝐫𝐞💵𝐁𝐚𝐧𝐤
╚◇══════════◇╝


🥳𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: _Transaction Complete!_
🧀𝗜𝘁𝗲𝗺: _${Item}_
🍯𝐏𝐞𝐫𝐤𝐬: _${userBadge.Limits}commands per day_
💰𝗕𝗮𝗹𝗮𝗻𝗰𝗲: _${userEco.money} gold_`,
`./Vlkyre🔌cord/Vlkyre_shop.png`
);
}
}
);
}
);
("|⬡═══════════════════════════════════════════════════════════════|▷ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ◁|═══════════════════════════════════════════════════════════════⬡|");
} else {
return await N𝖊𝖊𝖉__A𝖗𝖌𝖘(
ӄryӄnz,
Vlkyre,
`*❌ERROR:* Wrong query provided!
*⚡USAGE:* ${prefix}${Final_Name} <item name>
Get Item-List From ${prefix}shop!`
);
}
};
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
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
("|⬡═══════════════════════════════════════════════════════════════| (c)𝐕𝐥𝐤𝐲𝐫𝐞🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
