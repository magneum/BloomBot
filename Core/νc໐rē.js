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
νℓcнαт,
update,
store,
spinnies,
νℓpage,
coreback
) => {
require("./graphine")(νℓкуяє, νℓcнαт, update, store, νℓpage);
require("./kronLink")(νℓкуяє, νℓcнαт, update, store, νℓpage);

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
if (νℓcнαт.isGroup && νℓкуяє.command) {
νℓкуяє.userBanCheck.findOne(
{
ID: νℓcнαт.sender,
},
(error, banCheck) => {
if (error) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${error}`
);
}
νℓкуяє.userBanCheck.findOne(
{
ID: νℓcнαт.chat,
},
async (error, groupCheck) => {
if (error) {
return νℓcнαт.reply(
`*😥Sorry:* _${νℓкуяє.pushname}_
*❌Error* 
> _There has been an API Error. Please try again later._

*🐞Bug* 
> ${error}`
);
}
if (banCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
if (groupCheck && !νℓкуяє.frome && !νℓкуяє.isModerator) return;
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
for (let i = 0; i < νℓкуяє.respA.participants.length; i++)
νℓкуяє.memberRespA[i] = νℓкуяє.respA.participants[i].id;
for (let i = 0; i < νℓкуяє.respB.participants.length; i++)
νℓкуяє.memberRespB[i] = νℓкуяє.respB.participants[i].id;
for (let i = 0; i < νℓкуяє.respC.participants.length; i++)
νℓкуяє.memberRespC[i] = νℓкуяє.respC.participants[i].id;
for (let i = 0; i < νℓкуяє.respD.participants.length; i++)
νℓкуяє.memberRespD[i] = νℓкуяє.respD.participants[i].id;
if (!νℓкуяє.fromMe &&
!νℓкуяє.isModerator &&
!νℓкуяє.letResp.includes(νℓкуяє.command) &&
!νℓкуяє.memberRespA.includes(νℓcнαт.sender) &&
!νℓкуяє.memberRespB.includes(νℓcнαт.sender) &&
!νℓкуяє.memberRespC.includes(νℓcнαт.sender) &&
!νℓкуяє.memberRespD.includes(νℓcнαт.sender)
) {
return await νℓкуяє.imgB(
νℓкуяє,
νℓcнαт,
`*📢Verification Needed*
*😥Sorry:* _${νℓкуяє.pushname}_

*❌Error* 
> _You need to be verified to use bot..._
> _Press YouTube: ${νℓкуяє.ShowInfo}_
`,
"https://i.postimg.cc/G2YxctNp/Verity-Vlkyre.png"
);
}
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
console.log("\n◎✕———————————————————————✕ νℓкуяє вσт ву кяукηz ✕———————————————————————✕◎");
console.log(νℓкуяє.chalk.blueBright("       🖊️ 𝐂𝐨𝐦𝐦𝐚𝐧𝐝: "),νℓкуяє.chalk.green(νℓкуяє.budy || νℓкуяє.mtype));
console.log(νℓкуяє.chalk.blueBright("       ❣️ 𝐔𝐬𝐞𝐫-𝐍𝐚𝐦𝐞: "),νℓкуяє.chalk.green(νℓкуяє.pushname));
console.log(νℓкуяє.chalk.blueBright("       📱 𝐔𝐬𝐞𝐫-𝐍𝐮𝐦𝐛𝐞𝐫: "),νℓкуяє.chalk.green(νℓcнαт.sender));
console.log(νℓкуяє.chalk.blueBright("       💬 𝐂𝐡𝐚𝐭-𝐈𝐝: "),νℓкуяє.chalk.green(νℓcнαт.chat));
console.log("◎✕———————————————————————✕ νℓкуяє вσт ву кяукηz ✕———————————————————————✕◎\n");
return await require("./router")(νℓкуяє,νℓcнαт,update,spinnies,coreback);
}
);
}
);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// require("../preExecution/checkBan")(νℓкуяє, νℓcнαт, (𝖘𝖙𝖆𝖙𝖚𝖘b) => {
// if (𝖘𝖙𝖆𝖙𝖚𝖘b === true) {
// require("../preExecution/checkVerity")(νℓкуяє, νℓcнαт, (𝖘𝖙𝖆𝖙𝖚𝖘v) => {
// if (𝖘𝖙𝖆𝖙𝖚𝖘v === true) {
// require("../preExecution/checkWait")(νℓкуяє,νℓcнαт,Date.now(),(𝖘𝖙𝖆𝖙𝖚𝖘w) => {
// if (𝖘𝖙𝖆𝖙𝖚𝖘w === true) {
// require("./router")(νℓкуяє,νℓcнαт,update,spinnies,coreback, νℓpage);
// }
// });
// }})}});
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
