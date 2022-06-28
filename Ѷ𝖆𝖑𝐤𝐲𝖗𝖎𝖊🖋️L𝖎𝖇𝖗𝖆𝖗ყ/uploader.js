`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
function _0x46b1(_0x27b50c, _0x4ef91c) {
const _0xf7dd74 = _0xf7dd();
return (
(_0x46b1 = function (_0x46b1f7, _0x630bbb) {
_0x46b1f7 = _0x46b1f7 - 0x7a;
let _0x10823b = _0xf7dd74[_0x46b1f7];
return _0x10823b;
}),
_0x46b1(_0x27b50c, _0x4ef91c)
);
}
const _0x3087e9 = _0x46b1;
(function (_0x5d399b, _0x2ab2ee) {
const _0x16ebaa = _0x46b1,
_0x35aece = _0x5d399b();
while (!![]) {
try {
const _0x1df96a =
parseInt(_0x16ebaa(0x8f)) / 0x1 +
parseInt(_0x16ebaa(0xa2)) / 0x2 +
-parseInt(_0x16ebaa(0x93)) / 0x3 +
-parseInt(_0x16ebaa(0x97)) / 0x4 +
(parseInt(_0x16ebaa(0x89)) / 0x5) * (parseInt(_0x16ebaa(0x91)) / 0x6) +
(parseInt(_0x16ebaa(0x9e)) / 0x7) * (parseInt(_0x16ebaa(0x90)) / 0x8) +
-parseInt(_0x16ebaa(0x80)) / 0x9;
if (_0x1df96a === _0x2ab2ee) break;
else _0x35aece["push"](_0x35aece["shift"]());
} catch (_0x2e1695) {
_0x35aece["push"](_0x35aece["shift"]());
}
}
})(_0xf7dd, 0x224e5);
let axios = require("axios"),
BodyForm = require(_0x3087e9(0x92)),
{ fromBuffer } = require(_0x3087e9(0x9c)),
fetch = require("node-fetch"),
fs = require("fs"),
cheerio = require(_0x3087e9(0x8e));
function TelegraPh(_0x21a9e1) {
return new Promise(async (_0x301e09, _0xc96f17) => {
const _0x537a31 = _0x46b1;
if (!fs[_0x537a31(0x9b)](_0x21a9e1))
return _0xc96f17(new Error(_0x537a31(0x7d)));
try {
let _0x2c6724 = new BodyForm();
_0x2c6724[_0x537a31(0x98)](
_0x537a31(0x7c),
fs["createReadStream"](_0x21a9e1)
);
let _0x5ab8a1 = await axios({
url: _0x537a31(0x83),
method: "POST",
headers: { ..._0x2c6724[_0x537a31(0x7f)]() },
data: _0x2c6724,
});
return _0x301e09(
_0x537a31(0x95) + _0x5ab8a1[_0x537a31(0x84)][0x0]["src"]
);
} catch (_0x2e6891) {
return _0xc96f17(new Error(String(_0x2e6891)));
}
});
}
async function UploadFileUgu(_0x1073d3) {
return new Promise(async (_0x64f35b, _0x1cca50) => {
const _0x7ceea9 = _0x46b1;
let _0x26a6f0 = new BodyForm();
_0x26a6f0[_0x7ceea9(0x98)](
_0x7ceea9(0x9f),
fs["createReadStream"](_0x1073d3)
),
await axios({
url: "https://uguu.se/upload.php",
method: _0x7ceea9(0x85),
headers: {
"User-Agent": _0x7ceea9(0xa1),
..._0x26a6f0[_0x7ceea9(0x7f)](),
},
data: _0x26a6f0,
})
[_0x7ceea9(0x8c)]((_0x5d6e1c) => {
const _0x45ec2 = _0x7ceea9;
_0x64f35b(_0x5d6e1c[_0x45ec2(0x84)][_0x45ec2(0x7e)][0x0]);
})
[_0x7ceea9(0x9d)]((_0x2b6651) => _0x1cca50(_0x2b6651));
});
}
function webp2mp4File(_0xc029fb) {
return new Promise((_0x339aff, _0x4678f4) => {
const _0x293586 = _0x46b1;
let _0x4a036a = new BodyForm();
_0x4a036a[_0x293586(0x98)]("new-image-url", ""),
_0x4a036a["append"](_0x293586(0x86), fs["createReadStream"](_0xc029fb)),
axios({
method: "post",
url: _0x293586(0x99),
data: _0x4a036a,
headers: {
"Content-Type": _0x293586(0x94) + _0x4a036a[_0x293586(0x96)],
},
})
[_0x293586(0x8c)](({ data: _0x2a2d07 }) => {
const _0x2d9d74 = _0x293586;
let _0x40ecec = new BodyForm(),
_0x397b6b = cheerio["load"](_0x2a2d07),
_0x44a275 = _0x397b6b(_0x2d9d74(0x81))[_0x2d9d74(0x8b)](
_0x2d9d74(0x8d)
);
_0x40ecec[_0x2d9d74(0x98)](_0x2d9d74(0x7c), _0x44a275),
_0x40ecec[_0x2d9d74(0x98)](_0x2d9d74(0x8a), _0x2d9d74(0x7a)),
axios({
method: "post",
url: _0x2d9d74(0x87) + _0x44a275,
data: _0x40ecec,
headers: {
"Content-Type": _0x2d9d74(0x94) + _0x40ecec[_0x2d9d74(0x96)],
},
})
[_0x2d9d74(0x8c)](({ data: _0xb0c391 }) => {
const _0x2fbbc5 = _0x2d9d74;
let _0x42b13f = cheerio[_0x2fbbc5(0x7b)](_0xb0c391),
_0x44e204 =
_0x2fbbc5(0xa0) +
_0x42b13f(_0x2fbbc5(0x88))[_0x2fbbc5(0x8b)]("src");
_0x339aff({
status: !![],
message: _0x2fbbc5(0x9a),
result: _0x44e204,
});
})
[_0x2d9d74(0x9d)](_0x4678f4);
})
["catch"](_0x4678f4);
});
}
module[_0x3087e9(0x82)] = {
TelegraPh: TelegraPh,
UploadFileUgu: UploadFileUgu,
webp2mp4File: webp2mp4File,
};
function _0xf7dd() {
const _0x2a52ee = [
"435770ubAgMH",
"Convert\x20WebP\x20to\x20MP4!",
"load",
"file",
"File\x20not\x20Found",
"files",
"getHeaders",
"2154375qGACli",
"input[name=\x22file\x22]",
"exports",
"https://telegra.ph/upload",
"data",
"POST",
"new-image",
"https://ezgif.com/webp-to-mp4/",
"div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source",
"50PIUpeF",
"convert",
"attr",
"then",
"value",
"cheerio",
"139353CRIpOu",
"26968eWmGzA",
"105936sbsXpS",
"form-data",
"315411zuzpXk",
"multipart/form-data;\x20boundary=",
"https://telegra.ph",
"_boundary",
"923212JNVijh",
"append",
"https://s6.ezgif.com/webp-to-mp4",
"Created\x20By\x20MRHRTZ",
"existsSync",
"file-type",
"catch",
"378nlJLuw",
"files[]",
"https:",
"Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/90.0.4430.212\x20Safari/537.36",
];
_0xf7dd = function () {
return _0x2a52ee;
};
return _0xf7dd();
}
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;