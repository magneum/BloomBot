`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;
const _0x233ad9 = _0x192d;
(function (_0x295bd8, _0x4fdf6f) {
const _0x3da211 = _0x192d,
_0x45ce44 = _0x295bd8();
while (!![]) {
try {
const _0x59d8b9 =
-parseInt(_0x3da211(0x1f5)) / 0x1 +
(parseInt(_0x3da211(0x1da)) / 0x2) *
(parseInt(_0x3da211(0x1fb)) / 0x3) +
-parseInt(_0x3da211(0x1e4)) / 0x4 +
parseInt(_0x3da211(0x1e6)) / 0x5 +
-parseInt(_0x3da211(0x205)) / 0x6 +
-parseInt(_0x3da211(0x1e2)) / 0x7 +
parseInt(_0x3da211(0x1f2)) / 0x8;
if (_0x59d8b9 === _0x4fdf6f) break;
else _0x45ce44["push"](_0x45ce44["shift"]());
} catch (_0x19a815) {
_0x45ce44["push"](_0x45ce44["shift"]());
}
}
})(_0x4898, 0x6d415);
function _0x192d(_0xcc097f, _0x1ce866) {
const _0x489835 = _0x4898();
return (
(_0x192d = function (_0x192d24, _0x597801) {
_0x192d24 = _0x192d24 - 0x1d4;
let _0x59a1e9 = _0x489835[_0x192d24];
return _0x59a1e9;
}),
_0x192d(_0xcc097f, _0x1ce866)
);
}
let axios = require("axios"),
cheerio = require(_0x233ad9(0x1ea));
function pinterest(_0x331b81) {
return new Promise(async (_0x436b9a, _0x3d3ba2) => {
const _0x5bf554 = _0x192d;
axios[_0x5bf554(0x200)](_0x5bf554(0x1ed) + _0x331b81, {
headers: { cookie: _0x5bf554(0x1ff) },
})[_0x5bf554(0x1fc)](({ data: _0x410968 }) => {
const _0xa1ef64 = _0x5bf554;
let _0x3ebedb = cheerio[_0xa1ef64(0x1f3)](_0x410968),
_0x1f6587 = [],
_0xbdd89e = [];
_0x3ebedb(_0xa1ef64(0x1ee))
["get"]()
[_0xa1ef64(0x1df)]((_0x509e85) => {
const _0xde9120 = _0xa1ef64;
let _0x436e37 = _0x3ebedb(_0x509e85)
[_0xde9120(0x201)]("img")
["attr"](_0xde9120(0x204));
_0x1f6587[_0xde9120(0x1e7)](_0x436e37);
}),
_0x1f6587[_0xa1ef64(0x1e5)]((_0x5b7a89) => {
const _0x5f03ab = _0xa1ef64;
if (_0x5b7a89 == undefined) return;
_0xbdd89e[_0x5f03ab(0x1e7)](
_0x5b7a89[_0x5f03ab(0x1f4)](/236/g, "736")
);
}),
_0xbdd89e[_0xa1ef64(0x1e1)](),
_0x436b9a(_0xbdd89e);
});
});
}
function wallpaper(_0x195574, _0xcf0e63 = "1") {
return new Promise((_0x21e5c9, _0x384ade) => {
const _0xa418b1 = _0x192d;
axios[_0xa418b1(0x200)](
_0xa418b1(0x206) + _0xcf0e63 + _0xa418b1(0x203) + _0x195574
)["then"](({ data: _0x3f94f9 }) => {
const _0x333c22 = _0xa418b1;
let _0x4e46d6 = cheerio[_0x333c22(0x1f3)](_0x3f94f9),
_0x53fa1b = [];
_0x4e46d6("div.grid-item")[_0x333c22(0x1f6)](function (
_0x2b56d8,
_0x5b1823
) {
const _0x2004a4 = _0x333c22;
_0x53fa1b["push"]({
title: _0x4e46d6(_0x5b1823)
["find"]("div.info\x20>\x20a\x20>\x20h3")
[_0x2004a4(0x1fd)](),
type: _0x4e46d6(_0x5b1823)
[_0x2004a4(0x201)](_0x2004a4(0x1d9))
[_0x2004a4(0x1fd)](),
source:
_0x2004a4(0x1f7) +
_0x4e46d6(_0x5b1823)
[_0x2004a4(0x201)](_0x2004a4(0x1eb))
[_0x2004a4(0x1d4)](_0x2004a4(0x1de)),
image: [
_0x4e46d6(_0x5b1823)
[_0x2004a4(0x201)](_0x2004a4(0x1fe))
[_0x2004a4(0x1d4)](_0x2004a4(0x1d7)) ||
_0x4e46d6(_0x5b1823)
["find"]("picture\x20>\x20img")
[_0x2004a4(0x1d4)](_0x2004a4(0x204)),
_0x4e46d6(_0x5b1823)
[_0x2004a4(0x201)]("picture\x20>\x20source:nth-child(1)")
[_0x2004a4(0x1d4)](_0x2004a4(0x1e8)),
_0x4e46d6(_0x5b1823)
[_0x2004a4(0x201)](_0x2004a4(0x1d8))
[_0x2004a4(0x1d4)](_0x2004a4(0x1e8)),
],
});
}),
_0x21e5c9(_0x53fa1b);
});
});
}
function wikimedia(_0x8c6d1) {
return new Promise((_0x45b0dd, _0x3a33da) => {
const _0x5918aa = _0x192d;
axios["get"](_0x5918aa(0x1ef) + _0x8c6d1 + _0x5918aa(0x1e9))[
_0x5918aa(0x1fc)
]((_0x3d4a47) => {
const _0x536766 = _0x5918aa;
let _0x15076b = cheerio["load"](_0x3d4a47[_0x536766(0x1f0)]),
_0xa45e45 = [];
_0x15076b(_0x536766(0x1f9))["each"](function (_0x29389e, _0x3f2b6d) {
const _0x56728e = _0x536766;
_0xa45e45["push"]({
title: _0x15076b(_0x3f2b6d)["find"]("img")[_0x56728e(0x1d4)]("alt"),
source: _0x15076b(_0x3f2b6d)["attr"](_0x56728e(0x1de)),
image:
_0x15076b(_0x3f2b6d)
[_0x56728e(0x201)](_0x56728e(0x1f8))
[_0x56728e(0x1d4)](_0x56728e(0x1d7)) ||
_0x15076b(_0x3f2b6d)
[_0x56728e(0x201)](_0x56728e(0x1f8))
[_0x56728e(0x1d4)](_0x56728e(0x204)),
});
}),
_0x45b0dd(_0xa45e45);
});
});
}
function quotesAnime() {
return new Promise((_0x18c368, _0x117f64) => {
const _0x31bf68 = _0x192d;
let _0x58de13 = Math["floor"](Math[_0x31bf68(0x1f1)]() * 0xb8);
axios[_0x31bf68(0x200)](_0x31bf68(0x1db) + _0x58de13)
[_0x31bf68(0x1fc)](({ data: _0x111c8c }) => {
const _0x385c5c = _0x31bf68;
let _0xc446c9 = cheerio[_0x385c5c(0x1f3)](_0x111c8c),
_0x3c29c1 = [];
_0xc446c9(_0x385c5c(0x1ec))[_0x385c5c(0x1f6)](function (
_0x3fc6f2,
_0x221dbb
) {
const _0x1401f7 = _0x385c5c;
_0x3c29c1["push"]({
link: _0xc446c9(_0x221dbb)
["find"]("a")
[_0x1401f7(0x1d4)](_0x1401f7(0x1de)),
gambar: _0xc446c9(_0x221dbb)
[_0x1401f7(0x201)](_0x1401f7(0x1f8))
[_0x1401f7(0x1d4)](_0x1401f7(0x1d7)),
karakter: _0xc446c9(_0x221dbb)
[_0x1401f7(0x201)](_0x1401f7(0x1d5))
["text"]()
[_0x1401f7(0x1e3)](),
anime: _0xc446c9(_0x221dbb)
["find"]("div.anime-title")
[_0x1401f7(0x1fd)]()
[_0x1401f7(0x1e3)](),
episode: _0xc446c9(_0x221dbb)
[_0x1401f7(0x201)](_0x1401f7(0x1fa))
["text"](),
up_at: _0xc446c9(_0x221dbb)
[_0x1401f7(0x201)](_0x1401f7(0x1d6))
[_0x1401f7(0x1fd)](),
quotes: _0xc446c9(_0x221dbb)
[_0x1401f7(0x201)](_0x1401f7(0x1dd))
[_0x1401f7(0x1fd)]()
[_0x1401f7(0x1e3)](),
});
}),
_0x18c368(_0x3c29c1);
})
["catch"](_0x117f64);
});
}
function ringtone(_0x4c74d7) {
return new Promise((_0x5025e6, _0x158dba) => {
const _0x5e0b08 = _0x192d;
axios[_0x5e0b08(0x200)]("https://meloboom.com/en/search/" + _0x4c74d7)[
_0x5e0b08(0x1fc)
]((_0x38c338) => {
const _0x5c6b7f = _0x5e0b08;
let _0x32ee52 = cheerio[_0x5c6b7f(0x1f3)](_0x38c338[_0x5c6b7f(0x1f0)]),
_0x21208d = [];
_0x32ee52(_0x5c6b7f(0x1e0))[_0x5c6b7f(0x1f6)](function (
_0x28004d,
_0x2e09e2
) {
const _0x9e0114 = _0x5c6b7f;
_0x21208d[_0x9e0114(0x1e7)]({
title: _0x32ee52(_0x2e09e2)[_0x9e0114(0x201)]("h4")["text"](),
source:
_0x9e0114(0x1dc) +
_0x32ee52(_0x2e09e2)
[_0x9e0114(0x201)]("a")
[_0x9e0114(0x1d4)](_0x9e0114(0x1de)),
audio: _0x32ee52(_0x2e09e2)
[_0x9e0114(0x201)](_0x9e0114(0x202))
["attr"](_0x9e0114(0x204)),
});
}),
_0x5025e6(_0x21208d);
});
});
}
module["exports"] = {
pinterest: pinterest,
wallpaper: wallpaper,
wikimedia: wikimedia,
quotesAnime: quotesAnime,
ringtone: ringtone,
};
function _0x4898() {
const _0x584755 = [
"data-src",
"picture\x20>\x20source:nth-child(2)",
"div.info\x20>\x20a:nth-child(2)",
"4WKaiPq",
"https://otakotaku.com/quote/feed/",
"https://meloboom.com/",
"div.quote",
"href",
"map",
"#__next\x20>\x20main\x20>\x20section\x20>\x20div.jsx-2244708474.container\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div:nth-child(4)\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20ul\x20>\x20li",
"shift",
"394289fSbILp",
"trim",
"2004544EyfiqD",
"forEach",
"796050fVCxub",
"push",
"srcset",
"&title=Special:MediaSearch&go=Go&type=image",
"cheerio",
"div\x20>\x20a:nth-child(3)",
"div.kotodama-list",
"https://id.pinterest.com/search/pins/?autologin=true&q=",
"div\x20>\x20a",
"https://commons.wikimedia.org/w/index.php?search=",
"data",
"random",
"13629432KVNCYi",
"load",
"replace",
"626456sBhbDW",
"each",
"https://www.besthdwallpaper.com/",
"img",
".sdms-search-results__list-wrapper\x20>\x20div\x20>\x20a",
"div.meta",
"108714ikXeyf",
"then",
"text",
"picture\x20>\x20img",
"_auth=1;\x20_b=\x22AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\x22;\x20_pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=;\x20_ir=0",
"get",
"find",
"audio",
"&q=",
"src",
"1823622AyebjC",
"https://www.besthdwallpaper.com/search?CurrentPage=",
"attr",
"div.char-name",
"small.meta",
];
_0x4898 = function () {
return _0x584755;
};
return _0x4898();
}
`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;

// ════════════════════════|▷   (𝐜)𝐕𝐚𝐥𝐤𝐲𝐫𝐢𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!   ◁|════════════════════════

`|⬡════════════════════════════════════════════════════════════|▷   ᴘᴏᴡᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™  ◁|════════════════════════════════════════════════════════════⬡|`;