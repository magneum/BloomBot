var mongoose = require("mongoose");
var AntilinkMizukiSchema = new mongoose.Schema({
  serverID: String,
  value: String,
});
module.exports = mongoose.model("Antilink", AntilinkMizukiSchema);
