const express = require("express");
const router = express.Router();
const comments = require("../controllers/comments_controller");


router.post("/",comments.createComment); 
router.get("/", comments.getComments); 
router.get("/:postId", comments.getCommentsByPost); 
router.put("/:id", comments.updateComment); 
router.delete("/:id", comments.deleteComment); 

module.exports = router;
