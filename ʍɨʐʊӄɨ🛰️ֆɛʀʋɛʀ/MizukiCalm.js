`🍁--------------------------------------------------------------------| 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ |`;
exports.MizukiCalm = async (𝓜𝖎𝖟𝖚ӄ𝖎) => {
  const fs = require("fs");
  const jsoncool = JSON.parse(fs.readFileSync(`./Coolist.json`));
  jsoncool.push(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
  fs.writeFileSync(`./Coolist.json`, JSON.stringify(jsoncool));
  console.log("Written!");
  setTimeout(async (error) => {
    if (error) console.log(error);
    jsoncool.splice(𝓜𝖎𝖟𝖚ӄ𝖎.sender);
    fs.writeFileSync(`./Coolist.json`, JSON.stringify(jsoncool));
    console.log("Removed!");
  }, 15000);
};
`🍁--------------------------------------------------------------------| 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ |`;
