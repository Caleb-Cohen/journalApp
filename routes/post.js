﻿const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/post");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.post("/createComment", upload.single("file"), postsController.createComment);

router.post("/createStory", postsController.createStory)

router.put("/likePost/:id", postsController.likePost);
// router.put("/likePost", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

router.delete("/deleteComment/:id", postsController.deleteComment);

module.exports = router;