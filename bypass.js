require(`dotenv`);
var cron = require("node-cron");
cron.schedule("0 */30 * * * *", async () => {
console.log("Rebootinng Vlkyre every 1hr!");
const Heroku = require(`heroku-client`);
var heroku = new Heroku({
token: process.env.HEROKU_API_KEY,
});
await heroku
.delete(`/apps/` + process.env.HEROKU_APP_NAME + `/dynos/` + `worker`)
.catch((error) => console.log(error));
});

// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
