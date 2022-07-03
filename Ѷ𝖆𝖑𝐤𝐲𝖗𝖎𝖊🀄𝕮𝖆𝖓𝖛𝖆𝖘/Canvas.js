("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
let { registerFont, createCanvas, loadImage } = require("canvas");
let ʀᴀɴᴅᴏᴍᴄ = require("random-material-color");
let ʀᴀɴᴅᴏᴍᴋ = ʀᴀɴᴅᴏᴍᴄ.getColor();
let Fs = require("fs");
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Heart_Of_Everything/Heart_Of_Everything.ttf", { family: "Heart_Of_Everything" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Housttely_Signature/Housttely_Signature.ttf", { family: "Housttely_Signature" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Fall_is_Coming/Fall_is_Coming.ttf", { family: "Fall_is_Coming" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Slouchy_Brush/Slouchy_Brush.ttf", { family: "Slouchy_Brush" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Kashmir_Rosy/Kashmir_Rosy.otf", { family: "Kashmir_Rosy" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Japanese/Japanese.ttf", { family: "Japanese" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Honeybee/Honeybee.ttf", { family: "Honeybee" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Angeles/Angeles.ttf", { family: "Angeles" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Shalma/Shalma.otf", { family: "Shalma" });
registerFont("./Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘/Aquire/Aquire.otf", { family: "Aquire" });
let W = 1280;
let H = 720;
let ᴄᴀɴᴠᴀꜱ = createCanvas(W, H);
let 𝖈𝖔𝖓𝖙𝖊𝖝𝖙 = ᴄᴀɴᴠᴀꜱ.getContext("2d");
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = ʀᴀɴᴅᴏᴍᴋ;
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(0, 0, W, H);
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 70pt Kashmir_Rosy";
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textAlign = "center";
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.textBaseline = "top";
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
let ᴛᴇxᴛ = "❣️ Hello There ❣️\nValkyrie";
let ᴛᴇxᴛᴡɪᴅᴛʜ = 𝖈𝖔𝖓𝖙𝖊𝖝𝖙.measureText(ᴛᴇxᴛ).W;
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillRect(600 - ᴛᴇxᴛᴡɪᴅᴛʜ / 2 - 10, 170 - 5, ᴛᴇxᴛᴡɪᴅᴛʜ + 20, 120);
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText(ᴛᴇxᴛ, 600, 170);
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillStyle = "#000000";
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.font = "bold 50pt Aquire";
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.fillText("Valkyrie.com", 650, 600);
loadImage("./Src/Ѷ𝖆𝖑𝐤𝐲𝖗𝖎𝖊🀄𝕮𝖆𝖓𝖛𝖆𝖘.png").then((Cmg) => {
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 140, 515, 200, 200);
𝖈𝖔𝖓𝖙𝖊𝖝𝖙.drawImage(Cmg, 980, 515, 200, 200);
let CmgB = ᴄᴀɴᴠᴀꜱ.toBuffer("image/png");
Fs.writeFileSync("./Valkyrie_com.png", CmgB);
});
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");
/*
* * * * * * * * * * |        (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!        * * * * * * * * * *
*/
("|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|");