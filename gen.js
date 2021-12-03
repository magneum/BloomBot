const {
    MessageType,
    Mimetype
} = require(`@adiwajshing/baileys`);
const fs = require(`fs`);
var randomMC = require('random-material-color');
var rg = require('random-greetings');
const {
    registerFont,
    createCanvas,
    loadImage
} = require(`canvas`);
registerFont(`./ʊʟȶʀօռ/Honeycomb-Round.otf`, {
    family: `Honeycomb`,
});
registerFont(`./ʊʟȶʀօռ/LobsterTwo-Bold.ttf`, {
    family: `Lobster`,
});
const Greetings = require(`../../ʊʟȶʀօռ/wlcmr`);
// ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
module.exports = {
    name: `gen`,
    description: `alarm dev`,
    ƈʏɮօʀɢʍօʀɛ: `alarm dev`,
    async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, Arc) {
        var aryy = [
            `{username}\n just joined the server - glhf!`,
            `{username}\n just joined. Everyone, look busy!`,
            `{username}\n just joined. Can I get a heal?`,
            `{username}\n joined your party.`,
            `{username}\n joined. You must construct additional pylons.`,
            `Ermagherd. {username}\n is here.`,
            `Welcome, {username}\n. Stay awhile and listen.`,
            `Welcome, {username}\n. We were expecting you ( ͡° ͜ʖ ͡°)`,
            `Welcome, {username}\n. We hope you brought pizza.`,
            `Welcome {username}\n. Leave your weapons by the door.`,
            `A wild {username}\n appeared.`,
            `Swoooosh. {username}\n just landed.`,
            `Brace yourselves. {username}\n just joined the server.`,
            `{username}\n just joined. Hide your bananas.`,
            `{username}\n just arrived. Seems OP - please nerf.`,
            `{username}\n just slid into the server.`,
            `A {username}\n has spawned in the server.`,
            `Big {username}\n showed up!`,
            `Where’s {username}\n? In the server!`,
            `{username}\n hopped into the server. Kangaroo!!`,
            `{username}\n just showed up. Hold my beer.`,
        ];
        // ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
        var Fetched = await Greetings.getMessage(ʊʟȶʀօռ.chatId, `welcome`);
        if (Fetched.message === 0 || Fetched.message === undefined || Fetched.switched === "OFF") {
            // ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
            const width = 1280;
            const height = 720;
            const canvas = createCanvas(width, height);
            const context = canvas.getContext(`2d`);
            context.fillStyle = `#555555`;
            context.fillRect(0, 0, width, height);
            context.font = `bold 50pt Lobster`;
            context.textAlign = `center`;
            context.textBaseline = `top`;
            const text = aryy[Math.floor(Math.random() * aryy.length)];
            const textWidth = context.measureText(text).width;
            context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
            const text2 = rg.greet();
            context.fillStyle = randomMC.getColor();
            context.fillText(text, 600, 170);
            context.fillStyle = `#fff`;
            context.font = `bold 50px Honeycomb`;
            context.fillText(text2, 600, 530);
            const myimg = loadImage(`./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`)
            await myimg.then(() => {
                const buffer = canvas.toBuffer(`image/png`);
                fs.writeFileSync(`./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`, buffer);
                υℓтяσηℓιєηт.sendMessage(
                    ʊʟȶʀօռ.chatId, {
                        url: `./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`
                    },
                    MessageType.image, {
                        mimetype: Mimetype.png,
                        caption: `
➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
*🖥️PostSql➛* ${Fetched.switched}`
                    }
                );
            });
        } else {
            // ➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
            const width = 1280;
            const height = 720;
            const canvas = createCanvas(width, height);
            const context = canvas.getContext(`2d`);
            context.fillStyle = `#555555`;
            context.fillRect(0, 0, width, height);
            context.font = `bold 50pt Lobster`;
            context.textAlign = `center`;
            context.textBaseline = `top`;
            const text = aryy[Math.floor(Math.random() * aryy.length)];
            const textWidth = context.measureText(text).width;
            context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120);
            const text2 = Fetched.message;
            context.fillStyle = randomMC.getColor();
            context.fillText(text, 600, 170);
            context.fillStyle = `#fff`;
            context.font = `bold 50px Honeycomb`;
            context.fillText(text2, 600, 530);
            const myimg = loadImage(`./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`)
            await myimg.then(() => {
                const buffer = canvas.toBuffer(`image/png`);
                fs.writeFileSync(`./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`, buffer);
                υℓтяσηℓιєηт.sendMessage(
                    ʊʟȶʀօռ.chatId, {
                        url: `./ʊʟȶʀօռ/ʊʟȶʀօռ-Welcmr.png`
                    },
                    MessageType.image, {
                        mimetype: Mimetype.png,
                        caption: `
➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛➛
*🖥️PostSql➛* ${Fetched.message}`
                    }
                );
            });

        }
    }
}