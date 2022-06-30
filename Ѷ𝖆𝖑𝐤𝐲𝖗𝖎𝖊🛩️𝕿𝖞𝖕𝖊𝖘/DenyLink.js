`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
exports.DenyLink = async (
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
ᴋᴜɴᴀɪ,
Caught,
Image_Button,
A𝖗𝖌𝖘,
LinkList,
Figure
) => {
await LinkList.findOne(
{
serverID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
},
async (error, server) => {
if (error) return Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e);
if (!server) return;
let FetchCurrentGroupLink = await ᴋᴜɴᴀɪ.groupInviteCode(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID);
let GroupLinkRegex = /Fox.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let isGroupLink = GroupLinkRegex.exec(Figure);
let PresentGroupLink = new RegExp(`https://chat.whatsapp.com/${FetchCurrentGroupLink}`,"i");
let isCurrentGroupLink = PresentGroupLink.test(Figure);
if (isGroupLink && !isCurrentGroupLink) {
await Image_Button(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
"./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Orange.png",
`╔◇═══════════════◇╗
┊ 𝐊𝐫𝐲𝐙𝐞𝐧❌𝐀𝐧𝐭𝐢-𝐋𝐢𝐧𝐤
┊    𝐌𝐞𝐜𝐡𝐚𝐧𝐢𝐬𝐦
╚◇═══════════════◇╝

🤖𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞: Kicked! 🎊One Less MoFo🎊
❗𝗥𝗲𝗮𝘀𝗼𝗻: Sent some type of Link in this Group!
⚠️𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${Figure}


💀𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱:
🐾 WWW
🐾 Discord Link
🐾 Telegram Link
🐾 Whatspp Invite Link`
);
return await ᴋᴜɴᴀɪ.groupParticipantsUpdate(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender],"remove").catch((e) => Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e));
} else if (
Figure.includes("https://t.me/") &&
Figure.includes("discord.gg") &&
Figure.includes("discord.com") &&
Figure.includes("/t.me/") &&
Figure.includes("wa.me/") &&
Figure.includes("www.")
) {
await Image_Button(
ᴋᴜɴᴀɪ,
Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
A𝖗𝖌𝖘,
"./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊_Orange.png",
`╔◇═══════════════◇╗
┊ 𝐊𝐫𝐲𝐙𝐞𝐧❌𝐀𝐧𝐭𝐢-𝐋𝐢𝐧𝐤
┊    𝐌𝐞𝐜𝐡𝐚𝐧𝐢𝐬𝐦
╚◇═══════════════◇╝

🤖𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞: Kicked! 🎊One Less MoFo🎊
❗𝗥𝗲𝗮𝘀𝗼𝗻: Sent some type of Link in this Group!
⚠️𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${Figure}


💀𝗧𝗿𝗶𝗴𝗴𝗲𝗿𝗲𝗱:
🐾 WWW
🐾 Discord Link
🐾 Telegram Link
🐾 Whatspp Invite Link`
);
return await ᴋᴜɴᴀɪ.groupParticipantsUpdate(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID, [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender],"remove").catch((e) => Caught(ᴋᴜɴᴀɪ, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, e));
} else {
}
}
);
};
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
