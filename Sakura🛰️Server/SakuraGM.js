`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
require(`python-format-js`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { SakuraTenorMaker } = require(`./SakuraTenorMaker`);
const Sakura_Static = require(`./Sakura_Static`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ffmpeg = require(`fluent-ffmpeg`);
const cleanRF = require(`./cleanRF`);
const ꜰᴜᴄᴋ = require(`./oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const vers = require(`../package.json`);
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
exports.SakuraGM = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, newScpt, Needs) => {
try {
var SakuraGMid = chat.key.id;
var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15).replace(/[+ ]/g, "");
const defaultnm = ֆǟӄʊʀǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
const link = SakuraTenorMaker(FinalName.toLowerCase());
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const hold = require("./Hold");
hold.Hold(ֆǟӄʊʀǟ);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
let FinalLink;
var AnimeLink = link;
const GotFile = `./${FinalName}${Date.now()}.gif`;
const GiveFile = `./${FinalName}${Date.now()}.mp4`;
FinalLink = AnimeLink;
console.log("═════⬡|First Try: " + FinalLink);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const downloader = await new Downloader({
url: FinalLink,
directory: `./`,
fileName: GotFile,
cloneFiles: false,
});
try {
await downloader.download();
} catch (Error) {
console.log(`═════⬡|🐞𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐄𝐫𝐫𝐨𝐫: ` + Error);
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
if (ֆǟӄʊʀǟ.isReply) {
var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15).replace(/[+ ]/g, "");
ffmpeg(GotFile)
.outputOptions([
`-pix_fmt yuv420p`,
`-c:v libx264`,
`-movflags +faststart`,
`-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
])
.save(GiveFile)
.on(`end`, async () => {
await Sakura_Static.MGS(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`
╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍕𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭𝐓𝐨: @${քɛʀֆօռɢօȶռʊʍ}
╚════════════╝`,
GiveFile
);
await cleanRF.cleanRF(GiveFile, GotFile);
return;
});
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
var Check = ֆǟӄʊʀǟ.body.slice(1);
var Tag = Check.split(" ").join("");
var ToRm = ᴋᴇɪ + newScpt;
var Num = ToRm.length;
var Mention = Tag.substring(Num);
var MentionPerson = Mention + "@s.whatsapp.net";
if (!Needs[0]) {
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{ url: GiveFile },
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozenV${vers.vers}_ ⏋


╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭 𝐓𝐨: Themselves
╚════════════╝`,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
await cleanRF.cleanRF(GiveFile, GotFile);
return;
} else {
await ӄʀǟӄɨռʐ
.sendMessage(
ֆǟӄʊʀǟ.chatId,
{ url: GiveFile },
MessageType.video,
{
mimetype: `video/gif`,
quoted: chat,
caption: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐁𝐨𝐭 ⏋\n⎿ 𝐄𝐧𝐠𝐢𝐧𝐞: _kryozenV${vers.vers}_ ⏋


╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🍕 𝐅𝐫𝐨𝐦: @${աɦօֆɛռȶɦǟȶռʊʍ}
║🌭 𝐓𝐨: @${Mention}
╚════════════╝`,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, MentionPerson] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
await cleanRF.cleanRF(GiveFile, GotFile);
return;
}
});
}
} catch (Error) {
return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
childs.stdout.pipe(process.stdout);
childs.on(`exit`, async function () {
process.exitCode = 1;
});
}
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
