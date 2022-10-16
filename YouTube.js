/*
╔⬡═══════════════════════════════════════════════════════════════| 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐅𝐞𝐭𝐜𝐡 𝐀𝐏𝐈 |═══════════════════════════════════════════════════════════════⬡|
║
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║   Use This Api For Fetching Information and Direct YouTube Download 
║   Links For Audio and video!
║
╚⬡═══════════════════════════════════════════════════════════════| 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐅𝐞𝐭𝐜𝐡 𝐀𝐏𝐈 |═══════════════════════════════════════════════════════════════⬡|
*/
exports.𝐘𝐨𝐮𝐓𝐮𝐛𝐞 = async (string) => {
let sRegx =
/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
let axe = require("axios");
if (!string) {
return console.log(
"❌𝐄𝐫𝐫𝐨𝐫: Couldn't find YouTube URL in the URL query string."
);
} else if (sRegx.test(string)) {
return console.log(
"❌𝐄𝐫𝐫𝐨𝐫: Please Enter Valid YouTube URL in the URL query string."
);
} else {
let form = new URLSearchParams();
form.append("q", string);
form.append("vt", "home");
let { data } = await axe("https://yt5s.com/api/ajaxSearch", {
method: "POST",
headers: {
accept: "*/*",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
cookie:
"_ga=GA1.2.554524686.1642841938; _gid=GA1.2.1657844542.1642841938; __atuvc=1|3; __atssc=google;1; __cflb=04dToSoFRg9oqH9pYF2En9gKJK4fe8D4nMCRWYbL7f; _gat_gtag_UA_122831834_4    =1; _PN_SBSCRBR_FALLBACK_DENIED=1642857938152",
},
data: form,
});
let aResp = await axe(
"https://backend.svcenter.xyz/api/convert-by-45fc4be8916916ba3b8d61dd6e0d6994",
{
method: "POST",
headers: {
accept: "*/*",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
"x-requested-key": "de0cfuirtgf67a",
},
data: new URLSearchParams(
Object.entries({
v_id: data.vid,
ftype: "mp3",
fquality: 128,
token: data.token,
timeExpire: data.timeExpires,
client: "yt5s.com",
})
),
}
);
let vResp = await axe("https://jjjkl2.uoyadfrrea.xyz/api/json/convert", {
method: "POST",
headers: {
accept: "*/*",
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
},
data: new URLSearchParams(
Object.entries({
v_id: data.vid,
ftype: "mp4",
fquality: "360p",
fname: data.title,
token: data.token,
timeExpire: data.timeExpires,
})
),
});
return {
Health: "🔥𝐒𝐮𝐜𝐜𝐞𝐬𝐬",
Download: {
mp3: aResp.data.d_url,
mp4: vResp.data.result,
},
Title: data.title,
Author: data.a,
Duration: data.t,
Size: {
mp3: data.links.mp3["2"].size,
mp4: data.links.mp4["7"].size,
},
};
}
};
𝐘𝐨𝐮𝐓𝐮𝐛𝐞("https://youtu.be/BddP6PYo2gs");
/*
╔⬡═══════════════════════════════════════════════════════════════| 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐅𝐞𝐭𝐜𝐡 𝐀𝐏𝐈 |═══════════════════════════════════════════════════════════════⬡|
║
║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
║   Use This Api For Fetching Information and Direct YouTube Download 
║   Links For Audio and video!
║
╚⬡═══════════════════════════════════════════════════════════════| 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐅𝐞𝐭𝐜𝐡 𝐀𝐏𝐈 |═══════════════════════════════════════════════════════════════⬡|
*/
