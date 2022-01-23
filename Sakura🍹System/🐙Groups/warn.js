`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Warning = require(`../../Sakura🍃Goose/warning`);
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
ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}warn* [reply to person]`,
async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
const defaultnm = ֆǟӄʊʀǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (!ֆǟӄʊʀǟ.isGroup) {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!`
);
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
const hold = require("../../Sakura🛰️Server/Hold");
hold.Hold(ֆǟӄʊʀǟ);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin) {
try {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, 

❌ How Can I Use Admin Only Commands If i am not admin?
💡𝐅𝐢𝐱: Make Me Admin First`,
_𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
);
} catch (ℓαвєяяσя) {
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
}
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (ֆǟӄʊʀǟ.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var personreceived = Receiver.substring(0, Receiver.length - 15);
if (ֆǟӄʊʀǟ.owner === ֆǟӄʊʀǟ.replyParticipant) {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`*❌ Owner Can't Be Banned!*`
);
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
Warning.findOne(
{
ID: Receiver,
ServerID: ֆǟӄʊʀǟ.chatId,
},
async (err, userWarn) => {
if (err) return console.log(err);
if (!userWarn) {
var newWarnUser = new Warning({
ID: Receiver,
ServerID: ֆǟӄʊʀǟ.chatId,
warnings: 1,
});
newWarnUser
.save()
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);

const buttonMessage = {
contentText: `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║♀️ 𝗣𝗲𝗿𝘀𝗼𝗻: @${personreceived}
║❗ 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: 1
║💡 If Warnings = 3, You will be auto-removed!
╚════════════╝`,
footerText: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭\n${Clock}`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
],
headerType: 1,
};
await ӄʀǟӄɨռʐ
.sendMessage(ֆǟӄʊʀǟ.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
})
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return;
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
} else {
if (userWarn.warnings < 4) {
userWarn.warnings = userWarn.warnings + 1;
await userEco
.save()
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
const buttonMessage = {
contentText: `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║♀️ 𝗣𝗲𝗿𝘀𝗼𝗻: @${personreceived}
║❗ 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${userWarn.warnings}
║💡 If Warnings = 3, You will be auto-removed!
╚════════════╝`,
footerText: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭\n${Clock}`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
],
headerType: 1,
};
await ӄʀǟӄɨռʐ
.sendMessage(ֆǟӄʊʀǟ.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
})
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return;
}
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
if (userWarn.warnings == 3) {
const buttonMessage = {
contentText: `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║♀️ 𝗣𝗲𝗿𝘀𝗼𝗻: @${personreceived}
║❗ 𝗪𝗮𝗿𝗻𝗶𝗻𝗴𝘀: ${userWarn.warnings}
║💡 You Will be Auto-Removed in 8s!
╚════════════╝`,
footerText: `🍸(𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭\n${Clock}`,
buttons: [
{
buttonId: `${ᴋᴇɪ}help`,
buttonText: { displayText: `${ᴋᴇɪ}help` },
type: 1,
},
],
headerType: 1,
};
await ӄʀǟӄɨռʐ
.sendMessage(ֆǟӄʊʀǟ.chatId, buttonMessage, MessageType.buttonsMessage, {
quoted: chat,
contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
})
.catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
setTimeout(async (error) => {
if (error) console.log(error);
await ӄʀǟӄɨռʐ
.groupRemove(ֆǟӄʊʀǟ.chatId, [Receiver])
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
await userEco
.delete()
.catch((ℓαвєяяσя) =>
ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
);
}, 8000);
return;
}
}
}
);
//|🍹  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍹|
} else {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
ꜱᴇɴᴅᴇʀɪᴅ,
ꜱᴇɴᴅᴇʀeceived,
ֆǟӄʊʀǟ.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
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

