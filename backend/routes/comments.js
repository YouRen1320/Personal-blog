const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');

// 创建评论
router.post('/', auth, async (req, res) => {
  try {
    const comment = new Comment({
      ...req.body,
      author: req.user._id
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 获取文章的所有评论
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate('author', 'username');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 更新评论
router.put('/:id', auth, async (req, res) => {
  try {
    const comment = await Comment.findOneAndUpdate(
      { _id: req.params.id, author: req.user._id },
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found or unauthorized' });
    }
    res.json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// 删除评论
router.delete('/:id', auth, async (req, res) => {
  try {
    const comment = await Comment.findOneAndDelete({
      _id: req.params.id,
      author: req.user._id
    });
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found or unauthorized' });
    }
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 