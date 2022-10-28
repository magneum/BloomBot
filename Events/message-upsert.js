("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
module.exports = async (update, νℓкуяє, νkmake, store, νℓpage) => {
system = require("fs");
Spinnies = require("spinnies");
spinner = {
interval: 80,
frames: ["◜", "◟", "◝", "◞", "◠", "◡", "⧬", "⧭", "⧬", "⧭"],
};
spinnies = new Spinnies({
color: "cyan",
succeedColor: "green",
spinner: spinner,
});
// spinnies.add("νℓкуяє", {
// text: "🛰️...",
// });
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
νTēxt = update.messages[0];
if (!νTēxt.message) return;
νTēxt.message =
Object.keys(νTēxt.message)[0] === "ephemeralMessage"
? νTēxt.message.ephemeralMessage.message
: νTēxt.message;
if (νTēxt.key && νTēxt.key.remoteJid === "status@broadcast") return;
if (!νℓкуяє.public && !νTēxt.key.fromMe && update.type === "notify") return;
if (νTēxt.key.id.startsWith("BAE5") && νTēxt.key.id.length === 16) return;
νℓcнαт = await νkmake(νℓкуяє, νTēxt, store);
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
await require("../Core/νc໐rē.js")(
νℓкуяє,
νℓcнαт,
update,
store,
spinnies,
νℓpage,
async (coreback) => {
gcMetaData = νℓcнαт.isGroup
? await νℓкуяє.groupMetadata(νℓcнαт.chat).catch((e) => {})
: "";
gcName = gcMetaData.subject || "no_subject";
gcOwner = gcMetaData.owner.split("@")[0] || "Unknown";
gcDescprition = gcMetaData.desc.toString() || "no description";
gcParticipants = νℓcнαт.isGroup ? await gcMetaData.participants : "";
gcAdmins = νℓcнαт.isGroup
? await gcParticipants.filter((v) => v.admin !== null).map((v) => v.id)
: "";
gcAdminCheck = νℓcнαт.isGroup ? gcAdmins.includes(νℓcнαт.sender) : false;
gcCreadted = require("moment")(
new Date(parseInt(gcMetaData.creation) * 1000)
).format("DD MMM YYYY HH:mm:ss");
try {
puser = await νℓкуяє.profilePictureUrl(νℓcнαт.sender, "image");
} catch {
puser = "https://i.postimg.cc/TPLYb38J/image.png";
}
try {
pgroup = await νℓкуяє.profilePictureUrl(νℓcнαт.chat, "image");
} catch {
pgroup = "https://i.postimg.cc/TPLYb38J/image.png";
}
Today = new Date();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
console_page = `<!DOCTYPE html>
<html>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
<style>
hr.new1 {
border-top: 1px solid rgb(167, 18, 18);
}

hr.new2 {
border-top: 1px dashed rgb(146, 18, 18);
}

hr.new3 {
border-top: 1px dotted #641010;
}

hr.new4 {
border: 1px solid rgb(77, 12, 12);
}

hr.new5 {
border: 10px solid rgb(9, 53, 9);
border-radius: 5px;
}

p {
font-size: 14px;
color: #a5a5a5;
}

mark.red {
color: #c5c5c5;
background: rgb(92, 20, 20);
border-radius: 2px;
font-weight: bold;
}

mark.gry {
color: #bbbbbb;
background: rgb(90, 90, 90);
border-radius: 4px;
}

hr {
display: block;
margin-top: 0.5em;
margin-bottom: 0.5em;
margin-left: auto;
margin-right: auto;
border-style: inset;
border-width: 1px;
border-color: red;
}
/* ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"); */
</style>
<head>
<title>☊Vlkyre Whatsapp Bot</title>
<meta charset="UTF-8" />
<meta http-equiv="refresh" content="8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="https://cdn.tailwindcss.com"></script>
</head>
<img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=rgb(63, 13, 13)"
alt="KryKnz" />
<img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=red"
alt="KryKnz" />
<!-- ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"); -->
<body style="background-color: #202020">
<header class="text-white body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
<nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"></nav>
<a
class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
<span class="ml-3 text-xl xl:block lg:hidden" size="20px">🕊️ Ѷ𝖑𝐤𝐲𝖗𝖊 ☊ 𝐁𝐨𝐭🕊️</span>
</a>
<div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
<button onclick="window.location.href='https://github.com/KryKnz'"
class="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
💡GitHub
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="5" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
<button onclick="window.location.href='https://github.com/Kryknz/Vlkyre'"
class="inline-flex items-center bg-white text-red-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
🦋Repo
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="5" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</header>
<section class="text-white body-font">
<div class="container px-5 py-24 mx-auto">
<div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
<path
d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
</path>
</svg>
<p class="leading-relaxed text-lg">
<mark class="red"><b></b>⌬</b></mark>Vlkyre is an Advance Whatsapp User-Bot With Over 100+
Commands Including Group Moderation, Social, Federation and more.
<br>
<mark class="red"><b></b>⌬</b></mark>To Check What Vlkyre Offers Just Join Any Below Groups.
<br>
</p>
</p>
<hr style="height:1px;border-top:1px solid rgb(255, 255, 255)" />
<span class="inline-block h-1 w-10 rounded bg-red-800 mt-8 mb-6"></span>
<h2 class="text-red-500 font-medium title-font tracking-wider text-sm">𝐁𝐲 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ 𝐔𝐬𝐢𝐧𝐠 𝐊𝐫𝐲𝐓𝐞𝐤</h2>
<p class="text-gray-400"><i>𝐀𝐥𝐥 𝐑𝐢𝐠𝐡𝐭𝐬 𝐑𝐞𝐬𝐞𝐫𝐯𝐞𝐝</i></p>
</div>
</div>
</section>
<!-- ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"); -->
<section class="text-gray-400 body-font">
<div class="container px-5 py-24 mx-auto">
<div class="flex flex-wrap w-full mb-20">
<div class="lg:w-1/2 w-full mb-6 lg:mb-0">
<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-500">🎐𝐋𝐢𝐯𝐞 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐎𝐟 𝐁𝐨𝐭🎐</h1>
<p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"><I>⚠️Auto refresh in every 8seconds...</I></p>
<div class="h-1 w-20 bg-yellow-500 rounded"></div>
</div>
<p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90"><I>📢Below You Can Check All Information Logged By Vlkyre!</I></p>
</div>
<div class="flex flex-wrap -m-4">
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6" src=${pgroup} alt="content">
<h3 class="tracking-widest text-red-500 text-xs font-medium title-font"><b>🔰 GROUP INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>🧀 Group Name:</b><br>> <I>${gcName}</I></p>
<p class="leading-relaxed text-base"><b>👑 Group Owner:</b><br>> <I>${gcOwner}</I></p>
<p class="leading-relaxed text-base"><b>💬 Group Id:</b><br>> <I>${
νℓcнαт.chat
}</I></p>
<p class="leading-relaxed text-base"><b>⏰ Created On:</b><br>> <I>${gcCreadted}</I></p>
</div>
</div>
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6" src=${puser} alt="content">
<h3 class="tracking-widest text-red-500 text-xs font-medium title-font"><b>🧛🏻‍♂️ USER INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>❣️ User Name:</b><br>> <I>${
νℓкуяє.pushname
}</I></p>
<p class="leading-relaxed text-base"><b>📱 User Number:</b><br>> <I>${
νℓcнαт.sender
}</I></p>
<p class="leading-relaxed text-base"><b>❓ Is User Admin:</b><br>> <I>${gcAdminCheck}</I></p>
</div>
</div>
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6" src="https://i.postimg.cc/YqvyCVj0/Clock-icon.gif" alt="content">
<h3 class="tracking-widest text-red-500 text-xs font-medium title-font"><b>⏰ DATE/TIME INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>⏰ Time:</b><br>> <I>${Today.getHours()}h : ${Today.getMinutes()}m : ${Today.getSeconds()}s</I></p>
<p class="leading-relaxed text-base"><b>🗓️ Date:</b><br>> <I>${Today.getDate()}d : ${
Today.getMonth() + 1
}m : ${Today.getFullYear()}y</I></p>
</div>
</div>
<div class="xl:w-1/4 md:w-1/2 p-4">
<div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
<img class="h-40 rounded w-full object-cover object-center mb-6" src="https://i.postimg.cc/3RpmqXwK/Animation.gif" alt="content">
<h3 class="tracking-widest text-red-500 text-xs font-medium title-font"><b>🖊️ COMMAND INFORMATION CONSOLE</b></h3>
<h2 class="text-lg text-white font-medium title-font mb-4"> </h2>
<p class="leading-relaxed text-base"><b>🖊️ Command Executed:</b><br>> <I>${
νℓкуяє.command
}</I></p>
<p class="leading-relaxed text-base"><b>🍀 Message Body:</b><br>> <I>${
νℓкуяє.budy || νℓкуяє.mtype
}</I></p>
<p class="leading-relaxed text-base"><b>🚦 Execution Status:</b><br>> <I>${coreback}</I></p>
</div>
</div>
</div>
</div>
</section>
<!-- ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"); -->
<hr style="height:1px;border-top:1px solid rgb(255, 255, 255)" />
<footer class="text-gray-400 body-font">
<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
<a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-200">
<span class="ml-3 text-xl">❝ ⒸVLKYRE: Powered By KrakinzLab™ ❞</span>
</a>    
<p class="text-sm text-red-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
<b>Since 2021: </b>
<a href="https://github.com/Kryknz/Vlkyre/blob/KryTek/LICENSE" class="text-gray-500 ml-1"
target="_blank" rel="noopener noreferrer"><I>Licensed Under Apache License Version 2.0</I></a>
</p>
<span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
<a class="text-gray-400">
<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
class="w-5 h-5" viewBox="0 0 24 24">
<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
</svg>
</a>
<a class="ml-3 text-gray-400">
<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
class="w-5 h-5" viewBox="0 0 24 24">
<path
d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
</path>
</svg>
</a>
<a class="ml-3 text-gray-400">
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
</svg>
</a>
<a class="ml-3 text-gray-400">
<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
<path stroke="none"
d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
</path>
<circle cx="4" cy="4" r="2" stroke="none"></circle>
</svg>
</a>
</span>
</div>
</footer>
</body>
</div>
</html>`;
νℓкуяє.νℓpage.get("/Vlkyre-Console-Page", (req, res) => {
res.send(console_page);
});
// spinnies.succeed("νℓкуяє", { text: coreback });
}
);
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
