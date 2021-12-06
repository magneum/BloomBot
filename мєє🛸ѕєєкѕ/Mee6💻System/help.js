// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../ᴍᴇᴇ6/catch");
const speed = require("performance-now");
const ꜱɪɢɴ = require(`../../ᴍᴇᴇ6/ꜱɪɢɴ`);
const os = require("os");
const fs = require("fs");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `help`,
  commandType: "Mee6💻System",
  description: `ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  async handle(υℓтяσηℓιєηт, chat, ᴍᴇᴇ6, Arc, Mee6Sitrep) {
    var Mee6Regex = new RegExp(ꜱɪɢɴ.Mee6IX, "g");
    var Mee6f = /\/\^\[(.*)+\]\/\g/g.exec(Mee6Regex)[1];
    const ULTHELP = `
*⧪➛  𝗠𝗲𝗲𝟲💻𝗦𝘆𝘀𝘁𝗲𝗺*
*⬡${Mee6f}help*  ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
*⬡${Mee6f}ping*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ
*⬡${Mee6f}uptime*  ᴄʜᴇᴄᴋ ᴍᴇᴇ6 ᴜᴘᴛɪᴍᴇ
*⬡${Mee6f}alive*  ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ
⬣
⬣
⬣
*⧪➛  🤩𝗔𝗻𝗶𝗺𝗲*
*⬡${Mee6f}anime*  ꜱᴇᴀʀᴄʜ ᴀɴɪᴍᴇ
*⬡${Mee6f}animewallpaper*  ᴅᴏᴡɴʟᴏᴀᴅ ʜᴅ ᴀɴɪᴍᴇ-ᴡᴀʟʟᴘᴀᴘᴇʀꜱ
⬣
⬣
⬣
*⧪➛  🎼𝗠𝘂𝘀𝗶𝗰* 
*⬡${Mee6f}ytdl*  ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴏɴɢꜱ ᴅɪʀᴇᴄᴛ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ
*⬡${Mee6f}lyrics*  ꜰɪɴᴅ ʟʏʀɪᴄꜱ ᴏꜰ ꜱᴏɴɢꜱ
*⬡${Mee6f}yts*  ɢᴇᴛ ʀᴇᴄᴏᴍᴍᴇɴᴅᴀᴛɪᴏɴꜱ ᴀɴᴅ ʟɪɴᴋꜱ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ
⬣
⬣
⬣
*⧪➛  🎙️𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻*
*⬡${Mee6f}cuddle*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴜᴅᴅʟᴇ ꜱᴛɪᴄᴋᴇʀ
*⬡${Mee6f}hug*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴜɢ ꜱᴛɪᴄᴋᴇʀ
*⬡${Mee6f}pat*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴀᴛ ꜱᴛɪᴄᴋᴇʀ
*⬡${Mee6f}slap*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱʟᴀᴘ ꜱᴛɪᴄᴋᴇʀ
*⬡${Mee6f}wink*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴡɪɴᴋ ꜱᴛɪᴄᴋᴇʀ
••➛    ••➛    ••➛    ••➛    ••➛    ••➛
*⬡${Mee6f}yes*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʏᴇꜱ ɪᴍᴀɢᴇ
*⬡${Mee6f}bite*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙɪᴛᴇ ɪᴍᴀɢᴇ
*⬡${Mee6f}blush*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙʟᴜꜱʜ ɪᴍᴀɢᴇ
*⬡${Mee6f}bored*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙᴏʀᴇᴅ ɪᴍᴀɢᴇ
*⬡${Mee6f}confused*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴏɴꜰᴜꜱᴇᴅ ɪᴍᴀɢᴇ
*⬡${Mee6f}cry*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄʀʏ ɪᴍᴀɢᴇ
*⬡${Mee6f}goodnight*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ɢᴏᴏᴅɴɪɢʜᴛ ɪᴍᴀɢᴇ
*⬡${Mee6f}happy*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴀᴘᴘʏ ɪᴍᴀɢᴇ
*⬡${Mee6f}hi5*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜɪɢʜꜰɪᴠᴇ ɪᴍᴀɢᴇ
*⬡${Mee6f}poke*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴏᴋᴇ ɪᴍᴀɢᴇ
*⬡${Mee6f}sad*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱᴀᴅ ɪᴍᴀɢᴇ
*⬡${Mee6f}thinking*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴛʜɪɴᴋɪɴɢ ɪᴍᴀɢᴇ
⬣
⬣
⬣
*⧪➛  𝐆𝐫𝐨𝐮𝐩𝐬👑𝐀𝐝𝐦𝐢𝐧𝐬* 
*⬡${Mee6f}add*  ᴀᴅᴅ ᴀ ᴘᴇʀꜱᴏɴ ᴛᴏ ᴀ ɢʀᴏᴜᴘ
*⬡${Mee6f}invite*  ᴍᴏᴅᴜʟᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
*⬡${Mee6f}admins*  ᴛᴀɢ ᴀʟʟ ᴀᴅᴍɪɴꜱ ɪɴ ᴀ ɢʀᴏᴜᴘ
*⬡${Mee6f}demote*  ᴅᴇᴍᴏᴛᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*⬡${Mee6f}disappear*  ᴛᴏɢɢʟᴇ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇꜱꜱᴀɢᴇꜱ ɪɴ ɢʀᴏᴜᴘ
*⬡${Mee6f}setgoodbye*  ᴀ ɢᴏᴏᴅʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴡʜᴇɴᴇᴠᴇʀ ꜱᴏᴍᴇᴏɴᴇ ʟᴇᴀᴠᴇꜱ
*⬡${Mee6f}mute*  ᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ꜰᴏʀ ᴀ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴛɪᴍᴇ
*⬡${Mee6f}promote*  ᴘʀᴏᴍᴏᴛᴇ ᴀ ᴍᴇᴍʙᴇʀ ᴛᴏ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*⬡${Mee6f}kick*  ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ
*⬡${Mee6f}groupdp*  ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ɪᴄᴏɴ
*⬡${Mee6f}unmute*  ᴜɴᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
*⬡${Mee6f}setwelcome*  ᴡᴇʟᴄᴏᴍᴇ ɴᴇᴡ ᴍᴇᴍʙᴇʀꜱ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ ᴡɪᴛʜ ᴀ ᴄᴜꜱᴛᴏᴍ ᴍᴇꜱꜱᴀɢᴇ
⬣
⬣
⬣
*⧪➛  🧀𝗙𝘂𝗻* 
*⬡${Mee6f}google*  ꜱᴇᴀʀᴄʜ ᴀɴʏᴛʜɪɴɢ ᴏɴ ɢᴏᴏɢʟᴇ
*⬡${Mee6f}carbon*  ᴄᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ᴏʀ ᴄᴏᴅᴇ ᴛᴏ ᴀ ᴄᴀʀʙᴏɴ ɪᴍᴀɢᴇ
*⬡${Mee6f}pfp*  ɢᴇᴛ ᴅɪꜱᴘʟᴀʏ ᴘɪᴄᴛᴜʀᴇ ᴏꜰ ᴜꜱᴇʀ ɪɴ ᴀ ɢʀᴏᴜᴘ
*⬡${Mee6f}github*  ꜰɪɴᴅ ᴀɴʏ ɢɪᴛʜᴜʙ ᴘʀᴏꜰɪʟᴇ
*⬡${Mee6f}neko*  ᴄᴏᴘʏ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ɴᴇᴋᴏʙɪɴ.ᴄᴏᴍ
*⬡${Mee6f}joke*  ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇꜱ
*⬡${Mee6f}meme*  ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴍᴇᴍᴇꜱ
*⬡${Mee6f}read*  ᴏᴘᴛɪᴄᴀʟ ᴄʜᴀʀᴀᴄᴛᴇʀ ʀᴇᴄᴏɢɴɪᴛɪᴏɴ
*⬡${Mee6f}sticker*  ᴄᴏɴᴠᴇʀᴛ ɪᴍᴀɢᴇ ᴛᴏ ꜱᴛɪᴄᴋᴇʀ
*⬡${Mee6f}tagall*  ᴛᴀɢ ᴇᴠʀʏᴏɴᴇ ɪɴ ᴀ ɢʀᴏᴜᴘ
*⬡${Mee6f}translate*  ʟᴀɴɢᴜᴀɢᴇ ᴛʀᴀɴꜱʟᴀᴛᴏʀ
*⬡${Mee6f}tts*  ᴛᴇxᴛ ᴛᴏ ꜱᴘᴇᴇᴄʜ
*⬡${Mee6f}weather*  ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ ᴅᴀᴛᴀ ᴏꜰ ᴀ ᴘʟᴀᴄᴇꜱ
*⬡${Mee6f}ud*  ᴜʀʙᴀɴ ᴅɪᴄᴛɪᴏɴᴀʀʏ ꜰᴏʀ ᴄʀᴀᴢʏ ᴘᴇᴇᴘꜱ
⬣
⬣
⬣
*⧪➛  🔞𝗡𝗦𝗙𝗪* (private & group-admins!)
*⬡${Mee6f}ass*  ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~
*⬡${Mee6f}bdsm*  ɪꜰ ʏᴏᴜ ᴅᴏɴ'ᴛ ᴋɴᴏᴡ ᴡʜᴀᴛ ɪᴛ ɪꜱ, ꜱᴇᴀʀᴄʜ ɪᴛ ᴜᴘ
*⬡${Mee6f}blowjob*  ʙᴀꜱɪᴄᴀʟʟʏ ᴀɴ ɪᴍᴀɢᴇ ᴏꜰ ᴀ ɢɪʀʟ ꜱᴜᴄᴋɪɴɢ ᴏɴ ᴀ ꜱʜᴀʀᴘ ʙʟᴀᴅᴇ!
*⬡${Mee6f}cum*  ʙᴀꜱɪᴄᴀʟʟʏ ꜱᴛɪᴄᴋʏ ᴡʜɪᴛᴇ ꜱᴛᴜꜰꜰ ᴛʜᴀᴛ ɪꜱ ᴜꜱᴜᴀʟʟʏ ᴍɪʟᴋᴇᴅ ꜰʀᴏᴍ ꜱʜᴀʀᴘɪᴇꜱ
*⬡${Mee6f}doujin*  ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴅᴏᴜᴊɪɴ ᴘᴀɢᴇ ɪᴍᴀɢᴇ!
*⬡${Mee6f}feet*  ꜱᴏ ʏᴏᴜ ʟɪᴋᴇ ꜱᴍᴇʟʟʏ ꜰᴇᴇᴛ ʜᴜʜ?
*⬡${Mee6f}femdom*  ꜰᴇᴍᴀʟᴇ ᴅᴏᴍɪɴᴀᴛɪᴏɴ?
*⬡${Mee6f}foxgirl*  ɢɪʀʟ'ꜱ ᴛʜᴀᴛ ᴀʀᴇ ᴡᴀɴɴᴀʙᴇ ꜰᴏxᴇꜱ, ʏᴇꜱ
*⬡${Mee6f}glasses*  ɢɪʀʟꜱ ᴛʜᴀᴛ ᴡᴇᴀʀ ɢʟᴀꜱꜱᴇꜱ
*⬡${Mee6f}hentai*  ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴠᴀɴɪʟʟᴀ ʜᴇɴᴛᴀɪ ɪᴍᴀɢᴇ~
*⬡${Mee6f}maid*  ᴍᴀɪᴅꜱ, ᴍᴀɪᴅ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ, ʏᴏᴜ ᴋɴᴏᴡ ᴡʜᴀᴛ ᴍᴀɪᴅꜱ ᴀʀᴇ
*⬡${Mee6f}masturbation*  ꜱᴏʟᴏ Qᴜᴇᴜᴇ ɪɴ ᴄꜱɢᴏ! ʟᴏʟ
*⬡${Mee6f}netorare*  ᴡᴏᴡ, ɪ ᴡᴏɴ'ᴛ ᴇᴠᴇɴ Qᴜᴇꜱᴛɪᴏɴ ʏᴏᴜʀ ꜰᴇᴛɪꜱʜᴇꜱ
*⬡${Mee6f}orgy*  ɢʀᴏᴜᴘ ʟᴇᴡᴅ ᴀᴄᴛꜱ
*⬡${Mee6f}panties*  ɪ ᴍᴇᴀɴ... ᴊᴜꜱᴛ ᴡʜʏ? ʏᴏᴜ ʟɪᴋᴇ ᴜɴᴅᴇʀᴡᴇᴀʀ?
*⬡${Mee6f}pussy*  ᴛʜᴇ ɢᴇɴɪᴛᴀʟꜱ ᴏꜰ ᴀ ꜰᴇᴍᴀʟᴇ, ᴏʀ ᴀ ᴄᴀᴛ, ʏᴏᴜ ɢɪᴠᴇ ᴛʜᴇ ᴍᴇᴀɴɪɴɢ
*⬡${Mee6f}school*  ꜱᴄʜᴏᴏʟ ᴜɴɪꜰᴏʀᴍꜱ!~ ʏᴀᴛᴛᴀ~!
*⬡${Mee6f}tentacles*  ɪ'ᴍ ꜱᴏʀʀʏ ʙᴜᴛ, ᴡʜʏ ᴅᴏ ᴛʜᴇʏ ʟᴏᴏᴋ ʟɪᴋᴇ ɪɴᴛᴇꜱᴛɪɴᴇꜱ?
*⬡${Mee6f}thighs*  ᴛʜᴇ ᴛᴏᴘ ᴘᴀʀᴛ ᴏꜰ ʏᴏᴜʀ ʟᴇɢꜱ, ᴠᴇʀʏ ʜᴏᴛ, ɪꜱɴ'ᴛ ɪᴛ?
*⬡${Mee6f}uniform*  ᴍɪʟɪᴛᴀʀʏ, ᴋᴏɴʙɪɴɪ, ᴡᴏʀᴋ, ɴᴜʀꜱᴇ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ!~ ꜱᴇxʏ~
*⬡${Mee6f}yuri*  ɢɪʀʟꜱ ᴏɴ ɢɪʀʟꜱ, ᴀɴᴅ ɢɪʀʟ'ꜱ ᴏɴʟʏ!



⬣⬣⬣⬣⬣⬣⬣⬣⬣⬣⬣⬣⬣⬣
*⧪➛Coming Soon!*

⬡uglycheck
⬡gaycheck
⬡lesbiancheck
⬡handsomecheck
⬡beautycheck
⬡time
⬡rate
⬡
⬡
⬡
⬡




`;
    // ===============================================================================
    // 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
    // ===============================================================================
    if (!Arc[0]) {
      const runtime = function (seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
      };
      uptime = process.uptime();
      timestampe = speed();
      latensie = speed() - timestampe;
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: ꜱɪɢɴ.MEE,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `*⚡𝐌𝐞𝐞𝟔™* | 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 |
⬡=======================⬡
シ︎ 💡𝐏𝐫𝐞𝐟𝐢𝐱: ${Mee6f}
シ︎ 🛰️𝐏𝐢𝐧𝐠: _${latensie.toFixed(2)}s_
シ︎ ⚰️𝐔𝐩𝐓𝐢𝐦𝐞: _${runtime(process.uptime())}_
シ︎ 💻𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: _${os.platform()}_
⬡=======================⬡
${ULTHELP}‍`,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
    var ᴍᴇᴇ6ʍօ = "⤥ 💡𝐂𝐨𝐦𝐦𝐚𝐧𝐝\n";
    var command = Mee6Sitrep.get(Arc[0]);
    if (command) {
      ᴍᴇᴇ6ʍօ += `⤤ *${
        (Mee6f, command.name === undefined ? "Null" : command.name)
      }*

⤥ 🧀𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲 
⤤ *${
        (command.commandType,
        command.commandType === undefined ? "Null" : command.commandType)
      }*

⤥ 🖊️𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 
⤤ *${
        (command.description,
        command.description === undefined ? "Null" : command.description)
      }*`;
      return υℓтяσηℓιєηт
        .sendMessage(
          ᴍᴇᴇ6.chatId,
          {
            url: `https://i.postimg.cc/d0yKmR0t/Mee6.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: ᴍᴇᴇ6ʍօ,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴍᴇᴇ6));
    }
  },
};
// ===============================================================================
// 🎮ᴍᴇᴇ6™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
