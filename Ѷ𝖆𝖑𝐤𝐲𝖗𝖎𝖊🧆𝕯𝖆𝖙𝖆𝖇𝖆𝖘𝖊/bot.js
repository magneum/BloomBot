let mongoose = require("mongoose");
let groupSchema = new mongoose.Schema({
  chatbot: { type: String, default: "false" },
});
let bot = mongoose.model("Bot", groupSchema);
module.exports = bot;
