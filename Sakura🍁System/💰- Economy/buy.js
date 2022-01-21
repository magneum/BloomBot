`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|`;
`|🍁|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Economy = require(`../../Sakura🍃Goose/economy`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const Bagde = require("../../Sakura🍃Goose/Badge");
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require("parse-ms");
var path = require(`path`);
const fs = require(`fs`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
//|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}buy* [item]`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = ֆǟӄʊʀǟ.sender;
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `@${ꜱᴇɴᴅᴇʀeceived}, ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!`
        );
      }
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      const hold = require("../../Sakura🛰️Server/Hold");
      hold.Hold(ֆǟӄʊʀǟ);
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      var Item;
      var NewLimit;
      var ItemPrice;
      const BadgeCatelog = [
        "🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ",
        "🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ",
        "🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ",
        "💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ",
        "💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ",
      ];
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      if (Needs.length === 0) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          ꜱᴇɴᴅᴇʀɪᴅ,
          ꜱᴇɴᴅᴇʀeceived,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      } else if (Needs[0] === "basic" || Needs[0] === "Basic") {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🍁𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍁

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: That item is Free!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
╚════════════╝`
        );
      } else if (Needs[0] === "bronze" || Needs[0] === "Bronze") {
        Item = "🥉ʙʀᴏɴᴢᴇ-20ᴄᴏᴍᴍᴀɴᴅꜱ";
        ItemPrice = 20000;
        NewLimit = 20;
      } else if (Needs[0] === "silver" || Needs[0] === "Silver") {
        Item = "🥈ꜱɪʟᴠᴇʀ-40ᴄᴏᴍᴍᴀɴᴅꜱ";
        ItemPrice = 40000;
        NewLimit = 40;
      } else if (Needs[0] === "gold" || Needs[0] === "Gold") {
        Item = "🥇ɢᴏʟᴅ-60ᴄᴏᴍᴍᴀɴᴅꜱ";
        ItemPrice = 60000;
        NewLimit = 60;
      } else if (Needs[0] === "platinum" || Needs[0] === "Platinum") {
        Item = "💍ᴘʟᴀᴛɪɴᴜᴍ-80ᴄᴏᴍᴍᴀɴᴅꜱ";
        ItemPrice = 80000;
        NewLimit = 80;
      } else if (Needs[0] === "diamond" || Needs[0] === "Diamond") {
        Item = "💎ᴅɪᴀᴍᴏɴᴅ-100ᴄᴏᴍᴍᴀɴᴅꜱ";
        ItemPrice = 100000;
        NewLimit = 100;
      } else {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*@${ꜱᴇɴᴅᴇʀeceived}, Items Available in Store are below!*

╔═══⬡ 🏷️𝐁𝐚𝐝𝐠𝐞
║🧵Basic
║🥉Bronze
║🥈Silver
║🥇Gold
║💍Platinum
║💎Diamond
╚════════════╝

╔═══⬡ 🛸𝐄𝐜𝐨𝐧𝐨𝐦𝐲
║ _coming soon!_
╚════════════╝`,
          `./Sakura☣️Reactor/ֆǟӄʊʀǟ_Store.png`
        );
      }
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
      console.log(
        "Item: " +
          Item +
          " |NewLimit: " +
          NewLimit +
          " |ItemPrice: " +
          ItemPrice
      );
      await Economy.findOne(
        {
          ID: ꜱᴇɴᴅᴇʀɪᴅ,
        },
        async (ℓαвєяяσя, userEco) => {
          if (ℓαвєяяσя) return ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
          await Bagde.findOne(
            {
              ID: ꜱᴇɴᴅᴇʀɪᴅ,
            },
            async (ℓαвєяяσя, userBadge) => {
              console.log(
                "👇🏽‍  ⬡================== 🛸𝐄𝐜𝐨𝐧𝐨𝐦𝐲🛸 ==================⬡  👇🏽‍"
              );
              console.log(userEco);
              console.log(userBadge);
              console.log(
                "👆🏽‍  ⬡================== 🏷️𝐁𝐚𝐝𝐠𝐞🏷️==================⬡  👆🏽‍"
              );
              if (ℓαвєяяσя) return ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
              if (!userEco) {
                var newEcoUser = new Economy({
                  ID: ꜱᴇɴᴅᴇʀɪᴅ,
                  money: 0,
                  daily: 0,
                  timeout: 0,
                  fish: 0,
                  fishdone: 0,
                  fishtimeout: 0,
                  workdone: 0,
                  worktimeout: 0,
                });
                newEcoUser
                  .save()
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                  );
                return Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `🍁𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍁

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: You Are Broke! 
║💼 𝗘𝗮𝗿𝗻: read ${ᴋᴇɪ}ecomenu.
║🧀 𝗜𝘁𝗲𝗺: ${Item}
║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: ${ItemPrice} coins
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
╚════════════╝`
                );
              } else if (!userBadge) {
                var newBagdeUser = new Bagde({
                  ID: ꜱᴇɴᴅᴇʀɪᴅ,
                  Badge: "🧵ʙᴀꜱɪᴄ-10ᴄᴏᴍᴍᴀɴᴅꜱ",
                  value: "True",
                  Limits: 10,
                  CurrentLimitTime: 0,
                  PermanentLimitTime: 0,
                });
                newBagdeUser
                  .save()
                  .catch((ℓαвєяяσя) =>
                    ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                  );
                return Sakura_Buttons.MTB(
                  ӄʀǟӄɨռʐ,
                  chat,
                  ֆǟӄʊʀǟ,
                  `🍁𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍁
  
  ╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
  ║❌ 𝗘𝗿𝗿𝗼𝗿: You Are Broke! 
  ║💼 𝗘𝗮𝗿𝗻: read ${ᴋᴇɪ}ecomenu.
  ║🧀 𝗜𝘁𝗲𝗺: ${Item}
  ║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: ${ItemPrice} coins
  ║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
  ║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
  ╚════════════╝`
                );
              } else {
                if (userEco.money < ItemPrice) {
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🍁𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍁

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: You Are Broke! 
║💼 𝗘𝗮𝗿𝗻: read ${ᴋᴇɪ}ecomenu.
║🧀 𝗜𝘁𝗲𝗺: ${Item}
║🪙 𝗜𝘁𝗲𝗺_𝗣𝗿𝗶𝗰𝗲: ${ItemPrice} coins
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money} coins
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
╚════════════╝`
                  );
                }
                if (BadgeCatelog.includes(Item) && userBadge.Badge === Item) {
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🍁𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍁

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: You Already Have That Item!
║🧀 𝗜𝘁𝗲𝗺: ${Item}
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
╚════════════╝`
                  );
                }
                if (
                  userEco.money > ItemPrice &&
                  BadgeCatelog.includes(Item) &&
                  NewLimit > 0
                ) {
                  userEco.money = userEco.money - ItemPrice;
                  userBadge.Limits = NewLimit;
                  userBadge.Badge = Item;
                  await userEco
                    .save()
                    .catch((ℓαвєяяσя) =>
                      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                    );
                  await userBadge
                    .save()
                    .catch((ℓαвєяяσя) =>
                      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                    );
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `🍁𝐒𝐚𝐤𝐮𝐫𝐚🏦𝐁𝐚𝐧𝐤🍁

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🥳 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬: Transaction Complete!
║🧀 𝗜𝘁𝗲𝗺: ${Item}
║💰 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: ${userEco.money} coins
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${ꜱᴇɴᴅᴇʀeceived}
╚════════════╝`
                  );
                }
              }
            }
          );
        }
      );
      //|🍁  ⬡===========================================|  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™  |===========================================⬡  🍁|
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`|🍁|`;
`|🍁|`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍁|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍁|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
