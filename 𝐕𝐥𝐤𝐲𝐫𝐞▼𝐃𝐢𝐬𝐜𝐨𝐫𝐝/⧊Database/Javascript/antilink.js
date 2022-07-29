const mongoose = require("mongoose");
const antilinkSchema = new mongoose.Schema({
  Guild_ID: String,
});
const antilinkModel = (module.exports = new mongoose.model(
  "antilink",
  antilinkSchema
));
