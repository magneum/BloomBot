var mongoose = require("mongoose");
var AntilinkSakuraSchema = new mongoose.Schema({
  serverID: String,
  value: String,
});
module.exports = mongoose.model("Antilink", AntilinkSakuraSchema);
