const mongoose = require("mongoose");
const channelSchema = new mongoose.Schema({
Channel_ID: String,
Guild_ID: String,
});
const channelModel = (module.exports = mongoose.model(
"channelupdates",
channelSchema
));
