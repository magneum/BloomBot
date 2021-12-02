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
    var PreÚltrðñReg = new RegExp(UltronSitreper.ULTRONIX, `g`);
    var PreÚltrðñ = /\/\^\[(.)+\]\/\g/g.exec(PreÚltrðñReg)[1];
    ӄʀǟӄɨռʐ
      .sendMessage(
        Últrðñ.chatId, {
          url: `https://i.postimg.cc/KcNwHtZt/ltr.png`
        },
        MessageType.image, {
          mimetype: Mimetype.png,
          caption: `*🎮Últrðñ 𝐇𝐞𝐥𝐩 𝐌𝐞𝐧𝐮*⧴ ᴜꜱᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇ ᴡᴀʏ!

*••••••••••••••••➛  ❓𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻*
*${PreÚltrðñ}help* = Get the command list and info on modules 
*${PreÚltrðñ}invite* = Module to create group invite link
*${PreÚltrðñ}alive* = Check if bot is online


*••••••••••••••••➛  🤩𝗔𝗻𝗶𝗺𝗲*
*${PreÚltrðñ}anime* = Search Anime
*more coming!*


*••••••••••••••••➛  🎼𝗠𝘂𝘀𝗶𝗰* 
*${PreÚltrðñ}song* = Download songs
*${PreÚltrðñ}lyrics* = Module to find lyrics of song
*${PreÚltrðñ}yt* = Get recommendations and links from Youtube


*••••••••••••••••➛  🎙️𝗖𝗼𝗻𝘃𝗲𝗿𝘀𝗮𝘁𝗶𝗼𝗻*
*${PreÚltrðñ}cuddle* = Get an Anime-cuddle Sticker
*${PreÚltrðñ}cuddlehd* = Sticker with HD-cuddle Download Link
*${PreÚltrðñ}hug* = Get an Anime-hug Sticker
*${PreÚltrðñ}hughd* = Sticker with HD-hug Download Link
*${PreÚltrðñ}kill* = Get an Anime-kill Sticker
*${PreÚltrðñ}killhd* = Sticker with HD-kill Download Link
*${PreÚltrðñ}pat* = Get an Anime-pat Sticker
*${PreÚltrðñ}pathd* = Sticker with HD-pat Download Link
*${PreÚltrðñ}punch* = Get an Anime-punch Sticker
*${PreÚltrðñ}punchhd* = Sticker with HD-punch Download Link
*${PreÚltrðñ}slap* = Get an Anime-slap Sticker  
*${PreÚltrðñ}slaphd* = Sticker with HD-slap Download Link
*${PreÚltrðñ}wink* = Get an Anime-wink Sticker  
*${PreÚltrðñ}winkhd* = Sticker with HD-wink Download Link


*••••••••••••••••➛  👑𝗔𝗱𝗺𝗶𝗻𝗶𝘀𝘁𝗿𝗮𝘁𝗶𝗼𝗻* _(only groups)
*${PreÚltrðñ}add* = Module to add a person to a group
*${PreÚltrðñ}admins* = Tag admins
*${PreÚltrðñ}block* = Block contact
*${PreÚltrðñ}demote* = Demote a person from admin
*${PreÚltrðñ}disappear* = Toggle disappearing messages
*${PreÚltrðñ}goodbye* = A goodbye message for group chat whenever someone leaves
*${PreÚltrðñ}mute* = Mute group chat for a specified time
*${PreÚltrðñ}promote* = Promote a member to admin
*${PreÚltrðñ}remove* = Module to remove a person from a group
*${PreÚltrðñ}setdp* = Change the group icon
*${PreÚltrðñ}unblock* = Unblock contact
*${PreÚltrðñ}unmute* = Unmute group chat
*${PreÚltrðñ}welcome* = Welcome new members to the group with a custom message


*••••••••••••••••➛  🧀𝗙𝘂𝗻* 
*${PreÚltrðñ}carbon* = Convert text/code to a carbon image
*${PreÚltrðñ}pfp* = Get display picture
*${PreÚltrðñ}github* = Find Github Profile
*${PreÚltrðñ}neko* = Copy your text to nekobin
*${PreÚltrðñ}joke* = Get Random Jokes
*${PreÚltrðñ}meme* = Get Random Memes
*${PreÚltrðñ}read* = Optical Character Recognition
*${PreÚltrðñ}sticker* = Module to convert image to sticker
*${PreÚltrðñ}tagall* = Module to tag evryone in a group
*${PreÚltrðñ}translate* = Language Translator
*${PreÚltrðñ}tts* = Text To Speech
*${PreÚltrðñ}weather* = Get weather data of a city
*${PreÚltrðñ}ud* = Urban Dictionary


*••••••••••••••••➛  🔞𝗡𝗦𝗙𝗪* (private & group-admins!)
*${PreÚltrðñ}ass* = I know you like anime ass~
*${PreÚltrðñ}bdsm* = If you don't know what it is, search it up
*${PreÚltrðñ}blowjob* = Basically an image of a girl sucking on a sharp blade!
*${PreÚltrðñ}cum* = Basically sticky white stuff that is usually milked from sharpies
*${PreÚltrðñ}doujin* = Sends a random doujin page imageURL!
*${PreÚltrðñ}feet* = So you like smelly feet huh?
*${PreÚltrðñ}femdom* = Female Domination?
*${PreÚltrðñ}foxgirl* = Girl's that are wannabe foxes, yes
*${PreÚltrðñ}glasses* = Girls that wear glasses
*${PreÚltrðñ}hentai* = Sends a random vanilla hentai imageURL~
*${PreÚltrðñ}maid* = Maids, Maid Uniforms, etc, you know what maids are :3
*${PreÚltrðñ}masturbation* = Solo Queue in CSGO! Lol
*${PreÚltrðñ}netorare* = Wow, I won't even question your fetishes
*${PreÚltrðñ}orgy* = Group Lewd Acts
*${PreÚltrðñ}panties* = I mean... just why? You like underwear?
*${PreÚltrðñ}pussy* = The genitals of a female, or a cat, you give the meaning
*${PreÚltrðñ}school* = School Uniforms!~ Yatta~!
*${PreÚltrðñ}tentacles* = I'm sorry but, why do they look like intestines?
*${PreÚltrðñ}thighs* = The top part of your legs, very hot, isn't it?
*${PreÚltrðñ}uniform* = Military, Konbini, Work, Nurse Uniforms, etc!~ Sexy~
*${PreÚltrðñ}yuri* = Girls on Girls, and Girl's only!

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