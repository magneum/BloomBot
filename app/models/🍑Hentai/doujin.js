require("🌟/config/index.js");
const ppth = require("path");
const tpth = ppth.basename(__filename);
const currFile = tpth.slice(0, -3).toLowerCase();

module.exports = async (
  BloomBot,
  Sockey,
  gmeta,
  isAdmin,
  groupName,
  isbotAdmin,
  groupAdmins,
  participants
) => {
  try {
    return await BloomBot.nsfwCheck.findOne(
      {
        serverId: Sockey.chat,
      },
      async (error, server) => {
        if (error) return BloomBot.handlerror(BloomBot, Sockey, error);

        switch (!!server) {
          case false:
            await BloomBot.sendMessage(Sockey.chat, {
              react: {
                text: "❌",
                key: Sockey.key,
              },
            });
            return Sockey.reply(
              `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*
> NSFW Commands have been turned off for this group.
> You may ask the admins to turn it on.`
            );

          case true:
            await BloomBot.magfetch(
              BloomBot,
              "https://magneum.vercel.app/api/hentai?q=" + currFile
            ).then(async (response) => {
              const mgdata = response.data;

              switch (!mgdata[0].meta.url) {
                case true:
                  await BloomBot.sendMessage(Sockey.chat, {
                    react: {
                      text: "❌",
                      key: Sockey.key,
                    },
                  });
                  return Sockey.reply(
                    `*😥Apologies:* _${BloomBot.pushname || BloomBot.tagname}_

*❌Error:*
> There has been an API Error. Please try again later.`
                  );

                case false:
                  await BloomBot.imagebutton(
                    BloomBot,
                    Sockey,
                    `*🌻Here, ${currFile} for ${BloomBot.pushname}:*

> *Description:* ${mgdata[0].meta.description}
> *Api Fetch Url:* https://magneum.vercel.app/api/hentai`,
                    mgdata[0].meta.url
                  );
              }
            });
        }
      }
    );
  } catch (error) {
    return BloomBot.handlerror(BloomBot, Sockey, error);
  }
};
module.exports.aliases = [];
