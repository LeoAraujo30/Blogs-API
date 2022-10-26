const { User, BlogPost, PostCategory } = require('../models');

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

// const getAllUser = async () => {
//   const users = await User.findAll();
//   const result = users.map((user) => {
//     const { id, displayName, email, image } = user;
//     return { id, displayName, email, image };
//   });
//   return result;
// };

// const getUserById = async (userId) => {
//   const user = await User.findByPk(userId);
//   return user;
// };

module.exports = { 
  addPost,
//   getAllUser,
//   getUserById,
};
