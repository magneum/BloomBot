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
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  ꪜᴏxʙᴏᴛ,
  ᴠᴏxᴄ,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!ᴠᴏxᴄ.isGroup) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> It's a group command!`
      );
    } else if (!isAdmin) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> This is an Admin only Command!`
      );
    } else if (!isBotAdmin) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> Bot not Admin!`
      );
    } else
      "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ꪜᴏxʙᴏᴛ.profilePictureUrl(ᴠᴏxᴄ.chat, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/ꪜᴏxʙᴏᴛ.jpg";
    }
    if (!ꪜᴏxʙᴏᴛ.args) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${ꪜᴏxʙᴏᴛ.prefix}${pfname} on
> ${ꪜᴏxʙᴏᴛ.prefix}${pfname} off`
      );
    } else if (
      ꪜᴏxʙᴏᴛ.args[0] === "ON" ||
      ꪜᴏxʙᴏᴛ.args[0] === "on" ||
      ꪜᴏxʙᴏᴛ.args[0] === "On"
    ) {
      return await ꪜᴏxʙᴏᴛ.nsfwCheck.findOne(
        {
          serverID: ᴠᴏxᴄ.chat,
        },
        async (error, server) => {
          if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
          if (!server) {
            new ꪜᴏxʙᴏᴛ.nsfwCheck({
              serverID: ᴠᴏxᴄ.chat,
              value: "ON",
            }).save();
            return await ꪜᴏxʙᴏᴛ.imgB(
              ꪜᴏxʙᴏᴛ,
              ᴠᴏxᴄ,
              `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else
            return await ꪜᴏxʙᴏᴛ.imgB(
              ꪜᴏxʙᴏᴛ,
              ᴠᴏxᴄ,
              `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ✅On`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
        }
      );
    } else if (
      ꪜᴏxʙᴏᴛ.args[0] === "OFF" ||
      ꪜᴏxʙᴏᴛ.args[0] === "off" ||
      ꪜᴏxʙᴏᴛ.args[0] === "Off"
    ) {
      return await ꪜᴏxʙᴏᴛ.nsfwCheck.findOne(
        {
          serverID: ᴠᴏxᴄ.chat,
        },
        async (error, server) => {
          if (error) return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ, error);
          if (!server) {
            return await ꪜᴏxʙᴏᴛ.imgB(
              ꪜᴏxʙᴏᴛ,
              ᴠᴏxᴄ,
              `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            );
          } else await server.delete();
          return await ꪜᴏxʙᴏᴛ.imgB(
            ꪜᴏxʙᴏᴛ,
            ᴠᴏxᴄ,
            `*🔖Here, ${pfname} For ${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}:*
*📜Group:* ${gmeta.subject || ""}
*🎖️Antinsfw:* ❌OFF`,
            𝕯𝖎𝖘𝖕𝖑𝖆𝖞
          );
        }
      );
    } else
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
    return ᴠᴏxᴄ.reply(
      `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> No query provided!

*⚡Usage*   
> ${ꪜᴏxʙᴏᴛ.prefix}${pfname} on
> ${ꪜᴏxʙᴏᴛ.prefix}${pfname} off`
    );
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ);
  }
};
