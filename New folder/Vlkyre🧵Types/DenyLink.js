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
require("../Vlkyre🖋️Utilities/𝕷𝖆ყO𝖚𝖙");
exports.DenyLink = async (
Vlkyre,
ӄӄ,
Caught,
Image_Button,
A𝖗𝖌𝖘,
LinkList,
Figure
) => {
await LinkList.findOne(
{
serverID: Vlkyre.chatID,
},
async (error, server) => {
if (error) return Caught(ӄӄ, Vlkyre, e);
if (!server) return;
let FetchCurrentGroupLink = await ӄӄ.groupInviteCode(Vlkyre.chatID);
let GroupLinkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let isGroupLink = GroupLinkRegex.exec(Figure);
let PresentGroupLink = new RegExp(`https://chat.whatsapp.com/${FetchCurrentGroupLink}`,"i");
let isCurrentGroupLink = PresentGroupLink.test(Figure);
if (isGroupLink && !isCurrentGroupLink) {
await Image_Button(
ӄӄ,
Vlkyre,
A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Orange.png",
`╔◇═══════════════◇╗
┊ 𝐊𝐫𝐲𝐙𝐞𝐧❌𝐀𝐧𝐭𝐢-𝐋𝐢𝐧𝐤
┊    𝐌𝐞𝐜𝐡𝐚𝐧𝐢𝐬𝐦
╚◇═══════════════◇╝

🤖𝐕𝐥𝐤𝐲𝐫𝐞: Kicked! 🎊One Less MoFo🎊
❗𝗥𝗲𝗮𝘀𝗼𝗻: Sent some type of Link in this Group!
⚠️𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${Figure}


💀𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱:
🐾 WWW
🐾 Discord Link
🐾 Telegram Link
🐾 Whatspp Invite Link`
);
return await ӄӄ.groupParticipantsUpdate(Vlkyre.chatID, [Vlkyre.sender],"remove").catch((e) => Caught(ӄӄ, Vlkyre, e));
} else if (
Figure.includes("https://t.me/") &&
Figure.includes("discord.gg") &&
Figure.includes("discord.com") &&
Figure.includes("/t.me/") &&
Figure.includes("wa.me/") &&
Figure.includes("www.")
) {
await Image_Button(
ӄӄ,
Vlkyre,
A𝖗𝖌𝖘,
"./Vlkyre👗Skins/Vlkyre_Orange.png",
`╔◇═══════════════◇╗
┊ 𝐊𝐫𝐲𝐙𝐞𝐧❌𝐀𝐧𝐭𝐢-𝐋𝐢𝐧𝐤
┊    𝐌𝐞𝐜𝐡𝐚𝐧𝐢𝐬𝐦
╚◇═══════════════◇╝

🤖𝐕𝐥𝐤𝐲𝐫𝐞: Kicked! 🎊One Less MoFo🎊
❗𝗥𝗲𝗮𝘀𝗼𝗻: Sent some type of Link in this Group!
⚠️𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${Figure}


💀𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱:
🐾 WWW
🐾 Discord Link
🐾 Telegram Link
🐾 Whatspp Invite Link`
);
return await ӄӄ.groupParticipantsUpdate(Vlkyre.chatID, [Vlkyre.sender],"remove").catch((e) => Caught(ӄӄ, Vlkyre, e));
} else {
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