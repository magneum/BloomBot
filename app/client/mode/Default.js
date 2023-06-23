require("🌟/config/index.js");
module.exports = async (BloomBot, Sockey, update, store) => {
  if (!Sockey.isGroup && BloomBot.command) {
    if (BloomBot.command == "bot") {
      if (MAINTAINANCE_MODE === "on" && !BloomBot.isSudo) {
        return await BloomBot.sendMessage(
          Sockey.chat,
          {
            gifPlayback: true,
            video: BloomBot.fs.readFileSync("./public/Maintenance.mp4"),
            caption: `*📢Maintenance Mode On*
*😥Apologies:* _${BloomBot.pushname}_
> come back another time`,
            mentions: [Sockey.sender],
          },
          { quoted: Sockey },
        );
      } else {
        require("🌟/lib/library")(BloomBot, Sockey, update, store);
        return await BloomBot.sendMessage(Sockey.chat, {
          react: {
            text: "🌻",
            key: Sockey.key,
          },
        });
      }
    } else {
      await BloomBot.UserPrivate.findOne(
        {
          Id: Sockey.sender,
        },
        async (error, user) => {
          if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
          if (!user) {
            new BloomBot.UserPrivate({
              Id: Sockey.sender,
              Amount: 1,
            })
              .save()
              .catch(async (error) => BloomBot.handlerror(BloomBot, Sockey, error));
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*Dear* _${BloomBot.pushname || BloomBot.tagname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

*🌿Punishment*
• Warnings 1/4
• You Will be Auto-Blocked After 4 warnings!`,
              BloomBot.display,
            );
          } else if (user.Amount < 4) {
            user.Amount = user.Amount + 1;
            await user
              .save()
              .catch(async (error) => BloomBot.handlerror(BloomBot, Sockey, error));
            return await BloomBot.imagebutton(
              BloomBot,
              Sockey,
              `*Dear* _${BloomBot.pushname || BloomBot.tagname}_
• This Private Is Being Guarded By BloomBot Ai!
• Do Not Spam The Chat Box!

*🌿Punishment*
• Warnings ${user.Amount}/4
• You Will be Auto-Blocked After 4 warnings!`,
              BloomBot.display,
            );
          } else {
            await user
              .delete()
              .catch(async (error) => BloomBot.handlerror(BloomBot, Sockey, error));
            return await BloomBot.updateBlockStatus(Sockey.sender, "block").catch(
              (error) => BloomBot.handlerror(BloomBot, Sockey, error),
            );
          }
        },
      );
    }
  } else {
    if (Sockey.isGroup && BloomBot.command) {
      BloomBot.userBanCheck.findOne(
        {
          Id: Sockey.sender,
        },
        (error, banCheck) => {
          if (error) {
            return Sockey.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:*
• ${error}`);
          }
          BloomBot.userBanCheck.findOne(
            {
              Id: Sockey.chat,
            },
            async (error, groupCheck) => {
              if (error) {
                return Sockey.reply(`*😥Apologies:* _${BloomBot.pushname}_

*❌Error:* There has been an API Error. Please try again later.
*🐞Bug:*
• ${error}`);
              }
              if (banCheck && !BloomBot.byMyself && !BloomBot.isSudo) return;
              if (groupCheck && !BloomBot.byMyself && !BloomBot.isSudo) return;
              await BloomBot.LinkList.findOne(
                {
                  serverId: Sockey.chat,
                },
                async (error, server) => {
                  if (error) return BloomBot.handlerror(BloomBot, Sockey, error);
                  if (!server) return;
                  return require("🌟/auth/antilink")(BloomBot, Sockey);
                },
              );
              // respA = await BloomBot.groupMetadata("120363020792949649@g.us");
              // for (const i = 0; i < respA.participants.length; i++)
              // BloomBot.memberRespA[i] = respA.participants[i].id;
              // respB = await BloomBot.groupMetadata("120363089188116481@g.us");
              // for (const i = 0; i < respB.participants.length; i++)
              // BloomBot.memberRespB[i] = respB.participants[i].id;
              // if (
              // !BloomBot.fromme &&
              // !BloomBot.isSudo &&
              // !BloomBot.constResp.includes(BloomBot.command) &&
              // !BloomBot.memberRespA.includes(Sockey.sender) &&
              // !BloomBot.memberRespB.includes(Sockey.sender)
              // ) {
              // return await BloomBot.sendMessage(
              // Sockey.chat,
              // {
              // gifPlayback: true,
              // video: BloomBot.fs.readFileSync("./public/how.mp4"),
              // caption: `*📢Verification Needed*
              // *😥Apologies:* _${BloomBot.pushname}_
              // > You need to be verified to use bot...
              // > join official group
              // > chat.whatsapp.com/DU224C0c1ZO68yEXIAtvTi
              // *⚙️Webpage:*
              // > bit.ly/magneum
              // > Login To Your Dashboard`,
              // mentions: [Sockey.sender],
              // },
              // { quoted: Sockey }
              // );
              // }
              if (MAINTAINANCE_MODE === "on" && !BloomBot.isSudo) {
                return await BloomBot.sendMessage(
                  Sockey.chat,
                  {
                    gifPlayback: true,
                    video: BloomBot.fs.readFileSync("./public/Maintenance.mp4"),
                    caption: `*📢Maintenance Mode On*
*😥Apologies:* _${BloomBot.pushname}_
> come back another time`,
                    mentions: [Sockey.sender],
                  },
                  { quoted: Sockey },
                );
              }
              await BloomBot.sendMessage(Sockey.chat, {
                react: {
                  text: "🌻",
                  key: Sockey.key,
                },
              });
              return await require("🌟/lib/library")(
                BloomBot,
                Sockey,
                update,
                store,
              );
            },
          );
        },
      );
    }
  }
  return BloomBot;
};
