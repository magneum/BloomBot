`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴄᴏʀʟᴇxᴀ_Buttons = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ᴄᴏʀʟᴇxᴀ_Buttons`);
const ᴄᴏʀʟᴇxᴀ_Static = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ᴄᴏʀʟᴇxᴀ_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/oShit`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
// if (!mime) throw 'No picture'
// if (!/image\/(jpe?g|png)/.test(mime)) throw `Meme ${mime} not supported`
module.exports = {
name: newScpt,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ: `*Reply Media With:* _${ᴋᴇɪ}${newScpt}_
*Supported Media Types:* _Image/Video/Gif/Mp4/Jpeg/Png_`,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const Bagde = require(`../../ᴄᴏʀʟᴇxᴀ🍃Goose/badge`);
const ms = require(`parse-ms`);
Bagde.findOne(
{
ID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender,
},
async (Error, userBadge) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
if (!userBadge) {
var newUser = new Bagde({
ID: 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender,
Badge: `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`,
value: `True`,
Limits: 10,
CurrentLimitTime: Date.now(),
PermanentLimitTime: 43200000,
});
await newUser
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ᴄᴏʀʟᴇxᴀ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`*🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║🦋 _Try ${ᴋᴇɪ}${defaultnm} Again!_
╚════════════╝`,
`./ᴄᴏʀʟᴇxᴀ☣️Reactor/ᴄᴏʀʟᴇxᴀ_Mongo.png`
);
} else {
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;

var clock =
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime);
if (clock > 0 && userBadge.Limits == 0) {
userBadge.value = `False`;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (clock > 0 && !userBadge.Limits == 0) {
userBadge.Limits = userBadge.Limits - 1;
userBadge.value = `True`;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (clock < 0 && userBadge.Limits == 0) {
if (userBadge.Badge === `🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 10;
} else if (userBadge.Badge === `🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 20;
} else if (userBadge.Badge === `🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 40;
} else if (userBadge.Badge === `🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 60;
} else if (userBadge.Badge === `💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 80;
} else if (userBadge.Badge === `💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ`) {
userBadge.Limits = 100;
}
userBadge.CurrentLimitTime = Date.now();
userBadge.value = `True`;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
}
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const hold = require("../../ᴄᴏʀʟᴇxᴀ🛰️Server/Hold");
await hold.Hold(𝖈𝖔𝖗𝖑𝖊𝖝𝖆);

`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!𝖈𝖔𝖗𝖑𝖊𝖝𝖆.fromMe && userBadge.value === "False") {
let time = ms(
userBadge.PermanentLimitTime -
(Date.now() - userBadge.CurrentLimitTime)
);
return ᴄᴏʀʟᴇxᴀ_Buttons.MTB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`💡𝐓𝐢𝐩: _Buy Higher Badges Using ${ᴋᴇɪ}shop_

╔═══════❗ 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭
║⚔️ 𝗕𝗮𝗱𝗴𝗲: ${userBadge.Badge}
║💤 𝗥𝗲𝗻𝗲𝘄𝘀_𝗜𝗻: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
try {
const convertToSticker = async (FileID, RepliedFile) => {
const fileName = "./converter-" + FileID;
const FilePath = await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.downloadAndSaveMediaMessage(
RepliedFile,
fileName
);
const stickerPath = "./sticker-" + FileID + ".webp";
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.type === "image" || 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyImage) {
ffmpeg(FilePath)
.outputOptions(["-y", "-vcodec libwebp"])
.videoFilters(
"scale=2000:2000:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=2000:2000:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1"
)
.save(stickerPath)
.on("end", async () => {
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
fs.readFileSync(stickerPath),
MessageType.sticker
);
await cleanRF.cleanRF(FilePath, stickerPath);
})
.on(`error`, async (Error) => {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) =>
ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat)
);
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
});
return;
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
ffmpeg(FilePath)
.duration(8)
.outputOptions([
"-y",
"-vcodec libwebp",
"-lossless 1",
"-qscale 1",
"-preset default",
"-loop 0",
"-an",
"-vsync 0",
"-s 600x600",
])
.videoFilters(
"scale=600:600:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=600:600:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1"
)
.save(stickerPath)
.on("end", async () => {
await ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇.sendMessage(
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.chatId,
fs.readFileSync(stickerPath),
MessageType.sticker
);
await cleanRF.cleanRF(FilePath, stickerPath);
})
.on(`error`, async (Error) => {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
return ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat);
});
return;
};
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isImage || 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGIF || 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isVideo) {
var replyChatObject = {
message: chat.message,
};
var FileID = chat.key.id;
await convertToSticker(FileID, replyChatObject);
} else if (
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyImage ||
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyGIF ||
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isReplyVideo
) {
var replyChatObject = {
message:
chat.message.extendedTextMessage.contextInfo.quotedMessage,
};
var FileID =
chat.message.extendedTextMessage.contextInfo.stanzaId;
await convertToSticker(FileID, replyChatObject);
} else {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ;
ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
return;
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
} catch (Error) {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, chat));
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ;
ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
return;
}
}
);
} catch (Error) {
const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName);
var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.𝖈𝖔𝖗𝖑𝖊𝖝𝖆ӄǟɨʐօ;
ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
աɦօֆɛռȶɦǟȶ,
աɦօֆɛռȶɦǟȶռʊʍ,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName,
ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
