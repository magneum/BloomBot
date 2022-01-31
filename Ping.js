const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
console.log(Ping);
