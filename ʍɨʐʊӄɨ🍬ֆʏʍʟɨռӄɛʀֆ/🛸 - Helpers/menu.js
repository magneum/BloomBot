// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `menu`,
  description: `ɢᴇᴛ ᴛʜᴇ entire ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping, Timers) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        `🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > ` + FinalName.toUpperCase() + `✔️`
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var MediaUrl = `./ʍɨʐʊӄɨ☣️ƈօʀɛ/𝓜𝖎𝖟𝖚ӄ𝖎.png`;
      var MainText = `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived}, ${Timers}

🍰 𝐆𝐫𝐨𝐮𝐩: ${_𝔏𝔞𝔟_.HASH}

┌───────|  𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧𝙨 |◆➤
│📥 ${ᴋᴇɪ}spotify _(ʟɪɴᴋ)_
│📥 ${ᴋᴇɪ}instagram _(ʟɪɴᴋ)_
│📥 ${ᴋᴇɪ}play _(ꜱᴏɴɢ-ɴᴀᴍᴇ)_
│📥 ${ᴋᴇɪ}song _(ꜱᴏɴɢ-ɴᴀᴍᴇ)_
│📥 ${ᴋᴇɪ}ytaudio _(ʟɪɴᴋ)_
│📥 ${ᴋᴇɪ}tiktokaudio _(ʟɪɴᴋ)_
│📥 ${ᴋᴇɪ}watch _(ᴠɪᴅᴇᴏ-ɴᴀᴍᴇ)_ 
│📥 ${ᴋᴇɪ}stream _(ᴠɪᴅᴇᴏ-ɴᴀᴍᴇ)_ 
│📥 ${ᴋᴇɪ}ytvideo _(ʟɪɴᴋ)_
│📥 ${ᴋᴇɪ}tiktokvideo _(ʟɪɴᴋ)_
└───────〇

┌───────|  𝘼𝙣𝙞𝙢𝙚 |◆➤ 
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

┌───────|  𝙁𝙁𝙈𝙋𝙀𝙂 |◆➤
│🗂️${ᴋᴇɪ}tomp3 _(ʀᴇᴘʟʏ-ᴠɪᴅᴇᴏ)_
│🗂️${ᴋᴇɪ}img2url _(ʀᴇᴘʟʏ-ɪᴍɢ)_
│🗂️${ᴋᴇɪ}ocr _(ʀᴇᴘʟʏ-ɪᴍɢ)_
│🗂️${ᴋᴇɪ}sticker _(ʀᴇᴘʟʏ-ɪᴍɢ/ᴠɪᴅᴇᴏ/ɢɪꜰ)_
│🗂️${ᴋᴇɪ}carbon _(ᴛᴇxᴛ) (ᴛʜᴇᴍᴇ)_
└───────〇

┌───────|  𝙊𝙬𝙣𝙚𝙧 |◆➤
│🐙${ᴋᴇɪ}ban
│🐙${ᴋᴇɪ}unban
│🐙${ᴋᴇɪ}broadcast
│🐙${ᴋᴇɪ}bugreport
│🐙${ᴋᴇɪ}help 
│🐙${ᴋᴇɪ}mizuki
│🐙${ᴋᴇɪ}reboot
│🐙${ᴋᴇɪ}broadcast
│🐙${ᴋᴇɪ}leave
└───────〇

┌───────|  𝙂𝙧𝙤𝙪𝙥𝙨 |◆➤
│🔰${ᴋᴇɪ}promote _(ʀᴇᴘʟʏ)_
│🔰${ᴋᴇɪ}demote _(ʀᴇᴘʟʏ)_
│🔰${ᴋᴇɪ}spam _(ᴀᴍᴏᴜɴᴛ) (ᴛᴇxᴛ)_
│🔰${ᴋᴇɪ}invite
│🔰${ᴋᴇɪ}lock _(ᴀᴍᴏᴜɴᴛ) (ʜ/ᴍ/ꜱ)_
│🔰${ᴋᴇɪ}unlock 
│🔰${ᴋᴇɪ}admins
│🔰${ᴋᴇɪ}disappear _(ᴀᴍᴏᴜɴᴛ) (ʜ/ᴍ/ꜱ)_
│🔰${ᴋᴇɪ}groupdp
│🔰${ᴋᴇɪ}kick _(ʀᴇᴘʟʏ)_
│🔰${ᴋᴇɪ}getdesc
│🔰${ᴋᴇɪ}getdp
│🔰${ᴋᴇɪ}tagall _(ᴛᴇxᴛ)_
│🔰${ᴋᴇɪ}setwelcome _(ᴛᴇxᴛ)/(ᴏꜰꜰ)/(ᴅᴇʟᴇᴛᴇ)_
│🔰${ᴋᴇɪ}antilink _(ᴏɴ)/(ᴏꜰꜰ)_
└───────〇

┌───────|  𝙎𝙚𝙖𝙧𝙘𝙝 |◆➤
│🔎${ᴋᴇɪ}ytsearch _(ꜱᴏɴɢ-ɴᴀᴍᴇ)_
│🔎${ᴋᴇɪ}lyrics _(ꜱᴏɴɢ-ɴᴀᴍᴇ)_
│🔎${ᴋᴇɪ}github _(ᴀᴄᴄᴛ-ɴᴀᴍᴇ)_
│🔎${ᴋᴇɪ}pinterest _(ɪᴍᴀɢᴇ-ɴᴀᴍᴇ)_
│🔎${ᴋᴇɪ}weather _(ᴄɪᴛʏ-ɴᴀᴍᴇ)_
│🔎${ᴋᴇɪ}wallpaper _(ɪᴍᴀɢᴇ-ɴᴀᴍᴇ)_
│🔎${ᴋᴇɪ}google _(ꜱᴇᴀʀᴄʜ-ᴛᴇʀᴍ)_
│🔎${ᴋᴇɪ}wikipedia _(ꜱᴇᴀʀᴄʜ-ᴛᴇʀᴍ)_
│🔎${ᴋᴇɪ}ud _(ꜱᴇᴀʀᴄʜ-ᴛᴇʀᴍ)_
│🔎${ᴋᴇɪ}tenor _(ɢɪꜰ-ɴᴀᴍᴇ)_
│🔎${ᴋᴇɪ}gif _(ɢɪꜰ-ɴᴀᴍᴇ)_
└───────〇

┌───────|  𝙁𝙪𝙣𝙨 |◆➤
│🦄${ᴋᴇɪ}joke
│🦄${ᴋᴇɪ}meme
│🦄${ᴋᴇɪ}translate _(ᴛᴇxᴛ) (ᴛʀ-ᴄᴏᴅᴇ)_
│🦄${ᴋᴇɪ}tts _(ᴛᴇxᴛ) (ʟɴ-ᴄᴏᴅᴇ)_
└───────〇

┌───────|  𝙋𝙤𝙧𝙣 𝙉𝙎𝙁𝙒 |◆➤
│👅${ᴋᴇɪ}rporn
│👅${ᴋᴇɪ}tikporn
│👅${ᴋᴇɪ}4k
│👅${ᴋᴇɪ}blowjob
│👅${ᴋᴇɪ}slut
│👅${ᴋᴇɪ}milf
│👅${ᴋᴇɪ}milk
│👅${ᴋᴇɪ}pussy
└───────〇

┌───────|  𝙃𝙚𝙣𝙩𝙖𝙞 𝙉𝙎𝙁𝙒 |◆➤
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
└───────〇

┌──────────────◆➤
│🔑 𝐏𝐫𝐞𝐟𝐢𝐱: *${ᴋᴇɪ}*
│👑 𝐎𝐰𝐧𝐞𝐫: _🐙KrakinzKon_
│🍁 𝐀𝐝𝐝 𝐌𝐢𝐳𝐮𝐤𝐢: _${ᴋᴇɪ}request_
│☣️ 𝐋𝐢𝐜𝐞𝐧𝐬𝐞𝐝: Apache License Version 2.0
│🍕 𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣! _many many more_
└───────〇`;
      return Mizuki_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        𝓜𝖎𝖟𝖚ӄ𝖎,
        MainText,
        MediaUrl
      ).catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
