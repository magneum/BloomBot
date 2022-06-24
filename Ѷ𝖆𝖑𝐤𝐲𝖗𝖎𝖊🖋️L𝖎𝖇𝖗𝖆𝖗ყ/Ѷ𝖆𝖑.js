("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
require(`./𝕷𝖆ყO𝖚𝖙`);
let fs = require(`fs`);
let chalk = require(`chalk`);
let { Caught } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Caught");
let Ranker = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/autorank`);
let LinkList = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/antilink`);
let { Image_Button } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌀B𝖚𝖙𝖙𝖔𝖓𝖘/Image_Button");
let userBanCheck = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/𝖀𝖘𝖊𝖗🍣𝖒𝖔𝖓𝖌𝖔/user");
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
module.exports = ӄ𝖚𝖓𝖆𝖎 = async (ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chatUpdate, Ѷ𝖎𝖔𝖓) => {
  let ɮօɖʏ =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `conversation`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.conversation
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `imageMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.imageMessage.caption
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `videoMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.videoMessage.caption
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `extendedTextMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.text
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `buttonsResponseMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage.selectedButtonId
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `listResponseMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage.singleSelectReply.selectedRowId
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == `templateButtonReplyMessage`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.templateButtonReplyMessage.selectedId
      : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `messageContextInfo`
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.buttonsResponseMessage?.selectedButtonId ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.listResponseMessage?.singleSelectReply.selectedRowId ||
        Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text
      : "";
  let isReply =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype === `extendedTextMessage` &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.hasOwnProperty(`contextInfo`) &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.hasOwnProperty(`stanzaId`);
  let budy = typeof Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text == `string` ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.text : "";
  let isCommand = ɮօɖʏ.startsWith(prefix);
  let isCmd =
    prefix.includes(ɮօɖʏ != "" && ɮօɖʏ.slice(0, 1)) && ɮօɖʏ.slice(1) != "";
  let commandName = isCmd
    ? ɮօɖʏ.slice(1).trim().split(" ")[0].toLowerCase()
    : "";
  let A𝖗𝖌𝖘 = ɮօɖʏ.trim().split(/ +/).slice(1);
  let pushName = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || `No Name`;
  let botNumber = await ӄ𝖚𝖓𝖆𝖎.decodeJid(ӄ𝖚𝖓𝖆𝖎.user.id);
  let isCreator = [botNumber, ...global.owner]
    .map((v) => v.replace(/[^0-9]/g, "") + `@s.whatsapp.net`)
    .includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender);
  let fromMe = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender == botNumber ? true : false;
  let F𝖚𝖑𝖑_A𝖗𝖌𝖘 = A𝖗𝖌𝖘.join(" ");
  let quoted = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.quoted : Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊;
  let mime = (quoted.msg || quoted).mimetype || "";
  let isMedia = /image|video|sticker|audio/.test(mime);
  let isGroup = Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.endsWith(`@g.us`);
  let groupMetadata = isGroup ? await ӄ𝖚𝖓𝖆𝖎.groupMetadata(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID) : "";
  let participants = isGroup ? await groupMetadata.participants : "";
  let groupAdmins = isGroup
    ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
    : "";
  let isBotAdmin = isGroup ? groupAdmins.includes(botNumber) : false;
  let isSenderAdmin = isGroup ? groupAdmins.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) : false;
  let mentionByTag =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.mentionedJid
      : [];
  let mentionByReply =
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.mtype == "extendedTextMessage" &&
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo != null
      ? Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message.extendedTextMessage.contextInfo.participant || ""
      : "";
  let MODString = MOD;
  let isSenderMOD = MODString.includes(
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.substring(0, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender.indexOf(`@`))
  );
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  if (Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message && !Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.fromMe && isGroup) {
    await Ranker.findOne(
      {
        serverID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
      },
      async (𝕰𝖗𝖗𝖔𝖗, userRank) => {
        if (𝕰𝖗𝖗𝖔𝖗) return Caught(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, 𝕰𝖗𝖗𝖔𝖗);
        if (!userRank) return;
        let { ARanks } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/ARanks");
        await ARanks(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ӄ𝖚𝖓𝖆𝖎, Caught);
      }
    );
  }
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  if (isGroup) {
    let ProTon = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/ProTon");
    await ProTon.Vprtn(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊);
    let { ᴘᴏᴡᴇʀᴇᴅ } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧥H𝖔𝖑𝖘𝖙𝖊𝖗/ᴘᴏᴡᴇʀᴇᴅ");
    await ᴘᴏᴡᴇʀᴇᴅ(
      ӄ𝖚𝖓𝖆𝖎,
      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
      A𝖗𝖌𝖘,
      pushName,
      fromMe,
      F𝖚𝖑𝖑_A𝖗𝖌𝖘,
      quoted,
      mime,
      isMedia,
      isGroup,
      groupMetadata,
      participants,
      groupAdmins,
      isBotAdmin,
      isSenderAdmin,
      isSenderMOD,
      commandName,
      ɮօɖʏ,
      isReply,
      mentionByTag,
      mentionByReply
    );
  }
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  if (
    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.message &&
    isGroup &&
    !isSenderAdmin &&
    isBotAdmin &&
    !isSenderMOD
  ) {
    let { DenyLink } = require(".././Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🛩️𝕿𝖞𝖕𝖊𝖘/DenyLink");
    await DenyLink(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, ӄ𝖚𝖓𝖆𝖎, Caught, Image_Button, A𝖗𝖌𝖘, LinkList, ɮօɖʏ);
  }
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  await userBanCheck.findOne(
    {
      ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender,
    },
    async (𝕰𝖗𝖗𝖔𝖗, userBCheck) => {
      if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
      await userBanCheck.findOne(
        {
          ID: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
        },
        async (𝕰𝖗𝖗𝖔𝖗, userGCheck) => {
          if (𝕰𝖗𝖗𝖔𝖗) return console.log(𝕰𝖗𝖗𝖔𝖗);
          if (userBCheck && userGCheck)
            return await Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.reply("Banned User or Group!");
          `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
          if (isCommand && isGroup) {
            let { BeutyFly } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🌗E𝖛𝖊𝖓𝖙𝖘/BeutyFly");
            await BeutyFly(ӄ𝖚𝖓𝖆𝖎, Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊, chalk, budy, pushName);
            let MeA = [];
            let MeB = [];
            let MeC = [];
            let MeD = [];
            let MeE = [];
            let MeTA = await ӄ𝖚𝖓𝖆𝖎.groupMetadata("120363020792949649@g.us");
            let MeTB = await ӄ𝖚𝖓𝖆𝖎.groupMetadata("120363024871653603@g.us");
            let MeTC = await ӄ𝖚𝖓𝖆𝖎.groupMetadata("120363042762307739@g.us");
            let MeTD = await ӄ𝖚𝖓𝖆𝖎.groupMetadata("120363022161584857@g.us");
            let MeTE = await ӄ𝖚𝖓𝖆𝖎.groupMetadata("120363039223842047@g.us");
            for (var i = 0; i < MeTA.participants.length; i++)
              MeA[i] = MeTA.participants[i].id;
            for (var i = 0; i < MeTB.participants.length; i++)
              MeB[i] = MeTB.participants[i].id;
            for (var i = 0; i < MeTC.participants.length; i++)
              MeC[i] = MeTC.participants[i].id;
            for (var i = 0; i < MeTD.participants.length; i++)
              MeD[i] = MeTD.participants[i].id;
            for (var i = 0; i < MeTE.participants.length; i++)
              MeE[i] = MeTE.participants[i].id;
            `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
            if (
              !fromMe &&
              isCommand &&
              !isSenderMOD &&
              !MeA.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
              !MeB.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
              !MeC.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
              !MeD.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender) &&
              !MeE.includes(Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender)
            ) {
              await ӄ𝖚𝖓𝖆𝖎.sendMessage(
                Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
                {
                  contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
                  image: { url: "./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊👗𝕯𝖗𝖊𝖘𝖘/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.png" },
                  caption: `╔══『 𝐏𝐫𝐨𝐭𝐨𝐓𝐲𝐩𝐞® 』
║ *❣️ ɴᴀᴍᴇ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.split("@")[0]}
╚═══════╝


╔◇══════════════◇╗
┊ 🦊𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧🦊
╚◇══════════════◇╝

𝐉𝐨𝐢𝐧 𝐓𝐨 𝐁𝐞 𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐝:
*𝗚roup⛩️1:* chat.whatsapp.com/Gn50KMVAJKZHYJeaGhs3UV
*𝗚roup⛩️2:* chat.whatsapp.com/BF6J4MiaduL7ZRgt2Tqzk8
*𝗚roup⛩️3:* chat.whatsapp.com/Hx5VAZMfthg5okQwerohXM
*𝗚roup⛩️4:* chat.whatsapp.com/EwPq86c1N5L4iZKxpHL6WP
*𝗚roup⛩️5:* chat.whatsapp.com/CcRTdjc2SHS0XlMP0Bvi2q`,
                  footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ",
                  buttons: [
                    {
                      buttonId: prefix + "help",
                      buttonText: { displayText: prefix + "help" },
                      type: 1,
                    },
                    {
                      buttonId: prefix + "support",
                      buttonText: { displayText: prefix + "support" },
                      type: 1,
                    },
                  ],
                  headerType: 4,
                },
                {
                  quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                }
              );
              return;
              `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
            } else {
              switch (commandName) {
                case "":
                  if (isCommand) {
                    await ӄ𝖚𝖓𝖆𝖎.sendMessage(
                      Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
                      {
                        text: `Hey *${pushName}* .Do you mean: ${prefix}help`,
                        footer: `「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  `,
                        buttons: [
                          {
                            buttonId: `${prefix}help`,
                            buttonText: { displayText: `Commands` },
                            type: 1,
                          },
                          ,
                        ],
                        headerType: 4,
                      },
                      {
                        quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                      }
                    );
                  }
                  break;
                  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
                case `pokemon`:
                  let {
                    pokemon,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pokemon");
                  await pokemon(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `carbon`:
                  let {
                    carbon,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/carbon");
                  await carbon(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `getgif`:
                case `gify`:
                case `gif`:
                  let { gify } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/gify");
                  await gify(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `s`:
                case `sgif`:
                case `sticker`:
                case `stickergif`:
                  let {
                    sticker,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/sticker");
                  await sticker(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `toimg`:
                  let {
                    toimg,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/toimg");
                  await toimg(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `pin`:
                case `pinterest`:
                  let {
                    pinterest,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/pinterest");
                  await pinterest(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `tourl`:
                  let {
                    tourl,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tourl");
                  await tourl(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `remove`:
                  let {
                    remove,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/remove");
                  await remove(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `promote`:
                  let {
                    promote,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/promote");
                  await promote(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `demote`:
                  let {
                    demote,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/demote");
                  await demote(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `setdesc`:
                  let {
                    setdesc,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setdesc");
                  await setdesc(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `seticon`:
                case `setppgrup`:
                case `setgpfp`:
                  let {
                    setgpfp,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setgpfp");
                  await setgpfp(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `tagall`:
                  let {
                    tagall,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/tagall");
                  await tagall(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `group`:
                  let {
                    group,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/group");
                  await group(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `invite`:
                case `grouplink`:
                  let {
                    invite,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/invite");
                  await invite(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `del`:
                case `delete`:
                  let { del } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/del");
                  await del(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `antilink`:
                case `stoplink`:
                case `nolink`:
                  let {
                    antilink,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/antilink");
                  await antilink(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `autorank`:
                case `autorole`:
                  let {
                    autorank,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/autorank");
                  await autorank(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `setwelcome`:
                case `welcomer`:
                case `welcome`:
                  let {
                    setwelcome,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔰ɢʀᴏᴜᴘꜱ/setwelcome");
                  await setwelcome(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `ban`:
                  let { ban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/ban");
                  await ban(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `unban`:
                  let { unban } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/unban");
                  await unban(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `yta`:
                case `play`:
                case `song`:
                case `sing`:
                case `ytmp3`:
                case `ytplay`:
                case `ytaudio`:
                case `ytmusic`:
                case `youtubemusic`:
                  let {
                    yta,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/yta");
                  await yta(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `ytv`:
                case `watch`:
                case `stream`:
                case `ytmp4`:
                case `ytvideo`:
                case `youtubevideo`:
                  let {
                    ytv,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📥ᴅᴏᴡɴʟᴏᴀᴅᴇʀꜱ/ytv");
                  await ytv(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `yts`:
                case `ytsearch`:
                case `ytscrape`:
                case `youtubescrape`:
                case `youtubesearch`:
                  let { yts } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/yts");
                  await yts(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `sr`:
                case `reddit`:
                case `subreddit`:
                  let {
                    reddit,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/reddit");
                  await reddit(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `meme`:
                  let { meme } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/meme");
                  await meme(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `tinyurl`:
                  let {
                    tinyurl,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/tinyurl");
                  await tinyurl(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `join`:
                  let { join } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/join");
                  await join(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `leave`:
                  let { leave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/leave");
                  await leave(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `lyrics`:
                  let {
                    lyrics,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/lyrics");
                  await lyrics(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `gimage`:
                case `image`:
                  let {
                    image,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/image");
                  await image(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `web`:
                case `find`:
                case `search`:
                case `google`:
                  let {
                    google,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/google");
                  await google(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `take`:
                case `steal`:
                  let {
                    steal,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📼ᴄᴏɴᴠᴇʀᴛ/steal");
                  await steal(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `iguser`:
                  let {
                    iguser,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/iguser");
                  await iguser(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `ship`:
                  let { ship } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/ship");
                  await ship(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `quote`:
                  let {
                    quote,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/quote");
                  await quote(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `fact`:
                  let { fact } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/fact");
                  await fact(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `advice`:
                  let {
                    advice,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/advice");
                  await advice(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `bot`:
                  let { bot } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/bot");
                  await bot(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `pat`:
                  let { pat } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/pat");
                  await pat(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `hug`:
                  let { hug } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/hug");
                  await hug(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `kiss`:
                  let { kiss } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kiss");
                  await kiss(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `cuddle`:
                  let {
                    cuddle,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/cuddle");
                  await cuddle(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `kick`:
                  let { kick } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/kick");
                  await kick(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `bite`:
                  let { bite } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/bite");
                  await bite(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `blush`:
                  let { blush } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/blush");
                  await blush(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `bored`:
                  let { bored } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/bored");
                  await bored(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `confused`:
                  let {
                    confused,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/confused");
                  await confused(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `cry`:
                  let { cry } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/cry");
                  await cry(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `goodnight`:
                  let {
                    goodnight,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/goodnight");
                  await goodnight(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `happy`:
                  let { happy } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/happy");
                  await happy(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `poke`:
                  let { poke } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/poke");
                  await poke(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `sad`:
                  let { sad } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/sad");
                  await sad(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `slap`:
                  let { slap } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/slap");
                  await slap(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `smile`:
                  let { smile } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/smile");
                  await smile(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `wave`:
                  let { wave } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/wave");
                  await wave(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `wink`:
                  let { wink } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥞ᴀɴɪᴍᴇ/wink");
                  await wink(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `waifu`:
                  let {
                    waifu,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/waifu");
                  await waifu(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `neko`:
                  let { neko } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⚡ʀᴀɴᴅᴏᴍꜱ/neko");
                  await neko(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `anime`:
                  let {
                    anime,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/anime");
                  await anime(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `manga`:
                  let {
                    manga,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/manga");
                  await manga(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `wallpaper`:
                  let {
                    wallpaper,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🔎ꜱᴇᴀʀᴄʜ/wallpaper");
                  await wallpaper(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `bc`:
                case `bcgroup`:
                  let {
                    bcgroup,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/bcgroup");
                  await bcgroup(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `yt8d`:
                  let {
                    yt8d,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/yt8d");
                  await yt8d(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytbassboost`:
                  let {
                    ytbassboost,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytbassboost");
                  await ytbassboost(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytecho`:
                  let {
                    ytecho,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytecho");
                  await ytecho(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytflanger`:
                  let {
                    ytflanger,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytflanger");
                  await ytflanger(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytnightcore`:
                  let {
                    ytnightcore,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytnightcore");
                  await ytnightcore(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytphaser`:
                  let {
                    ytphaser,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytphaser");
                  await ytphaser(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytreverse`:
                  let {
                    ytreverse,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytreverse");
                  await ytreverse(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytslow`:
                  let {
                    ytslow,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytslow");
                  await ytslow(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytspeed`:
                  let {
                    ytspeed,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytspeed");
                  await ytspeed(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytsubboost`:
                  let {
                    ytsubboost,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsubboost");
                  await ytsubboost(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytsuperslow`:
                  let {
                    ytsuperspeed,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperspeed");
                  await ytsuperspeed(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytsuperslow`:
                  let {
                    ytsuperslow,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsuperslow");
                  await ytsuperslow(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytsurround`:
                  let {
                    ytsurround,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytsurround");
                  await ytsurround(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytvaporwave`:
                  let {
                    ytvaporwave,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvaporwave");
                  await ytvaporwave(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ytvibrato`:
                  let {
                    ytvibrato,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/⭕ʏᴛꜰɪʟᴛᴇʀ/ytvibrato");
                  await ytvibrato(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `bassboost`:
                  let {
                    bassboost,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/bassboost");
                  await bassboost(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `echo`:
                  let { echo } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/echo");
                  await echo(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `flanger`:
                  let {
                    flanger,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/flanger");
                  await flanger(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `nightcore`:
                  let {
                    nightcore,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/nightcore");
                  await nightcore(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `phaser`:
                  let {
                    phaser,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/phaser");
                  await phaser(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `reverse`:
                  let {
                    reverse,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/reverse");
                  await reverse(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `slow`:
                  let { slow } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/slow");
                  await slow(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `speed`:
                  let {
                    speed,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/speed");
                  await speed(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `subboost`:
                  let {
                    subboost,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/subboost");
                  await subboost(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `superspeed`:
                  let {
                    superspeed,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/superspeed");
                  await superspeed(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `surround`:
                  let {
                    surround,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/surround");
                  await surround(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `vaporwave`:
                  let {
                    vaporwave,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vaporwave");
                  await vaporwave(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `vibrato`:
                  let {
                    vibrato,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🥐ꜰɪʟᴛᴇʀꜱ/vibrato");
                  await vibrato(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `ass`:
                  let { ass } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/ass");
                  await ass(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `bdsm`:
                  let { bdsm } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/bdsm");
                  await bdsm(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `cum`:
                  let { cum } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/cum");
                  await cum(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `doujin`:
                  let {
                    doujin,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/doujin");
                  await doujin(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `feet`:
                  let { feet } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/feet");
                  await feet(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `femdom`:
                  let {
                    femdom,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/femdom");
                  await femdom(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `foxgirl`:
                  let {
                    foxgirl,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/foxgirl");
                  await foxgirl(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `glasses`:
                  let {
                    glasses,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/glasses");
                  await glasses(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `hentai`:
                  let {
                    hentai,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/hentai");
                  await hentai(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `maid`:
                  let { maid } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/maid");
                  await maid(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `masturbation`:
                  let {
                    masturbation,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/masturbation");
                  await masturbation(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `netorare`:
                  let {
                    netorare,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/netorare");
                  await netorare(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `orgy`:
                  let { orgy } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/orgy");
                  await orgy(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `panties`:
                  let {
                    panties,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/panties");
                  await panties(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `school`:
                  let {
                    school,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/school");
                  await school(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `tentacles`:
                  let {
                    tentacles,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/tentacles");
                  await tentacles(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `thighs`:
                  let {
                    thighs,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/thighs");
                  await thighs(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `uniform`:
                  let {
                    uniform,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/uniform");
                  await uniform(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `yuri`:
                  let { yuri } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍑ʜᴇɴᴛᴀɪ/yuri");
                  await yuri(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `dly`:
                case `daily`:
                  let { daily } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/daily");
                  await daily(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `fish`:
                case `pond`:
                case `fishes`:
                  let { fish } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/fish");
                  await fish(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `bet`:
                case `gamble`:
                case `betting`:
                case `roulette`:
                  let {
                    gamble,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/gamble");
                  await gamble(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `hunt`:
                case `hunting`:
                case `pokehunt`:
                  let { hunt } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/hunt");
                  await hunt(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `zoo`:
                case `forest`:
                case `animals`:
                  let { zoo } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/zoo");
                  await zoo(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                case `pay`:
                case `loan`:
                case `borrow`:
                case `payment`:
                  let { pay } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/💰ɢᴀᴍᴇ/pay");
                  await pay(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `sp`:
                case `dev`:
                case `bot`:
                case `devs`:
                case `official`:
                case `support`:
                  let {
                    support,
                  } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/support");
                  await support(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `rule`:
                case `rules`:
                  let { rules } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/🍁ᴏᴡɴᴇʀ/rules");
                  await rules(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;

                case `h`:
                case `how`:
                case `help`:
                case `menu`:
                case `allmenu`:
                  let { help } = require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🗂️S𝖙𝖔𝖗𝖆𝖌𝖊/📜ᴍᴇɴᴜ/help");
                  await help(
                    ӄ𝖚𝖓𝖆𝖎,
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    A𝖗𝖌𝖘,
                    pushName,
                    fromMe,
                    F𝖚𝖑𝖑_A𝖗𝖌𝖘,
                    quoted,
                    mime,
                    isMedia,
                    isGroup,
                    groupMetadata,
                    participants,
                    groupAdmins,
                    isBotAdmin,
                    isSenderAdmin,
                    isSenderMOD,
                    commandName,
                    ɮօɖʏ,
                    isReply,
                    mentionByTag,
                    mentionByReply
                  );
                  break;
                default:
                  return await ӄ𝖚𝖓𝖆𝖎.sendMessage(
                    Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID,
                    {
                      contextInfo: { mentionedJid: [Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.sender] },
                      image: { url: "https://i.postimg.cc/qB1f08hd/Uni.png" },
                      caption: `╔══『 𝐏𝐫𝐨𝐭𝐨𝐓𝐲𝐩𝐞® 』
║ *❣️ ɴᴀᴍᴇ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.pushName || "No_Name"}
║ *⚡ ɪᴅ:* ${Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊.chatID.split("@")[0]}
╚═══════╝


*❌ERROR:* Couldn't find any matching commands. Try again with the commands from the help list`,
                      footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ",
                      buttons: [
                        {
                          buttonId: prefix + "help",
                          buttonText: { displayText: prefix + "help" },
                          type: 1,
                        },
                        {
                          buttonId: prefix + "support",
                          buttonText: { displayText: prefix + "support" },
                          type: 1,
                        },
                      ],
                      headerType: 4,
                    },
                    {
                      quoted: Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊,
                    }
                  );
              }
            }
          }
        }
      );
    }
  );
};
`|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
var Present_Path = require(`path`);
var Present_File = require.resolve(__filename);
var Present_Name = Present_Path.basename(__filename);
fs.watchFile(Present_File, () => {
  fs.unwatchFile(Present_File);
  console.log(
    chalk.yellowBright("💡𝐈𝐧𝐟𝐨꧂ "),
    chalk.greenBright(`File Auto Updated: ${Present_Name}`)
  );
  delete require.cache[Present_File];
  require(Present_File);
});
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
