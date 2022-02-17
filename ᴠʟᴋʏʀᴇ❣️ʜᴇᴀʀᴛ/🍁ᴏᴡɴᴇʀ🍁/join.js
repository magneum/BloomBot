`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴠʟᴋʏʀᴇ_Buttons = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Buttons`);
const ᴠʟᴋʏʀᴇ_Static = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴠʟᴋʏʀᴇ_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/oShit`);
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require("fs");
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
module.exports = {
name: newScpt,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, ᴠʟᴋʏʀᴇ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var filePath;
var աɦօֆɛռȶɦǟȶ = ᴠʟᴋʏʀᴇ.sender;
const defaultnm = ᴠʟᴋʏʀᴇ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!ᴠʟᴋʏʀᴇ.fromMe && !ᴠʟᴋʏʀᴇ.isSenderDev) {
return ᴠʟᴋʏʀᴇ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`꧁⧉  👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, *${
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.notify ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.vname ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.name ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.jid.split("@")[0]
}* ⧉꧂

\n❌𝐃𝐞𝐧𝐢𝐞𝐝: _Owner/Dev Only.You Are Not Allowed!_`,
"./ᴠʟᴋʏʀᴇ🔌cord/ᴠʟᴋʏʀᴇ_OwnerOnly.png"
);
}
if (ᴠʟᴋʏʀᴇ.isReply) {
return ᴠʟᴋʏʀᴇ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`*Sir Please Don't Reply To any Message.*\n\n *Use:* ${ᴋᴇɪ}${newScpt} _Invite Link_`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
var InvLink = Needs.join(" ");
let [_, code] = InvLink.match(linkRegex) || [];
if (!code) {
return ᴠʟᴋʏʀᴇ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`꧁⧉  👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, *${
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.notify ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.vname ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.name ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.jid.split("@")[0]
}* ⧉꧂

 

╔════◇
║❌ 𝗘𝗿𝗿𝗼𝗿: _Invalid Link_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.acceptInvite(code).then(async (res) => {
return ᴠʟᴋʏʀᴇ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
ᴠʟᴋʏʀᴇ,
`꧁⧉  👋🏻𝐊𝐨𝐧𝐧𝐢𝐜𝐡𝐢𝐰𝐚, *${
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.notify ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.vname ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.name ||
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.user.jid.split("@")[0]
}* ⧉꧂

 

╔════◇
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: _Joined Group!_
║📜𝐆𝐫𝐨𝐮𝐩: ${res.gid}
╚════════════╝`
);
});
} catch (e) {
console.log(e);
return ꜰᴜᴄᴋ.catch(e, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (e) {
console.log(e);
return ꜰᴜᴄᴋ.catch(e, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, ᴠʟᴋʏʀᴇ, chat);
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
