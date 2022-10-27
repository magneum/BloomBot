("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (
νℓкуяє,
νcнαт,
update,
store,
spinnies,
νℓpage,
coreback
) => {
var groupMetadata = νcнαт.isGroup
? await νℓкуяє.groupMetadata(νcнαт.chat).catch((e) => {})
: "";
var groupName = νcнαт.isGroup ? groupMetadata.subject : "";
var participants = νcнαт.isGroup ? await groupMetadata.participants : "";
var groupAdmins = νcнαт.isGroup
? await participants.filter((v) => v.admin !== null).map((v) => v.id)
: "";
var groupOwner = νcнαт.isGroup ? groupMetadata.owner : "";
var isBotAdmin = νcнαт.isGroup
? groupAdmins.includes(await νℓкуяє.decodeJid(νℓкуяє.user.id))
: false;
var isAdmin = νcнαт.isGroup ? groupAdmins.includes(νcнαт.sender) : false;
require("./graphine")(νℓкуяє, νcнαт, update, store);
require("./kronLink")(νℓкуяє, νcнαт, update, store);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
function ShowRed(Topic, Text) {
let TShow = νℓкуяє.chalk.hex("#ff6347").bold(Topic);
let Show = νℓкуяє.chalk.hex("#ed7777").italic.bold(Text);
console.log(
νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
νℓкуяє.chalk.black(Show)
);
}
function ShowBlue(Topic, Text) {
let TShow = νℓкуяє.chalk.hex("#008B8B").bold(Topic);
let Show = νℓкуяє.chalk.hex("#818d94").italic.bold(Text);
console.log(
νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
νℓкуяє.chalk.black(Show)
);
}
function ShowGreen(Topic, Text) {
let TShow = νℓкуяє.chalk.hex("#2D5A27").bold(Topic);
let Show = νℓкуяє.chalk.hex("#849871").italic.bold(Text);
console.log(
νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
νℓкуяє.chalk.black(Show)
);
}
function ShowYellow(Topic, Text) {
let TShow = νℓкуяє.chalk.hex("#8B8000").bold(Topic);
let Show = νℓкуяє.chalk.hex("#ECCF8D").italic.bold(Text);
console.log(
νℓкуяє.chalk.black(νℓкуяє.chalk.bgBlack(TShow)),
νℓкуяє.chalk.black(Show)
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
if (νℓкуяє.command) {
console.log("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎\n");
console.log(
νℓкуяє.chalk.blueBright("> 🖊️𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "),
νℓкуяє.chalk.green(νℓкуяє.budy || νℓкуяє.mtype)
);
console.log(
νℓкуяє.chalk.blueBright("> ❣️𝐔𝐬𝐞𝐫-𝐍𝐚𝐦𝐞: "),
νℓкуяє.chalk.green(νℓкуяє.pushname)
);
console.log(
νℓкуяє.chalk.blueBright("> 📱𝐔𝐬𝐞𝐫-𝐍𝐮𝐦𝐛𝐞𝐫: "),
νℓкуяє.chalk.green(νcнαт.sender)
);
console.log(
νℓкуяє.chalk.blueBright("> 💬𝐂𝐡𝐚𝐭-𝐈𝐝: "),
νℓкуяє.chalk.green(νcнαт.chat)
);
switch (νℓкуяє.command) {
case "advice":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "fact":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "joke":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "meme":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "quote":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "reddit":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "anime":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "manga":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "google":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "image":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "neko":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pinterest":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "waifu":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wallpaper":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ass":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/ass")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bsdm":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/bdsm")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "blowjob":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/blowjob")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cum":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/cum")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "doujin":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/doujin")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "feet":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/feet")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "femdom":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/femdom")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "foxgirl":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/foxgirl")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "glasses":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/glasses")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "hentai":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/hentai")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "maid":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/maid")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "masturbation":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/masturbation")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "netorare":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/netorare")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "orgy":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/orgy")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pussy":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/pussy")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "school":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/school")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "succubus":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/succubus")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tentacles":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/tentacles")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "thighs":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/thighs")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "uglyBastard":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uglyBastard")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "uniform":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uniform")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yuri":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/yuri")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "zettaiRyouiki":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/zettaiRyouiki")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "demote":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/demote")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "group":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/group")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "promote":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/promote")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "remove":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/remove")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "setdesc":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/setdesc")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "seticon":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/seticon")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tagall":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/tagall")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yta":
case "play":
case "song":
case "sing":
case "music":
case "youtube":
case "ytaudio":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bite":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "blush":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bonk":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bored":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "confused":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cry":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cuddle":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "dance":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "goodnight":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "happy":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "highfive":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "hug":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kick":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kick")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kill":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kiss":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "nervous":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pat":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "poke":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "punch":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "sad":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "scream":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "slap":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "smile":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "stare":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wave":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wink":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yeet":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yes":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";

"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "help":
case "menu":
case "command":
case "commands":
case "🛰️Vlkyre":
case "✈️Commands":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../plugins/commands")(
νℓкуяє,
νcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${кяуcαℓℓ}`
);
}
}
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
default:
try {
νℓкуяє.sendMessage(
νcнαт.chat,
{
text: `❗ Couldn't find any matching commands. Try again with the commands from the help list`,
},
{ quoted: νcнαт }
);
coreback(`🎭 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: with no error...`);
} catch (error) {
coreback(
`❌ 𝐄𝐧𝐝𝐞𝐝-𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${νℓкуяє.command.toUpperCase()} with: ${error}`
);
}
break;
}
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
