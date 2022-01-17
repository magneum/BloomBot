var mongoose = require("mongoose");
var GreetingMizukiSchema = new mongoose.Schema({
  serverID: String,
  message: String,
});
module.exports = mongoose.model("Greeting", GreetingMizukiSchema);
