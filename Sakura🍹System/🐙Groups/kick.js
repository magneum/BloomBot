`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const anime = require(`anime-actions`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
name: newScpt,
ֆǟӄʊʀǟӄǟɨʐօ: `${ᴋᴇɪ}kick (tag) or (reply to person's text)`,
async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
const defaultnm = ֆǟӄʊʀǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
const hold = require("../../Sakura🛰️Server/Hold");
hold.Hold(ֆǟӄʊʀǟ);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isSenderGroupAdmin) {
try {
return Sakura_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`*❌ Admins Only | You Are Not Allowed! ❌*`,
_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}

if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin) {
try {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived}, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
_𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}

if (!ֆǟӄʊʀǟ.isGroup) {
try {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived}, 

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
`
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}

let owner = ֆǟӄʊʀǟ.chatId.split(`-`)[0];
if (ֆǟӄʊʀǟ.isReply) {
let PersonToRemove =
chat.message.extendedTextMessage.contextInfo.participant;
if (PersonToRemove === owner + `@s.whatsapp.net`) {
return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
${owner} ɪꜱ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴛʜᴇ ɢʀᴏᴜᴘ*`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
}

if (PersonToRemove === ֆǟӄʊʀǟ.owner) {
return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
*ʀᴇQᴜᴇꜱᴛ ʀᴇᴊᴇᴄᴛᴇᴅ.* 😤
ᴡʜʏ ᴡᴏᴜʟᴅ ʏᴏᴜ ᴜꜱᴇ ᴍʏ ᴘᴏᴡᴇʀꜱ ᴛᴏ ᴋɪᴄᴋ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ?!`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
}

var isMember = async (chatId, groupMembers) => {
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

if (!isMember) {
return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
*ᴘᴇʀꜱᴏɴ ɪꜱ ɴᴏᴛ ɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ*`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
}

if (PersonToRemove) {
if (ֆǟӄʊʀǟ.isGroup && ֆǟӄʊʀǟ.isReply) {
var Receiver =
chat.message.extendedTextMessage.contextInfo.participant;
var personreceived = Receiver.substring(0, Receiver.length - 15);
Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived} ᴋɪᴄᴋᴇᴅ @${personreceived} ᴏᴜᴛᴛᴀ ᴛʜᴇ ɢʀᴏᴜᴘ!`
);
return await ӄʀǟӄɨռʐ
.groupRemove(ֆǟӄʊʀǟ.chatId, [PersonToRemove])
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
} else {
Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived} ᴋɪᴄᴋᴇᴅ ᴛʜᴀᴛ ᴘᴇʀꜱᴏɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ!`
);
return await ӄʀǟӄɨռʐ
.groupRemove(ֆǟӄʊʀǟ.chatId, [PersonToRemove])
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
}
}
return;
}

if (!Needs[0]) {
return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
}

if (Needs[0][0] == `@`) {
const number = Needs[0].substring(1);
if (isNaN(number)) {
return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
}

if (number + `@s.whatsapp.net` === ֆǟӄʊʀǟ.owner) {
return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
*ʀᴇQᴜᴇꜱᴛ ʀᴇᴊᴇᴄᴛᴇᴅ.* 😤
ᴡʜʏ ᴡᴏᴜʟᴅ ʏᴏᴜ ᴜꜱᴇ ᴍʏ ᴘᴏᴡᴇʀꜱ ᴛᴏ ᴋɪᴄᴋ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴇ ɢʀᴏᴜᴘ?!`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
}

if (!(number === owner)) {
if (ֆǟӄʊʀǟ.isGroup && ֆǟӄʊʀǟ.isReply) {
var Receiver =
chat.message.extendedTextMessage.contextInfo.participant;
var personreceived = Receiver.substring(0, Receiver.length - 15);
Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived} ᴋɪᴄᴋᴇᴅ @${personreceived} ᴏᴜᴛᴛᴀ ᴛʜᴇ ɢʀᴏᴜᴘ!`
);

return await ӄʀǟӄɨռʐ.groupRemove(ֆǟӄʊʀǟ.chatId, [
number + `@s.whatsapp.net`,
]);
} else {
Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived} ᴋɪᴄᴋᴇᴅ ᴛʜᴀᴛ ᴘᴇʀꜱᴏɴ ꜱᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ!`
);
return await ӄʀǟӄɨռʐ.groupRemove(ֆǟӄʊʀǟ.chatId, [
number + `@s.whatsapp.net`,
]);
}
} else {
return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
${owner} ɪꜱ ᴛʜᴇ ᴏᴡɴᴇʀ ᴏꜰ ᴛʜᴇ ɢʀᴏᴜᴘ*`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
}
}

return Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived},


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
Reply to the person you want to kick or tag them.\n\nFor instance,  *${ᴋᴇɪ}kick @<person-to-kick>*  or reply using  *${ᴋᴇɪ}kick*${ᴋᴇɪ}`,
`./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
},
};
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;

