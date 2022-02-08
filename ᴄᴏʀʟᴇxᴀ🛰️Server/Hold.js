`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
exports.Hold = async (𝖈𝖔𝖗𝖑𝖊𝖝𝖆) => {
const fs = require("fs");
const File = "./ᴄᴏʀʟᴇxᴀ🛰️Server/Coolist.json";
if (𝖈𝖔𝖗𝖑𝖊𝖝𝖆.isSenderDev) {
const jsoncool = await JSON.parse(fs.readFileSync(File));
await jsoncool.push(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender);
fs.writeFileSync(File, JSON.stringify(jsoncool));
setTimeout((Error) => {
if (Error) return console.log(Error);
jsoncool.splice(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender);
fs.writeFileSync(File, JSON.stringify(jsoncool));
}, 5000);
} else {
const jsoncool = await JSON.parse(fs.readFileSync(File));
await jsoncool.push(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender);
fs.writeFileSync(File, JSON.stringify(jsoncool));
setTimeout((Error) => {
if (Error) return console.log(Error);
jsoncool.splice(𝖈𝖔𝖗𝖑𝖊𝖝𝖆.sender);
fs.writeFileSync(File, JSON.stringify(jsoncool));
}, 15000);
}
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐂𝐨𝐫𝐥𝐞𝐱𝐚𝐀𝐈 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;