require(`dotenv`);
var cron = require("node-cron");
cron.schedule("* */1 * * *", () => {
console.log("Rebootinng Vlkyre every 1hr!");
const Heroku = require(`heroku-client`);
var heroku = new Heroku({
token: process.env.HEROKU_API_KEY,
});
await heroku
.delete(`/apps/` + process.env.HEROKU_APP_NAME + `/dynos/` + `worker`)
.catch((error) => console.log(error));
});
