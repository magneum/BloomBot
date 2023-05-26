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
  try {
    if (!νℓкhat.isGroup) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await VօxB໐t.profilePictureUrl(νℓкhat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/VօxB໐t.jpg";
    }

    if (VօxB໐t.args[0] === "open") {
      await VօxB໐t.groupSettingUpdate(νℓкhat.chat, "not_announcement")
        .then(
          async (res) =>
            await VօxB໐t.imgB(
              VօxB໐t,
              νℓкhat,
              `> *Group have been Opened by: ${
                VօxB໐t.pushname || VօxB໐t.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          νℓкhat.reply(
            `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (VօxB໐t.args[0] === "close") {
      await VօxB໐t.groupSettingUpdate(νℓкhat.chat, "announcement")
        .then(
          async (res) =>
            await VօxB໐t.imgB(
              VօxB໐t,
              νℓкhat,
              `> *Group have been Closed by: ${
                VօxB໐t.pushname || VօxB໐t.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          νℓкhat.reply(
            `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (VօxB໐t.args[0] === "antilink") {
      if (
        VօxB໐t.args[1] === "ON" ||
        VօxB໐t.args[1] === "on" ||
        VօxB໐t.args[1] === "On"
      ) {
        return await VօxB໐t.LinkList.findOne(
          {
            serverID: νℓкhat.chat,
          },
          async (error, server) => {
            if (error) {
              return VօxB໐t.reply(`*🕊️You:* ${
                VօxB໐t.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              let newServer = new VօxB໐t.LinkList({
                serverID: νℓкhat.chat,
                value: "ON",
              });
              await newServer.save();
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        VօxB໐t.args[1] === "OFF" ||
        VօxB໐t.args[1] === "off" ||
        VօxB໐t.args[1] === "Off"
      ) {
        return await VօxB໐t.LinkList.findOne(
          {
            serverID: νℓкhat.chat,
          },
          async (error, server) => {
            if (error) {
              return VօxB໐t.reply(`*🕊️You:* ${
                VօxB໐t.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${νℓкhat.chat}

*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await VօxB໐t.imgB(
                VօxB໐t,
                νℓкhat,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await VօxB໐t.sendMessage(νℓкhat.chat, {
          react: {
            text: "❌",
            key: νℓкhat.key,
          },
        });
        return νℓкhat.reply(
          `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} close/open
> _${VօxB໐t.prefix}${pfname} antilink on/off`
        );
      }
    } else {
      await VօxB໐t.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${VօxB໐t.pushname || VօxB໐t.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${VօxB໐t.prefix}${pfname} close/open
> _${VօxB໐t.prefix}${pfname} antilink on/off`
      );
    }
  } catch (error) {
    return VօxB໐t.grab(VօxB໐t, νℓкhat);
  }
};
