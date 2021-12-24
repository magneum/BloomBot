// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Cooldown = require("node-cooldown");
var cooldown = new Cooldown(5000);
console.log(
  cooldown.check(
    "some ID. note it should be unique and dosend change; type: any"
  )
);
setTimeout(() => {
  console.log(
    cooldown.check(
      "some ID. note it should be unique and dosend change; type: any"
    )
  );
}, 500);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
