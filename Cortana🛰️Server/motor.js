`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const { MessageType } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
require(`python-format-js`);
const vers = require(`../package.json`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Ping = speed() - Timestamp;
const date = require(`date-and-time`);
const now = new Date();
const fs = require(`fs`);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
exports.nomentioncontact = async (args, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ) => {
var jidNumber = ``;
var countryCode = _𝔏𝔞𝔟_.CCD;
if (isNaN(args[0]) || args[0][0] === `+`) {
if (args[0][0] === `@` || args[0][0] === `+`) {
jidNumber = args[0].substring(1, args[0].length + 1);
} else {
ӄʀǟӄɨռʐ.sendMessage(
ƈօʀȶǟռǟ.chatId,
`(𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers}\n${Clock}

*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
MessageType.text
);
return;
}
} else {
jidNumber = args[0];
}

if (jidNumber.length < 8 || jidNumber.length > 13) {
ӄʀǟӄɨռʐ.sendMessage(
ƈօʀȶǟռǟ.chatId,
`(𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 | 𝐄𝐧𝐠𝐢𝐧𝐞: kryozen${vers.vers}\n${Clock}

*Enter valid contact number.* Approved Syntax:
1. XXXXXXXXXX 
2. Tag the person 
3. +(YYY)XXXXXXXXXX. 
_(YY- Country Code, without zeros)_`,
MessageType.text
);
return;
} else if (jidNumber.length === 10) {
jidNumber = countryCode + jidNumber;
}
var isOnWhatsApp = await ӄʀǟӄɨռʐ.isOnWhatsApp(jidNumber);
if (isOnWhatsApp === undefined) {
throw `NumberInvalid`;
}
return jidNumber;
};

exports.onwhatsappserver = async (chatId, groupMembers) => {
var isMember = false;
if (!(chatId === undefined)) {
for (const index in groupMembers) {
if (chatId == groupMembers[index].jid.split(`@`)[0]) {
isMember = true;
}
}
return isMember;
} else {
return isMember;
}
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;