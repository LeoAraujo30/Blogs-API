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

// const getUserById = async (req, res) => {
//   try {
//     const result = await services.getUserById(Number(req.params.id));
//     if (!result) {
//       res.status(404).json({ message: 'User does not exist' });
//     } else {
//       const { id, displayName, email, image } = result;
//       return res.status(200).json({ id, displayName, email, image });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
  
module.exports = {
  addPost,
  getAllPosts,
//   getUserById,
};