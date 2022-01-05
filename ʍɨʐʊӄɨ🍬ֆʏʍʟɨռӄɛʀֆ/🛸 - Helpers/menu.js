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
  async handle(
    ӄʀǟӄɨռʐ,
    chat,
    𝓜𝖎𝖟𝖚ӄ𝖎,
    Needs,
    ꜱɪᴛʀᴀᴘ,
    Clock,
    Ping,
    Timers,
    version
  ) {
    try {
      
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      
      const jsoncool = JSON.parse(
        fs.readFileSync(`./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`)
      );
      await jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender + "_" + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      fs.writeFileSync(
        `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
        JSON.stringify(jsoncool)
      );
      setTimeout(async (error) => {
        if (error) console.log(error);
        await jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender + "_" + 𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
        fs.writeFileSync(
          `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
          JSON.stringify(jsoncool)
        );
      }, 10000);
      
      var MediaUrl = `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎.png`;
      var MainText = `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived}, ${Timers}

┌──────────────★
│🔑 𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│☣️ 𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
│🐙𝐆𝐑𝐎𝐔𝐏: ${_𝔏𝔞𝔟_.HASH}
│🦞𝐆𝐢𝐭𝐡𝐮𝐛: _${ᴋᴇɪ}repo_
└───────〇

┌───────★  𝐒𝐞𝐚𝐫𝐜𝐡
│🔎${ᴋᴇɪ}ytsearch (ꜱᴏɴɢ-ɴᴀᴍᴇ)
│🔎${ᴋᴇɪ}lyrics (ꜱᴏɴɢ-ɴᴀᴍᴇ)
│🔎${ᴋᴇɪ}github (ᴀᴄᴄᴛ-ɴᴀᴍᴇ)
│🔎${ᴋᴇɪ}pinterest (ɪᴍᴀɢᴇ-ɴᴀᴍᴇ)
│🔎${ᴋᴇɪ}weather (ᴄɪᴛʏ-ɴᴀᴍᴇ)
│🔎${ᴋᴇɪ}google (ꜱᴇᴀʀᴄʜ-ᴛᴇʀᴍ)
│🔎${ᴋᴇɪ}wikipedia (ꜱᴇᴀʀᴄʜ-ᴛᴇʀᴍ)
│🔎${ᴋᴇɪ}ud (ꜱᴇᴀʀᴄʜ-ᴛᴇʀᴍ)
│🔎${ᴋᴇɪ}tenor (ɢɪꜰ-ɴᴀᴍᴇ)
│🔎${ᴋᴇɪ}gif (ɢɪꜰ-ɴᴀᴍᴇ)
└───────〇

┌───────★  𝐀𝐧𝐢𝐦𝐞
│🍣${ᴋᴇɪ}anime 
│🍣${ᴋᴇɪ}ranimewall 
│🍣${ᴋᴇɪ}smile 
│🍣${ᴋᴇɪ}yes
│🍣${ᴋᴇɪ}bite
│🍣${ᴋᴇɪ}blush
│🍣${ᴋᴇɪ}bored
│🍣${ᴋᴇɪ}confused
│🍣${ᴋᴇɪ}cry
│🍣${ᴋᴇɪ}goodnight
│🍣${ᴋᴇɪ}happy
│🍣${ᴋᴇɪ}hi5
│🍣${ᴋᴇɪ}poke
│🍣${ᴋᴇɪ}sad
│🍣${ᴋᴇɪ}thinking
│🍣${ᴋᴇɪ}cuddle
│🍣${ᴋᴇɪ}hug
│🍣${ᴋᴇɪ}pat
│🍣${ᴋᴇɪ}slap 
│🍣${ᴋᴇɪ}wink
│🍣${ᴋᴇɪ}angry
│🍣${ᴋᴇɪ}baka
│🍣${ᴋᴇɪ}bonk
│🍣${ᴋᴇɪ}bully
│🍣${ᴋᴇɪ}bye
│🍣${ᴋᴇɪ}chase
│🍣${ᴋᴇɪ}cheer
│🍣${ᴋᴇɪ}cringe
│🍣${ᴋᴇɪ}dab
│🍣${ᴋᴇɪ}dance
│🍣${ᴋᴇɪ}die
│🍣${ᴋᴇɪ}facepalm
│🍣${ᴋᴇɪ}feed
│🍣${ᴋᴇɪ}glomp
│🍣${ᴋᴇɪ}hold
│🍣${ᴋᴇɪ}hate
│🍣${ᴋᴇɪ}hi
│🍣${ᴋᴇɪ}kill
│🍣${ᴋᴇɪ}laugh
│🍣${ᴋᴇɪ}lick
│🍣${ᴋᴇɪ}love
│🍣${ᴋᴇɪ}lurk
│🍣${ᴋᴇɪ}nervous
│🍣${ᴋᴇɪ}nope
│🍣${ᴋᴇɪ}nom
│🍣${ᴋᴇɪ}nuzzle
│🍣${ᴋᴇɪ}panic
│🍣${ᴋᴇɪ}peck
│🍣${ᴋᴇɪ}pout
│🍣${ᴋᴇɪ}run
│🍣${ᴋᴇɪ}sip
│🍣${ᴋᴇɪ}shoot
│🍣${ᴋᴇɪ}shrug
│🍣${ᴋᴇɪ}sleep
│🍣${ᴋᴇɪ}smug
│🍣${ᴋᴇɪ}stab
│🍣${ᴋᴇɪ}stare
│🍣${ᴋᴇɪ}tease
│🍣${ᴋᴇɪ}tickle
│🍣${ᴋᴇɪ}thumbsup
│🍣${ᴋᴇɪ}triggered
│🍣${ᴋᴇɪ}wag
└───────〇

┌───────★  𝐅𝐅𝐦𝐩𝐞𝐠
│🗂️${ᴋᴇɪ}tomp3 (ʀᴇᴘʟʏ-ᴠɪᴅᴇᴏ)
│🗂️${ᴋᴇɪ}img2url (ʀᴇᴘʟʏ-ɪᴍɢ)
│🗂️${ᴋᴇɪ}ocr (ʀᴇᴘʟʏ-ɪᴍɢ)
│🗂️${ᴋᴇɪ}sticker (ʀᴇᴘʟʏ-ɪᴍɢ/ᴠɪᴅᴇᴏ/ɢɪꜰ)
│🗂️${ᴋᴇɪ}carbon (ᴛᴇxᴛ) (ᴛʜᴇᴍᴇ)
└───────〇

┌───────★  𝐊𝐢𝐧𝐠/𝐎𝐰𝐧𝐞𝐫
│🐙${ᴋᴇɪ}dyno
│🐙${ᴋᴇɪ}ban
│🐙${ᴋᴇɪ}unban
│🐙${ᴋᴇɪ}broadcast
│🐙${ᴋᴇɪ}bugreport
│🐙${ᴋᴇɪ}help 
│🐙${ᴋᴇɪ}mizuki
│🐙${ᴋᴇɪ}reboot
│🐙${ᴋᴇɪ}broadcast
│🐙${ᴋᴇɪ}leave
│🐙${ᴋᴇɪ}spam (ᴀᴍᴏᴜɴᴛ) (ᴛᴇxᴛ)
└───────〇

┌───────★  𝐆𝐫𝐨𝐮𝐩𝐬/𝐀𝐝𝐦𝐢𝐧𝐬
│🔰${ᴋᴇɪ}promote (ʀᴇᴘʟʏ)
│🔰${ᴋᴇɪ}demote (ʀᴇᴘʟʏ)
│🔰${ᴋᴇɪ}invite
│🔰${ᴋᴇɪ}lock (ᴀᴍᴏᴜɴᴛ) (ʜ/ᴍ/ꜱ)
│🔰${ᴋᴇɪ}unlock 
│🔰${ᴋᴇɪ}admins
│🔰${ᴋᴇɪ}groupdp
│🔰${ᴋᴇɪ}kick (ʀᴇᴘʟʏ)
│🔰${ᴋᴇɪ}getdesc
│🔰${ᴋᴇɪ}getdp
│🔰${ᴋᴇɪ}tagall (ᴛᴇxᴛ)
│🔰${ᴋᴇɪ}setwelcome (ᴛᴇxᴛ)/(ᴏꜰꜰ)/(ᴅᴇʟᴇᴛᴇ)
│🔰${ᴋᴇɪ}antilink (ᴏɴ)/(ᴏꜰꜰ)
└───────〇

┌───────★  𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫𝐬
│📥 ${ᴋᴇɪ}instagram (ʟɪɴᴋ)
│📥 ${ᴋᴇɪ}play (ꜱᴏɴɢ-ɴᴀᴍᴇ)
│📥 ${ᴋᴇɪ}ytaudio (ʟɪɴᴋ)
│📥 ${ᴋᴇɪ}tiktokaudio (ʟɪɴᴋ)
│📥 ${ᴋᴇɪ}watch (ᴠɪᴅᴇᴏ-ɴᴀᴍᴇ) 
│📥 ${ᴋᴇɪ}ytvideo (ʟɪɴᴋ)
│📥 ${ᴋᴇɪ}tiktokvideo (ʟɪɴᴋ)
└───────〇

┌───────★  𝐑𝐚𝐧𝐝𝐨𝐦𝐬
│🦄${ᴋᴇɪ}joke
│🦄${ᴋᴇɪ}meme
│🦄${ᴋᴇɪ}translate (ᴛᴇxᴛ) (ᴛʀ-ᴄᴏᴅᴇ)
│🦄${ᴋᴇɪ}tts (ᴛᴇxᴛ) (ʟɴ-ᴄᴏᴅᴇ)
└───────〇

┌──────────────★ 𝐇𝐮𝐦𝐚𝐧 𝐍𝐒𝐅𝐖
│🥃• ${ᴋᴇɪ}4k
│🥃• ${ᴋᴇɪ}blowjob
│🥃• ${ᴋᴇɪ}milf
│🥃• ${ᴋᴇɪ}milk
│🥃• ${ᴋᴇɪ}pussy
│🥃• ${ᴋᴇɪ}slut
│🥃• ${ᴋᴇɪ}tikporn
└───────〇

┌───────★  𝐇𝐞𝐧𝐭𝐚𝐢 𝐍𝐒𝐅𝐖
│🍄${ᴋᴇɪ}porn
│🍄${ᴋᴇɪ}ass  
│🍄${ᴋᴇɪ}bdsm  
│🍄${ᴋᴇɪ}cum  
│🍄${ᴋᴇɪ}doujin 
│🍄${ᴋᴇɪ}feet  
│🍄${ᴋᴇɪ}femdom  
│🍄${ᴋᴇɪ}foxgirl  
│🍄${ᴋᴇɪ}glasses  
│🍄${ᴋᴇɪ}rhentai
│🍄${ᴋᴇɪ}maid  
│🍄${ᴋᴇɪ}masturbation 
│🍄${ᴋᴇɪ}netorare  
│🍄${ᴋᴇɪ}orgy 
│🍄${ᴋᴇɪ}panties  
│🍄${ᴋᴇɪ}pussy 
│🍄${ᴋᴇɪ}school  
│🍄${ᴋᴇɪ}tentacles 
│🍄${ᴋᴇɪ}thighs
│🍄${ᴋᴇɪ}uniform
│🍄${ᴋᴇɪ}yuri
└───────〇`;
      return Mizuki_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        MainText,
        MediaUrl
      ).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      
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