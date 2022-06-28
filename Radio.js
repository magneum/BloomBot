("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let ꜰꜱ = require("fs");
let ᴋᴏʟᴏʀ = require("chalk");
let ʏᴛꜱ = require("yt-search");
let ᴄʀᴏɴ = require("node-cron");
let ɴᴏᴅᴇꜰᴇᴛᴄʜ = require("node-fetch");
let ɢᴇᴛᴠɪᴅᴇᴏɪᴅ = require("get-video-id");
let { yta } = require("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/y2mate");
let { yta_var } = require("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/letiableServers");
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
async function ᴘᴏᴡ() {
console.log(
ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐀𝐭: "), ᴋᴏʟᴏʀ.bgYellow(new Date()))
);
let ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ = 15;
let ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ = false;
let ᴍᴀɪɴᴜʀʟ = "";
let ᴄᴏʀᴇꜰᴇᴛᴄʜ;
if (typeof window === "undefined") {
ᴄᴏʀᴇꜰᴇᴛᴄʜ = ɴᴏᴅᴇꜰᴇᴛᴄʜ;
} else {
ᴄᴏʀᴇꜰᴇᴛᴄʜ = fetch;
}
let playlists = [
{
name: "most-viewed",
id: "PL15B1E77BB5708555",
max: 543,
},
{
name: "billboard",
id: "PL55713C70BA91BD6E",
max: 200,
},
{
name: "latest",
id: "PLFgquLnL59akA2PflFpeQG9L01VFg90wS",
max: 100,
},
{
name: "popular-music-videos",
id: "PLFgquLnL59alCl_2TQvOiD5Vgm1hCaGSI",
max: 200,
},
{
name: "top-hits-this-week",
id: "PLw-VjHDlEOgvWPpRBs9FRGgJcKpDimTqf",
max: 130,
},
];
let app = {
playlist: {},
index: null,
baseURL: "https://www.youtube.com/embed/?list={0}&index={1}",
queryStrings:
"&amp;t=15&amp;wmode=transparent&amp;autoplay=1&amp;rel=0&amp;showinfo=0&amp;iv_load_policy=3&amp;showsearch=0&amp;autohide=1&amp;controls=1&amp;wadsworth=1",
iframeSrc: "",
};
String.prototype.format = function () {
let string = this;
for (let i = 0; i < arguments.length; i++) {
let regexp = new RegExp("\\{" + i + "\\}", "gi");
string = string.replace(regexp, arguments[i]);
}
return string;
};
function ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(num) {
return Math.floor(Math.random() * num);
}
function ɢᴇᴛᴘʟᴀʏʟɪꜱᴛ() {
let loc = ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(playlists.length);
return playlists[loc];
}
function ɢᴇᴛᴇᴍʙᴇᴅᴍᴜꜱɪᴄᴠɪᴅᴇᴏᴜʀʟ() {
let playlist = ɢᴇᴛᴘʟᴀʏʟɪꜱᴛ();
let index = ɢᴇɴᴇʀᴀᴛᴇʀᴀɴᴅᴏᴍ(playlist.max);
return app.baseURL.format(playlist.id, index) + app.queryStrings;
}
async function getMainSiteYoutubeMusicVideoUrl(embedUrl) {
if (embedUrl == null) {
throw new Error("embedUrl is null");
}
let res = await ᴄᴏʀᴇꜰᴇᴛᴄʜ(embedUrl);
let txt = await res.text();
let realUrlStartIdx = txt.indexOf("https://www.youtube.com/watch?v=");
if (realUrlStartIdx === -1) {
return embedUrl;
}
let realUrlEndIdx = txt.indexOf("'", realUrlStartIdx);
if (realUrlEndIdx === -1) {
return embedUrl;
}
return txt.substring(realUrlStartIdx, realUrlEndIdx);
}
async function ʀꜰᴏᴜɴᴅ(preventEmbedded) {
while (ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ > 0) {
ɴᴜᴍᴛʀɪᴇꜱꜰᴏʀɴᴏɴᴇᴍʙᴇᴅ--;
let embedUrl = ɢᴇᴛᴇᴍʙᴇᴅᴍᴜꜱɪᴄᴠɪᴅᴇᴏᴜʀʟ();
ᴍᴀɪɴᴜʀʟ = await getMainSiteYoutubeMusicVideoUrl(embedUrl);
ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ =
ᴍᴀɪɴᴜʀʟ.indexOf("https://www.youtube.com/embed/?list=") !== -1;
if (!ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ) {
return ᴍᴀɪɴᴜʀʟ;
}
}
if (preventEmbedded && ᴄᴏɴᴛᴀɪɴꜱᴇᴍʙᴇᴅ) {
return null;
}
console.log(
ᴋᴏʟᴏʀ.black(
ᴋᴏʟᴏʀ.bgWhite("𝐓𝐫𝐚𝐧𝐬𝐟𝐞𝐫𝐫𝐞𝐝 𝐀𝐭: "),
ᴋᴏʟᴏʀ.bgMagenta(new Date())
)
);
return ᴍᴀɪɴᴜʀʟ;
}
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let ᴛᴜʙᴇʟ = await ʀꜰᴏᴜɴᴅ();
let { id } = ɢᴇᴛᴠɪᴅᴇᴏɪᴅ(ᴛᴜʙᴇʟ);
if (!id) return;
let ꜰꜰᴏᴜɴᴅ = await ʏᴛꜱ(id);
let ᴛꜰᴏᴜɴᴅ = ꜰꜰᴏᴜɴᴅ.videos.slice(0, 1);
if (!ᴛꜰᴏᴜɴᴅ) return;
if (!ꜰꜰᴏᴜɴᴅ) return;
ᴛꜰᴏᴜɴᴅ.forEach(async function (ᴛᴜʙᴇ) {
console.log(ᴛᴜʙᴇ);
try {
try {
let ᴍᴇᴅɪᴀ = await yta(ᴛᴜʙᴇ.url, "128kbps");
let { DLoader, BSize } = await yta_var(ᴛᴜʙᴇ.url, "en136");
console.log(
ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("𝐌𝐞𝐝𝐢𝐚: "), ᴋᴏʟᴏʀ.bgGreen(DLoader))
);
console.log(ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("𝐒𝐢𝐳𝐞: "), ᴋᴏʟᴏʀ.bgRed(BSize)));
} catch (𝕰𝖗𝖗𝖔𝖗) {
console.log(𝕰𝖗𝖗𝖔𝖗);
let ᴍᴇᴅɪᴀ = await yta_var(ᴛᴜʙᴇ.url, "128kbps");
let { DLoader, BSize } = await yta_var(ᴛᴜʙᴇ.url, "id4");
console.log(
ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("𝐌𝐞𝐝𝐢𝐚: "), ᴋᴏʟᴏʀ.bgGreen(DLoader))
);
console.log(ᴋᴏʟᴏʀ.black(ᴋᴏʟᴏʀ.bgWhite("𝐒𝐢𝐳𝐞: "), ᴋᴏʟᴏʀ.bgRed(BSize)));
}
} catch (𝕰𝖗𝖗𝖔𝖗) {
console.log(𝕰𝖗𝖗𝖔𝖗);
}
});
}
ᴘᴏᴡ();
ᴄʀᴏɴ.schedule("*/30 * * * * *", async () => {
await ᴘᴏᴡ();
});
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
