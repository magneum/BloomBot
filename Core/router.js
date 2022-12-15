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
module.exports = async (νℓкуяє, νℓcнαт, update, spinnies, coreback) => {
var groupMetadata = νℓcнαт.isGroup
? await νℓкуяє.groupMetadata(νℓcнαт.chat).catch((e) => {})
: "";
var groupName = νℓcнαт.isGroup ? groupMetadata.subject : "";
var participants = νℓcнαт.isGroup ? await groupMetadata.participants : "";
var groupAdmins = νℓcнαт.isGroup
? await participants.filter((v) => v.admin !== null).map((v) => v.id)
: "";
var groupOwner = νℓcнαт.isGroup ? groupMetadata.owner : "";
var isBotAdmin = νℓcнαт.isGroup
? groupAdmins.includes(await νℓкуяє.decodeJid(νℓкуяє.user.id))
: false;
var isAdmin = νℓcнαт.isGroup ? groupAdmins.includes(νℓcнαт.sender) : false;
console.log(
"\n◎✕———————————————————————✕ νℓкуяє вσт ву кяукηz ✕———————————————————————✕◎"
);
console.log(
νℓкуяє.chalk.blueBright("       🖊️ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "),
νℓкуяє.chalk.green(νℓкуяє.budy || νℓкуяє.mtype)
);
console.log(
νℓкуяє.chalk.blueBright("       ❣️ 𝐔𝐬𝐞𝐫-𝐍𝐚𝐦𝐞: "),
νℓкуяє.chalk.green(νℓкуяє.pushname)
);
console.log(
νℓкуяє.chalk.blueBright("       📱 𝐔𝐬𝐞𝐫-𝐍𝐮𝐦𝐛𝐞𝐫: "),
νℓкуяє.chalk.green(νℓcнαт.sender)
);
console.log(
νℓкуяє.chalk.blueBright("       💬 𝐂𝐡𝐚𝐭-𝐈𝐝: "),
νℓкуяє.chalk.green(νℓcнαт.chat)
);
console.log(
"◎✕———————————————————————✕ νℓкуяє вσт ву кяукηz ✕———————————————————————✕◎\n"
);
switch (νℓкуяє.command) {
case "h.anime":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_anime")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.download":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_download")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.filter":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_filter")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.game":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_game")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.group":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_group")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.hentai":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_hentai")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.image":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_image")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.search":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_search")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "h.ytfilter":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘮𝘮𝘢𝘯𝘥💗𝘫𝘴/_ytfilter")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "advice":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/advice")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "fact":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/fact")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "joke":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "meme":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/meme")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "quote":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/quote")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "reddit":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/joke")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "anime":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/anime")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "manga":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/manga")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "google":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘚𝘦𝘢𝘳𝘤𝘩🔎𝘫𝘴/google")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/image")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "neko":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/neko")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pinterest":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/pinterest")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "waifu":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/waifu")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wallpaper":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘐𝘮𝘢𝘨𝘦🖼️𝘫𝘴/wallpaper")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/ass")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bsdm":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/bdsm")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "blowjob":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/blowjob")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cum":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/cum")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "doujin":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/doujin")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "feet":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/feet")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "femdom":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/femdom")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "foxgirl":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/foxgirl")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "glasses":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/glasses")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "hentai":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/hentai")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "maid":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/maid")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "masturbation":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/masturbation")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "netorare":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/netorare")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "orgy":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/orgy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pussy":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/pussy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "school":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/school")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "succubus":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/succubus")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tentacles":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/tentacles")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "thighs":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/thighs")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "uglyBastard":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uglyBastard")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "uniform":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/uniform")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yuri":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/yuri")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "zettaiRyouiki":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘏𝘦𝘯𝘵𝘢𝘪🍑𝘫𝘴/zettaiRyouiki")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/demote")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "group":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/group")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "promote":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/promote")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "remove":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/remove")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "setdesc":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/setdesc")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "seticon":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/seticon")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tagall":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘳𝘰𝘶𝘱🔰𝘫𝘴/tagall")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yta":
case "play":
case "song":
case "sing":
case "music":
case "ytmp3":
case "ytplay":
case "ytaudio":
case "ytmusic":
case "youtubemusic":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥📥𝘫𝘴/youtube")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bite")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "blush":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/blush")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bonk":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bonk")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "bored":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/bored")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "confused":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/confused")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cry":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cry")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "cuddle":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/cuddle")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "dance":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/dance")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "goodnight":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/goodnight")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "happy":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/happy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "highfive":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/highfive")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "hug":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/hug")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kick":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kick")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kill":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kill")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "kiss":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/kiss")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "nervous":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/nervous")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "pat":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/pat")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "poke":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/poke")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "punch":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/punch")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "sad":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/sad")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "scream":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/scream")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "slap":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/slap")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "smile":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/smile")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "stare":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/stare")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wave":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wave")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "wink":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/wink")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yeet":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yeet")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "yes":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘈𝘯𝘪𝘮𝘦🐉𝘫𝘴/yes")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
case "sticker":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/sticker")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tinyurl":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tinyurl")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "toimg":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/toimg")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "tourl":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘊𝘰𝘯𝘷𝘦𝘳𝘵🗄️𝘫𝘴/tourl")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
case "balance":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/balance")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "buy":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/buy")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "daily":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/daily")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "fish":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/fish")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "gamble":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/gamble")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "inv":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/inv")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "store":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/store")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "work":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/work")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "zoo":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘎𝘢𝘮𝘦💰𝘑𝘴/zoo")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
case "bassboost":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/bassboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "echo":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/echo")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "flanger":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/flanger")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "nightcore":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/nightcore")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "phaser":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/phaser")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "reverse":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/reverse")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "slow":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/slow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "speed":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/speed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "subboost":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/subboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "superslow":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superslow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "superspeed":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/superspeed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "surround":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/surround")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "vaporwave":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vaporwave")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "vibrato":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘍𝘪𝘭𝘵𝘦𝘳📢𝘑𝘴/vibrato")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
case "ytbassboost":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytbassboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytecho":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytecho")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytflanger":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytflanger")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytnightcore":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytnightcore")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytphaser":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytphaser")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytreverse":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytreverse")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytslow":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytslow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytspeed":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytspeed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsubboost":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsubboost")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsuperslow":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperslow")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsuperspeed":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsuperspeed")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytsurround":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytsurround")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytvaporwave":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvaporwave")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
case "ytvibrato":
try {
// await νℓкуяє.spinnies.add("νℓкуяє", {
// text: "𝐒𝐭𝐚𝐫𝐭𝐞𝐝: " + νℓкуяє.command,
// });
await require("../Plugins/𝘠𝘰𝘶𝘛𝘶𝘣𝘦⭕𝘑𝘴/ytvibrato")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
await require("../Plugins/commands")(
νℓкуяє,
νℓcнαт,
groupMetadata,
groupName,
participants,
groupOwner,
isBotAdmin,
isAdmin,
(кяуcαℓℓ) => {
if (кяуcαℓℓ) {
νℓкуяє.ShowBlue("🔎𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ", νℓкуяє.command.toUpperCase());
νℓкуяє.ShowRed("❗𝐄𝐫𝐫𝐨𝐫: ", кяуcαℓℓ);
return νℓкуяє.throw(кяуcαℓℓ, "./Gallery/νℓкуяє_error.png");
}
}
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
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
νℓcнαт.chat,
{
text: `❗ Couldn't find any matching commands. Try again with the commands from the help list`,
},
{ quoted: νℓcнαт }
);
coreback(`✅ with no error...`);
} catch (error) {
coreback(`❌ ${νℓкуяє.command.toUpperCase()} with: ${error}`);
}
break;
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
