(async () => {
  const { 爪𝖎𝖟𝖚ӄ𝖎 } = require(`../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/🍁爪𝖎𝖟𝖚ӄ𝖎™`);
  const AutoKrakz = require(`../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/𝓜𝖎𝖟𝖚ӄ𝖎ɢɪᴛ`);
  const _𝔏𝔞𝔟_ = require(`../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
  const ʍɨʐʊӄɨgoose = require("mongoose");
  const Kolor = require(`chalk`);
  await ʍɨʐʊӄɨgoose
    .connect(_𝔏𝔞𝔟_.MizukiMdb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(async () => {
      console.log(Kolor.bgGreenBright.black(`ʍɨʐʊӄɨgoose Connecting!`));
      await AutoKrakz();
      await 爪𝖎𝖟𝖚ӄ𝖎();
    })
    .catch((err) => {
      console.log(Kolor.bgRedBright.black(`ʍɨʐʊӄɨgoose Error: \n${err}`));
      process.exit(1);
    });
})();
