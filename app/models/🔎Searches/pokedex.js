require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    switch (true) {
      case !BloomBot.args.join(" "):
        await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "❌",
            key: Sockey.key,
          },
        });
        return Sockey.reply(
          `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No query provided!_

*🌻Usage:* 
• _${BloomBot.prefix}${currFile} manga-name_`
        );
      default:
        let json;
        try {
          const res = await BloomBot.fetch(
            API(`some-random-api.ml`, `/pokedex`, {
              pokemon: BloomBot.args.join(" "),
            })
          );
          json = await res.json();
        } catch {
          await BloomBot.sendMessage(Sockey.chat, {
            react: {
              text: "❌",
              key: Sockey.key,
            },
          });
          return Sockey.reply(
            `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
• _No Such Pokemon available!_`
          );
        }

        pokemon.configure({ apiKey: "123abc" });
        await pokemon.card
          .all({ q: `name:${BloomBot.args.join(" ")}` })
          .then(async (card) => {
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*🌻Hola!* ${currFile} for ${
                BloomBot.pushname || BloomBot.tagname
              }
          
*💫Name:* ${json.name}
*〽️Pokedex Id:* ${json.id}
*🎀Type:* ${json.type}
*🐞Species*: ${json.species}
*📛Abilities:* ${json.abilities}
*🔆Height:* ${json.height}
*⚖Weight:* ${json.weight}
*🌟Base Experience:* ${json.base_experience}
*♀️Geder*: ${json.gender}
*★Egg Groups*: ${json.egg_groups}

*🌽STATISTICS*
*✳HP:* ${json.stats.hp}
*⚔Attack:* ${json.stats.attack}
*🔰Defense:* ${json.stats.defense}
*☄Special Attack:* ${json.stats.sp_atk}
*🛡Special Defense:* ${json.stats.sp_def}
*🎐Speed:* ${json.stats.speed}
*🍯Total*: ${json.stats.total}

*🌶️FAMILY*
*🌸Evolved Stage:* ${json.family.evolutionStage}
*💮Evolved Line:* ${json.family.evolutionLine}
*🪐Generation:* ${json.generation}


*💬Summary:* ${json.description}
*🛍️Card Market:* ${card[0].cardmarket.url}
*🧀TGC Player:* ${card[0].tcgplayer.url}
`.trim(),
              card[0].images.large
            );
          });
        break;
    }
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
