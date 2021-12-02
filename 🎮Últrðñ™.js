const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ᴋʀᴀᴋɪɴᴢᴋᴏɴ = require(`./ƈʏӄօռ/sessionString`);
const Welcmr = require(`./Últrðñ/wlcmr`);
const config = require(`./Últrðñ/config`);
const ÚltrðñSudo = [`block`, `unblock`];
const Users = require(`./Últrðñ/user`);
const wa = require(`./ƈʏӄօռ/helper`);
const Cyborgsql = config.POSTQL;
const Kolor = require(`chalk`);
const fs = require(`fs`);
var ӄʀǟӄɨռʐ = ᴋʀᴀᴋɪɴᴢᴋᴏɴ.WhatsApp;
async function CyborgRunner() {
  ӄʀǟӄɨռʐ.logger.level = `error`;
  var commandHandler = new Map();
  try {
    var session = ᴋʀᴀᴋɪɴᴢᴋᴏɴ.restoreSession(config.ULTRON);
    ӄʀǟӄɨռʐ.loadAuthInfo(session);
  } catch (cᴇʀʀᴏʀ) {
    if (
      cᴇʀʀᴏʀ instanceof TypeError ||
      cᴇʀʀᴏʀ.message === `given authInfo is null` ||
      cᴇʀʀᴏʀ instanceof SyntaxError
    ) {
      console.log(
        Kolor.redBright.bold(
          `Incorrect Session String. Please authenticate again!`
        )
      );
      fs.writeFileSync(`./Últrðñ.env`, `ULTRON=```);
      process.exit(0);
    } else {
      console.log(
        Kolor.redBright.bold(`SOMETHING WENT WRONG.\n`),
      );
      process.exit(0);
    }
  }
  // ☢️================================================================================☢️
  ӄʀǟӄɨռʐ.on(`connecting`, async () => {
    console.clear();
    console.log(
      Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱...🤖`)
    );
  });
  // ☢️================================================================================☢️
  ӄʀǟӄɨռʐ.on(`open`, async () => {
    console.log(
      Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘊𝘰𝘯𝘯𝘦𝘤𝘵𝘪𝘯𝘨 𝘵𝘰 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦...✅`)
    );
    try {
      await Cyborgsql.authenticate();
    } catch (error) {
      console.error(`⧪ᴇʀʀᴏʀ❌⬰ Unable to connect to the database:`, error);
    }
    console.log(
      Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘚𝘺𝘯𝘤𝘪𝘯𝘨 𝘋𝘢𝘵𝘢 𝘸𝘪𝘵𝘩 𝘏𝘰𝘴𝘵...✅`)
    );
    await Cyborgsql.sync();
    console.log(Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  𝘐𝘯𝘴𝘵𝘢𝘭𝘭𝘪𝘯𝘨 𝘗𝘭𝘶𝘨𝘪𝘯𝘴...✅`));
    const Folders = fs.readdirSync(`./Últrðñ_ℌ𝔦𝔳𝔢`);
    for (const folder of Folders) {
      const commandFiles = fs
        .readdirSync(`./Últrðñ_ℌ𝔦𝔳𝔢/${folder}`)
        .filter((file) => file.endsWith(`.js`));
      for (const file of commandFiles) {
        const command = require(`./Últrðñ_ℌ𝔦𝔳𝔢/${folder}/${file}`);
        commandHandler.set(command.name, command);
        console.log(
          Kolor.yellowBright.bold(`⧪ɪɴꜰᴏ💡⬰  `),
          Kolor.greenBright.bold(command.name.toUpperCase()),
          Kolor.whiteBright.bold(command.description.toLowerCase())
        );
      }
    }
    console.log(
      Kolor.yellowBright.bold(
        `=================😈    |  Últrðñ  |    😈=================`
      ),
      Kolor.yellowBright.bold(
        `\n=================😈    |  Últrðñ  |    😈=================`
      )
    );
  });
  await ӄʀǟӄɨռʐ.connect();
  ӄʀǟӄɨռʐ.on(`group-participants-update`, async (update) => {
    console.log(
      `------------------- GROUP PARTICIPANT UPDATE -------------------`
    );
    console.log(update.participants);
    console.log(update.action);
    console.log(update.jid);
    var groupId = update.jid;
    try {
      if (update.action === `add`) {
        var enable = await Welcmr.checkSettings(groupId, `welcome`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        var Msg = await Welcmr.getMessage(groupId, `welcome`);
        ӄʀǟӄɨռʐ.sendMessage(groupId, Msg.message, MessageType.text);
        return;
      } else if (update.action === `remove`) {
        var enable = await Welcmr.checkSettings(groupId, `goodbye`);
        if (enable === false || enable === `OFF`) {
          return;
        }
        var Msg = await Welcmr.getMessage(groupId, `goodbye`);

        ӄʀǟӄɨռʐ.sendMessage(groupId, Msg.message, MessageType.text);
        return;
      }
    } catch (cᴇʀʀᴏʀ) {
      console.log(`Greeting message are off`);
    }
  });
  // ☢️================================================================================☢️
  ӄʀǟӄɨռʐ.on(`chat-update`, async (chat) => {
    if (!chat.hasNewMessage) return;
    if (!chat.messages) return;
    chat = chat.messages.all()[0];
    var sender = chat.key.remoteJid;
    const groupMetadata = sender.endsWith(`@g.us`)
      ? await ӄʀǟӄɨռʐ.groupMetadata(sender)
      : ``;
    var Últrðñ = wa.resolve(chat, ӄʀǟӄɨռʐ, groupMetadata);
    const ÚltrðñRights = [
      `add`,
      `demote`,
      `invite`,
      `mute`,
      `promote`,
      `remove`,
      `unmute`,
      `welcome`,
      `disappear`,
      `goodbye`,
      `setdp`,
      `tagall`,
      // Below are NSFW Commands!
      `ass`,
      `bdsm`,
      `blowjob`,
      `cum`,
      `doujin`,
      `feet`,
      `femdom`,
      `foxgirl`,
      `glasses`,
      `hentai`,
      `maid`,
      `masturbation`,
      `netorare`,
      `orgy`,
      `panties`,
      `pussy`,
      `school`,
      `tentacles`,
      `thighs`,
      `uniform`,
      `yuri`,
    ];
    if (Últrðñ.isCmd && !Últrðñ.fromMe && !Últrðñ.isSenderSUDO) {
      if (config.PRIVACY === `public`) {
        if (
          ÚltrðñRights.indexOf(Últrðñ.commandName) >= 0 &&
          !Últrðñ.isSenderGroupAdmin
        ) {
          console.log(
            Kolor.redBright.bold(`⧪ɪɴꜰᴏ💡⬰  ÚltrðñRights `),
            Kolor.greenBright.bold(`${Últrðñ.commandName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          return ӄʀǟӄɨռʐ.sendMessage(
            Últrðñ.chatId,
            `You need to be an admin to execute this command.`,
            MessageType.text
          );
        } else if (
          ÚltrðñSudo.indexOf(Últrðñ.commandName) >= 0 &&
          !Últrðñ.isSenderSUDO
        ) {
          console.log(
            Kolor.redBright.bold(`⧪ɪɴꜰᴏ💡⬰  sudo commmand `),
            Kolor.greenBright.bold(`${Últrðñ.commandName}`),
            Kolor.redBright.bold(`not executed in public Work Type.`)
          );
          var messageSent = await Users.getUser(Últrðñ.chatId);
          if (messageSent) {
            return console.log(
              Kolor.blue(
                `⧪ɪɴꜰᴏ💡⬰  Promo message had already been sent to ` +
                  Últrðñ.chatId
              )
            );
          } else {
            await Users.addUser(Últrðñ.chatId);
            return ӄʀǟӄɨռʐ.sendMessage(
              Últrðñ.chatId,
              `Últrðñ is Alive!.
I guess you were trying to use my commands in *${Últrðñ.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo users to use the command *${commandName}* .
If you are keen to use my features, you can deploy Últrðñ on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
              {
                worktype: `public`,
                groupName: Últrðñ.groupName ? Últrðñ.groupName : `private chat`,
                commandName: Últrðñ.commandName,
              },
              MessageType.text,
              {
                contextInfo: {
                  stanzaId: chat.key.id,
                  participant: Últrðñ.sender,
                  quotedMessage: {
                    conversation: Últrðñ.body,
                  },
                },
              }
            );
          }
        }
      } else if (config.PRIVACY === `private` && !Últrðñ.isSenderSUDO) {
        console.log(
          Kolor.redBright.bold(`⧪ɪɴꜰᴏ💡⬰  commmand `),
          Kolor.greenBright.bold(`${Últrðñ.commandName}`),
          Kolor.redBright.bold(`not executed in private Work Type.`)
        );
        var messageSent = await Users.getUser(Últrðñ.chatId);
        if (messageSent) {
          return console.log(
            Kolor.blue(
              `⧪ɪɴꜰᴏ💡⬰  Promo message had already been sent to ` +
                Últrðñ.chatId
            )
          );
        } else {
          await Users.addUser(Últrðñ.chatId);
          return ӄʀǟӄɨռʐ.sendMessage(
            Últrðñ.chatId,
            `Últrðñ is Alive!.
I guess you were trying to use my commands in *${Últrðñ.groupName}*. However, the bot is currently in ${worktype} mode. This enables only the owner and sudo users to use the command *${commandName}* .
If you are keen to use my features, you can deploy Últrðñ on your own account without much effort, in less than 5 minutes! Check out the links given below.`,
            {
              worktype: `private`,
              groupName: Últrðñ.groupName ? Últrðñ.groupName : `private chat`,
              commandName: Últrðñ.commandName,
            },
            MessageType.text,
            {
              contextInfo: {
                stanzaId: chat.key.id,
                participant: Últrðñ.sender,
                quotedMessage: {
                  conversation: Últrðñ.body,
                },
              },
            }
          );
        }
      }
    }
    if (Últrðñ.isCmd) {
      console.log(
        Kolor.redBright.bold(
          `⧪ɪɴꜰᴏ💡⬰  ${Últrðñ.commandName.toUpperCase()} command executed.`
        )
      );
      const command = commandHandler.get(Últrðñ.commandName);
      var arguments = Últrðñ.body.trim().split(/\s+/).slice(1);
      if (!command) {
        return ӄʀǟӄɨռʐ.sendMessage(
          Últrðñ.chatId,
          {
            url: `https://i.postimg.cc/KcNwHtZt/ltr.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            caption: `_*Invalid Últrðñ Command!*_

*Use  any of these prefix .?!*
*like:* _?help_`,
          }
        );
      } else if (command && Últrðñ.commandName == `help`) {
        try {
          command.handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments, commandHandler);
          return;
        } catch (cᴇʀʀᴏʀ) {
          console.log(Kolor.redBright.bold(`⧪ᴇʀʀᴏʀ❌⬰ `, cᴇʀʀᴏʀ));
          return;
        }
      }
      try {
        command
          .handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments)
          .catch((cᴇʀʀᴏʀ) => console.log(`⧪ᴇʀʀᴏʀ❌⬰ ` + cᴇʀʀᴏʀ));
      } catch (cᴇʀʀᴏʀ) {
        console.log(Kolor.redBright.bold(`⧪ᴇʀʀᴏʀ❌⬰ `, cᴇʀʀᴏʀ));
      }
    }
  });
}
CyborgRunner().catch((cᴇʀʀᴏʀ) =>
  console.log(`⧪ᴇʀʀᴏʀ❌⬰ : %s`, Kolor.redBright.bold(cᴇʀʀᴏʀ))
);
