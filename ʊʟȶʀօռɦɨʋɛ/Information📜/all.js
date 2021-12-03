const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const fs = require(`fs`);
var randomMC = require("random-material-color");
var rg = require("random-greetings");
const { registerFont, createCanvas, loadImage } = require(`canvas`);
registerFont(`./ʊʟȶʀօռ/Honeycomb-Round.otf`, {
  family: `Honeycomb`,
});
registerFont(`./ʊʟȶʀօռ/LobsterTwo-Bold.ttf`, {
  family: `Lobster`,
});
module.exports = {
  name: `all`,
  description: ``,
  ƈʏɮօʀɢʍօʀɛ: ``,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
    let members = [];
    for (var i = 0; i < ʊʟȶʀօռ.groupMembers.length; i++) {
      members[i] = ʊʟȶʀօռ.groupMembers[i].jid;
    }
    const parID = "+91 000000000";
    var greets = [
      `ID➛ ${parID}\nJust joined the server - glhf!`,
      `ID➛ ${parID}\nJust joined. Everyone, look busy!`,
      `ID➛ ${parID}\nJust joined. Can I get a heal?`,
      `ID➛ ${parID}\nJoined your party.`,
      `ID➛ ${parID}\nJoined. You must construct additional pylons.`,
      `ID➛ ${parID}\nIs here.`,
      `ID➛ ${parID}\nWelcome, Stay awhile and listen.`,
      `ID➛ ${parID}\nWelcome, We were expecting you ( ͡° ͜ʖ ͡°)`,
      `ID➛ ${parID}\nWelcome, We hope you brought pizza.`,
      `ID➛ ${parID}\nWelcome Leave your weapons by the door.`,
      `ID➛ ${parID}\nJust Appeared.`,
      `ID➛ ${parID}\nSwoooosh. Just landed.`,
      `ID➛ ${parID}\nBrace yourselves. Just joined the server.`,
      `ID➛ ${parID}\nJust joined. Hide your bananas.`,
      `ID➛ ${parID}\nJust arrived. Seems OP - please nerf.`,
      `ID➛ ${parID}\nJust slid into the server.`,
      `ID➛ ${parID}\nHas spawned in the server.`,
      `ID➛ ${parID}\nShowed up!`,
      `ID➛ ${parID}\nHopped into the server. Kangaroo!!`,
      `ID➛ ${parID}\nJust showed up. Hold my beer.`,
    ];
    const width = 1280;
    const height = 720;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext(`2d`);
    context.fillStyle = `#555555`;
    context.fillRect(0, 0, width, height);
    context.font = `bold 50pt Lobster`;
    context.textAlign = `center`;
    context.textBaseline = `top`;
    const text = greets[Math.floor(Math.random() * greets.length)];
    const textWidth = context.measureText(text).width;
    context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
    const text2 = rg.greet();
    context.fillStyle = randomMC.getColor();
    context.fillText(text, 600, 170);
    context.fillStyle = `#fff`;
    context.font = `bold 30pt Honeycomb`;
    context.fillText(text2, 600, 530);
    const myimg = loadImage(`./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`);
    await myimg.then(() => {
      const buffer = canvas.toBuffer(`image/png`);
      fs.writeFileSync(`./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`, buffer);
      υℓтяσηℓιєηт.sendMessage(
        ʊʟȶʀօռ.chatId,
        {
          url: `./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: `*@Everyone!*`,
          contextInfo: {
            mentionedJid: members,
          },
        }
      );
    });
  },
};
