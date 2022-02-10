let { execSync } = require("child_process");

try {
let res = execSync("node ./ᴄᴏʀʟᴇxᴀ🛰️Server/🛸ᴄᴏʀʟᴇxᴀ™.js");
console.log(res.toString());
} catch (err) {
console.log("output", err);
console.log("sdterr", err.stderr.toString());
}
