(async () => {
  var express = require("express");
  var νℓpage = express();

  var Vlkye;
  var FAQ_Vlkyre;
  var Home_Vlkyre;
  var Group_Vlkyre;
  var Console_Vlkyre;
  var Command_Vlkyre;

  νℓpage.get("/", function (req, res) {
    res.send(Vlkye);
  });
  νℓpage.get("/𝐇𝐨𝐦𝐞☊𝐕𝐥𝐤𝐲𝐫𝐞", function (req, res) {
    res.send(Home_Vlkyre);
  });
  νℓpage.get("/𝐂𝐨𝐧𝐬𝐨𝐥𝐞☊𝐕𝐥𝐤𝐲𝐫𝐞", function (req, res) {
    res.send(Console_Vlkyre);
  });
  νℓpage.get("/𝐆𝐫𝐨𝐮𝐩☊𝐕𝐥𝐤𝐲𝐫𝐞", function (req, res) {
    res.send(Group_Vlkyre);
  });
  νℓpage.get("/𝐅𝐀𝐐☊𝐕𝐥𝐤𝐲𝐫𝐞", function (req, res) {
    res.send(FAQ_Vlkyre);
  });

  νℓpage.get("/𝐂𝐨𝐦𝐦𝐚𝐧𝐝☊𝐕𝐥𝐤𝐲𝐫𝐞", function (req, res) {
    res.send(Command_Vlkyre);
  });

  νℓpage.listen(3000);
})();
