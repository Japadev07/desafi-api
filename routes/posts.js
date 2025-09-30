const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Criar postagem
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar postagens
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('userId').populate('categoryId');
  res.json(posts);
});

module.exports = router;
