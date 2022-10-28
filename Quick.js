(async () => {
  var Express = require("express");
  var νℓpage = new Express();

  νℓpage.get("/", function (req, res) {
    res.send("Hello First...");
  });
  νℓpage.get("/second", function (req, res) {
    res.send("Hello Second...");
  });
  νℓpage.listen(8080, () => {
    console.log("Introduction Page: http://localhost:8080");
  });
})();
