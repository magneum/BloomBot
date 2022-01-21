(async () => {
  const { ֆǟӄʊʀǟ } = require(`../Sakura🛰️Server/🍁ֆǟӄʊʀǟ™`);
  const AutoKrakz = require(`../Sakura🛰️Server/𝓜𝖎𝖟𝖚ӄ𝖎ɢɪᴛ`);
  const _𝔏𝔞𝔟_ = require(`../Sakura🛰️Server/_𝔏𝔞𝔟_`);
  const ʍɨʐʊӄɨgoose = require("mongoose");
  const Kolor = require(`chalk`);
  await ʍɨʐʊӄɨgoose
    .connect(_𝔏𝔞𝔟_.SakuraMdb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(async () => {
      console.log(Kolor.bgGreenBright.black(`ʍɨʐʊӄɨgoose Connecting!`));
      await AutoKrakz();
      await ֆǟӄʊʀǟ();
    })
    .catch((err) => {
      console.log(Kolor.bgRedBright.black(`ʍɨʐʊӄɨgoose Error: \n${err}`));
      process.exit(1);
    });
})();
