const express = require("express");
const router = express.Router();
const freeDetailsController = require("../controllers/free.details.controller");
var multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toLocaleString() + "_" + file.originalname);
  },
});

var upload = multer({ storage: storage });
router.post("/details/add",upload.single('profileImage'), freeDetailsController.addFreeDetails);
router.get("/details/:id", freeDetailsController.getFreeDetails);
module.exports = router;
