const {
    MessageType,
    Mimetype
} = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../Últrðñ/UltronSitreper`);
const fs = require("fs");
var randomMC = require('random-material-color');
const {
    registerFont,
    createCanvas,
    loadImage
} = require("canvas");
registerFont("./Últrðñ/Honeycomb-Round.otf", {
    family: "Honeycomb",
});
registerFont("./Últrðñ/LobsterTwo-Bold.ttf", {
    family: "Lobster",
});
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
    name: `gen`,
    description: `alarm dev`,
    ƈʏɮօʀɢʍօʀɛ: `alarm dev`,
    async handle(ӄʀǟӄɨռʐ, chat, Últrðñ, arguments) {
        if (arguments.length === 0) {
            await ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId,
                "❌",
                MessageType.text
            );
            await ӄʀǟӄɨռʐ.sendMessage(
                Últrðñ.chatId, {
                    url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`
                },
                MessageType.image, {
                    mimetype: Mimetype.jpeg,
                    caption: `*Seems like someone*`,
                }

            );
            return;
        } else if (arguments.length <= 10) {
            const width = 1366;
            const height = 768;
            const canvas = createCanvas(width, height);
            const context = canvas.getContext("2d");
            context.fillStyle = "#404040";
            context.fillRect(0, 0, width, height);
            context.font = "bold 70pt Lobster";
            context.textAlign = "center";
            context.textBaseline = "top";
            const text = arguments.join(` `) === undefined ? "Advance WhatsApp Userbot\nWith 80+ Commands!" : arguments.join(` `);
            const text2 = "Welcome User!\nThis is a Test context";
            const textWidth = context.measureText(text).width;
            context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
            context.fillStyle = randomMC.getColor();
            context.fillText(text, 600, 170);
            context.fillStyle = "#fff";
            context.font = "bold 50px Honeycomb";
            context.fillText(text2, 600, 530);
            const myimg = loadImage("./Últrðñ/Últrðñ-Welcmr.png")
            await myimg.then((image) => {
                const buffer = canvas.toBuffer("image/png");
                fs.writeFileSync("./Últrðñ/Últrðñ-Welcmr.png", buffer);
                ӄʀǟӄɨռʐ.sendMessage(
                    Últrðñ.chatId, {
                        url: "./Últrðñ/Últrðñ-Welcmr.png"
                    },
                    MessageType.image, {
                        mimetype: Mimetype.png
                    }
                );
            });
        }
    }
}