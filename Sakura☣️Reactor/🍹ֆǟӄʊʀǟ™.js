`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
(async () => {
  const { ֆǟӄʊʀǟ } = require(`../Sakura🛰️Server/🍹ֆǟӄʊʀǟ™`);
  const _𝔏𝔞𝔟_ = require(`../Sakura🛰️Server/_𝔏𝔞𝔟_`);
  const ֆǟӄʊʀǟgoose = require("mongoose");
  const Kolor = require(`chalk`);
  await ֆǟӄʊʀǟgoose
    .connect(_𝔏𝔞𝔟_.SAKURAMDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .catch((err) => {
      console.log(Kolor.red(`🍹INFO ⬰ ֆǟӄʊʀǟgoose Error: \n${err}`));
      process.exit(0);
    });
  console.log(Kolor.green(`🍹INFO ⬰ ֆǟӄʊʀǟgoose Connecting!`));
  const ᴍɪᴢᴜᴋɪɢɪᴛ = require(`simple-git`)();
  await ᴍɪᴢᴜᴋɪɢɪᴛ.fetch();
  var ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ = await ᴍɪᴢᴜᴋɪɢɪᴛ.log([`KrakinzLab..origin/KrakinzLab`]);
  if (ꜰᴇᴛᴄʜᴇᴅᴍɪᴢᴜᴋɪ.total != 0) {
    require(`simple-git`)()
      .exec(async () => {
        console.log(
          Kolor.green(
            `⬡==========================⬡    🍹Starting Sakura pull...`
          )
        );
      })
      .pull(async (ℓαвєяяσя, update) => {
        if (ℓαвєяяσя) {
          try {
            const mergeSummary = await ᴍɪᴢᴜᴋɪɢɪᴛ.merge();
            console.log(`Merged ${mergeSummary.merges.length} files`);
          } catch (ℓαвєяяσя) {
            console.log(`Merge resulted in ${Kolor.red(ℓαвєяяσя)} conflicts`);
          }
        } else if (update && update.summary.changes) {
          var child = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
          child.stdout.pipe(process.stdout);
          child.on(`exit`, async function () {
            process.exitCode = 1;
          });
        }
      });
  }
  await ֆǟӄʊʀǟ();
})();
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
