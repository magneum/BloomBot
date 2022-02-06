`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Cortana🛰️Server/cleanRF`);
const Downloader = require(`nodejs-file-downloader`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const ffmpeg = require(`fluent-ffmpeg`);
const anime = require(`anime-actions`);
var path = require(`path`);
const fs = require(`fs`);
var scriptName = path.basename(__filename);
var str = scriptName;
var newScpt = str.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
const defaultnm = ƈօʀȶǟռǟ.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const hold = require("../../Cortana🛰️Server/Hold");
await hold.Hold(ƈօʀȶǟռǟ);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
let FinalLink;
var AnimeLink = await anime.cuddle();
const GotFile = `./${chat.key.id}${Date.now().replace(/[^0-9]/g, "")}.gif`;
const GiveFile = `./${chat.key.id}${Date.now().replace(/[^0-9]/g, "")}.mp4`;
if (!AnimeLink.endsWith(`.gif`) && !AnimeLink.endsWith(`.mp4`)) {
const anime2 = require(`anime-actions`);
FinalLink = await anime2.cuddle();
console.log("═════⬡|Second Try: " + FinalLink);
} else {
FinalLink = AnimeLink;
console.log("═════⬡|First Try: " + FinalLink);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const downloader = await new Downloader({
url: FinalLink,
directory: `./`,
fileName: GotFile,
cloneFiles: false,
});
try {
await downloader
.download()
.then(
console.log(
`⬡═══════════════════| 🥂𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐢𝐧𝐢𝐬𝐞𝐝🥂 |═══════════════════⬡`
)
);
} catch (Error) {
console.log(`═════⬡|🐞𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐄𝐫𝐫𝐨𝐫: ` + Error);
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (Needs[0] && Needs[0].startsWith("@")) {
var TagPerson = Needs[0].replace(/[^0-9]/g, "");
var TagMention = TagPerson + "@s.whatsapp.net";
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `╔════◇🛸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${FinalName}
║
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭 𝐓𝐨: @${TagPerson}
╚════════════╝

⎿ (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐀𝐈 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: ᴋʀʏᴛᴇᴋ-v${vers.vers} ⏋`,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, TagMention] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return await cleanRF.cleanRF(GiveFile, GotFile);
});
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} else if (ƈօʀȶǟռǟ.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
if (Receiver === աɦօֆɛռȶɦǟȶ) {
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `╔════◇🛸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${FinalName}
║
║🍕 𝐅𝐨𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ}
╚════════════╝

⎿ (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐀𝐈 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: ᴋʀʏᴛᴇᴋ-v${vers.vers} ⏋`,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return await cleanRF.cleanRF(GiveFile, GotFile);
});
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} else {
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `╔════◇🛸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${FinalName}
║
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭 𝐓𝐨: @${քɛʀֆօռɢօȶռʊʍ}
╚════════════╝

⎿ (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐀𝐈 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: ᴋʀʏᴛᴇᴋ-v${vers.vers} ⏋`,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return await cleanRF.cleanRF(GiveFile, GotFile);
});
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} else {
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
fs.readFileSync(GiveFile),
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `╔════◇🛸𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${FinalName}
║
║🍕 𝐅𝐨𝐫: @${աɦօֆɛռȶɦǟȶռʊʍ}
╚════════════╝

⎿ (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐀𝐈 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: ᴋʀʏᴛᴇᴋ-v${vers.vers} ⏋`,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return await cleanRF.cleanRF(GiveFile, GotFile);
});
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
