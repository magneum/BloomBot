("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙")
let { Caught } = require("../Vlkyre👒Hat/Caught");
let { Image_Button } = require("../Vlkyre👒Hat/Image_Button");
let UserPrivate = require(`../Vlkyre🌤️Cloud/🍃𝖒𝖔𝖓𝖌𝖔/private`);
exports._ᴘᴏᴡᴇʀ = async (ӄӄ, Vlkyre) => {
await UserPrivate.findOne(
{
ID: Vlkyre.sender,
},
async (error, user) => {
if (error) return Caught(ӄӄ, Vlkyre, error);
if (!user) {
var newUser = new UserPrivate({
ID: Vlkyre.sender,
Amount: 1,
});
await newUser.save().catch((error) => Caught(ӄӄ, Vlkyre, error));
return await Image_Button(
ӄӄ,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else if (user.Amount < 4) {
user.Amount = user.Amount + 1;
await user.save().catch((error) => Caught(ӄӄ, Vlkyre, error));
return await Image_Button(
ӄӄ,
Vlkyre,
Vlkyre.A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Red.png",
`✋🏽‍𝐖𝐚𝐢𝐭 𝐅𝐨𝐫 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫 𝐓𝐨 𝐑𝐞𝐬𝐩𝐨𝐧𝐝!
• Dear Random User, This Private Is Being Guarded By Vlkyre AI!
• Do Not Spam The Chat Box!

🌿𝐏𝐮𝐧𝐢𝐬𝐡𝐦𝐞𝐧𝐭
• 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`
);
} else {
await user.delete().catch((error) => Caught(ӄӄ, Vlkyre, error));
return await ӄӄ.updateBlockStatus(Vlkyre.sender, "block").catch((error) => Caught(ӄӄ, Vlkyre, error));
}
}
);
};
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");