(async () => {
  const { simpleGit, CleanOptions } = require("simple-git");
  simpleGit().clean(CleanOptions.FORCE);
  const git = simpleGit({ maxConcurrentProcesses: 10 });
  git.merge((err, mergeSummary) => {
    if (err.git) mergeSummary = err.git;
  });
  simpleGit().pull((err, update) => {
    if (update && update.summary.changes) {
      console.log(update);
      // require("child_process").exec("npm restart");
    }
  });
})();
