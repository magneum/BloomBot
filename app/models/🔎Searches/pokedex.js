"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
require("#/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  chatkey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants,
) => {
  try {
    if (!BloomBot.args.join(" ")) {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No query provided!_

*🌻Usage:* 
> _${BloomBot.prefix}${currFile} manga-name_`,
      );
    }

    let json;
    try {
      const res = await BloomBot.fetch(
        API(`some-random-api.ml`, `/pokedex`, {
          pokemon: BloomBot.args.join(" "),
        }),
      );
      json = await res.json();
    } catch {
      await BloomBot.sendMessage(chatkey.chat, {
        react: {
          text: "❌",
          key: chatkey.key,
        },
      });
      return chatkey.reply(
        `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:* 
> _No Such Pokemon available!_`,
      );
    }

    pokemon.configure({ apiKey: "123abc" });
    await pokemon.card
      .all({ q: `name:${BloomBot.args.join(" ")}` })
      .then(async (card) => {
        return await BloomBot.imagebutton(
          BloomBot,
          chatkey,
          `*🌻Hola!* ${currFile} for ${BloomBot.pushname || BloomBot.tagname}
          
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
          card[0].images.large,
        );
      });
  } catch (error) {
    return BloomBot.handlerror(BloomBot, chatkey, error);
  }
};
module.exports.aliases = [];
