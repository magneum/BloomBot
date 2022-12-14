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
require("dotenv");
var fs = require("fs");
var path = require("path");
var chalk = require("chalk");
var monGoose = require("mongoose");
var sequelize = require("sequelize");
if (fs.existsSync(".env")) {
console.log("Found .ENV So Using it as environmental feed-hub....");
require("dotenv").config({ path: __dirname + "/.env" });
}
var mod = process.env.mods;
if (!mod) mod = "918436686758,917430922909";
global.upVersion = process.env.upVersion;
global.ShowLogger = process.env.ShowLogger;
global.ShowInfo = process.env.ShowInfo;
global.mods = mod.split(",");
global.MongoDb = process.env.MongoDb;
global.pgdb = process.env.pgdb;
global.packname = process.env.packname;
global.prefix = process.env.Prefix;
global.author = process.env.author;
global.sessionName = process.env.sessionName;
global.timezone = process.env.timezone;
global.name = process.env.name;
global.upbranch = process.env.upbranch;
global.nameApi = {
nrtm: "https://nurutomo.herokuapp.com",
dzx: "https://api.dhamzxploit.my.id",
xteam: "https://api.xteam.xyz",
zahir: "https://zahirr-web.herokuapp.com",
zeks: "https://api.zeks.xyz",
pencarikode: "https://pencarikode.xyz",
LeysCoder: "https://leyscoders-api.herokuapp.com",
};
global.keyApi = {
"https://api.xteam.xyz": "d90a9e986e18778b",
"https://zahirr-web.herokuapp.com": "zahirgans",
"https://api.zeks.xyz": "apivinz",
"https://pencarikode.xyz": "pais",
"https://leyscoders-api.herokuapp.com": "dappakntlll",
};
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
(async () => {
function ShowRed(Topic, Text) {
let TShow = chalk.hex("#ff6347").bold(Topic);
let Show = chalk.hex("#ed7777").italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
function ShowGreen(Topic, Text) {
let TShow = chalk.hex("#2D5A27").bold(Topic);
let Show = chalk.hex("#849871").italic.bold(Text);
console.log(chalk.black(chalk.bgBlack(TShow)), chalk.black(Show));
}
await monGoose.connect(process.env.MongoDb, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
}).catch((error) => {
ShowRed("❌Error: ", "Unable to Connected with 🍃𝖒𝖔𝖓𝖌𝖔.....");
console.log(error);
process.exit(0);
}).then(ShowGreen("🦋Info: ", "Connected with 🍃𝖒𝖔𝖓𝖌𝖔....."));
})();
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву кяукηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
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
? "νℓкуяє.db"
: process.env.DATABASE_URL;
global.DATABASE_URL =
process.env.DATABASE_URL === undefined
? "νℓкуяє.db"
: process.env.DATABASE_URL;
global.DATABASE =
process.env.DATABASE_URL === "νℓкуяє.db"
? new sequelize.Sequelize({
dialect: "sqlite",
storage: process.env.DATABASE_URL,
logging: Log("false"),
})
: new sequelize.Sequelize(process.env.DATABASE_URL, {
dialect: "postgres",
protocol: "postgres",
logging: Log("false"),
dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});
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
