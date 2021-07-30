const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  role: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    type: String,
    required: true,
  },
  email: {
    type: String,
    type: String,
    required: true,
  },
  password: {
    type: String,
    type: String,
    required: true,
  },
  dateofbirth: {

    type: String,
    required: true,
  },

});

const User = mongoose.model("User", UserSchema);
module.exports = User;
