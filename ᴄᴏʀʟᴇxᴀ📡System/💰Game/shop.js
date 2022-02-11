`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const ᴄᴏʀʟᴇxᴀ_Buttons = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/ᴄᴏʀʟᴇxᴀ_Buttons`);
const ꜰᴜᴄᴋ = require(`../../ᴄᴏʀʟᴇxᴀ🛰️Server/oShit`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
async handle(ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇, chat, 𝖈𝖔𝖗𝖑𝖊𝖝𝖆, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender;
const defaultnm = 𝖈𝖔𝖗𝖑𝖊𝖝𝖆.commandName;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isGroup) {
return ᴄᴏʀʟᴇxᴀ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`,
"./ᴄᴏʀʟᴇxᴀ☣️Reactor/ᴄᴏʀʟᴇxᴀ_Univ.png"
);
}
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
ᴄᴏʀʟᴇxᴀ_Buttons.MIB(
ӄ𝖗𝖆ӄ𝖎𝖓𝖟𝕷𝖆𝖇,
chat,
𝖈𝖔𝖗𝖑𝖊𝖝𝖆,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 
╔◇══════════════◇╗
┊ 𝐌𝐞𝐦𝐛𝐞𝐫🛰️𝐒𝐭𝐨𝐫𝐞
╚◇╗
╔◇╜꧁༺ 𝐁𝐚𝐝𝐠𝐞🏷️𝐂𝐚𝐭𝐞𝐨𝐠𝐫𝐲 ༻꧂
║
║ *🧵Basic:* _10commands/day_ (Free)
║ *🥉Bronze:* _20commands/day_ (20,000gold)
║ *🥈Silver:* _40commands/day_ (40,000gold)
║ *🥇Gold:* _60commands/day_ (60,000gold)
║ *💍Platinum:* _80commands/day_ (80,000gold)
║ *💎Diamond:* _100commands/day_ (100,000gold)
║
╚◇╗
╔◇╜꧁༺  𝗚𝗮𝗺𝗲𝘀💰𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲 ༻꧂
║
║⚔️ *sword:* _1000gold/robbery_
║💻 *laptop:* _4000gold/robbery_
║🔮 *charm:* _6000gold/robbery_
╚════════════╝`,
`./ᴄᴏʀʟᴇxᴀ☣️Reactor/𝖈𝖔𝖗𝖑𝖊𝖝𝖆_shop.png`
);
return;
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