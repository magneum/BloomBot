const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Economy = require(`../../Sakura🍃Goose/economy`);
const Gamble = require(`../../Sakura🍃Goose/gamble`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const Bagde = require(`../../Sakura🍃Goose/badge`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const ms = require(`parse-ms`);
var path = require(`path`);
const fs = require(`fs`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `*${ᴋᴇɪ}${newScpt}* _red/black/purple money_

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: 🤑Gamble With the AI
║ *Red =* _[1.5x] (normal)_
║ *Black =* _[2x] (hard)_ 
║ *Purple =* _[15x] (rare)_
║❣️ 𝗨𝘀𝗮𝗴𝗲: ${ᴋᴇɪ}${newScpt}  _red/black/purple money_
╚════════════╝`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var ꜱᴇɴᴅᴇʀeceived = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const hold = require(`../../Sakura🛰️Server/Hold`);
      hold.Hold(ֆǟӄʊʀǟ);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (!Needs[0]) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          աɦօֆɛռȶɦǟȶ,
          ꜱᴇɴᴅᴇʀeceived,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (!Needs[1]) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          աɦօֆɛռȶɦǟȶ,
          ꜱᴇɴᴅᴇʀeceived,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      Economy.findOne(
        {
          ID: աɦօֆɛռȶɦǟȶ,
        },
        async (Error, userEco) => {
          if (Error) console.log(Error);
          if (!userEco) {
            var newUser = new Economy({
              ID: աɦօֆɛռȶɦǟȶ,
              money: 0,
              daily: 0,
              timeout: 86400000,
              fishdone: 0,
              fishtimeout: 1800000,
              workdone: 0,
              worktimeout: 900000,
            });
            await newUser
              .save()
              .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            return Sakura_Buttons.MTB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💰 𝗧𝗼𝘁𝗮𝗹 𝗕𝗮𝗹𝗮𝗻𝗰𝗲: Just Opened Your Account!
║🤠 𝗔𝗰𝗰𝗼𝘂𝗻𝘁_𝗛𝗼𝗹𝗱𝗲𝗿: @${personreceived}
╚════════════╝`
            );
          } else {
            `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
            Gamble.findOne(
              {
                ID: աɦօֆɛռȶɦǟȶ,
              },
              async (Error, userGamble) => {
                if (Error) console.log(Error);
                if (!userGamble) {
                  var newUser = new Gamble({
                    ID: աɦօֆɛռȶɦǟȶ,
                    serverID: ֆǟӄʊʀǟ.chatId,
                    Gambledone: 0,
                    Gambletimeout: 300000,
                  });
                  await newUser
                    .save()
                    .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
                  return Sakura_Buttons.MTB(
                    ӄʀǟӄɨռʐ,
                    chat,
                    ֆǟӄʊʀǟ,
                    `*🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},*

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}  
║🤖 *User Added To Database For First Time!*
║🦋 _Try ${ᴋᴇɪ}${defaultnm} Again!_
╚════════════╝`
                  );
                } else {
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  if (
                    userGamble.Gambletimeout -
                      (Date.now() - userGamble.Gambledone) >
                    0
                  ) {
                    let time = ms(
                      userGamble.Gambletimeout -
                        (Date.now() - userGamble.Gambledone)
                    );
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🤑 𝗚𝗮𝗺𝗯𝗹𝗲 𝗖𝗼𝗼𝗹𝗱𝗼𝘄𝗻: _❌You've Recently Gambled!_
║🕐 𝗚𝗮𝗺𝗯𝗹𝗲 𝗔𝗴𝗮𝗶𝗻: ${time.minutes}m ${time.seconds}s
╚════════════╝`
                    );
                  }
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  function isOdd(num) {
                    if (num % 2 == 0) return false;
                    else if (num % 2 == 1) return true;
                  }
                  let Color = Needs[0];
                  let money = parseInt(Needs[1]);
                  let CurrentMoney = userEco.money;
                  let Amount = Math.floor(Math.random() * 10);
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  if (!Color) {
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: *Specify a color!*
║❣️ 𝗨𝘀𝗮𝗴𝗲: ${ᴋᴇɪ}${newScpt}  _red/black/purple money_
╚════════════╝


╔════◇❣️𝐂𝐨𝐥𝐨𝐫𝐬
║ *Red =* _[1.5x] (normal)_
║ *Black =* _[2x] (hard)_ 
║ *Purple =* _[15x] (rare)_
╚════════════╝`
                    );
                  }
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  Color = Color.toLowerCase();
                  if (!money) {
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: _Specify an amount to gamble!_
║❣️ 𝗨𝘀𝗮𝗴𝗲: ${ᴋᴇɪ}${newScpt}  _red/black/purple money_
╚════════════╝`
                    );
                  }
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  if (money > CurrentMoney) {
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: _You are betting more than you have!_
║❣️ 𝗨𝘀𝗮𝗴𝗲: ${ᴋᴇɪ}${newScpt}  _red/black/purple money_
╚════════════╝`
                    );
                  }
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  if (Color == "b" || Color.includes("black")) Color = 0;
                  else if (Color == "r" || Color.includes("red")) Color = 1;
                  else if (Color == "p" || Color.includes("purple")) Color = 2;
                  else
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║❌ 𝗘𝗿𝗿𝗼𝗿: *Specify a color*
║❣️ 𝗨𝘀𝗮𝗴𝗲: ${ᴋᴇɪ}${newScpt}  _red/black/purple money_
╚════════════╝


╔════◇❣️𝐂𝐨𝐥𝐨𝐫𝐬
║ *Red =* _[1.5x] (normal)_
║ *Black =* _[2x] (hard)_ 
║ *Purple =* _[15x] (rare)_
╚════════════╝`
                    );
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  if (Amount == 1 && Color == 2) {
                    money *= 15;
                    userEco.money = userEco.money + money;
                    await userEco
                      .save()
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🟣 𝗘𝗮𝗿𝗻𝗲𝗱: You won ${money} coins.
║⭐ 𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _15x_
╚════════════╝`
                    );
                    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  } else if (isOdd(Amount) && Color == 1) {
                    money = parseInt(money * 1.5);
                    userEco.money = userEco.money + money;
                    await userEco
                      .save()
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🔴 𝗘𝗮𝗿𝗻𝗲𝗱: _You won ${money} coins!_
║⭐ 𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _1.5x_
╚════════════╝`
                    );
                    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                  } else if (!isOdd(Amount) && Color == 0) {
                    money = parseInt(money * 2);
                    userEco.money = userEco.money + money;
                    await userEco
                      .save()
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║⚫ 𝗘𝗮𝗿𝗻𝗲𝗱: _You won ${money} coins!_
║⭐ 𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _2x_
╚════════════╝`
                    );
                  } else {
                    `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                    userEco.money = userEco.money - money;
                    await userEco
                      .save()
                      .catch((Error) =>
                        ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat)
                      );
                    return Sakura_Buttons.MTB(
                      ӄʀǟӄɨռʐ,
                      chat,
                      ֆǟӄʊʀǟ,
                      `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${ꜱᴇɴᴅᴇʀeceived},
╔◇══════════════◇╗
┊ 𝐑𝐮𝐬𝐬𝐢𝐚𝐧🎡𝐑𝐨𝐮𝐥𝐥𝐞𝐭𝐞
┊   🤑𝐆𝐚𝐦𝐛𝐥𝐞𝐫
╚◇══════════════◇╝


╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║💀 𝗥𝗲𝘀𝘂𝗹𝘁: _You lost ${money} coins!_
║⭐ 𝗠𝘂𝗹𝘁𝗶𝗽𝗹𝗶𝗲𝗿: _0x_
╚════════════╝`
                    );
                  }
                  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
                }
              }
            );
          }
        }
      );
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
