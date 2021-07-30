const mongoose = require("mongoose");

const ClientDetails = new mongoose.Schema({
  theme: { type: String, default: "" },
  country: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  city: { type: String, default: "" },
  desc: { type: String, default: "" },
  Objectives: { type: String, default: "" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  profileImage:{type:String,default:""}
});

module.exports = mongoose.model("ClientDetails", ClientDetails);
