const fs = require("fs");
var randomMC = require('random-material-color');

const {
    registerFont,
    createCanvas,
    loadImage
} = require("canvas");
registerFont("./Últrðñ/honeycomb_fontfamily/Honeycomb-Round.otf", {
    family: "Honeycomb",
});
registerFont("./Últrðñ/Lobster/LobsterTwo-Bold.ttf", {
    family: "Lobster",
});

const width = 1200;
const height = 700;
const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");
context.fillStyle = "#303030";
context.fillRect(0, 0, width, height);
context.font = "bold 70pt Lobster";
context.textAlign = "center";
context.textBaseline = "top";


const text = "Advance WhatsApp Userbot\nWith 80+ Commands!";
const text2 = "Welcome User!\nThis is a Test context";

const textWidth = context.measureText(text).width;
context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
context.fillStyle = randomMC.getColor();

context.fillText(text, 600, 170);
context.fillStyle = "#fff";

context.font = "bold 50px Honeycomb";
context.fillText(text2, 600, 530);

loadImage("./Últrðñ-Welcmr.png").then((image) => {
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./Últrðñ-Welcmr.png", buffer);
});