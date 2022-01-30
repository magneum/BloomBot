const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const Ban = require(`../../Sakura🍃Goose/ban`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}${newScpt}* _reply to person to un-ban_
*${ᴋᴇɪ}${newScpt}* _don't reply to anyone and group will be un-banned_`,
async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
const defaultnm = ֆǟӄʊʀǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
if (!ֆǟӄʊʀǟ.fromMe && !ֆǟӄʊʀǟ.isSenderDev) {
return Sakura_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`*❌ Owner Only | You Are Not Allowed! ❌*`,
_𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
if (ֆǟӄʊʀǟ.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
if (Receiver === աɦօֆɛռȶɦǟȶ) {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: _Can't Use On My-Self_
╚════════════╝`
);
}
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
if (!ֆǟӄʊʀǟ.isGroup) {
Ban.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
serverID: ֆǟӄʊʀǟ.chatId,
},
async (Error, userBan) => {
if (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
if (!userBan) {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: _@${քɛʀֆօռɢօȶռʊʍ} Was Not Banned!_
╚════════════╝`
);
}
}
);
} else if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
Ban.findOne(
{
ID: ֆǟӄʊʀǟ.chatId,
serverID: ֆǟӄʊʀǟ.chatId,
},
async (Error, userBan) => {
if (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
if (!userBan) {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: _${groupData.subject} Was Not Banned!_
╚════════════╝`
);
}
}
);
} else if (ֆǟӄʊʀǟ.isGroup && ֆǟӄʊʀǟ.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
Ban.findOne(
{
ID: Receiver,
serverID: ֆǟӄʊʀǟ.chatId,
},
async (Error, userBan) => {
if (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
if (!userBan) {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: _@${քɛʀֆօռɢօȶռʊʍ} Was Not Banned!_
╚════════════╝`
);
}
}
);
} else {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
ֆǟӄʊʀǟ.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
},
};
