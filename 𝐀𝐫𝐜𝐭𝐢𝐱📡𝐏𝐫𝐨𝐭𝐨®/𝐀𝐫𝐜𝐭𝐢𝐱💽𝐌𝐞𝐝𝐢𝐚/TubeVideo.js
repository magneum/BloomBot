"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
const message_type_1 = require("../\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\u269C\uFE0F\uD835\uDC0A\uD835\uDC2B\uD835\uDC32\uD835\uDC28\uD835\uDC13\uD835\uDC1E\uD835\uDC24/message-type");
const Image_Button_1 = __importDefault(require("../\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\u2618\uFE0F\uD835\uDC0A\uD835\uDC1E\uD835\uDC32\uD835\uDC2C/Image_Button"));
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const Downloader = require(`nodejs-file-downloader`);
const { ytv } = require("../𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/Tube");
const Tinyurl = require("tinyurl-api");
const ytdl = require("ytdl-core");
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const VOID = require(`../𝐀𝐫𝐜𝐭𝐢𝐱⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/void`);
const ______1 = __importDefault(require("../\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\uD83C\uDC04\uD835\uDC15\uD835\uDC1E\uD835\uDC27\uD835\uDC2D/\u029F\u1D00\u028F\u1D0F\u1D1C\u1D1B"));
const Oops_1 = __importDefault(require("../\uD835\uDC00\uD835\uDC2B\uD835\uDC1C\uD835\uDC2D\uD835\uDC22\uD835\uDC31\u2618\uFE0F\uD835\uDC0A\uD835\uDC1E\uD835\uDC32\uD835\uDC2C/Oops"));
//" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
const TubeVideo = (TUF, Fox, AʀƈȶɨӼ, Found) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { dl_link, thumb, title, filesizeF } = yield ytv(Found.url, "id4");
        let DirectFile;
        try {
            DirectFile = yield Tinyurl(dl_link);
        }
        catch (error) {
            return Oops_1.default.VOp(TUF, Fox, AʀƈȶɨӼ, error);
        }
        //" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
        yield Image_Button_1.default.VImg(TUF, Fox, AʀƈȶɨӼ, `𝐘𝐨𝐮𝐓𝐮𝐛𝐞⭕️𝐌𝐮𝐬𝐢𝐜
🍻𝐓𝐢𝐭𝐥𝐞: ${Found.title}
🙈𝐕𝐢𝐞𝐰𝐬: ${Found.views}
⏰𝐃𝐮𝐫𝐚𝐭𝐢𝐨𝐧: ${Found.timestamp}
✒️𝐀𝐮𝐭𝐡𝐨𝐫: ${Found.author.name}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
🌐𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`, Found.thumbnail);
        //" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
        try {
            var FFmpegFile = `./𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞/${Fox.key.id}.mp4`;
            const downloader = yield new Downloader({
                url: DirectFile,
                directory: `𝐀𝐫𝐜𝐭𝐢𝐱🐞𝐁𝐞𝐞𝐭𝐥𝐞`,
                fileName: `${Fox.key.id}.mp4`,
                cloneFiles: false,
            });
            yield downloader.download();
            yield TUF.sendMessage(AʀƈȶɨӼ.chatId, {
                quoted: Fox.message,
                contextInfo: {
                    mentionedJid: [AʀƈȶɨӼ.sender],
                },
                timestamp: Date(),
                video: fs.readFileSync(FFmpegFile),
                mimetype: "video/mp4",
                caption: `┌─「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢® 」
├• *Tαɠ:* @${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}
├• *Nαɱҽ:* ${Fox.pushName}
├• *Cσɱɱαɳԃ:* ${AʀƈȶɨӼ.commandName}
└────────────◇

𝐘𝐨𝐮𝐓𝐮𝐛𝐞📹𝐕𝐢𝐝𝐞𝐨
🍻𝗧𝗶𝘁𝗹𝗲: ${Found.title}
🙈𝗩𝗶𝗲𝘄𝘀: ${Found.views}
⏰𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
✒️𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
📅𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
🌐𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`,
                footer: `⦓ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
                buttons: [
                    {
                        buttonId: `${______1.default.MuveOn}help`,
                        buttonText: { displayText: `${______1.default.MuveOn}help` },
                        type: 1,
                    },
                ],
                headerType: 5,
            }, message_type_1.MessageType.buttonsMessage)
                .then(VOID.VOID(FFmpegFile))
                .catch((error) => Oops_1.default.VOp(TUF, Fox, AʀƈȶɨӼ, error));
        }
        catch (error) {
            const downloadFFmpegFile = ytdl(Found.url, {
                quality: "highest",
            });
            const writeStream = fs.createWriteStream(FFmpegFile);
            downloadFFmpegFile.pipe(writeStream);
            downloadFFmpegFile.on("end", () => __awaiter(void 0, void 0, void 0, function* () {
                console.log(`⬡════════| ⭐ 𝐘𝐓𝐃𝐋 ⭐ |════════⬡`);
                yield TUF.sendMessage(AʀƈȶɨӼ.chatId, {
                    quoted: Fox.message,
                    contextInfo: {
                        mentionedJid: [AʀƈȶɨӼ.sender],
                    },
                    timestamp: Date(),
                    video: fs.readFileSync(FFmpegFile),
                    mimetype: "video/mp4",
                    caption: `┌─「 𝐀𝐫𝐜𝐭𝐢𝐱 𝐀𝐩𝐢® 」
├• *Tαɠ:* @${AʀƈȶɨӼ.sender.replace(/[^\d+]/g, "")}
├• *Nαɱҽ:* ${Fox.pushName}
├• *Cσɱɱαɳԃ:* ${AʀƈȶɨӼ.commandName}
└────────────◇

𝐘𝐨𝐮𝐓𝐮𝐛𝐞📹𝐕𝐢𝐝𝐞𝐨
🍻𝗧𝗶𝘁𝗹𝗲: ${Found.title}
🙈𝗩𝗶𝗲𝘄𝘀: ${Found.views}
⏰𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${Found.timestamp}
✒️𝗔𝘂𝘁𝗵𝗼𝗿: ${Found.author.name}
📅𝗥𝗲𝗹𝗲𝗮𝘀𝗲𝗱: ${Found.ago}
🫖𝗙𝗶𝗹𝗲𝘀𝗶𝘇𝗲: ${filesizeF || "undefined"}
🌐𝗪𝗲𝗯 𝗗𝗟: ${DirectFile}
🔗𝐋𝐢𝐧𝐤: ${Found.url}
📜𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${Found.description}`,
                    footer: `⦓ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ⦔`,
                    buttons: [
                        {
                            buttonId: `${______1.default.MuveOn}help`,
                            buttonText: { displayText: `${______1.default.MuveOn}help` },
                            type: 1,
                        },
                    ],
                    headerType: 5,
                }, message_type_1.MessageType.buttonsMessage)
                    .then(VOID.VOID(FFmpegFile))
                    .catch((error) => Oops_1.default.VOp(TUF, Fox, AʀƈȶɨӼ, error));
            }));
        }
        //" |════════════════════════════════════════════| Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
    }
    catch (error) {
        console.log(error);
    }
});
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
/*
(𝐜)𝐀𝐫𝐜𝐭𝐢𝐱 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
`|⬡════════════════════════════════════════════|❝ Ⓒ𝐀𝐫𝐜𝐭𝐢𝐱 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡|`;
module.exports = {
    VTvdo: TubeVideo,
};
