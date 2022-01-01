try {
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
  const tenors = require(`./MizukiTenor`);
  module.exports = {
    MizukiTenorMaker(option) {
      let TenorGot;
      Object.keys(tenors).filter((key) => {
        if (key === option) TenorGot = tenors[key];
      });
      if (TenorGot) {
        return TenorGot[Math.floor(Math.random() * TenorGot.length)];
      } else {
        return `Invalid Request`;
      }
    },
  };
  // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
} catch (ℓαвєяяσя) {
  console.log(ℓαвєяяσя);
}
