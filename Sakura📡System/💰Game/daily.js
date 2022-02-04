`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Economy = require(`../../Sakura🍃Goose/economy`);
const ms = require(`parse-ms`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
name: newScpt,
async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
try {
var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15).replace(/[+ ]/g, "");
const defaultnm = ֆǟӄʊʀǟ.commandName;
const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
if (!ֆǟӄʊʀǟ.isGroup) {
return Sakura_Buttons.MTB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
);
}
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
const hold = require(`../../Sakura🛰️Server/Hold`);
await hold.Hold(ֆǟӄʊʀǟ);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
Economy.findOne(
{
ID: աɦօֆɛռȶɦǟȶ,
},
async (Error, userEco) => {
console.log(userEco);
if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
if (!userEco) {
var newUser = new Economy({
ID: ֆǟӄʊʀǟ.sender,
money: 1000,
daily: Date.now(),
timeout: 86400000,
fishdone: 0,
fishtimeout: 1800000,
workdone: 0,
worktimeout: 900000,
});
await newUser
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
return Sakura_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`*🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},*

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_  
║🤖 *User Added To Database For First Time!*
║✅ 𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
║💵 𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  1000 
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
╚════════════╝`,
`./Sakura☣️Reactor/Sakura_Mongo.png`
);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
} else {
if (userEco.timeout - (Date.now() - userEco.daily) > 0) {
let time = ms(userEco.timeout - (Date.now() - userEco.daily));
return Sakura_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
╚◇║
╔◇║
║❌ 𝗘𝗿𝗿𝗼𝗿: You've already collected your daily reward!
║💵 𝗡𝗲𝘅𝘁 𝗗𝗮𝗶𝗹𝘆: ${time.hours}h ${time.minutes}m ${time.seconds}s
╚════════════╝`,
`./Sakura☣️Reactor/sakura_daily.png`
);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
} else {
userEco.daily = Date.now();
userEco.money = userEco.money + 1000;
Sakura_Buttons.MIB(
ӄʀǟӄɨռʐ,
chat,
ֆǟӄʊʀǟ,
`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔◇══════════════◇╗
┊  𝐒𝐚𝐤𝐮𝐫𝐚💵𝐁𝐚𝐧𝐤
╚◇║
╔◇║
║✅ 𝗗𝗮𝗶𝗹𝘆 𝗦𝘁𝗮𝘁𝘂𝘀: You've collected your daily reward!
║💵 𝐃𝐚𝐢𝐥𝐲 𝐌𝐨𝐧𝐞𝐲:  1000 
╚════════════╝`,
`./Sakura☣️Reactor/sakura_daily.png`
);
userEco
.save()
.catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
}
}
}
);
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
} catch (Error) {
ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
return;
}
},
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
