("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
ppath = require("path");
require("../../global.js");
psname = ppath.basename(__filename);
pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
νℓкуяє,
vcнaт,
gmeta,
isAdmin,
groupName,
isBotAdmin,
groupAdmins,
participants,
isSudoWorker
) => {
await νℓкуяє.sendMessage(vcнaт.chat, {
react: {
text: "🔖",
key: vcнaт.key,
},
});
try {
if (!νℓкуяє.frome && !isSudoWorker) {
await νℓкуяє.sendMessage(vcнaт.chat, {
react: {
text: "❌",
key: vcнaт.key,
},
});
return vcнaт.reply(
`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_
*❌Error* 
> _Owner Only Command!_`
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
if (νℓкуяє.mentionByReply) {
let repliedPerson =
νℓкуяє.mtype == "extendedTextMessage" &&
νℓкуяє.message.extendedTextMessage.contextInfo != null
? νℓкуяє.message.extendedTextMessage.contextInfo.participant || ""
: "";
let repliedPersonNum = repliedPerson.substring(
0,
repliedPerson.length - 15
);
νℓкуяє.userBanCheck.findOne(
{
ID: repliedPerson,
},
async (error, userBan) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
if (!userBan) {
return vcнaт.reply(
`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} is already un-banned!`
);
} else {
userBan.delete();
return vcнaт.reply(
`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${repliedPersonNum} has been un-banned!`
);
}
}
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (νℓкуяє.args[0] && νℓкуяє.args[0].startsWith("@")) {
let mention = νℓкуяє.mentionByTag;
let 𝕻𝖊𝖗𝖘𝖔𝖓 = (await mention[0]) || νℓкуяє.msg.contextInfo.participant;
νℓкуяє.userBanCheck.findOne(
{
ID: 𝕻𝖊𝖗𝖘𝖔𝖓,
},
async (error, userBan) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
if (!userBan) {
return vcнaт.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} is already un-banned!`);
} else {
userBan.delete();
return vcнaт.reply(`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* @${mention} has been un-banned!`);
}
}
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (
!νℓкуяє.mentionByReply &&
!νℓкуяє.args[0] &&
!νℓкуяє.args[0].startsWith("@")
) {
νℓкуяє.userBanCheck.findOne(
{
ID: vcнaт.chat,
},
async (error, userBan) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
if (!userBan) {
return vcнaт.reply(
`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup is already un-banned!`
);
} else {
userBan.delete();
return vcнaт.reply(
`*🔒𝐒𝐭𝐚𝐭𝐮𝐬:* ${groupName}\nGroup Has Been un-banned!`
);
}
}
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else {
await νℓкуяє.sendMessage(vcнaт.chat, {
react: {
text: "❌",
key: vcнaт.key,
},
});
return vcнaт.reply(
`*😥Sorry:* _@${νℓкуяє.Tname || νℓкуяє.pushname}_
*❌Error* 
> _Could not find any context!_

*⚡Usage* 
> _${νℓкуяє.prefix}${pfname} reply to person to ban_
> _${νℓкуяє.prefix}${pfname} don't reply to anyone and group will be un-banned_`
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} catch (error) {
return νℓкуяє.grab(νℓкуяє, vcнaт, error);
}
};