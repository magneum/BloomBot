var appName = "ultron-master";
var dynoName = "worker";

var Heroku = require("heroku-client");

var heroku = new Heroku({ token: "e90b65ae-126a-485c-bfaf-a418b26182b6" });
heroku
  .delete("/apps/" + appName + "/dynos/" + dynoName)
  .then((x) => console.log(x));
