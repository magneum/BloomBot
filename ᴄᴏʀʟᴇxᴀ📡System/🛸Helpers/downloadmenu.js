`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴄᴏʀʟᴇxᴀ_Buttons = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ᴄᴏʀʟᴇxᴀ_Buttons`);
const ᴄᴏʀʟᴇxᴀ_Static = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ᴄᴏʀʟᴇxᴀ_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
try {
var աɦօֆɛռȶɦǟȶ = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const Halt = require(`../../ᴄᴏʀʟᴇxᴀ🍃Goose/halt`);
const ms = require(`parse-ms`);
Halt.findOne(
{
ID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender,
},
async (Error, userHalt) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
if (!userHalt) {
var newHalt = new Halt({
ID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender,
TimeOut: Date.now(),
PermaTimeOut: 15000,
});
await newHalt
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
}
if (userHalt.PermaTimeOut - (Date.now() - userHalt.TimeOut) > 0) {
let Time = ms(
userHalt.PermaTimeOut - (Date.now() - userHalt.TimeOut)
);
return await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
`☣️@${աɦօֆɛռȶɦǟȶռʊʍ}, _Wait For ${Time.seconds}s!_`,
MessageType.text,
{
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
);
}
userHalt.TimeOut = Date.now();
await userHalt
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
var MediaUrl = `./ᴄᴏʀʟᴇxᴀ☣️Reactor/𝖈𝖔𝖗𝖑𝖊𝖝𝖆.png`;
var MainText = `🪶 𝐇𝐞𝐲: •@${աɦօֆɛռȶɦǟȶռʊʍ}, ${Timers}
🛸𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈: _ɪꜱ ᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ᴍᴜʟᴛɪᴘᴜʀᴘᴏꜱᴇ-ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ ᴍᴏᴅᴇʀᴀᴛɪᴏɴ,ᴀᴜᴛᴏᴍᴀᴛɪᴏɴ ᴀɴᴅ 100+ ᴄᴏᴍᴍᴀɴᴅꜱ!_

╔════◇📥 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫𝐬
║
║• *${ᴋᴇɪ}play:*  _youtube-audio max 10min_
║• *${ᴋᴇɪ}song:*  _youtube-audio max 20min_
║• *${ᴋᴇɪ}stream:*  _youtube-video max 10min_
║• *${ᴋᴇɪ}watch:*  _youtube-video max 20min_
║• *${ᴋᴇɪ}ytmlink _yt-audio-max 15min_
║• *${ᴋᴇɪ}ytvlink _yt-video-max 15min_
║• *${ᴋᴇɪ}spotify:*  _spotify single download_
║• *${ᴋᴇɪ}instagram:*  _image/video from ig_
╚════════════╝`;
return ᴄᴏʀʟᴇxᴀ_Buttons
.MIB(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, MainText, MediaUrl)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
}
);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;