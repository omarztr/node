const express = require("express");
const router = express.Router();
const verifToken = require("../../utils/verifToken");
const postController = require("../controllers/posts.controller");
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
router.post("/add", upload.single("attachment"), postController.addANewPost);
router.put("/edit/:id", verifToken, postController.updatePost);
router.delete("/delete/:id", verifToken, postController.deletePost);
router.get("/", verifToken, postController.getTimeLinePost);
router.get("/:categ", verifToken, postController.getPostByCateg);
router.get("/myoffre/:id", verifToken, postController.getPostsByUser);
router.get("/offre/:id", verifToken, postController.getPostById);
router.post("/add/comment/:id", verifToken, postController.addComment);
router.delete(
  "/delete/comment/:postId/:commentid",
  verifToken,
  postController.deleteAComment
);
module.exports = router;
