`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Cortana🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require("fs");
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
module.exports = {
name: newScpt,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var filePath;
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
const defaultnm = ƈօʀȶǟռǟ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
if (!ƈօʀȶǟռǟ.fromMe && !ƈօʀȶǟռǟ.isSenderDev) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`❌𝐃𝐞𝐧𝐢𝐞𝐝: _Owner/Dev Only.You Are Not Allowed!_`
);
}
if (ƈօʀȶǟռǟ.isReply) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`*Sir Please Don't Reply To any Message.*\n\n *Use:* ${ᴋᴇɪ}${newScpt} _Invite Link_`
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
const hold = require(`../../Cortana🛰️Server/Hold`);
await hold.Hold(ƈօʀȶǟռǟ);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
var InvLink = Needs.join(" ");
let [_, code] = InvLink.match(linkRegex) || [];
if (!code) {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇
║❌ 𝗘𝗿𝗿𝗼𝗿: _Invalid Link_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
try {
await ӄʀǟӄɨռʐ.acceptInvite(code).then(async (res) => {
return Cortana_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`𝐇𝐚𝐥𝐨🤖𝐔𝐬𝐞𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: _Joined Group!_
║📜𝐆𝐫𝐨𝐮𝐩: ${res.gid}
╚════════════╝`
);
});
} catch (Error) {
console.log(Error);
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🛸𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈(𝐜) |════════════════════════════════════════════⬡|`;
} catch (Error) {
console.log(Error);
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
