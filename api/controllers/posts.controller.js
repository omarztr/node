const Post = require("../../models/Post");

const addANewPost = async (req, res) => {
  let { userId, desc, skils, category, level, title, terme, budget } = req.body;
  let file = req.file.path;
  const newPost = new Post({
    userId,
    desc,
    skils,
    category,
    level,
    title,
    terme,
    budget,
    attachmentPath: file,
  });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    await post.updateOne({ $set: req.body });
    res.status(200).json({
      success: true,
      message: "the post has been updated",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "the post has been deleted",
      success: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTimeLinePost = async (req, res) => {
  try {
    let allPosts = await Post.find({})
      .populate("userId")
      .populate("comments.userID");
    res.json({
      succes: true,
      messages: allPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
const getPostByCateg = async (req, res) => {
  try {
    let { categ } = req.params;
    let allPosts = await Post.find({ category: categ })
      .populate("userId")
      .populate("comments.userID");
    res.json({
      succes: true,
      messages: allPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getPostsByUser = async (req, res) => {
  console.log("req.params.id",req.params.id) ;
  let posts = await Post.find({
    userId: req.params.id,
  })
    .populate("userId")
    .populate("comments.userID");
  res.json({
    succes: true,
    messages: posts,
  });
};

const addComment = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    const newComment = {
      text: req.body.text,
      userID: req.body.id,
    };
    //Add to comments array
    post.comments.unshift(newComment);

    //Save
    let result = await post.save();
    res.status(200).json({
      success: true,
      message: result,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const deleteAComment = async (req, res) => {
  let post = await Post.findById(req.params.postId);
  let comments = post.comments;
  let newComments = comments.filter((elm) => elm._id != req.params.commentid);
  let result = await Post.findByIdAndUpdate(req.params.postId, {
    comments: newComments,
  });
  res.status(200).json({ success: true, message: result });
};

const getPostById = async (req, res) => {
  let post = await Post.findById(req.params.id).populate("userId").populate("comments.userID");
  res.status(200).json({ success: true, message: post });
};
module.exports = {
  deleteAComment,
  addComment,
  getPostsByUser,
  getTimeLinePost,
  deletePost,
  updatePost,
  addANewPost,
  getPostByCateg,
  getPostById,
};
