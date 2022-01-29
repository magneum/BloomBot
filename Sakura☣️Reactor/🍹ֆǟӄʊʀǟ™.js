`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
(async () => {
  const { ֆǟӄʊʀǟ, ӄʀǟӄɨռʐ } = require(`../Sakura🛰️Server/🍹ֆǟӄʊʀǟ™`);
  const _𝔏𝔞𝔟_ = require(`../Sakura🛰️Server/_𝔏𝔞𝔟_`);
  const ֆǟӄʊʀǟgoose = require("mongoose");
  const Kolor = require(`chalk`);
  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
  try {
    const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
    await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
    var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([`KrakinzLab..origin/KrakinzLab`]);
    if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
      require(`simple-git`)()
        .exec(async () => {
          console.log(
            Kolor.green(`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @Owner

╔════◇🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜)
║💡INFO ⬰ 𝐍𝐞𝐰 𝐔𝐩𝐝𝐚𝐭𝐞 𝐩𝐞𝐧𝐝𝐢𝐧𝐠, 𝐮𝐩𝐝𝐚𝐭𝐢𝐧𝐠...
╚════════════╝`)
          );
        })
        .pull(async (Error, update) => {
          if (Error) {
            try {
              const mergeSummary = await ᴍɪᴢᴜᴋɪɢɪᴛ.merge();
              console.log(
                Kolor.green(`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @Owner

╔════◇🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜)
║💡INFO ⬰ _𝗔𝘂𝘁𝗼 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗪𝗶𝘁𝗵 𝗡𝗲𝘄 𝗟𝗼𝗰𝗮𝗹 𝗠𝗲𝗿𝗴𝗲..._
║ 𝗟𝗮𝘁𝗲𝘀𝘁 𝗖𝗵𝗮𝗻𝗴𝗲𝘀: _[${mergeSummary.merges.length}]_
╚════════════╝`)
              );
            } catch (Error) {
              console.log(
                Kolor.red(`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @Owner

╔════◇🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜)
║❌ERROR ⬰ 𝗠𝗲𝗿𝗴𝗲 𝗿𝗲𝘀𝘂𝗹𝘁𝗲𝗱 𝗶𝗻 𝗰𝗼𝗻𝗳𝗹𝗶𝗰𝘁𝘀!
╚════════════╝
${Error}`)
              );
            }
          }
          if (update && update.summary.changes) {
            var child = require(`child_process`).exec(`npm i --force`);
            child.stdout.pipe(process.stdout);
            child.on(`exit`, async function () {
              process.exitCode(1);
              console.log(
                Kolor.red(`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @Owner

╔════◇🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜)
║💡INFO ⬰ 𝗔𝘂𝘁𝗼 𝗨𝗽𝗱𝗮𝘁𝗲𝗱...
╚════════════╝`)
              );
            });
          }
        });
    }
  } catch (Error) {
    console.log(
      Kolor.red(`🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @Owner

╔════◇🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜)
║❌ERROR ⬰ 𝗠𝗲𝗿𝗴𝗲 𝗿𝗲𝘀𝘂𝗹𝘁𝗲𝗱 𝗶𝗻 𝗰𝗼𝗻𝗳𝗹𝗶𝗰𝘁𝘀!
║${Error}
╚════════════╝`)
    );
  }
  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
  try {
    console.log(Kolor.yellow(`🍹INFO ⬰ SakuraGoose Connecting!`));
    await ֆǟӄʊʀǟgoose
      .connect(_𝔏𝔞𝔟_.SAKURAMDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .catch((err) => {
        console.log(Kolor.red(`🍹INFO ⬰ SakuraGoose Error: \n${err}`));
        process.exit(0);
      });
    console.log(Kolor.green(`🍹INFO ⬰ SakuraGoose Connected!`));
  } catch (ℓαвєяяσя) {
    console.log(ℓαвєяяσя);
    console.log(Kolor.red(`❌ERROR ⬰ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`));
    process.exit(1);
  }
  `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
  ӄʀǟӄɨռʐ.logger.level = "error";
  await ֆǟӄʊʀǟ().catch((ℓαвєяяσя) => {
    console.log(ℓαвєяяσя);
    console.log(Kolor.red(`❌ERROR ⬰ 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗱𝗲𝗽𝗹𝗼𝘆 𝘆𝗼𝘂𝗿 𝗯𝗼𝘁!`));
    process.exit(1);
  });
})();
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
