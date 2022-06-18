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
Object.defineProperty(exports, "__esModule", { value: true });
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
const node_fetch_1 = __importDefault(require("node-fetch"));
let { JSDOM } = require("jsdom");
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
function post(url, formdata) {
    return (0, node_fetch_1.default)(url, {
        method: "POST",
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: new URLSearchParams(Object.entries(formdata)),
    });
}
//" |════════════════════════════════════════════| Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
function yt(url, quality, type, bitrate, server = "en68") {
    return __awaiter(this, void 0, void 0, function* () {
        if (!ytIdRegex.test(url))
            throw "Invalid URL";
        let ytId = ytIdRegex.exec(url);
        url = "https://youtu.be/" + ytId[1];
        let res = yield post(`https://www.y2mate.com/mates/${server}/analyze/ajax`, {
            url,
            q_auto: 0,
            ajax: 1,
        });
        let json = yield res.json();
        let { document } = new JSDOM(json.result).window;
        let tables = document.querySelectorAll("table");
        let table = tables[{ mp4: 0, mp3: 1 }[type] || 0];
        let list;
        switch (type) {
            case "mp4":
                list = Object.fromEntries([...table.querySelectorAll('td > a[href="#"]')]
                    .filter((v) => !/\.3gp/.test(v.innerHTML))
                    .map((v) => [
                    v.innerHTML.match(/.*?(?=\()/)[0].trim(),
                    v.parentElement.nextSibling.nextSibling.innerHTML,
                ]));
                break;
            case "mp3":
                list = {
                    "128kbps": table.querySelector('td > a[href="#"]').parentElement.nextSibling
                        .nextSibling.innerHTML,
                };
                break;
            default:
                list = {};
        }
        let filesize = list[quality];
        let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ["", ""];
        let thumb = document.querySelector("img").src;
        let title = document.querySelector("b").innerHTML;
        let res2 = yield post(`https://www.y2mate.com/mates/${server}/convert`, {
            type: "youtube",
            _id: id[1],
            v_id: ytId[1],
            ajax: "1",
            token: "",
            ftype: type,
            fquality: bitrate,
        });
        let json2 = yield res2.json();
        return {
            dl_link: /<a.+?href="(.+?)"/.exec(json2.result)[1],
            thumb,
            title,
            filesizeF: filesize,
        };
    });
}
//" |════════════════════════════════════════════| Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ |═══════════════════════════════════════════| "
module.exports = {
    yt,
    yta(url, server = "en68") {
        return yt(url, "128kbps", "mp3", "128", server);
    },
    ytv(url, server = "en68") {
        return yt(url, "360p", "mp4", "360", server);
    },
    servers: ["id4", "en60", "en61", "en68"],
};
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/*
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
