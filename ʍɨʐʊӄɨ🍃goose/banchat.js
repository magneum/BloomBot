var mongoose = require("mongoose");
var BanchatMizukiSchema = new mongoose.Schema({
  ID: String,
});
module.exports = mongoose.model("Banchat", BanchatMizukiSchema);
