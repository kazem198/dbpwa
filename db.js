const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/pwa", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to mongo db");
  });
