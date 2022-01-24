(async () => {
  require(`./Sakura🛰️Server/konfs`);
  const fetch = require(`node-fetch`);
  const { PokeList } = require("./Sakura🛰️Server/pokelist");
  let poke = PokeList[Math.floor(Math.random() * PokeList.length)];
  console.log(`https://i.some-random-api.ml/pokemon/${poke}.png`);
  let res = await fetch(
    API(`https://some-random-api.ml`, `/pokedex`, {
      pokemon: poke,
    })
  );
  let json = await res.json();
  var PokeInfo = `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},

╔════◇🍩𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧
║ ${json.description}
╚════════════╝

╔════◇🌿
║ 𝗡𝗮𝗺𝗲: _${json.name}_
║ 𝗧𝘆𝗽𝗲: _${json.type}_
║ 𝗦𝗽𝗲𝗰𝗶𝗲𝘀: _${json.species}_
║ 𝗔𝗯𝗶𝗹𝗶𝘁𝗲𝘀: _${json.abilities}_
║ 𝗕𝗮𝘀𝗲 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲: _${json.base_experience}_
║ 𝗚𝗲𝗻𝗱𝗲𝗿: _${json.gender}_
╚════════════╝



🔺𝙏𝙤 𝙇𝙚𝙖𝙧𝙣 𝙈𝙤𝙧𝙚 𝙋𝙧𝙚𝙨𝙨 𝘽𝙚𝙡𝙤𝙬 𝘽𝙪𝙩𝙩𝙤𝙣👇🏻
`.trim();
  console.log(PokeInfo);
})();
