var child = require("child_process").exec("node run.js");
child.stdout.pipe(process.stdout);
child.on("exit", function () {
  process.exit();
});
