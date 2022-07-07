let simpleGit = require("simple-git")();
let Raw = simpleGit.fetch();
let newCommits = simpleGit.log(["🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®"]);
if (newCommits.total != 0) {
  console.log(newCommits);
} else {
  console.log("Null");
}
