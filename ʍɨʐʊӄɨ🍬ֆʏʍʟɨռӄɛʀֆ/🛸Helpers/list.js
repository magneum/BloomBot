// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `list`,
  description: `ɢᴇᴛ ᴛʜᴇ entire ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        { url: `https://i.postimg.cc/wM195MYW/mizuki-main.jpg` },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}bugreport`,
          buttonText: { displayText: `${ᴋᴇɪ}bugreport` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `*𝘽𝙊𝙏 𝙄𝙉 𝘽𝙀𝙏𝘼*
🤖ᴀᴅᴅ ᴍɪᴢᴜᴋɪ ɪɴ ʏᴏᴜʀ ɢʀᴏᴜᴘ: _${ᴋᴇɪ}request_


┌────⭓ ⭕𝙈𝙪𝙨𝙞𝙘
│🔎${ᴋᴇɪ}lyrics _(ꜱᴇᴀʀᴄʜ)_
│🟢${ᴋᴇɪ}spotify _(ᴍᴜꜱɪᴄ-ᴅʟ)_
│🔎${ᴋᴇɪ}ytsearch _(ꜱᴇᴀʀᴄʜ)_
│💡 *𝘠𝘛-𝘈𝘶𝘥𝘪𝘰*
│⭕${ᴋᴇɪ}play _(ᴍᴜꜱɪᴄ-ɴᴀᴍᴇ-ᴅʟ)_
│⭕${ᴋᴇɪ}song _(ᴍᴜꜱɪᴄ-ɴᴀᴍᴇ-ᴅʟ)_
│⭕${ᴋᴇɪ}ytaudio _(ᴍᴜꜱɪᴄ-ʟɪɴᴋ-ᴅʟ)_
│💡 *𝘠𝘛-𝘈𝘶𝘥𝘪𝘰*
│📺${ᴋᴇɪ}watch _(ᴠɪᴅᴇᴏ-ɴᴀᴍᴇ-ᴅʟ)_
│📺${ᴋᴇɪ}stream _(ᴠɪᴅᴇᴏ-ɴᴀᴍᴇ-ᴅʟ)_
│📺${ᴋᴇɪ}ytvideo _(ᴠɪᴅᴇᴏ-ʟɪɴᴋ-ᴅʟ)_
└───────⭓

┌────⭓ 🤩𝘼𝙣𝙞𝙢𝙚 
│🍣${ᴋᴇɪ}anime _(ꜱᴇᴀʀᴄʜ)_
│🍣${ᴋᴇɪ}ranimewall _(ꜱᴇᴀʀᴄʜ)_
│🍣${ᴋᴇɪ}smile _(ɢɪꜰ)_ 
│🍣${ᴋᴇɪ}yes _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}bite _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}blush _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}bored _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}confused _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}cry _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}goodnight _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}happy _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}hi5 _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}poke _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}sad _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}thinking _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}cuddle _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}hug _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}pat _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}slap _(ɢɪꜰ)_ 
│🍣${ᴋᴇɪ}wink _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}angry _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}baka _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}bonk _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}bully _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}bye _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}chase _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}cheer _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}cringe _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}dab _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}dance _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}die _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}facepalm _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}feed _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}glomp _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}hold _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}hate _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}hi _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}kill _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}laugh _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}lick _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}love _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}lurk _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}nervous _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}nope _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}nom _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}nuzzle _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}panic _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}peck _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}pout _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}run _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}sip _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}shoot _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}shrug _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}sleep _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}smug _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}stab _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}stare _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}tease _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}tickle _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}thumbsup _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}triggered _(ɢɪꜰ)_
│🍣${ᴋᴇɪ}wag _(ɢɪꜰ)_
└───────⭓

┌────⭓ 𝙊𝙬𝙣𝙚𝙧-𝙊𝙣𝙡𝙮
│🐙${ᴋᴇɪ}ban
│🐙${ᴋᴇɪ}unban
│🐙${ᴋᴇɪ}update
│🐙${ᴋᴇɪ}broadcast
│🐙${ᴋᴇɪ}unmute _(ʙᴇᴛᴀ)_
│🐙${ᴋᴇɪ}mute _(ʙᴇᴛᴀ)_
│🐙${ᴋᴇɪ}bugreport
│🐙${ᴋᴇɪ}help 
│🐙${ᴋᴇɪ}mizuki
│🐙${ᴋᴇɪ}update
│🐙${ᴋᴇɪ}broadcast _(ʙᴇᴛᴀ)_
└───────⭓

┌────⭓ 👑𝙂𝙧𝙤𝙪𝙥𝙨
│🔰${ᴋᴇɪ}promote <tag>
│🔰${ᴋᴇɪ}demote <tag>
│🔰${ᴋᴇɪ}spam <ammount> <text>
│🔰${ᴋᴇɪ}invite
│🔰${ᴋᴇɪ}admins
│🔰${ᴋᴇɪ}disappear
│🔰${ᴋᴇɪ}groupdp
│🔰${ᴋᴇɪ}kick <tag>
│🔰${ᴋᴇɪ}getdesc
│🔰${ᴋᴇɪ}getdp
│🔰${ᴋᴇɪ}tagall
│🔰${ᴋᴇɪ}setwelcome <text/on/off>
│🔰${ᴋᴇɪ}antilink <on/off>
└───────⭓

┌────⭓ *𝙄𝙢𝙖𝙜𝙚*  ⦿
│🐠${ᴋᴇɪ}pinterest _(ꜱᴇᴀʀᴄʜ)_
│🐠${ᴋᴇɪ}ocr
│🐠${ᴋᴇɪ}sticker
│🐠${ᴋᴇɪ}carbon
└───────⭓

┌────⭓ 🧀𝙁𝙪𝙣𝙨
│🦄${ᴋᴇɪ}google _(ꜱᴇᴀʀᴄʜ)_
│🦄${ᴋᴇɪ}github
│🦄${ᴋᴇɪ}beautycheck
│🦄${ᴋᴇɪ}joke _(ᴛᴇxᴛ)_
│🦄${ᴋᴇɪ}meme _(ɪᴍᴀɢᴇ)_  
│🦄${ᴋᴇɪ}translate
│🦄${ᴋᴇɪ}tts _(ʙᴇᴛᴀ)_ 
│🦄${ᴋᴇɪ}weather _(ʙᴇᴛᴀ)_  
│🦄${ᴋᴇɪ}ud
└───────⭓

┌────⭓ 👅𝙋𝙤𝙧𝙣 𝙉𝙎𝙁𝙒
│👅${ᴋᴇɪ}rporn _(ɢɪꜰ)_
│👅${ᴋᴇɪ}tikporn _(ᴠɪᴅᴇᴏ)_
│👅${ᴋᴇɪ}4k _(ɪᴍᴀɢᴇ)_
│👅${ᴋᴇɪ}blowjob _(ɪᴍᴀɢᴇ)_
│👅${ᴋᴇɪ}slut _(ɪᴍᴀɢᴇ)_
│👅${ᴋᴇɪ}milf _(ɪᴍᴀɢᴇ)_
│👅${ᴋᴇɪ}milk _(ɪᴍᴀɢᴇ)_
│👅${ᴋᴇɪ}pussy _(ɪᴍᴀɢᴇ)_
└───────⭓

┌────⭓ ⭓ 🍄𝙃𝙚𝙣𝙩𝙖𝙞 𝙉𝙎𝙁𝙒
│🍄${ᴋᴇɪ}rporn _(ɢɪꜰ)_
│🍄${ᴋᴇɪ}ass _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}bdsm _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}cum _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}doujin _(ɪᴍᴀɢᴇ)_ 
│🍄${ᴋᴇɪ}feet _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}femdom _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}foxgirl _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}glasses _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}hentai _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}maid _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}masturbation _(ɪᴍᴀɢᴇ)_ 
│🍄${ᴋᴇɪ}netorare _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}orgy _(ɪᴍᴀɢᴇ)_ 
│🍄${ᴋᴇɪ}panties _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}pussy _(ɪᴍᴀɢᴇ)_ 
│🍄${ᴋᴇɪ}school _(ɪᴍᴀɢᴇ)_  
│🍄${ᴋᴇɪ}tentacles _(ɪᴍᴀɢᴇ)_ 
│🍄${ᴋᴇɪ}thighs _(ɪᴍᴀɢᴇ)_
│🍄${ᴋᴇɪ}uniform _(ɪᴍᴀɢᴇ)_
│🍄${ᴋᴇɪ}yuri _(ɪᴍᴀɢᴇ)_
└───────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!
`,
        footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎 ɮօȶ*\n🛰️𝐏𝐢𝐧𝐠: _${Ping.toFixed(
          4
        )}s_\n🛸𝐕𝐞𝐫𝐬𝐢𝐨𝐧: _${vers.vers}_\n📅𝐃𝐚𝐭𝐞: _${Clock}_`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
    } catch (ℓαвєяяσя) {
      await ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(
        "⬡==========================⬡    🍁 " +
          ℓαвєяяσя +
          "🍁    ⬡==========================⬡"
      );
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
