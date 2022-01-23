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
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
module.exports = {
name: newScpt,
ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}tagall* (text) _or_ reply: *${ᴋᴇɪ}tagall* _or_ (no-text): *${ᴋᴇɪ}tagall*`,
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
if (!ֆǟӄʊʀǟ.isGroup) {
try {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨, 

────★ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
`
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}

if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isSenderGroupAdmin && !ֆǟӄʊʀǟ.isSenderDev) {
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

if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin && !ֆǟӄʊʀǟ.isSenderDev) {
try {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`@${ꜱᴇɴᴅᴇʀeceived} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
_𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}

try {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = await ӄʀǟӄɨռʐ.getProfilePicture(ֆǟӄʊʀǟ.chatId);
} catch {
𝕻𝕻𝖑𝖊𝖙𝖊𝖗 = "./Sakura☣️Reactor/ֆǟӄʊʀǟ_Npp.png";
}
let members = [];
for (var i = 0; i < ֆǟӄʊʀǟ.groupMembers.length; i++) {
members[i] = ֆǟӄʊʀǟ.groupMembers[i].jid;
}
if (ֆǟӄʊʀǟ.isReply) {
await ӄʀǟӄɨռʐ
.sendMessage(ֆǟӄʊʀǟ.chatId, { url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 }, MessageType.image, {
mimetype: Mimetype.png,
quoted: chat,
contextInfo: {
stanzaId: ֆǟӄʊʀǟ.replyMessageId,
participant: ֆǟӄʊʀǟ.replyParticipant,
quotedMessage: {
conversation: ֆǟӄʊʀǟ.replyMessage,
},
mentionedJid: members,
},
caption: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨
🤩𝐓𝐨: Everyone!


*•──[ Message From Admin  ]──•*
_⚠️Attention Everyone Here In the Group!_`,
})
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return;
}

if (!ֆǟӄʊʀǟ.isReply) {
return await ӄʀǟӄɨռʐ
.sendMessage(ֆǟӄʊʀǟ.chatId, { url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 }, MessageType.image, {
mimetype: Mimetype.png,
quoted: chat,
contextInfo: {
mentionedJid: members,
},
caption: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨
🤩𝐓𝐨: Everyone!


*•──[ Message From Admin  ]──•*
${ֆǟӄʊʀǟ.body.replace(ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + " ", "")}`,
})
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
} else if (ֆǟӄʊʀǟ.isReply) {
return await ӄʀǟӄɨռʐ.sendMessage(
ֆǟӄʊʀǟ.chatId,
{ url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 },
MessageType.image,
{
mimetype: Mimetype.png,
quoted: chat,
contextInfo: {
mentionedJid: members,
},
caption: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨
🤩𝐓𝐨: Everyone!


*•──[ Message From Admin  ]──•*
${ֆǟӄʊʀǟ.replyMessage.replace(ֆǟӄʊʀǟ.body[0] + ֆǟӄʊʀǟ.commandName + " ", "")}`,
}
);
} else {
return await ӄʀǟӄɨռʐ
.sendMessage(ֆǟӄʊʀǟ.chatId, { url: 𝕻𝕻𝖑𝖊𝖙𝖊𝖗 }, MessageType.image, {
mimetype: Mimetype.png,
quoted: chat,
contextInfo: {
mentionedJid: members,
},
caption: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
🥳𝐅𝐫𝐨𝐦: @${ꜱᴇɴᴅᴇʀeceived} 🤙🏽‍𝐇𝐞𝐥𝐥𝐨
🤩𝐓𝐨: Everyone!


*•──[ Message From Admin  ]──•*
_⚠️Attention Everyone Here In the Group!_`,
})
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
}
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

