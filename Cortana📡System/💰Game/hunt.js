`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
require(`../../Cortana🛰️Server/konfs`);
const Cortana_Buttons = require(`../../Cortana🛰️Server/Cortana_Buttons`);
const Cortana_Static = require(`../../Cortana🛰️Server/Cortana_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Pokemon = require(`../../Cortana🍃Goose/pokemon`);
const Economy = require(`../../Cortana🍃Goose/economy`);
const _𝔏𝔞𝔟_ = require(`../../Cortana🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Cortana🛰️Server/oShit`);
const fetch = require(`node-fetch`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const ms = require(`parse-ms`);
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
const { PokeList } = require("../../Cortana🛰️Server/pokelist");
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
async handle(ӄʀǟӄɨռʐ, chat, ƈօʀȶǟռǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ƈօʀȶǟռǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ
.substring(0, աɦօֆɛռȶɦǟȶ.length - 15)
.replace(/[+ ]/g, "");
const defaultnm = ƈօʀȶǟռǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (!ƈօʀȶǟռǟ.isGroup) {
return Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`,
"./Cortana☣️Reactor/Cortana_Univ.png"
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
const hold = require(`../../Cortana🛰️Server/Hold`);
await hold.Hold(ƈօʀȶǟռǟ);
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
let BasePoke = PokeList[Math.floor(Math.random() * PokeList.length)];
let Worth = Math.ceil(Math.random() * 500);
Pokemon.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
},
async (Error, userHunt) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
if (!userHunt) {
var newPokeUser = new Pokemon({
ID: աɦօֆɛռȶɦǟȶ,
CurrentLimitTime: 0,
PermanentLimitTime: 21600000,
});
await newPokeUser
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`*🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║◇ *Type:* _Hunted First Time!_
╚════════════╝`,
`./Cortana☣️Reactor/Cortana_Mongo.png`
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
Economy.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
},
async (Error, userEco) => {
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
if (!userEco) {
var newUser = new Economy({
ID: աɦօֆɛռȶɦǟȶ,
money: 0,
daily: 0,
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
return Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐂𝐨𝐫𝐭𝐚𝐧𝐚💵𝐁𝐚𝐧𝐤
╚◇══════════════◇╝


╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${աɦօֆɛռȶɦǟȶռʊʍ},
╚════════════╝`,
"./Cortana☣️Reactor/Cortana_Univ.png"
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
let PokemonData;
try{
let res = await fetch(
API(`https://some-random-api.ml`, `/pokedex`, {
pokemon: BasePoke.toLowerCase(),
})
).catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
PokemonData = await res.json()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
} catch {
userBadge.Limits = userBadge.Limits + 1;
await userBadge
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat);
return;
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
if (
userHunt.PermanentLimitTime -
(Date.now() - userHunt.CurrentLimitTime) >
0
) {
let time = ms(
userHunt.PermanentLimitTime -
(Date.now() - userHunt.CurrentLimitTime)
);
return Cortana_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ƈօʀȶǟռǟ,
`🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇══════════════◇╝
╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❌ 𝗘𝗿𝗿𝗼𝗿: You've recently went in a forest!
║🪵 𝗡𝗲𝘅𝘁 𝗛𝘂𝗻𝘁𝗶𝗻𝗴: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`,
"./Cortana☣️Reactor/Cortana_Univ.png"
);
}
`|⬡════════════════════════════════════════════|   (𝐜)𝐂𝐨𝐫𝐭𝐚𝐧𝐚𝐀𝐈  🛸  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛   |═══════════════════════════════════════════⬡|`;
userEco.money = userEco.money + Worth;
userHunt.CurrentLimitTime = Date.now();
await userEco
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
await userHunt
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
const media = await ӄʀǟӄɨռʐ.prepareMessage(
ƈօʀȶǟռǟ.chatId,
{ url: PokemonData.sprites.normal },
MessageType.image,
{ mimetype: Mimetype.png }
);
return await ӄʀǟӄɨռʐ
.sendMessage(
ƈօʀȶǟռǟ.chatId,
{
contentText: `🪶 𝐇𝐞𝐲: @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊ 𝐏𝐨𝐤𝐞𝐦𝐨𝐧🦋𝐇𝐮𝐧𝐭𝐢𝐧𝐠
┊ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 🪵 𝐄𝐝𝐢𝐭𝐢𝐨𝐧
╚◇╗
╔◇╜
║◇ *Name*: ${PokemonData.name.toString().toUpperCase()}
║◇ *Type:* ${PokemonData.type}
║◇ *Abilities:* ${PokemonData.abilities}
║◇ *Base Exp:* ${PokemonData.base_experience}
║◇ *Gender:* ${PokemonData.gender}
║◇ *Worth:* ${Worth}gold
╚════════════╝

𝐁𝐮𝐭𝐭𝐨𝐧 𝐓𝐨 𝐋𝐞𝐚𝐫𝐧 𝐌𝐨𝐫𝐞👇🏻
`.trim(),
footerText: `⎿ ©️ 𝐂𝐨𝐫𝐭𝐚𝐧𝐚 𝐀𝐈 ⏋`,
buttons: [
{
buttonId: `${ᴋᴇɪ}pokedex ${BasePoke.toLowerCase()}`,
buttonText: {
displayText: `${ᴋᴇɪ}pokedex ${BasePoke.toLowerCase()}`,
},
type: 1,
},
],
headerType: 4,
imageMessage: media.message.imageMessage,
},
MessageType.buttonsMessage,
{
quoted: chat,
contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
}
)
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ƈօʀȶǟռǟ, chat));
}
);
}
);
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
