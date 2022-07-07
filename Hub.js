const simpleGit = require("simple-git");
const Git = simpleGit({ maxConcurrentProcesses: 10 });
Git.clean(simpleGit.CleanOptions.FORCE);
Git.pull("🐍Ş𝖎𝖕𝖍𝖔𝖓®..origin/🐍Ş𝖎𝖕𝖍𝖔𝖓®", "🐍Ş𝖎𝖕𝖍𝖔𝖓®", { "--rebase": "true" });
Git.checkIsRepo().then((isRepo) => !isRepo && initialiseRepo(git)).then(() => Git.fetch());
