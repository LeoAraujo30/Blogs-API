const { User } = require('../models');

const addUser = async ({ displayName, email, password, image = null }) => {
  const result = await User.create({ displayName, email, password, image });
  console.log(result);
  return result;
};

module.exports = { 
  addUser,
};