const { User, BlogPost, Category, PostCategory } = require('../models');

const addPost = async ({ title, content, categoryIds }, email) => {
  const { id: userId } = await User.findOne({ where: { email } });
  const date = new Date();
  const post = await BlogPost.create(
    { title, content, userId, published: date, updated: date },
  );
  categoryIds.forEach(async (id) => {
    await PostCategory.create({ postId: post.id, categoryId: id });
  });
  return post;
};

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

const getPostById = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = { 
  addPost,
  getAllPosts,
  getPostById,
};
