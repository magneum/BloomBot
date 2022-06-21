("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
const group = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/group`);
exports.grp_participants = async (grp, ӄ𝖚𝖓𝖆𝖎) => {
try {
let metadata = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(grp.id);
let participants = grp.participants;
let mem = grp.participants[0];
const groupName = metadata.subject || ``;
const groupAdmins =
participants.filter((v) => v.admin !== null).map((v) => v.id) || ``;
for (let num of participants) {
try {
ppuser = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(num, `image`);
} catch {
ppuser = `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`;
}
try {
ppgroup = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(grp.id, `image`);
} catch {
ppgroup = `https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`;
}
let Igroup = await group.findOne({ id: grp.id });
if (Igroup) {
let hh = Igroup.events || `false`;
if (grp.action == `add` && hh == `true`) {
let name = ӄ𝖚𝖓𝖆𝖎.getName(num);

const des = `*━━━━『🍀WELCOME🍀』━━━━*

*🎐Name:* ${groupName}

*🔩ID Group:* ${grp.id}

*🍀Made:* ${moment(`${metadata.creation}` * 1000)
.tz(`Asia/Kolkata`)
.format(`DD/MM/YYYY HH:mm:ss`)}

*🔍Number Of Admins:* ${groupAdmins.length}

*🎍Number Of Participants:* ${participants.length}

*🔍Desc:* 

${metadata.desc}

*`;
ӄ𝖚𝖓𝖆𝖎.sendMessage(grp.id, {
image: { url: ppgroup },
contextInfo: { mentionedJid: [num] },
caption: des,
});
}
if (grp.action == `remove` && hh == `true`) {
ӄ𝖚𝖓𝖆𝖎.sendMessage(grp.id, {
image: { url: ppuser },
contextInfo: { mentionedJid: [num] },
caption: `@${num.split(`@`)[0]} left from ${metadata.subject}`,
});
}
}
}
} catch (err) {
console.log(err);
}
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");