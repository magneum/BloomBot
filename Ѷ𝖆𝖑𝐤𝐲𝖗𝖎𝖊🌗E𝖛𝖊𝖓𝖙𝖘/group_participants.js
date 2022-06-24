("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
require("../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🖋️L𝖎𝖇𝖗𝖆𝖗ყ/𝕷𝖆ყO𝖚𝖙");
const moment = require(`moment-timezone`);
let Welcome = require(`../Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🧆𝕯𝖆𝖙𝖆𝖇𝖆𝖘𝖊/🍃𝖒𝖔𝖓𝖌𝖔/setwelcome`);
const group_participants = async (update, ӄ𝖚𝖓𝖆𝖎) => {
  let 𝖕𝖋𝖕𝖀𝖘𝖊𝖗;
  let GrpMETA = await ӄ𝖚𝖓𝖆𝖎.groupMetadata(update.id);
  const Latest___ = update.participants[0];
  let GrpName = GrpMETA.subject || "";
  let GrpPart = update.participants;
  `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
  for (let One of GrpPart) {
    try {
      𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = await ӄ𝖚𝖓𝖆𝖎.profilePictureUrl(Latest___, `image`);
    } catch {
      𝖕𝖋𝖕𝖀𝖘𝖊𝖗 = `https://i.postimg.cc/1trtt9m8/Screenshot-2022-06-23-at-23-48-31-No-Profile-Picture-Girl-HD-Png-Download-kindpng.png`;
    }
    `|⬡════════════════════════════════════════════════════════════════════「  𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐀𝐩𝐢®  」═══════════════════════════════════════════════════════════════════⬡|`;
    await Welcome.findOne(
      {
        ID: update.id,
      },
      async (error, userWel) => {
        if (error) console.log(error);
        if (!userWel) return;
        if (update.action == `add`) {
          let name = ӄ𝖚𝖓𝖆𝖎.getName(One);
          return await ӄ𝖚𝖓𝖆𝖎
            .sendMessage(update.id, {
              contextInfo: { mentionedJid: [One] },
              image: { url: 𝖕𝖋𝖕𝖀𝖘𝖊𝖗 },
              caption: `*━━━━『 🥞𝐖𝐞𝐥𝐜𝐨𝐦𝐞🥞 』━━━━* 

╔══「 𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐏𝐫𝐨𝐭𝐨® 」
║ *💡 ɴᴀᴍᴇ: ${name || "No_Name"}
║ *🎐 ɢʀᴏᴜᴘ:* ${GrpName}
║ *🍀 ᴍᴀᴅᴇ:* ${moment(`${GrpMETA.creation}` * 1000)
                .tz(`Asia/Kolkata`)
                .format(`DD/MM/YYYY HH:mm:ss`)}
║ *🎍 ɴᴜᴍ ᴏꜰ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛꜱ:* ${GrpPart.length}
╚═══════╝


*━━━━『 🍯𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐍𝐨𝐭𝐞🍯 』━━━━* 
${userWel.message}`,
              footer: "*⦓ ⒸѶ𝖆𝖑𝐤𝐲𝖗𝖎𝖊 ⦔*\n_ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™_",
              buttons: [
                {
                  buttonId: prefix + "help",
                  buttonText: { displayText: prefix + "help" },
                  type: 1,
                },
                {
                  buttonId: prefix + "rules",
                  buttonText: { displayText: prefix + "rules" },
                  type: 1,
                },
              ],
              headerType: 4,
            })
            .catch((e) => console.log(e));
        }
      }
    );
  }
};
module.exports = {
  Vgrpns: group_participants,
};
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
 * * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
 */
("|⬡════════════════════════════════════════════════════════════|▷   ʍǟɖɛ ɮʏ ӄʀǟӄɨռʐʟǟɮ™  ◁|════════════════════════════════════════════════════════════⬡|");
