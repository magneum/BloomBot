("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (νℓкуяє, vcнaт, update, store) => {
require("./graphine")(νℓкуяє, vcнaт, update, store);
require("./kronLink")(νℓкуяє, vcнaт, update, store);
if (vcнaт.isGroup && νℓкуяє.command) {
νℓкуяє.userBanCheck.findOne(
{
ID: vcнaт.sender,
},
(error, banCheck) => {
if (error) {
return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
}
νℓкуяє.userBanCheck.findOne(
{
ID: vcнaт.chat,
},
async (error, groupCheck) => {
if (error) {
return vcнaт.reply(`*😥Sorry:* _${νℓкуяє.pushname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
}
if (banCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
if (groupCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
await νℓкуяє.LinkList.findOne(
{
serverID: vcнaт.chat,
},
async (error, server) => {
if (error) return νℓкуяє.grab(νℓкуяє, vcнaт, error);
if (!server) return;
var { noLink } = require("../Enforcers/antilink");
return noLink(νℓкуяє, vcнaт);
}
);

("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
respA = await νℓкуяє.groupMetadata("120363020792949649@g.us");
for (let i = 0; i < respA.participants.length; i++)
νℓкуяє.memberRespA[i] = respA.participants[i].id;
if (
!νℓкуяє.fromMe &&
!νℓкуяє.isModerator &&
!νℓкуяє.letResp.includes(νℓкуяє.command) &&
!νℓкуяє.memberRespA.includes(vcнaт.sender)
) {
return await νℓкуяє.sendMessage(
vcнaт.chat,
{
gifPlayback: true,
video: νℓкуяє.fs.readFileSync("./Gallery/how.mp4"),
caption: `*📢Verification Needed*
*😥Sorry:* _${νℓкуяє.pushname}_

> You need to be verified to use bot...
> join official group
> chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi

*⚙️Webpage:*
> bit.ly/krykenz
> Login To Your Dashboard`,
mentions: [vcнaт.sender],
},
{ quoted: vcнaт }
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var router = require("./router");
console.log(
"\n◎✕———————————————————————✕ νℓкуяє вσт ву кяукєηz ✕———————————————————————✕◎"
);
console.log(
νℓкуяє.chalk.blueBright("🖊️MESSAGE: "),
νℓкуяє.chalk.green(νℓкуяє.budy || νℓкуяє.mtype)
);
console.log(
νℓкуяє.chalk.blueBright("❣️USER_NAME: "),
νℓкуяє.chalk.green(νℓкуяє.pushname)
);
console.log(
νℓкуяє.chalk.blueBright("📱USER_NUMBER: "),
νℓкуяє.chalk.green(vcнaт.sender)
);
console.log(
νℓкуяє.chalk.blueBright("💬CHAT_ID: "),
νℓкуяє.chalk.green(vcнaт.chat)
);
console.log(
"◎✕———————————————————————✕ νℓкуяє вσт ву кяукєηz ✕———————————————————————✕◎\n\n"
);
return router(νℓкуяє, vcнaт, update, store);
}
);
}
);
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
