// ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊
var express = require("express");
var path = require("path");
var νℓpage = express();

νℓpage.get("/", async function (rege, νℓp) {
  νℓp.sendFile("/Pages/Home.html", { root: __dirname });
});
νℓpage.get("/Console", async function (rege, νℓp) {
  νℓp.sendFile("/Pages/Console.html", { root: __dirname });
});
νℓpage.get("/Group", async function (rege, νℓp) {
  νℓp.sendFile("/Pages/Group.html", { root: __dirname });
});
νℓpage.get("/FAQ", async function (rege, νℓp) {
  νℓp.sendFile("/Pages/FAQ.html", { root: __dirname });
});

νℓpage.get("/Command", async function (rege, νℓp) {
  νℓp.sendFile("/Pages/Command.html", { root: __dirname });
});

νℓpage.listen(8080, () => {
  console.log("🦋𝐒𝐞𝐫𝐯𝐞𝐫 𝐒𝐭𝐚𝐫𝐭𝐞𝐝 𝐈𝐧: http://localhost:8080");
});
// ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊ - ☊
