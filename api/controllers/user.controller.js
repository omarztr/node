const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");
const registerUser = async (req, res) => {
  let { nom, prenom, username, email, password, role, dateofbirth } = req.body;
  try {
    let existUser = await User.findOne({ email: email });
    if (existUser) {
      res.status(500).json({
        success: false,
        message: "Email existant",
      });
    } else {
      let hash = await bcrypt.hash(password, 10);
      let newUser = new User({
        nom,
        prenom,
        username,
        email,
        role,
        dateofbirth,
        password: hash,
      });
      let result = await newUser.save();
      res.status(200).json({
        success: true,
        message: result,
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};
const loginUser = async (req, res) => {
  let { email, password } = req.body;
  console.log("password", password);
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      let verif = await bcrypt.compare(password, user.password);
      if (verif) {
        let token = jwt.sign({ user: user._id }, config.SECRET);
        res.status(200).json({
          success: true,
          token: token,
          role:user.role, 
          userId:user._id
        });
      } else {
        res.status(200).json({
          success: false,
          message: "Mot de passe incorrecte",
        });
      }
    } else {
      res.status(200).json({
        success: false,
        message: "Email Inexistant",
      });
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};
const userList = async (req, res) => {
  let userList = await User.find({});
  res.status(200).json({
    success: false,
    message: userList,
  });
};
// const addUserDetails = async (req,res)=>{
//   let {userDetails} = req.body ; 
//   let result = await 
// }
module.exports = {
  registerUser,
  loginUser,
  userList,
 
};
