const mongoose = require("mongoose");
const User = require("./User");

const FreeDetails = new mongoose.Schema({
  level: { type: String, default: "" },
  country: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  city: { type: String, default: "" },
  desc: { type: String, default: "" },
  experience: { type: String, default: "" },
  formation: { type: String, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  profileImage:{type:String , default:""}
});

module.exports = mongoose.model("FreeDetails", FreeDetails);
