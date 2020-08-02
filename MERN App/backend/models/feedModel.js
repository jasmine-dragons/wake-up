const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  theme: { type: String, required: true },
  link: { type: String, required: true },
  action: { type: Boolean, required: true },
});
feed = mongoose.model("feed", feedSchema);
module.exports = feed;
