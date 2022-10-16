async function download() {
let { yta_var } = require("./•𝐊𝐫𝐲𝐙𝐨𝐧𝐞┘/vYTServers");
let { dl_link, thumb, title, filesize, filesizeF } = await yta_var(
"https://youtu.be/dx4Teh-nv3A",
"id4"
);
console.log(dl_link, thumb, title, filesize, filesizeF);
}
download();