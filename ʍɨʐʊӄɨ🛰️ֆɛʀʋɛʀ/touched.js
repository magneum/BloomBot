const fs = require(`fs`);
var jsonData = `[]`;
var jsonObj = JSON.parse(jsonData);
var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);
fs.writeFile(
  `./ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Coolist.json`,
  jsonContent,
  `utf8`,
  function (err) {
    if (err) console.log(err);
    console.log(`JSON file has been saved.`);
  }
);
