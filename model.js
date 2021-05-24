const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}

  note: String,

  date: { type: Date, default: Date.now },
});
const Notes = mongoose.model("Notes", schema);

module.exports = Notes;
