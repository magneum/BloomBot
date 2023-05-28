//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖 𝐕𝐨𝐱𝐁𝐨𝐭🕊️ 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞 🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 VoxBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 Forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of VoxBot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 DEVELOPERS: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ꪜᴏxʙᴏᴛ вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
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
> _It's a group command!_`
      );
    }
    if (!isAdmin) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }
    if (!isBotAdmin) {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Bot not Admin!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ꪜᴏxʙᴏᴛ.profilePictureUrl(ᴠᴏxᴄ.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/ꪜᴏxʙᴏᴛ.jpg";
    }

    if (ꪜᴏxʙᴏᴛ.args[0] === "open") {
      await ꪜᴏxʙᴏᴛ.groupSettingUpdate(ᴠᴏxᴄ.chat, "not_announcement")
        .then(
          async (res) =>
            await ꪜᴏxʙᴏᴛ.imgB(
              ꪜᴏxʙᴏᴛ,
              ᴠᴏxᴄ,
              `> *Group have been Opened by: ${
                ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          ᴠᴏxᴄ.reply(
            `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (ꪜᴏxʙᴏᴛ.args[0] === "close") {
      await ꪜᴏxʙᴏᴛ.groupSettingUpdate(ᴠᴏxᴄ.chat, "announcement")
        .then(
          async (res) =>
            await ꪜᴏxʙᴏᴛ.imgB(
              ꪜᴏxʙᴏᴛ,
              ᴠᴏxᴄ,
              `> *Group have been Closed by: ${
                ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname
              }*`,
              𝕯𝖎𝖘𝖕𝖑𝖆𝖞
            )
        )
        .catch((error) =>
          ᴠᴏxᴄ.reply(
            `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌Error* 
> ${jsonformat(error)}`
          )
        );
    } else if (ꪜᴏxʙᴏᴛ.args[0] === "antilink") {
      if (
        ꪜᴏxʙᴏᴛ.args[1] === "ON" ||
        ꪜᴏxʙᴏᴛ.args[1] === "on" ||
        ꪜᴏxʙᴏᴛ.args[1] === "On"
      ) {
        return await ꪜᴏxʙᴏᴛ.LinkList.findOne(
          {
            serverID: ᴠᴏxᴄ.chat,
          },
          async (error, server) => {
            if (error) {
              return ꪜᴏxʙᴏᴛ.reply(`*🕊️You:* ${
                ꪜᴏxʙᴏᴛ.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${ᴠᴏxᴄ.chat}

*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              let newServer = new ꪜᴏxʙᴏᴛ.LinkList({
                serverID: ᴠᴏxᴄ.chat,
                value: "ON",
              });
              await newServer.save();
              return await ꪜᴏxʙᴏᴛ.imgB(
                ꪜᴏxʙᴏᴛ,
                ᴠᴏxᴄ,
                `> *🔗Antilink:* _✅Has been turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              return await ꪜᴏxʙᴏᴛ.imgB(
                ꪜᴏxʙᴏᴛ,
                ᴠᴏxᴄ,
                `> *🔗Antilink:* _✅Was already turned ON_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else if (
        ꪜᴏxʙᴏᴛ.args[1] === "OFF" ||
        ꪜᴏxʙᴏᴛ.args[1] === "off" ||
        ꪜᴏxʙᴏᴛ.args[1] === "Off"
      ) {
        return await ꪜᴏxʙᴏᴛ.LinkList.findOne(
          {
            serverID: ᴠᴏxᴄ.chat,
          },
          async (error, server) => {
            if (error) {
              return ꪜᴏxʙᴏᴛ.reply(`*🕊️You:* ${
                ꪜᴏxʙᴏᴛ.pushname || "ɴᴏ_ɴᴀᴍᴇ"
              }\n*📢ID:* ${ᴠᴏxᴄ.chat}

*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_
*❌ Error* 
> There has been an API Error. Please try again later.

*🐞 Bug* 
> ${error}`);
            }

            if (!server) {
              return await ꪜᴏxʙᴏᴛ.imgB(
                ꪜᴏxʙᴏᴛ,
                ᴠᴏxᴄ,
                `> *🔗Antilink:* _❌Has been turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            } else {
              await server.delete();
              return await ꪜᴏxʙᴏᴛ.imgB(
                ꪜᴏxʙᴏᴛ,
                ᴠᴏxᴄ,
                `> *🔗Antilink:* _❌was not turned OFF_`,
                𝕯𝖎𝖘𝖕𝖑𝖆𝖞
              );
            }
          }
        );
      } else {
        await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
          react: {
            text: "❌",
            key: ᴠᴏxᴄ.key,
          },
        });
        return ᴠᴏxᴄ.reply(
          `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} close/open
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} antilink on/off`
        );
      }
    } else {
      await ꪜᴏxʙᴏᴛ.sendMessage(ᴠᴏxᴄ.chat, {
        react: {
          text: "❌",
          key: ᴠᴏxᴄ.key,
        },
      });
      return ᴠᴏxᴄ.reply(
        `*😥Sorry:* _${ꪜᴏxʙᴏᴛ.pushname || ꪜᴏxʙᴏᴛ.Tname}_

*❌Error* 
> _Argument Missing!_

*⚡Usage* 
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} close/open
> _${ꪜᴏxʙᴏᴛ.prefix}${pfname} antilink on/off`
      );
    }
  } catch (error) {
    return ꪜᴏxʙᴏᴛ.grab(ꪜᴏxʙᴏᴛ, ᴠᴏxᴄ);
  }
};
