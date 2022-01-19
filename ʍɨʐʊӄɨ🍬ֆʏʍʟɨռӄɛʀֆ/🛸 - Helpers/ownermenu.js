`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
`🍁`;
`🍁`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      const jsoncool = await JSON.parse(
        fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
      );
      await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
      await fs.writeFileSync(
        `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
        await fs.writeFileSync(
          `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
          JSON.stringify(jsoncool)
        );
      }, 15000);
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
      var MediaUrl = `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎.png`;
      var MainText = `✋🏽‍𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 •@${ꜱᴇɴᴅᴇʀeceived}, ${Timers}

╔═════════════🐙 𝐊𝐢𝐧𝐠/𝐎𝐰𝐧𝐞𝐫
║• ${ᴋᴇɪ}dyno: _check heroku usage_
║• ${ᴋᴇɪ}ban: _ban bot in group/user_
║• ${ᴋᴇɪ}unban: _unban bot in group/user_
║• ${ᴋᴇɪ}reboot: _reboot mizuki server_
║• ${ᴋᴇɪ}broadcast: _ꜱᴇɴᴅ ʙʀᴏᴀᴅᴄᴀꜱᴛ ᴍᴇꜱꜱᴀɢᴇꜱ ᴛᴏ ᴀʟʟ ɢʀᴏᴜᴘꜱ/ᴅᴍꜱ ʏᴏᴜ ᴀʀᴇ ɪɴ._
║• ${ᴋᴇɪ}bugreport: _ꜱᴇɴᴅ bug report to devs._
║• ${ᴋᴇɪ}leave: _leave groups with/without sending text._
║• ${ᴋᴇɪ}spam: _spam messsage in group/private_
║• ${ᴋᴇɪ}help: _basic help command_
║• ${ᴋᴇɪ}mizuki: _check mizuki system health config_
║• ${ᴋᴇɪ}update: _update Mizuki bot_
╚════════════╝`;
      return Mizuki_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        MainText,
        MediaUrl
      ).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      `⬡🍁⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`🍁`;
`🍁`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
` (c)爪𝖎𝖟𝖚ӄ𝖎 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!`;
`⬡  ⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
