const { Category } = require('../models');

const addCategory = async ({ name }) => {
  const result = await Category.create({ name });
  return result;
};

// const getAllUser = async () => {
//   const users = await User.findAll();
//   const result = users.map((user) => {
//     const { id, displayName, email, image } = user;
//     return { id, displayName, email, image };
//   });
//   return result;
// };

module.exports = { 
  addCategory,
//   getAllUser,
};