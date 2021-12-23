const Cooldown = require("node-cooldown");

var cooldown = new Cooldown(5000);

console.log(
  cooldown.check(
    "some ID. note it should be unique and dosend change; type: any"
  )
);

setTimeout(() => {
  console.log(
    cooldown.check(
      "some ID. note it should be unique and dosend change; type: any"
    )
  );
}, 500);
