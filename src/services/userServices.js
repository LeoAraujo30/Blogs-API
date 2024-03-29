const { User } = require('../models');

const addUser = async ({ displayName, email, password, image = null }) => {
  const result = await User.create({ displayName, email, password, image });
  return result;
};

const getAllUser = async () => {
  const users = await User.findAll();
  const result = users.map((user) => {
    const { id, displayName, email, image } = user;
    return { id, displayName, email, image };
  });
  return result;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId);
  return user;
};

module.exports = { 
  addUser,
  getAllUser,
  getUserById,
};
