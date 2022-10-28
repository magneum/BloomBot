("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
var fs = require("fs");
var path = require("path");
var sequelize = require("sequelize");
if (fs.existsSync("νℓкуяє.env")) {
require("dotenv").config({ path: "./νℓкуяє.env" });
} else {
require("dotenv");
}
var mod = process.env.mods;
if (!mod) {
mod = "918436686758";
}
global.Browser = process.env.Browser;
global.ShowInfo = process.env.ShowInfo;
global.mods = mod.split(",");
global.mongodb = process.env.mongodb;
global.pgdb = process.env.pgdb;
global.packname = process.env.packname;
global.prefix = process.env.prefix;
global.author = process.env.author;
global.sessionName = process.env.sessionName;
global.timezone = process.env.timezone;
global.name = process.env.name;
global.nameApi = {
nrtm: process.env.nrtm,
dzx: process.env.dzx,
xteam: process.env.xteam,
zahir: process.env.zahir,
zeks: process.env.zeks,
pencarikode: process.env.pencarikode,
LeysCoder: process.env.LeysCoder,
};
global.keyApi = {
"https://api.xteam.xyz": process.env.xteamApi,
"https://zahirr-web.herokuapp.com": process.env.zahirrApi,
"https://api.zeks.xyz": process.env.zeksApi,
"https://pencarikode.xyz": process.env.pencarikodeApi,
"https://leyscoders-api.herokuapp.com": process.env.leyscodersApi,
};
var Log = (value) => {
var log = false;
if (typeof value === "string") {
if (value.toLowerCase() === "true") {
log = console.log;
}
}
return log;
};
process.env.DATABASE_URL =
process.env.DATABASE_URL === undefined
? "./νℓкуяє.db"
: process.env.DATABASE_URL;
global.DATABASE_URL =
process.env.DATABASE_URL === undefined
? "./νℓкуяє.db"
: process.env.DATABASE_URL;
global.DATABASE =
process.env.DATABASE_URL === "./νℓкуяє.db"
? new sequelize.Sequelize({
dialect: "sqlite",
storage: process.env.DATABASE_URL,
lomodsing: Log("false"),
})
: new sequelize.Sequelize(process.env.DATABASE_URL, {
dialect: "postgres",
protocol: "postgres",
lomodsing: Log("false"),
dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});
global.home_page = `<!DOCTYPE html>
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
<!-- <meta http-equiv="refresh" content="8"> -->
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
<section class="text-gray-600 body-font">
<div class="container px-5 py-24 mx-auto">
<div class="flex flex-wrap -m-4">
<div class="p-4 md:w-1/3">
<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
<img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/KzKjcD50/vlkUvar.gif" alt="blog">
<div class="p-6">
<h1 class="tracking-widest text-xs title-font font-medium text-red-600 mb-1"><I><b>made with ❣️ by:</I></b></h1>
<h1 class="title-font text-lg font-medium text-red-600 mb-3">KryKnz</h1>
<p class="leading-relaxed mb-3">Head over to the sub menu of this category.</p>
<div class="flex items-center flex-wrap ">
<button onclick="window.location.href='https://github.com/KryKnz'"
class="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
<I>⚡To Vlkyre Home Page</I>
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="5" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>

<span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>open source
</span>
<span class="text-gray-400 inline-flex items-center leading-none text-sm">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
<div class="p-4 md:w-1/3">
<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
<img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/NFXMjgyG/Type-Writter.gif" alt="blog">
<div class="p-6">
<h1 class="tracking-widest text-xs title-font font-medium text-red-600 mb-1"><I><b>made with ❣️ by:</I></b></h1>
<h1 class="title-font text-lg font-medium text-red-600 mb-3">KryKnz</h1>
<p class="leading-relaxed mb-3">Head over to the sub menu of this category.</p>
<div class="flex items-center flex-wrap">
<button onclick="window.location.href='/Vlkyre-Console-Page'"
class="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
<I>🛩️To Vlkyre Console Page</I>
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="5" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>

<span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>open source
</span>
<span class="text-gray-400 inline-flex items-center leading-none text-sm">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
<div class="p-4 md:w-1/3">
<div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
<img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.postimg.cc/tJdLRfzn/YouTube.gif" alt="blog">
<div class="p-6">
<h1 class="tracking-widest text-xs title-font font-medium text-red-600 mb-1"><I><b>made with ❣️ by:</I></b></h1>
<h1 class="title-font text-lg font-medium text-red-600 mb-3">KryKnz</h1>
<p class="leading-relaxed mb-3">Head over to the sub menu of this category.</p>
<div class="flex items-center flex-wrap ">
<button onclick="window.location.href='https://tinyurl.com/Vlkyre-YouTube'"
class="inline-flex items-center bg-red-900 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0">
<I>⭕To Vlkyre YouTube Channel</I>
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
stroke-width="5" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>

<span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>open source
</span>
<span class="text-gray-400 inline-flex items-center leading-none text-sm">
<svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
</svg>
</span>
</div>
</div>
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
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
/*
╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║ 
║ We won't be responsible for any kind of ban due to this bot.
║ Vlkyre was made for fun purpose and to make group management easier.
║ It's your concern if you spam and gets your account banned.
║ Also, Forks won't be entertained.
║ If you fork this repo and edit plugins, it's your concern for further updates.
║ Forking Repo is fine. But if you edit something we will not provide any help.
║ In short, Fork At Your Own Risk.
╚════════════╝
*/
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
