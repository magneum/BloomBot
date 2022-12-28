("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
(async () => {
  var bodyParser = require("body-parser");
  var dboard = require("./dashboard");
  var express = require("express");
  var Axios = require("axios");
  var Path = require("path");
  var Fs = require("fs");
  var νℓpage = express();
  require("./global.js");
  var urlencodedParser = bodyParser.urlencoded({ extended: false });

  νℓpage.engine("html", require("ejs").renderFile);
  νℓpage.use(express.static(__dirname + "/views"));
  νℓpage.set("view engine", "html");
  νℓpage.set("views", __dirname);

  νℓpage.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

  νℓpage.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
  });
  νℓpage.get("/vlkyre", (req, res) => {
    res.sendFile(__dirname + "/views/vlkyre.html");
  });

  νℓpage.post("/login", urlencodedParser, (req, res) => {
    var phoneNum = req.body.phone.replace(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/,
      ""
    );
    dboard.findOne(
      {
        ID: phoneNum + "@s.whatsapp.net",
      },
      async (error, uBoard) => {
        if (error) return console.log(error);
        if (!uBoard) return res.sendFile(__dirname + "/views/dError.html");
        console.log(uBoard.username);
        console.log(uBoard.profile);
        console.log(uBoard);
        res.render(__dirname + "/views/dboard.html", {
          uBoard: uBoard,
        });
      }
    );
  });
  νℓpage.listen(
    process.env.PORT || 5000,
    console.log("🦋Info:", "http://localhost:5000")
  );
})().catch((error) => console.log("🦋Info:", error));
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ кяукєηz ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
