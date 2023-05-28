//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, update, store) => {
  try {
    if (!ꪜᴏxʙᴏᴛ.args.join(" ")) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} manga-name_`
      );
    }

    let json;
    try {
      let res = await ꪜᴏxʙᴏᴛ.fetch(
        API(`https://some-random-api.ml`, `/pokedex`, {
          pokemon: ꪜᴏxʙᴏᴛ.args.join(" "),
        })
      );
      json = await res.json();
    } catch {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _No Such Pokemon available!_`
      );
    }

    pokemon.configure({ apiKey: "123abc" });
    await pokemon.card
      .all({ q: `name:${ꪜᴏxʙᴏᴛ.args.join(" ")}` })
      .then(async (card) => {
        return await ꪜᴏxʙᴏᴛ.imgB(
          ꪜᴏxʙᴏᴛ,
          ᴠᴏxᴄ,
          `💫 *Name:* ${json.name}
〽️ *Pokedex ID:* ${json.id}
🎀 *Type:* ${json.type}
🐞 *Species*: ${json.species}
📛 *Abilities:* ${json.abilities}
🔆 *Height:* ${json.height}
⚖ *Weight:* ${json.weight}
🌟 *Base Experience:* ${json.base_experience}
♀️ *Geder*: ${json.gender}
★ *Egg Groups*: ${json.egg_groups}

🌽𝐒𝐓𝐀𝐓𝐈𝐒𝐓𝐈𝐂𝐒
✳ *HP:* ${json.stats.hp}
⚔ *Attack:* ${json.stats.attack}
🔰 *Defense:* ${json.stats.defense}
☄ *Special Attack:* ${json.stats.sp_atk}
🛡 *Special Defense:* ${json.stats.sp_def}
🎐 *Speed:* ${json.stats.speed}
🍯 *Total*: ${json.stats.total}

🌶️𝐅𝐀𝐌𝐈𝐋𝐘
🌸 *Evolved Stage:* ${json.family.evolutionStage}
💮 *Evolved Line:* ${json.family.evolutionLine}
🪐 *Generation:* ${json.generation}


💬 *Summary:* ${json.description}
🛍️ *Card Market:* ${card[0].cardmarket.url}
🧀 *TGC Player:* ${card[0].tcgplayer.url}
`.trim(),
          card[0].images.large
        );
      });
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
  }
};
