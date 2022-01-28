`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
exports.Hold = async (ֆǟӄʊʀǟ) => {
  const fs = require("fs");
  const File = "./Sakura🛰️Server/Coolist.json";
  if (ֆǟӄʊʀǟ.fromMe) {
    const jsoncool = await JSON.parse(fs.readFileSync(File));
    await jsoncool.push(ֆǟӄʊʀǟ.sender);
    fs.writeFileSync(File, JSON.stringify(jsoncool));
    console.log("Logged-ID " + ֆǟӄʊʀǟ.sender);
    setTimeout((Error) => {
      if (Error) return console.log(Error);
      jsoncool.splice(ֆǟӄʊʀǟ.sender);
      fs.writeFileSync(File, JSON.stringify(jsoncool));
      console.log("⬡═══════════════════|🗑️ 𝐂𝐥𝐞𝐚𝐧𝐞𝐝 𝐏𝐞𝐫𝐬𝐨𝐧: " + ֆǟӄʊʀǟ.sender);
    }, 5000);
  } else {
    const jsoncool = await JSON.parse(fs.readFileSync(File));
    await jsoncool.push(ֆǟӄʊʀǟ.sender);
    fs.writeFileSync(File, JSON.stringify(jsoncool));
    console.log("⬡═══════════════════|✏️ 𝐋𝐨𝐠𝐠𝐞𝐝 𝐏𝐞𝐫𝐬𝐨𝐧: " + ֆǟӄʊʀǟ.sender);
    setTimeout((Error) => {
      if (Error) return console.log(Error);
      jsoncool.splice(ֆǟӄʊʀǟ.sender);
      fs.writeFileSync(File, JSON.stringify(jsoncool));
      console.log("⬡═══════════════════|✏️ 𝐔𝐧-𝐋𝐨𝐠𝐠𝐞𝐝 𝐏𝐞𝐫𝐬𝐨𝐧: " + ֆǟӄʊʀǟ.sender);
    }, 15000);
  }
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
