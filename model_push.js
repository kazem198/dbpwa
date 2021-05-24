const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  endpoint: String, // String is shorthand for {type: String}
  auth: String,
  p256dh: String,
});
const Model_push = mongoose.model("Model_push", schema);

module.exports = Model_push;
