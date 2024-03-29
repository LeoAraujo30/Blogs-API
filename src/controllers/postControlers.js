const services = require('../services/postServices');

const addPost = async (req, res) => {
  try {
    const result = await services.addPost(req.body, req.decoded.data.email);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const result = await services.getAllPosts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const result = await services.getPostById(Number(req.params.id));
    if (!result) {
      res.status(404).json({ message: 'Post does not exist' });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const result = await services.updatePost(Number(req.params.id), req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  updatePost,
};