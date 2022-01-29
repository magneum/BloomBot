console.log("Working");
var child = require("child_process").exec("node child.js");
child.stdout.pipe(process.stdout);
child.on("exit", function () {
  process.exit();
});
