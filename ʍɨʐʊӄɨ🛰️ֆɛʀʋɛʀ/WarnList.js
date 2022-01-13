var mongoose = require("mongoose");
var WarnMizukiSchema = new mongoose.Schema({
  did: String,
  serverID: String,
  warns: Number,
});
module.exports = mongoose.model("WarnMizuki", WarnMizukiSchema);
