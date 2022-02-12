`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴄᴏʀʟᴇxᴀ_Buttons = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴄᴏʀʟᴇxᴀ_Buttons`);
const ᴄᴏʀʟᴇxᴀ_Static = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ᴄᴏʀʟᴇxᴀ_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/oShit`);
const Ban = require(`../../ᴠʟᴋʀᴇ🥠ᴘᴏʀᴛ/ban`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ: `*${ᴋᴇɪ}${newScpt}* _reply to person to un-ban_
*${ᴋᴇɪ}${newScpt}* _don't reply to anyone and group will be un-banned_`,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!𝖈𝖔𝖗𝖑𝖊𝖝𝖆.fromMe && !𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isSenderDev) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`❌𝐃𝐞𝐧𝐢𝐞𝐝: _Owner/Dev Only.You Are Not Allowed!_`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
if (Receiver === աɦօֆɛռȶɦǟȶ) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲:

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: *@${աɦօֆɛռȶɦǟȶռʊʍ}*
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: _Can't Use On My-Self_
╚════════════╝`
);
}
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} else if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup && !𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply) {
var groupData = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.groupMetadata(chat.key.remoteJid);
Ban.findOne(
{
ID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
},
async (Error, userBan) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
if (!userBan) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: 

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: *@${աɦօֆɛռȶɦǟȶռʊʍ}*
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: *${groupData.subject}* = Was Not Banned!
╚════════════╝`
);
}
await userBan
.delete()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: 

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: *@${աɦօֆɛռȶɦǟȶռʊʍ}*
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: *${groupData.subject}* = Has Been Un-Banned!
╚════════════╝`
);
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} else if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup && 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
Ban.findOne(
{
ID: Receiver,
},
async (Error, userBan) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
if (!userBan) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: 

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: *@${աɦօֆɛռȶɦǟȶռʊʍ}*
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: *@${քɛʀֆօռɢօȶռʊʍ}* = Was Not Banned!
╚════════════╝`
);
}
await userBan
.delete()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: 

╔════◇🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧:
║🍕 𝐅𝐫𝐨𝐦: *@${աɦօֆɛռȶɦǟȶռʊʍ}*
║🔓 𝐒𝐭𝐚𝐭𝐮𝐬: *@${քɛʀֆօռɢօȶռʊʍ}* = Has Been Un-Banned!
╚════════════╝`
);
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} else {
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ;
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴠʟᴋʏʀᴇ🕸️ʜᴏꜱᴛᴇʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
}
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
