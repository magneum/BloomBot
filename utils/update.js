const { spawn } = require("child_process");
const simpleGit = require("simple-git");
const cron = require("node-cron");
const rimraf = require("rimraf");
const chalk = require("chalk");
let childProcess = null;
let isRunning = false;

const workdir = ".";
const git = simpleGit(workdir);

const startMainCode = () => {
  if (isRunning) {
    console.log(chalk.yellow("Main code is already running."));
    return;
  }

  console.log(chalk.green("Starting main code..."));
  childProcess = spawn("yarn", ["start"], { cwd: workdir, stdio: "inherit" });

  childProcess.on("close", (code) => {
    console.log(chalk.yellow(`Main code exited with code ${code}`));
    isRunning = false;
  });

  isRunning = true;
};

const stopMainCode = () => {
  if (!childProcess) {
    console.log(chalk.yellow("Main code is not running."));
    return;
  }

  console.log(chalk.green("Stopping main code..."));
  childProcess.kill("SIGINT");
  childProcess = null;
  isRunning = false;
};

const deleteFiles = () => {
  console.log(chalk.green("Deleting files and folders..."));
  rimraf.sync(`${workdir}/*`);
  console.log(chalk.gray("All files and folders deleted"));
};

const gitFetch = async () => {
  console.log(chalk.green("Performing git fetch..."));
  try {
    const { behind } = await git.raw([
      "rev-list",
      "--count",
      "@{upstream}..HEAD",
    ]);

    if (parseInt(behind) === 0) {
      console.log(chalk.yellow("No new commits found"));
      return;
    }

    stopMainCode();
    deleteFiles();
    startMainCode();
  } catch (error) {
    console.error(chalk.red(`Error executing git fetch: ${error.message}`));
  }
};

cron.schedule("* * * * *", gitFetch);
startMainCode();
