const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/messenger",
  { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true },
  err => {
    if (err) {
      console.log("something went wrong");
    } else {
      console.log("yeah it works well");
    }
  }
);
