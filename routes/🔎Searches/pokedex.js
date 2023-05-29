//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
//  ║⧉༻ 🤖𝐅𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 Foxbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of Foxbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ Foxbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("#/logger/global");
var presentpath = require("path");
var tempname = presentpath.basename(__filename);
var finalname = tempname.slice(0, -3).toLowerCase();
module.exports = async (Foxbot, Foxchat, gmeta, isAdmin, groupName, isbotAdmin, groupAdmins, participants) => {
  try {
    if (!Foxbot.args.join(" ")) {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No query provided!_

*⚡Usage* 
> _${Foxbot.prefix}${finalname} manga-name_`
      );
    }

    var json;
    try {
      var res = await Foxbot.fetch(
        API(`https://some-random-api.ml`, `/pokedex`, {
          pokemon: Foxbot.args.join(" "),
        })
      );
      json = await res.json();
    } catch {
      await Foxbot.sendMessage(Foxchat.chat, {
        react: {
          text: "❌",
          key: Foxchat.key,
        },
      });
      return Foxchat.reply(
        `*😥Apologies:* _${Foxbot.pushname || Foxbot.Tname}_

*❌Error* 
> _No Such Pokemon available!_`
      );
    }

    pokemon.configure({ apiKey: "123abc" });
    await pokemon.card
      .all({ q: `name:${Foxbot.args.join(" ")}` })
      .then(async (card) => {
        return await Foxbot.imagebutton(
          Foxbot,
          Foxchat,
          `💫 *Name:* ${json.name}
〽️ *Pokedex Id:* ${json.id}
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
    return Foxbot.handlerror(Foxbot, Foxchat, error);
  }
};
