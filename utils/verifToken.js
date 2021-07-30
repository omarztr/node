const jwt = require("jsonwebtoken");
const config = require("../config/config");

const verifToken = (req, res, next) => {
  if (!req.headers["x-access-token"]) {
    res.status(401).json({
      success: false,
      message: "Non Authentifié ",
    });
  } else {
    try {
      let token = req.headers["x-access-token"];
      let verif = jwt.verify(token, config.SECRET);
      if (!verif) {
        res.status(401).json({
          success: false,
          message: "Token Invalide",
        });
      } else {
        next();
      }
    } catch (e) {
      res.status(401).json({
        success: false,
        message: "Token Invalide",
      });
    }
   
  }
};

module.exports = verifToken;
