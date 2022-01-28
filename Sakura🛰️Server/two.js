// (async () => {
//   const { registerFont } = require(`canvas`);
//   registerFont(`./Sakura🛰️Server/LobsterTwo-Bold.ttf`, {
//     family: `LobsterTwo-Bold`,
//   });
//   registerFont(`./Sakura🛰️Server/SlouchybrushRegular-eZnEB.ttf`, {
//     family: `SlouchybrushRegular`,
//   });
//   registerFont(`./Sakura🛰️Server/TheHeartOfEverythingDemo-KRdD.ttf`, {
//     family: `TheHeartOfEverythingDemo`,
//   });
//   var randomMC = require("random-material-color");
//   const Canvas = require("canvas");
//   var color = randomMC.getColor();
//   const fs = require(`fs`);
//   const canvas = Canvas.createCanvas(800, 300);
//   const ctx = canvas.getContext("2d");
//   const background = await Canvas.loadImage(
//     "https://i.postimg.cc/QdqLYYc2/2341297.jpg"
//   );
//   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//   ctx.strokeStyle = color;
//   ctx.strokeRect(0, 0, canvas.width, canvas.height);
//   ctx.font = "50px TheHeartOfEverythingDemo";
//   ctx.fillStyle = color;
//   ctx.fillText(`How Check!`, 260, 120);
//   ctx.beginPath();
//   ctx.lineWidth = 2;
//   ctx.fillStyle = color;
//   ctx.moveTo(220, 135);
//   ctx.lineTo(690, 135);
//   ctx.lineTo(220, 170);
//   ctx.lineTo(220, 135);
//   ctx.fill();
//   ctx.closePath();
//   ctx.beginPath();
//   ctx.arc(45, 65, 220, 0, Math.PI * 2, true);
//   ctx.lineWidth = 2;
//   ctx.fillStyle = color;
//   ctx.moveTo(220, 135);
//   ctx.lineTo(220, 170);
//   ctx.lineTo(220, 135);
//   ctx.fill();
//   ctx.font = "30px LobsterTwo-Bold";
//   ctx.fillStyle = color;
//   ctx.fillText(`Beauty Check!`, 260, 130);
//   ctx.closePath();
//   ctx.beginPath();
//   ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
//   ctx.closePath();
//   ctx.clip();
//   const avatar = await Canvas.loadImage(
//     `https://i.postimg.cc/XqPBcyq0/image.png`
//   );
//   ctx.drawImage(avatar, 25, 50, 200, 200);
//   const out = fs.createWriteStream(`${Date.now()}.jpeg`);
//   const stream = canvas.createJPEGStream();
//   stream.pipe(out);
//   out.on(`finish`, () => {
//     console.log("Finsihed Making!");
//   });
// })();
