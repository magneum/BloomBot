//  ╔⧉༻ [ 𝐕𝐨𝐱𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║ We won't be responsible for any kind of ban due to this bot.
//  ║ VoxBot was made for fun purpose and to make group management easier.
//  ║ It's your concern if you spam and gets your account banned.
//  ║ Also, Forks won't be entertained.
//  ║ If you fork this repo and edit plugins, it's your concern for further updates.
//  ║ Forking Repo is fine. But if you edit something we will not provide any help.
//  ║ In short, Fork At Your Own Risk.
//  ║
//  ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ VօxB໐t вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  VօxB໐t,
  νℓкhat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  await VօxB໐t.sendMessage(νℓкhat.chat, {
    react: {
      text: "🔖",
      key: νℓкhat.key,
    },
  });
  try {
    if (!VօxB໐t.frome && !VօxB໐t.isSudoWorker) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌Error* 
> _Owner Only Command!_`
      );
    }
    if (!VօxB໐t.args.join(" ")) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌Error* 
> _No query provided!_

*⚡Usage*   
> _${VօxB໐t.prefix}${pfname} message_`
      );
    }

    let VօxB໐tGroups = await VօxB໐t.groupFetchAllParticipating();
    let vGroup = Object.entries(VօxB໐tGroups)
      .slice(0)
      .map((entry) => entry[1]);
    let places = vGroup.map((v) => v.id);
    νℓкhat.reply(
      `Broadcasting in ${places.length} Group Chat, in ${
        places.length * 1.5
      } seconds`
    );

    for (let cron of places) {
      await VօxB໐t.sendMessage(cron, {
        video: {
          url: "./src/Notice.mp4",
        },
        mimetype: "video/mp4",
        fileName: "Synthia-Notice.mp4",
        caption: `┌『*VLKYRE📢BROADCAST* 』
│║⦁ *💫By:*  ${VօxB໐t.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
│║⦁ *🕛Time:*  ${VօxB໐t.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
┕╚═══════⋑

*🔖Message:*
${VօxB໐t.args.join(" ")}`,
      });
    }
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, νℓкhat);
  }
};
