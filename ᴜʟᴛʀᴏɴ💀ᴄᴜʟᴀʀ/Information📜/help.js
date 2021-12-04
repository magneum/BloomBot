// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ᴜʟᴛʀᴏɴ/UltronSitreper`);
const ℓιєηт = require("../../ᴜʟᴛʀᴏɴ/catch");
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
  name: `help`,
  commandType: "Information📜",
  description: `ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ`,
  async handle(υℓтяσηℓιєηт, chat, ᴜʟᴛʀᴏɴ, Arc, UltronSitrep) {
    var UltronRegex = new RegExp(UltronSitreper.ULTRONIX, "g");
    var Ultronf = /\/\^\[(.*)+\]\/\g/g.exec(UltronRegex)[1];
    const ULTHELP = `
*••••••••••➛  ❓𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻*
*${Ultronf}help -* ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
*${Ultronf}invite -* ᴍᴏᴅᴜʟᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
*${Ultronf}alive -* ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ


*••••••••••➛  🤩𝗔𝗻𝗶𝗺𝗲*
*${Ultronf}anime -* ꜱᴇᴀʀᴄʜ ᴀɴɪᴍᴇ
*${Ultronf}animewallpaper -* ᴅᴏᴡɴʟᴏᴀᴅ ʜᴅ ᴀɴɪᴍᴇ-ᴡᴀʟʟᴘᴀᴘᴇʀꜱ
*more coming!*


*••••••••••➛  🎼𝗠𝘂𝘀𝗶𝗰* 
*${Ultronf}ytdl -* ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴏɴɢꜱ ᴅɪʀᴇᴄᴛ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ
*${Ultronf}lyrics -* ꜰɪɴᴅ ʟʏʀɪᴄꜱ ᴏꜰ ꜱᴏɴɢꜱ
*${Ultronf}yts -* ɢᴇᴛ ʀᴇᴄᴏᴍᴍᴇɴᴅᴀᴛɪᴏɴꜱ ᴀɴᴅ ʟɪɴᴋꜱ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ


*••••••••••➛  🎙️𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻*
*${Ultronf}cuddle -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴜᴅᴅʟᴇ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}hug -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴜɢ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}pat -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴀᴛ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}slap -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱʟᴀᴘ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}wink -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴡɪɴᴋ ꜱᴛɪᴄᴋᴇʀ
••➛    ••➛    ••➛    ••➛    ••➛    ••➛
*${Ultronf}yes -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʏᴇꜱ ɪᴍᴀɢᴇ
*${Ultronf}bite -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙɪᴛᴇ ɪᴍᴀɢᴇ
*${Ultronf}blush -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙʟᴜꜱʜ ɪᴍᴀɢᴇ
*${Ultronf}bored -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙᴏʀᴇᴅ ɪᴍᴀɢᴇ
*${Ultronf}confused -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴏɴꜰᴜꜱᴇᴅ ɪᴍᴀɢᴇ
*${Ultronf}cry -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄʀʏ ɪᴍᴀɢᴇ
*${Ultronf}goodnight -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ɢᴏᴏᴅɴɪɢʜᴛ ɪᴍᴀɢᴇ
*${Ultronf}happy -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴀᴘᴘʏ ɪᴍᴀɢᴇ
*${Ultronf}hi5 -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜɪɢʜꜰɪᴠᴇ ɪᴍᴀɢᴇ
*${Ultronf}poke -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴏᴋᴇ ɪᴍᴀɢᴇ
*${Ultronf}sad -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱᴀᴅ ɪᴍᴀɢᴇ
*${Ultronf}thinking -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴛʜɪɴᴋɪɴɢ ɪᴍᴀɢᴇ


*••••••••••➛  👑𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻* _(only groups)
*${Ultronf}add -* ᴀᴅᴅ ᴀ ᴘᴇʀꜱᴏɴ ᴛᴏ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}admins -* ᴛᴀɢ ᴀʟʟ ᴀᴅᴍɪɴꜱ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}demote -* ᴅᴇᴍᴏᴛᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}disappear -* ᴛᴏɢɢʟᴇ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇꜱꜱᴀɢᴇꜱ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}goodbye -* ᴀ ɢᴏᴏᴅʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴡʜᴇɴᴇᴠᴇʀ ꜱᴏᴍᴇᴏɴᴇ ʟᴇᴀᴠᴇꜱ
*${Ultronf}mute -* ᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ꜰᴏʀ ᴀ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴛɪᴍᴇ
*${Ultronf}promote -* ᴘʀᴏᴍᴏᴛᴇ ᴀ ᴍᴇᴍʙᴇʀ ᴛᴏ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}remove -* ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}groupdp -* ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ɪᴄᴏɴ
*${Ultronf}unmute -* ᴜɴᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
*${Ultronf}welcome -* ᴡᴇʟᴄᴏᴍᴇ ɴᴇᴡ ᴍᴇᴍʙᴇʀꜱ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ ᴡɪᴛʜ ᴀ ᴄᴜꜱᴛᴏᴍ ᴍᴇꜱꜱᴀɢᴇ


*••••••••••➛  🧀𝗙𝘂𝗻* 
*${Ultronf}google -* ꜱᴇᴀʀᴄʜ ᴀɴʏᴛʜɪɴɢ ᴏɴ ɢᴏᴏɢʟᴇ
*${Ultronf}carbon -* ᴄᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ᴏʀ ᴄᴏᴅᴇ ᴛᴏ ᴀ ᴄᴀʀʙᴏɴ ɪᴍᴀɢᴇ
*${Ultronf}pfp -* ɢᴇᴛ ᴅɪꜱᴘʟᴀʏ ᴘɪᴄᴛᴜʀᴇ ᴏꜰ ᴜꜱᴇʀ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}github -* ꜰɪɴᴅ ᴀɴʏ ɢɪᴛʜᴜʙ ᴘʀᴏꜰɪʟᴇ
*${Ultronf}neko -* ᴄᴏᴘʏ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ɴᴇᴋᴏʙɪɴ.ᴄᴏᴍ
*${Ultronf}joke -* ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇꜱ
*${Ultronf}meme -* ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴍᴇᴍᴇꜱ
*${Ultronf}read -* ᴏᴘᴛɪᴄᴀʟ ᴄʜᴀʀᴀᴄᴛᴇʀ ʀᴇᴄᴏɢɴɪᴛɪᴏɴ
*${Ultronf}sticker -* ᴄᴏɴᴠᴇʀᴛ ɪᴍᴀɢᴇ ᴛᴏ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}tagall -* ᴛᴀɢ ᴇᴠʀʏᴏɴᴇ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}translate -* ʟᴀɴɢᴜᴀɢᴇ ᴛʀᴀɴꜱʟᴀᴛᴏʀ
*${Ultronf}tts -* ᴛᴇxᴛ ᴛᴏ ꜱᴘᴇᴇᴄʜ
*${Ultronf}weather -* ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ ᴅᴀᴛᴀ ᴏꜰ ᴀ ᴘʟᴀᴄᴇꜱ
*${Ultronf}ud -* ᴜʀʙᴀɴ ᴅɪᴄᴛɪᴏɴᴀʀʏ ꜰᴏʀ ᴄʀᴀᴢʏ ᴘᴇᴇᴘꜱ


*Nsfw can be removed too ... Just remove it when deploying ...*
*••••••••••➛  🔞𝗡𝗦𝗙𝗪* (private & group-admins!)
*${Ultronf}ass -* ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~
*${Ultronf}bdsm -* ɪꜰ ʏᴏᴜ ᴅᴏɴ'ᴛ ᴋɴᴏᴡ ᴡʜᴀᴛ ɪᴛ ɪꜱ, ꜱᴇᴀʀᴄʜ ɪᴛ ᴜᴘ
*${Ultronf}blowjob -* ʙᴀꜱɪᴄᴀʟʟʏ ᴀɴ ɪᴍᴀɢᴇ ᴏꜰ ᴀ ɢɪʀʟ ꜱᴜᴄᴋɪɴɢ ᴏɴ ᴀ ꜱʜᴀʀᴘ ʙʟᴀᴅᴇ!
*${Ultronf}cum -* ʙᴀꜱɪᴄᴀʟʟʏ ꜱᴛɪᴄᴋʏ ᴡʜɪᴛᴇ ꜱᴛᴜꜰꜰ ᴛʜᴀᴛ ɪꜱ ᴜꜱᴜᴀʟʟʏ ᴍɪʟᴋᴇᴅ ꜰʀᴏᴍ ꜱʜᴀʀᴘɪᴇꜱ
*${Ultronf}doujin -* ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴅᴏᴜᴊɪɴ ᴘᴀɢᴇ ɪᴍᴀɢᴇ!
*${Ultronf}feet -* ꜱᴏ ʏᴏᴜ ʟɪᴋᴇ ꜱᴍᴇʟʟʏ ꜰᴇᴇᴛ ʜᴜʜ?
*${Ultronf}femdom -* ꜰᴇᴍᴀʟᴇ ᴅᴏᴍɪɴᴀᴛɪᴏɴ?
*${Ultronf}foxgirl -* ɢɪʀʟ'ꜱ ᴛʜᴀᴛ ᴀʀᴇ ᴡᴀɴɴᴀʙᴇ ꜰᴏxᴇꜱ, ʏᴇꜱ
*${Ultronf}glasses -* ɢɪʀʟꜱ ᴛʜᴀᴛ ᴡᴇᴀʀ ɢʟᴀꜱꜱᴇꜱ
*${Ultronf}hentai -* ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴠᴀɴɪʟʟᴀ ʜᴇɴᴛᴀɪ ɪᴍᴀɢᴇ~
*${Ultronf}maid -* ᴍᴀɪᴅꜱ, ᴍᴀɪᴅ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ, ʏᴏᴜ ᴋɴᴏᴡ ᴡʜᴀᴛ ᴍᴀɪᴅꜱ ᴀʀᴇ
*${Ultronf}masturbation -* ꜱᴏʟᴏ Qᴜᴇᴜᴇ ɪɴ ᴄꜱɢᴏ! ʟᴏʟ
*${Ultronf}netorare -* ᴡᴏᴡ, ɪ ᴡᴏɴ'ᴛ ᴇᴠᴇɴ Qᴜᴇꜱᴛɪᴏɴ ʏᴏᴜʀ ꜰᴇᴛɪꜱʜᴇꜱ
*${Ultronf}orgy -* ɢʀᴏᴜᴘ ʟᴇᴡᴅ ᴀᴄᴛꜱ
*${Ultronf}panties -* ɪ ᴍᴇᴀɴ... ᴊᴜꜱᴛ ᴡʜʏ? ʏᴏᴜ ʟɪᴋᴇ ᴜɴᴅᴇʀᴡᴇᴀʀ?
*${Ultronf}pussy -* ᴛʜᴇ ɢᴇɴɪᴛᴀʟꜱ ᴏꜰ ᴀ ꜰᴇᴍᴀʟᴇ, ᴏʀ ᴀ ᴄᴀᴛ, ʏᴏᴜ ɢɪᴠᴇ ᴛʜᴇ ᴍᴇᴀɴɪɴɢ
*${Ultronf}school -* ꜱᴄʜᴏᴏʟ ᴜɴɪꜰᴏʀᴍꜱ!~ ʏᴀᴛᴛᴀ~!
*${Ultronf}tentacles -* ɪ'ᴍ ꜱᴏʀʀʏ ʙᴜᴛ, ᴡʜʏ ᴅᴏ ᴛʜᴇʏ ʟᴏᴏᴋ ʟɪᴋᴇ ɪɴᴛᴇꜱᴛɪɴᴇꜱ?
*${Ultronf}thighs -* ᴛʜᴇ ᴛᴏᴘ ᴘᴀʀᴛ ᴏꜰ ʏᴏᴜʀ ʟᴇɢꜱ, ᴠᴇʀʏ ʜᴏᴛ, ɪꜱɴ'ᴛ ɪᴛ?
*${Ultronf}uniform -* ᴍɪʟɪᴛᴀʀʏ, ᴋᴏɴʙɪɴɪ, ᴡᴏʀᴋ, ɴᴜʀꜱᴇ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ!~ ꜱᴇxʏ~
*${Ultronf}yuri -* ɢɪʀʟꜱ ᴏɴ ɢɪʀʟꜱ, ᴀɴᴅ ɢɪʀʟ'ꜱ ᴏɴʟʏ!`;
    // ===============================================================================
    // 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
    // ===============================================================================
    if (!Arc[0]) {
      await υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          {
            url: `https://i.postimg.cc/qv48Nzqy/Ultron.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: "*⚡𝐔𝐋𝐓𝐑𝐎𝐍™*\n𝐑𝐞𝐚𝐝 𝐁𝐞𝐥𝐨𝐰👇🏽‍",
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
      return await υℓтяσηℓιєηт.sendMessage(
        ᴜʟᴛʀᴏɴ.chatId,
        {
          buttonText: "𝗖𝗹𝗶𝗰𝗸 𝗛𝗲𝗿𝗲➤  ๑۞๑",
          description: `*⚡𝐔𝐋𝐓𝐑𝐎𝐍™*
𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..

𝐆𝐢𝐭𝐇𝐮𝐛🧀
🔗DEV: https://github.com/Krakinz
🔗ULTRON: https://github.com/Krakinz/Ultron

_⚠️Bot Not Ready Yet_`,
          sections: [
            {
              title: "⚡𝐔𝐋𝐓𝐑𝐎𝐍 𝐇𝐞𝐥𝐩 𝐌𝐞𝐧𝐮⚡™",
              rows: [
                {
                  title: "𝗪𝗵𝗼𝗹𝗲👑𝗧𝗵𝗶𝗻𝗴",
                  description: ULTHELP,
                  rowId: "rowid0",
                },
                {
                  title: "••••➛ ❓𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻",
                  description: `
*${Ultronf}help -* ɢᴇᴛ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ᴀɴᴅ ɪɴꜰᴏ ᴏɴ ᴍᴏᴅᴜʟᴇꜱ
*${Ultronf}invite -* ᴍᴏᴅᴜʟᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ɢʀᴏᴜᴘ ɪɴᴠɪᴛᴇ ʟɪɴᴋ
*${Ultronf}alive -* ᴄʜᴇᴄᴋ ɪꜰ ʙᴏᴛ ɪꜱ ᴏɴʟɪɴᴇ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ꜰɪɴᴇ`,
                  rowId: "rowid1",
                },
                {
                  title: "••••➛ 🤩𝗔𝗻𝗶𝗺𝗲",
                  description: `
*${Ultronf}anime -* ꜱᴇᴀʀᴄʜ ᴀɴɪᴍᴇ
*${Ultronf}animewallpaper -* ᴅᴏᴡɴʟᴏᴀᴅ ʜᴅ ᴀɴɪᴍᴇ-ᴡᴀʟʟᴘᴀᴘᴇʀꜱ
*more coming!*`,
                  rowId: "rowid2",
                },
                {
                  title: "••••➛ 🎼𝗠𝘂𝘀𝗶𝗰",
                  description: `
*${Ultronf}ytdl -* ᴅᴏᴡɴʟᴏᴀᴅ ꜱᴏɴɢꜱ ᴅɪʀᴇᴄᴛ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ
*${Ultronf}lyrics -* ꜰɪɴᴅ ʟʏʀɪᴄꜱ ᴏꜰ ꜱᴏɴɢꜱ
*${Ultronf}yts -* ɢᴇᴛ ʀᴇᴄᴏᴍᴍᴇɴᴅᴀᴛɪᴏɴꜱ ᴀɴᴅ ʟɪɴᴋꜱ ꜰʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ`,
                  rowId: "rowid3",
                },
                {
                  title: "••••➛ 🎙️𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻",
                  description: `
*${Ultronf}cuddle -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴜᴅᴅʟᴇ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}hug -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴜɢ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}pat -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴀᴛ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}slap -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱʟᴀᴘ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}wink -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴡɪɴᴋ ꜱᴛɪᴄᴋᴇʀ
••➛    ••➛    ••➛    ••➛    ••➛    ••➛
*${Ultronf}yes -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʏᴇꜱ ɪᴍᴀɢᴇ
*${Ultronf}bite -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙɪᴛᴇ ɪᴍᴀɢᴇ
*${Ultronf}blush -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙʟᴜꜱʜ ɪᴍᴀɢᴇ
*${Ultronf}bored -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙᴏʀᴇᴅ ɪᴍᴀɢᴇ
*${Ultronf}confused -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴏɴꜰᴜꜱᴇᴅ ɪᴍᴀɢᴇ
*${Ultronf}cry -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄʀʏ ɪᴍᴀɢᴇ
*${Ultronf}goodnight -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ɢᴏᴏᴅɴɪɢʜᴛ ɪᴍᴀɢᴇ
*${Ultronf}happy -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴀᴘᴘʏ ɪᴍᴀɢᴇ
*${Ultronf}hi5 -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜɪɢʜꜰɪᴠᴇ ɪᴍᴀɢᴇ
*${Ultronf}poke -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴏᴋᴇ ɪᴍᴀɢᴇ
*${Ultronf}sad -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱᴀᴅ ɪᴍᴀɢᴇ
*${Ultronf}thinking -* ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴛʜɪɴᴋɪɴɢ ɪᴍᴀɢᴇ`,
                  rowId: "rowid4",
                },
                {
                  title: "••••➛ 👑𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻",
                  description: `
*${Ultronf}add -* ᴀᴅᴅ ᴀ ᴘᴇʀꜱᴏɴ ᴛᴏ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}admins -* ᴛᴀɢ ᴀʟʟ ᴀᴅᴍɪɴꜱ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}block -* ʙʟᴏᴄᴋ ᴄᴏɴᴛᴀᴄᴛ
*${Ultronf}unblock -* ᴜɴʙʟᴏᴄᴋ ᴄᴏɴᴛᴀᴄᴛ
*${Ultronf}demote -* ᴅᴇᴍᴏᴛᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}disappear -* ᴛᴏɢɢʟᴇ ᴅɪꜱᴀᴘᴘᴇᴀʀɪɴɢ ᴍᴇꜱꜱᴀɢᴇꜱ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}goodbye -* ᴀ ɢᴏᴏᴅʙʏᴇ ᴍᴇꜱꜱᴀɢᴇ ꜰᴏʀ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ᴡʜᴇɴᴇᴠᴇʀ ꜱᴏᴍᴇᴏɴᴇ ʟᴇᴀᴠᴇꜱ
*${Ultronf}mute -* ᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ ꜰᴏʀ ᴀ ꜱᴘᴇᴄɪꜰɪᴇᴅ ᴛɪᴍᴇ
*${Ultronf}promote -* ᴘʀᴏᴍᴏᴛᴇ ᴀ ᴍᴇᴍʙᴇʀ ᴛᴏ ᴀᴅᴍɪɴ ɪɴ ɢʀᴏᴜᴘ
*${Ultronf}remove -* ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}groupdp -* ᴄʜᴀɴɢᴇ ᴛʜᴇ ɢʀᴏᴜᴘ ɪᴄᴏɴ
*${Ultronf}unmute -* ᴜɴᴍᴜᴛᴇ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
*${Ultronf}welcome -* ᴡᴇʟᴄᴏᴍᴇ ɴᴇᴡ ᴍᴇᴍʙᴇʀꜱ ᴛᴏ ᴛʜᴇ ɢʀᴏᴜᴘ ᴡɪᴛʜ ᴀ ᴄᴜꜱᴛᴏᴍ ᴍᴇꜱꜱᴀɢᴇ`,
                  rowId: "rowid6",
                },
                {
                  title: "••••➛ 🧀𝗙𝘂𝗻",
                  description: `
*${Ultronf}google -* ꜱᴇᴀʀᴄʜ ᴀɴʏᴛʜɪɴɢ ᴏɴ ɢᴏᴏɢʟᴇ
*${Ultronf}carbon -* ᴄᴏɴᴠᴇʀᴛ ᴛᴇxᴛ ᴏʀ ᴄᴏᴅᴇ ᴛᴏ ᴀ ᴄᴀʀʙᴏɴ ɪᴍᴀɢᴇ
*${Ultronf}pfp -* ɢᴇᴛ ᴅɪꜱᴘʟᴀʏ ᴘɪᴄᴛᴜʀᴇ ᴏꜰ ᴜꜱᴇʀ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}github -* ꜰɪɴᴅ ᴀɴʏ ɢɪᴛʜᴜʙ ᴘʀᴏꜰɪʟᴇ
*${Ultronf}neko -* ᴄᴏᴘʏ ʏᴏᴜʀ ᴛᴇxᴛ ᴛᴏ ɴᴇᴋᴏʙɪɴ.ᴄᴏᴍ
*${Ultronf}joke -* ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴊᴏᴋᴇꜱ
*${Ultronf}meme -* ɢᴇᴛ ʀᴀɴᴅᴏᴍ ᴍᴇᴍᴇꜱ
*${Ultronf}read -* ᴏᴘᴛɪᴄᴀʟ ᴄʜᴀʀᴀᴄᴛᴇʀ ʀᴇᴄᴏɢɴɪᴛɪᴏɴ
*${Ultronf}sticker -* ᴄᴏɴᴠᴇʀᴛ ɪᴍᴀɢᴇ ᴛᴏ ꜱᴛɪᴄᴋᴇʀ
*${Ultronf}tagall -* ᴛᴀɢ ᴇᴠʀʏᴏɴᴇ ɪɴ ᴀ ɢʀᴏᴜᴘ
*${Ultronf}translate -* ʟᴀɴɢᴜᴀɢᴇ ᴛʀᴀɴꜱʟᴀᴛᴏʀ
*${Ultronf}tts -* ᴛᴇxᴛ ᴛᴏ ꜱᴘᴇᴇᴄʜ
*${Ultronf}weather -* ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ ᴅᴀᴛᴀ ᴏꜰ ᴀ ᴘʟᴀᴄᴇꜱ
*${Ultronf}ud -* ᴜʀʙᴀɴ ᴅɪᴄᴛɪᴏɴᴀʀʏ ꜰᴏʀ ᴄʀᴀᴢʏ ᴘᴇᴇᴘꜱ`,
                  rowId: "rowid7",
                },
                {
                  title: "••••➛ 🔞𝗡𝗦𝗙𝗪",
                  description: `
*${Ultronf}ass -* ɪ ᴋɴᴏᴡ ʏᴏᴜ ʟɪᴋᴇ ᴀɴɪᴍᴇ ᴀꜱꜱ~
*${Ultronf}bdsm -* ɪꜰ ʏᴏᴜ ᴅᴏɴ'ᴛ ᴋɴᴏᴡ ᴡʜᴀᴛ ɪᴛ ɪꜱ, ꜱᴇᴀʀᴄʜ ɪᴛ ᴜᴘ
*${Ultronf}blowjob -* ʙᴀꜱɪᴄᴀʟʟʏ ᴀɴ ɪᴍᴀɢᴇ ᴏꜰ ᴀ ɢɪʀʟ ꜱᴜᴄᴋɪɴɢ ᴏɴ ᴀ ꜱʜᴀʀᴘ ʙʟᴀᴅᴇ!
*${Ultronf}cum -* ʙᴀꜱɪᴄᴀʟʟʏ ꜱᴛɪᴄᴋʏ ᴡʜɪᴛᴇ ꜱᴛᴜꜰꜰ ᴛʜᴀᴛ ɪꜱ ᴜꜱᴜᴀʟʟʏ ᴍɪʟᴋᴇᴅ ꜰʀᴏᴍ ꜱʜᴀʀᴘɪᴇꜱ
*${Ultronf}doujin -* ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴅᴏᴜᴊɪɴ ᴘᴀɢᴇ ɪᴍᴀɢᴇ!
*${Ultronf}feet -* ꜱᴏ ʏᴏᴜ ʟɪᴋᴇ ꜱᴍᴇʟʟʏ ꜰᴇᴇᴛ ʜᴜʜ?
*${Ultronf}femdom -* ꜰᴇᴍᴀʟᴇ ᴅᴏᴍɪɴᴀᴛɪᴏɴ?
*${Ultronf}foxgirl -* ɢɪʀʟ'ꜱ ᴛʜᴀᴛ ᴀʀᴇ ᴡᴀɴɴᴀʙᴇ ꜰᴏxᴇꜱ, ʏᴇꜱ
*${Ultronf}glasses -* ɢɪʀʟꜱ ᴛʜᴀᴛ ᴡᴇᴀʀ ɢʟᴀꜱꜱᴇꜱ
*${Ultronf}hentai -* ꜱᴇɴᴅꜱ ᴀ ʀᴀɴᴅᴏᴍ ᴠᴀɴɪʟʟᴀ ʜᴇɴᴛᴀɪ ɪᴍᴀɢᴇ~
*${Ultronf}maid -* ᴍᴀɪᴅꜱ, ᴍᴀɪᴅ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ, ʏᴏᴜ ᴋɴᴏᴡ ᴡʜᴀᴛ ᴍᴀɪᴅꜱ ᴀʀᴇ
*${Ultronf}masturbation -* ꜱᴏʟᴏ Qᴜᴇᴜᴇ ɪɴ ᴄꜱɢᴏ! ʟᴏʟ
*${Ultronf}netorare -* ᴡᴏᴡ, ɪ ᴡᴏɴ'ᴛ ᴇᴠᴇɴ Qᴜᴇꜱᴛɪᴏɴ ʏᴏᴜʀ ꜰᴇᴛɪꜱʜᴇꜱ
*${Ultronf}orgy -* ɢʀᴏᴜᴘ ʟᴇᴡᴅ ᴀᴄᴛꜱ
*${Ultronf}panties -* ɪ ᴍᴇᴀɴ... ᴊᴜꜱᴛ ᴡʜʏ? ʏᴏᴜ ʟɪᴋᴇ ᴜɴᴅᴇʀᴡᴇᴀʀ?
*${Ultronf}pussy -* ᴛʜᴇ ɢᴇɴɪᴛᴀʟꜱ ᴏꜰ ᴀ ꜰᴇᴍᴀʟᴇ, ᴏʀ ᴀ ᴄᴀᴛ, ʏᴏᴜ ɢɪᴠᴇ ᴛʜᴇ ᴍᴇᴀɴɪɴɢ
*${Ultronf}school -* ꜱᴄʜᴏᴏʟ ᴜɴɪꜰᴏʀᴍꜱ!~ ʏᴀᴛᴛᴀ~!
*${Ultronf}tentacles -* ɪ'ᴍ ꜱᴏʀʀʏ ʙᴜᴛ, ᴡʜʏ ᴅᴏ ᴛʜᴇʏ ʟᴏᴏᴋ ʟɪᴋᴇ ɪɴᴛᴇꜱᴛɪɴᴇꜱ?
*${Ultronf}thighs -* ᴛʜᴇ ᴛᴏᴘ ᴘᴀʀᴛ ᴏꜰ ʏᴏᴜʀ ʟᴇɢꜱ, ᴠᴇʀʏ ʜᴏᴛ, ɪꜱɴ'ᴛ ɪᴛ?
*${Ultronf}uniform -* ᴍɪʟɪᴛᴀʀʏ, ᴋᴏɴʙɪɴɪ, ᴡᴏʀᴋ, ɴᴜʀꜱᴇ ᴜɴɪꜰᴏʀᴍꜱ, ᴇᴛᴄ!~ ꜱᴇxʏ~
*${Ultronf}yuri -* ɢɪʀʟꜱ ᴏɴ ɢɪʀʟꜱ, ᴀɴᴅ ɢɪʀʟ'ꜱ ᴏɴʟʏ!`,
                  rowId: "rowid8",
                },
              ],
            },
          ],
          listType: 1,
        },
        MessageType.listMessage
      );
    }
    var ᴜʟᴛʀᴏɴʍօ = "⤥ 💡𝐂𝐨𝐦𝐦𝐚𝐧𝐝\n";
    var module = UltronSitrep.get(Arc[0]);
    if (module) {
      ᴜʟᴛʀᴏɴʍօ += `⤤ *${
        (Ultronf, module.name === undefined ? "Null" : module.name)
      }*

⤥ 🧀𝐂𝐚𝐭𝐞𝐠𝐨𝐫𝐲 
⤤ *${
        (module.commandType,
        module.commandType === undefined ? "Null" : module.commandType)
      }*

⤥ 🖊️𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧 
⤤ *${
        (module.description,
        module.description === undefined ? "Null" : module.description)
      }*`;
      return υℓтяσηℓιєηт
        .sendMessage(
          ᴜʟᴛʀᴏɴ.chatId,
          {
            url: `https://i.postimg.cc/qv48Nzqy/Ultron.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: ᴜʟᴛʀᴏɴʍօ,
          }
        )
        .catch((error) => ℓιєηт.catch(error, υℓтяσηℓιєηт, ᴜʟᴛʀᴏɴ));
    }
  },
};
// ===============================================================================
// 🎮ᴜʟᴛʀᴏɴ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
