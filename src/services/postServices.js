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

// const getUserById = async (userId) => {
//   const user = await User.findByPk(userId);
//   return user;
// };

module.exports = { 
  addPost,
  getAllPosts,
//   getUserById,
};
