const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
});

userSchema.methods.hashUserPassword = password => bcrypt.hashSync(password, 10);
module.exports = mongoose.model("user", userSchema);
