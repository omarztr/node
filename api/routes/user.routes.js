const express = require("express");
const router = express.Router();
const verifToken = require("../../utils/verifToken");
const userController = require("../controllers/user.controller");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/", verifToken, userController.userList);

module.exports = router;
