("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (update, νℓкуяє, store) => {
const chat = update[0];
try {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await νℓкуяє.profilePictureUrl(chat.id, "image");
} catch {
𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "https://i.postimg.cc/TPLYb38J/image.png";
}
if (chat.announce == true) {
νℓкуяє.sendMessage(chat.id, {
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: `*「 Group Settings Changed 」*

> The group has been closed by admin, Now only admin can send messages!`,
buttons: [
{
buttonId: `${νℓкуяє.prefix}Commands`,
buttonText: { displayText: `${νℓкуяє.prefix}✈️Commands` },
type: 1,
},
{
buttonId: `${νℓкуяє.prefix}Vlkyre`,
buttonText: { displayText: `${νℓкуяє.prefix}🛰️Vlkyre` },
type: 1,
},
],
headerType: 4,
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (chat.announce == false) {
νℓкуяє.sendMessage(chat.id, {
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: `*「 Group Settings Changed 」*

> The group has been opened by admin, Now participants can send messages!`,
buttons: [
{
buttonId: `${νℓкуяє.prefix}Commands`,
buttonText: { displayText: `${νℓкуяє.prefix}✈️Commands` },
type: 1,
},
{
buttonId: `${νℓкуяє.prefix}Vlkyre`,
buttonText: { displayText: `${νℓкуяє.prefix}🛰️Vlkyre` },
type: 1,
},
],
headerType: 4,
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (chat.restrict == true) {
νℓкуяє.sendMessage(chat.id, {
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: `*「 Group Settings Changed 」*

> Group info has been restricted, Now only admin can edit group info!`,
buttons: [
{
buttonId: `${νℓкуяє.prefix}Commands`,
buttonText: { displayText: `${νℓкуяє.prefix}✈️Commands` },
type: 1,
},
{
buttonId: `${νℓкуяє.prefix}Vlkyre`,
buttonText: { displayText: `${νℓкуяє.prefix}🛰️Vlkyre` },
type: 1,
},
],
headerType: 4,
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else if (chat.restrict == false) {
νℓкуяє.sendMessage(chat.id, {
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: `*「 Group Settings Changed 」*

> Group info has been opened, Now participants can edit group info!`,
buttons: [
{
buttonId: `${νℓкуяє.prefix}Commands`,
buttonText: { displayText: `${νℓкуяє.prefix}✈️Commands` },
type: 1,
},
{
buttonId: `${νℓкуяє.prefix}Vlkyre`,
buttonText: { displayText: `${νℓкуяє.prefix}🛰️Vlkyre` },
type: 1,
},
],
headerType: 4,
});
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
} else {
νℓкуяє.sendMessage(chat.id, {
image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
caption: `*「 Group Settings Changed 」*

> Group Subject has been changed to *${chat.subject}*`,
buttons: [
{
buttonId: `${νℓкуяє.prefix}Commands`,
buttonText: { displayText: `${νℓкуяє.prefix}✈️Commands` },
type: 1,
},
{
buttonId: `${νℓкуяє.prefix}Vlkyre`,
buttonText: { displayText: `${νℓкуяє.prefix}🛰️Vlkyre` },
type: 1,
},
],
headerType: 4,
});
}
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ νℓкуяє was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
