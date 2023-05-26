("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
// ╔⧉༻ [ 𝐕𝐥𝐤𝐲𝐫𝐞🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║ 🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫𝐬 +918436686758,917430922909
// ║
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ νℓкуяє was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚════════════╝
("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ νℓкуяє вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
const winston = require("winston");
const { format, transports } = winston;
const { combine, timestamp, printf } = format;
const path = require("path");
const chalk = require("chalk");

const logDir = path.join(__dirname, "logs"); // Directory path for log files

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
  const colors = {
    error: "red",
    warn: "yellow",
    info: "blue",
    debug: "green",
    silly: "magenta",
  };
  const colorizedLevel = chalk[colors[level]](level.toUpperCase());
  return `${timestamp} ${colorizedLevel}: ${message}`;
});

// Create a logger instance
const logger = winston.createLogger({
  level: "info", // Default log level
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  transports: [
    new transports.Console(), // Log to console
    new transports.File({
      filename: path.join(logDir, "error.log"), // Log to error.log file
      level: "error", // Log only error messages
    }),
    new transports.File({
      filename: path.join(logDir, "combined.log"), // Log to combined.log file
    }),
  ],
  exceptionHandlers: [
    new transports.File({
      filename: path.join(logDir, "exceptions.log"), // Log uncaught exceptions
    }),
  ],
  exitOnError: false, // Continue logging after an exception occurs
});

// Function to set the log level dynamically
const setLogLevel = (level) => {
  if (typeof level !== "string") {
    throw new Error("Log level must be a string");
  }
  logger.level = level;
};

const ShowRed = (Topic, Text) => {
  const TShow = chalk.red.bold(Topic);
  const Show = chalk.red.italic.bold(Text);
  logger.info(TShow, Show);
};

const ShowBlue = (Topic, Text) => {
  const TShow = chalk.blue.bold(Topic);
  const Show = chalk.blue.italic.bold(Text);
  logger.info(TShow, Show);
};

const ShowGreen = (Topic, Text) => {
  const TShow = chalk.green.bold(Topic);
  const Show = chalk.green.italic.bold(Text);
  logger.info(TShow, Show);
};

const ShowYellow = (Topic, Text) => {
  const TShow = chalk.yellow.bold(Topic);
  const Show = chalk.yellow.italic.bold(Text);
  logger.info(TShow, Show);
};

module.exports = {
  logger,
  setLogLevel,
  ShowRed,
  ShowBlue,
  ShowGreen,
  ShowYellow,
};
