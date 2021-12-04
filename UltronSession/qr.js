const con = require("./sessionString.js");
async function generateStringSession() {
  try {
    await con.saveSession();
  } catch (err) {
    console.log("Stopped.");
    process.exit(1);
  }
}
generateStringSession();