("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
var mongoose = require("mongoose");
var ClaimSchema = new mongoose.Schema({
Active: String,
GroupIDs: Array,
UserNumber: String,
});
module.exports = mongoose.model("Claim", ClaimSchema);
// require("./└𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/Settings");
// let { PokeList } = require("./└𝐌𝐨𝐝𝐮𝐥𝐞𝐬┘/pokelist");
// const pokemon = require("pokemontcgsdk");
// const CronJob = require("cron").CronJob;
// let Fetch = require("node-fetch");
// const Https = require("https");
// const Fs = require("fs");
// // Executed on every midnight
// var cronJob1 = new CronJob({
// cronTime: "00 00 00 * * * ",
// onTick: async function () {
// console.log(
// "|⬡═══════════════════════|▷ Fetch Any Random Pokemon from Pokedex"
// );
// let PokemonData;
// let BasePoke = PokeList[Math.floor(Math.random() * PokeList.length)];
// try {
// let res = await fetch(
// API("https://some-random-api.ml", "/pokedex", {
// pokemon: BasePoke.toLowerCase(),
// })
// ).catch((Èrrðr) => console.log(Èrrðr));
// PokemonData = await res.json().catch((Èrrðr) => console.log(Èrrðr));
// pokemon.configure({ apiKey: "123abc" });
// // Get The Card Of The Found Pokemon
// await pokemon.card
// .all({ q: `name:${PokemonData.name}` })
// .then(async (card) => {
// // Check All Needed Data Inside Mongodb if Category Not Found
// await ClaimSchema.findOne(
// { Active: "N" || null },
// async (Èrrðr, msTdb) => {
// if (Èrrðr) return console.log(Èrrðr);
// if (!msTdb) {
// let getGroups = await ӄryӄnz.groupFetchAllParticipating();
// let newUser = await new ClaimSchema({
// Active: "Y",
// GroupIDs: getGroups,
// UserNumber: undefined,
// })
// .save()
// .catch((Èrrðr) => console.log(Èrrðr));
// // Fetch all Groups and Store it in an object
// let groups = Object.entries(getGroups)
// .slice(0)
// .map((entry) => entry[1]);
// let sendGroups = groups.map((v) => v.id);
// // Send The Created Pokedex Card
// for (let G of sendGroups) {
// await ӄryӄnz.sendMessage(G, {
// image: {
// url: card[0].images.large,
// },
// mimetype: "image/png",
// fileName: "Pokedex.png",
// caption: `💫 *Name:* ${PokemonData.name}
// 〽️ *Pokedex ID:* ${PokemonData.id}
// 🎀 *Type:* ${PokemonData.type}
// 🐞 *Species*: ${PokemonData.species}
// 📛 *Abilities:* ${PokemonData.abilities}
// 🔆 *Height:* ${PokemonData.height}
// ⚖ *Weight:* ${PokemonData.weight}
// 🌟 *Base Experience:* ${PokemonData.base_experience}
// ♀️ *Geder*: ${PokemonData.gender}
// ★ *Egg Groups*: ${PokemonData.egg_groups}

// 🌽𝐒𝐓𝐀𝐓𝐈𝐒𝐓𝐈𝐂𝐒
// ✳ *HP:* ${PokemonData.stats.hp}
// ⚔ *Attack:* ${PokemonData.stats.attack}
// 🔰 *Defense:* ${PokemonData.stats.defense}
// ☄ *Special Attack:* ${PokemonData.stats.sp_atk}
// 🛡 *Special Defense:* ${PokemonData.stats.sp_def}
// 🎐 *Speed:* ${PokemonData.stats.speed}
// 🍯 *Total*: ${PokemonData.stats.total}

// 🌶️𝐅𝐀𝐌𝐈𝐋𝐘
// 🌸 *Evolved Stage:* ${PokemonData.family.evolutionStage}
// 💮 *Evolved Line:* ${PokemonData.family.evolutionLine}
// 🪐 *Generation:* ${PokemonData.generation}


// 💬 *Summary:* ${PokemonData.description}
// 🛍️ *Card Market:* ${card[0].cardmarket.url}
// 🧀 *TGC Player:* ${card[0].tcgplayer.url}
// `.trim(),
// });
// }
// return;
// }
// }
// );
// });
// } catch (Èrrðr) {
// return console.log(Èrrðr);
// }
// },
// start: true,
// runOnInit: false,
// });
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
// ╔⧉༻ [ Ѷ𝖑𝐤𝐲𝖗𝖊🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Vlkyre was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("|⬡═══════════════════════════════════════════════════════════════| (c)Ѷ𝖑𝐤𝐲𝖗𝖊🕊️ʙʏ🕊️ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════════════════════════⬡|");
