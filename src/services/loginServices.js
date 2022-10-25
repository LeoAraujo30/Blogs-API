const { User } = require('../models');

const makeLogin = async ({ email }) => {
  const result = await User.findOne({ where: { email } });
  return result;
};

module.exports = { 
  makeLogin,
};