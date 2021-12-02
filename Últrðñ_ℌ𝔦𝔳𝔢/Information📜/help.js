// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
const {
  MessageType,
  Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================
module.exports = {
  name: `help`,
  commandType: `info`,
  description: `Get the command list and info on modules`,
  ƈʏɮօʀɢʍօʀɛ: `This module is used to get info on other modules and their triggers.`,
  async handle(ӄʀǟӄɨռʐ, Últrðñ) {
    ӄʀǟӄɨռʐ
      .sendMessage(
        Últrðñ.chatId, {
          url: `https://i.postimg.cc/KcNwHtZt/ltr.png`
        },
        MessageType.image, {
          mimetype: Mimetype.png,
          caption: `*🎮Últrðñ 𝐇𝐞𝐥𝐩 𝐌𝐞𝐧𝐮*⧴ ᴜꜱᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇ ᴡᴀʏ!

*••••••••••••••••➛  ❓𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻*
*${UltronSitreper.ULTRONIX}help* = Get the command list and info on modules 
*${UltronSitreper.ULTRONIX}invite* = Module to create group invite link
*${UltronSitreper.ULTRONIX}alive* = Check if bot is online


*••••••••••••••••➛  🤩𝗔𝗻𝗶𝗺𝗲*
*${UltronSitreper.ULTRONIX}anime* = Search Anime
*more coming!*


*••••••••••••••••➛  🎼𝗠𝘂𝘀𝗶𝗰* 
*${UltronSitreper.ULTRONIX}song* = Download songs
*${UltronSitreper.ULTRONIX}lyrics* = Module to find lyrics of song
*${UltronSitreper.ULTRONIX}yt* = Get recommendations and links from Youtube


*••••••••••••••••➛  🎙️𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻*
*${UltronSitreper.ULTRONIX}cuddle* = Get an Anime-cuddle Sticker
*${UltronSitreper.ULTRONIX}cuddlehd* = Sticker with HD-cuddle Download Link
*${UltronSitreper.ULTRONIX}hug* = Get an Anime-hug Sticker
*${UltronSitreper.ULTRONIX}hughd* = Sticker with HD-hug Download Link
*${UltronSitreper.ULTRONIX}kill* = Get an Anime-kill Sticker
*${UltronSitreper.ULTRONIX}killhd* = Sticker with HD-kill Download Link
*${UltronSitreper.ULTRONIX}pat* = Get an Anime-pat Sticker
*${UltronSitreper.ULTRONIX}pathd* = Sticker with HD-pat Download Link
*${UltronSitreper.ULTRONIX}punch* = Get an Anime-punch Sticker
*${UltronSitreper.ULTRONIX}punchhd* = Sticker with HD-punch Download Link
*${UltronSitreper.ULTRONIX}slap* = Get an Anime-slap Sticker  
*${UltronSitreper.ULTRONIX}slaphd* = Sticker with HD-slap Download Link
*${UltronSitreper.ULTRONIX}wink* = Get an Anime-wink Sticker  
*${UltronSitreper.ULTRONIX}winkhd* = Sticker with HD-wink Download Link


*••••••••••••••••➛  👑𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻* _(only groups)
*${UltronSitreper.ULTRONIX}add* = Module to add a person to a group
*${UltronSitreper.ULTRONIX}admins* = Tag admins
*${UltronSitreper.ULTRONIX}block* = Block contact
*${UltronSitreper.ULTRONIX}demote* = Demote a person from admin
*${UltronSitreper.ULTRONIX}disappear* = Toggle disappearing messages
*${UltronSitreper.ULTRONIX}goodbye* = A goodbye message for group chat whenever someone leaves
*${UltronSitreper.ULTRONIX}mute* = Mute group chat for a specified time
*${UltronSitreper.ULTRONIX}promote* = Promote a member to admin
*${UltronSitreper.ULTRONIX}remove* = Module to remove a person from a group
*${UltronSitreper.ULTRONIX}setdp* = Change the group icon
*${UltronSitreper.ULTRONIX}unblock* = Unblock contact
*${UltronSitreper.ULTRONIX}unmute* = Unmute group chat
*${UltronSitreper.ULTRONIX}welcome* = Welcome new members to the group with a custom message


*••••••••••••••••➛  🧀𝗙𝘂𝗻* 
*${UltronSitreper.ULTRONIX}carbon* = Convert text/code to a carbon image
*${UltronSitreper.ULTRONIX}pfp* = Get display picture
*${UltronSitreper.ULTRONIX}github* = Find Github Profile
*${UltronSitreper.ULTRONIX}neko* = Copy your text to nekobin
*${UltronSitreper.ULTRONIX}joke* = Get Random Jokes
*${UltronSitreper.ULTRONIX}meme* = Get Random Memes
*${UltronSitreper.ULTRONIX}read* = Optical Character Recognition
*${UltronSitreper.ULTRONIX}sticker* = Module to convert image to sticker
*${UltronSitreper.ULTRONIX}tagall* = Module to tag evryone in a group
*${UltronSitreper.ULTRONIX}translate* = Language Translator
*${UltronSitreper.ULTRONIX}tts* = Text To Speech
*${UltronSitreper.ULTRONIX}weather* = Get weather data of a city
*${UltronSitreper.ULTRONIX}ud* = Urban Dictionary


*••••••••••••••••➛  🔞𝗡𝗦𝗙𝗪* (private & group-admins!)
*${UltronSitreper.ULTRONIX}ass* = I know you like anime ass~
*${UltronSitreper.ULTRONIX}bdsm* = If you don't know what it is, search it up
*${UltronSitreper.ULTRONIX}blowjob* = Basically an image of a girl sucking on a sharp blade!
*${UltronSitreper.ULTRONIX}cum* = Basically sticky white stuff that is usually milked from sharpies
*${UltronSitreper.ULTRONIX}doujin* = Sends a random doujin page imageURL!
*${UltronSitreper.ULTRONIX}feet* = So you like smelly feet huh?
*${UltronSitreper.ULTRONIX}femdom* = Female Domination?
*${UltronSitreper.ULTRONIX}foxgirl* = Girl's that are wannabe foxes, yes
*${UltronSitreper.ULTRONIX}glasses* = Girls that wear glasses
*${UltronSitreper.ULTRONIX}hentai* = Sends a random vanilla hentai imageURL~
*${UltronSitreper.ULTRONIX}maid* = Maids, Maid Uniforms, etc, you know what maids are :3
*${UltronSitreper.ULTRONIX}masturbation* = Solo Queue in CSGO! Lol
*${UltronSitreper.ULTRONIX}netorare* = Wow, I won't even question your fetishes
*${UltronSitreper.ULTRONIX}orgy* = Group Lewd Acts
*${UltronSitreper.ULTRONIX}panties* = I mean... just why? You like underwear?
*${UltronSitreper.ULTRONIX}pussy* = The genitals of a female, or a cat, you give the meaning
*${UltronSitreper.ULTRONIX}school* = School Uniforms!~ Yatta~!
*${UltronSitreper.ULTRONIX}tentacles* = I'm sorry but, why do they look like intestines?
*${UltronSitreper.ULTRONIX}thighs* = The top part of your legs, very hot, isn't it?
*${UltronSitreper.ULTRONIX}uniform* = Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~
*${UltronSitreper.ULTRONIX}yuri* = Girls on Girls, and Girl's only!

𝐖𝐨𝐫𝐤 𝐈𝐧 𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬:
https://github.com/Krakinz/Ultron.git`,
        }
      )
      .catch((cᴇʀʀᴏʀ) =>
        ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          `*🎮Últrðñ™* 𝐝𝐢𝐝𝐧'𝐭 𝐰𝐨𝐫𝐤 𝐚𝐬 𝐞𝐱𝐩𝐞𝐜𝐭𝐞𝐝❗

💡𝗛𝗲𝗿𝗲 𝗶𝘀 𝗮 𝘀𝗺𝗮𝗹𝗹 𝗲𝗿𝗿𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁 𝗮𝗻𝗱 𝘁𝗼 𝗹𝗼𝗴 𝘁𝗵𝗲 𝗿𝗲𝗽𝗼𝗿𝘁 𝘂𝘀𝗲 ${UltronSitreper.ULTRONIX}𝗿𝗲𝗽𝗼𝗿𝘁
⚠️𝗘𝗿𝗿𝗼𝗿
• ${cᴇʀʀᴏʀ}`,
          MessageType.text
        )
      );
    return;
  },
};
// ===============================================================================
// 🎮Últrðñ™ 𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤..
// ===============================================================================