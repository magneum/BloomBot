var shell = require("shelljs");

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}

// Copy files to release dir
shell.rm("-rf", "out/Release");
shell.cp("-R", "stuff/", "out/Release");

// Replace macros in each .js file
shell.cd("lib");
shell.ls("*.js").forEach(function (file) {
  shell.sed("-i", "BUILD_VERSION", "v0.1.2", file);
  shell.sed("-i", /^.*REMOVE_THIS_LINE.*$/, "", file);
  shell.sed("-i", /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat("macro.js"), file);
});
shell.cd("..");

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.echo("Error: Git commit failed");
  shell.exit(1);
}
